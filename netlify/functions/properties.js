/**
 * ==============================================================================
 * Netlify Serverless Function: Verejné API pre nehnuteľnosti z Netlify Blobs
 * Umiestnenie: netlify/functions/properties.js
 * Dostupné na: /api/properties a /.netlify/functions/properties
 * Netlify Functions v2 (ESM) s natívnym Netlify Blobs úložiskom
 * KEYS PARTNERS a.s. - https://keyspartner.netlify.app
 * ==============================================================================
 */

import { getStore } from "@netlify/blobs";

export const config = {
  path: ["/api/properties", "/.netlify/functions/properties"]
};

const NEUTRAL_PROPERTY_PLACEHOLDER = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

function isAgentPhoto(url) {
  if (!url || typeof url !== "string") return false;
  const lower = url.toLowerCase();
  return (
    lower.includes("duda") ||
    lower.includes("brano") ||
    lower.includes("agent") ||
    lower.includes("broker") ||
    lower.includes("avatar") ||
    lower.includes("profile") ||
    lower.includes("makler") ||
    lower.includes("user_photo") ||
    lower.includes("makleri") ||
    lower.includes("pouzivatel") ||
    lower.endsWith("duda.jpg") ||
    lower.endsWith("brano.jpg")
  );
}

const DEFAULT_PROPERTIES = [
  {
    id: 101,
    externalId: "KP-101",
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

async function fetchBlobsProperties(storeInfo) {
  if (!storeInfo || !storeInfo.store) {
    return { properties: [], keys: [], error: storeInfo ? storeInfo.error : "No store" };
  }

  try {
    const listRes = await storeInfo.store.list();
    const blobs = (listRes && listRes.blobs) ? listRes.blobs : [];
    if (blobs.length === 0) {
      return { properties: [], keys: [], error: null };
    }

    // Vyčistiť staré testovacie záznamy RS-1789*, RS-TEST* a RS-88421
    const validBlobs = [];
    for (const b of blobs) {
      const key = String(b.key || "");
      if (key.startsWith("RS-1789") || key.startsWith("RS-TEST") || key === "RS-88421") {
        try {
          await storeInfo.store.delete(key);
          console.log(`[Blobs Cleanup] Odstránený starý testovací záznam: ${key}`);
        } catch (_e) {}
      } else {
        validBlobs.push(b);
      }
    }

    const keys = validBlobs.map(b => b.key);
    const items = await Promise.all(
      validBlobs.map(async (b) => {
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

    // Zabezpečiť, že do výstupu sa nedostane žiadny prázdny alebo testovací objekt ani RS-88421
    const cleanProperties = items.filter(Boolean).filter(p => {
      const idStr = String(p.id || p.externalId || "");
      if (idStr.startsWith("RS-1789") || idStr.startsWith("RS-TEST") || idStr === "RS-88421") return false;
      if (!p.title || String(p.title).trim() === "") return false;
      if (String(p.title).includes("Exkluzívny 3-izbový byt")) return false;
      if (p.price === 0 && (!p.area || p.area === 0) && (!p.images || p.images.length === 0)) return false;
      return true;
    }).map(p => {
      const safeImages = Array.isArray(p.images)
        ? p.images.filter(img => img && !isAgentPhoto(img))
        : [];
      const safeImage = (safeImages.length > 0)
        ? safeImages[0]
        : (p.image && !isAgentPhoto(p.image) ? p.image : NEUTRAL_PROPERTY_PLACEHOLDER);
      return {
        ...p,
        image: safeImage,
        images: safeImages.length > 0 ? safeImages : [safeImage]
      };
    });

    return { properties: cleanProperties, keys, error: null };
  } catch (listErr) {
    console.error("[Blobs Read Error]:", listErr.message);
    return { properties: [], keys: [], error: listErr.message };
  }
}

export default async (req, context) => {
  const corsHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate"
  };

  if (req.method === "OPTIONS") {
    return new Response("", { status: 200, headers: corsHeaders });
  }

  let query = {};
  try {
    const url = new URL(req.url);
    query = Object.fromEntries(url.searchParams.entries());
  } catch (_e) {
    query = {};
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

  const responseBody = {
    status: "success",
    count: filtered.length,
    source: source,
    diagnostics: {
      runtime: "Functions v2 (Native)",
      blobsInitMode: storeInfo.mode,
      blobsError: blobResult.error,
      blobsCount: (blobResult.properties || []).length,
      blobKeys: blobResult.keys || []
    },
    data: filtered,
    timestamp: new Date().toISOString()
  };

  return new Response(JSON.stringify(responseBody), {
    status: 200,
    headers: corsHeaders
  });
};
