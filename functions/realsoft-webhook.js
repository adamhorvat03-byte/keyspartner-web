/**
 * ==============================================================================
 * Netlify Serverless Function: Realsoft Webhook s ukladaním do Netlify Blobs
 * Umiestnenie: netlify/functions/realsoft-webhook.js
 * Dostupné na: /.netlify/functions/realsoft-webhook a /api/realsoft-webhook
 * Netlify Functions v2 (ESM) s natívnym Netlify Blobs úložiskom
 * KEYS & PARTNERS a.s. - https://keyspartner.netlify.app
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

function normalizePropertyType(type) {
  if (!type) return "byt";
  const t = String(type).toLowerCase();
  if (t.includes("byt") || t.includes("flat") || t.includes("apartment")) return "byt";
  if (t.includes("dom") || t.includes("vila") || t.includes("house")) return "dom";
  if (t.includes("pozem") || t.includes("land")) return "pozemi";
  if (t.includes("komerc") || t.includes("commercial") || t.includes("kancelar")) return "komercne";
  return "byt";
}

function normalizeDeal(deal) {
  if (!deal) return "predaj";
  const d = String(deal).toLowerCase();
  if (d.includes("prenaj") || d.includes("rent")) return "prenajom";
  return "predaj";
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
 * Uloženie alebo vymazanie inzerátu v Netlify Blobs
 */
async function saveOrDeleteListing(storeInfo, rawItem, actionOverride) {
  const raw = rawItem || {};
  const rawId = raw.external_id || raw.id || raw.code || raw.property_id || raw.inzerat_id;
  const externalId = rawId ? String(rawId).trim() : `RS-${Date.now()}`;
  const action = String(actionOverride || raw.action || "upsert").toLowerCase();

  const isDelete =
    action === "delete" ||
    action === "deactivate" ||
    raw.status === "deleted" ||
    raw.status === "inactive" ||
    raw.is_active === false;

  console.log(`[REALSOFT ACTION] Inzerát ID: ${externalId}, Požadovaná akcia: ${isDelete ? "DELETE" : "UPSERT"}`);

  if (!storeInfo || !storeInfo.store) {
    console.warn(`[REALSOFT WARNING] Netlify Blobs store nie je dostupný pre ${externalId}:`, storeInfo ? storeInfo.error : "Unknown");
    return { success: false, externalId, error: "Store not available" };
  }

  try {
    if (isDelete) {
      if (typeof storeInfo.store.delete === "function") {
        await storeInfo.store.delete(externalId);
        console.log(`[REALSOFT SUCCESS] Inzerát ${externalId} úspešne vymazaný z Netlify Blobs.`);
        return { success: true, externalId, action: "deleted" };
      }
    } else {
      const allImages = extractAllImages(raw);
      const dealType = normalizeDeal(raw.transaction_type || raw.deal_type || raw.deal);
      const propType = normalizePropertyType(raw.property_type || raw.category || raw.type);

      const propertyItem = {
        id: externalId,
        externalId: externalId,
        title: raw.title || raw.name || raw.nazov || `Nehnuteľnosť ${externalId}`,
        shortTitle: raw.shortTitle || raw.title || `Nehnuteľnosť ${externalId}`,
        type: propType,
        deal: dealType,
        price: typeof raw.price === "number" ? raw.price : parseFloat(String(raw.price || "0").replace(/\s/g, "").replace(",", ".")) || 0,
        currency: raw.currency || "EUR",
        area: Number(raw.area || raw.usable_area || raw.living_area || raw.land_area || raw.plocha || raw.vymera) || 0,
        rooms: raw.rooms ? Number(raw.rooms) : null,
        floor: raw.floor ? String(raw.floor) : null,
        location: typeof raw.location === "string"
          ? raw.location
          : (raw.city || raw.mesto || (raw.location && raw.location.city) || "Prešov a okolie") + (raw.street ? `, ${raw.street}` : ""),
        image: allImages[0],
        images: allImages,
        tags: raw.tags || [dealType === "predaj" ? "PREDAJ" : "PRENÁJOM", "REALSOFT"],
        isReserved: raw.status === "reserved" || raw.is_reserved === true,
        agentId: raw.agentId || 1,
        agent: raw.agent || raw.broker || raw.makler || {
          name: "Peter DUDA",
          phone: "+421 907 441 405",
          email: "peter_duda@keyspartners.sk"
        },
        desc: raw.description || raw.desc || raw.popis || raw.text || "Kompletné informácie a obhliadku vám rád poskytne náš realitný maklér.",
        technicalSpecs: raw.technicalSpecs || raw.parameters || {
          "Inžinierske siete": raw.utilities || "Voda, elektrina, plyn, kanalizácia",
          "Stav objektu": raw.condition || "Pripravené na prevod",
          "Vykurovanie": raw.heating || "Ústredné diaľkové / vlastné",
          "Konštrukcia": raw.construction || "Tehla / zateplený dom",
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

      console.log(`[REALSOFT SUCCESS] Inzerát ${externalId} (${propertyItem.title}) úspešne zapísaný do Netlify Blobs.`);
      return { success: true, externalId, action: "upserted" };
    }
  } catch (writeErr) {
    console.error(`[REALSOFT ERROR] Zápis inzerátu ${externalId} do Netlify Blobs zlyhal:`, writeErr);
    return { success: false, externalId, error: writeErr.message };
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

  let rawBody = "";
  try {
    rawBody = await req.text();
  } catch (_e) {
    rawBody = "";
  }

  const headers = Object.fromEntries(req.headers.entries());

  // --- 1. CONSOLE.LOG NA ÚPLNOM ZAČIATKU FUNKCIE ---
  console.log("==================================================================");
  console.log(`[REALSOFT WEBHOOK START] Čas: ${new Date().toISOString()}`);
  console.log(`[REALSOFT WEBHOOK] HTTP Metóda: ${method}`);
  console.log(`[REALSOFT WEBHOOK] Hlavičky požiadavky:`, JSON.stringify(headers));
  console.log(`[REALSOFT WEBHOOK] Prijatý surový payload (body):`);
  console.log(rawBody ? (rawBody.length > 5000 ? rawBody.slice(0, 5000) + "... [skrátené]" : rawBody) : "(prázdne telo)");
  console.log("==================================================================");

  // GET diagnostika
  if (method === "GET") {
    const storeInfo = getPropertiesStore(context);
    const getRes = {
      status: "online",
      service: "KEYS & PARTNERS a.s. - Realsoft Webhook (Netlify Blobs Functions v2)",
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
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), { status: 405, headers: corsHeaders });
  }

  // Spracovanie POST payloadu z Realsoftu
  let writeResults = [];
  try {
    let parsed = {};
    try {
      parsed = rawBody ? JSON.parse(rawBody) : {};
    } catch (parseErr) {
      console.warn("[REALSOFT WARN] Payload nie je platný JSON:", parseErr.message);
    }

    const storeInfo = getPropertiesStore(context);

    const rawList = parsed.properties || parsed.listings || parsed.items || parsed.data;
    if (Array.isArray(rawList) && rawList.length > 0) {
      console.log(`[REALSOFT BATCH] Spracovávam balík ${rawList.length} inzerátov...`);
      for (const item of rawList) {
        const res = await saveOrDeleteListing(storeInfo, item, parsed.action);
        writeResults.push(res);
      }
    } else {
      const rawItem = parsed.property || parsed.data || parsed.listing || parsed;
      const res = await saveOrDeleteListing(storeInfo, rawItem, parsed.action);
      writeResults.push(res);
    }
  } catch (err) {
    console.error("[REALSOFT CRITICAL ERROR] Neočakávaná chyba pri spracovaní payloadu:", err);
  }

  const responseBody = {
    code: 1,
    message: "Object added",
    url: "https://keyspartner.netlify.app",
    processed: writeResults.length
  };

  // --- 2. CONSOLE.LOG NA ÚPLNOM KONCI FUNKCIE ---
  console.log("==================================================================");
  console.log(`[REALSOFT WEBHOOK END] Čas: ${new Date().toISOString()}`);
  console.log(`[REALSOFT WEBHOOK END] Návratový HTTP Kód: 200`);
  console.log(`[REALSOFT WEBHOOK END] Odosielaná odpoveď Realsoftu:`, JSON.stringify(responseBody));
  console.log("==================================================================");

  return new Response(JSON.stringify(responseBody), {
    status: 200,
    headers: corsHeaders
  });
};
