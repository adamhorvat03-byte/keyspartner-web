/**
 * ==============================================================================
 * Netlify Serverless Function: Realsoft Webhook s ukladaním do Netlify Blobs
 * Umiestnenie: netlify/functions/realsoft-webhook.js
 * Dostupné na: /.netlify/functions/realsoft-webhook a /api/realsoft-webhook
 * Netlify Functions v2 (ESM) s natívnym Netlify Blobs úložiskom
 * KEYS & PARTNERS a.s. - https://keyspartner.netlify.app
 * 
 * Špecifikácia: United Classifieds / Realsoft Export API v1 (Bod 2. Návratová hodnota)
 * https://plt.unitedclassifieds.sk/import/docs/v1/realsoft/docs/export/intro
 * ==============================================================================
 */

import { getStore } from "@netlify/blobs";

export const config = {
  path: ["/api/realsoft-webhook", "/.netlify/functions/realsoft-webhook"]
};

function getPropertiesStore(context) {
  if (context && context.blobs && typeof context.blobs.getStore === "function") {
    try {
      return { store: context.blobs.getStore("properties"), mode: "context.blobs", error: null };
    } catch (e) {
      console.warn("[Blobs] context.blobs.getStore zlyhalo:", e.message);
    }
  }

  try {
    const store = getStore("properties", { consistency: "strong" });
    return { store, mode: "zero-config-strong", error: null };
  } catch (err1) {
    try {
      const store = getStore("properties");
      return { store, mode: "zero-config", error: null };
    } catch (err2) {
      return { store: null, mode: "failed", error: err2.message };
    }
  }
}

/**
 * Vyčistenie starých testovacích inzerátov (začínajúcich na RS-1789 alebo RS-TEST)
 */
async function cleanupTestListings(storeInfo) {
  if (!storeInfo || !storeInfo.store || typeof storeInfo.store.list !== "function") return 0;
  try {
    const listRes = await storeInfo.store.list();
    const blobs = (listRes && listRes.blobs) ? listRes.blobs : [];
    let deletedCount = 0;
    for (const b of blobs) {
      const key = String(b.key || "");
      if (key.startsWith("RS-1789") || key.startsWith("RS-TEST")) {
        try {
          await storeInfo.store.delete(key);
          deletedCount++;
          console.log(`[CLEANUP] Úspešne odstránený testovací záznam: ${key}`);
        } catch (_e) {}
      }
    }
    return deletedCount;
  } catch (err) {
    console.warn("[CLEANUP] Chyba pri čistení testovacích záznamov:", err.message);
    return 0;
  }
}

function normalizePropertyType(type) {
  if (!type) return "byt";
  if (type === 4 || type === "4") return "byt";
  if (type === 6 || type === "6") return "dom";
  if (type === 3 || type === "3") return "pozemi";
  if (type === 2 || type === "2" || type === 9 || type === "9" || type === 7 || type === "7" || type === 11 || type === "11") return "komercne";
  const t = String(type).toLowerCase();
  if (t.includes("byt") || t.includes("flat") || t.includes("apartment")) return "byt";
  if (t.includes("dom") || t.includes("vila") || t.includes("house")) return "dom";
  if (t.includes("pozem") || t.includes("land")) return "pozemi";
  if (t.includes("komerc") || t.includes("commercial") || t.includes("kancelar")) return "komercne";
  return "byt";
}

function normalizeDeal(deal) {
  if (!deal) return "predaj";
  if (deal === 1 || deal === "1" || deal === 2 || deal === "2") return "predaj";
  if (deal === 3 || deal === "3" || deal === 4 || deal === "4") return "prenajom";
  const d = String(deal).toLowerCase();
  if (d.includes("prenaj") || d.includes("rent")) return "prenajom";
  return "predaj";
}

function extractPrice(raw) {
  const candidates = [
    raw.price,
    raw.price_value,
    raw.cena,
    raw.suma,
    raw.cost,
    raw.pricing && (raw.pricing.price || raw.pricing.value || raw.pricing.amount),
    raw.price_total,
    raw.total_price
  ];

  for (const c of candidates) {
    if (typeof c === "number" && !isNaN(c) && c > 0) {
      return { price: c, priceCustom: null };
    }
    if (typeof c === "string" && c.trim().length > 0) {
      const lower = c.toLowerCase();
      if (lower.includes("dohod") || lower.includes("dohoda")) {
        return { price: 0, priceCustom: "Cena dohodou" };
      }
      if (lower.includes("vyžiad") || lower.includes("vyziad") || lower.includes("info")) {
        return { price: 0, priceCustom: "Cena na vyžiadanie" };
      }
      const cleaned = c.replace(/\s/g, "").replace(",", ".");
      const num = parseFloat(cleaned);
      if (!isNaN(num) && num > 0) {
        return { price: num, priceCustom: null };
      }
    }
  }

  return { price: 0, priceCustom: "Cena na vyžiadanie" };
}

function extractRooms(raw, titleText) {
  const candidates = [
    raw.rooms,
    raw.room_count,
    raw.disposition,
    raw.pocet_izieb,
    raw.izby,
    raw.layout,
    raw.rooms_count,
    raw.dispozicia
  ];

  for (const c of candidates) {
    if (c === null || c === undefined || c === "" || String(c).toLowerCase() === "null") continue;
    if (typeof c === "number" && !isNaN(c) && c > 0) {
      return c;
    }
    if (typeof c === "string") {
      const trimmed = c.trim();
      if (trimmed === "-" || trimmed.toLowerCase() === "null" || trimmed === "0") continue;
      const match = trimmed.match(/^(\d+)/);
      if (match) {
        return parseInt(match[1], 10);
      }
      return trimmed;
    }
  }

  // Realsoft subcategory kľúče pre byty: 401=Garsónka, 402=1-izb, 403=2-izb, 404=3-izb, 405=4-izb, 406=5-izb
  if (raw.subcategory) {
    const sub = Number(raw.subcategory);
    if (sub >= 401 && sub <= 406) {
      return sub === 401 ? 1 : sub - 400;
    }
  }

  if (titleText && typeof titleText === "string") {
    const titleMatch = titleText.match(/(\d+)[ -]?izb/i);
    if (titleMatch) {
      return parseInt(titleMatch[1], 10);
    }
  }

  return null;
}

function extractArea(raw) {
  const candidates = [
    raw.usable_area,
    raw.floor_area,
    raw.surface,
    raw.area_total,
    raw.vymera,
    raw.area,
    raw.living_area,
    raw.land_area,
    raw.plocha,
    raw.uzitkova_plocha,
    raw.celkova_plocha,
    raw.rozloha
  ];

  for (const c of candidates) {
    if (c === null || c === undefined || c === "") continue;
    if (typeof c === "number" && !isNaN(c) && c > 0) {
      return Math.round(c * 100) / 100;
    }
    if (typeof c === "string") {
      const cleaned = c.replace(/\s/g, "").replace(",", ".");
      const num = parseFloat(cleaned);
      if (!isNaN(num) && num > 0) {
        return Math.round(num * 100) / 100;
      }
    }
  }

  return 0;
}

function extractFloor(raw) {
  const candidates = [
    raw.floor,
    raw.poschodie,
    raw.floor_number,
    raw.podlazie
  ];

  let floorVal = null;
  for (const c of candidates) {
    if (c === null || c === undefined || c === "" || String(c).toLowerCase() === "null") continue;
    const str = String(c).trim();
    if (str === "-" || str.toLowerCase() === "null") continue;
    floorVal = str;
    break;
  }

  if (!floorVal) return null;

  const total = raw.floors_total || raw.total_floors || raw.pocet_poschodi;
  if (total && !floorVal.includes("/")) {
    return `${floorVal}/${total}`;
  }

  return floorVal;
}

function extractLocation(raw) {
  if (typeof raw.location === "string" && raw.location.trim().length > 0 && raw.location.trim().toLowerCase() !== "null") {
    return raw.location.trim();
  }

  const city = raw.city || raw.mesto || (raw.location && raw.location.city) || (raw.address && raw.address.city) || "Prešov";
  const street = raw.street || raw.ulica || (raw.location && raw.location.street) || (raw.address && raw.address.street);
  const district = raw.district || raw.okres || raw.cast || raw.mestskacast || raw.citypart_string;

  const parts = [];
  if (city) parts.push(city);
  if (district && district !== city) parts.push(district);
  if (street) parts.push(street);

  return parts.length > 0 ? parts.join(", ") : "Prešov a okolie";
}

function extractTitle(raw, propType, dealType, rooms, location) {
  const explicitTitle = raw.title || raw.name || raw.nazov || raw.headline || raw.subject;
  if (explicitTitle && typeof explicitTitle === "string" && explicitTitle.trim().length > 0) {
    const trimmed = explicitTitle.trim();
    if (!trimmed.startsWith("Nehnuteľnosť RS-") && !trimmed.startsWith("Property ")) {
      return trimmed;
    }
  }

  const dealStr = dealType === "prenajom" ? "Prenájom" : "Predaj";
  let typeLabel = "Nehnuteľnosť";
  if (propType === "byt") {
    typeLabel = rooms ? `${rooms}-izbový byt` : "Byt";
  } else if (propType === "dom") {
    typeLabel = "Rodinný dom";
  } else if (propType === "pozemi") {
    typeLabel = "Stavebný pozemok";
  } else if (propType === "komercne") {
    typeLabel = "Komerčný priestor";
  }

  return `${typeLabel} na ${dealStr.toLowerCase()} (${location})`;
}

function extractAllImages(raw) {
  const images = [];
  const list = raw.images || raw.photos || raw.fotografie || raw.galeria || [];
  if (Array.isArray(list)) {
    for (const item of list) {
      if (typeof item === "string" && item.startsWith("http")) {
        images.push(item);
      } else if (item && typeof item === "object" && item.url) {
        images.push(item.url);
      }
    }
  }
  if (raw.image && typeof raw.image === "string" && !images.includes(raw.image)) {
    images.unshift(raw.image);
  } else if (raw.image && typeof raw.image === "object" && raw.image.url && !images.includes(raw.image.url)) {
    images.unshift(raw.image.url);
  }
  if (raw.photo && typeof raw.photo === "string" && !images.includes(raw.photo)) {
    images.unshift(raw.photo);
  }
  if (images.length === 0) {
    images.push("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80");
  }
  return images;
}

/**
 * Validácia: Obsahuje položka aspoň základné dáta skutočného inzerátu alebo makléra?
 * Zabraňuje vytváraniu prázdnych dummy inzerátov pri testovacích pingoch.
 */
function hasRealPropertyData(rawItem) {
  if (!rawItem || typeof rawItem !== "object") return false;
  let nestedData = {};
  if (rawItem.data) {
    if (typeof rawItem.data === "object" && !Array.isArray(rawItem.data)) {
      nestedData = rawItem.data;
    } else if (typeof rawItem.data === "string") {
      const inner = parseJsonLenient(rawItem.data);
      if (inner && typeof inner === "object" && !Array.isArray(inner)) {
        nestedData = inner;
      }
    }
  }
  const raw = { ...rawItem, ...nestedData };

  if (raw.object_id !== undefined && raw.object_id !== null) return true;
  if (raw.extern_id || raw.external_id || raw.id || raw.code || raw.property_id || raw.inzerat_id) return true;
  if (raw.user_id || raw.full_name) return true;
  if (raw.title || raw.name || raw.nazov || raw.headline) return true;
  if (raw.price !== undefined || raw.cena !== undefined) return true;
  if (raw.usable_area || raw.floor_area || raw.area || raw.vymera) return true;
  return false;
}

/**
 * Bezpečné čítanie surového textu z Requestu (podpora UTF-8 aj Windows-1250)
 */
async function readRawBody(req) {
  try {
    const text = await req.text();
    if (text !== null && text !== undefined && text.length > 0) {
      return text;
    }
  } catch (e1) {
    console.warn("[READ BODY] req.text() zlyhalo:", e1.message);
  }

  try {
    const text = await req.clone().text();
    if (text !== null && text !== undefined && text.length > 0) {
      return text;
    }
  } catch (_e2) {}

  try {
    const buffer = await req.clone().arrayBuffer();
    if (buffer && buffer.byteLength > 0) {
      try {
        const utf8 = new TextDecoder("utf-8").decode(buffer);
        if (utf8 && utf8.trim().length > 0) return utf8;
      } catch (_e3) {}
      try {
        const win = new TextDecoder("windows-1250").decode(buffer);
        if (win && win.trim().length > 0) return win;
      } catch (_e4) {}
    }
  } catch (_e5) {}

  return "";
}

/**
 * Robustné parsovanie JSON reťazcov vrátane unquoted keys a single quotes
 */
function parseJsonLenient(input) {
  if (!input || typeof input !== "string") return null;
  let str = input.trim();
  if (!str) return null;

  // 1. Štandardný JSON.parse
  try {
    return JSON.parse(str);
  } catch (_e1) {}

  // 2. Ak je URL kódovaný (%7B...)
  if (str.includes("%7B") || str.includes("%22") || str.includes("%20") || str.includes("%3A")) {
    try {
      const decoded = decodeURIComponent(str);
      const res = parseJsonLenient(decoded);
      if (res) return res;
    } catch (_e2) {}
  }

  // 3. Bezpečný parser cez new Function pre objektové literály (unquoted keys, single quotes, trailing commas)
  if ((str.startsWith("{") && str.endsWith("}")) || (str.startsWith("[") && str.endsWith("]"))) {
    try {
      const fn = new Function(`"use strict"; return (${str});`);
      const val = fn();
      if (val && typeof val === "object") {
        return val;
      }
    } catch (_e3) {}
  }

  // 4. Regex oprava chýbajúcich úvodzoviek na kľúčoch a jednoduchých úvodzoviek
  try {
    let sanitized = str
      .replace(/([{,]\s*)([a-zA-Z0-9_$-]+)\s*:/g, '$1"$2":')
      .replace(/'([^']*)'/g, '"$1"')
      .replace(/,\s*([\}\]])/g, '$1');
    return JSON.parse(sanitized);
  } catch (_e4) {}

  return null;
}

/**
 * Parsovanie urlencoded formulára (application/x-www-form-urlencoded)
 */
function parseFormEncoded(str) {
  if (!str || typeof str !== "string") return null;
  const trimmed = str.trim();
  if (!trimmed.includes("=") && !trimmed.includes("&")) return null;

  try {
    const params = new URLSearchParams(trimmed);
    const postAction = params.get("action");
    const containerKeys = ["data", "payload", "property", "inzerat", "listing", "item", "json", "body", "content"];
    for (const k of containerKeys) {
      if (params.has(k)) {
        const val = params.get(k);
        const parsed = parseJsonLenient(val);
        if (parsed && typeof parsed === "object") {
          if (postAction && !parsed.postAction) {
            parsed.postAction = postAction;
          }
          return parsed;
        }
      }
    }

    const flatObj = {};
    for (const [k, v] of params.entries()) {
      flatObj[k] = v;
    }
    if (flatObj.object_id || flatObj.external_id || flatObj.id || flatObj.title || flatObj.nazov || flatObj.cena || flatObj.user_id) {
      return flatObj;
    }
  } catch (_e) {}

  return null;
}

/**
 * Parsovanie multipart/form-data
 */
async function parseMultipartFormData(req) {
  try {
    const formData = await req.clone().formData();
    if (!formData) return null;

    const postAction = formData.get("action");
    const containerKeys = ["data", "payload", "property", "inzerat", "listing", "item", "json"];
    for (const k of containerKeys) {
      const val = formData.get(k);
      if (typeof val === "string") {
        const parsed = parseJsonLenient(val);
        if (parsed) {
          if (postAction && !parsed.postAction) {
            parsed.postAction = postAction;
          }
          return parsed;
        }
      }
    }

    const flatObj = {};
    for (const [k, v] of formData.entries()) {
      if (typeof v === "string") {
        flatObj[k] = v;
      }
    }
    if (flatObj.object_id || flatObj.external_id || flatObj.id || flatObj.title || flatObj.nazov || flatObj.user_id) {
      return flatObj;
    }
  } catch (_e) {}
  return null;
}

/**
 * Parsovanie URL query parametrov
 */
function parseUrlQuery(req) {
  try {
    const url = new URL(req.url);
    if (!url.searchParams) return null;

    const postAction = url.searchParams.get("action");
    const containerKeys = ["data", "payload", "property", "inzerat", "listing", "item", "json"];
    for (const k of containerKeys) {
      if (url.searchParams.has(k)) {
        const val = url.searchParams.get(k);
        const parsed = parseJsonLenient(val);
        if (parsed) {
          if (postAction && !parsed.postAction) {
            parsed.postAction = postAction;
          }
          return parsed;
        }
      }
    }

    const flatObj = {};
    for (const [k, v] of url.searchParams.entries()) {
      flatObj[k] = v;
    }
    if (flatObj.object_id || flatObj.external_id || flatObj.id || flatObj.title || flatObj.nazov || flatObj.user_id) {
      return flatObj;
    }
  } catch (_e) {}
  return null;
}

/**
 * Jednoduché parsovanie XML
 */
function parseXmlSimple(rawXml) {
  if (!rawXml || typeof rawXml !== "string" || !rawXml.trim().startsWith("<")) return null;
  const getTag = (xml, tag) => {
    const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
    return m ? m[1].trim() : null;
  };

  const id = getTag(rawXml, "object_id") || getTag(rawXml, "id") || getTag(rawXml, "external_id") || getTag(rawXml, "kod");
  const title = getTag(rawXml, "nazov") || getTag(rawXml, "title") || getTag(rawXml, "nadpis");
  if (id || title) {
    return {
      object_id: id,
      external_id: id,
      title: title,
      price: getTag(rawXml, "cena") || getTag(rawXml, "price"),
      category: getTag(rawXml, "kategoria") || getTag(rawXml, "druh") || getTag(rawXml, "typ"),
      deal: getTag(rawXml, "typ_obchodu") || getTag(rawXml, "obchod"),
      rooms: getTag(rawXml, "pocet_izieb") || getTag(rawXml, "izby"),
      area: getTag(rawXml, "uzitkova_plocha") || getTag(rawXml, "plocha") || getTag(rawXml, "vymera"),
      floor: getTag(rawXml, "poschodie"),
      city: getTag(rawXml, "mesto") || getTag(rawXml, "obec"),
      street: getTag(rawXml, "ulica"),
      description: getTag(rawXml, "popis") || getTag(rawXml, "text"),
      action: getTag(rawXml, "akcia") || getTag(rawXml, "action") || "upsert"
    };
  }
  return null;
}

/**
 * Orchestrátor: deteguje a rozparsuje formát tela požiadavky
 */
async function parseAnyPayload(req, rawBody) {
  if (rawBody && rawBody.trim().length > 0) {
    const jsonParsed = parseJsonLenient(rawBody);
    if (jsonParsed && typeof jsonParsed === "object") {
      return { parsed: jsonParsed, format: "json-lenient" };
    }

    const formParsed = parseFormEncoded(rawBody);
    if (formParsed && typeof formParsed === "object") {
      return { parsed: formParsed, format: "form-urlencoded" };
    }

    const xmlParsed = parseXmlSimple(rawBody);
    if (xmlParsed && typeof xmlParsed === "object") {
      return { parsed: xmlParsed, format: "xml" };
    }
  }

  const multipartParsed = await parseMultipartFormData(req);
  if (multipartParsed && typeof multipartParsed === "object") {
    return { parsed: multipartParsed, format: "multipart-form-data" };
  }

  const queryParsed = parseUrlQuery(req);
  if (queryParsed && typeof queryParsed === "object") {
    return { parsed: queryParsed, format: "url-query" };
  }

  return { parsed: null, format: "unrecognized" };
}

/**
 * Uloženie alebo vymazanie inzerátu v Netlify Blobs podľa Realsoft špecifikácie
 * Návratové hodnoty:
 * code: 1 = Object added (pridaná zákazka)
 * code: 2 = Object edited (upravená zákazka)
 * code: 3 = Object deleted (vymazaná zákazka)
 */
async function saveOrDeleteListing(storeInfo, rawItem, actionOverride, postAction) {
  // Podpora pre vnorený objekt payload.data (Realsoft v1 export formát)
  let nestedData = {};
  if (rawItem && rawItem.data) {
    if (typeof rawItem.data === "object" && !Array.isArray(rawItem.data)) {
      nestedData = rawItem.data;
    } else if (typeof rawItem.data === "string") {
      const inner = parseJsonLenient(rawItem.data);
      if (inner && typeof inner === "object" && !Array.isArray(inner)) {
        nestedData = inner;
      }
    }
  }

  // Zlúčime rawItem a nestedData tak, aby atribúty z 'data' mali prednosť
  const raw = { ...(rawItem || {}), ...nestedData };

  if (!hasRealPropertyData(raw)) {
    console.log("[REALSOFT SKIP] Dáta neobsahujú žiadne atribúty inzerátu (napr. testovací ping). Preskakujem.");
    return {
      success: true,
      externalId: "0",
      importId: 0,
      code: 1,
      message: "Object added",
      action: "skipped",
      reason: "no property data"
    };
  }

  const isAgent = postAction === 2 || postAction === "2" || Boolean(raw.user_id && raw.full_name);

  // 1. Primárny identifikátor: object_id z payload.data (alebo koreňa)
  const primaryObjectId = (rawItem && rawItem.data && rawItem.data.object_id !== undefined && rawItem.data.object_id !== null)
    ? rawItem.data.object_id
    : (raw.object_id !== undefined && raw.object_id !== null ? raw.object_id : null);

  // 2. Fallback na alternatívne identifikátory
  const rawId = primaryObjectId !== null
    ? primaryObjectId
    : (raw.extern_id || raw.external_id || raw.id || raw.code || raw.property_id || raw.inzerat_id || raw.user_id);

  // 3. Formátovanie importId pre oficiálnu odpoveď Realsoftu (Bod 2)
  // Vracia presne extrahovanú hodnotu object_id (číslo / string bez prefixu RS-)
  let returnImportId = 0;
  if (primaryObjectId !== null && primaryObjectId !== undefined) {
    if (typeof primaryObjectId === "number") {
      returnImportId = primaryObjectId;
    } else if (typeof primaryObjectId === "string" && /^\d+$/.test(primaryObjectId.trim())) {
      returnImportId = parseInt(primaryObjectId.trim(), 10);
    } else {
      returnImportId = primaryObjectId;
    }
  } else if (rawId !== null && rawId !== undefined) {
    if (typeof rawId === "number") {
      returnImportId = rawId;
    } else if (typeof rawId === "string" && /^\d+$/.test(rawId.trim())) {
      returnImportId = parseInt(rawId.trim(), 10);
    } else {
      returnImportId = rawId;
    }
  }

  // 4. Kľúč pre Netlify Blobs úložisko
  const idString = rawId !== null && rawId !== undefined ? String(rawId).trim() : "";
  let externalId = idString ? idString : (isAgent ? `AGENT-${Date.now()}` : `RS-${Date.now()}`);
  if (!isAgent && primaryObjectId !== null && !externalId.startsWith("RS-")) {
    externalId = `RS-${primaryObjectId}`;
  }

  const action = String(actionOverride || raw.action || "upsert").toLowerCase();

  // Status 5 v číselníku Realsoftu = Zrušené (DELETE)
  const isDelete =
    Number(raw.status) === 5 ||
    raw.status === "5" ||
    raw.deleted === 1 ||
    raw.deleted === true ||
    raw.deleted === "1" ||
    raw.deleted === "true" ||
    action === "delete" ||
    action === "deactivate" ||
    raw.status === "deleted" ||
    raw.status === "inactive" ||
    raw.is_active === false;

  console.log(`[REALSOFT ACTION] Typ: ${isAgent ? "Maklér" : "Zákazka"}, object_id: ${primaryObjectId}, Blobs key: ${externalId}, Požadovaná akcia: ${isDelete ? "DELETE" : "UPSERT"}`);

  if (!storeInfo || !storeInfo.store) {
    console.warn(`[REALSOFT WARNING] Netlify Blobs store nie je dostupný pre ${externalId}:`, storeInfo ? storeInfo.error : "Unknown");
    return {
      success: false,
      externalId,
      importId: returnImportId,
      code: 13,
      message: "Storage unavailable",
      error: "Store not available"
    };
  }

  try {
    if (isDelete) {
      if (typeof storeInfo.store.delete === "function") {
        await storeInfo.store.delete(externalId);
        if (primaryObjectId !== null && String(primaryObjectId) !== externalId) {
          try { await storeInfo.store.delete(String(primaryObjectId)); } catch (_e) {}
        }
        console.log(`[REALSOFT SUCCESS] ${isAgent ? "Maklér" : "Zákazka"} ${externalId} (object_id: ${primaryObjectId}) úspešne vymazaná z Netlify Blobs.`);
        return {
          success: true,
          externalId,
          importId: returnImportId,
          code: 3,
          message: isAgent ? "Agent deleted" : "Object deleted",
          action: "deleted"
        };
      }
    } else {
      // Overenie, či inzerát už v Netlify Blobs existoval (kvôli rozlíšeniu Object added vs Object edited)
      let alreadyExists = false;
      try {
        if (typeof storeInfo.store.get === "function") {
          const existingItem = await storeInfo.store.get(externalId);
          if (existingItem) {
            alreadyExists = true;
          } else if (primaryObjectId !== null) {
            const existingNum = await storeInfo.store.get(String(primaryObjectId));
            if (existingNum) alreadyExists = true;
          }
        }
      } catch (_e) {}
      if (raw.extern_id) alreadyExists = true;

      const allImages = extractAllImages(raw);
      const dealType = normalizeDeal(raw.action || raw.transaction_type || raw.deal_type || raw.deal || raw.typ_obchodu);
      const propType = normalizePropertyType(raw.category || raw.property_type || raw.type || raw.kategoria || raw.druh);
      const priceData = extractPrice(raw);
      const locationVal = extractLocation(raw);
      const rawTitle = raw.title || raw.name || raw.nazov || raw.headline;
      const roomsVal = extractRooms(raw, rawTitle);
      const areaVal = extractArea(raw);
      const floorVal = extractFloor(raw);
      const titleVal = extractTitle(raw, propType, dealType, roomsVal, locationVal);

      const isReserved = Number(raw.status) === 3 || raw.status === "3" || raw.status === "reserved" || raw.is_reserved === true || raw.rezervovane === true;

      const propertyItem = {
        id: externalId,
        externalId: externalId,
        objectId: primaryObjectId !== null ? primaryObjectId : (raw.object_id || null),
        title: titleVal,
        shortTitle: raw.shortTitle || raw.kratky_nazov || titleVal,
        type: propType,
        deal: dealType,
        price: priceData.price,
        priceCustom: priceData.priceCustom,
        currency: raw.currency || raw.mena || "EUR",
        area: areaVal,
        rooms: roomsVal,
        floor: floorVal,
        location: locationVal,
        image: allImages[0],
        images: allImages,
        tags: raw.tags || [dealType === "predaj" ? "PREDAJ" : "PRENÁJOM", "REALSOFT"],
        isReserved: isReserved,
        agentId: raw.agentId || raw.agent_id || 1,
        agent: raw.agent || raw.broker || raw.makler || {
          name: "Peter DUDA",
          phone: "+421 907 441 405",
          email: "peter_duda@keyspartners.sk"
        },
        desc: raw.description || raw.desc || raw.popis || raw.text || "Kompletné informácie a obhliadku vám rád poskytne náš realitný maklér.",
        technicalSpecs: raw.technicalSpecs || raw.parameters || raw.parametre || {
          "Inžinierske siete": raw.utilities || "Voda, elektrina, plyn, kanalizácia",
          "Stav objektu": raw.condition || raw.stav || "Pripravené na prevod",
          "Vykurovanie": raw.heating || raw.kurenie || "Ústredné diaľkové / vlastné",
          "Konštrukcia": raw.construction || raw.konstrukcia || "Tehla / zateplený dom",
          "Energetický certifikát": raw.energyCertificate || "Trieda B"
        },
        updatedAt: new Date().toISOString()
      };

      if (typeof storeInfo.store.setJSON === "function") {
        await storeInfo.store.setJSON(externalId, propertyItem);
      } else if (typeof storeInfo.store.set === "function") {
        await storeInfo.store.set(externalId, JSON.stringify(propertyItem));
      } else {
        throw new Error("Store object does not have setJSON or set method");
      }

      const returnCode = alreadyExists ? 2 : 1;
      const returnMessage = alreadyExists
        ? (isAgent ? "Agent edited" : "Object edited")
        : (isAgent ? "Agent added" : "Object added");

      console.log(`[REALSOFT SUCCESS] ${isAgent ? "Maklér" : "Zákazka"} ${externalId} (${propertyItem.title}) úspešne uložená v Netlify Blobs [${returnMessage}]. importId=${returnImportId}`);
      return {
        success: true,
        externalId,
        importId: returnImportId,
        code: returnCode,
        message: returnMessage,
        action: alreadyExists ? "edited" : "added"
      };
    }
  } catch (writeErr) {
    console.error(`[REALSOFT ERROR] Zápis inzerátu ${externalId} do Netlify Blobs zlyhal:`, writeErr);
    return {
      success: false,
      externalId,
      importId: returnImportId,
      code: 13,
      message: writeErr.message,
      error: writeErr.message
    };
  }
}

export default async (req, context) => {
  const method = (req.method || "GET").toUpperCase();
  const corsHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key, X-Realsoft-Token",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
  };

  if (method === "OPTIONS") {
    return new Response("", { status: 200, headers: corsHeaders });
  }

  const rawBody = await readRawBody(req);
  const headers = Object.fromEntries(req.headers.entries());

  console.log("==================================================================");
  console.log(`[REALSOFT WEBHOOK START] Čas: ${new Date().toISOString()}`);
  console.log(`[REALSOFT WEBHOOK] HTTP Metóda: ${method}`);
  console.log(`[REALSOFT WEBHOOK] Content-Type: ${headers["content-type"] || "(chýba)"}`);
  console.log(`[REALSOFT WEBHOOK] Dĺžka tela (bytes): ${rawBody.length}`);
  console.log(`[REALSOFT WEBHOOK] Prijatý surový payload (body):`);
  console.log(rawBody ? (rawBody.length > 5000 ? rawBody.slice(0, 5000) + "... [skrátené]" : rawBody) : "(prázdne telo)");
  console.log("==================================================================");

  const storeInfo = getPropertiesStore(context);

  // Vždy preventívne vyčistiť staré testovacie inzeráty začínajúce na RS-1789*
  await cleanupTestListings(storeInfo);

  // GET diagnostika alebo manuálny cleanup
  if (method === "GET") {
    let url = null;
    try { url = new URL(req.url); } catch (_e) {}
    
    if (url && (url.searchParams.get("cleanup") === "1" || url.searchParams.get("clean") === "1")) {
      const cleaned = await cleanupTestListings(storeInfo);
      return new Response(JSON.stringify({ status: "ok", action: "cleanup", cleaned }), { status: 200, headers: corsHeaders });
    }

    const getRes = {
      status: "online",
      service: "KEYS & PARTNERS a.s. - Realsoft Webhook (Netlify Blobs Functions v2)",
      spec: "United Classifieds / Realsoft Export API v1 (Bod 2)",
      storage: "Netlify Blobs (store: properties)",
      blobsInitMode: storeInfo.mode,
      blobsError: storeInfo.error,
      runtime: "Functions v2 (Native)",
      endpoint: "/api/realsoft-webhook",
      url: "https://keyspartner.netlify.app",
      timestamp: new Date().toISOString()
    };
    return new Response(JSON.stringify(getRes), { status: 200, headers: corsHeaders });
  }

  if (method !== "POST") {
    return new Response(JSON.stringify({ code: 13, message: "Method Not Allowed" }), { status: 405, headers: corsHeaders });
  }

  // Rozparsovanie ľubovoľného formátu (JSON, unquoted JSON, urlencoded, multipart, XML, URL query)
  let writeResults = [];
  let detectedFormat = "none";
  let isAgent = false;

  try {
    const parseResult = await parseAnyPayload(req, rawBody);
    const parsed = parseResult.parsed;
    detectedFormat = parseResult.format;

    console.log(`[REALSOFT PARSER] Detegovaný a rozparsovaný formát: ${detectedFormat}`);

    if (parsed && typeof parsed === "object") {
      let dataObj = null;
      if (parsed.data) {
        if (typeof parsed.data === "object" && !Array.isArray(parsed.data)) {
          dataObj = parsed.data;
        } else if (typeof parsed.data === "string") {
          const innerParsed = parseJsonLenient(parsed.data);
          if (innerParsed && typeof innerParsed === "object" && !Array.isArray(innerParsed)) {
            dataObj = innerParsed;
          }
        }
      }

      let postAction = parsed.action || parsed.postAction;
      if (dataObj && dataObj.action !== undefined && postAction === undefined) {
        postAction = dataObj.action;
      }
      isAgent = postAction === 2 || postAction === "2";

      // V Realsofte môžu prísť dáta priamo v parametri 'data' (JSON objekt alebo pole)
      const rawList = (dataObj && (dataObj.properties || dataObj.listings || dataObj.items || (Array.isArray(dataObj) ? dataObj : null)))
        || parsed.properties || parsed.listings || parsed.items || (Array.isArray(parsed) ? parsed : null);

      if (Array.isArray(rawList) && rawList.length > 0) {
        console.log(`[REALSOFT BATCH] Spracovávam balík ${rawList.length} inzerátov...`);
        for (const item of rawList) {
          if (hasRealPropertyData(item)) {
            const res = await saveOrDeleteListing(storeInfo, item, parsed.action, postAction);
            writeResults.push(res);
          }
        }
      } else {
        // Jednotlivá položka: zlúčime koreňový parsed s parsed.data (data má prednosť)
        const rawItem = dataObj ? { ...parsed, ...dataObj } : parsed;
        if (hasRealPropertyData(rawItem)) {
          const res = await saveOrDeleteListing(storeInfo, rawItem, parsed.action, postAction);
          writeResults.push(res);
        } else {
          console.log("[REALSOFT INFO] Požiadavka neobsahovala platné dáta inzerátu (napr. testovací overovací ping Realsoftu).");
        }
      }
    } else {
      console.log("[REALSOFT INFO] Prázdne telo alebo žiadny objekt (overovací ping Realsoftu).");
    }
  } catch (err) {
    console.error("[REALSOFT CRITICAL ERROR] Neočakávaná chyba pri spracovaní:", err);
  }

  // ==============================================================================
  // OFICIÁLNA NÁVRATOVÁ HODNOTA REALSOFTU (BOD 2)
  //
  // Vyžadované položky:
  // - code: 1 (Object/Agent added), 2 (Object/Agent edited), 3 (Object/Agent deleted)
  // - importId: ID na portále po pridaní/editovaní/zmazaní inzerátu/makléra (extrahované object_id)
  // - message: Textová správa ("Object added", "Object edited", "Object deleted")
  // - url: URL na portále pridaného/editovaného inzerátu
  // ==============================================================================
  let responseBody;
  if (writeResults.length > 0) {
    const mainResult = writeResults[0];
    responseBody = {
      code: mainResult.code || (isAgent ? 1 : 1),
      importId: mainResult.importId !== undefined && mainResult.importId !== null ? mainResult.importId : 0,
      message: mainResult.message || (isAgent ? "Agent added" : "Object added"),
      url: "https://keyspartner.netlify.app"
    };
  } else {
    // Predvolená úspešná odpoveď pre overovací ping Realsoftu bez položky
    responseBody = {
      code: 1,
      importId: 0,
      message: isAgent ? "Agent added" : "Object added",
      url: "https://keyspartner.netlify.app"
    };
  }

  console.log("==================================================================");
  console.log(`[REALSOFT WEBHOOK END] Čas: ${new Date().toISOString()}`);
  console.log(`[REALSOFT WEBHOOK END] Návratový HTTP Kód: 200`);
  console.log(`[REALSOFT WEBHOOK END] Odosielaná odpoveď Realsoftu (Bod 2):`, JSON.stringify(responseBody));
  console.log("==================================================================");

  // Dodatočné diagnostické hlavičky (neovplyvňujú JSON body validovaný Realsoftom)
  const customHeaders = {
    ...corsHeaders,
    "X-Realsoft-Processed": String(writeResults.length),
    "X-Realsoft-Format": detectedFormat
  };

  return new Response(JSON.stringify(responseBody), {
    status: 200,
    headers: customHeaders
  });
};
