/**
 * ==============================================================================
 * Netlify Serverless Function: Realsoft Webhook s ukladaním do Netlify Blobs
 * Umiestnenie: netlify/functions/realsoft-webhook.js
 * Dostupné na: /.netlify/functions/realsoft-webhook a /api/realsoft-webhook
 * Netlify Functions v2 (ESM) s natívnym Netlify Blobs úložiskom
 * KEYS PARTNERS a.s. - https://keyspartner.netlify.app
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
 * Vyčistenie starých testovacích inzerátov a falošných inzerátov z exportu maklérov
 */
async function cleanupTestListings(storeInfo) {
  if (!storeInfo || !storeInfo.store || typeof storeInfo.store.list !== "function") return 0;
  try {
    const listRes = await storeInfo.store.list();
    const blobs = (listRes && listRes.blobs) ? listRes.blobs : [];
    let deletedCount = 0;
    for (const b of blobs) {
      const key = String(b.key || "");
      const isAgentDummy = /^\d{8,12}$/.test(key) || ["1162803367", "2739883856", "2742504158", "2756409051"].includes(key);
      const isTestBlob = key.startsWith("RS-1789") || key.startsWith("RS-TEST") || key === "RS-88421";
      if (isAgentDummy || isTestBlob) {
        try {
          await storeInfo.store.delete(key);
          deletedCount++;
          console.log(`[CLEANUP] Úspešne odstránený záznam (maklér/test): ${key}`);
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

function extractImageUrl(item) {
  if (!item) return null;
  if (typeof item === "string") {
    const trimmed = item.trim();
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("//")) {
      return trimmed.startsWith("//") ? "https:" + trimmed : trimmed;
    }
    if (trimmed.startsWith("/")) {
      return "https://realsoft.sk" + trimmed;
    }
    return null;
  }
  if (typeof item === "object") {
    const candidates = [
      item.url,
      item.src,
      item.path,
      item.href,
      item.link,
      item.file,
      item.full,
      item.original,
      item.large,
      item.big,
      item.uri,
      item.photo && (typeof item.photo === "string" ? item.photo : item.photo.url || item.photo.src),
      item.image && (typeof item.image === "string" ? item.image : item.image.url || item.image.src)
    ];
    for (const c of candidates) {
      const res = extractImageUrl(c);
      if (res) return res;
    }
  }
  return null;
}

const NEUTRAL_PROPERTY_PLACEHOLDER = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

function isAgentPhoto(url) {
  if (!url || typeof url !== "string") return false;
  const lower = url.toLowerCase();
  return (
    lower.includes("pella") ||
    lower.includes("duda") ||
    lower.includes("brano") ||
    lower.includes("horvat") ||
    lower.includes("s.unitedclassifieds.sk") ||
    lower.includes("agent") ||
    lower.includes("broker") ||
    lower.includes("avatar") ||
    lower.includes("profile") ||
    lower.includes("makler") ||
    lower.includes("user_photo") ||
    lower.includes("makleri") ||
    lower.includes("pouzivatel") ||
    lower.includes("portrait") ||
    lower.includes("face") ||
    lower.endsWith("pella.jpg") ||
    lower.endsWith("duda.jpg") ||
    lower.endsWith("brano.jpg")
  );
}

function extractAllImages(raw) {
  const images = [];
  const addImage = (url) => {
    if (url && typeof url === "string" && !isAgentPhoto(url) && !images.includes(url)) {
      images.push(url);
    }
  };

  const rawData = (raw && raw.data && typeof raw.data === "object") ? raw.data : {};

  // Kontrola kľúčov vo vnútri raw aj vo vnútri raw.data (payload.data):
  // photos, fotografie, pictures, prilohy, images, galeria, gallery, obrazky, foto
  const listCandidates = [
    raw.photos,
    rawData.photos,
    raw.fotografie,
    rawData.fotografie,
    raw.pictures,
    rawData.pictures,
    raw.prilohy,
    rawData.prilohy,
    raw.images,
    rawData.images,
    raw.galeria,
    rawData.galeria,
    raw.gallery,
    rawData.gallery,
    raw.obrazky,
    rawData.obrazky,
    raw.attachments,
    rawData.attachments,
    raw.foto,
    rawData.foto
  ];

  for (const candidate of listCandidates) {
    if (!candidate) continue;
    if (Array.isArray(candidate)) {
      for (const item of candidate) {
        const u = extractImageUrl(item);
        if (u) addImage(u);
      }
    } else if (typeof candidate === "object") {
      for (const val of Object.values(candidate)) {
        const u = extractImageUrl(val);
        if (u) addImage(u);
      }
    } else if (typeof candidate === "string") {
      if (candidate.trim().startsWith("[") || candidate.trim().startsWith("{")) {
        const parsed = parseJsonLenient(candidate);
        if (parsed) {
          if (Array.isArray(parsed)) {
            for (const item of parsed) {
              const u = extractImageUrl(item);
              if (u) addImage(u);
            }
          } else if (typeof parsed === "object") {
            for (const val of Object.values(parsed)) {
              const u = extractImageUrl(val);
              if (u) addImage(u);
            }
          }
        }
      } else {
        const parts = candidate.split(/[,;\s]+/);
        for (const part of parts) {
          const u = extractImageUrl(part);
          if (u) addImage(u);
        }
      }
    }
  }

  // Jednotlivé fotografie (photo, image, picture, main_photo, cover, titulka)
  const singleCandidates = [
    raw.photo,
    rawData.photo,
    raw.image,
    rawData.image,
    raw.picture,
    rawData.picture,
    raw.main_photo,
    rawData.main_photo,
    raw.cover,
    rawData.cover,
    raw.titulka,
    rawData.titulka
  ];

  for (const single of singleCandidates) {
    const u = extractImageUrl(single);
    if (u && !isAgentPhoto(u) && !images.includes(u)) {
      images.unshift(u);
    }
  }

  if (images.length > 0) {
    console.log(`[REALSOFT IMAGES] Nájdených ${images.length} fotografií pre inzerát:`, images);
  } else {
    console.log("[REALSOFT IMAGES] Nenašli sa žiadne fotografie v payloade (použije sa neutrálny fallback).");
  }

  if (images.length === 0) {
    images.push(NEUTRAL_PROPERTY_PLACEHOLDER);
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

  // Makléri a používatelia (user_id / full_name) bez objektu nehnuteľnosti NESMÚ byť ukladaní ako inzeráty
  if ((raw.user_id || raw.full_name) && !raw.object_id && !raw.property_id && !raw.inzerat_id && !raw.extern_id) {
    return false;
  }

  if (raw.object_id !== undefined && raw.object_id !== null) return true;
  if (raw.extern_id || raw.external_id || raw.id || raw.code || raw.property_id || raw.inzerat_id) return true;
  if (raw.title || raw.name || raw.nazov || raw.headline) return true;
  if (raw.price !== undefined || raw.cena !== undefined) return true;
  if (raw.usable_area || raw.floor_area || raw.area || raw.vymera) return true;
  return false;
}

/**
 * Bezpečné čítanie surového textu z Requestu s dekódovaním Windows-1250 / UTF-8
 * Realsoft odosiela payloady v kódovaní Windows-1250 (Central European).
 */
async function readRawBody(req) {
  let buffer = null;

  try {
    buffer = await req.clone().arrayBuffer();
  } catch (_e1) {
    try {
      buffer = await req.arrayBuffer();
    } catch (_e2) {
      console.warn("[READ BODY] req.arrayBuffer() zlyhalo:", _e2.message);
    }
  }

  if (buffer && buffer.byteLength > 0) {
    const contentType = (req.headers && typeof req.headers.get === "function" ? req.headers.get("content-type") : "") || "";

    // 1. Ak je explicitne v hlavičke zadané windows-1250 / cp1250 / iso-8859-2
    if (/windows-1250|cp1250|iso-8859-2/i.test(contentType)) {
      try {
        const decoded = new TextDecoder("windows-1250").decode(buffer);
        console.log("[READ BODY] Dekódované cez Windows-1250 (podľa hlavičky Content-Type).");
        return decoded;
      } catch (_e) {}
    }

    // 2. Primárne dekódovanie cez Windows-1250 (štandard Realsoft webhooku)
    let textWin1250 = "";
    try {
      textWin1250 = new TextDecoder("windows-1250").decode(buffer);
    } catch (errWin) {
      console.warn("[READ BODY] new TextDecoder('windows-1250') zlyhalo:", errWin.message);
    }

    // 3. Detekcia, či buffer nebol v skutočnosti UTF-8 (napr. testovací cURL s UTF-8)
    // Ak sa UTF-8 reťazec dekóduje cez Windows-1250, dvojbajtové znaky (napr. á, é, š, č) vytvoria
    // charakteristické mojibake sekvencie začínajúce na znaky z rozsahu C2-DF nasledované 80-BF
    const isMojibakeFromUtf8 = textWin1250 && /[\u00C0-\u00DF][\u0080-\u00BF]/.test(textWin1250);

    if (isMojibakeFromUtf8 || /charset=utf-8/i.test(contentType)) {
      try {
        const textUtf8 = new TextDecoder("utf-8").decode(buffer);
        if (textUtf8 && !textUtf8.includes("\uFFFD")) {
          console.log("[READ BODY] Detegované a dekódované cez UTF-8.");
          return textUtf8;
        }
      } catch (_e) {}
    }

    if (textWin1250 && textWin1250.length > 0) {
      console.log("[READ BODY] Dekódované cez Windows-1250.");
      return textWin1250;
    }

    try {
      return new TextDecoder("utf-8").decode(buffer);
    } catch (_e) {}
  }

  // 4. Núdzový fallback
  try {
    return await req.text();
  } catch (_e) {}

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
      service: "KEYS PARTNERS a.s. - Realsoft Webhook (Netlify Blobs Functions v2)",
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

      // Prechodný detailný log pre Realsoft fotografie (požiadavka: vidieť v Netlify logoch presnú štruktúru payload.data)
      const dataToLog = dataObj || (parsed && parsed.data) || parsed;
      console.log("------------------------------------------------------------------");
      console.log("[REALSOFT DEBUG PAYLOAD.DATA]:");
      console.log(JSON.stringify(dataToLog));
      console.log("------------------------------------------------------------------");

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
