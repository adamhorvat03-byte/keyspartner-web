// ==========================================================================
// APLIKAČNÁ LOGIKA KEYS PARTNERS a.s. (ČISTO PO SLOVENSKY)
// ==========================================================================

// --- Databáza nehnuteľností (Reálne ponuky realitnej divízie z Realsoftu) ---
let PROPERTIES = [
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
        desc: "Divízia sprostredkovania nehnuteľností spoločnosti Keys Partners, a.s. v zastúpení nášho Klienta Vám v portfóliu ponúka na PREDAJ 21 stavebných pozemkov v novovybudovanej obytnej zóne v obci Ľubotice. Pozemky sú rovinaté, pripravené na individuálnu bytovú výstavbu rodinných domov. Súčasťou projektu sú všetky inžinierske siete dotiahnuté k hraniciam pozemkov a prístupová asfaltová cesta. Pre viac informácií alebo dohodnutie obhliadky kontaktujte nášho realitného makléra.",
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
            "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
        ],
        tags: ["PREDAJ", "SLÁNSKE VRCHY", "3D PREHLIADKA"],
        isReserved: false,
        agentId: 1,
        desc: "Divízia sprostredkovania nehnuteľností spoločnosti Keys Partners, a.s. v zastúpení nášho Klienta Vám v portfóliu ponúka na PREDAJ pozemok P1 a P2 v obci Kokošovce časť Sigord, situovaný na slnečnej južnej strane Slánskych Vrchov. Ideálna ponuka pre klientov hľadajúcich pokoj, rekreáciu a čistú prírodu. Vhodný pre stavbu rodinného domu alebo rekreačnej chaty. Siete sú v dosahu, prístup je bezproblémový. Pre 3D obhliadku nehnuteľnosti a dokumentáciu kontaktujte nášho makléra.",
        technicalSpecs: {
            "Inžinierske siete": "Elektrina v dosahu, studňa, žumpa",
            "Stav objektu": "Lesné tiché zátišie",
            "Konštrukcia / Terén": "Mierne svahovitý",
            "Prístupová cesta": "Spevnená lesná cesta",
            "Orientácia": "Južná strana Slánskych vrchov"
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
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
        ],
        tags: ["PREDAJ", "3D PREHLIADKA", "OVERENÁ PONUKA"],
        isReserved: false,
        agentId: 1,
        desc: "Divízia sprostredkovania nehnuteľností spoločnosti Keys Partners, a.s. v zastúpení nášho Klienta Vám v portfóliu ponúka na PREDAJ zrekonštruovaný 3-izbový byt v Prešove. Byt prešiel kompletnou a vkusnou modernou rekonštrukciou: nové rozvody elektriny, vody, stierky, sadrokartónové stropy, podlahy a moderná kuchynská linka so zabudovanými spotrebičmi. Úžitková plocha je 74 m² vrátane priestrannej loggie. Bytový dom je zateplený s novým tichým výťahom.",
        technicalSpecs: {
            "Inžinierske siete": "Voda, plyn, elektrina, optický internet",
            "Vykurovanie": "Ústredné diaľkové vykurovanie",
            "Stav objektu": "Kompletná rekonštrukcia (2024)",
            "Konštrukcia": "Panel / zateplený bytový dom",
            "Balkón / Loggia": "Zasklená loggia (4 m²)",
            "Parkovanie": "Verejné rezidentské pred domom",
            "Energetický certifikát": "Trieda B"
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
            "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
        ],
        tags: ["PREDAJ", "REZERVOVANÉ"],
        isReserved: true,
        status: "reserved",
        agentId: 2,
        desc: "Hľadáte istotu a zhodnotenie? Divízia sprostredkovania nehnuteľností spoločnosti Keys Partners a.s. v zastúpení nášho klienta Vám v portfóliu ponúka na PREDAJ slnečný pozemok v obci Fintice na ulici Ružová. Podľa aktuálneho a platného územného plánu obce je pozemok určený na individuálnu bytovú výstavbu rodinného domu. Siete a prístupová komunikácia priamo pri pozemku. Skvelá a bezpečná investícia.",
        technicalSpecs: {
            "Inžinierske siete": "Voda, elektrina, plyn v dosahu 15m",
            "Stav objektu": "Pripravené na výstavbu",
            "Konštrukcia / Terén": "Mierne svahovitý, slnečný",
            "Prístupová cesta": "Obecná asfaltová komunikácia",
            "Orientácia": "Južná orientácia"
        }
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
            "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
        ],
        tags: ["SPROSTREDKOVANÉ", "PREDANÉ"],
        isReserved: false,
        status: "sold",
        agentId: 2,
        desc: "Divízia sprostredkovania nehnuteľností spoločnosti Keys Partners, a.s. Vám v zastúpení klienta ponúka NA PREDAJ stavebný pozemok v meste Hanušovce nad Topľou. Pozemok je rovinatý až mierne svahovitý, nachádza sa v tichej zastavanej časti mesta. Inžinierske siete sú dostupné na hranici pozemku. Ideálna možnosť stavby domu za dostupnú cenu.",
        technicalSpecs: {
            "Inžinierske siete": "Elektrina a voda na hranici pozemku",
            "Stav objektu": "Pripravené na výstavbu",
            "Konštrukcia / Terén": "Rovinatý až mierne svahovitý",
            "Prístupová cesta": "Mestská prístupová komunikácia",
            "Orientácia": "Východ / Juh"
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
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
        ],
        tags: ["PRENÁJOM", "NOVINKA", "3D PREHLIADKA"],
        isReserved: false,
        agentId: 2,
        desc: "Na prenájom exkluzívny, kompletne a moderne zariadený 2-izbový byt s balkónom v lukratívnej novostavbe na Werferovej ulici v Košiciach (vedľa centrály KEYS PARTNERS). Byt s úžitkovou plochou 55 m² sa nachádza na 2. poschodí. Súčasťou ceny je aj vlastné vyhradené parkovacie miesto. Kompletné vybavenie vrátane spotrebičov, klimatizácie a internetu. Voľný ihneď.",
        technicalSpecs: {
            "Inžinierske siete": "Voda, elektrina, optický internet, klimatizácia",
            "Vykurovanie": "Podlahové kúrenie / vlastný termostat",
            "Stav objektu": "Novostavba (2023)",
            "Konštrukcia": "Tehla / Železobetónový monolit",
            "Balkón / Loggia": "Slnečný balkón (5 m²)",
            "Parkovanie": "Vyhradené parkovacie státie v cene",
            "Energetický certifikát": "Trieda A"
        }
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
        desc: "Exkluzívny rodinný dom v tichej a vyhľadávanej lokalite Prešov - Šidlovec. Nehnuteľnosť je aktuálne v štádiu rezervácie.",
        technicalSpecs: {
            "Inžinierske siete": "Voda, elektrina, plyn, kanalizácia, optika",
            "Stav objektu": "Novostavba",
            "Konštrukcia": "Tehla / zateplenie",
            "Energetický certifikát": "Trieda A"
        }
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
        desc: "Úspešne sprostredkovaný prenájom kompletne zrekonštruovaného 2-izbového bytu v Prešove na Solivare.",
        technicalSpecs: {
            "Inžinierske siete": "Voda, elektrina, optický internet",
            "Vykurovanie": "Ústredné diaľkové",
            "Stav objektu": "Kompletná rekonštrukcia",
            "Balkón / Loggia": "Zasklená loggia"
        }
    }
];

// --- Reálni makléri a manažéri KEYS PARTNERS a.s. ---
const AGENTS = [
    {
        id: 2,
        name: "Ing. Branislav HORVÁT",
        role: "Realitný maklér / Partner",
        phone: "+421 905 785 951",
        email: "branislav_horvat@keyspartners.sk",
        image: "brano.jpg"
    },
    {
        id: 1,
        name: "Peter DUDA",
        role: "Realitný maklér / Vzťahový riaditeľ",
        phone: "+421 907 441 405",
        email: "peter_duda@keyspartners.sk",
        image: "duda.jpg"
    },
    {
        id: 3,
        name: "JUDr. Peter PELLA",
        role: "Realitný maklér",
        phone: "+421 917 817 207",
        email: "peter_pella@keyspartners.sk",
        image: "pella.jpg"
    }
];

// --- Globálny stav aplikácie ---
let activeFilters = {
    deal: "vsetko",         // vsetko / predaj / prenajom
    category: "vsetky",     // vsetky / byt / pozemi / komercne
    query: "",
    propertyType: "vsetky",
    maxPrice: null,
    agentId: null,
    agentName: null
};

// ==========================================================================
// SPÚŠŤANIE PRI NAČÍTANÍ (INIT)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderListings();
    renderAgents();
    initScrollReveal(); // Spustenie animácií pri skrollovaní
    setupEventListeners();
    loadPropertiesFromApi(); // Asynchrónne načítanie aktuálnych inzerátov z Netlify Blobs
});

// --- Asynchrónne načítanie nehnuteľností z Netlify Blobs cez /api/properties ---
async function loadPropertiesFromApi() {
    try {
        const res = await fetch(`/api/properties?_=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) return;
        const result = await res.json();
        if (result && Array.isArray(result.data) && result.data.length > 0) {
            // Filtrovanie testovacích nehnuteľností a falošných inzerátov z exportu maklérov
            PROPERTIES = result.data.filter(p => {
                const idStr = String(p.id || p.externalId || "");
                if (idStr.startsWith("RS-1789") || idStr.startsWith("RS-TEST") || idStr === "RS-88421") return false;
                if (/^\d{8,12}$/.test(idStr) || ["1162803367", "2739883856", "2742504158", "2756409051"].includes(idStr)) return false;
                if (p.title && p.title.includes("Exkluzívny 3-izbový byt")) return false;
                if ((p.price === 0 || !p.price) && (!p.area || p.area === 0) && String(p.title).startsWith("Byt na predaj (Pre")) return false;
                return true;
            }).map(p => {
                if (Array.isArray(p.tags)) {
                    p.tags = p.tags.filter(t => t && String(t).trim().toUpperCase() !== "REALSOFT");
                }
                if (isPropertySoldOrCompleted(p)) {
                    p.status = "sold";
                    p.isReserved = false;
                } else if (isPropertyReserved(p)) {
                    p.status = "reserved";
                    p.isReserved = true;
                }
                return p;
            });
            renderListings();
            renderAgents();
            if (activeFilters.agentId) {
                const curAgent = AGENTS.find(a => String(a.id) === String(activeFilters.agentId));
                if (curAgent) renderAgentFilterBanner(curAgent);
            }
            console.log(`[KEYS PARTNERS] Načítané nehnuteľnosti z API (${PROPERTIES.length} položiek, zdroj: ${result.source || 'live'}).`);
        }
    } catch (err) {
        console.warn("[KEYS PARTNERS] API nedostupné, použijú sa východiskové ponuky:", err);
    }
}

// --- Inicializácia témy ---
function initTheme() {
    let savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
        savedTheme = "dark"; // Predvolene tmavý režim pre každého zákazníka pri prvej návšteve
    }
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeToggleIcon(savedTheme);
}

function updateThemeToggleIcon(theme) {
    const icon = document.querySelector("#themeToggle i");
    if (icon) {
        if (theme === "dark") {
            icon.className = "fa-solid fa-sun";
        } else {
            icon.className = "fa-solid fa-moon";
        }
    }
    const drawerIcon = document.getElementById("drawerThemeIcon");
    const drawerStatus = document.getElementById("drawerThemeStatus");
    if (drawerIcon) {
        drawerIcon.className = theme === "dark" ? "fa-solid fa-sun drawer-theme-icon" : "fa-solid fa-moon drawer-theme-icon";
    }
    if (drawerStatus) {
        drawerStatus.textContent = theme === "dark" ? "Tmavý" : "Svetlý";
    }
}

// ==========================================================================
// VYKRESLENIE PRVKOV (RENDERING)
// ==========================================================================

// --- Pomocné funkcie pre bezpečné vykresľovanie obrázkov (Fallback & prevencia fotiek maklérov) ---
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

function getSafePropertyImage(prop) {
    if (!prop) return NEUTRAL_PROPERTY_PLACEHOLDER;
    if (Array.isArray(prop.images) && prop.images.length > 0) {
        const found = prop.images.find(img => img && typeof img === "string" && !isAgentPhoto(img));
        if (found) return found;
    }
    if (prop.image && typeof prop.image === "string" && !isAgentPhoto(prop.image)) {
        return prop.image;
    }
    return NEUTRAL_PROPERTY_PLACEHOLDER;
}

function getSafePropertyImages(prop) {
    if (!prop) return [NEUTRAL_PROPERTY_PLACEHOLDER];
    let imgs = [];
    if (Array.isArray(prop.images) && prop.images.length > 0) {
        imgs = prop.images.filter(img => img && typeof img === "string" && !isAgentPhoto(img));
    }
    if (imgs.length === 0 && prop.image && typeof prop.image === "string" && !isAgentPhoto(prop.image)) {
        imgs.push(prop.image);
    }
    if (imgs.length === 0) {
        imgs.push(NEUTRAL_PROPERTY_PLACEHOLDER);
    }
    return imgs;
}

// --- Pomocná funkcia: Bezpečná normalizácia textu pre detekciu stavu ponuky ---
function cleanTextForStatusCheck(str) {
    if (!str) return "";
    return String(str)
        .toLowerCase()
        // Nahradiť všetky druhy úvodzoviek, zátvoriek a interpunkcie medzerou
        .replace(/["'“”„«»`´\\]/g, " ")
        .replace(/&(?:quot|ldquo|rdquo|lsquo|rsquo);/gi, " ")
        .replace(/[\(\)\[\]\{\}\<\>_\-\/:;,.*+?!#~%|^$@]+/g, " ")
        // Nahradenie známych artefaktov kódovania (Windows-1250 / UTF-8)
        .replace(/a\?/g, "y")
        .replace(/a1/g, "y")
        .replace(/a!/g, "a")
        // Odstránenie diakritiky (normalize NFD)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

// --- Detekcia ukončených obchodov (Sprostredkované: predané, prenajaté, v nájme, sprostredkované) ---
function isPropertySoldOrCompleted(item) {
    if (!item) return false;

    const idStr = String(item.id || item.externalId || "").trim();
    // Zabezpečenie okamžitého zaradenia pre konkrétnu zákazku 'PREDANÝ - Stavebný pozemok TIMEA'
    if (idStr === "RS-3253858396" || idStr === "3253858396") {
        return true;
    }

    if (
        item.status === "sold" ||
        item.status === "rented" ||
        Number(item.status) === 4 ||
        item.status === "4" ||
        item.isSold === true ||
        item.is_sold === true ||
        item.is_rented === true ||
        item.sold === 1 ||
        item.sold === true ||
        item.rented === 1 ||
        item.rented === true
    ) {
        return true;
    }

    const titleText = `${item.title || ""} ${item.shortTitle || ""} ${item.name || ""} ${item.nazov || ""} ${item.headline || ""}`;
    const statusText = `${item.status || ""} ${item.substatus || ""} ${item.stav || ""} ${item.stav_zakazky || ""} ${item.status_name || ""} ${item.deal_status || ""} ${item.dovod_ukoncenia || ""}`;
    const tagsText = Array.isArray(item.tags) ? item.tags.join(" ") : String(item.tags || "");
    const combined = `${titleText} ${statusText} ${tagsText}`;

    // 1. Kontrola na normalizovanom texte (bez úvodzoviek, interpunkcie a diakritiky)
    const cleaned = " " + cleanTextForStatusCheck(combined) + " ";
    const soldWordRegex = /\s(predan|sprostredkovan|prenajat|sold|rented|zrealizovan)/i;
    const rentPhraseRegex = /\sv\s+(?:pre)?najm/i;
    const endSalePhraseRegex = /\spredaj\s+ukoncen/i;

    if (soldWordRegex.test(cleaned) || rentPhraseRegex.test(cleaned) || endSalePhraseRegex.test(cleaned)) {
        return true;
    }

    // 2. Záložná kontrola na pôvodnom texte (ignorovanie akýchkoľvek obalujúcich úvodzoviek, pomlčiek a znakov)
    const directSoldRegex = /(?:^|[^a-zA-Z0-9\u00C0-\u017F])(predan[eéyýaáou]?|sprostredkovan[eéyýaáou]?|prenajat[eéyýaáou]?|sold|rented|zrealizovan[eéyýaáou]?|v\s+(?:pre)?n[aá]jm[ie]|predaj\s+ukon[cč]en)/i;
    if (directSoldRegex.test(combined)) {
        return true;
    }

    return false;
}

// --- Detekcia rezervovaných ponúk ---
function isPropertyReserved(item) {
    if (!item) return false;
    if (isPropertySoldOrCompleted(item)) return false;

    if (
        item.isReserved === true ||
        item.is_reserved === true ||
        item.rezervovane === true ||
        item.status === "reserved" ||
        Number(item.status) === 3 ||
        item.status === "3"
    ) {
        return true;
    }

    const titleText = `${item.title || ""} ${item.shortTitle || ""} ${item.name || ""} ${item.nazov || ""} ${item.headline || ""}`;
    const statusText = `${item.status || ""} ${item.substatus || ""} ${item.stav || ""} ${item.stav_zakazky || ""}`;
    const tagsText = Array.isArray(item.tags) ? item.tags.join(" ") : String(item.tags || "");
    const combined = `${titleText} ${statusText} ${tagsText}`;

    const cleaned = " " + cleanTextForStatusCheck(combined) + " ";
    const reservedWordRegex = /\s(rezervovan|reserved)/i;
    if (reservedWordRegex.test(cleaned)) {
        return true;
    }

    const directReservedRegex = /(?:^|[^a-zA-Z0-9\u00C0-\u017F])(rezervovan[eéyýaáou]?|reserved)/i;
    if (directReservedRegex.test(combined)) {
        return true;
    }

    return false;
}

// --- Pomocná funkcia: Rozdelenie nehnuteľnosti do 3 skupín podľa stavu transakcie ---
function getPropertyStatusGroup(prop) {
    if (!prop) return "active";
    if (isPropertySoldOrCompleted(prop)) return "sold";
    if (isPropertyReserved(prop)) return "reserved";
    return "active";
}

// --- Pomocné funkcie pre bezpečné triedenie kategórií / typov nehnuteľností ---
function isHouseProperty(item) {
    if (!item) return false;
    if (item.type === "dom") return true;
    if (item.type === "byt" || item.type === "pozemi" || item.type === "pozemok" || item.type === "komercne") {
        return false;
    }
    const text = cleanTextForStatusCheck(`${item.title || ""} ${item.category || ""} ${item.shortTitle || ""} ${Array.isArray(item.tags) ? item.tags.join(" ") : ""}`);
    if (/\bpozem(?:ok|ky)?\b/i.test(text) && !/\b(?:rodinn[eéyý]|dom[yu]?|vil[aeu])\b/i.test(item.category || "")) {
        return false;
    }
    return /\b(rodinny dom|rodinne domy|vila|vily|chalupa|chalupy)\b/i.test(text) || (/\bdom\b/i.test(text) && !/\bpozem(?:ok|ky)?\b/i.test(text));
}

function isFlatProperty(item) {
    if (!item) return false;
    if (item.type === "byt") return true;
    if (item.type === "dom" || item.type === "pozemi" || item.type === "pozemok" || item.type === "komercne") {
        return false;
    }
    const text = cleanTextForStatusCheck(`${item.title || ""} ${item.category || ""} ${item.shortTitle || ""}`);
    return /\b(byt|byty|garsonk|apartman)\b/i.test(text);
}

function isLandProperty(item) {
    if (!item) return false;
    if (item.type === "pozemi" || item.type === "pozemok") return true;
    if (item.type === "dom" || item.type === "byt" || item.type === "komercne") {
        return false;
    }
    const text = cleanTextForStatusCheck(`${item.title || ""} ${item.category || ""} ${item.shortTitle || ""}`);
    return /\b(pozemok|pozemky|ornej pody|zahrada)\b/i.test(text);
}

function isCommercialProperty(item) {
    if (!item) return false;
    if (item.type === "komercne") return true;
    if (item.type === "dom" || item.type === "byt" || item.type === "pozemi" || item.type === "pozemok") {
        return false;
    }
    const text = cleanTextForStatusCheck(`${item.title || ""} ${item.category || ""} ${item.shortTitle || ""}`);
    return /\b(komerc|priestor|kancelar|sklad|hala|budova)\b/i.test(text);
}

function matchesPropertyTypeFilter(item, filterVal) {
    if (!filterVal || filterVal === "vsetky") return true;
    if (filterVal === "dom") return isHouseProperty(item);
    if (filterVal === "byt") return isFlatProperty(item);
    if (filterVal === "pozemi") return isLandProperty(item);
    if (filterVal === "komercne") return isCommercialProperty(item);
    return item.type === filterVal;
}

// --- Vytvorenie elementu karty nehnuteľnosti vrátane avatara makléra ---
function createPropertyCardElement(prop) {
    const card = document.createElement("div");
    const grp = getPropertyStatusGroup(prop);
    const cardStatusClass = grp === "reserved" ? "reserved" : (grp === "sold" ? "sold" : "");
    card.className = `listing-card ${cardStatusClass}`;
    card.setAttribute("data-id", prop.id);
    
    // Dynamické priradenie správneho makléra (Horvát pre Soľník, Duda pre ostatné atď.)
    const agent = getAgentForProperty(prop);
    
    // Vytvorenie odznakov (vynechanie štítku REALSOFT a čistenie pre ukončené/rezervované obchody)
    let badgesHtml = "";
    let cleanTags = (prop.tags || []).filter(tag => tag && String(tag).trim().toUpperCase() !== "REALSOFT");

    if (grp === "sold") {
        // Pre kategóriu Sprostredkované odstránime zavádzajúci štítok "PREDAJ" a pridáme zelené štítky
        cleanTags = cleanTags.filter(t => !["PREDAJ"].includes(String(t).trim().toUpperCase()));
        const isRent = String(prop.deal).includes("prenaj") || /prenaj|n[aá]jm/i.test(`${prop.title || ""} ${prop.status || ""}`);
        const statusTag = isRent ? "PRENAJATÉ" : "PREDANÉ";
        if (!cleanTags.some(t => String(t).toUpperCase().includes("SPROSTREDKOVANÉ"))) {
            cleanTags.unshift("SPROSTREDKOVANÉ");
        }
        if (!cleanTags.some(t => String(t).toUpperCase().includes("PREDANÉ") || String(t).toUpperCase().includes("PRENAJATÉ"))) {
            cleanTags.unshift(statusTag);
        }
    } else if (grp === "reserved") {
        // Pre kategóriu Rezervované odstránime štítok "PREDAJ" a zabezpečíme červený štítok "REZERVOVANÉ"
        cleanTags = cleanTags.filter(t => !["PREDAJ"].includes(String(t).trim().toUpperCase()));
        if (!cleanTags.some(t => String(t).toUpperCase().includes("REZERVOVANÉ"))) {
            cleanTags.unshift("REZERVOVANÉ");
        }
    }

    cleanTags.forEach(tag => {
        let badgeClass = "badge-dark";
        if (tag.includes("REZERVOVANÉ")) badgeClass = "badge-red";
        if (tag.includes("SPROSTREDKOVANÉ") || tag.includes("PREDANÉ") || tag.includes("PRENAJATÉ") || tag.includes("V PRENÁJME")) badgeClass = "badge-green";
        if (tag.includes("3D PREHLIADKA") || tag.includes("VOĽNÝ IHNEĎ") || tag.includes("NOVINKA")) badgeClass = "badge-yellow";
        badgesHtml += `<span class="badge ${badgeClass}">${tag}</span>`;
    });
    
    // Formátovanie ceny
    let priceFormatted = "";
    if (prop.priceCustom && typeof prop.priceCustom === "string") {
        priceFormatted = prop.priceCustom;
    } else if (prop.price && Number(prop.price) > 0) {
        priceFormatted = prop.deal === "prenajom" 
            ? `${Number(prop.price).toLocaleString("sk-SK")} € / mesiac`
            : `${Number(prop.price).toLocaleString("sk-SK")} €`;
    } else {
        priceFormatted = "Cena na vyžiadanie";
    }
        
    // Formátovanie detailov na spodku
    let specsHtml = "";
    const areaStr = (prop.area && Number(prop.area) > 0) ? `${prop.area} m²` : null;
    const validRooms = prop.rooms !== null && prop.rooms !== undefined && String(prop.rooms).trim() !== "" && String(prop.rooms).toLowerCase() !== "null" && String(prop.rooms).trim() !== "-";
    const validFloor = prop.floor !== null && prop.floor !== undefined && String(prop.floor).trim() !== "" && String(prop.floor).toLowerCase() !== "null" && String(prop.floor).trim() !== "-";

    if (prop.type === "byt" || prop.type === "dom") {
        let roomsStr = "";
        if (validRooms) {
            const rNum = Number(prop.rooms);
            if (!isNaN(rNum)) {
                roomsStr = rNum === 1 ? "1 izba" : (rNum >= 2 && rNum <= 4 ? `${rNum} izby` : `${rNum} izieb`);
            } else {
                roomsStr = String(prop.rooms);
            }
        }

        let floorStr = "";
        if (validFloor) {
            floorStr = String(prop.floor).includes("p.") ? String(prop.floor) : `${prop.floor} p.`;
        }

        specsHtml = `
            ${areaStr ? `<div class="spec-item"><i class="fa-solid fa-ruler-combined"></i> <span>${areaStr}</span></div>` : ''}
            ${roomsStr ? `<div class="spec-item"><i class="fa-solid fa-bed"></i> <span>${roomsStr}</span></div>` : ''}
            ${floorStr ? `<div class="spec-item"><i class="fa-solid fa-building"></i> <span>${floorStr}</span></div>` : ''}
        `;
        if (!specsHtml.trim()) {
            specsHtml = `<div class="spec-item"><i class="fa-solid fa-home"></i> <span>${prop.type === 'dom' ? 'Rodinný dom' : 'Rezidenčné'}</span></div>`;
        }
    } else if (prop.type === "pozemi") {
        specsHtml = `
            ${areaStr ? `<div class="spec-item"><i class="fa-solid fa-ruler-combined"></i> <span>${areaStr}</span></div>` : ''}
            <div class="spec-item"><i class="fa-solid fa-seedling"></i> <span>Pozemok</span></div>
            <div class="spec-item"><i class="fa-solid fa-map"></i> <span>Stavebný</span></div>
        `;
    } else {
        specsHtml = `
            ${areaStr ? `<div class="spec-item"><i class="fa-solid fa-ruler-combined"></i> <span>${areaStr}</span></div>` : ''}
            <div class="spec-item"><i class="fa-solid fa-briefcase"></i> <span>Komerčné</span></div>
            <div class="spec-item"><i class="fa-solid fa-key"></i> <span>Voľné</span></div>
        `;
    }

    const safeImg = getSafePropertyImage(prop);

    card.innerHTML = `
        <div class="card-img-wrapper">
            <div class="card-badges">${badgesHtml}</div>
            <img src="${safeImg}" alt="${prop.title}" loading="lazy" onerror="if(this.src!=='${NEUTRAL_PROPERTY_PLACEHOLDER}')this.src='${NEUTRAL_PROPERTY_PLACEHOLDER}';">
            ${agent ? `
            <div class="card-agent-badge" title="Zodpovedný maklér: ${agent.name}">
                <img src="${agent.image}" alt="${agent.name}" class="card-agent-img">
            </div>` : ''}
            <div class="card-price-tag">${priceFormatted}</div>
        </div>
        <div class="card-body">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span class="card-type">${prop.type === "byt" ? "Rezidenčné" : prop.type === "dom" ? "Rodinný dom" : prop.type === "pozemi" ? "Stavebný pozemok" : "Komerčné / Investícia"}</span>
                <span style="font-size: 0.72rem; color: var(--text-secondary); font-weight: 600;">ID: ${prop.externalId || prop.id}</span>
            </div>
            <h3 class="card-title">${prop.title}</h3>
            <div class="card-location"><i class="fa-solid fa-location-dot"></i> ${prop.location}</div>
            <div class="card-specs">${specsHtml}</div>
            <div class="card-action" style="margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--border-color); display: flex; justify-content: flex-end; align-items: center; font-size: 0.82rem; font-weight: 700; color: var(--brand-yellow);">
                <span>Detail ponuky</span>
                <i class="fa-solid fa-arrow-right" style="margin-left: 6px; font-size: 0.75rem;"></i>
            </div>
        </div>
    `;
    
    // Kliknutie otvorí modálne okno s detailom
    card.addEventListener("click", () => openPropertyModal(prop.id || prop.externalId));
    
    return card;
}

// --- Vykreslenie nehnuteľností rozdelených do troch samostatných sekcií ---
function renderListings() {
    const container = document.getElementById("listingsGrid");
    const noResults = document.getElementById("noResults");
    if (!container) return;
    
    // Filtrovanie dát
    const filtered = PROPERTIES.filter(item => {
        // Filter podľa konkrétneho makléra (kliknutie na profil makléra)
        if (activeFilters.agentId) {
            const propAgent = getAgentForProperty(item);
            if (!propAgent || String(propAgent.id) !== String(activeFilters.agentId)) {
                return false;
            }
            // Zobraziť iba aktívne ponuky makléra (vylúčiť ukončené/predané obchody aj rezervované)
            if (getPropertyStatusGroup(item) !== "active") {
                return false;
            }
        }

        // Filter podľa predaja/prenájmu
        if (activeFilters.deal !== "vsetko" && item.deal !== activeFilters.deal) {
            return false;
        }
        
        // Filter podľa kategórie (tabs)
        if (activeFilters.category !== "vsetky" && !matchesPropertyTypeFilter(item, activeFilters.category)) {
            return false;
        }
        
        // Filter podľa typu (select z vyhľadávača)
        if (activeFilters.propertyType !== "vsetky" && !matchesPropertyTypeFilter(item, activeFilters.propertyType)) {
            return false;
        }
        
        // Filter podľa ceny
        if (activeFilters.maxPrice && item.price > activeFilters.maxPrice) {
            return false;
        }
        
        // Filter podľa vyhľadávacieho dopytu
        if (activeFilters.query.trim() !== "") {
            const q = activeFilters.query.toLowerCase();
            const titleMatch = (item.title || "").toLowerCase().includes(q);
            const locationMatch = (item.location || "").toLowerCase().includes(q);
            const descMatch = (item.desc || "").toLowerCase().includes(q);
            if (!titleMatch && !locationMatch && !descMatch) {
                return false;
            }
        }
        
        return true;
    });

    // Kontrola a synchronizácia bannera filtra makléra
    if (!activeFilters.agentId) {
        const existingBanner = document.getElementById("agentFilterBanner");
        if (existingBanner) existingBanner.remove();
    }

    // Vyčistenie kontajnera
    container.innerHTML = "";
    
    if (filtered.length === 0) {
        container.style.display = "none";
        if (noResults) noResults.style.display = "block";
        return;
    }
    
    container.style.display = "flex";
    if (noResults) noResults.style.display = "none";

    // Rozdelenie do 3 kategórií: Novinky / Na predaj, Rezervované, Sprostredkované
    const groups = [
        {
            key: "active",
            title: "Novinky / Na predaj",
            badgeClass: "badge-active",
            icon: "fa-solid fa-fire",
            items: []
        },
        {
            key: "reserved",
            title: "Rezervované",
            badgeClass: "badge-reserved",
            icon: "fa-solid fa-bookmark",
            items: []
        },
        {
            key: "sold",
            title: "Sprostredkované",
            badgeClass: "badge-sold",
            icon: "fa-solid fa-circle-check",
            items: []
        }
    ];

    filtered.forEach(prop => {
        const grpKey = getPropertyStatusGroup(prop);
        if (grpKey === "sold") {
            groups[2].items.push(prop);
        } else if (grpKey === "reserved") {
            groups[1].items.push(prop);
        } else {
            groups[0].items.push(prop);
        }
    });

    groups.forEach(group => {
        // Pri filtrovaní makléra vynecháme prázdne sekcie (napr. Sprostredkované s 0 ponukami)
        if (activeFilters.agentId && group.items.length === 0) {
            return;
        }

        const sectionEl = document.createElement("div");
        sectionEl.className = "portfolio-group-section";
        sectionEl.setAttribute("data-group", group.key);

        const countText = group.items.length === 1 
            ? "1 ponuka" 
            : (group.items.length >= 2 && group.items.length <= 4 
                ? `${group.items.length} ponuky` 
                : `${group.items.length} ponúk`);

        sectionEl.innerHTML = `
            <div class="portfolio-group-header">
                <h3 class="portfolio-group-title">
                    <i class="${group.icon}"></i>
                    <span>${group.title}</span>
                </h3>
                <span class="portfolio-group-badge ${group.badgeClass}">${countText}</span>
            </div>
        `;

        if (group.items.length > 0) {
            const carouselWrapper = document.createElement("div");
            carouselWrapper.className = "portfolio-carousel-wrapper";

            const prevBtn = document.createElement("button");
            prevBtn.type = "button";
            prevBtn.className = "carousel-nav-btn carousel-prev-btn";
            prevBtn.setAttribute("aria-label", "Predchádzajúca ponuka");
            prevBtn.setAttribute("title", "Predchádzajúca ponuka");
            prevBtn.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;

            const nextBtn = document.createElement("button");
            nextBtn.type = "button";
            nextBtn.className = "carousel-nav-btn carousel-next-btn";
            nextBtn.setAttribute("aria-label", "Ďalšia ponuka");
            nextBtn.setAttribute("title", "Ďalšia ponuka");
            nextBtn.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;

            const trackEl = document.createElement("div");
            trackEl.className = "portfolio-carousel-track";

            group.items.forEach(prop => {
                trackEl.appendChild(createPropertyCardElement(prop));
            });

            // Výpočet šírky posunu (1 karta + medzera)
            const getSlideStep = () => {
                const firstCard = trackEl.querySelector(".listing-card");
                if (firstCard) {
                    const cardWidth = firstCard.getBoundingClientRect().width;
                    const style = window.getComputedStyle(trackEl);
                    const gap = parseFloat(style.columnGap || style.gap) || 24;
                    return cardWidth + gap;
                }
                return 380;
            };

            // Dynamická aktualizácia stavu navigačných šípok
            const updateArrows = () => {
                const maxScroll = trackEl.scrollWidth - trackEl.clientWidth;
                if (maxScroll <= 8) {
                    prevBtn.style.display = "none";
                    nextBtn.style.display = "none";
                    return;
                }
                prevBtn.style.display = "flex";
                nextBtn.style.display = "flex";

                if (trackEl.scrollLeft <= 10) {
                    prevBtn.classList.add("nav-disabled");
                } else {
                    prevBtn.classList.remove("nav-disabled");
                }

                if (trackEl.scrollLeft >= maxScroll - 10) {
                    nextBtn.classList.add("nav-at-end");
                } else {
                    nextBtn.classList.remove("nav-at-end");
                }
            };

            nextBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                const step = getSlideStep();
                const maxScroll = trackEl.scrollWidth - trackEl.clientWidth;
                if (trackEl.scrollLeft >= maxScroll - 15) {
                    trackEl.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    trackEl.scrollBy({ left: step, behavior: "smooth" });
                }
            });

            prevBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                const step = getSlideStep();
                if (trackEl.scrollLeft <= 15) {
                    trackEl.scrollTo({ left: trackEl.scrollWidth - trackEl.clientWidth, behavior: "smooth" });
                } else {
                    trackEl.scrollBy({ left: -step, behavior: "smooth" });
                }
            });

            trackEl.addEventListener("scroll", updateArrows, { passive: true });
            window.addEventListener("resize", updateArrows, { passive: true });

            carouselWrapper.appendChild(prevBtn);
            carouselWrapper.appendChild(trackEl);
            carouselWrapper.appendChild(nextBtn);
            sectionEl.appendChild(carouselWrapper);

            // Úvodná kontrola viditeľnosti šípok
            setTimeout(updateArrows, 60);
        } else {
            const emptyEl = document.createElement("div");
            emptyEl.className = "portfolio-group-empty";
            emptyEl.innerHTML = `<i class="fa-solid fa-circle-info"></i> <span>Aktuálne žiadne ponuky v tejto kategórii.</span>`;
            sectionEl.appendChild(emptyEl);
        }

        container.appendChild(sectionEl);
    });
}

// --- Filtrovanie portfólia konkrétneho makléra (Požiadavka 3) ---
function filterByAgent(agent) {
    if (!agent) return;
    
    // Zatvorenie modálneho okna nehnuteľnosti
    closePropertyModal();
    
    // Nastavenie aktívneho filtra pre makléra
    activeFilters.agentId = agent.id;
    activeFilters.agentName = agent.name;
    activeFilters.category = "vsetky";
    activeFilters.propertyType = "vsetky";
    activeFilters.query = "";
    activeFilters.maxPrice = null;
    activeFilters.deal = "vsetko";

    // Synchronizácia ovládacích prvkov vyhľadávača
    const searchInput = document.getElementById("searchQuery");
    if (searchInput) searchInput.value = "";
    const typeSelect = document.getElementById("propertyType");
    if (typeSelect) typeSelect.value = "vsetky";
    const maxPriceInput = document.getElementById("maxPrice");
    if (maxPriceInput) maxPriceInput.value = "";
    
    document.querySelectorAll(".filter-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-filter") === "vsetky");
    });
    document.querySelectorAll(".search-tab-btn").forEach(t => {
        t.classList.toggle("active", t.getAttribute("data-deal") === "vsetko");
    });

    // Zobrazenie bannera s informáciou o aktívnom filtri makléra
    renderAgentFilterBanner(agent);

    // Prekreslenie nehnuteľností (zobrazia sa výhradne aktívne ponuky tohto makléra)
    renderListings();

    // Plynulý posun na sekciu ponuky
    const listingsSec = document.getElementById("ponuka");
    if (listingsSec) {
        setTimeout(() => {
            listingsSec.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
    }
}

// --- Zrušenie filtra makléra ---
function clearAgentFilter() {
    activeFilters.agentId = null;
    activeFilters.agentName = null;
    
    const banner = document.getElementById("agentFilterBanner");
    if (banner) {
        banner.remove();
    }
    
    renderListings();
}

// --- Vykreslenie bannera aktívneho filtra makléra ---
function renderAgentFilterBanner(agent) {
    let banner = document.getElementById("agentFilterBanner");
    const container = document.getElementById("listingsGrid");
    if (!banner) {
        banner = document.createElement("div");
        banner.id = "agentFilterBanner";
        banner.className = "agent-filter-banner";
        if (container && container.parentNode) {
            container.parentNode.insertBefore(banner, container);
        }
    }
    
    const agentProps = PROPERTIES.filter(p => {
        const a = getAgentForProperty(p);
        return a && String(a.id) === String(agent.id) && getPropertyStatusGroup(p) === "active";
    });
    const count = agentProps.length;
    const countStr = count === 1 ? "1 aktívna ponuka" : (count >= 2 && count <= 4 ? `${count} aktívne ponuky` : `${count} aktívnych ponúk`);

    banner.innerHTML = `
        <div class="agent-filter-banner-content">
            <img src="${agent.image}" alt="${agent.name}" class="agent-filter-banner-avatar">
            <div class="agent-filter-banner-text">
                <span class="agent-filter-banner-label"><i class="fa-solid fa-filter text-gold"></i> Filtrované portfólio makléra:</span>
                <h3 class="agent-filter-banner-name">${agent.name} <span class="agent-filter-banner-count">(${countStr})</span></h3>
            </div>
        </div>
        <button type="button" class="btn-clear-agent-filter" id="clearAgentFilterBtn" title="Zrušiť filter makléra">
            <i class="fa-solid fa-xmark"></i> Zrušiť filter
        </button>
    `;
    
    const clearBtn = document.getElementById("clearAgentFilterBtn");
    if (clearBtn) {
        clearBtn.addEventListener("click", clearAgentFilter);
    }
}

// --- Vykreslenie lokálnych maklérov ---
function renderAgents() {
    const grid = document.getElementById("agentsGrid");
    if (!grid) return;
    
    grid.innerHTML = "";
    
    AGENTS.forEach(agent => {
        const card = document.createElement("div");
        card.className = "agent-card";
        
        const telHref = agent.phone.startsWith("+") 
            ? agent.phone.replace(/\s/g, '') 
            : "+421" + agent.phone.replace(/^0/, '').replace(/\s/g, '');
        
        const activeOffers = PROPERTIES.filter(p => {
            const a = getAgentForProperty(p);
            return a && String(a.id) === String(agent.id) && getPropertyStatusGroup(p) === "active";
        }).length;
        const offersCountText = activeOffers === 1 ? "1 ponuka" : (activeOffers >= 2 && activeOffers <= 4 ? `${activeOffers} ponuky` : `${activeOffers} ponúk`);

        card.innerHTML = `
            <div class="agent-img-wrapper" style="cursor: pointer;" title="Zobraziť ponuky makléra ${agent.name}">
                <img src="${agent.image}" alt="${agent.name}">
            </div>
            <div class="agent-info">
                <h3 style="cursor: pointer;" title="Zobraziť ponuky makléra ${agent.name}">${agent.name}</h3>
                <div class="agent-role">${agent.role}</div>
                <div class="agent-contact">
                    <a href="tel:${telHref}"><i class="fa-solid fa-phone"></i> ${agent.phone}</a>
                    <a href="mailto:${agent.email}"><i class="fa-solid fa-envelope"></i> ${agent.email}</a>
                </div>
                <button type="button" class="btn-agent-filter-trigger" style="margin-top: 14px; width: 100%; padding: 8px 12px; background: rgba(212,175,55,0.12); border: 1px solid var(--brand-yellow); color: var(--brand-yellow); border-radius: 8px; font-size: 0.82rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: var(--transition);">
                    <i class="fa-solid fa-list-check"></i> Aktívne ponuky (${offersCountText})
                </button>
            </div>
        `;

        const triggerBtn = card.querySelector(".btn-agent-filter-trigger");
        if (triggerBtn) {
            triggerBtn.addEventListener("click", () => filterByAgent(agent));
        }
        const imgWrap = card.querySelector(".agent-img-wrapper");
        if (imgWrap) {
            imgWrap.addEventListener("click", () => filterByAgent(agent));
        }
        const nameH3 = card.querySelector(".agent-info h3");
        if (nameH3) {
            nameH3.addEventListener("click", () => filterByAgent(agent));
        }
        
        grid.appendChild(card);
    });
}

// ==========================================================================
// ANIMÁCIA VSTUPU PRI SKROLLOVANÍ (INTERSECTION OBSERVER)
// ==========================================================================
function initScrollReveal() {
    const revealSections = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                obs.unobserve(entry.target); // Animuje sa iba raz
            }
        });
    }, {
        threshold: 0.12 // Spustí sa pri viditeľnosti 12% sekcie na obrazovke
    });
    
    revealSections.forEach(section => {
        observer.observe(section);
    });
}

// --- Získanie správneho makléra pre nehnuteľnosť (podľa dát z Realsoftu) ---
function getAgentForProperty(prop) {
    if (!prop) return null;

    const duda = AGENTS.find(a => a.name.toLowerCase().includes("duda")) || AGENTS[1];
    const horvat = AGENTS.find(a => a.name.toLowerCase().includes("horv")) || AGENTS[0];
    const pella = AGENTS.find(a => a.name.toLowerCase().includes("pella")) || AGENTS[2];

    // 1. Zistiť meno a kontakt makléra z objektu alebo reťazca
    let rawAgent = prop.agent || prop.broker || prop.makler;
    let agentName = "";
    let agentPhone = "";
    let agentEmail = "";

    if (typeof rawAgent === "string") {
        agentName = rawAgent.trim();
    } else if (rawAgent && typeof rawAgent === "object") {
        agentName = String(rawAgent.name || rawAgent.fullName || rawAgent.full_name || rawAgent.meno || "").trim();
        agentPhone = String(rawAgent.phone || rawAgent.telefon || rawAgent.mobil || "").trim();
        agentEmail = String(rawAgent.email || rawAgent.mail || "").trim();
    }

    const agentIdStr = String(prop.agentId || prop.agent_id || "").trim();
    const titleStr = String(prop.title || "").toLowerCase();
    const locationStr = String(prop.location || "").toLowerCase();
    const descStr = String(prop.desc || "").toLowerCase();
    const agentNameLower = agentName.toLowerCase();

    // Staré Realsoft ID 2869562781 zodpovedá historickým/neznámym maklérom bez overenej identity.
    // Tieto zákazky nesmú mať priradeného žiadneho makléra (odstránenie falošného fallbacku na Petra Dudu).
    if (agentIdStr === "2869562781") {
        if (descStr.includes("branislav horvát") || descStr.includes("branislav horvat") || descStr.includes("777 001")) {
            return { ...horvat, phone: agentPhone || horvat.phone, email: agentEmail || horvat.email };
        }
        if (descStr.includes("peter pella")) {
            return { ...pella, phone: agentPhone || pella.phone, email: agentEmail || pella.email };
        }
        if (descStr.includes("peter duda") || descStr.includes("441 405")) {
            return { ...duda, phone: agentPhone || duda.phone, email: agentEmail || duda.email };
        }
        return null;
    }

    // 2. Branislav Horvát:
    // Realsoft ID 2739883856, interné ID 2, obec Soľník, alebo priame overené meno v objekte / popise
    const isHorvat = 
        agentIdStr === "2739883856" ||
        agentIdStr === "2" ||
        agentNameLower.includes("horv") ||
        titleStr.includes("soľník") ||
        titleStr.includes("solnik") ||
        locationStr.includes("soľník") ||
        locationStr.includes("solnik") ||
        descStr.includes("branislav horvát") ||
        descStr.includes("branislav horvat") ||
        descStr.includes("777 001");

    if (isHorvat) {
        return {
            ...horvat,
            phone: agentPhone || horvat.phone,
            email: agentEmail || horvat.email
        };
    }

    // 3. JUDr. Peter Pella:
    // Realsoft ID 2742504158, interné ID 3, alebo priame overené meno v objekte / popise
    const isPella = 
        agentIdStr === "2742504158" ||
        agentIdStr === "3" ||
        agentNameLower.includes("pella") ||
        descStr.includes("peter pella");

    if (isPella) {
        return {
            ...pella,
            phone: agentPhone || pella.phone,
            email: agentEmail || pella.email
        };
    }

    // 4. Peter Duda:
    // Realsoft ID 1162803367, interné ID 1 (pre predvolené ponuky KP), alebo priame overené meno / kontakt
    const isDuda = 
        agentIdStr === "1162803367" ||
        agentIdStr === "1" ||
        agentNameLower.includes("duda") ||
        descStr.includes("peter duda") ||
        descStr.includes("441 405");

    if (isDuda) {
        return {
            ...duda,
            phone: agentPhone || duda.phone,
            email: agentEmail || duda.email
        };
    }

    // 5. Ak maklér nie je s istotou overený z dát API, NEPRIRAĎUJEME žiadneho makléra (zrušený univerzálny fallback)
    return null;
}

// --- Formátovanie textu popisu nehnuteľnosti z API do štruktúrovaného HTML ---
function formatPropertyDescription(text) {
    if (!text || typeof text !== "string") {
        return `<p class="modal-desc-p">Kompletné informácie a obhliadku vám rád poskytne náš realitný maklér.</p>`;
    }

    // Normalizácia kódovania odrážok (Windows-1250/UTF-8 artefakty: \u00D4\u00C7\u00F3, ÔÇó), riadkov a tabulátorov
    const normalized = text
        .replace(/\u00D4\u00C7\u00F3/g, "•")
        .replace(/ÔÇó/g, "•")
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n")
        .replace(/([^\n])\s*•\s*/g, "$1\n• ")
        .trim();

    const rawLines = normalized.split("\n");
    const blocks = [];
    let currentList = [];
    let currentParagraphLines = [];

    function flushParagraph() {
        if (currentParagraphLines.length > 0) {
            const pContent = currentParagraphLines.join("<br>");
            blocks.push(`<p class="modal-desc-p">${pContent}</p>`);
            currentParagraphLines = [];
        }
    }

    function flushList() {
        if (currentList.length > 0) {
            const lis = currentList.map(item => `<li>${item}</li>`).join("");
            blocks.push(`<ul class="modal-desc-list">${lis}</ul>`);
            currentList = [];
        }
    }

    for (let i = 0; i < rawLines.length; i++) {
        const line = rawLines[i].trim();

        // Prázdny riadok oddeľuje odseky
        if (!line) {
            flushList();
            flushParagraph();
            continue;
        }

        // Kontrola odrážky: •, -, *, alebo číselný zoznam
        const isBullet = /^[•\-\*]\s*/.test(line) || /^\d+\.\s+/.test(line);

        if (isBullet) {
            flushParagraph();
            let cleanItem = line
                .replace(/^[•\-\*]\s*/, "")
                .replace(/^\d+\.\s+/, "")
                .trim();

            // Zvýraznenie kľúča na začiatku odrážky (napr. "Kvalitná rekonštrukcia:", "Pozemok:", atď.)
            cleanItem = cleanItem.replace(/^([^:\n]{2,40}:)/, "<strong>$1</strong>");
            currentList.push(cleanItem);
        } else {
            flushList();

            // Zvýraznenie podnadpisov a dôležitých otázok
            const isSubheading = 
                /^([A-ZÁČĎÉÍĽĹŇÓÔŔŠŤÚÝŽ][^:\n]{2,45}:)$/.test(line) ||
                /^([A-ZÁČĎÉÍĽĹŇÓÔŔŠŤÚÝŽ][^\?\n]{2,45}\?)$/.test(line) ||
                line.startsWith("ZNÍŽENÁ CENA") ||
                line.startsWith("NA PREDAJ");

            if (isSubheading) {
                flushParagraph();
                blocks.push(`<p class="modal-desc-p modal-desc-subheading"><strong>${line}</strong></p>`);
            } else {
                currentParagraphLines.push(line);
            }
        }
    }

    flushList();
    flushParagraph();

    return blocks.length > 0 ? blocks.join("") : `<p class="modal-desc-p">${text}</p>`;
}

// ==========================================================================
// MODÁLNE OKNO S DETAILMI NEHNUTEĽNOSTI
// ==========================================================================
function openPropertyModal(id) {
    const modal = document.getElementById("propertyModal");
    const modalBody = document.getElementById("modalBody");
    const prop = PROPERTIES.find(p => String(p.id) === String(id) || String(p.externalId) === String(id));
    if (!prop) return;

    // Zistenie stavu nehnuteľnosti
    const grp = getPropertyStatusGroup(prop);
    const isSold = (grp === "sold") || isPropertySoldOrCompleted(prop);
    const isReserved = (grp === "reserved") || isPropertyReserved(prop);

    // Priradenie správneho makléra podľa dát z Realsoftu
    const agent = getAgentForProperty(prop);
    
    let priceFormatted = "";
    if (prop.priceCustom && typeof prop.priceCustom === "string") {
        priceFormatted = prop.priceCustom;
    } else if (prop.price && Number(prop.price) > 0) {
        priceFormatted = prop.deal === "prenajom" 
            ? `${Number(prop.price).toLocaleString("sk-SK")} € / mesiac`
            : `${Number(prop.price).toLocaleString("sk-SK")} €`;
    } else {
        priceFormatted = "Cena na vyžiadanie";
    }
        
    // Špeciálne boxy parametrov podľa typu nehnuteľnosti
    const areaVal = (prop.area && Number(prop.area) > 0) ? `${prop.area} m²` : "-";
    const validRooms = prop.rooms !== null && prop.rooms !== undefined && String(prop.rooms).trim() !== "" && String(prop.rooms).toLowerCase() !== "null" && String(prop.rooms).trim() !== "-";
    const validFloor = prop.floor !== null && prop.floor !== undefined && String(prop.floor).trim() !== "" && String(prop.floor).toLowerCase() !== "null" && String(prop.floor).trim() !== "-";
    const roomsVal = validRooms ? String(prop.rooms) : "-";
    const floorVal = validFloor ? (String(prop.floor).includes("p.") ? String(prop.floor) : `${prop.floor} p.`) : "-";

    let specsBoxHtml = "";
    if (prop.type === "byt" || prop.type === "dom") {
        specsBoxHtml = `
            <div class="modal-spec-box">
                <div class="modal-spec-val">${areaVal}</div>
                <div class="modal-spec-lbl">Rozloha</div>
            </div>
            <div class="modal-spec-box">
                <div class="modal-spec-val">${roomsVal}</div>
                <div class="modal-spec-lbl">Izby</div>
            </div>
            <div class="modal-spec-box">
                <div class="modal-spec-val">${floorVal}</div>
                <div class="modal-spec-lbl">Poschodie</div>
            </div>
        `;
    } else {
        specsBoxHtml = `
            <div class="modal-spec-box">
                <div class="modal-spec-val">${areaVal}</div>
                <div class="modal-spec-lbl">Rozloha</div>
            </div>
            <div class="modal-spec-box">
                <div class="modal-spec-val">${roomsVal}</div>
                <div class="modal-spec-lbl">Izby / Priestory</div>
            </div>
            <div class="modal-spec-box">
                <div class="modal-spec-val">-</div>
                <div class="modal-spec-lbl">Inž. Siete</div>
            </div>
        `;
    }
    
    // Miniatúry fotogalérie (odfiltrovanie fotografií maklérov)
    const images = getSafePropertyImages(prop);
    let thumbnailsHtml = "";
    if (images.length > 1) {
        thumbnailsHtml = `
            <div class="modal-thumbnails" id="modalThumbnails">
                ${images.map((img, idx) => `
                    <button class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}" type="button" aria-label="Fotografia ${idx + 1}">
                        <img src="${img}" alt="Náhľad ${idx + 1}" onerror="if(this.src!=='${NEUTRAL_PROPERTY_PLACEHOLDER}')this.src='${NEUTRAL_PROPERTY_PLACEHOLDER}';">
                    </button>
                `).join("")}
            </div>
        `;
    }

    // Tabuľka technických parametrov
    let specsTableHtml = "";
    if (prop.technicalSpecs && Object.keys(prop.technicalSpecs).length > 0) {
        specsTableHtml = `
            <h3 class="modal-desc-title" style="margin-top: 24px;">Technické parametre a vybavenie</h3>
            <table class="modal-specs-table">
                <tbody>
                    ${Object.entries(prop.technicalSpecs).map(([key, val]) => `
                        <tr>
                            <td class="spec-lbl">${key}</td>
                            <td class="spec-val">${val}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;
    }

    // Tlačidlo na 3D prehliadku
    const has3D = prop.tags.includes("3D PREHLIADKA");
    const tourButtonHtml = has3D 
        ? `<button class="btn btn-tour-active modal-tour-btn" id="start3DTour">
             <i class="fa-solid fa-vr-cardboard"></i> Spustiť 3D obhliadku
           </button>`
        : `<button class="btn btn-tour-disabled modal-tour-btn" disabled>
             <i class="fa-solid fa-vr-cardboard"></i> 3D obhliadka nie je k dispozícii
           </button>`;

    // Štítok stavu na hlavnej fotografii
    let badgeLabel = prop.deal === "prenajom" ? "Na prenájom" : "Na predaj";
    let badgeClass = "badge-yellow";
    if (isSold) {
        const isRent = String(prop.deal).includes("prenaj") || /prenaj|n[aá]jm/i.test(`${prop.title || ""} ${prop.status || ""}`);
        badgeLabel = isRent ? "Prenajaté" : "Predané";
        badgeClass = "badge-green";
    } else if (isReserved) {
        badgeLabel = "Rezervované";
        badgeClass = "badge-red";
    }

    // Pravý bočný panel s maklérom a formulárom (Požiadavka 2: pri predaných/sprostredkovaných ponukách ÚPLNE SKRYŤ)
    let agentSidebarHtml = "";
    if (!isSold) {
        if (agent) {
            const telHref = agent.phone.startsWith("+") 
                ? agent.phone.replace(/\s/g, '') 
                : "+421" + agent.phone.replace(/^0/, '').replace(/\s/g, '');
            agentSidebarHtml = `
                <div class="modal-agent-card">
                    <h4>Vzťahový manažér</h4>
                    <div class="modal-agent-info modal-agent-clickable" id="modalAgentProfileTrigger" title="Kliknutím zobrazíte všetky aktívne ponuky makléra ${agent.name}">
                        <img src="${agent.image}" alt="${agent.name}" class="modal-agent-avatar">
                        <div class="modal-agent-details">
                            <div class="modal-agent-name">
                                ${agent.name}
                                <i class="fa-solid fa-arrow-up-right-from-square modal-agent-ext-icon"></i>
                            </div>
                            <div class="modal-agent-role">${agent.role}</div>
                        </div>
                    </div>
                    <div class="modal-agent-contact">
                        <div class="modal-agent-contact-item">
                            <a href="tel:${telHref}"><i class="fa-solid fa-phone"></i> ${agent.phone}</a>
                        </div>
                        <div class="modal-agent-contact-item">
                            <a href="mailto:${agent.email}" class="text-gold"><i class="fa-solid fa-envelope"></i> ${agent.email}</a>
                        </div>
                    </div>
                    
                    <form id="modalContactForm" class="modal-compact-form">
                        <input type="hidden" name="propId" value="${prop.id}">
                        <div class="form-group">
                            <input type="text" id="modalClientName" placeholder="Vaše meno" required class="modal-compact-input">
                        </div>
                        <div class="form-group">
                            <input type="tel" id="modalClientPhone" placeholder="Telefón" required class="modal-compact-input">
                        </div>
                        <button type="submit" class="btn-modal-submit">
                            Mám záujem o ponuku
                        </button>
                    </form>
                    <div id="modalFormSuccess" class="modal-form-success" style="display: none;">
                        <i class="fa-solid fa-circle-check"></i> Ďakujeme! Vaša požiadavka bola odoslaná maklérovi.
                    </div>
                </div>
            `;
        }
    }

    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-main">
                <div class="modal-gallery" id="modalGallery">
                    <span class="badge ${badgeClass} modal-gallery-badge">${badgeLabel}</span>
                    <img src="${images[0]}" alt="${prop.title}" id="modalMainImg" onerror="if(this.src!=='${NEUTRAL_PROPERTY_PLACEHOLDER}')this.src='${NEUTRAL_PROPERTY_PLACEHOLDER}';">
                </div>
                ${thumbnailsHtml}
                
                <div class="modal-title-row">
                    <h2 class="modal-property-title">${prop.title}</h2>
                </div>
                <div class="modal-location"><i class="fa-solid fa-location-dot"></i> ${prop.location}</div>
                
                <div class="modal-specs-grid">
                    ${specsBoxHtml}
                </div>
                
                <h3 class="modal-desc-title">Popis nehnuteľnosti</h3>
                <div class="modal-description">
                    ${formatPropertyDescription(prop.desc)}
                </div>

                ${specsTableHtml}
            </div>
            
            <div class="modal-sidebar">
                <div class="modal-price-card">
                    <div class="modal-price-lbl">Ponuková cena</div>
                    <div class="modal-price-val">${priceFormatted}</div>
                    ${tourButtonHtml}
                </div>
                
                ${agentSidebarHtml}
            </div>
        </div>
    `;
    
    // Aktivácia modálneho okna
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    
    // Udalosti miniatúr (prepínanie fotografií)
    const thumbBtns = modalBody.querySelectorAll(".modal-thumb-btn");
    const mainImg = document.getElementById("modalMainImg");
    thumbBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.getAttribute("data-idx"), 10);
            if (!isNaN(idx) && images[idx] && mainImg) {
                mainImg.src = images[idx];
                thumbBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
            }
        });
    });

    // Udalosť kliknutia na makléra pre vyfiltrovanie jeho aktívneho portfólia (Požiadavka 3)
    const agentTrigger = document.getElementById("modalAgentProfileTrigger");
    if (agentTrigger && agent) {
        agentTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            filterByAgent(agent);
        });
    }

    // Udalosť 3D prehliadky
    if (has3D) {
        const tourBtn = document.getElementById("start3DTour");
        if (tourBtn) {
            tourBtn.addEventListener("click", () => start3DTourSimulation(prop.title, images[0]));
        }
    }
    
    // Udalosť odoslania kontaktného formulára (iba ak formulár existuje v DOM)
    const contactForm = document.getElementById("modalContactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            contactForm.style.display = "none";
            const successEl = document.getElementById("modalFormSuccess");
            if (successEl) successEl.style.display = "block";
        });
    }
}

function closePropertyModal() {
    const modal = document.getElementById("propertyModal");
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

// --- Simulátor 3D Panoramatickej Obhliadky ---
function start3DTourSimulation(title, baseImg) {
    const gallery = document.getElementById("modalGallery");
    
    gallery.innerHTML = `
        <div class="tour-container" style="position: relative; width: 100%; height: 100%; background: #000; overflow: hidden; cursor: grab;">
            <div class="tour-status" style="position: absolute; top: 16px; left: 16px; background: rgba(11,16,32,0.88); color: #fff; padding: 6px 14px; border-radius: 30px; z-index: 10; font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                <i class="fa-solid fa-circle-notch fa-spin text-gold"></i> Simulátor 3D Obhliadky (Ťahajte myšou)
            </div>
            <button id="exitTour" style="position: absolute; top: 16px; right: 16px; background: var(--danger); border: none; color: #fff; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="tour-wrapper" style="width: 250%; height: 100%; position: absolute; left: -75%; top: 0; background-image: url('${baseImg}'); background-size: cover; background-position: center; transition: transform 0.1s ease;"></div>
        </div>
    `;
    
    const wrapper = gallery.querySelector(".tour-wrapper");
    const container = gallery.querySelector(".tour-container");
    let isDragging = false;
    let startX = 0;
    let currentX = -75;
    
    container.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        container.style.cursor = "grabbing";
    });
    
    window.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });
    
    container.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        startX = e.clientX;
        
        const sensitivity = 0.15;
        currentX += dx * sensitivity;
        
        if (currentX > 0) currentX = 0;
        if (currentX < -150) currentX = -150;
        
        wrapper.style.transform = `translateX(${currentX}px)`;
    });
    
    container.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
    });
    
    container.addEventListener("touchend", () => {
        isDragging = false;
    });
    
    container.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const dx = e.touches[0].clientX - startX;
        startX = e.touches[0].clientX;
        currentX += dx * 0.25;
        if (currentX > 0) currentX = 0;
        if (currentX < -150) currentX = -150;
        wrapper.style.transform = `translateX(${currentX}px)`;
    });

    document.getElementById("exitTour").addEventListener("click", () => {
        gallery.innerHTML = `
            <span class="badge badge-yellow modal-gallery-badge">3D PREHLIADKA</span>
            <img src="${baseImg}" alt="${title}" id="modalMainImg">
        `;
    });
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================
function setupEventListeners() {
    // --- Téma prepínač ---
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeToggleIcon(newTheme);
    };

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }
    const drawerThemeToggle = document.getElementById("drawerThemeToggle");
    if (drawerThemeToggle) {
        drawerThemeToggle.addEventListener("click", toggleTheme);
    }

    // --- Mobilné menu (Drawer pre sociálne siete a nastavenia) ---
    const mobileNavToggle = document.getElementById("mobileNavToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    
    if (mobileNavToggle && mobileDrawer) {
        const toggleMobileMenu = (forceClose = false) => {
            const shouldOpen = forceClose ? false : !mobileDrawer.classList.contains("active");
            if (shouldOpen) {
                mobileDrawer.classList.add("active");
                mobileDrawer.setAttribute("aria-hidden", "false");
                mobileNavToggle.classList.add("is-active");
                mobileNavToggle.setAttribute("aria-expanded", "true");
                mobileNavToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
                document.body.style.overflow = "hidden";
            } else {
                mobileDrawer.classList.remove("active");
                mobileDrawer.setAttribute("aria-hidden", "true");
                mobileNavToggle.classList.remove("is-active");
                mobileNavToggle.setAttribute("aria-expanded", "false");
                mobileNavToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
                document.body.style.overflow = "";
            }
        };

        mobileNavToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });
        
        const drawerLinks = mobileDrawer.querySelectorAll("a");
        drawerLinks.forEach(link => {
            link.addEventListener("click", () => {
                toggleMobileMenu(true);
            });
        });

        // Zatvorenie kliknutím mimo draweru
        document.addEventListener("click", (e) => {
            if (mobileDrawer.classList.contains("active") && !mobileDrawer.contains(e.target) && !mobileNavToggle.contains(e.target)) {
                toggleMobileMenu(true);
            }
        });

        // Zatvorenie klávesou Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && mobileDrawer.classList.contains("active")) {
                toggleMobileMenu(true);
            }
        });

        // Zatvorenie pri resize na desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768 && mobileDrawer.classList.contains("active")) {
                toggleMobileMenu(true);
            }
        });
    }

    // Navigačné odkazy v lište (fungujú na desktope aj na mobile)
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mobileDrawer && mobileDrawer.classList.contains("active")) {
                mobileDrawer.classList.remove("active");
                mobileDrawer.setAttribute("aria-hidden", "true");
                if (mobileNavToggle) {
                    mobileNavToggle.classList.remove("is-active");
                    mobileNavToggle.setAttribute("aria-expanded", "false");
                    mobileNavToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
                }
                document.body.style.overflow = "";
            }
            if (link.getAttribute("href")?.startsWith("#")) {
                navLinks.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });

    // Kliknutie na logo v hlavičke: plynulý návrat na úplný vrch stránky
    const headerLogo = document.querySelector(".main-header .logo");
    if (headerLogo) {
        headerLogo.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (mobileDrawer && mobileDrawer.classList.contains("active")) {
                mobileDrawer.classList.remove("active");
                mobileDrawer.setAttribute("aria-hidden", "true");
                if (mobileNavToggle) {
                    mobileNavToggle.classList.remove("is-active");
                    mobileNavToggle.setAttribute("aria-expanded", "false");
                    mobileNavToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
                }
                document.body.style.overflow = "";
            }
        });
    }

    // --- Zatvorenie modálu ---
    document.getElementById("modalClose").addEventListener("click", closePropertyModal);
    document.getElementById("modalBackdrop").addEventListener("click", closePropertyModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closePropertyModal();
    });

    // --- Filtrovanie podľa Tabs (kategórie) ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            activeFilters.category = btn.getAttribute("data-filter");
            renderListings();
        });
    });

    // --- Rýchle filtre predaj/prenájom ---
    const searchTabs = document.querySelectorAll(".search-tab-btn");
    searchTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            searchTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            activeFilters.deal = tab.getAttribute("data-deal");
            renderListings();
        });
    });

    // --- Vyhľadanie ---
    const searchSubmit = document.getElementById("searchSubmit");
    searchSubmit.addEventListener("click", () => {
        activeFilters.query = document.getElementById("searchQuery").value;
        activeFilters.propertyType = document.getElementById("propertyType").value;
        const maxPriceVal = document.getElementById("maxPrice").value;
        activeFilters.maxPrice = maxPriceVal ? parseFloat(maxPriceVal) : null;
        
        const filterBtns = document.querySelectorAll(".filter-btn");
        filterBtns.forEach(btn => {
            if (btn.getAttribute("data-filter") === activeFilters.propertyType) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
        
        renderListings();
        document.getElementById("ponuka").scrollIntoView({ behavior: "smooth" });
    });

    // --- Reset filtrov ---
    document.getElementById("resetFilters").addEventListener("click", () => {
        document.getElementById("searchQuery").value = "";
        document.getElementById("propertyType").value = "vsetky";
        document.getElementById("maxPrice").value = "";
        
        clearAgentFilter();
        
        activeFilters = {
            deal: "vsetko",
            category: "vsetky",
            query: "",
            propertyType: "vsetky",
            maxPrice: null,
            agentId: null,
            agentName: null
        };
        
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        document.querySelector(".filter-btn[data-filter='vsetky']").classList.add("active");
        
        document.querySelectorAll(".search-tab-btn").forEach(t => t.classList.remove("active"));
        document.querySelector(".search-tab-btn[data-deal='vsetko']").classList.add("active");
        
        renderListings();
    });

    // --- Lokálny prepočet pre vlastnú lokalitu ---
    const locSelect = document.getElementById("ownerPropLocSelect");
    const locTextGroup = document.getElementById("ownerPropLocTextGroup");
    const locTextInput = document.getElementById("ownerPropLocText");
    
    if (locSelect) {
        locSelect.addEventListener("change", () => {
            if (locSelect.value === "ina") {
                locTextGroup.style.display = "block";
                locTextInput.setAttribute("required", "required");
            } else {
                locTextGroup.style.display = "none";
                locTextInput.removeAttribute("required");
            }
        });
    }

    // --- Kalkulačka trhovej ceny nehnuteľnosti ---
    const sellForm = document.getElementById("sellForm");
    const calcResult = document.getElementById("calculatorResult");
    
    if (sellForm && calcResult) {
        sellForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Získanie hodnôt z formulára
            const propType = document.getElementById("ownerPropType").value;
            const locVal = locSelect.value;
            const areaVal = parseFloat(document.getElementById("ownerPropArea").value);
            const condVal = document.getElementById("ownerPropCond").value;
            
            // Trhové koeficienty pre výpočet
            let basePrice = 2200; // Byt
            if (propType === "dom") basePrice = 1700;
            else if (propType === "pozemi") basePrice = 130;
            else if (propType === "komercny") basePrice = 1400;
            
            let locCoeff = 1.05; // Sekčov / Sídlisko II
            if (locVal === "presov_centrum" || locVal === "kosice") locCoeff = 1.25;
            else if (locVal === "lubotice") locCoeff = 0.90;
            else if (locVal === "sigord") locCoeff = 0.75;
            else if (locVal === "ina") locCoeff = 0.85;
            
            let condCoeff = 1.00; // Čiastočná rekonštrukcia
            if (condVal === "novostavba") condCoeff = 1.25;
            else if (condVal === "kompletna") condCoeff = 1.15;
            else if (condVal === "povodne") condCoeff = 0.80;
            
            // Algoritmus výpočtu orientačnej trhovej hodnoty
            const calculatedPrice = areaVal * basePrice * locCoeff * condCoeff;
            
            // Cenové rozpätie (minimálna a maximálna odhadovaná hodnota)
            const priceMin = Math.round((calculatedPrice * 0.92) / 1000) * 1000;
            const priceMax = Math.round((calculatedPrice * 1.08) / 1000) * 1000;
            
            // Naplnenie textov v sumári parametrov
            const typeText = propType === "byt" ? "Byt" : propType === "dom" ? "Rodinný dom" : propType === "pozemi" ? "Stavebný pozemok" : "Komerčný priestor";
            
            let locText = locSelect.options[locSelect.selectedIndex].text;
            if (locVal === "ina") {
                locText = locTextInput.value || "Vlastná lokalita";
            }
            
            const condText = condVal === "novostavba" ? "Novostavba / Holobyt" : condVal === "kompletna" ? "Kompletná rekonštrukcia" : condVal === "ciastocna" ? "Čiastočná rekonštrukcia" : "Pôvodný stav";
            
            document.getElementById("summaryType").innerText = typeText;
            document.getElementById("summaryLoc").innerText = locText;
            document.getElementById("summaryArea").innerText = areaVal;
            document.getElementById("summaryCond").innerText = condText;
            
            // Zobrazenie výsledku a skrytie formulára
            sellForm.style.display = "none";
            calcResult.style.display = "block";
            calcResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
            
            // Spustenie animovaného počítadla
            animateValue("calcPriceMin", 0, priceMin, 1500, " €");
            animateValue("calcPriceMax", 0, priceMax, 1500, " €");
            
            // Vyplnenie progres baru (optimálna cena, zvyčajne 75% šírky)
            setTimeout(() => {
                const fill = document.getElementById("calcProgressFill");
                if (fill) fill.style.width = "75%";
            }, 100);

            // Odoslanie údajov na email cez FormSubmit AJAX API
            const nameVal = document.getElementById("ownerName").value;
            const emailVal = document.getElementById("ownerEmail").value;
            
            fetch("https://formsubmit.co/ajax/branislav_horvat@keyspartners.sk", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: "Nový odhad ceny nehnuteľnosti – Keys Partners",
                    "Meno klienta": nameVal,
                    "E-mail": emailVal,
                    "Typ nehnuteľnosti": typeText,
                    "Lokalita / Ulica": locText,
                    "Rozloha (m²)": areaVal,
                    "Stav nehnuteľnosti": condText,
                    "Odhadovaná cena (Min)": priceMin.toLocaleString("sk-SK") + " €",
                    "Odhadovaná cena (Max)": priceMax.toLocaleString("sk-SK") + " €"
                })
            })
            .then(response => response.json())
            .then(data => console.log("FormSubmit.co: E-mail bol úspešne odoslaný na spracovanie.", data))
            .catch(error => console.error("FormSubmit.co: Chyba pri odosielaní e-mailu.", error));
        });
        
        // Resetovanie kalkulačky
        document.getElementById("btnResetCalc").addEventListener("click", () => {
            sellForm.reset();
            locTextGroup.style.display = "none";
            locTextInput.removeAttribute("required");
            
            const fill = document.getElementById("calcProgressFill");
            if (fill) fill.style.width = "0%";
            
            sellForm.style.display = "block";
            calcResult.style.display = "none";
        });
        
        // Žiadosť o obhliadku
        document.getElementById("btnRequestInspection").addEventListener("click", () => {
            const ctaBox = document.querySelector(".calc-cta-box");
            ctaBox.innerHTML = `
                <div class="form-success" style="padding: 10px 0; animation: fadeInUp 0.4s ease forwards; text-align: center;">
                    <i class="fa-solid fa-circle-check success-icon" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--success);"></i>
                    <h4 style="color: var(--success); font-size: 1.15rem; margin-bottom: 8px;">Požiadavka na obhliadku odoslaná!</h4>
                    <p style="font-size: 0.9rem; line-height: 1.5; margin-bottom: 0; color: var(--text-secondary);">Náš vzťahový riaditeľ Peter Duda alebo Ing. Branislav Horvát vás bude kontaktovať najneskôr do 24 hodín pre dohodnutie termínu bezplatnej obhliadky.</p>
                </div>
            `;
        });
        
        // Inicializácia hypotekárnej kalkulačky
        initMortgageCalculator();
    }
}

// ==========================================================================
// HYPOTEKÁRNA KALKULAČKA S PREPOJENÍM NA KONZULTÁCIU
// ==========================================================================
function initMortgageCalculator() {
    const priceSlider = document.getElementById("mortgagePriceSlider");
    const priceInput = document.getElementById("mortgagePriceInput");
    const ownSlider = document.getElementById("mortgageOwnSlider");
    const ownInput = document.getElementById("mortgageOwnInput");
    const yearsSlider = document.getElementById("mortgageYearsSlider");
    const yearsInput = document.getElementById("mortgageYearsInput");
    const rateSlider = document.getElementById("mortgageRateSlider");
    const rateInput = document.getElementById("mortgageRateInput");

    const loanAmountEl = document.getElementById("mortgageLoanAmount");
    const ltvValueEl = document.getElementById("mortgageLtvValue");
    const downpaymentPercentEl = document.getElementById("mortgageDownpaymentPercent");
    const monthlyPaymentEl = document.getElementById("mortgageMonthlyPayment");
    const subLoanAmountEl = document.getElementById("subLoanAmount");
    const subTotalAmountEl = document.getElementById("subTotalAmount");
    const subInterestAmountEl = document.getElementById("subInterestAmount");

    const consultForm = document.getElementById("mortgageConsultForm");
    const successBox = document.getElementById("mortgageSuccessBox");
    const btnRecalc = document.getElementById("btnMortgageRecalc");

    if (!priceSlider || !consultForm) return;

    function formatNumber(num) {
        return Math.round(num).toLocaleString("sk-SK");
    }

    function updateSliderTrack(slider) {
        if (!slider) return;
        const min = parseFloat(slider.min) || 0;
        const max = parseFloat(slider.max) || 100;
        const val = parseFloat(slider.value) || 0;
        const pct = ((val - min) / (max - min)) * 100;
        slider.style.background = `linear-gradient(to right, var(--brand-yellow) 0%, var(--brand-yellow) ${pct}%, var(--bg-tertiary) ${pct}%, var(--bg-tertiary) 100%)`;
    }

    function calculateMortgage() {
        let price = parseFloat(priceInput.value) || 0;
        let own = parseFloat(ownInput.value) || 0;
        let years = parseInt(yearsInput.value, 10) || 30;
        let rate = parseFloat(rateInput.value) || 0;

        if (price < 0) price = 0;
        if (own < 0) own = 0;
        if (own > price) {
            own = price;
            ownInput.value = own;
            ownSlider.value = own;
        }
        if (years < 5) years = 5;
        if (years > 30) years = 30;
        if (rate < 0) rate = 0;

        const loan = Math.max(0, price - own);
        const ltv = price > 0 ? Math.round((loan / price) * 100) : 0;
        const downPct = price > 0 ? Math.round((own / price) * 100) : 0;

        // Anuitný výpočet: M = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
        const n = years * 12; // počet mesiacov
        let monthly = 0;
        let total = 0;
        let interest = 0;

        if (loan > 0) {
            if (rate > 0) {
                const r = (rate / 100) / 12; // mesačná úroková miera
                const factor = Math.pow(1 + r, n);
                monthly = Math.round(loan * (r * factor) / (factor - 1));
            } else {
                monthly = Math.round(loan / n);
            }
            total = monthly * n;
            interest = Math.max(0, total - loan);
        }

        // Zobrazenie hodnôt
        if (loanAmountEl) loanAmountEl.textContent = formatNumber(loan) + " €";
        if (ltvValueEl) ltvValueEl.textContent = ltv + " %";
        if (downpaymentPercentEl) downpaymentPercentEl.textContent = `(${downPct} %)`;
        if (monthlyPaymentEl) monthlyPaymentEl.textContent = formatNumber(monthly);
        if (subLoanAmountEl) subLoanAmountEl.textContent = formatNumber(loan) + " €";
        if (subTotalAmountEl) subTotalAmountEl.textContent = formatNumber(total) + " €";
        if (subInterestAmountEl) subInterestAmountEl.textContent = formatNumber(interest) + " €";

        // Vizuálna aktualizácia sliderov
        updateSliderTrack(priceSlider);
        updateSliderTrack(ownSlider);
        updateSliderTrack(yearsSlider);
        updateSliderTrack(rateSlider);
    }

    // Obojsmerná synchronizácia slidera a číselného poľa
    function bindSync(slider, input, isFloat = false) {
        slider.addEventListener("input", () => {
            input.value = isFloat ? parseFloat(slider.value).toFixed(2) : slider.value;
            calculateMortgage();
        });

        input.addEventListener("input", () => {
            slider.value = input.value;
            calculateMortgage();
        });

        input.addEventListener("change", () => {
            let val = isFloat ? parseFloat(input.value) : parseInt(input.value, 10);
            if (isNaN(val)) val = isFloat ? parseFloat(slider.value) : parseInt(slider.value, 10);
            const min = parseFloat(slider.min);
            const max = parseFloat(slider.max);
            if (val < min) val = min;
            if (val > max) val = max;
            input.value = isFloat ? val.toFixed(2) : val;
            slider.value = val;
            calculateMortgage();
        });
    }

    bindSync(priceSlider, priceInput, false);
    bindSync(ownSlider, ownInput, false);
    bindSync(yearsSlider, yearsInput, false);
    bindSync(rateSlider, rateInput, true);

    // Rýchle tlačidlá pre výber doby splácania
    const pillButtons = document.querySelectorAll(".quick-years-pills .btn-pill");
    pillButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            pillButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const y = btn.getAttribute("data-years");
            yearsSlider.value = y;
            yearsInput.value = y;
            calculateMortgage();
        });
    });

    yearsSlider.addEventListener("input", () => {
        pillButtons.forEach(b => {
            if (b.getAttribute("data-years") === yearsSlider.value) {
                b.classList.add("active");
            } else {
                b.classList.remove("active");
            }
        });
    });

    // Odoslanie formulára pre nezáväznú konzultáciu k hypotéke
    consultForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const clientName = document.getElementById("mortgageClientName").value.trim();
        const clientPhone = document.getElementById("mortgageClientPhone").value.trim();
        const clientEmail = document.getElementById("mortgageClientEmail").value.trim();

        const priceVal = parseFloat(priceInput.value) || 0;
        const ownVal = parseFloat(ownInput.value) || 0;
        const loanVal = Math.max(0, priceVal - ownVal);
        const yearsVal = parseInt(yearsInput.value, 10) || 30;
        const rateVal = parseFloat(rateInput.value) || 0;
        const paymentVal = monthlyPaymentEl.textContent;

        const submitBtn = document.getElementById("btnMortgageSubmit");
        const origBtnHtml = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Odosielam požiadavku...`;

        // Odoslanie údajov cez FormSubmit AJAX API na Branislava Horváta
        fetch("https://formsubmit.co/ajax/branislav_horvat@keyspartners.sk", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: "Nový dopyt: Hypotekárna konzultácia – Keys Partners",
                "Meno a priezvisko": clientName,
                "Telefón": clientPhone,
                "E-mail": clientEmail,
                "Cena nehnuteľnosti": formatNumber(priceVal) + " €",
                "Vlastné prostriedky": formatNumber(ownVal) + " €",
                "Výška úveru": formatNumber(loanVal) + " €",
                "Doba splácania": yearsVal + " rokov (" + (yearsVal * 12) + " mesiacov)",
                "Úroková sadzba": rateVal.toFixed(2).replace('.', ',') + " % p.a.",
                "Odhadovaná mesačná splátka": paymentVal + " € / mesiac"
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("[KEYS PARTNERS] Hypotekárna konzultácia úspešne odoslaná:", data);
        })
        .catch(err => {
            console.error("[KEYS PARTNERS] Chyba pri odosielaní hypotéky:", err);
        })
        .finally(() => {
            // Vyplnenie údajov v success message
            const succPrice = document.getElementById("succPrice");
            const succLoan = document.getElementById("succLoan");
            const succPayment = document.getElementById("succPayment");
            if (succPrice) succPrice.textContent = formatNumber(priceVal) + " €";
            if (succLoan) succLoan.textContent = formatNumber(loanVal) + " €";
            if (succPayment) succPayment.textContent = paymentVal + " € / mesiac";

            // Zobrazenie správy o úspechu
            consultForm.style.display = "none";
            successBox.style.display = "block";

            submitBtn.disabled = false;
            submitBtn.innerHTML = origBtnHtml;
        });
    });

    if (btnRecalc) {
        btnRecalc.addEventListener("click", () => {
            successBox.style.display = "none";
            consultForm.style.display = "block";
            calculateMortgage();
        });
    }

    // Prvotný výpočet
    calculateMortgage();
}

// --- Pomocná funkcia pre animované počítadlo cien ---
function animateValue(id, start, end, duration, suffix = "") {
    const obj = document.getElementById(id);
    if (!obj) return;
    
    const range = end - start;
    let current = start;
    const increment = end > start ? Math.ceil(range / (duration / 16)) : -1;
    const stepTime = 16; // ~ 60 FPS
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        obj.innerText = current.toLocaleString("sk-SK") + suffix;
    }, stepTime);
}
