/**
 * ==============================================================================
 * Netlify Serverless Function: Realsoft Webhook s ukladaním do Netlify Blobs
 * Umiestnenie: functions/realsoft-webhook.js
 * Dostupné na: /.netlify/functions/realsoft-webhook a /api/realsoft-webhook
 * Podpora pre Netlify Functions v1 (AWS Lambda event) aj Functions v2 (Web API)
 * KEYS & PARTNERS a.s. - https://keyspartner.netlify.app
 * ==============================================================================
 */

/**
 * Bezpečná inicializácia Netlify Blobs úložiska.
 * Podporuje:
 * 1. Functions v2 context.blobs.getStore
 * 2. Explicitné SITE_ID a NETLIFY_FUNCTIONS_TOKEN / NETLIFY_PURGE_API_TOKEN
 * 3. Syntetizovaný NETLIFY_BLOBS_CONTEXT pre zero-config kompatibilitu
 * 4. Automatické getStore("properties") a getStore len so SITE_ID
 */
async function getPropertiesStore(context) {
  let blobsModule = null;
  try {
    blobsModule = require("@netlify/blobs");
  } catch (_e1) {
    try {
      blobsModule = await import("@netlify/blobs");
    } catch (_e2) {
      console.error("[Blobs Init] Modul @netlify/blobs nie je dostupný:", _e2.message);
      return { store: null, error: _e2.message, mode: "none" };
    }
  }

  const getStore = blobsModule.getStore || (blobsModule.default && blobsModule.default.getStore);
  if (typeof getStore !== "function") {
    console.error("[Blobs Init] getStore funkcia nebola nájdená v balíčku @netlify/blobs!");
    return { store: null, error: "getStore function not found", mode: "none" };
  }

  // 1. Kontext z Netlify Functions v2 (ak je dostupný z context.blobs)
  if (context && context.blobs && typeof context.blobs.getStore === "function") {
    try {
      const store = context.blobs.getStore("properties");
      console.log("[Blobs Init] Inicializované cez Functions v2 context.blobs.getStore('properties').");
      return { store, error: null, mode: "context.blobs" };
    } catch (ctxErr) {
      console.warn("[Blobs Init] context.blobs.getStore zlyhalo:", ctxErr.message);
    }
  }

  // 2. Extrakcia environment parametrov (SITE_ID a NETLIFY_FUNCTIONS_TOKEN)
  const siteID = 
    process.env.SITE_ID || 
    process.env.NETLIFY_SITE_ID || 
    (context && context.site && context.site.id) ||
    (context && context.clientContext && context.clientContext.custom && context.clientContext.custom.siteID);

  const token = 
    process.env.NETLIFY_FUNCTIONS_TOKEN || 
    process.env.NETLIFY_PURGE_API_TOKEN || 
    process.env.NETLIFY_AUTH_TOKEN || 
    process.env.NETLIFY_API_TOKEN ||
    (context && context.clientContext && context.clientContext.identity && context.clientContext.identity.token);

  console.log(`[Blobs Init] Diagnostika prostredia: SITE_ID=${siteID ? "Áno (" + String(siteID).slice(0, 8) + "...)" : "Nie"}, TOKEN=${token ? "Áno" : "Nie"}, NETLIFY_BLOBS_CONTEXT=${Boolean(process.env.NETLIFY_BLOBS_CONTEXT)}`);

  // 3. Syntetizovanie NETLIFY_BLOBS_CONTEXT ak chýba
  if (!process.env.NETLIFY_BLOBS_CONTEXT && siteID && token) {
    try {
      const blobCtx = {
        siteID: siteID,
        token: token,
        apiURL: "https://api.netlify.com"
      };
      process.env.NETLIFY_BLOBS_CONTEXT = Buffer.from(JSON.stringify(blobCtx)).toString("base64");
      console.log("[Blobs Init] Syntetizovaný NETLIFY_BLOBS_CONTEXT pre plnú kompatibilitu.");
    } catch (synthErr) {
      console.warn("[Blobs Init] Syntéza NETLIFY_BLOBS_CONTEXT zlyhala:", synthErr.message);
    }
  }

  // 4. Pokus s explicitnou konfiguráciou (SITE_ID + TOKEN)
  if (siteID && token) {
    try {
      const store = getStore({
        name: "properties",
        siteID: siteID,
        token: token,
        apiURL: "https://api.netlify.com",
        consistency: "strong"
      });
      console.log("[Blobs Init] Úspešne vytvorený store cez explicitné SITE_ID a TOKEN.");
      return { store, error: null, mode: "explicit-credentials" };
    } catch (expErr) {
      console.warn("[Blobs Init] Inicializácia so SITE_ID a TOKEN zlyhala:", expErr.message);
    }
  }

  // 5. Pokus so štandardným getStore("properties", { consistency: "strong" })
  try {
    const store = getStore("properties", { consistency: "strong" });
    console.log("[Blobs Init] Úspešne vytvorený store cez getStore('properties', strong).");
    return { store, error: null, mode: "zero-config-strong" };
  } catch (zcErr) {
    console.warn("[Blobs Init] getStore('properties', strong) zlyhalo:", zcErr.message);
  }

  // 6. Pokus so základným getStore("properties")
  try {
    const store = getStore("properties");
    console.log("[Blobs Init] Úspešne vytvorený store cez getStore('properties').");
    return { store, error: null, mode: "zero-config" };
  } catch (zcBasicErr) {
    console.warn("[Blobs Init] getStore('properties') zlyhalo:", zcBasicErr.message);
  }

  // 7. Pokus len so siteID
  if (siteID) {
    try {
      const store = getStore({
        name: "properties",
        siteID: siteID,
        consistency: "strong"
      });
      console.log("[Blobs Init] Úspešne vytvorený store cez getStore len so SITE_ID.");
      return { store, error: null, mode: "site-id-only" };
    } catch (siteOnlyErr) {
      console.warn("[Blobs Init] getStore len so SITE_ID zlyhalo:", siteOnlyErr.message);
    }
  }

  return { store: null, error: "Nepodarilo sa inicializovať @netlify/blobs žiadnou metódou", mode: "failed" };
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
 * Uloženie alebo vymazanie inzerátu v Netlify Blobs s automatickým fallbackom
 */
async function saveOrDeleteListing(storeInfo, context, rawItem, actionOverride) {
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

  console.log(`[REALSOFT ACTION] Inzerát ID: ${externalId}, Akcia: ${isDelete ? "DELETE" : "UPSERT"}`);

  if (!storeInfo || !storeInfo.store) {
    console.warn(`[REALSOFT WARNING] Netlify Blobs store nie je dostupný pre ${externalId}.`);
    return { success: false, externalId, error: "Store not available" };
  }

  const performWrite = async (activeStore) => {
    if (isDelete) {
      if (typeof activeStore.delete === "function") {
        await activeStore.delete(externalId);
      }
      return { success: true, action: "deleted" };
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

      if (typeof activeStore.setJSON === "function") {
        await activeStore.setJSON(externalId, propertyItem);
      } else if (typeof activeStore.set === "function") {
        await activeStore.set(externalId, JSON.stringify(propertyItem));
      } else {
        throw new Error("Store object has neither setJSON nor set method");
      }

      return { success: true, action: "upserted", item: propertyItem };
    }
  };

  try {
    const result = await performWrite(storeInfo.store);
    console.log(`[REALSOFT SUCCESS] Inzerát ${externalId} úspešne spracovaný (${result.action}) v Netlify Blobs.`);
    return { success: true, externalId, action: result.action };
  } catch (primaryErr) {
    console.warn(`[REALSOFT RETRY] Prvý pokus o zápis zlyhal (${primaryErr.message}). Skúšam fallback so SITE_ID a TOKEN...`);
    
    // Fallback inicializácia pri chybe zápisu
    const siteID = process.env.SITE_ID || process.env.NETLIFY_SITE_ID || (context && context.site && context.site.id);
    const token = process.env.NETLIFY_FUNCTIONS_TOKEN || process.env.NETLIFY_PURGE_API_TOKEN || process.env.NETLIFY_AUTH_TOKEN;
    if (siteID && token) {
      try {
        const { getStore } = require("@netlify/blobs");
        const fallbackStore = getStore({ name: "properties", siteID, token, apiURL: "https://api.netlify.com", consistency: "strong" });
        const result = await performWrite(fallbackStore);
        console.log(`[REALSOFT SUCCESS] Inzerát ${externalId} úspešne spracovaný cez fallback store.`);
        return { success: true, externalId, action: result.action };
      } catch (fbErr) {
        console.error(`[REALSOFT ERROR] Aj fallback zápis do Netlify Blobs zlyhal pre ${externalId}:`, fbErr);
        return { success: false, externalId, error: fbErr.message };
      }
    }
    console.error(`[REALSOFT ERROR] Zápis do Netlify Blobs definitívne zlyhal pre ${externalId}:`, primaryErr);
    return { success: false, externalId, error: primaryErr.message };
  }
}

/**
 * Hlavný handler - univerzálny pre Functions v1 aj Functions v2
 */
const mainHandler = async (arg1, arg2) => {
  const isV2 = Boolean(arg1 && typeof arg1.text === "function" && typeof arg1.json === "function" && !arg1.httpMethod);

  // Normalizácia vstupov
  let method = "GET";
  let rawBody = "";
  let headers = {};
  let context = arg2 || {};

  if (isV2) {
    method = (arg1.method || "GET").toUpperCase();
    try {
      rawBody = await arg1.text();
    } catch (_e) {
      rawBody = "";
    }
    headers = Object.fromEntries(arg1.headers.entries());
    context = arg2 || {};
  } else {
    const event = arg1 || {};
    method = (event.httpMethod || "GET").toUpperCase();
    rawBody = typeof event.body === "string" ? event.body : JSON.stringify(event.body || "");
    headers = event.headers || {};
    context = arg2 || {};
  }

  // --- 1. CONSOLE.LOG NA ÚPLNOM ZAČIATKU FUNKCIE ---
  console.log("==================================================================");
  console.log(`[REALSOFT WEBHOOK START] Čas: ${new Date().toISOString()}`);
  console.log(`[REALSOFT WEBHOOK] Režim: ${isV2 ? "Functions v2 (Standard Web API)" : "Functions v1 (AWS Lambda event)"}`);
  console.log(`[REALSOFT WEBHOOK] HTTP Metóda: ${method}`);
  console.log(`[REALSOFT WEBHOOK] Hlavičky požiadavky:`, JSON.stringify(headers));
  console.log(`[REALSOFT WEBHOOK] Prijatý surový payload (body):`);
  console.log(rawBody ? (rawBody.length > 5000 ? rawBody.slice(0, 5000) + "... [skrátené]" : rawBody) : "(prázdne telo)");
  console.log("==================================================================");

  const corsHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key, X-Realsoft-Token",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
  };

  const createResponse = (statusCode, payload) => {
    const bodyStr = typeof payload === "string" ? payload : JSON.stringify(payload);
    
    // --- 2. CONSOLE.LOG NA ÚPLNOM KONCI FUNKCIE ---
    console.log("==================================================================");
    console.log(`[REALSOFT WEBHOOK END] Čas: ${new Date().toISOString()}`);
    console.log(`[REALSOFT WEBHOOK END] Návratový HTTP Kód: ${statusCode}`);
    console.log(`[REALSOFT WEBHOOK END] Odosielaná odpoveď Realsoftu:`, bodyStr);
    console.log("==================================================================");

    if (isV2) {
      return new Response(bodyStr, {
        status: statusCode,
        headers: corsHeaders
      });
    }
    return {
      statusCode,
      headers: corsHeaders,
      body: bodyStr
    };
  };

  if (method === "OPTIONS") {
    return createResponse(200, "");
  }

  // GET diagnostika / healthcheck
  if (method === "GET") {
    const storeInfo = await getPropertiesStore(context);
    return createResponse(200, {
      status: "online",
      service: "KEYS & PARTNERS a.s. - Realsoft Webhook (Netlify Blobs)",
      storage: "Netlify Blobs (store: properties)",
      blobsInitMode: storeInfo.mode,
      blobsError: storeInfo.error,
      runtime: isV2 ? "Functions v2" : "Functions v1",
      hasSiteId: Boolean(process.env.SITE_ID || process.env.NETLIFY_SITE_ID),
      hasFunctionsToken: Boolean(process.env.NETLIFY_FUNCTIONS_TOKEN),
      hasPurgeToken: Boolean(process.env.NETLIFY_PURGE_API_TOKEN),
      hasAuthToken: Boolean(process.env.NETLIFY_AUTH_TOKEN),
      hasBlobsContext: Boolean(process.env.NETLIFY_BLOBS_CONTEXT),
      endpoint: "/api/realsoft-webhook",
      url: "https://keyspartner.netlify.app",
      timestamp: new Date().toISOString()
    });
  }

  if (method !== "POST") {
    return createResponse(405, { error: "Method Not Allowed" });
  }

  // Spracovanie POST payloadu z Realsoftu
  try {
    let parsed = {};
    try {
      parsed = rawBody ? JSON.parse(rawBody) : {};
    } catch (parseErr) {
      console.warn("[REALSOFT WARN] Payload nie je platný JSON:", parseErr.message);
    }

    const storeInfo = await getPropertiesStore(context);

    // Detekcia, či ide o zoznam inzerátov alebo jeden inzerát
    const rawList = parsed.properties || parsed.listings || parsed.items || parsed.data;
    if (Array.isArray(rawList) && rawList.length > 0) {
      console.log(`[REALSOFT BATCH] Spracovávam balík ${rawList.length} inzerátov...`);
      for (const item of rawList) {
        await saveOrDeleteListing(storeInfo, context, item, parsed.action);
      }
    } else {
      const rawItem = parsed.property || parsed.data || parsed.listing || parsed;
      await saveOrDeleteListing(storeInfo, context, rawItem, parsed.action);
    }
  } catch (err) {
    console.error("[REALSOFT CRITICAL ERROR] Neočakávaná chyba pri spracovaní payloadu:", err);
  }

  // Štandardná odpoveď potvrdenia pre Realsoft
  return createResponse(200, {
    code: 1,
    message: "Object added",
    url: "https://keyspartner.netlify.app"
  });
};

// Export pre oba režimy: Functions v1 (exports.handler) aj Functions v2 (default export)
exports.handler = mainHandler;
module.exports = mainHandler;
module.exports.handler = mainHandler;
module.exports.default = mainHandler;
