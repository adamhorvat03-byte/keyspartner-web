/**
 * ==============================================================================
 * Netlify Serverless Function: Verejné API pre nehnuteľnosti z Netlify Blobs
 * Umiestnenie: functions/properties.js (Záložné umiestnenie)
 * KEYS & PARTNERS a.s. - https://keyspartner.netlify.app
 * ==============================================================================
 */

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

function getPropertiesStore() {
  try {
    const { getStore } = require("@netlify/blobs");
    return getStore("properties");
  } catch (err) {
    return null;
  }
}

exports.handler = async (event, context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  const query = event.queryStringParameters || {};
  let properties = [];
  let source = "default";

  const store = getPropertiesStore();
  if (store) {
    try {
      const { blobs } = await store.list();
      if (blobs && blobs.length > 0) {
        const loaded = await Promise.all(
          blobs.map(async (b) => {
            try {
              return await store.get(b.key, { type: "json" });
            } catch (_err) {
              return null;
            }
          })
        );
        properties = loaded.filter(Boolean);
        source = "netlify-blobs";
      }
    } catch (blobErr) {
      console.warn("[Netlify Blobs] Nepodarilo sa prečítať bloby:", blobErr.message);
    }
  }

  if (properties.length === 0) {
    properties = DEFAULT_PROPERTIES;
  }

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

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      status: "success",
      count: filtered.length,
      source: source,
      data: filtered,
      timestamp: new Date().toISOString()
    })
  };
};
