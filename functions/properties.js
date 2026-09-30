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

function cleanTextForStatusCheck(str) {
  if (!str) return "";
  return String(str)
    .toLowerCase()
    .replace(/["'“”„«»`´\\]/g, " ")
    .replace(/&(?:quot|ldquo|rdquo|lsquo|rsquo);/gi, " ")
    .replace(/[\(\)\[\]\{\}\<\>_\-\/:;,.*+?!#~%|^$@]+/g, " ")
    .replace(/a\?/g, "y")
    .replace(/a1/g, "y")
    .replace(/a!/g, "a")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
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
  },
  {
    id: 104,
    externalId: "RS-88424",
    title: "Slnečný stavebný pozemok v obci Fintice na Ružovej ulici",
    shortTitle: "Stavebný pozemok, Fintice",
    type: "pozemi",
    deal: "predaj",
    price: 85000,
    area: 820,
    rooms: null,
    floor: null,
    location: "Fintice, Ružová ulica",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["PREDAJ", "REZERVOVANÉ"],
    status: "reserved",
    isReserved: true,
    agentId: 2,
    desc: "Slnečný stavebný pozemok v obci Fintice pripravený na individuálnu výstavbu rodinného domu."
  },
  {
    id: 105,
    externalId: "RS-88425",
    title: "Stavebný pozemok pre rodinný dom, Hanušovce nad Topľou",
    shortTitle: "Pozemok, Hanušovce n/T",
    type: "pozemi",
    deal: "predaj",
    price: 42000,
    area: 1150,
    rooms: null,
    floor: null,
    location: "Hanušovce nad Topľou",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["SPROSTREDKOVANÉ", "PREDANÉ"],
    status: "sold",
    isReserved: false,
    agentId: 2,
    desc: "Úspešne sprostredkovaný stavebný pozemok v meste Hanušovce nad Topľou."
  },
  {
    id: 107,
    externalId: "RS-88427",
    title: "Moderný 4-izbový rodinný dom so záhradou, Prešov - Šidlovec",
    shortTitle: "4-izbový dom, Šidlovec",
    type: "dom",
    deal: "predaj",
    price: 265000,
    area: 145,
    rooms: 4,
    floor: null,
    location: "Prešov, Šidlovec",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["PREDAJ", "REZERVOVANÉ"],
    status: "reserved",
    isReserved: true,
    agentId: 1,
    desc: "Exkluzívny rodinný dom v tichej a vyhľadávanej lokalite Prešov - Šidlovec. Nehnuteľnosť je aktuálne v štádiu rezervácie."
  },
  {
    id: 108,
    externalId: "RS-88428",
    title: "Zrekonštruovaný 2-izbový byt s loggiou, Solivar (Prenajaté)",
    shortTitle: "2-izbový byt, Solivar",
    type: "byt",
    deal: "prenajom",
    price: 550,
    area: 58,
    rooms: 2,
    floor: "3/6",
    location: "Prešov, Solivar",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["SPROSTREDKOVANÉ", "PRENAJATÉ", "V PRENÁJME"],
    status: "sold",
    isReserved: false,
    agentId: 2,
    desc: "Úspešne sprostredkovaný prenájom kompletne zrekonštruovaného 2-izbového bytu v Prešove na Solivare."
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

    // Vyčistiť staré testovacie záznamy RS-1789*, RS-TEST*, RS-88421 a falošné inzeráty z exportu maklérov (číselné ID)
    const validBlobs = [];
    for (const b of blobs) {
      const key = String(b.key || "");
      const isAgentDummy = /^\d{8,12}$/.test(key) || ["1162803367", "2739883856", "2742504158", "2756409051"].includes(key);
      const isTestBlob = key.startsWith("RS-1789") || key.startsWith("RS-TEST") || key === "RS-88421";
      if (isAgentDummy || isTestBlob) {
        try {
          await storeInfo.store.delete(key);
          console.log(`[Blobs Cleanup] Odstránený nepotrebný záznam (maklér/test): ${key}`);
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

    // Zabezpečiť, že do výstupu sa nedostane žiadny prázdny alebo testovací objekt ani export makléra
    const cleanProperties = items.filter(Boolean).filter(p => {
      const idStr = String(p.id || p.externalId || "");
      if (idStr.startsWith("RS-1789") || idStr.startsWith("RS-TEST") || idStr === "RS-88421") return false;
      if (/^\d{8,12}$/.test(idStr) || ["1162803367", "2739883856", "2742504158", "2756409051"].includes(idStr)) return false;
      if (!p.title || String(p.title).trim() === "") return false;
      if (String(p.title).includes("Exkluzívny 3-izbový byt")) return false;
      // Vylúčiť generické záznamy vytvorené z exportu maklérov bez ceny a plochy
      if ((p.price === 0 || !p.price) && (!p.area || p.area === 0) && String(p.title).startsWith("Byt na predaj (Pre")) return false;
      return true;
    }).map(p => {
      const safeImages = Array.isArray(p.images)
        ? p.images.filter(img => img && !isAgentPhoto(img))
        : [];
      const safeImage = (safeImages.length > 0)
        ? safeImages[0]
        : (p.image && !isAgentPhoto(p.image) ? p.image : NEUTRAL_PROPERTY_PLACEHOLDER);
      const safeTags = Array.isArray(p.tags)
        ? p.tags.filter(t => t && String(t).trim().toUpperCase() !== "REALSOFT")
        : [p.deal === "prenajom" ? "PRENÁJOM" : "PREDAJ"];
      const idStr = String(p.id || p.externalId || "").trim();
      const titleText = `${p.title || ""} ${p.shortTitle || ""} ${p.name || ""}`;
      const statusText = `${p.status || ""} ${p.substatus || ""} ${p.stav || ""}`;
      const tagsText = safeTags.join(" ");
      const combined = `${titleText} ${statusText} ${tagsText}`;

      const cleaned = " " + cleanTextForStatusCheck(combined) + " ";
      const soldWordRegex = /\s(predan|sprostredkovan|prenajat|sold|rented|zrealizovan)/i;
      const rentPhraseRegex = /\sv\s+(?:pre)?najm/i;
      const endSalePhraseRegex = /\spredaj\s+ukoncen/i;
      const directSoldRegex = /(?:^|[^a-zA-Z0-9\u00C0-\u017F])(predan[eéyýaáou]?|sprostredkovan[eéyýaáou]?|prenajat[eéyýaáou]?|sold|rented|zrealizovan[eéyýaáou]?|v\s+(?:pre)?n[aá]jm[ie]|predaj\s+ukon[cč]en)/i;

      const reservedWordRegex = /\s(rezervovan|reserved)/i;
      const directReservedRegex = /(?:^|[^a-zA-Z0-9\u00C0-\u017F])(rezervovan[eéyýaáou]?|reserved)/i;

      let statusVal = "active";
      let isReserved = false;

      if (
        idStr === "RS-3253858396" ||
        idStr === "3253858396" ||
        soldWordRegex.test(cleaned) ||
        rentPhraseRegex.test(cleaned) ||
        endSalePhraseRegex.test(cleaned) ||
        directSoldRegex.test(combined) ||
        p.status === "sold" ||
        p.status === "rented" ||
        Number(p.status) === 4 ||
        p.status === "4" ||
        p.isSold === true
      ) {
        statusVal = "sold";
        isReserved = false;
      } else if (
        reservedWordRegex.test(cleaned) ||
        directReservedRegex.test(combined) ||
        p.isReserved === true ||
        p.status === "reserved" ||
        Number(p.status) === 3 ||
        p.status === "3"
      ) {
        statusVal = "reserved";
        isReserved = true;
      }

      let finalTags = [...safeTags];
      if (statusVal === "sold") {
        finalTags = finalTags.filter(t => !["PREDAJ"].includes(String(t).trim().toUpperCase()));
        const isRent = combined.includes("prenaj") || combined.includes("nájm") || combined.includes("najm") || p.deal === "prenajom";
        const statusTag = isRent ? "PRENAJATÉ" : "PREDANÉ";
        if (!finalTags.some(t => String(t).toUpperCase().includes("SPROSTREDKOVANÉ"))) finalTags.unshift("SPROSTREDKOVANÉ");
        if (!finalTags.some(t => String(t).toUpperCase().includes("PREDANÉ") || String(t).toUpperCase().includes("PRENAJATÉ"))) finalTags.unshift(statusTag);
      } else if (statusVal === "reserved") {
        finalTags = finalTags.filter(t => !["PREDAJ"].includes(String(t).trim().toUpperCase()));
        if (!finalTags.some(t => String(t).toUpperCase().includes("REZERVOVANÉ"))) finalTags.unshift("REZERVOVANÉ");
      }

      const agentIdStr = String(p.agentId || p.agent_id || "").trim();
      let cleanAgent = p.agent || p.broker || p.makler || null;
      let cleanAgentId = p.agentId || p.agent_id || null;

      // Odstránenie generického fallbacku Peter Duda pre historické/neznáme zákazky
      if (agentIdStr === "2869562781") {
        cleanAgent = null;
        cleanAgentId = null;
      }

      return {
        ...p,
        agent: cleanAgent,
        agentId: cleanAgentId,
        tags: finalTags,
        status: statusVal,
        isReserved: isReserved,
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
