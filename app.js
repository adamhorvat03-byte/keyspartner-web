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
    }
];

// --- Reálni makléri a manažéri KEYS PARTNERS a.s. ---
const AGENTS = [
    {
        id: 2,
        name: "Ing. Branislav HORVÁT",
        role: "Partner / Realitný maklér",
        phone: "+421 905 785 951",
        email: "branislav_horvat@keyspartners.sk",
        image: "brano.jpg"
    },
    {
        id: 1,
        name: "Peter DUDA",
        role: "Vzťahový riaditeľ / Realitný maklér",
        phone: "+421 907 441 405",
        email: "peter_duda@keyspartners.sk",
        image: "duda.jpg"
    },
    {
        id: 3,
        name: "JUDr. Peter PELLA",
        role: "Predseda dozornej rady / Realitný maklér",
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
    maxPrice: null
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
                return p;
            });
            renderListings();
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
    if (theme === "dark") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
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

// --- Pomocná funkcia: Rozdelenie nehnuteľnosti do 3 skupín podľa stavu transakcie ---
function getPropertyStatusGroup(prop) {
    if (!prop) return "active";
    
    const status = String(prop.status || "").toLowerCase().trim();
    const tags = Array.isArray(prop.tags) ? prop.tags.map(t => String(t).toUpperCase()) : [];
    const title = String(prop.title || "").toUpperCase();
    
    // 1. Sprostredkované (predané / prenajaté / zrealizované)
    if (
        status === "sold" ||
        status.includes("predan") ||
        status.includes("prenajat") ||
        status.includes("sprostredkov") ||
        status.includes("zrealizov") ||
        tags.some(t => t.includes("PREDANÉ") || t.includes("SPROSTREDKOVANÉ") || t.includes("ZREALIZOVANÉ") || t.includes("PRENAJATÉ")) ||
        title.includes("[PREDANÉ]") ||
        title.includes("[SPROSTREDKOVANÉ]")
    ) {
        return "sold";
    }
    
    // 2. Rezervované
    if (
        prop.isReserved === true ||
        status === "reserved" ||
        status.includes("rezerv") ||
        tags.some(t => t.includes("REZERVOVANÉ")) ||
        title.includes("[REZERVOVANÉ]")
    ) {
        return "reserved";
    }
    
    // 3. Novinky / Na predaj (aktívne, voľné ponuky)
    return "active";
}

// --- Vytvorenie elementu karty nehnuteľnosti vrátane avatara makléra ---
function createPropertyCardElement(prop) {
    const card = document.createElement("div");
    card.className = `listing-card ${prop.isReserved ? "reserved" : ""}`;
    card.setAttribute("data-id", prop.id);
    
    // Dynamické priradenie správneho makléra (Horvát pre Soľník, Duda pre ostatné atď.)
    const agent = getAgentForProperty(prop);
    
    // Vytvorenie odznakov (vynechanie štítku REALSOFT)
    let badgesHtml = "";
    const cleanTags = (prop.tags || []).filter(tag => tag && String(tag).trim().toUpperCase() !== "REALSOFT");
    cleanTags.forEach(tag => {
        let badgeClass = "badge-dark";
        if (tag.includes("REZERVOVANÉ")) badgeClass = "badge-red";
        if (tag.includes("SPROSTREDKOVANÉ") || tag.includes("PREDANÉ")) badgeClass = "badge-green";
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
            <div class="card-agent-badge" title="Zodpovedný maklér: ${agent.name}">
                <img src="${agent.image}" alt="${agent.name}" class="card-agent-img">
            </div>
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
        // Filter podľa predaja/prenájmu
        if (activeFilters.deal !== "vsetko" && item.deal !== activeFilters.deal) {
            return false;
        }
        
        // Filter podľa kategórie (tabs)
        if (activeFilters.category !== "vsetky" && item.type !== activeFilters.category) {
            return false;
        }
        
        // Filter podľa typu (select z vyhľadávača)
        if (activeFilters.propertyType !== "vsetky" && item.type !== activeFilters.propertyType) {
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
            const gridEl = document.createElement("div");
            gridEl.className = "listings-grid";
            group.items.forEach(prop => {
                gridEl.appendChild(createPropertyCardElement(prop));
            });
            sectionEl.appendChild(gridEl);
        } else {
            const emptyEl = document.createElement("div");
            emptyEl.className = "portfolio-group-empty";
            emptyEl.innerHTML = `<i class="fa-solid fa-circle-info"></i> <span>Aktuálne žiadne ponuky v tejto kategórii.</span>`;
            sectionEl.appendChild(emptyEl);
        }

        container.appendChild(sectionEl);
    });
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
        
        card.innerHTML = `
            <div class="agent-img-wrapper">
                <img src="${agent.image}" alt="${agent.name}">
            </div>
            <div class="agent-info">
                <h3>${agent.name}</h3>
                <div class="agent-role">${agent.role}</div>
                <div class="agent-contact">
                    <a href="tel:${telHref}"><i class="fa-solid fa-phone"></i> ${agent.phone}</a>
                    <a href="mailto:${agent.email}"><i class="fa-solid fa-envelope"></i> ${agent.email}</a>
                </div>
            </div>
        `;
        
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
    const duda = AGENTS.find(a => a.name.toLowerCase().includes("duda")) || AGENTS[1];
    const horvat = AGENTS.find(a => a.name.toLowerCase().includes("horv")) || AGENTS[0];
    const pella = AGENTS.find(a => a.name.toLowerCase().includes("pella")) || AGENTS[2];

    if (!prop) return duda;

    // 1. Zistiť meno a kontakt makléra z objektu alebo reťazca
    let rawAgent = prop.agent || prop.broker || prop.makler;
    let agentName = "";
    let agentPhone = "";
    let agentEmail = "";

    if (typeof rawAgent === "string") {
        agentName = rawAgent;
    } else if (rawAgent && typeof rawAgent === "object") {
        agentName = rawAgent.name || rawAgent.fullName || rawAgent.full_name || rawAgent.meno || "";
        agentPhone = rawAgent.phone || rawAgent.telefon || rawAgent.mobil || "";
        agentEmail = rawAgent.email || rawAgent.mail || "";
    }

    const agentIdStr = String(prop.agentId || prop.agent_id || "");
    const titleStr = String(prop.title || "").toLowerCase();
    const locationStr = String(prop.location || "").toLowerCase();
    const descStr = String(prop.desc || "").toLowerCase();

    // 2. Branislav Horvát:
    // Dom v obci Soľník predáva výhradne Branislav Horvát
    const isHorvat = 
        agentName.toLowerCase().includes("horv") ||
        agentIdStr === "2739883856" ||
        agentIdStr === "2" ||
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
    const isPella = 
        agentName.toLowerCase().includes("pella") ||
        agentIdStr === "2742504158" ||
        agentIdStr === "3" ||
        descStr.includes("peter pella");

    if (isPella) {
        return {
            ...pella,
            phone: agentPhone || pella.phone,
            email: agentEmail || pella.email
        };
    }

    // 4. Všetky ostatné nehnuteľnosti predáva Peter Duda (predvolený maklér)
    return {
        ...duda,
        phone: agentPhone || duda.phone,
        email: agentEmail || duda.email
    };
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
        
    // Špeciálne boxy podľa typu nehnuteľnosti
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
    if (prop.technicalSpecs) {
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
        ? `<button class="btn btn-primary btn-block modal-tour-btn" id="start3DTour">
             <i class="fa-solid fa-vr-cardboard"></i> Spustiť 3D obhliadku
           </button>`
        : `<button class="btn btn-secondary btn-block modal-tour-btn" disabled>
             <i class="fa-solid fa-vr-cardboard"></i> 3D obhliadka nie je k dispozícii
           </button>`;

    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-main">
                <div class="modal-gallery" id="modalGallery">
                    <span class="badge badge-yellow modal-gallery-badge">${prop.deal === "predaj" ? "Na predaj" : "Na prenájom"}</span>
                    <img src="${images[0]}" alt="${prop.title}" id="modalMainImg" onerror="if(this.src!=='${NEUTRAL_PROPERTY_PLACEHOLDER}')this.src='${NEUTRAL_PROPERTY_PLACEHOLDER}';">
                </div>
                ${thumbnailsHtml}
                
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 16px;">
                    <h2 style="margin: 0;">${prop.title}</h2>
                    <span style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 600;">ID: ${prop.externalId || prop.id}</span>
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
                
                <div class="modal-features">
                    <h3 class="modal-desc-title" style="margin-top: 24px;">Garantované služby divízie sprostredkovania nehnuteľností</h3>
                    <ul class="submit-advantages" style="margin-top: 12px; gap: 10px;">
                        <li><i class="fa-solid fa-shield-halved text-gold"></i> Autorizované zmluvy garantované naším právnym tímom</li>
                        <li><i class="fa-solid fa-money-bill-transfer text-gold"></i> Poplatky na katastri a overenie podpisov u notára v cene</li>
                        <li><i class="fa-solid fa-handshake text-gold"></i> Komplexné hypotekárne a finančné poradenstvo zdarma</li>
                    </ul>
                </div>
            </div>
            
            <div class="modal-sidebar">
                <div class="modal-price-card">
                    <div class="modal-price-lbl">Ponuková cena</div>
                    <div class="modal-price-val">${priceFormatted}</div>
                    ${tourButtonHtml}
                </div>
                
                <div class="modal-agent-card">
                    <h4>Vzťahový manažér</h4>
                    <div class="modal-agent-info">
                        <img src="${agent.image}" alt="${agent.name}" class="modal-agent-avatar">
                        <div>
                            <div class="modal-agent-name">${agent.name}</div>
                            <div class="modal-agent-role">${agent.role}</div>
                        </div>
                    </div>
                    <div class="modal-agent-contact">
                        <a href="tel:${agent.phone.startsWith('+') ? agent.phone.replace(/\s/g, '') : '+421' + agent.phone.replace(/^0/, '').replace(/\s/g, '')}"><i class="fa-solid fa-phone"></i> ${agent.phone}</a>
                        <a href="mailto:${agent.email}"><i class="fa-solid fa-envelope"></i> ${agent.email}</a>
                    </div>
                    
                    <form id="modalContactForm" style="margin-top: 20px;">
                        <input type="hidden" name="propId" value="${prop.id}">
                        <div class="form-group" style="margin-bottom: 10px;">
                            <input type="text" id="modalClientName" placeholder="Vaše meno a priezvisko *" required style="padding: 8px 12px; font-size: 0.9rem;">
                        </div>
                        <div class="form-group" style="margin-bottom: 10px;">
                            <input type="tel" id="modalClientPhone" placeholder="Telefónne číslo *" required style="padding: 8px 12px; font-size: 0.9rem;">
                        </div>
                        <div class="form-group" style="margin-bottom: 10px;">
                            <input type="email" id="modalClientEmail" placeholder="Váš e-mail" style="padding: 8px 12px; font-size: 0.9rem;">
                        </div>
                        <div class="form-group" style="margin-bottom: 12px;">
                            <textarea id="modalClientMsg" rows="2" style="width: 100%; border-radius: var(--border-radius-sm); border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary); padding: 8px 12px; font-size: 0.85rem;" placeholder="Správa pre makléra">Dobrý deň, mám záujem o obhliadku nehnuteľnosti ${prop.title} (ID: ${prop.externalId || prop.id}).</textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block" style="padding: 10px; font-size: 0.9rem;">
                            <i class="fa-solid fa-paper-plane" style="margin-right: 6px;"></i> Mám záujem o obhliadku
                        </button>
                    </form>
                    <div id="modalFormSuccess" style="display: none; text-align: center; color: var(--success); font-weight: 600; margin-top: 12px; font-size: 0.9rem;">
                        <i class="fa-solid fa-circle-check"></i> Ďakujeme! Vaša požiadavka bola odoslaná maklérovi.
                    </div>
                </div>
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

    // Udalosti
    if (has3D) {
        document.getElementById("start3DTour").addEventListener("click", () => start3DTourSimulation(prop.title, images[0]));
    }
    
    document.getElementById("modalContactForm").addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("modalContactForm").style.display = "none";
        document.getElementById("modalFormSuccess").style.display = "block";
    });
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
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeToggleIcon(newTheme);
    });

    // --- Mobilné menu ---
    const mobileNavToggle = document.getElementById("mobileNavToggle");
    const navMenu = document.getElementById("navMenu");
    
    if (mobileNavToggle && navMenu) {
        const toggleMobileMenu = (forceClose = false) => {
            const shouldOpen = forceClose ? false : !navMenu.classList.contains("active");
            if (shouldOpen) {
                navMenu.classList.add("active");
                mobileNavToggle.classList.add("is-active");
                mobileNavToggle.setAttribute("aria-expanded", "true");
                mobileNavToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
                document.body.style.overflow = "hidden";
            } else {
                navMenu.classList.remove("active");
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
        
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                toggleMobileMenu(true);
                if (link.getAttribute("href")?.startsWith("#")) {
                    navLinks.forEach(l => l.classList.remove("active"));
                    link.classList.add("active");
                }
            });
        });

        // Close on clicking outside the menu
        document.addEventListener("click", (e) => {
            if (navMenu.classList.contains("active") && !navMenu.contains(e.target) && !mobileNavToggle.contains(e.target)) {
                toggleMobileMenu(true);
            }
        });

        // Close on Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navMenu.classList.contains("active")) {
                toggleMobileMenu(true);
            }
        });

        // Close on window resize to desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
                toggleMobileMenu(true);
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
        
        activeFilters = {
            deal: "vsetko",
            category: "vsetky",
            query: "",
            propertyType: "vsetky",
            maxPrice: null
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
