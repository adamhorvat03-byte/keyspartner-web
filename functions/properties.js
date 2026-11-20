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
    lower.includes("samuel") ||
    lower.includes("hrivnak") ||
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
    lower.endsWith("brano.jpg") ||
    lower.endsWith("samuel.jpg")
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
      "Inžinierske siete": "Voda, elektrina, kanalizácia",
      "Terén": "Rovinatý stavebný pozemok",
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
    tags: ["PREDAJ", "SLÁNSKE VRCHY"],
    isReserved: false,
    agentId: 1,
    desc: "Divízia sprostredkovania nehnuteľností spoločnosti Keys Partners, a.s. Vám ponúka na PREDAJ pozemok P1 a P2 v obci Kokošovce časť Sigord.",
    technicalSpecs: {
      "Inžinierske siete": "Voda, elektrina",
      "Terén": "Mierne svahovitý"
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
    tags: ["PREDAJ", "OVERENÁ PONUKA"],
    isReserved: false,
    agentId: 1,
    desc: "Zrekonštruovaný 3-izbový byt v Prešove. Úžitková plocha je 74 m² vrátane priestrannej loggie.",
    technicalSpecs: {
      "Inžinierske siete": "Voda, elektrina, optický internet",
      "Vykurovanie": "Ústredné",
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
    tags: ["PRENÁJOM", "NOVINKA"],
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

// ==============================================================================
// NORMALIZÁCIA TECHNICKÝCH PARAMETROV A 3D OBHLIADOK Z REALSOFTU
// ==============================================================================
const KNOWN_REALSOFT_DATA = {
  "3004471094": {
    virtualTourUrl: "https://my.matterport.com/show/?m=A2fnjuXt3FF",
    specs: {
      "Inžinierske siete": "Voda, elektrina, kanalizácia",
      "Vykurovanie": "Podlahové, tepelné čerpadlo, rekuperácia",
      "Konštrukcia": "Drevená",
      "Energetický certifikát": "Trieda A"
    }
  },
  "794193769": {
    virtualTourUrl: "https://my.matterport.com/show/?m=Ww9LXcXNy58",
    specs: {
      "Inžinierske siete": "Voda (studňa), elektrina, ČOV",
      "Vykurovanie": "Krb",
      "Konštrukcia": "Kamenná, tehlová, železobetónová",
      "Energetický certifikát": "Nemá"
    }
  },
  "653390163": {
    virtualTourUrl: "https://my.matterport.com/show/?m=eNYBBbjhAVV",
    specs: {
      "Vykurovanie": "Ústredné",
      "Konštrukcia": "Panelová",
      "Energetický certifikát": "Trieda A"
    }
  },
  "4248791053": {
    virtualTourUrl: null,
    specs: {
      "Inžinierske siete": "Voda, elektrina, plyn, kanalizácia (pri pozemku)",
      "Terén": "Rovinatý",
      "Pripravenosť k výstavbe": "Schválené v územnom pláne",
      "Prístupová cesta": "Asfaltová"
    }
  },
  "3847665965": {
    virtualTourUrl: null,
    specs: {
      "Inžinierske siete": "Voda, elektrina, kanalizácia",
      "Terén": "Mierne svahovitý",
      "Umiestnenie": "Intravilán",
      "Pripravenosť k výstavbe": "Schválené v územnom pláne"
    }
  },
  "2078570016": {
    virtualTourUrl: null,
    specs: {
      "Inžinierske siete": "Voda, elektrina",
      "Terén": "Mierne svahovitý",
      "Umiestnenie": "Extravilán",
      "Pripravenosť k výstavbe": "Schválené v územnom pláne"
    }
  }
};

const BUILDING_TYPE_MAP = {
  1: "Drevená",
  2: "Tehlová",
  3: "Kamenná",
  4: "Montovaná",
  5: "Panelová",
  6: "Skeletová",
  7: "Zmiešaná",
  8: "Kvádrová",
  9: "Nepálená tehla",
  10: "Zateplená",
  11: "Hlinená",
  12: "Železobetónová",
  13: "Plechová",
  14: "Iná"
};

const ENERGY_CERT_MAP = {
  1: "Trieda A",
  2: "Trieda B",
  3: "Trieda C",
  4: "Trieda D",
  5: "Trieda E",
  6: "Trieda F",
  7: "Trieda G",
  99: "Nemá",
  305: "Trieda A",
  306: "Trieda B",
  307: "Trieda C",
  308: "Trieda D",
  309: "Trieda E",
  310: "Trieda F",
  20029: "Trieda G",
  20030: "Nemá"
};

const ENERGY_RATING_MAP = {
  2: "Energeticky úsporný",
  3: "Nízkoenergetický",
  4: "Energeticky pasívny",
  5: "Energeticky nulový",
  376: "Nízkoenergetický",
  377: "Energeticky pasívny",
  378: "Energeticky nulový"
};

const TERRAIN_MAP = {
  1: "Rovinatý",
  2: "Mierne svahovitý",
  3: "Svahovitý",
  4: "Iný",
  5: "Prevažne rovinatý",
  6: "Terasovitý",
  7: "Strmý svah"
};

const PLOT_LOCATION_MAP = {
  1: "Intravilán",
  2: "Extravilán"
};

const READY_TO_BUILD_MAP = {
  1: "Predbežný súhlas",
  2: "Schválené v územnom pláne",
  3: "Vydané územné rozhodnutie",
  4: "Vydané stavebné povolenie"
};

const ROAD_MAP = {
  1: "Betónová",
  2: "Dláždená",
  3: "Asfaltová",
  4: "Neupravená",
  5: "Kamenitá",
  6: "Bez prístupu"
};

const TOUR_PLATFORMS = [
  "matterport", "3drealitna", "momento360", "vieweet", "homestyler",
  "kuula", "insta360", "eyespy360", "lapentor", "cloudpano",
  "cupix", "theasys", "feelestate", "giraffe360", "mollyinvr",
  "grandpano", "pivo", "tourwz", "istaging", "revio"
];

const VIDEO_PLATFORMS = [
  "youtube", "vimeo", "videoobhliadka", "video", "mp4"
];

function isLocUtilAvailable(val) {
  if (val === null || val === undefined || val === "") return false;
  const n = Number(val);
  if (!isNaN(n)) return n === 1 || n === 2;
  const s = String(val).trim().toLowerCase();
  if (["0", "3", "false", "nie", "nie je", "nedostupné", "nedostupne", "none", "null"].includes(s)) return false;
  return true;
}

function isLocUtilExplicitlyAbsent(val) {
  if (val === null || val === undefined || val === "") return false;
  if (Number(val) === 3) return true;
  const s = String(val).trim().toLowerCase();
  return ["3", "nie", "nie je", "nedostupné", "nedostupne"].includes(s);
}

function isBoolTruthy(val) {
  if (val === true || val === 1 || val === "1") return true;
  if (typeof val === "string") {
    const s = val.trim().toLowerCase();
    return s === "true" || s === "yes" || s === "ano" || s === "áno";
  }
  return false;
}

function isLegacyMockSpecs(specs) {
  if (!specs || typeof specs !== "object") return false;
  return (
    specs["Vykurovanie"] === "Ústredné diaľkové / vlastné" &&
    specs["Konštrukcia"] === "Tehla / zateplený dom"
  );
}

function extractVirtualTourUrl(raw, descText, objectIdStr) {
  const candidates = [];

  const directFields = [
    raw.virtualTourUrl, raw.virtual_tour_url, raw.virtualTour, raw.virtual_tour,
    raw.tourUrl, raw.tour_url, raw.url_3d, raw["3d_url"], raw.matterport,
    raw.matterport_url, raw.scan_3d, raw["3d_scan"], raw.momento,
    raw.three_d_url, raw.panorama_url,
    raw.realsoftAttrs && raw.realsoftAttrs.momento
  ];
  for (const d of directFields) {
    if (typeof d === "string" && /^https?:\/\//i.test(d.trim())) {
      candidates.push(d.trim());
    }
  }

  if (Array.isArray(raw.inspections3d)) {
    for (const item of raw.inspections3d) {
      if (typeof item === "string" && /^https?:\/\//i.test(item.trim())) {
        candidates.push(item.trim());
      } else if (item && typeof item.url === "string" && /^https?:\/\//i.test(item.url.trim())) {
        candidates.push(item.url.trim());
      }
    }
  }

  let mediasObj = raw.medias || raw.media || (raw.realsoftAttrs && raw.realsoftAttrs.medias);
  if (typeof mediasObj === "string" && mediasObj.trim().startsWith("{")) {
    try { mediasObj = JSON.parse(mediasObj); } catch (_e) {}
  }
  if (mediasObj && typeof mediasObj === "object" && !Array.isArray(mediasObj)) {
    for (const key of TOUR_PLATFORMS) {
      const list = mediasObj[key];
      if (Array.isArray(list)) {
        for (const u of list) {
          if (typeof u === "string" && /^https?:\/\//i.test(u.trim())) candidates.push(u.trim());
          else if (u && typeof u.url === "string" && /^https?:\/\//i.test(u.url.trim())) candidates.push(u.url.trim());
        }
      } else if (typeof list === "string" && /^https?:\/\//i.test(list.trim())) {
        candidates.push(list.trim());
      }
    }
    for (const [k, list] of Object.entries(mediasObj)) {
      if (VIDEO_PLATFORMS.includes(String(k).toLowerCase())) continue;
      if (Array.isArray(list)) {
        for (const u of list) {
          if (typeof u === "string" && /^https?:\/\//i.test(u.trim())) candidates.push(u.trim());
        }
      } else if (typeof list === "string" && /^https?:\/\//i.test(list.trim())) {
        candidates.push(list.trim());
      }
    }
  }

  if (typeof descText === "string" && descText.length > 0) {
    const tourRegex = /https?:\/\/(?:my\.matterport\.com\/show\/\?[^\s"'<>]+|[^\s"'<>]*(?:matterport\.com|shapespark\.com|kuula\.co|momento360\.com|vieweet\.com|istaging\.com|3drealitna\.sk|cloudpano\.com|cupix\.com|theasys\.io|ths\.li|feelestate\.com|giraffe360\.com|mollyinvr\.com|grandpano\.com|pivo\.app|tour\.wz\.sk|eyespy360\.vr|lapentor\.com|insta360\.com)[^\s"'<>]*)/i;
    const match = descText.match(tourRegex);
    if (match && match[0]) {
      candidates.push(match[0].replace(/[.,;!?)]+$/, ""));
    }
  }

  if (objectIdStr && KNOWN_REALSOFT_DATA[objectIdStr] && KNOWN_REALSOFT_DATA[objectIdStr].virtualTourUrl) {
    candidates.push(KNOWN_REALSOFT_DATA[objectIdStr].virtualTourUrl);
  }

  return candidates.length > 0 ? candidates[0] : null;
}

function normalizeMediasObject(raw) {
  let mediasObj = (raw && raw.medias) || (raw && raw.media) || (raw && raw.realsoftAttrs && raw.realsoftAttrs.medias) || null;
  if (typeof mediasObj === "string" && mediasObj.trim().startsWith("{")) {
    try { mediasObj = JSON.parse(mediasObj); } catch (_e) {}
  }
  return (mediasObj && typeof mediasObj === "object" && !Array.isArray(mediasObj)) ? mediasObj : null;
}

function extractVideoUrls(raw, descText) {
  const candidates = [];
  const pushUrl = (u) => {
    if (typeof u !== "string") return;
    const cleaned = u.trim().replace(/[.,;!?)]+$/, "");
    if (/^https?:\/\//i.test(cleaned)) {
      candidates.push(cleaned);
    }
  };

  if (raw && Array.isArray(raw.videoUrls)) {
    raw.videoUrls.forEach(pushUrl);
  }

  const mediasObj = normalizeMediasObject(raw);
  if (mediasObj) {
    for (const key of VIDEO_PLATFORMS) {
      const list = mediasObj[key];
      if (Array.isArray(list)) {
        for (const item of list) {
          if (typeof item === "string") pushUrl(item);
          else if (item && typeof item.url === "string") pushUrl(item.url);
        }
      } else if (typeof list === "string") {
        pushUrl(list);
      }
    }
  }

  const directFields = [
    raw && raw.videoUrl, raw && raw.video_url, raw && raw.video,
    raw && raw.youtube, raw && raw.youtube_url,
    raw && raw.vimeo, raw && raw.vimeo_url,
    raw && raw.marketingVideo, raw && raw.marketing_video
  ];
  for (const field of directFields) {
    if (Array.isArray(field)) {
      field.forEach(item => {
        if (typeof item === "string") pushUrl(item);
        else if (item && typeof item.url === "string") pushUrl(item.url);
      });
    } else if (typeof field === "string") {
      pushUrl(field);
    }
  }
  if (raw && Array.isArray(raw.videos)) {
    for (const item of raw.videos) {
      if (typeof item === "string") pushUrl(item);
      else if (item && typeof item.url === "string") pushUrl(item.url);
    }
  }

  if (typeof descText === "string" && descText.length > 0) {
    const videoRegex = /https?:\/\/(?:(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?[^\s"'<>]+|shorts\/[^\s"'<>]+|embed\/[^\s"'<>]+)|youtu\.be\/[^\s"'<>]+)|(?:player\.)?vimeo\.com\/(?:video\/)?\d+[^\s"'<>]*|[^\s"'<>]+\.(?:mp4|webm|mov)(?:\?[^\s"'<>]*)?)/gi;
    const matches = descText.match(videoRegex) || [];
    for (const m of matches) {
      pushUrl(m);
    }
  }

  return Array.from(new Set(candidates));
}

function parseValidIsoDate(val) {
  if (!val) return null;
  if (val instanceof Date && !isNaN(val.getTime())) return val.toISOString();
  if (typeof val !== "string") return null;
  let normalized = val.trim();
  if (!normalized) return null;
  if (/^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}$/.test(normalized)) {
    normalized = normalized.replace(/\s+/, "T");
  }
  const ts = Date.parse(normalized);
  if (isNaN(ts)) return null;
  return new Date(ts).toISOString();
}

function getEffectiveCreatedAt(p) {
  if (!p || typeof p !== "object") return null;
  return (
    parseValidIsoDate(p.createdAt) ||
    parseValidIsoDate(p.created_at) ||
    parseValidIsoDate(p.dateCreated) ||
    parseValidIsoDate(p.date_created) ||
    parseValidIsoDate(p.publishedAt) ||
    parseValidIsoDate(p.published_at) ||
    parseValidIsoDate(p.addedAt) ||
    parseValidIsoDate(p.added_at) ||
    parseValidIsoDate(p.updatedAt) ||
    parseValidIsoDate(p.updated_at) ||
    null
  );
}

function comparePropertiesByCreatedAtDesc(a, b) {
  const isoA = getEffectiveCreatedAt(a);
  const isoB = getEffectiveCreatedAt(b);
  const tsA = isoA ? Date.parse(isoA) : 0;
  const tsB = isoB ? Date.parse(isoB) : 0;
  if (tsA !== tsB) return tsB - tsA;
  if (tsA === 0 && tsB === 0) return 0;
  const numA = parseInt(String(a && (a.objectId || a.id || "")).replace(/\D/g, ""), 10) || 0;
  const numB = parseInt(String(b && (b.objectId || b.id || "")).replace(/\D/g, ""), 10) || 0;
  if (numA !== numB) return numB - numA;
  return String((b && b.id) || "").localeCompare(String((a && a.id) || ""));
}

function extractUtilitiesFromRaw(src) {
  const explicitStr = src.utilities || src.inzinierske_siete;
  if (typeof explicitStr === "string" && explicitStr.trim() !== "" && explicitStr.trim() !== "Voda, elektrina, plyn, kanalizácia") {
    return explicitStr.trim();
  }

  const hasRawUtilFields = [
    "water", "water_source", "water_supply", "water_well",
    "electricity", "electricity_source", "electricity_230", "electricity_400",
    "gas", "gas_source",
    "canalization", "canalization_source", "canalization_sink", "canalization_septic", "canalization_cov",
    "data_connection", "access_optical_internet", "access_internet"
  ].some(k => src[k] !== undefined && src[k] !== null && src[k] !== "");

  if (!hasRawUtilFields) return null;

  const parts = [];
  const piped = isLocUtilAvailable(src.water) || isLocUtilAvailable(src.water_supply);
  const well = isLocUtilAvailable(src.water_well);
  const wSrc = isBoolTruthy(src.water_source) && !isLocUtilExplicitlyAbsent(src.water) && !isLocUtilExplicitlyAbsent(src.water_supply);
  if (piped && well) parts.push("Voda, studňa");
  else if (piped || wSrc) parts.push("Voda");
  else if (well) parts.push("Voda (studňa)");

  const elec =
    isLocUtilAvailable(src.electricity) ||
    isLocUtilAvailable(src.electricity_230) ||
    isLocUtilAvailable(src.electricity_400) ||
    (isBoolTruthy(src.electricity_source) && !isLocUtilExplicitlyAbsent(src.electricity));
  if (elec) parts.push("elektrina");

  const gas =
    isLocUtilAvailable(src.gas) ||
    (isBoolTruthy(src.gas_source) && !isLocUtilExplicitlyAbsent(src.gas) && src.gas !== 0 && src.gas !== "0");
  if (gas) parts.push("plyn");

  const canal = isLocUtilAvailable(src.canalization);
  const cov = isLocUtilAvailable(src.canalization_cov);
  const septic = isLocUtilAvailable(src.canalization_septic);
  const sink = isLocUtilAvailable(src.canalization_sink);
  const cSrc = isBoolTruthy(src.canalization_source) && !isLocUtilExplicitlyAbsent(src.canalization) && !cov && !septic && !sink;
  if (canal || cSrc) parts.push("kanalizácia");
  if (cov) parts.push("ČOV");
  if (septic) parts.push("septik");
  if (sink) parts.push("žumpa");

  if (isBoolTruthy(src.access_optical_internet)) parts.push("optický internet");
  else if (isBoolTruthy(src.access_internet) || isLocUtilAvailable(src.data_connection)) parts.push("internet");

  if (parts.length === 0) return null;
  const joined = parts.join(", ");
  return joined.charAt(0).toUpperCase() + joined.slice(1);
}

function extractUtilitiesFromDesc(descText) {
  const d = String(descText || "");
  if (!d) return null;

  const parts = [];
  const hasPipedDesc = /(verejn[ýy]\s+vodovod|obecn[ýy]\s+vodovod|vodovod|rozvody\s+vody)/i.test(d) && !/bez\s+vodovodu/i.test(d);
  const hasWellDesc = /(vlastn[áa]\s+stud[ňn]a|stud[ňn][auy])/i.test(d);
  if (hasPipedDesc && hasWellDesc) parts.push("Voda, studňa");
  else if (hasPipedDesc) parts.push("Voda");
  else if (hasWellDesc) parts.push("Voda (studňa)");

  if (/(elektrin[ayou]|elektrick[áa]\s+pr[íi]pojka|elektroin[šs]tal[áa]cia|230\s*v|400\s*v)/i.test(d) && !/bez\s+elektriny/i.test(d)) {
    parts.push("elektrina");
  }

  const mentionsNoGas = /(bez\s+plynu|plyn\s+nie\s+je|plyn\s+nedostupn)/i.test(d);
  if (!mentionsNoGas && /(zaveden[ýy]\s+plyn|plynov[áa]\s+pr[íi]pojka|plynov[ýy]\s+spor[áa]k|plynov[ée]\s+na\s+gamatky|elektrina\s*,\s*plyn)/i.test(d)) {
    parts.push("plyn");
  }

  const mentionsNoCanal = /(bez\s+kanaliz[áa]cie|kanaliz[áa]cia\s+nie\s+je)/i.test(d);
  if (!mentionsNoCanal && /(verejn[áa]\s+kanaliz[áa]cia|obecn[áa]\s+kanaliz[áa]cia|kanaliz[áa]ci[auo])/i.test(d)) {
    parts.push("kanalizácia");
  }
  if (/(?:^|[\s,.;:()\-–/])([čc]ov)(?=$|[\s,.;:()\-–/])|[čc]isti[čc]k[auy]\s+odpadov[ýy]ch\s+v[ôo]d/i.test(d)) {
    parts.push("ČOV");
  }
  if (/(?:^|[\s,.;:()\-–/])septik(?=$|[\s,.;:()\-–/])/i.test(d)) parts.push("septik");
  if (/(bet[óo]nov[áa]\s+[žz]umpa|(?:^|[\s,.;:()\-–/])[žz]ump[auy](?=$|[\s,.;:()\-–/]))/i.test(d)) parts.push("žumpa");
  if (/optick[ýy]\s+internet/i.test(d)) parts.push("optický internet");
  else if (/ostatn[ée]\s+vybavenie\s*:\s*internet/i.test(d)) parts.push("internet");

  if (parts.length > 0) {
    const joined = parts.join(", ");
    return joined.charAt(0).toUpperCase() + joined.slice(1);
  }
  if (/in[žz]inierske\s+siete\s+na\s+pozemku/i.test(d)) return "Na pozemku";
  return null;
}

function extractHeating(src, descText, propType) {
  if (propType === "pozemi") return null;

  const list = [];
  if (isBoolTruthy(src.heating_floor)) list.push("Podlahové");
  if (isBoolTruthy(src.heating_central) || isBoolTruthy(src.heating)) list.push("Ústredné");
  if (isBoolTruthy(src.heating_local)) list.push("Lokálne");
  if (isBoolTruthy(src.heating_fire)) list.push("Krb");
  if (isBoolTruthy(src.heating_emitters)) list.push("Žiariče");

  if (typeof src.heating === "string") {
    const hTrim = src.heating.trim();
    if (
      hTrim !== "" &&
      !["0", "1", "true", "false", "null", "Ústredné diaľkové / vlastné"].includes(hTrim) &&
      !list.includes(hTrim)
    ) {
      list.push(hTrim);
    }
  }
  if (typeof src.kurenie === "string" && src.kurenie.trim() !== "" && src.kurenie.trim() !== "Ústredné diaľkové / vlastné") {
    list.push(src.kurenie.trim());
  }

  const d = String(descText || "");
  if (d.length > 0) {
    if (/podlahov[éeýým]+\s*(?:elektrick[éeýým]+\s*)?(?:k[úu]ren|vykurovan)/i.test(d) && !list.some(x => /podlahov/i.test(x))) {
      list.push("Podlahové");
    }
    if (/tepeln[éeýým]+\s+[čc]erpadl/i.test(d) && !list.some(x => /[čc]erpadl/i.test(x))) {
      list.push("tepelné čerpadlo");
    }
    if (/rekuper[áa]ci/i.test(d) && !list.some(x => /rekuper/i.test(x))) {
      list.push("rekuperácia");
    }
    if (/([úu]stredn[ée]|centr[áa]lne)\s*(k[úu]renie|vykurovanie)?|k[úu]renie\s*:\s*centr[áa]lne/i.test(d) && /k[úu]renie|vykurovanie/i.test(d) && !list.some(x => /[úu]stredn|centr[áa]ln/i.test(x))) {
      list.push("Ústredné");
    }
    if (/gamatk/i.test(d) && !list.some(x => /lok[áa]ln|gamatk/i.test(x))) {
      list.push("Lokálne (gamatky)");
    }
    if (list.length === 0 && /(?:^|[\s,.;:()\-–/])krb(?=$|[\s,.;:()\-–/])/i.test(d)) {
      list.push("Krb");
    }
  }

  if (list.length === 0) return null;
  const joined = list.join(", ");
  return joined.charAt(0).toUpperCase() + joined.slice(1);
}

function extractConstruction(src, descText, propType) {
  if (propType === "pozemi") return null;

  const bt = src.building_type ?? src.construction ?? src.konstrukcia;
  if (bt !== undefined && bt !== null && bt !== "" && bt !== "Tehla / zateplený dom") {
    const rawParts = Array.isArray(bt) ? bt : String(bt).split(",");
    const mapped = [];
    for (const part of rawParts) {
      const trimmed = String(part).trim();
      if (!trimmed || trimmed === "0") continue;
      const num = Number(trimmed);
      if (!isNaN(num) && BUILDING_TYPE_MAP[num]) {
        mapped.push(BUILDING_TYPE_MAP[num]);
      } else if (isNaN(num) && trimmed.toLowerCase() !== "null" && trimmed !== "$undefined") {
        mapped.push(trimmed);
      }
    }
    if (mapped.length > 0) return mapped.join(", ");
  }

  const d = String(descText || "");
  if (d.length > 0) {
    if (/montovan[ýy]\s+syst[ée]m|sip\s+panel/i.test(d)) return "Drevená";
    if (/kon[šs]trukcia\s+objektu\s*:\s*panelov[áa]/i.test(d)) return "Panelová";
    if (/kon[šs]trukcia\s+objektu\s*:\s*tehlov[áa]|\btehlov[ýy]\s+byt\b/i.test(d)) return "Tehlová";
    if (/kon[šs]trukcia\s+objektu\s*:\s*zmie[šs]an[áa]/i.test(d)) return "Zmiešaná";
    if (/kon[šs]trukcia\s+objektu\s*:\s*kamenn[áa]/i.test(d)) return "Kamenná";
  }

  return null;
}

function extractEnergyCertificate(src, descText, propType) {
  if (propType === "pozemi") return null;

  const rawCert =
    src.energy_cert ??
    src.energy_certificate ??
    src.energyRatingCertificate ??
    src.energeticky_certifikat ??
    src.energy_class ??
    (src.energyCertificate !== "Trieda B" ? src.energyCertificate : undefined);

  if (rawCert !== undefined && rawCert !== null && rawCert !== "" && rawCert !== 0 && rawCert !== "0" && rawCert !== "$undefined") {
    const num = Number(rawCert);
    if (!isNaN(num) && ENERGY_CERT_MAP[num]) {
      return ENERGY_CERT_MAP[num];
    }
    const str = String(rawCert).trim();
    const upper = str.toUpperCase();
    if (/^[A-G][01]?$/.test(upper)) {
      return `Trieda ${upper[0]}`;
    }
    if (/^TRIEDA\s+[A-G]/i.test(str)) {
      return `Trieda ${upper.replace(/^TRIEDA\s+/i, "")[0]}`;
    }
    if (["nie je", "nemá", "nema", "none"].includes(str.toLowerCase())) {
      return "Nemá";
    }
  }

  const d = String(descText || "");
  if (d.length > 0) {
    const m = d.match(/energetick[ýy]\s+certifik[áa]t\s*[:\-–]?\s*(?:trieda\s*)?([A-G])[01]?(?=$|[\s,.;:()\-–/])/i);
    if (m && m[1]) {
      return `Trieda ${m[1].toUpperCase()}`;
    }
  }

  const rating = src.energy_rating;
  if (rating !== undefined && rating !== null && ENERGY_RATING_MAP[Number(rating)]) {
    return ENERGY_RATING_MAP[Number(rating)];
  }

  return null;
}

function buildTechnicalSpecs(raw, propType, descText, existingSpecs, objectIdStr) {
  const src = { ...((raw && raw.realsoftAttrs) || {}), ...(raw || {}) };
  const specs = {};

  const known = (objectIdStr && KNOWN_REALSOFT_DATA[objectIdStr] && KNOWN_REALSOFT_DATA[objectIdStr].specs)
    ? KNOWN_REALSOFT_DATA[objectIdStr].specs
    : null;

  if (existingSpecs && typeof existingSpecs === "object" && !isLegacyMockSpecs(existingSpecs)) {
    for (const [k, v] of Object.entries(existingSpecs)) {
      if (/^stav(\s+objektu)?$/i.test(k.trim())) continue;
      if (v !== null && v !== undefined && String(v).trim() !== "" && !/^\d+$/.test(String(v).trim())) {
        specs[k] = v;
      }
    }
  }

  if (known) {
    for (const [k, v] of Object.entries(known)) {
      if (v) specs[k] = v;
    }
  }

  const rawUtilities = extractUtilitiesFromRaw(src);
  if (rawUtilities) {
    specs["Inžinierske siete"] = rawUtilities;
  } else if (!specs["Inžinierske siete"]) {
    const descUtilities = extractUtilitiesFromDesc(descText);
    if (descUtilities) specs["Inžinierske siete"] = descUtilities;
  }

  if (propType === "pozemi") {
    const tNum = Number(src.terrain);
    if (!isNaN(tNum) && TERRAIN_MAP[tNum]) specs["Terén"] = TERRAIN_MAP[tNum];
    else if (!specs["Terén"] && /mierne\s+svahovit[ýy]/i.test(String(descText || ""))) specs["Terén"] = "Mierne svahovitý";
    else if (!specs["Terén"] && /\brovinat[ýy]\b/i.test(String(descText || ""))) specs["Terén"] = "Rovinatý";
    else if (!specs["Terén"] && /\bsvahovit[ýy]\b/i.test(String(descText || ""))) specs["Terén"] = "Svahovitý";

    const locNum = Number(src.plot_location);
    if (!isNaN(locNum) && PLOT_LOCATION_MAP[locNum]) specs["Umiestnenie"] = PLOT_LOCATION_MAP[locNum];

    const rtbNum = Number(src.ready_to_build);
    if (!isNaN(rtbNum) && READY_TO_BUILD_MAP[rtbNum]) specs["Pripravenosť k výstavbe"] = READY_TO_BUILD_MAP[rtbNum];

    const roadNum = Number(src.road);
    if (!isNaN(roadNum) && ROAD_MAP[roadNum]) specs["Prístupová cesta"] = ROAD_MAP[roadNum];
  } else {
    const heating = extractHeating(src, descText, propType);
    if (heating) specs["Vykurovanie"] = heating;

    const construction = extractConstruction(src, descText, propType);
    if (construction) specs["Konštrukcia"] = construction;

    const energyCert = extractEnergyCertificate(src, descText, propType);
    if (energyCert) specs["Energetický certifikát"] = energyCert;
  }

  delete specs["Stav objektu"];
  delete specs["Stav"];

  return specs;
}

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

      const agentIdStr = String(p.agentId || p.agent_id || p.user_id || "").trim();
      let cleanAgent = p.agent || p.broker || p.makler || null;
      let cleanAgentId = p.agentId || p.agent_id || p.user_id || null;

      // Odstránenie generického fallbacku Peter Duda pre historické/neznáme zákazky
      if (agentIdStr === "2869562781") {
        cleanAgent = null;
        cleanAgentId = null;
      }

      // Oprava počtu izieb podľa nadpisu (napr. "3 izbový byt" -> 3 izby namiesto starého posunu subcategory 404 -> 4)
      let fixedRooms = p.rooms;
      if (p.title && typeof p.title === "string") {
        const mRooms = p.title.match(/(\d+)\s*[-–]?\s*izbov/i);
        if (mRooms) {
          fixedRooms = parseInt(mRooms[1], 10);
        }
      }

      let categoryLabel = p.categoryLabel || "";
      if (!categoryLabel) {
        if (p.type === "byt") {
          const rNum = Number(fixedRooms);
          categoryLabel = (!isNaN(rNum) && rNum > 0) ? `${rNum}-izbový byt` : "Byt";
        } else if (p.type === "dom") {
          categoryLabel = "Rodinný dom";
        } else if (p.type === "pozemi") {
          categoryLabel = "Stavebný pozemok";
        } else {
          categoryLabel = "Komerčné / Investícia";
        }
      }

      // Rozlíšenie interného čísla zákazky (z poľa data.id v RealSofte, napr. "09 08 77 00 10 30" alebo "999 001") od systémového RS-<object_id>
      let resolvedInternalId = p.internalId || p.customId || p.contractId || p.orderId || p.zakazkaId || null;
      if (!resolvedInternalId && p.id && !String(p.id).startsWith("RS-") && String(p.id) !== String(p.externalId || "")) {
        resolvedInternalId = String(p.id).trim();
      }
      if (
        (idStr === "RS-3847665965" || idStr === "3847665965" || String(p.externalId) === "RS-3847665965") &&
        (!resolvedInternalId || resolvedInternalId === "JuJFHdNq1f2")
      ) {
        resolvedInternalId = "09 08 77 00 10 30";
      }

      const objectIdStr = String(p.objectId || idStr.replace(/^RS-/, "")).trim();
      const virtualTourUrl = statusVal === "sold" ? null : extractVirtualTourUrl(p, p.desc, objectIdStr);
      const videoUrls = extractVideoUrls(p, p.desc);
      const effectiveCreatedAt = getEffectiveCreatedAt(p);
      const cleanTechnicalSpecs = buildTechnicalSpecs(p, p.type, p.desc, p.technicalSpecs, objectIdStr);

      if (virtualTourUrl) {
        if (!finalTags.some(t => String(t).toUpperCase().includes("3D"))) {
          finalTags.push("3D PREHLIADKA");
        }
      } else {
        finalTags = finalTags.filter(t => !String(t).toUpperCase().includes("3D"));
      }

      return {
        ...p,
        internalId: resolvedInternalId,
        rooms: fixedRooms,
        categoryLabel: categoryLabel,
        agent: cleanAgent,
        agentId: cleanAgentId,
        tags: finalTags,
        status: statusVal,
        isReserved: isReserved,
        image: safeImage,
        images: safeImages.length > 0 ? safeImages : [safeImage],
        virtualTourUrl: virtualTourUrl,
        videoUrl: videoUrls[0] || null,
        videoUrls: videoUrls,
        createdAt: effectiveCreatedAt,
        technicalSpecs: cleanTechnicalSpecs
      };
    });

    cleanProperties.sort(comparePropertiesByCreatedAtDesc);

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
    properties = [...blobResult.properties].sort(comparePropertiesByCreatedAtDesc);
    source = "netlify-blobs";
  } else {
    properties = [...DEFAULT_PROPERTIES].sort(comparePropertiesByCreatedAtDesc);
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
