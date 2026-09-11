/**
 * ==============================================================================
 * Netlify Serverless Function: Verejné API pre nehnuteľnosti z Netlify Blobs
 * Umiestnenie: netlify/functions/properties.js
 * Dostupné na: /api/properties a /.netlify/functions/properties
 * Netlify Functions v2 (ESM) s automatickou injekciou Netlify Blobs
 * KEYS & PARTNERS a.s. - https://keyspartner.netlify.app
 * ==============================================================================
 */

import { getStore } from "@netlify/blobs";

const DEFAULT_PROPERTIES = [
  {
    id: 101,
    externalId: "RS-88421",
    title: "Exkluzívna ponuka: 21 stavebných pozemkov v obci Ľubotice",
    shortTitle: "Stavebné pozemky, Ľubotice",
    type: "pozemi",
    deal: "predaj",
    price: 95000,
    area: 750,
    rooms: null,
    floor: null,
    location: "Ľubotice (pri Prešove)",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["PREDAJ", "STAVEBNÝ POZEMOK", "NOVINKA"],
    isReserved: false,
    agentId: 1,
    desc: "Divízia sprostredkovania nehnuteľností spoločnosti Keys Partners, a.s. v zastúpení nášho Klienta Vám v portfóliu ponúka na PREDAJ 21 stavebných pozemkov v novovybudovanej obytnej zóne v obci Ľubotice. Pozemky sú rovinaté, pripravené na individuálnu bytovú výstavbu rodinných domov.",
    technicalSpecs: {
      "Inžinierske siete": "Voda, elektrina, plyn, kanalizácia na hranici",
      "Stav objektu": "Pripravené na okamžitú výstavbu",
      "Konštrukcia / Terén": "Rovinatý stavebný pozemok",
      "Prístupová cesta": "Nová asfaltová komunikácia s osvetlením",
      "Orientácia": "Slnečný juhozápad"
    }
  },
  {
    id: 102,
    externalId: "RS-88422",
    title: "Stavebný pozemok P1 a P2, Kokošovce - časť Sigord",
    shortTitle: "Pozemky P1 a P2, Sigord",
    type: "pozemi",
    deal: "predaj",
    price: 68000,
    area: 1050,
    rooms: null,
    floor: null,
    location: "Kokošovce, Sigord",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["PREDAJ", "SLÁNSKE VRCHY", "3D PREHLIADKA"],
    isReserved: false,
    agentId: 1,
    desc: "Divízia sprostredkovania nehnuteľností spoločnosti Keys Partners, a.s. Vám ponúka na PREDAJ pozemok P1 a P2 v obci Kokošovce časť Sigord.",
    technicalSpecs: {
      "Inžinierske siete": "Elektrina v dosahu, studňa, žumpa",
      "Stav objektu": "Lesné tiché zátišie",
      "Konštrukcia / Terén": "Mierne svahovitý"
    }
  },
  {
    id: 103,
    externalId: "RS-88423",
    title: "Priestranný 3-izbový byt po kompletnej rekonštrukcii, Prešov",
    shortTitle: "3-izbový byt, Prešov",
    type: "byt",
    deal: "predaj",
    price: 159000,
    area: 74,
    rooms: 3,
    floor: "3/8",
    location: "Prešov, Sídlisko II",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["PREDAJ", "3D PREHLIADKA", "OVERENÁ PONUKA"],
    isReserved: false,
    agentId: 1,
    desc: "Zrekonštruovaný 3-izbový byt v Prešove. Úžitková plocha je 74 m² vrátane priestrannej loggie.",
    technicalSpecs: {
      "Inžinierske siete": "Voda, plyn, elektrina, optický internet",
      "Vykurovanie": "Ústredné diaľkové vykurovanie",
      "Stav objektu": "Kompletná rekonštrukcia (2024)",
      "Balkón / Loggia": "Zasklená loggia (4 m²)"
    }
  },
  {
    id: 106,
    externalId: "RS-88426",
    title: "Nadštandardný 2-izbový byt na prenájom, Werferova, Košice",
    shortTitle: "Luxusný 2-izbový byt (Prenájom)",
    type: "byt",
    deal: "prenajom",
    price: 650,
    area: 55,
    rooms: 2,
    floor: "2/5",
    location: "Košice - Juh, Werferova",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["PRENÁJOM", "NOVINKA", "3D PREHLIADKA"],
    isReserved: false,
    agentId: 2,
    desc: "Exkluzívny, kompletne zariadený 2-izbový byt s balkónom v lukratívnej novostavbe na Werferovej ulici v Košiciach.",
    technicalSpecs: {
      "Inžinierske siete": "Voda, elektrina, optický internet, klimatizácia",
      "Vykurovanie": "Podlahové kúrenie / vlastný termostat",
      "Parkovanie": "Vyhradené parkovacie státie v cene"
    }
  }
];

/**
 * Bezpečná inicializácia Netlify Blobs úložiska pre v2 aj v1
 */
function getPropertiesStore(context) {
  // 1. Kontext z Netlify Functions v2
  if (context && context.blobs && typeof context.blobs.getStore === "function") {
    try {
      return { store: context.blobs.getStore("properties"), mode: "context.blobs", error: null };
    } catch (e) {
      console.warn("[Blobs] context.blobs.getStore zlyhalo:", e.message);
    }
  }

  // 2. Štandardná zero-config inicializácia (v Functions v2 je automatická)
  try {
    const store = getStore("properties", { consistency: "strong" });
    return { store, mode: "zero-config-strong", error: null };
  } catch (err1) {
    try {
      const store = getStore("properties");
      return { store, mode: "zero-config", error: null };
    } catch (err2) {
      // 3. Explicitné parametre ak sú k dispozícii
      const siteID = process.env.SITE_ID || process.env.NETLIFY_SITE_ID;
      const userToken = process.env.NETLIFY_AUTH_TOKEN || process.env.NETLIFY_API_TOKEN || process.env.NETLIFY_PURGE_API_TOKEN;
      if (siteID && userToken) {
        try {
          const store = getStore({ name: "properties", siteID, token: userToken, consistency: "strong" });
          return { store, mode: "explicit-token", error: null };
        } catch (eToken) {
          return { store: null, mode: "failed", error: eToken.message };
        }
      }
      return { store: null, mode: "failed", error: err2.message };
    }
  }
}

/**
 * Načítanie inzerátov z Netlify Blobs
 */
async function fetchBlobsProperties(storeInfo) {
  if (!storeInfo || !storeInfo.store) {
    return { properties: [], error: storeInfo ? storeInfo.error : "No store" };
  }

  try {
    const { blobs } = await storeInfo.store.list();
    if (!blobs || blobs.length === 0) {
      return { properties: [], error: null };
    }

    const items = await Promise.all(
      blobs.map(async (b) => {
        try {
          if (typeof storeInfo.store.getJSON === "function") {
            const val = await storeInfo.store.getJSON(b.key);
            if (val) return val;
          }
          const raw = await storeInfo.store.get(b.key, { type: "json" });
          if (raw) return typeof raw === "string" ? JSON.parse(raw) : raw;
          return null;
        } catch (_err) {
          return null;
        }
      })
    );

    return { properties: items.filter(Boolean), error: null };
  } catch (listErr) {
    console.error("[Blobs Read Error]:", listErr.message);
    return { properties: [], error: listErr.message };
  }
}

/**
 * Univerzálny handler podporujúci Web API (Functions v2) aj Lambda (Functions v1)
 */
async function universalHandler(arg1, arg2) {
  const isV2 = Boolean(arg1 && typeof arg1.text === "function" && typeof arg1.json === "function");

  let query = {};
  let context = arg2 || {};

  if (isV2) {
    try {
      const url = new URL(arg1.url);
      query = Object.fromEntries(url.searchParams.entries());
    } catch (_e) {
      query = {};
    }
    context = arg2 || {};
  } else {
    const event = arg1 || {};
    query = event.queryStringParameters || {};
    context = arg2 || {};
  }

  const corsHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS"
  };

  const createResponse = (statusCode, payload) => {
    const bodyStr = typeof payload === "string" ? payload : JSON.stringify(payload);
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

  const method = isV2 ? (arg1.method || "GET").toUpperCase() : ((arg1 && arg1.httpMethod) || "GET").toUpperCase();
  if (method === "OPTIONS") {
    return createResponse(200, "");
  }

  const storeInfo = getPropertiesStore(context);
  const blobResult = await fetchBlobsProperties(storeInfo);

  let properties = [];
  let source = "default";

  if (blobResult.properties && blobResult.properties.length > 0) {
    properties = blobResult.properties;
    source = "netlify-blobs";
  } else {
    properties = DEFAULT_PROPERTIES;
  }

  // Filtrovanie
  let filtered = properties;

  if (query.deal && query.deal !== "vsetko" && query.deal !== "all") {
    const isRent = query.deal.includes("prenaj") || query.deal === "rent";
    filtered = filtered.filter((p) => (isRent ? p.deal === "prenajom" : p.deal === "predaj"));
  }

  if (query.category && query.category !== "vsetky" && query.category !== "all") {
    filtered = filtered.filter((p) => p.type === query.category);
  }

  if (query.location || query.query) {
    const q = String(query.location || query.query).toLowerCase().trim();
    filtered = filtered.filter(
      (p) =>
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.location && p.location.toLowerCase().includes(q))
    );
  }

  return createResponse(200, {
    status: "success",
    count: filtered.length,
    source: source,
    diagnostics: {
      runtime: isV2 ? "Functions v2 (Web API)" : "Functions v1 (Lambda)",
      blobsInitMode: storeInfo.mode,
      blobsError: blobResult.error,
      blobsCount: (blobResult.properties || []).length,
      env: {
        hasSiteId: Boolean(process.env.SITE_ID || process.env.NETLIFY_SITE_ID),
        hasFunctionsToken: Boolean(process.env.NETLIFY_FUNCTIONS_TOKEN),
        hasPurgeToken: Boolean(process.env.NETLIFY_PURGE_API_TOKEN),
        hasAuthToken: Boolean(process.env.NETLIFY_AUTH_TOKEN),
        hasBlobsContext: Boolean(process.env.NETLIFY_BLOBS_CONTEXT)
      }
    },
    data: filtered,
    timestamp: new Date().toISOString()
  });
}

export const handler = universalHandler;
export default universalHandler;
