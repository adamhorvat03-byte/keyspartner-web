/**
 * ==============================================================================
 * Netlify Serverless Function: Realsoft Webhook s ukladaním do Netlify Blobs
 * Umiestnenie: functions/realsoft-webhook.js (Záložné umiestnenie)
 * KEYS & PARTNERS a.s. - https://keyspartner.netlify.app
 * ==============================================================================
 */

function getPropertiesStore() {
  try {
    const { getStore } = require("@netlify/blobs");
    return getStore("properties");
  } catch (err) {
    console.warn("[Netlify Blobs] Knižnica @netlify/blobs nie je dostupná:", err.message);
    return null;
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
  const list = raw.images || raw.photos || [];
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
  if (images.length === 0) {
    images.push("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80");
  }
  return images;
}

exports.handler = async (event, context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key, X-Realsoft-Token",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status: "online",
        service: "KEYS & PARTNERS a.s. - Realsoft Webhook (Netlify Blobs)",
        storage: "Netlify Blobs (store: properties)",
        endpoint: "/api/realsoft-webhook",
        url: "https://keyspartner.netlify.app",
        timestamp: new Date().toISOString()
      })
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  console.log("Prijatý payload z Realsoftu:", event.body);

  try {
    let payload = {};
    try {
      payload = JSON.parse(event.body || "{}");
    } catch (_parseErr) {
      console.warn("Payload nie je platný JSON.");
    }

    const raw = payload.property || payload.data || payload.listing || payload;
    const rawId = raw.external_id || raw.id || raw.code || payload.external_id || payload.id;
    const externalId = rawId ? String(rawId).trim() : `RS-${Date.now()}`;
    const action = String(payload.action || raw.action || "upsert").toLowerCase();

    const store = getPropertiesStore();

    const isDelete =
      action === "delete" ||
      action === "deactivate" ||
      raw.status === "deleted" ||
      raw.status === "inactive" ||
      raw.is_active === false;

    if (isDelete) {
      console.log(`[Netlify Blobs] Deaktivácia/vymazanie inzerátu: ${externalId}`);
      if (store) {
        try {
          await store.delete(externalId);
        } catch (delErr) {
          console.warn("[Netlify Blobs] Chyba pri mazaní:", delErr.message);
        }
      }
    } else {
      const allImages = extractAllImages(raw);
      const dealType = normalizeDeal(raw.transaction_type || raw.deal_type || raw.deal);
      const propType = normalizePropertyType(raw.property_type || raw.category || raw.type);

      const propertyItem = {
        id: externalId,
        externalId: externalId,
        title: raw.title || raw.name || `Nehnuteľnosť ${externalId}`,
        shortTitle: raw.shortTitle || raw.title || `Nehnuteľnosť ${externalId}`,
        type: propType,
        deal: dealType,
        price: typeof raw.price === "number" ? raw.price : parseFloat(String(raw.price || "0").replace(/\s/g, "").replace(",", ".")) || 0,
        currency: raw.currency || "EUR",
        area: Number(raw.area || raw.usable_area || raw.living_area || raw.land_area) || 0,
        rooms: raw.rooms ? Number(raw.rooms) : null,
        floor: raw.floor ? String(raw.floor) : null,
        location: typeof raw.location === "string"
          ? raw.location
          : (raw.city || (raw.location && raw.location.city) || "Prešov a okolie") + (raw.street ? `, ${raw.street}` : ""),
        image: allImages[0],
        images: allImages,
        tags: raw.tags || [dealType === "predaj" ? "PREDAJ" : "PRENÁJOM", "REALSOFT"],
        isReserved: raw.status === "reserved",
        agentId: raw.agentId || 1,
        agent: raw.agent || raw.broker || {
          name: "Peter DUDA",
          phone: "+421 907 441 405",
          email: "peter_duda@keyspartners.sk"
        },
        desc: raw.description || raw.desc || raw.text || "Kompletné informácie a obhliadku vám rád poskytne náš realitný maklér.",
        technicalSpecs: raw.technicalSpecs || {
          "Inžinierske siete": raw.utilities || "Voda, elektrina, plyn, kanalizácia",
          "Stav objektu": raw.condition || "Pripravené na prevod",
          "Vykurovanie": raw.heating || "Ústredné diaľkové / vlastné",
          "Konštrukcia": raw.construction || "Tehla / zateplený dom",
          "Energetický certifikát": raw.energyCertificate || "Trieda B"
        },
        updatedAt: new Date().toISOString()
      };

      if (store) {
        await store.setJSON(externalId, propertyItem);
        console.log(`[Netlify Blobs] Inzerát ${externalId} (${propertyItem.title}) zapísaný.`);
      }
    }
  } catch (err) {
    console.error("[Realsoft Webhook] Chyba:", err);
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      code: 1,
      message: "Object added",
      url: "https://keyspartner.netlify.app"
    })
  };
};
