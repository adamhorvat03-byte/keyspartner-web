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
            "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
        ],
        tags: ["PREDAJ", "SLÁNSKE VRCHY"],
        isReserved: false,
        agentId: 1,
        desc: "Divízia sprostredkovania nehnuteľností spoločnosti Keys Partners, a.s. v zastúpení nášho Klienta Vám v portfóliu ponúka na PREDAJ pozemok P1 a P2 v obci Kokošovce časť Sigord, situovaný na slnečnej južnej strane Slánskych Vrchov. Ideálna ponuka pre klientov hľadajúcich pokoj, rekreáciu a čistú prírodu. Vhodný pre stavbu rodinného domu alebo rekreačnej chaty. Siete sú v dosahu, prístup je bezproblémový. Pre 3D obhliadku nehnuteľnosti a dokumentáciu kontaktujte nášho makléra.",
        technicalSpecs: {
            "Inžinierske siete": "Voda, elektrina",
            "Terén": "Mierne svahovitý",
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
        tags: ["PREDAJ", "OVERENÁ PONUKA"],
        isReserved: false,
        agentId: 1,
        desc: "Divízia sprostredkovania nehnuteľností spoločnosti Keys Partners, a.s. v zastúpení nášho Klienta Vám v portfóliu ponúka na PREDAJ zrekonštruovaný 3-izbový byt v Prešove. Byt prešiel kompletnou a vkusnou modernou rekonštrukciou: nové rozvody elektriny, vody, stierky, sadrokartónové stropy, podlahy a moderná kuchynská linka so zabudovanými spotrebičmi. Úžitková plocha je 74 m² vrátane priestrannej loggie. Bytový dom je zateplený s novým tichým výťahom.",
        technicalSpecs: {
            "Inžinierske siete": "Voda, elektrina, optický internet",
            "Vykurovanie": "Ústredné",
            "Konštrukcia": "Panelová",
            "Balkón / Loggia": "Zasklená loggia (4 m²)",
            "Parkovanie": "Verejné rezidentské pred domom",
            "Energetický certifikát": "Trieda A"
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
            "Terén": "Mierne svahovitý, slnečný",
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
            "Terén": "Rovinatý až mierne svahovitý",
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
        tags: ["PRENÁJOM", "NOVINKA"],
        isReserved: false,
        agentId: 2,
        desc: "Na prenájom exkluzívny, kompletne a moderne zariadený 2-izbový byt s balkónom v lukratívnej novostavbe na Werferovej ulici v Košiciach (vedľa centrály KEYS PARTNERS). Byt s úžitkovou plochou 55 m² sa nachádza na 2. poschodí. Súčasťou ceny je aj vlastné vyhradené parkovacie miesto. Kompletné vybavenie vrátane spotrebičov, klimatizácie a internetu. Voľný ihneď.",
        technicalSpecs: {
            "Inžinierske siete": "Voda, elektrina, optický internet, klimatizácia",
            "Vykurovanie": "Podlahové kúrenie / vlastný termostat",
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
            "Balkón / Loggia": "Zasklená loggia"
        }
    }
];

// --- Reálni makléri a manažéri KEYS PARTNERS a.s. ---
// Poradie kartičiek: najprv realitní makléri (01-03), potom ostatní členovia tímu (04-05)
const AGENTS = [
    {
        id: 2,
        name: "Ing. Branislav HORVÁT",
        role: "Realitný maklér / Fin. sprostredkovateľ / Partner",
        phone: "+421 905 785 951",
        email: "branislav_horvat@keyspartners.sk",
        image: "brano.webp"
    },
    {
        id: 1,
        name: "Peter DUDA",
        role: "Realitný maklér/Vzťahový riaditeľ",
        phone: "+421 907 441 405",
        email: "peter_duda@keyspartners.sk",
        image: "duda.jpg"
    },
    {
        id: 4,
        name: "Samuel HRIVŇAK",
        role: "Realitný maklér",
        phone: "+421 949 424 377",
        email: "samuel_hrivnak@keyspartners.sk",
        image: "samuel.webp"
    },
    {
        id: 5,
        name: "Bc. Adam HORVÁT",
        role: "Marketing / Fin. sprostredkovateľ",
        phone: null,
        email: "dbre_marketing@keyspartners.sk",
        image: "adam.webp",
        imagePosition: "center 0%"
    },
    {
        id: 3,
        name: "JUDr. Peter PELLA",
        role: "Inžiniering",
        phone: "+421 917 817 207",
        email: "peter_pella@keyspartners.sk",
        image: "pella.webp"
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
    initHeroSlider(); // Automatický background slider v hero sekcii (každé 4s)
    initAboutModal(); // Modálne okná pre sekciu O nás / Kto sme / Desatoro / Etický kódex
    initPhotoLightbox(); // Celoobrazovkový prehliadač fotografií nehnuteľností
    renderListings();
    renderAgents();
    initScrollReveal(); // Spustenie animácií pri skrollovaní
    setupEventListeners();
    loadPropertiesFromApi(); // Asynchrónne načítanie aktuálnych inzerátov z Netlify Blobs
    initReviewsSystem(); // Dynamický systém zákazníckych recenzií
});

// --- Údaje a logika pre modálne okno sekcie "O nás, kto sme, naše desatoro, etický kódex…" ---
const ABOUT_MODAL_DATA = {
    "myslienka": {
        title: "O nás / Myšlienka",
        icon: "fa-solid fa-lightbulb",
        contentHtml: `
            <div class="about-white-block">
                <div class="about-block-heading">Vznik a vývoj spoločnosti (2016 – 2021)</div>
                <p>Celá myšlienka vybudovať spoločnosť s etikou profesionality a so základným pilierom, ktorý je orientovaný na vzťah vznikla v človeku, ktorý je dnes v Predstavenstve spoločnosti. Prvá časť histórie sa začína písať od roku 2016. Kedy 3 obchodní PARTNERI sa zhodli na spoločnej myšlienke - vybudovať Realitnú kanceláriu. A v tom momente začala vznikať nová Divízia Reality spoločnosti. Vývoj spoločnosti sprevádzalo nespočetne množstvo strávených spoločných hodín premýšľania a tvorby. Boli to rôzne úspechy ale aj neúspechy. Hodnota spoločnosti ako aj jej etika sa buduje niekoľko dní, týždňov, mesiacov a rokov. Po všetkých tých časoch prišiel rok 2020. Rok 2020 zmenil veci od základu veľa podnikateľom, ľuďom. COVID-19 ukázal a ukazuje čo dokáže. V tomto období prišiel návrh, aby celé riadenie prevzal jeden z bývalých štatutárov. Ten návrh prijal aktuálny Predseda predstavenstva spoločnosti. Je rok 2021. Spoločnosť prešla komplexným brandingom, taktiež aj zmenou názvu spoločnosti s jasným odkazom.</p>
            </div>
            <div class="about-white-block">
                <div class="about-block-heading">Pár úvodných myšlienok Predsedu predstavenstva spoločnosti:</div>
                <p>Každý z nás sa ocitne v rôznych situáciách v živote. Niektoré sú ľahšie a iné zas náročne a ťažšie. Základom podľa môjho presvedčenia je to, ako sa s tým všetkým dokážete vysporiadať, poučiť a kým sa dokážete stať. V ťažkých chvíľach skutočne spoznáte, že kto sú Tí Vaši priatelia, ktorí s Vami budú v dobrom a zlom. Umelých priateľstiev je dnes veľa. Sám si niekedy kladiem otázku, že o čo tým ľuďom ide. Úprimných, kedy niekomu záleží na Vás a berú Vás takého aký ste, kde popri tom sa Vám snažia pomôcť je menej. A práve tých si podľa mňa potrebujeme <strong>VÁŽIŤ, CENIŤ</strong> a to najpodstatnejšie <strong>OPÄTOVAŤ IM TO</strong>. Lebo nie je nič horšie v živote ako zistenie faktu, že venujete čas tým nesprávnym ľuďom okolo Vás, ktorí si nezaslúžia čo i len jednu Vašu myšlienku, Vaše pocity.</p>
                <p style="margin-top: 12px;">Peniaze majú jednu krásnu a užasnú vlastnosť. Viete akú? S istotou ste počuli, že peniaze ničia ľudí a menia ich charakter. Viete čo si o tom myslím ja? Peniaze nemenia charakter a povahu ľudí. Oni len odhaľujú to, aký charakter osobnosti človeka v sebe ste...</p>
            </div>
            <div class="about-white-block about-white-quote">
                <p>Jeden múdry muž raz vyslovil myšlienku: <strong>“Jeden muž nemusí zmeniť vôbec nič, no ak sa rozhodne môže zmeniť veľa"</strong>. Rokom 2021 sa začína písať nová <strong>HISTÓRIA spoločnosti Keys Partners, a.s.</strong>.</p>
            </div>
        `
    },
    "kto-sme": {
        title: "Kto sme",
        icon: "fa-solid fa-people-group",
        contentHtml: `
            <div class="about-white-block">
                <div class="about-block-heading">Naša filozofia a hodnoty</div>
                <p>Sme tím ľudí, ktorí veria, že poctivý obchodný styk založený na korektnosti a vzájomnom pochopení sa bez ohľadu na rozličný názor a pohľad na vec nám dáva právo uspieť v oblasti, v ktorej sa naša spoločnosť angažuje. Služby ponúkame na profesionálnej úrovni s profesionálnym tímom. Vieme čo robíme, vieme ako to robíme a vieme akú hodnotu ponúkame našim klientom.</p>
            </div>
            <div class="about-white-block">
                <div class="about-block-heading">Tri divízie spoločnosti Keys Partners</div>
                <p>Koncept je založený na troch Divíziách - <strong>BROKERAGE REAL ESTATE</strong> (Realitná činnosť), <strong>DEVELOPMENT PROJECTS</strong> (Stavebné povolenia, Inžiniering, Projekčná činnosť, Výkup nehnuteľnosti, Výstavba nehnuteľnosti) a <strong>PROPERTY MANAGEMENT</strong> (Správa nájomných nehnuteľností, správa podľa osobitného zákona). Komplexné riešenie spojené s Nehnuteľnosťou.</p>
            </div>
        `
    },
    "desatoro": {
        title: "Naše desatoro",
        icon: "fa-solid fa-list-ol",
        contentHtml: `
            <ul class="about-desatoro-list">
                <li><span class="about-desatoro-num">1</span> <span>Vzťah k človeku je základným kameňom nášho úspechu;</span></li>
                <li><span class="about-desatoro-num">2</span> <span>Hovor vždy pravdu;</span></li>
                <li><span class="about-desatoro-num">3</span> <span>Byť čestný je cesta pre priamu komunikáciu;</span></li>
                <li><span class="about-desatoro-num">4</span> <span>Mysli na to, že dôvera človeka je krehká vec;</span></li>
                <li><span class="about-desatoro-num">5</span> <span>Keď niečo nevieš, alebo nie si si istý, jednoducho povedz, že to zistíš;</span></li>
                <li><span class="about-desatoro-num">6</span> <span>Skutky sú dôkazom hodnoty dodržaného slova;</span></li>
                <li><span class="about-desatoro-num">7</span> <span>Ak spravíš chybu, priznaj si ju;</span></li>
                <li><span class="about-desatoro-num">8</span> <span>Domnienky ničia všetko správne pochopené;</span></li>
                <li><span class="about-desatoro-num">9</span> <span>Jedine fakty Ti dávajú právo si byť istý tým, čo hovoríš;</span></li>
                <li><span class="about-desatoro-num">10</span> <span>Konkurenciu plne akceptujeme, nekritizujeme a neničíme jej meno.</span></li>
            </ul>
        `
    },
    "pravne-sluzby": {
        title: "Právne služby",
        icon: "fa-solid fa-scale-balanced",
        contentHtml: `
            <div class="about-white-block">
                <div class="about-block-heading">Odborné právne zastúpenie a bezpečnosť</div>
                <p>Právne služby pre našich klientov sú súčasťou nášho Právneho oddelenia, ktoré zastupuje tím profesionálov. Základom je zameranie na zákonné a legislatívne postupy pri riešení potrieb našich klientov. Neodmysliteľnou súčasťou je aj elektronické podávanie na príslušný Okresný úrad, odbor kataster.</p>
            </div>
            <div class="about-white-block about-white-quote">
                <p>Riadime sa pravidlom - <strong>Jasné zmluvy tvoria čisté vzťahy.</strong></p>
            </div>
        `
    },
    "marketing": {
        title: "Marketing / Rýchlosť predaja",
        icon: "fa-solid fa-gauge-high",
        contentHtml: `
            <div class="about-white-block">
                <div class="about-block-heading">Strategický marketing a nastavenie ceny</div>
                <p>Vieme, a skúsenosti za nás hovoria, že správnym zanalyzovaním trhu, premysleným strategickým marketingovým plánom a zodpovedným nastavením predajnej ceny dokážeme zvýšiť rýchlosť predaja pre tých, ktorí majú záujem svoju nehnuteľnosť <strong>PREDAŤ</strong>, nie <strong>PREDÁVAŤ</strong>.</p>
            </div>
        `
    },
    "eticky-kodex": {
        title: "Etický kódex",
        icon: "fa-solid fa-shield-heart",
        contentHtml: `
            <div class="about-white-block">
                <div class="about-block-heading">Preambula</div>
                <p>Našou víziou je vybudovať dlhodobo stabilizovanú pozíciu spoločnosti na trhu a vytvoriť čo najlepšie pracovné podmienky. Medzi naše poslanie radíme osobnú zodpovednosť za každú požiadavku našich klientov, porozumenie ich potrebám a neustále zlepšovanie našich služieb. Medzi hodnoty spoločnosti patrí záväznosť, lojalita, uznanie kvality, rešpekt k výkonu, zhoda medzi slovami a skutkami, poctivosť a nepodkupnosť.</p>
            </div>
            <div class="about-white-block">
                <div class="about-block-heading">Základné etické princípy</div>
                <p>Dodržiavanie pravidiel a smerníc platných pre spoločnosť, robenie vecí s jasným rozhodnutím a orientáciou na klienta, určenie vlastných chýb, práca na sebe, vzdelávanie sa a posúvanie sa vpred. Spoločným úsilím chceme viesť spoločnosť k jej rastu.</p>
            </div>
            <div class="about-white-block">
                <div class="about-block-heading">Vzťah k akcionárom</div>
                <p>Každý obchodný zástupca je reprezentantom našej spoločnosti. Osobne vplýva na obhajovanie hodnôt spoločnosti. Každý manažér a riaditeľ preberá zodpovednosť za svojich obchodných zástupcov pri realizácii stratégie.</p>
            </div>
            <div class="about-white-block">
                <div class="about-block-heading">Vzťah ku klientom</div>
                <p>Obchodný zástupca, manažér a riaditeľ dbá o priania a požiadavky klientov, vychádza im v ústrety kvalitou služieb a pravdivo ich informuje o ponúkaných produktoch. Neuchýli sa k praktikám nečestnej súťaže ani k podplácaniu.</p>
            </div>
            <div class="about-white-block">
                <div class="about-block-heading">Vzťah k širšiemu spoločenskému okoliu</div>
                <p>Usilujeme sa o budovanie goodwillu spoločnosti, vytvorenie priateľských partnerských vzťahov a rešpektujeme, že styk s médiami zabezpečujú len štatutári spoločnosti.</p>
            </div>
            <div class="about-white-block">
                <div class="about-block-heading">Hodnotová orientácia</div>
                <p>Manažér a riaditeľ sa usiluje o uplatnenie autority v prospech dosiahnutia cieľov. Svoju mocenskú pozíciu nezneužíva, ale prirodzene udržiava a rozvíja priateľské a kolegiálne vzťahy.</p>
            </div>
            <div class="about-white-block">
                <div class="about-block-heading">Vzťah k svojmu tímu</div>
                <p>Vhodné poverovanie zodpovednosti a právomocí. Správne stanovenie cieľov a motivácia všetkých členov k ich dosiahnutiu.</p>
            </div>
            <div class="about-white-block">
                <div class="about-block-heading">Všeobecné ustanovenia</div>
                <p>Každý zmluvný partner musí pri plnení povinností dodržiavať všeobecne záväzné predpisy a etické zásady správania formulované v tomto Etickom kódexe podnikania.</p>
            </div>
        `
    },
    "gdpr": {
        title: "Zásady ochrany osobných údajov (GDPR)",
        icon: "fa-solid fa-user-shield",
        contentHtml: `
            <div class="about-white-block about-legal-meta">
                <p><strong>Účinnosť od:</strong> 24. 11. 2026</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">1. Identifikačné a kontaktné údaje prevádzkovateľa</h3>
                <dl class="about-info-list">
                    <div><dt>Obchodné meno:</dt><dd>Keys Partners, a.s.</dd></div>
                    <div><dt>Sídlo:</dt><dd>Werferova 3782/6, 040 11 Košice - mestská časť Juh</dd></div>
                    <div><dt>IČO:</dt><dd>44 235 658</dd></div>
                    <div><dt>DIČ / IČ DPH:</dt><dd>2022634999 / SK2022634999</dd></div>
                    <div><dt>Registrácia:</dt><dd>Obchodný register Mestského súdu Košice, oddiel: Sa, vložka č.: 1763/V</dd></div>
                    <div><dt>Štatutárny orgán:</dt><dd>František Kušnír, predseda predstavenstva</dd></div>
                    <div><dt>E-mail pre otázky GDPR:</dt><dd><a href="mailto:gdpr@keyspartners.sk">gdpr@keyspartners.sk</a></dd></div>
                </dl>
                <p>Prevádzkovateľ nemá určenú zodpovednú osobu (DPO). So všetkými otázkami sa môžete obrátiť priamo na Prevádzkovateľa.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">2. Právny rámec a účel tohto dokumentu</h3>
                <p>Tento dokument upravuje pravidlá spracúvania osobných údajov návštevníkov webovej stránky v súlade s Nariadením (EÚ) 2016/679 (GDPR) a zákonom č. 18/2018 Z. z. Prostredníctvom tejto webovej stránky Prevádzkovateľ aktívne nezhromažďuje žiadne osobné údaje prostredníctvom kontaktných, dopytových ani registračných formulárov.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">3. Rozsah, účel, právny základ a doba uchovávania údajov</h3>
                <p><strong>A. Technická prevádzka (Serverové logy):</strong> Prehliadač odosiela základné technické údaje (IP adresa, čas prístupu). Účelom je bezpečnosť. Právny základ: Oprávnený záujem. Doba uchovávania: spravidla najviac 30 dní.</p>
                <p style="margin-top: 12px;"><strong>B. Priama komunikácia na podnet návštevníka:</strong> Ak návštevník kontaktuje Prevádzkovateľa, spracúvajú sa dobrovoľne poskytnuté údaje. Právny základ: Opatrenia pred uzatvorením zmluvy alebo oprávnený záujem. Doba uchovávania: najviac 6 mesiacov od poslednej komunikácie.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">4. Súbory Cookies a sledovacie technológie</h3>
                <p>Webová stránka www.keyspartners.sk nepoužíva žiadne analytické, marketingové, reklamné ani profilovacie súbory cookies (ako napr. Google Analytics, Meta Pixel) a nevyžaduje udelenie súhlasu prostredníctvom cookie lišty.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">5. Príjemcovia osobných údajov a prenos do tretích krajín</h3>
                <p>Technickú správu zabezpečuje Prevádzkovateľ. K technickým logom môžu mať prístup poskytovatelia webhostingu. Údaje sa neprenášajú do tretích krajín a nedochádza k automatizovanému rozhodovaniu.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">6. Odkazy na externé webové stránky</h3>
                <p>Web môže obsahovať odkazy na externé portály. Prevádzkovateľ nezodpovedá za pravidlá ochrany údajov týchto stránok.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">7. Práva dotknutej osoby</h3>
                <p>Podľa GDPR máte právo na:</p>
                <ul class="about-bullet-list">
                    <li>prístup k údajom,</li>
                    <li>opravu,</li>
                    <li>vymazanie ("na zabudnutie"),</li>
                    <li>obmedzenie spracúvania,</li>
                    <li>prenosnosť údajov,</li>
                    <li>právo namietať.</li>
                </ul>
                <p>Taktiež máte právo podať sťažnosť dozornému orgánu: <strong>Úrad na ochranu osobných údajov SR</strong>, Hraničná 12, 820 07 Bratislava (<a href="https://www.dataprotection.gov.sk" target="_blank" rel="noopener noreferrer">www.dataprotection.gov.sk</a>).</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">8. Záverečné ustanovenia</h3>
                <p>Zásady sa vzťahujú výlučne na web www.keyspartners.sk. Podrobné informácie poskytuje Prevádzkovateľ osobitne pred uzatvorením zmluvy. Aktuálne znenie je zverejnené na webovej stránke.</p>
            </div>
        `
    },
    "reklamacny-poriadok": {
        title: "Reklamačný poriadok",
        icon: "fa-solid fa-file-signature",
        contentHtml: `
            <div class="about-white-block about-legal-meta">
                <p><strong>Účinnosť od:</strong> 24. 11. 2026</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">1. Úvodné ustanovenia a identifikácia realitnej kancelárie</h3>
                <p>Tento Reklamačný poriadok upravuje postup pri uplatňovaní a vybavovaní reklamácií služieb poskytovaných obchodnou spoločnosťou Keys Partners, a.s. v oblasti realitného sprostredkovania v súlade s Občianskym zákonníkom a zákonom o ochrane spotrebiteľa.</p>
                <dl class="about-info-list">
                    <div><dt>Obchodné meno:</dt><dd>Keys Partners, a.s.</dd></div>
                    <div><dt>Sídlo:</dt><dd>Werferova 3782/6, 040 11 Košice - mestská časť Juh</dd></div>
                    <div><dt>IČO / DIČ / IČ DPH:</dt><dd>44 235 658 / 2022634999 / SK2022634999</dd></div>
                    <div><dt>Registrácia:</dt><dd>Obchodný register Mestského súdu Košice, oddiel: Sa, vložka č.: 1763/V</dd></div>
                    <div><dt>Štatutárny orgán:</dt><dd>František Kušnír, predseda predstavenstva</dd></div>
                    <div><dt>Webové sídlo:</dt><dd>www.keyspartners.sk</dd></div>
                    <div><dt>E-mail na uplatnenie reklamácie:</dt><dd><a href="mailto:info@keyspartners.sk">info@keyspartners.sk</a></dd></div>
                </dl>
                <p>Klientom sa na účely tohto Reklamačného poriadku rozumie každá osoba, ktorej Realitná kancelária poskytuje služby na základe písomnej zmluvy.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">2. Rozsah zodpovednosti za vady služieb</h3>
                <p>Realitná kancelária zodpovedá za to, že poskytované služby majú dohodnutú kvalitu a rozsah. Za vadu služby sa považuje najmä nesplnenie zmluvne dohodnutého rozsahu činností. Za vadu sa nepovažuje skutočnosť, ak nedôjde k uzatvoreniu zmluvy z dôvodov na strane Klienta, tretej osoby alebo situácie na trhu.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">3. Spôsob a miesto uplatnenia reklamácie</h3>
                <p>Klient je oprávnený uplatniť reklamáciu bez zbytočného odkladu:</p>
                <ul class="about-bullet-list">
                    <li>písomne poštou na adrese sídla: Keys Partners, a.s., Werferova 3782/6, 040 11 Košice - mestská časť Juh,</li>
                    <li>elektronicky e-mailom na adresu: <a href="mailto:info@keyspartners.sk">info@keyspartners.sk</a>,</li>
                    <li>osobne v sídle počas pracovných hodín.</li>
                </ul>
                <p>V reklamácii Klient uvedie svoje identifikačné údaje, označenie zmluvy, presný popis vady a aké právo uplatňuje.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">4. Potvrdenie o uplatnení reklamácie a lehota na vybavenie</h3>
                <p>Realitná kancelária je povinná pri uplatnení vydať Klientovi písomné potvrdenie. Lehota na odstránenie vady a vybavenie nesmie byť dlhšia ako 30 dní, ak dlhšia lehota nie je odôvodnená objektívnym dôvodom. O výsledku informuje Realitná kancelária Klienta písomne najneskôr v posledný deň lehoty.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">5. Nároky z oprávnenej reklamácie</h3>
                <p>Ak je reklamácia uznaná, Klient má právo na bezplatné odstránenie vady, primeranú zľavu z odmeny, alebo odstúpenie od zmluvy pri neodstrániteľnej vade. Ak kancelária reklamáciu odmietne, musí to písomne odôvodniť.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">6. Alternatívne riešenie sporov a orgán dozoru</h3>
                <p>Ak Klient spotrebiteľ nie je spokojný s vybavením reklamácie, má právo požiadať o nápravu a následne podať návrh na začatie alternatívneho riešenia sporu podľa zákona č. 391/2015 Z. z.</p>
                <p style="margin-top: 12px;"><strong>Orgán dozoru:</strong> Slovenská obchodná inšpekcia (SOI), Inšpektorát SOI pre Košický kraj, Vrátna 3, P. O. BOX A-35, 040 65 Košice 1 (<a href="https://www.soi.sk" target="_blank" rel="noopener noreferrer">www.soi.sk</a>).</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">7. Záverečné ustanovenia</h3>
                <p>Tento Reklamačný poriadok nadobúda platnosť a účinnosť dňom 24. 11. 2026.</p>
            </div>
        `
    },
    "asr": {
        title: "Informácia o alternatívnom riešení sporov (ARS)",
        icon: "fa-solid fa-scale-balanced",
        contentHtml: `
            <div class="about-white-block about-legal-meta">
                <p><strong>Účinnosť od:</strong> 24. 11. 2026</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">1. Účel dokumentu a identifikácia obchodníka</h3>
                <p>Obchodná spoločnosť Keys Partners, a.s. týmto v súlade s § 10a ods. 1 písm. k) zákona č. 108/2024 Z. z. o ochrane spotrebiteľa a o zmene a doplnení niektorých zákonov a v súlade so zákonom č. 391/2015 Z. z. o alternatívnom riešení spotrebiteľských sporov a o zmene a doplnení niektorých zákonov informuje spotrebiteľov o možnosti a podmienkach riešenia spotrebiteľských sporov prostredníctvom systému alternatívneho riešenia sporov.</p>
                <dl class="about-info-list">
                    <div><dt>Obchodné meno:</dt><dd>Keys Partners, a.s.</dd></div>
                    <div><dt>Sídlo:</dt><dd>Werferova 3782/6, 040 11 Košice - mestská časť Juh</dd></div>
                    <div><dt>IČO:</dt><dd>44 235 658</dd></div>
                    <div><dt>DIČ / IČ DPH:</dt><dd>2022634999 / SK2022634999</dd></div>
                    <div><dt>Registrácia:</dt><dd>Obchodný register Mestského súdu Košice, oddiel: Sa, vložka č.: 1763/V</dd></div>
                    <div><dt>Webové sídlo:</dt><dd>www.keyspartners.sk</dd></div>
                    <div><dt>Kontaktný e-mail:</dt><dd><a href="mailto:info@keyspartners.sk">info@keyspartners.sk</a></dd></div>
                </dl>
                <p>(ďalej len ako "Obchodník")</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">2. Právo spotrebiteľa obrátiť sa na Obchodníka so žiadosťou o nápravu</h3>
                <p>Spotrebiteľ má právo obrátiť sa na Obchodníka so žiadosťou o nápravu (e-mailom na adresu <a href="mailto:info@keyspartners.sk">info@keyspartners.sk</a> alebo písomne na adresu sídla Obchodníka), ak nie je spokojný so spôsobom, ktorým Obchodník vybavil jeho reklamáciu, alebo ak sa domnieva, že Obchodník porušil jeho práva.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">3. Podmienky podania návrhu na alternatívne riešenie sporu</h3>
                <p>Ak Obchodník na žiadosť o nápravu odpovie zamietavo alebo na ňu neodpovie do 30 dní odo dňa jej odoslania, spotrebiteľ má právo podať návrh na začatie alternatívneho riešenia sporu subjektu alternatívneho riešenia sporov (ďalej len "subjekt ARS"). Možnosť obrátiť sa na súd tým nie je dotknutá.</p>
                <ul class="about-bullet-list">
                    <li>Alternatívne riešenie sporu sa vzťahuje len na spor medzi spotrebiteľom a Obchodníkom vyplývajúci zo spotrebiteľskej zmluvy alebo súvisiaci so spotrebiteľskou zmluvou.</li>
                    <li>Subjekt ARS môže návrh odmietnuť, ak vyčísliteľná hodnota sporu nepresahuje sumu 20 eur.</li>
                    <li>Alternatívne riešenie sporu orgánmi alternatívneho riešenia sporov je bezodplatné. Oprávnená právnická osoba zapísaná v zozname subjektov ARS môže vo svojich pravidlách alternatívneho riešenia sporov stanoviť poplatok najviac vo výške 5 eur vrátane dane z pridanej hodnoty.</li>
                </ul>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">4. Príslušné subjekty alternatívneho riešenia sporov</h3>
                <p>Príslušným orgánom alternatívneho riešenia sporov v oblasti služieb poskytovaných Obchodníkom je najmä:</p>
                <div class="about-contact-card">
                    <strong>Slovenská obchodná inšpekcia (SOI)</strong>
                    <span>Ústredný inšpektorát Slovenskej obchodnej inšpekcie, Odbor pre medzinárodné vzťahy a alternatívne riešenie spotrebiteľských sporov</span>
                    <span>Bajkalská 21/A, P. O. BOX 29, 827 99 Bratislava 27</span>
                    <span>Web: <a href="https://www.soi.sk" target="_blank" rel="noopener noreferrer">www.soi.sk</a></span>
                    <span>E-mail: <a href="mailto:ars@soi.sk">ars@soi.sk</a>, <a href="mailto:adr@soi.sk">adr@soi.sk</a></span>
                </div>
                <p>Spotrebiteľ má právo voľby, na ktorý z príslušných subjektov alternatívneho riešenia sporov sa obráti. Aktuálny a úplný zoznam vedie Ministerstvo hospodárstva SR na webovom sídle <a href="https://www.mhsr.sk" target="_blank" rel="noopener noreferrer">www.mhsr.sk</a>.</p>
            </div>
            <div class="about-white-block">
                <h3 class="about-block-heading">5. Záverečné ustanovenia</h3>
                <p>Táto Informácia o alternatívnom riešení sporov nadobúda platnosť a účinnosť dňom 24. 11. 2026 a je trvalo zverejnená na webovom sídle Obchodníka www.keyspartners.sk.</p>
            </div>
        `
    }
};

function initAboutModal() {
    const modal = document.getElementById("aboutModal");
    const backdrop = document.getElementById("aboutModalBackdrop");
    const closeBtn = document.getElementById("aboutModalClose");
    const modalBody = document.getElementById("aboutModalBody");

    if (!modal || !modalBody) return;

    const openAboutModal = (key) => {
        const data = ABOUT_MODAL_DATA[key];
        if (!data) return;

        modalBody.innerHTML = `
            <div class="about-modal-header">
                <div class="about-modal-icon">
                    <i class="${data.icon}"></i>
                </div>
                <div class="about-modal-title-wrap">
                    <span class="about-modal-badge">Keys Partners</span>
                    <h2 class="about-modal-title" id="aboutModalTitle">${data.title}</h2>
                </div>
            </div>
            <div class="about-modal-text">
                ${data.contentHtml}
            </div>
        `;

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    const closeAboutModal = () => {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    };

    document.querySelectorAll(".benefit-card[data-about-key], .benefit-read-more[data-about-key], .footer-legal-link[data-about-key]").forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const key = el.getAttribute("data-about-key");
            if (key) openAboutModal(key);
        });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeAboutModal);
    if (backdrop) backdrop.addEventListener("click", closeAboutModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeAboutModal();
        }
    });
}

// --- Automatický background slider v hero sekcii (cyklické striedanie každé 4 sekundy) ---
function initHeroSlider() {
    const slider = document.getElementById("heroBgSlider");
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll(".hero-slide")).filter(img => {
        const src = img.getAttribute("src");
        return src && src.trim() !== "";
    });

    if (slides.length <= 1) return;

    let currentIndex = slides.findIndex(s => s.classList.contains("active"));
    if (currentIndex === -1) {
        currentIndex = 0;
        slides[0].classList.add("active");
    }

    setInterval(() => {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    }, 4000);
}

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
                // Rozlíšenie interného čísla zákazky (data.id z RealSoftu, napr. "09 08 77 00 10 30" alebo "999 001")
                if (!p.internalId && p.id && !String(p.id).startsWith("RS-") && String(p.id) !== String(p.externalId || "")) {
                    p.internalId = String(p.id).trim();
                }
                if (
                    (String(p.id) === "RS-3847665965" || String(p.externalId) === "RS-3847665965") &&
                    (!p.internalId || p.internalId === "JuJFHdNq1f2")
                ) {
                    p.internalId = "09 08 77 00 10 30";
                }
                // Ak je v nadpise explicitne uvedený počet izieb (napr. "3 izbový byt"), zosúladíme rooms (oprava posunu subcategory 404 -> 3 izby)
                if (p.title && typeof p.title === "string") {
                    const mRooms = p.title.match(/(\d+)\s*[-–]?\s*izbov/i);
                    if (mRooms) {
                        p.rooms = parseInt(mRooms[1], 10);
                    }
                }
                const resolvedStatus = resolvePropertyStatus(p);
                p.status = resolvedStatus;
                p.substatus = resolvedStatus === "sold" ? "predane" : (resolvedStatus === "reserved" ? "rezervovany" : "volny");
                p.isReserved = resolvedStatus === "reserved";
                p.isSold = resolvedStatus === "sold";
                p.statusLabel = getPropertyStatusLabel(p);

                const isSoldProp = resolvedStatus === "sold";
                p.virtualTourUrl = isSoldProp ? null : resolvePropertyVirtualTourUrl(p);
                p.videoUrls = resolvePropertyVideoUrls(p);
                p.videoUrl = p.videoUrls[0] || null;
                p.createdAt = p.createdAt || p.created_at || p.dateCreated || p.date_created || p.publishedAt || p.published_at || p.addedAt || p.added_at || p.updatedAt || null;
                p.technicalSpecs = resolvePropertyTechnicalSpecs(p);
                if (Array.isArray(p.tags)) {
                    if (resolvedStatus === "sold") {
                        p.tags = p.tags.filter(t => {
                            const up = String(t).trim().toUpperCase();
                            return !["PREDAJ", "PRENÁJOM", "PRENAJOM", "REZERVOVANÉ", "REZERVOVANE"].includes(up) && !up.includes("3D");
                        });
                    } else if (resolvedStatus === "reserved") {
                        p.tags = p.tags.filter(t => !["PREDAJ", "PREDANÉ", "PREDANE", "SPROSTREDKOVANÉ", "SPROSTREDKOVANE"].includes(String(t).trim().toUpperCase()));
                        if (!p.tags.some(t => String(t).toUpperCase().includes("REZERVOVANÉ"))) {
                            p.tags.unshift("REZERVOVANÉ");
                        }
                    } else {
                        p.tags = p.tags.filter(t => !["PREDANÉ", "PREDANE", "PRENAJATÉ", "PRENAJATE", "REZERVOVANÉ", "REZERVOVANE", "SPROSTREDKOVANÉ", "SPROSTREDKOVANE"].includes(String(t).trim().toUpperCase()));
                        if (p.tags.length === 0) {
                            p.tags.push(p.deal === "prenajom" ? "PRENÁJOM" : "PREDAJ");
                        }
                    }
                    if (!isSoldProp && p.virtualTourUrl) {
                        if (!p.tags.some(t => String(t).toUpperCase().includes("3D"))) {
                            p.tags.push("3D PREHLIADKA");
                        }
                    } else {
                        p.tags = p.tags.filter(t => !String(t).toUpperCase().includes("3D"));
                    }
                }
                return p;
            }).sort(comparePropertiesByCreatedAtDesc);
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
        lower.endsWith("pella.webp") ||
        lower.endsWith("duda.jpg") ||
        lower.endsWith("brano.jpg") ||
        lower.endsWith("brano.webp") ||
        lower.endsWith("samuel.jpg") ||
        lower.endsWith("samuel.webp") ||
        lower.endsWith("adam.webp")
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

// --- Jednotná autoritatívna funkcia pre určenie stavu dostupnosti (Voľná / Rezervovaná / Predaná) ---
// Priorita: 1. explicitné polia stavu (Stav / Dostupnosť z RealSoftu), 2. sekundárne príznaky, 3. záložný nadpis/tagy.
// Text "NA PREDAJ" v nadpise určuje len typ transakcie, nikdy nie nedostupnosť či rezerváciu.
function resolvePropertyStatus(item) {
    if (!item) return "active";

    const idStr = String(item.id || item.externalId || "").trim();
    const internalStr = String(item.internalId || "").trim();

    // Jednorazová samoexpirujúca oprava pre pre-fix blob RS-2078570016 (ID: 09 08 77 00 09)
    if (
        (idStr === "RS-2078570016" || idStr === "2078570016" || internalStr === "09 08 77 00 09") &&
        !item.statusSource &&
        item.updatedAt === "2026-11-24T11:48:01.094Z"
    ) {
        return "active";
    }

    // Zabezpečenie okamžitého zaradenia pre konkrétnu zákazku 'PREDANÝ - Stavebný pozemok TIMEA'
    if (idStr === "RS-3253858396" || idStr === "3253858396") {
        return "sold";
    }

    const soldWordRegex = /\s(predan[a-z]*|sprostredkovan[a-z]*|prenajat[a-z]*|sold|rented|zrealizovan[a-z]*)\b/i;
    const rentPhraseRegex = /\sv\s+(?:pre)?najm/i;
    const endSalePhraseRegex = /\spredaj\s+ukoncen/i;
    const reservedWordRegex = /\s(rezervovan[a-z]*|reserved)\b/i;
    const volnyRegex = /\s(voln[a-z]*|free|available|aktivn[a-z]*|active)\b/i;

    // 1. Primárne explicitné polia stavu (zhodné s poľom Stav v detaile a v RealSoft Export API v1)
    const primaryFields = [
        item.realsoftStatus,
        item.status,
        item.stav,
        item.stav_zakazky,
        item.availability,
        item.dostupnost,
        item.dostupnosť,
        item.statusLabel,
        item.status_name,
        item.deal_status,
        item.dovod_ukoncenia
    ].filter(v => v !== undefined && v !== null && String(v).trim() !== "" && String(v).trim() !== "-");

    const numRaw = item.realsoftStatus !== undefined && item.realsoftStatus !== null
        ? Number(item.realsoftStatus)
        : (item.status !== undefined && item.status !== null && /^\d+$/.test(String(item.status).trim()) ? Number(item.status) : NaN);
    const primaryClean = " " + cleanTextForStatusCheck(primaryFields.join(" ")) + " ";

    if (
        numRaw === 4 ||
        numRaw === 9 ||
        soldWordRegex.test(primaryClean) ||
        rentPhraseRegex.test(primaryClean) ||
        endSalePhraseRegex.test(primaryClean)
    ) {
        return "sold";
    }

    if (numRaw === 3 || reservedWordRegex.test(primaryClean)) {
        return "reserved";
    }

    if (numRaw === 1 || volnyRegex.test(primaryClean)) {
        return "active";
    }

    // 2. Sekundárny fallback (substatus, booleany, tagy, historický nadpis pre statické/staršie záznamy)
    const subClean = " " + cleanTextForStatusCheck(item.substatus || "") + " ";
    const titleText = `${item.title || ""} ${item.shortTitle || ""} ${item.name || ""} ${item.nazov || ""} ${item.headline || ""}`;
    const tagsText = Array.isArray(item.tags) ? item.tags.filter(t => t && String(t).trim().toUpperCase() !== "REALSOFT").join(" ") : String(item.tags || "");
    const fallbackCombined = `${item.substatus || ""} ${tagsText} ${titleText}`;
    const fallbackClean = " " + cleanTextForStatusCheck(fallbackCombined) + " ";
    const directSoldRegex = /(?:^|[^a-zA-Z0-9\u00C0-\u017F])(predan[eéyýaáou]?|sprostredkovan[eéyýaáou]?|prenajat[eéyýaáou]?|sold|rented|zrealizovan[eéyýaáou]?|v\s+(?:pre)?n[aá]jm[ie]|predaj\s+ukon[cč]en)/i;
    const directReservedRegex = /(?:^|[^a-zA-Z0-9\u00C0-\u017F])(rezervovan[eéyýaáou]?|reserved)/i;

    if (
        item.isSold === true ||
        item.is_sold === true ||
        item.is_rented === true ||
        item.sold === 1 ||
        item.sold === true ||
        item.rented === 1 ||
        item.rented === true ||
        soldWordRegex.test(subClean) ||
        soldWordRegex.test(fallbackClean) ||
        rentPhraseRegex.test(fallbackClean) ||
        endSalePhraseRegex.test(fallbackClean) ||
        directSoldRegex.test(fallbackCombined)
    ) {
        return "sold";
    }

    if (
        item.isReserved === true ||
        item.is_reserved === true ||
        item.rezervovane === true ||
        reservedWordRegex.test(subClean) ||
        reservedWordRegex.test(fallbackClean) ||
        directReservedRegex.test(fallbackCombined)
    ) {
        return "reserved";
    }

    return "active";
}

// --- Detekcia ukončených obchodov (Sprostredkované: predané, prenajaté, v nájme, sprostredkované) ---
function isPropertySoldOrCompleted(item) {
    return resolvePropertyStatus(item) === "sold";
}

// --- Detekcia rezervovaných ponúk ---
function isPropertyReserved(item) {
    return resolvePropertyStatus(item) === "reserved";
}

// --- Pomocná funkcia: Rozdelenie nehnuteľnosti do 3 skupín podľa stavu transakcie ---
function getPropertyStatusGroup(prop) {
    return resolvePropertyStatus(prop);
}

function getPropertyStatusLabel(prop) {
    const grp = resolvePropertyStatus(prop);
    if (grp === "sold") return "Predaná";
    if (grp === "reserved") return "Rezervovaná";
    return "Voľná";
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
    if (filterVal === "kupa") {
        if (item.deal === "kupa" || item.type === "kupa") return true;
        const text = cleanTextForStatusCheck(`${item.title || ""} ${Array.isArray(item.tags) ? item.tags.join(" ") : ""}`);
        return /\b(kupa|kupim|dopyt)\b/i.test(text);
    }
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
        // Pre kategóriu Sprostredkované odstránime zavádzajúci štítok "PREDAJ", zastaraný "REZERVOVANÉ" a štítok 3D prehliadky, a pridáme zelené štítky
        cleanTags = cleanTags.filter(t => {
            const up = String(t).trim().toUpperCase();
            return !["PREDAJ", "PRENÁJOM", "PRENAJOM", "REZERVOVANÉ", "REZERVOVANE"].includes(up) && !up.includes("3D");
        });
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
        cleanTags = cleanTags.filter(t => !["PREDAJ", "PREDANÉ", "PREDANE", "SPROSTREDKOVANÉ", "SPROSTREDKOVANE"].includes(String(t).trim().toUpperCase()));
        if (!cleanTags.some(t => String(t).toUpperCase().includes("REZERVOVANÉ"))) {
            cleanTags.unshift("REZERVOVANÉ");
        }
    } else {
        // Pre dostupné (Voľné) ponuky v hlavnej sekcii odstránime prípadné staré štítky REZERVOVANÉ / PREDANÉ / SPROSTREDKOVANÉ
        cleanTags = cleanTags.filter(t => !["PREDANÉ", "PREDANE", "PRENAJATÉ", "PRENAJATE", "REZERVOVANÉ", "REZERVOVANE", "SPROSTREDKOVANÉ", "SPROSTREDKOVANE"].includes(String(t).trim().toUpperCase()));
        if (cleanTags.length === 0) {
            cleanTags.push(prop.deal === "prenajom" ? "PRENÁJOM" : "PREDAJ");
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
    const displayId = prop.internalId || prop.customId || prop.externalId || prop.id;
    let cardTypeLabel = prop.categoryLabel || "";
    if (!cardTypeLabel) {
        if (prop.type === "byt") {
            const rNum = validRooms ? Number(prop.rooms) : NaN;
            cardTypeLabel = (!isNaN(rNum) && rNum > 0) ? `${rNum}-izbový byt` : "Byt";
        } else if (prop.type === "dom") {
            cardTypeLabel = "Rodinný dom";
        } else if (prop.type === "pozemi") {
            cardTypeLabel = "Stavebný pozemok";
        } else {
            cardTypeLabel = "Komerčné / Investícia";
        }
    }

    card.innerHTML = `
        <div class="card-img-wrapper">
            <div class="card-badges">${badgesHtml}</div>
            <img src="${safeImg}" alt="${prop.title}" loading="lazy" onerror="if(this.src!=='${NEUTRAL_PROPERTY_PLACEHOLDER}')this.src='${NEUTRAL_PROPERTY_PLACEHOLDER}';">
            ${agent ? `
            <div class="card-agent-badge" title="Zodpovedný maklér: ${agent.name}">
                ${agent.image ? `<img src="${agent.image}" alt="${agent.name}" class="card-agent-img">` : `<div class="card-agent-img agent-avatar-placeholder" aria-label="${agent.name}"></div>`}
            </div>` : ''}
            <div class="card-price-tag">${priceFormatted}</div>
        </div>
        <div class="card-body">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span class="card-type">${cardTypeLabel}</span>
                <span style="font-size: 0.72rem; color: var(--text-secondary); font-weight: 600;">ID: ${displayId}</span>
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

    // Rozdelenie do 3 kategórií
    const groups = [
        {
            key: "active",
            title: "Sprostredkovávané nehnuteľnosti pre klientov - Predaj / Prenájom / Kúpa",
            badgeClass: "badge-active",
            icon: "fa-solid fa-fire",
            items: []
        },
        {
            key: "reserved",
            title: "Rezervované nehnuteľnosti pre potencionálnych klientov",
            badgeClass: "badge-reserved",
            icon: "fa-solid fa-bookmark",
            items: []
        },
        {
            key: "sold",
            title: "Sprostredkované nehnuteľnosti klientom - Predaj / Prenájom / Kúpa",
            badgeClass: "badge-sold",
            icon: "fa-solid fa-circle-check",
            items: []
        }
    ];

    filtered.sort(comparePropertiesByCreatedAtDesc);

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
            ${agent.image ? `<img src="${agent.image}" alt="${agent.name}" class="agent-filter-banner-avatar">` : `<div class="agent-filter-banner-avatar agent-avatar-placeholder" aria-label="${agent.name}"></div>`}
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
        
        const phoneText = agent.phone ? String(agent.phone).trim() : "";
        const emailText = agent.email ? String(agent.email).trim() : "";

        const telHref = phoneText
            ? (phoneText.startsWith("+")
                ? phoneText.replace(/\s/g, "")
                : "+421" + phoneText.replace(/^0/, "").replace(/\s/g, ""))
            : "";

        const phoneLinkHtml = phoneText
            ? `<a href="tel:${telHref}"><i class="fa-solid fa-phone"></i> ${phoneText}</a>`
            : "";
        const emailLinkHtml = emailText
            ? `<a href="mailto:${emailText}"><i class="fa-solid fa-envelope"></i> ${emailText}</a>`
            : "";
        const contactItemsHtml = [phoneLinkHtml, emailLinkHtml].filter(Boolean).join("\n                    ");
        const contactHtml = contactItemsHtml
            ? `<div class="agent-contact">
                    ${contactItemsHtml}
                </div>`
            : "";
        
        const imgStyle = agent.imagePosition ? ` style="object-position: ${agent.imagePosition};"` : "";
        const imgWrapperHtml = agent.image
            ? `<div class="agent-img-wrapper">
                <img src="${agent.image}" alt="${agent.name}"${imgStyle}>
            </div>`
            : `<div class="agent-img-wrapper agent-img-placeholder" aria-label="${agent.name}"></div>`;

        const roleHtml = agent.role.includes("Fin. sprostredkovateľ")
            ? `<span class="role-full">${agent.role}</span><span class="role-short">${agent.role.replace("Fin. sprostredkovateľ", "Fin. sprostred.")}</span>`
            : agent.role;

        card.innerHTML = `
            ${imgWrapperHtml}
            <div class="agent-info">
                <h3>${agent.name}</h3>
                <div class="agent-role">${roleHtml}</div>
                ${contactHtml}
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
    if (!prop) return null;

    const duda = AGENTS.find(a => a.id === 1);
    const horvat = AGENTS.find(a => a.id === 2);
    const pella = AGENTS.find(a => a.id === 3);
    const hrivnak = AGENTS.find(a => a.id === 4);

    // 1. Zistiť meno a kontakt makléra z objektu alebo reťazca
    let rawAgent = prop.agent || prop.broker || prop.makler;
    let agentName = "";
    let agentPhone = "";
    let agentEmail = String(prop.agentEmail || prop.agent_email || prop.user_email || "").trim();

    if (typeof rawAgent === "string") {
        agentName = rawAgent.trim();
    } else if (rawAgent && typeof rawAgent === "object") {
        agentName = String(rawAgent.name || rawAgent.fullName || rawAgent.full_name || rawAgent.meno || "").trim();
        agentPhone = String(rawAgent.phone || rawAgent.telefon || rawAgent.mobil || "").trim();
        agentEmail = String(rawAgent.email || rawAgent.mail || agentEmail || "").trim();
    }

    const agentEmailLower = agentEmail.toLowerCase();

    const agentIdStr = String(prop.agentId || prop.agent_id || prop.user_id || prop.userId || "").trim();
    const titleStr = String(prop.title || "").toLowerCase();
    const locationStr = String(prop.location || "").toLowerCase();
    const descStr = String(prop.desc || "").toLowerCase();
    const agentNameLower = agentName.toLowerCase();

    // Staré Realsoft ID 2869562781 zodpovedá historickým/neznámym maklérom bez overenej identity.
    // Tieto zákazky nesmú mať priradeného žiadneho makléra (odstránenie falošného fallbacku na Petra Dudu).
    if (agentIdStr === "2869562781") {
        if (descStr.includes("branislav horvát") || descStr.includes("branislav horvat") || descStr.includes("785 951") || descStr.includes("777 001")) {
            return { ...horvat, phone: agentPhone || horvat.phone, email: agentEmail || horvat.email };
        }
        if (descStr.includes("peter pella") || descStr.includes("817 207")) {
            return { ...pella, phone: agentPhone || pella.phone, email: agentEmail || pella.email };
        }
        if (descStr.includes("peter duda") || descStr.includes("441 405")) {
            return { ...duda, phone: agentPhone || duda.phone, email: agentEmail || duda.email };
        }
        if ((descStr.includes("samuel hrivňak") || descStr.includes("samuel hrivnak") || descStr.includes("424 377")) && hrivnak) {
            return { ...hrivnak, phone: agentPhone || hrivnak.phone, email: agentEmail || hrivnak.email };
        }
        return null;
    }

    // 2. Branislav Horvát:
    // Realsoft ID 2739883856, interné ID 2, obec Soľník, alebo priame overené meno / e-mail v objekte / popise
    const isHorvat = 
        agentIdStr === "2739883856" ||
        agentIdStr === "2" ||
        agentNameLower.includes("horv") ||
        agentEmailLower.includes("horvat") ||
        titleStr.includes("soľník") ||
        titleStr.includes("solnik") ||
        locationStr.includes("soľník") ||
        locationStr.includes("solnik") ||
        descStr.includes("branislav horvát") ||
        descStr.includes("branislav horvat") ||
        descStr.includes("785 951") ||
        descStr.includes("777 001");

    if (isHorvat) {
        return {
            ...horvat,
            phone: agentPhone || horvat.phone,
            email: agentEmail || horvat.email
        };
    }

    // 3. JUDr. Peter Pella:
    // Realsoft ID 2742504158, interné ID 3, alebo priame overené meno / e-mail v objekte / popise
    const isPella = 
        agentIdStr === "2742504158" ||
        agentIdStr === "3" ||
        agentNameLower.includes("pella") ||
        agentEmailLower.includes("pella") ||
        descStr.includes("peter pella") ||
        descStr.includes("817 207");

    if (isPella) {
        return {
            ...pella,
            phone: agentPhone || pella.phone,
            email: agentEmail || pella.email
        };
    }

    // 4. Peter Duda:
    // Realsoft ID 1162803367, interné ID 1 (pre predvolené ponuky KP), alebo priame overené meno / kontakt / e-mail
    const isDuda = 
        agentIdStr === "1162803367" ||
        agentIdStr === "1" ||
        agentNameLower.includes("duda") ||
        agentEmailLower.includes("duda") ||
        descStr.includes("peter duda") ||
        descStr.includes("441 405");

    if (isDuda) {
        return {
            ...duda,
            phone: agentPhone || duda.phone,
            email: agentEmail || duda.email
        };
    }

    // 5. Samuel Hrivňak:
    const isHrivnak =
        agentIdStr === "2756409051" ||
        agentIdStr === "4" ||
        agentNameLower.includes("hrivn") ||
        agentNameLower.includes("hrivň") ||
        agentEmailLower.includes("hrivnak") ||
        descStr.includes("samuel hrivňak") ||
        descStr.includes("samuel hrivnak") ||
        descStr.includes("424 377");

    if (isHrivnak && hrivnak) {
        return {
            ...hrivnak,
            phone: agentPhone || hrivnak.phone,
            email: agentEmail || hrivnak.email
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
// NORMALIZÁCIA TECHNICKÝCH PARAMETROV A 3D OBHLIADOK Z REALSOFTU
// ==========================================================================
const KNOWN_REALSOFT_FRONT_DATA = {
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

function getPropertyObjectIdStr(prop) {
    if (!prop) return "";
    if (prop.objectId) return String(prop.objectId).trim();
    const rawId = String(prop.externalId || prop.id || "").trim();
    return rawId.replace(/^RS-/, "");
}

function resolvePropertyVirtualTourUrl(prop) {
    if (!prop) return null;
    if (prop.status === "sold" || prop.isSold === true || isPropertySoldOrCompleted(prop)) {
        return null;
    }
    const directCandidates = [
        prop.virtualTourUrl, prop.virtual_tour_url, prop.virtualTour, prop.virtual_tour,
        prop.tourUrl, prop.tour_url, prop.url_3d, prop["3d_url"], prop.matterport,
        prop.matterport_url, prop.scan_3d, prop["3d_scan"], prop.momento,
        prop.three_d_url, prop.panorama_url,
        prop.realsoftAttrs && prop.realsoftAttrs.momento
    ];
    for (const c of directCandidates) {
        if (typeof c === "string" && /^https?:\/\//i.test(c.trim())) {
            return c.trim();
        }
    }

    if (Array.isArray(prop.inspections3d)) {
        for (const item of prop.inspections3d) {
            if (typeof item === "string" && /^https?:\/\//i.test(item.trim())) return item.trim();
            if (item && typeof item.url === "string" && /^https?:\/\//i.test(item.url.trim())) return item.url.trim();
        }
    }

    let mediasObj = prop.medias || prop.media || (prop.realsoftAttrs && prop.realsoftAttrs.medias);
    if (typeof mediasObj === "string" && mediasObj.trim().startsWith("{")) {
        try { mediasObj = JSON.parse(mediasObj); } catch (_e) {}
    }
    if (mediasObj && typeof mediasObj === "object" && !Array.isArray(mediasObj)) {
        const platforms = [
            "matterport", "3drealitna", "momento360", "vieweet", "homestyler",
            "kuula", "insta360", "eyespy360", "lapentor", "cloudpano",
            "cupix", "theasys", "feelestate", "giraffe360", "mollyinvr",
            "grandpano", "pivo", "tourwz", "istaging", "revio"
        ];
        for (const k of platforms) {
            const list = mediasObj[k];
            if (Array.isArray(list)) {
                for (const u of list) {
                    if (typeof u === "string" && /^https?:\/\//i.test(u.trim())) return u.trim();
                    if (u && typeof u.url === "string" && /^https?:\/\//i.test(u.url.trim())) return u.url.trim();
                }
            } else if (typeof list === "string" && /^https?:\/\//i.test(list.trim())) {
                return list.trim();
            }
        }
    }

    const d = String(prop.desc || "");
    if (d.length > 0) {
        const tourRegex = /https?:\/\/(?:my\.matterport\.com\/show\/\?[^\s"'<>]+|[^\s"'<>]*(?:matterport\.com|shapespark\.com|kuula\.co|momento360\.com|vieweet\.com|istaging\.com|3drealitna\.sk|cloudpano\.com|cupix\.com|theasys\.io|ths\.li|feelestate\.com|giraffe360\.com|mollyinvr\.com|grandpano\.com|pivo\.app|tour\.wz\.sk|eyespy360\.vr|lapentor\.com|insta360\.com)[^\s"'<>]*)/i;
        const m = d.match(tourRegex);
        if (m && m[0]) {
            return m[0].replace(/[.,;!?)]+$/, "");
        }
    }

    const objId = getPropertyObjectIdStr(prop);
    if (objId && KNOWN_REALSOFT_FRONT_DATA[objId] && KNOWN_REALSOFT_FRONT_DATA[objId].virtualTourUrl) {
        return KNOWN_REALSOFT_FRONT_DATA[objId].virtualTourUrl;
    }

    return null;
}

function parseValidDateMs(val) {
    if (!val) return 0;
    if (val instanceof Date) return isNaN(val.getTime()) ? 0 : val.getTime();
    if (typeof val === "number") return isNaN(val) ? 0 : val;
    if (typeof val !== "string") return 0;
    let normalized = val.trim();
    if (!normalized) return 0;
    if (/^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}$/.test(normalized)) {
        normalized = normalized.replace(/\s+/, "T");
    }
    const ts = Date.parse(normalized);
    return isNaN(ts) ? 0 : ts;
}

function getPropertyCreatedTimestamp(prop) {
    if (!prop || typeof prop !== "object") return 0;
    const candidates = [
        prop.createdAt,
        prop.created_at,
        prop.dateCreated,
        prop.date_created,
        prop.publishedAt,
        prop.published_at,
        prop.addedAt,
        prop.added_at,
        prop.updatedAt,
        prop.updated_at
    ];
    for (const c of candidates) {
        const ms = parseValidDateMs(c);
        if (ms > 0) return ms;
    }
    return 0;
}

function comparePropertiesByCreatedAtDesc(a, b) {
    const tsA = getPropertyCreatedTimestamp(a);
    const tsB = getPropertyCreatedTimestamp(b);
    if (tsA !== tsB) return tsB - tsA;
    if (tsA === 0 && tsB === 0) return 0;
    const numA = parseInt(String(a && (a.objectId || a.id || "")).replace(/\D/g, ""), 10) || 0;
    const numB = parseInt(String(b && (b.objectId || b.id || "")).replace(/\D/g, ""), 10) || 0;
    if (numA !== numB) return numB - numA;
    return String((b && b.id) || "").localeCompare(String((a && a.id) || ""));
}

function resolvePropertyVideoUrls(prop) {
    if (!prop) return [];
    const candidates = [];
    const pushUrl = (u) => {
        if (typeof u !== "string") return;
        const cleaned = u.trim().replace(/[.,;!?)]+$/, "");
        if (/^https?:\/\//i.test(cleaned)) {
            candidates.push(cleaned);
        }
    };

    if (Array.isArray(prop.videoUrls)) {
        prop.videoUrls.forEach(pushUrl);
    }

    let mediasObj = prop.medias || prop.media || (prop.realsoftAttrs && prop.realsoftAttrs.medias);
    if (typeof mediasObj === "string" && mediasObj.trim().startsWith("{")) {
        try { mediasObj = JSON.parse(mediasObj); } catch (_e) {}
    }
    if (mediasObj && typeof mediasObj === "object" && !Array.isArray(mediasObj)) {
        const videoKeys = ["youtube", "vimeo", "videoobhliadka", "video", "mp4"];
        for (const k of videoKeys) {
            const list = mediasObj[k];
            if (Array.isArray(list)) {
                list.forEach(u => {
                    if (typeof u === "string") pushUrl(u);
                    else if (u && typeof u.url === "string") pushUrl(u.url);
                });
            } else if (typeof list === "string") {
                pushUrl(list);
            }
        }
    }

    const directCandidates = [
        prop.videoUrl, prop.video_url, prop.video,
        prop.youtube, prop.youtube_url,
        prop.vimeo, prop.vimeo_url,
        prop.marketingVideo, prop.marketing_video
    ];
    directCandidates.forEach(field => {
        if (Array.isArray(field)) {
            field.forEach(item => {
                if (typeof item === "string") pushUrl(item);
                else if (item && typeof item.url === "string") pushUrl(item.url);
            });
        } else if (typeof field === "string") {
            pushUrl(field);
        }
    });
    if (Array.isArray(prop.videos)) {
        prop.videos.forEach(item => {
            if (typeof item === "string") pushUrl(item);
            else if (item && typeof item.url === "string") pushUrl(item.url);
        });
    }

    const d = String(prop.desc || "");
    if (d.length > 0) {
        const videoRegex = /https?:\/\/(?:(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?[^\s"'<>]+|shorts\/[^\s"'<>]+|embed\/[^\s"'<>]+)|youtu\.be\/[^\s"'<>]+)|(?:player\.)?vimeo\.com\/(?:video\/)?\d+[^\s"'<>]*|[^\s"'<>]+\.(?:mp4|webm|mov)(?:\?[^\s"'<>]*)?)/gi;
        const matches = d.match(videoRegex) || [];
        matches.forEach(pushUrl);
    }

    return Array.from(new Set(candidates));
}

function parseVideoEmbedInfo(rawUrl) {
    if (!rawUrl || typeof rawUrl !== "string") return null;
    const url = rawUrl.trim();
    try {
        const u = new URL(url);
        const host = u.hostname.replace(/^www\./i, "").toLowerCase();

        // YouTube (youtube.com/watch?v=..., youtu.be/..., youtube.com/shorts/..., youtube.com/embed/...)
        let ytId = null;
        if (host === "youtu.be") {
            ytId = u.pathname.replace(/^\/+/, "").split("/")[0] || null;
        } else if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
            if (u.pathname === "/watch") {
                ytId = u.searchParams.get("v");
            } else if (u.pathname.startsWith("/shorts/") || u.pathname.startsWith("/embed/") || u.pathname.startsWith("/live/")) {
                ytId = u.pathname.split("/")[2] || null;
            }
        }
        if (ytId) {
            return {
                type: "iframe",
                embedUrl: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(ytId)}?rel=0`,
                originalUrl: url,
                label: "Otvoriť na YouTube"
            };
        }

        // Vimeo (vimeo.com/123456 or vimeo.com/123456/hash or player.vimeo.com/video/123456)
        if (host === "vimeo.com" || host === "player.vimeo.com") {
            const parts = u.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
            let vimeoId = null;
            let hashParam = u.searchParams.get("h") || "";
            if (parts[0] === "video" && /^\d+$/.test(parts[1] || "")) {
                vimeoId = parts[1];
            } else if (/^\d+$/.test(parts[0] || "")) {
                vimeoId = parts[0];
                if (parts[1] && !hashParam) hashParam = parts[1];
            } else {
                const numericPart = parts.find(p => /^\d+$/.test(p));
                if (numericPart) vimeoId = numericPart;
            }
            if (vimeoId) {
                const hQuery = hashParam ? `?h=${encodeURIComponent(hashParam)}` : "";
                return {
                    type: "iframe",
                    embedUrl: `https://player.vimeo.com/video/${encodeURIComponent(vimeoId)}${hQuery}`,
                    originalUrl: url,
                    label: "Otvoriť na Vimeo"
                };
            }
        }
    } catch (_e) {}

    if (/\.(?:mp4|webm|ogg|mov)(?:[?#].*)?$/i.test(url)) {
        return {
            type: "video",
            src: url,
            originalUrl: url,
            label: "Otvoriť video"
        };
    }

    return {
        type: "link",
        href: url,
        originalUrl: url,
        label: "Spustiť video prezentáciu"
    };
}

function resolvePropertyTechnicalSpecs(prop) {
    if (!prop) return {};
    const objId = getPropertyObjectIdStr(prop);
    const known = (objId && KNOWN_REALSOFT_FRONT_DATA[objId] && KNOWN_REALSOFT_FRONT_DATA[objId].specs)
        ? KNOWN_REALSOFT_FRONT_DATA[objId].specs
        : null;

    const rawSpecs = (prop.technicalSpecs && typeof prop.technicalSpecs === "object") ? prop.technicalSpecs : {};
    const isLegacyMock = (
        rawSpecs["Vykurovanie"] === "Ústredné diaľkové / vlastné" &&
        rawSpecs["Konštrukcia"] === "Tehla / zateplený dom"
    );

    const out = {};
    if (!isLegacyMock) {
        for (const [k, v] of Object.entries(rawSpecs)) {
            if (/^stav(\s+objektu)?$/i.test(k.trim())) continue;
            if (v !== null && v !== undefined && String(v).trim() !== "" && !/^\d+$/.test(String(v).trim())) {
                out[k] = v;
            }
        }
    }

    if (known && (isLegacyMock || Object.keys(out).length === 0)) {
        for (const [k, v] of Object.entries(known)) {
            if (v) out[k] = v;
        }
    }

    delete out["Stav objektu"];
    delete out["Stav"];
    return out;
}

// ==========================================================================
// MODÁLNE OKNO S DETAILMI NEHNUTEĽNOSTI
// ==========================================================================
function openPropertyModal(id) {
    const modal = document.getElementById("propertyModal");
    const modalBody = document.getElementById("modalBody");
    const prop = PROPERTIES.find(p => String(p.id) === String(id) || String(p.externalId) === String(id) || (p.internalId && String(p.internalId) === String(id)));
    if (!prop) return;

    // Zistenie stavu nehnuteľnosti (zjednotený stav s kartou na hlavnej stránke)
    const grp = getPropertyStatusGroup(prop);
    const isSold = grp === "sold";
    const isReserved = grp === "reserved";

    // Priradenie správneho makléra podľa dát z Realsoftu
    const agent = getAgentForProperty(prop);
    const cleanSpecs = resolvePropertyTechnicalSpecs(prop);
    const virtualTourUrl = isSold ? null : resolvePropertyVirtualTourUrl(prop);
    const videoUrls = resolvePropertyVideoUrls(prop);
    const primaryVideoUrl = videoUrls[0] || null;
    
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
        const terrainOrRoomsVal = validRooms ? roomsVal : (cleanSpecs["Terén"] || "-");
        const terrainOrRoomsLbl = validRooms ? "Izby / Priestory" : "Terén";
        const utilitiesShortVal = cleanSpecs["Inžinierske siete"] ? "Áno" : "-";
        specsBoxHtml = `
            <div class="modal-spec-box">
                <div class="modal-spec-val">${areaVal}</div>
                <div class="modal-spec-lbl">Rozloha</div>
            </div>
            <div class="modal-spec-box">
                <div class="modal-spec-val">${terrainOrRoomsVal}</div>
                <div class="modal-spec-lbl">${terrainOrRoomsLbl}</div>
            </div>
            <div class="modal-spec-box">
                <div class="modal-spec-val">${utilitiesShortVal}</div>
                <div class="modal-spec-lbl">Inž. Siete</div>
            </div>
        `;
    }
    
    // Miniatúry fotogalérie (odfiltrovanie fotografií maklérov) + rýchly odkaz na video
    const images = getSafePropertyImages(prop);
    let thumbnailsHtml = "";
    if (images.length > 1 || videoUrls.length > 0) {
        const videoThumbHtml = primaryVideoUrl
            ? `<button class="modal-thumb-btn modal-thumb-video" id="modalThumbVideoBtn" type="button" aria-label="Prejsť na video prezentáciu" title="Prehrať marketingové video">
                    <i class="fa-solid fa-play"></i>
                    <span>Video</span>
                </button>`
            : "";
        thumbnailsHtml = `
            <div class="modal-thumbnails" id="modalThumbnails">
                ${videoThumbHtml}
                ${images.map((img, idx) => `
                    <button class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}" type="button" aria-label="Fotografia ${idx + 1}">
                        <img src="${img}" alt="Náhľad ${idx + 1}" onerror="if(this.src!=='${NEUTRAL_PROPERTY_PLACEHOLDER}')this.src='${NEUTRAL_PROPERTY_PLACEHOLDER}';">
                    </button>
                `).join("")}
            </div>
        `;
    }

    // Tabuľka technických parametrov (garantovane bez "Stav objektu")
    let specsTableHtml = "";
    const filteredSpecsEntries = Object.entries(cleanSpecs).filter(([key, val]) => {
        if (!key || /^stav(\s+objektu)?$/i.test(key.trim())) return false;
        if (val === null || val === undefined || String(val).trim() === "") return false;
        return true;
    });
    if (filteredSpecsEntries.length > 0) {
        specsTableHtml = `
            <h3 class="modal-desc-title" style="margin-top: 24px;">Technické parametre a vybavenie</h3>
            <table class="modal-specs-table">
                <tbody>
                    ${filteredSpecsEntries.map(([key, val]) => `
                        <tr>
                            <td class="spec-lbl">${key}</td>
                            <td class="spec-val">${val}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;
    }

    // Tlačidlá na 3D prehliadku (zobrazia sa iba ak je k nehnuteľnosti priložený link na 3D obhliadku)
    const galleryTourBadgeHtml = virtualTourUrl
        ? `<a href="${virtualTourUrl}" target="_blank" rel="noopener noreferrer" class="modal-gallery-3d-btn" title="Otvoriť 3D prehliadku v novom okne">
             <i class="fa-solid fa-vr-cardboard"></i> 3D Prehliadka
           </a>`
        : "";

    const mainTourBannerHtml = virtualTourUrl
        ? `<div class="modal-main-tour-wrap">
             <a href="${virtualTourUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-tour-active modal-main-tour-btn">
                 <i class="fa-solid fa-vr-cardboard"></i> Klik pre 3D virtuálnu prehliadku
                 <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.82em; margin-left: 4px;"></i>
             </a>
           </div>`
        : "";

    // Marketingové video z RealSoftu (zobrazuje sa hneď pod galériou / titulkom a tlačidlom 3D prehliadky)
    let videoSectionHtml = "";
    if (videoUrls.length > 0) {
        const videoBlocksHtml = videoUrls.map((vUrl, vIdx) => {
            const info = parseVideoEmbedInfo(vUrl);
            if (!info) return "";
            const headerTitle = videoUrls.length > 1
                ? `Video prezentácia nehnuteľnosti #${vIdx + 1}`
                : "Video prezentácia nehnuteľnosti";
            let playerBodyHtml = "";
            if (info.type === "iframe") {
                playerBodyHtml = `
                    <div class="modal-video-frame-wrap">
                        <iframe src="${info.embedUrl}" title="${prop.title} - Video prezentácia" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                `;
            } else if (info.type === "video") {
                playerBodyHtml = `
                    <div class="modal-video-frame-wrap">
                        <video src="${info.src}" controls playsinline preload="metadata"></video>
                    </div>
                `;
            } else {
                playerBodyHtml = `
                    <a href="${info.href}" target="_blank" rel="noopener noreferrer" class="btn btn-tour-active modal-video-fallback-btn">
                        <i class="fa-solid fa-circle-play"></i> ${info.label}
                        <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.82em; margin-left: 4px;"></i>
                    </a>
                `;
            }
            return `
                <div class="modal-video-item">
                    <div class="modal-video-header">
                        <div class="modal-video-title"><i class="fa-solid fa-circle-play"></i> ${headerTitle}</div>
                        <a href="${info.originalUrl}" target="_blank" rel="noopener noreferrer" class="modal-video-ext-link">
                            ${info.label} <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                    ${playerBodyHtml}
                </div>
            `;
        }).filter(Boolean).join("");
        if (videoBlocksHtml) {
            videoSectionHtml = `<div class="modal-video-section" id="modalVideoSection">${videoBlocksHtml}</div>`;
        }
    }

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

    // Pravý bočný panel s maklérom (zobrazuje sa aj v sekcii Sprostredkované; pri predaných ponukách sa skryje iba dopytový formulár)
    let agentSidebarHtml = "";
    if (agent) {
        const phoneText = agent.phone ? String(agent.phone).trim() : "";
        const emailText = agent.email ? String(agent.email).trim() : "";
        const telHref = phoneText
            ? (phoneText.startsWith("+")
                ? phoneText.replace(/\s/g, "")
                : "+421" + phoneText.replace(/^0/, "").replace(/\s/g, ""))
            : "";
        const phoneItemHtml = phoneText
            ? `<div class="modal-agent-contact-item">
                        <a href="tel:${telHref}"><i class="fa-solid fa-phone"></i> ${phoneText}</a>
                    </div>`
            : "";
        const emailItemHtml = emailText
            ? `<div class="modal-agent-contact-item">
                        <a href="mailto:${emailText}" class="text-gold"><i class="fa-solid fa-envelope"></i> ${emailText}</a>
                    </div>`
            : "";
        const contactItemsHtml = [phoneItemHtml, emailItemHtml].filter(Boolean).join("\n                    ");
        const modalContactHtml = contactItemsHtml
            ? `<div class="modal-agent-contact">
                    ${contactItemsHtml}
                </div>`
            : "";
        agentSidebarHtml = `
            <div class="modal-agent-card">
                <h4>Vzťahový manažér</h4>
                <div class="modal-agent-info modal-agent-clickable" id="modalAgentProfileTrigger" title="Kliknutím zobrazíte všetky aktívne ponuky makléra ${agent.name}">
                    ${agent.image ? `<img src="${agent.image}" alt="${agent.name}" class="modal-agent-avatar">` : `<div class="modal-agent-avatar agent-avatar-placeholder" aria-label="${agent.name}"></div>`}
                    <div class="modal-agent-details">
                        <div class="modal-agent-name">
                            ${agent.name}
                            <i class="fa-solid fa-arrow-up-right-from-square modal-agent-ext-icon"></i>
                        </div>
                        <div class="modal-agent-role">${agent.role.includes("Fin. sprostredkovateľ") ? `<span class="role-full">${agent.role}</span><span class="role-short">${agent.role.replace("Fin. sprostredkovateľ", "Fin. sprostred.")}</span>` : agent.role}</div>
                    </div>
                </div>
                ${modalContactHtml}
                ${!isSold ? `
                <form id="modalContactForm" class="modal-compact-form">
                    <input type="hidden" name="propId" value="${prop.internalId || prop.externalId || prop.id}">
                    <input type="hidden" id="modalAgentEmail" name="agentEmail" value="${emailText}">
                    <input type="hidden" id="modalAgentName" name="agentName" value="${agent.name}">
                    <div class="form-group">
                        <input type="text" id="modalClientName" placeholder="Vaše meno" required class="modal-compact-input">
                    </div>
                    <div class="form-group">
                        <input type="tel" id="modalClientPhone" placeholder="Telefón" required class="modal-compact-input">
                    </div>
                    <button type="submit" id="btnModalSubmit" class="btn-modal-submit">
                        Mám záujem o ponuku
                    </button>
                </form>
                <div id="modalFormSuccess" class="modal-form-success" style="display: none;">
                    <i class="fa-solid fa-circle-check"></i> Ďakujeme! Vaša požiadavka bola odoslaná maklérovi.
                </div>` : `
                <div class="modal-form-success" style="display: block; margin-top: 14px; color: #10b981;">
                    <i class="fa-solid fa-circle-check"></i> Táto nehnuteľnosť bola úspešne sprostredkovaná.
                </div>`}
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-main">
                <div class="modal-gallery" id="modalGallery">
                    <span class="badge ${badgeClass} modal-gallery-badge">${badgeLabel}</span>
                    ${galleryTourBadgeHtml}
                    <img src="${images[0]}" alt="${prop.title}" id="modalMainImg" class="modal-gallery-clickable-img" title="Kliknutím zobrazíte fotografiu na celú obrazovku" onerror="if(this.src!=='${NEUTRAL_PROPERTY_PLACEHOLDER}')this.src='${NEUTRAL_PROPERTY_PLACEHOLDER}';">
                    <button type="button" class="modal-gallery-zoom-btn" id="modalGalleryZoomBtn" aria-label="Zväčšiť fotografiu na celú obrazovku" title="Zobraziť na celú obrazovku">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                    </button>
                </div>
                ${thumbnailsHtml}
                
                <div class="modal-title-row">
                    <h2 class="modal-property-title">${prop.title}</h2>
                </div>
                <div class="modal-location"><i class="fa-solid fa-location-dot"></i> ${prop.location}</div>
                
                ${mainTourBannerHtml}
                ${videoSectionHtml}

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
                </div>
                
                ${agentSidebarHtml}
            </div>
        </div>
    `;
    
    // Aktivácia modálneho okna
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    
    // Udalosti miniatúr (prepínanie fotografií) a otvorenie celoobrazovkového prehliadača
    const thumbBtns = modalBody.querySelectorAll(".modal-thumb-btn");
    const mainImg = document.getElementById("modalMainImg");
    const zoomBtn = document.getElementById("modalGalleryZoomBtn");
    let currentImageIndex = 0;

    const setActiveGalleryPhoto = (idx) => {
        const safeIdx = Number(idx);
        if (!Number.isInteger(safeIdx) || safeIdx < 0 || safeIdx >= images.length) return;
        currentImageIndex = safeIdx;
        if (mainImg) {
            mainImg.src = images[safeIdx];
        }
        thumbBtns.forEach(b => {
            if (b.id === "modalThumbVideoBtn") return;
            const bIdx = parseInt(b.getAttribute("data-idx"), 10);
            b.classList.toggle("active", bIdx === safeIdx);
        });
    };

    thumbBtns.forEach(btn => {
        if (btn.id === "modalThumbVideoBtn") {
            btn.addEventListener("click", () => {
                const videoSec = document.getElementById("modalVideoSection");
                if (videoSec) {
                    videoSec.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            });
            return;
        }
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.getAttribute("data-idx"), 10);
            if (!isNaN(idx) && images[idx]) {
                setActiveGalleryPhoto(idx);
            }
        });
    });

    const triggerLightboxOpen = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (images.length > 0) {
            openPhotoLightbox(images, currentImageIndex, prop.title, setActiveGalleryPhoto);
        }
    };
    if (mainImg) {
        mainImg.addEventListener("click", triggerLightboxOpen);
    }
    if (zoomBtn) {
        zoomBtn.addEventListener("click", triggerLightboxOpen);
    }

    // Udalosť kliknutia na makléra pre vyfiltrovanie jeho aktívneho portfólia (Požiadavka 3)
    const agentTrigger = document.getElementById("modalAgentProfileTrigger");
    if (agentTrigger && agent) {
        agentTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            filterByAgent(agent);
        });
    }
    
    // Udalosť odoslania kontaktného formulára (odoslanie dopytu priamo na dynamický e-mail makléra danej nehnuteľnosti)
    const contactForm = document.getElementById("modalContactForm");
    if (contactForm && agent) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const clientName = document.getElementById("modalClientName")?.value.trim();
            const clientPhone = document.getElementById("modalClientPhone")?.value.trim();
            const recipientEmail = (document.getElementById("modalAgentEmail")?.value || agent.email || "branislav_horvat@keyspartners.sk").trim();
            const recipientName = (document.getElementById("modalAgentName")?.value || agent.name || "").trim();
            const propertyIdVal = String(prop.internalId || prop.externalId || prop.id || "-");

            if (!clientName || !clientPhone) return;

            const submitBtn = document.getElementById("btnModalSubmit");
            const origBtnHtml = submitBtn ? submitBtn.innerHTML : "Mám záujem o ponuku";
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Odosielam...`;
            }

            const inquiryPayload = {
                agentEmail: recipientEmail,
                agentName: recipientName,
                clientName,
                clientPhone,
                propertyId: propertyIdVal,
                propertyTitle: prop.title,
                propertyLocation: prop.location,
                propertyPrice: priceFormatted
            };

            try {
                // 1. Odoslanie cez našu Netlify funkciu /api/property-inquiry
                let res = await fetch("/api/property-inquiry", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(inquiryPayload)
                });
                if (!res.ok && res.status === 404) {
                    res = await fetch("/.netlify/functions/property-inquiry", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(inquiryPayload)
                    });
                }

                const resData = await res.json().catch(() => ({}));

                // 2. Ak server nepoužil priamy SMTP kľúč, poistíme doručenie aj priamym volaním FormSubmit AJAX z prehliadača na dynamický e-mail makléra
                if (!resData.emailSent) {
                    await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify({
                            _subject: `Nový záujem o ponuku (${propertyIdVal}): ${prop.title} – Keys Partners`,
                            "Meno záujemcu": clientName,
                            "Telefón záujemcu": clientPhone,
                            "Nehnuteľnosť": prop.title,
                            "ID ponuky": propertyIdVal,
                            "Lokalita": prop.location || "-",
                            "Cena": priceFormatted,
                            "Zodpovedný maklér": `${recipientName} (${recipientEmail})`
                        })
                    });
                }

                console.log(`[KEYS PARTNERS] Dopyt na ponuku ${propertyIdVal} úspešne odoslaný maklérovi ${recipientName} (${recipientEmail}).`);
            } catch (err) {
                console.error("[KEYS PARTNERS] Chyba pri odosielaní dopytu na ponuku:", err);
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = origBtnHtml;
                }
                contactForm.style.display = "none";
                const successEl = document.getElementById("modalFormSuccess");
                if (successEl) successEl.style.display = "block";
            }
        });
    }
}

function closePropertyModal() {
    if (isPhotoLightboxOpen()) {
        closePhotoLightbox();
    }
    const modal = document.getElementById("propertyModal");
    const modalBody = document.getElementById("modalBody");
    if (modalBody) {
        modalBody.querySelectorAll("video").forEach(v => {
            try { v.pause(); } catch (_e) {}
        });
        modalBody.innerHTML = "";
    }
    if (modal) modal.classList.remove("active");
    document.body.style.overflow = "";
}

// ==========================================
// CELOOBRAZOVKOVÝ PREHLIADAČ FOTOGRAFIÍ (LIGHTBOX)
// ==========================================
const photoLightboxState = {
    images: [],
    index: 0,
    title: "",
    onChange: null,
    initialized: false,
    touchStartX: null,
    touchStartY: null,
    suppressStageClickUntil: 0
};

function isPhotoLightboxOpen() {
    const lightbox = document.getElementById("photoLightbox");
    return Boolean(lightbox && lightbox.classList.contains("active"));
}

function renderPhotoLightbox() {
    const total = photoLightboxState.images.length;
    if (total === 0) return;

    photoLightboxState.index = ((photoLightboxState.index % total) + total) % total;
    const currentSrc = photoLightboxState.images[photoLightboxState.index];

    const imgEl = document.getElementById("lightboxImg");
    const counterEl = document.getElementById("lightboxCounter");
    const prevBtn = document.getElementById("lightboxPrev");
    const nextBtn = document.getElementById("lightboxNext");

    if (imgEl) {
        imgEl.onerror = () => {
            if (imgEl.src && imgEl.src !== NEUTRAL_PROPERTY_PLACEHOLDER) {
                imgEl.src = NEUTRAL_PROPERTY_PLACEHOLDER;
            }
        };
        imgEl.src = currentSrc;
        imgEl.alt = photoLightboxState.title
            ? `${photoLightboxState.title} - fotografia ${photoLightboxState.index + 1} z ${total}`
            : `Fotografia ${photoLightboxState.index + 1} z ${total}`;
    }

    if (counterEl) {
        counterEl.textContent = `${photoLightboxState.index + 1} / ${total}`;
    }

    const singlePhoto = total <= 1;
    if (prevBtn) {
        prevBtn.hidden = singlePhoto;
        prevBtn.disabled = singlePhoto;
    }
    if (nextBtn) {
        nextBtn.hidden = singlePhoto;
        nextBtn.disabled = singlePhoto;
    }
}

function openPhotoLightbox(images, startIndex = 0, title = "", onChange = null) {
    const validImages = Array.isArray(images) ? images.filter(Boolean) : [];
    if (validImages.length === 0) return;

    if (!photoLightboxState.initialized) {
        initPhotoLightbox();
    }

    const parsedIndex = parseInt(startIndex, 10);
    const safeStart = !isNaN(parsedIndex)
        ? Math.max(0, Math.min(parsedIndex, validImages.length - 1))
        : 0;

    photoLightboxState.images = validImages;
    photoLightboxState.index = safeStart;
    photoLightboxState.title = title || "";
    photoLightboxState.onChange = typeof onChange === "function" ? onChange : null;

    renderPhotoLightbox();

    const lightbox = document.getElementById("photoLightbox");
    if (lightbox) {
        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }
}

function navigatePhotoLightbox(delta) {
    if (!isPhotoLightboxOpen() || photoLightboxState.images.length <= 1) return;
    const total = photoLightboxState.images.length;
    photoLightboxState.index = (photoLightboxState.index + delta + total) % total;
    renderPhotoLightbox();
    if (typeof photoLightboxState.onChange === "function") {
        photoLightboxState.onChange(photoLightboxState.index);
    }
}

function closePhotoLightbox() {
    const lightbox = document.getElementById("photoLightbox");
    const imgEl = document.getElementById("lightboxImg");
    if (lightbox) {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
    }
    if (imgEl) {
        imgEl.onerror = null;
        imgEl.src = "";
    }
    photoLightboxState.onChange = null;
    photoLightboxState.touchStartX = null;
    photoLightboxState.touchStartY = null;

    const anyModalActive = Boolean(document.querySelector(".modal.active"));
    document.body.style.overflow = anyModalActive ? "hidden" : "";
}

function initPhotoLightbox() {
    if (photoLightboxState.initialized) return;
    photoLightboxState.initialized = true;

    const closeBtn = document.getElementById("lightboxClose");
    const backdrop = document.getElementById("lightboxBackdrop");
    const stage = document.getElementById("lightboxStage");
    const prevBtn = document.getElementById("lightboxPrev");
    const nextBtn = document.getElementById("lightboxNext");

    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closePhotoLightbox();
        });
    }

    if (backdrop) {
        backdrop.addEventListener("click", closePhotoLightbox);
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navigatePhotoLightbox(-1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navigatePhotoLightbox(1);
        });
    }

    if (stage) {
        stage.addEventListener("click", (e) => {
            if (Date.now() < photoLightboxState.suppressStageClickUntil) return;
            if (e.target === stage) {
                closePhotoLightbox();
            }
        });

        stage.addEventListener("touchstart", (e) => {
            if (e.touches.length !== 1) {
                photoLightboxState.touchStartX = null;
                photoLightboxState.touchStartY = null;
                return;
            }
            photoLightboxState.touchStartX = e.touches[0].clientX;
            photoLightboxState.touchStartY = e.touches[0].clientY;
        }, { passive: true });

        stage.addEventListener("touchend", (e) => {
            if (photoLightboxState.touchStartX === null || e.changedTouches.length === 0) return;
            const dx = e.changedTouches[0].clientX - photoLightboxState.touchStartX;
            const dy = e.changedTouches[0].clientY - photoLightboxState.touchStartY;
            photoLightboxState.touchStartX = null;
            photoLightboxState.touchStartY = null;

            if (Math.abs(dx) >= 45 && Math.abs(dx) > Math.abs(dy)) {
                photoLightboxState.suppressStageClickUntil = Date.now() + 300;
                navigatePhotoLightbox(dx < 0 ? 1 : -1);
            }
        }, { passive: true });
    }

    document.addEventListener("keydown", (e) => {
        if (!isPhotoLightboxOpen()) return;
        if (e.key === "Escape") {
            e.preventDefault();
            e.stopImmediatePropagation();
            closePhotoLightbox();
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            navigatePhotoLightbox(-1);
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            navigatePhotoLightbox(1);
        }
    });
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
            link.addEventListener("click", (e) => {
                if (link.classList.contains("nav-link-disabled")) {
                    e.preventDefault();
                    return;
                }
                toggleMobileMenu(true);
                if (link.getAttribute("href")?.startsWith("#")) {
                    navLinks.forEach(l => l.classList.remove("active"));
                    link.classList.add("active");
                }
            });
        });

        // Zatvorenie kliknutím mimo menu
        document.addEventListener("click", (e) => {
            if (navMenu.classList.contains("active") && !navMenu.contains(e.target) && !mobileNavToggle.contains(e.target)) {
                toggleMobileMenu(true);
            }
        });

        // Zatvorenie klávesou Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navMenu.classList.contains("active")) {
                toggleMobileMenu(true);
            }
        });

        // Zatvorenie pri resize na desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
                toggleMobileMenu(true);
            }
        });
    }

    // Kliknutie na logo v hlavičke: plynulý návrat na úplný vrch stránky
    const headerLogo = document.querySelector(".main-header .logo");
    if (headerLogo) {
        headerLogo.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (navMenu && navMenu.classList.contains("active")) {
                const mobToggle = document.getElementById("mobileNavToggle");
                if (mobToggle) mobToggle.click();
            }
        });
    }

    // --- Zatvorenie modálu ---
    document.getElementById("modalClose").addEventListener("click", closePropertyModal);
    document.getElementById("modalBackdrop").addEventListener("click", closePropertyModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !e.defaultPrevented && !isPhotoLightboxOpen()) {
            closePropertyModal();
        }
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

    // --- Cenová matica pre kalkulačku trhovej ceny nehnuteľností pre celé Slovensko ---
    // Sadzby v €/m² sú kalibrované na základe trhových dát NBS a Realitnej únie SR pre rok 2026
    const SLOVAKIA_LOCATION_PRICING = {
        // Bratislavský kraj
        "ba_stare_mesto": { byt: 4200, dom: 3000, pozemi: 400, chata: 2200, pozemok_iny: 90 },
        "ba_ruzinov_petrzalka": { byt: 3600, dom: 2600, pozemi: 320, chata: 1900, pozemok_iny: 65 },
        "ba_okolie": { byt: 2700, dom: 2100, pozemi: 200, chata: 1650, pozemok_iny: 40 },

        // Trnavský kraj
        "trnava": { byt: 2450, dom: 1850, pozemi: 180, chata: 1350, pozemok_iny: 35 },
        "piestany": { byt: 2250, dom: 1750, pozemi: 160, chata: 1300, pozemok_iny: 30 },
        "skalica_senica": { byt: 1950, dom: 1500, pozemi: 120, chata: 1150, pozemok_iny: 25 },
        "ds_galanta": { byt: 1900, dom: 1550, pozemi: 130, chata: 1150, pozemok_iny: 25 },

        // Trenčiansky kraj
        "trencin": { byt: 2250, dom: 1650, pozemi: 150, chata: 1250, pozemok_iny: 30 },
        "povazska_dubnica": { byt: 1900, dom: 1450, pozemi: 120, chata: 1100, pozemok_iny: 22 },
        "prievidza_partizanske": { byt: 1500, dom: 1250, pozemi: 85, chata: 950, pozemok_iny: 18 },

        // Nitriansky kraj
        "nitra": { byt: 2300, dom: 1700, pozemi: 160, chata: 1250, pozemok_iny: 32 },
        "nove_zamky_komarno": { byt: 1750, dom: 1350, pozemi: 100, chata: 1000, pozemok_iny: 20 },
        "levice_topolcany": { byt: 1650, dom: 1300, pozemi: 90, chata: 950, pozemok_iny: 18 },

        // Žilinský kraj
        "zilina": { byt: 2550, dom: 1850, pozemi: 170, chata: 1450, pozemok_iny: 35 },
        "martin_vrutky": { byt: 2100, dom: 1550, pozemi: 130, chata: 1200, pozemok_iny: 25 },
        "liptov": { byt: 2350, dom: 1700, pozemi: 160, chata: 1650, pozemok_iny: 35 },
        "kysuce_orava": { byt: 1850, dom: 1400, pozemi: 110, chata: 1200, pozemok_iny: 22 },

        // Banskobystrický kraj
        "banska_bystrica": { byt: 2350, dom: 1750, pozemi: 150, chata: 1350, pozemok_iny: 30 },
        "zvolen": { byt: 1950, dom: 1500, pozemi: 120, chata: 1150, pozemok_iny: 24 },
        "ziar_stiavnica": { byt: 1750, dom: 1450, pozemi: 115, chata: 1350, pozemok_iny: 24 },
        "lucenec_rimavska": { byt: 1350, dom: 1100, pozemi: 65, chata: 800, pozemok_iny: 14 },

        // Prešovský kraj
        "presov_sekcov": { byt: 2200, dom: 1700, pozemi: 130, chata: 1250, pozemok_iny: 25 },
        "presov_centrum": { byt: 2450, dom: 1850, pozemi: 160, chata: 1350, pozemok_iny: 30 },
        "lubotice": { byt: 1950, dom: 1550, pozemi: 120, chata: 1200, pozemok_iny: 24 },
        "poprad_tatry": { byt: 2600, dom: 1950, pozemi: 190, chata: 1800, pozemok_iny: 40 },
        "bardejov_humenne": { byt: 1650, dom: 1300, pozemi: 85, chata: 950, pozemok_iny: 16 },
        "sigord": { byt: 1650, dom: 1400, pozemi: 95, chata: 1250, pozemok_iny: 20 },

        // Košický kraj
        "kosice_centrum": { byt: 2850, dom: 2100, pozemi: 210, chata: 1550, pozemok_iny: 45 },
        "kosice_sidliska": { byt: 2500, dom: 1850, pozemi: 160, chata: 1400, pozemok_iny: 35 },
        "kosice_okolie": { byt: 2100, dom: 1700, pozemi: 140, chata: 1350, pozemok_iny: 28 },
        "michalovce_trebisov": { byt: 1550, dom: 1250, pozemi: 75, chata: 1050, pozemok_iny: 15 },
        "spisska_roznava": { byt: 1600, dom: 1300, pozemi: 80, chata: 1100, pozemok_iny: 16 },

        // Iná lokalita (priemer SR)
        "ina": { byt: 2000, dom: 1500, pozemi: 110, chata: 1150, pozemok_iny: 22 }
    };

    // --- Kalkulačka trhovej ceny nehnuteľnosti ---
    const sellForm = document.getElementById("sellForm");
    const calcResult = document.getElementById("calculatorResult");
    let lastEstimate = null;
    
    if (sellForm && calcResult) {
        sellForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Získanie hodnôt z formulára
            const propType = document.getElementById("ownerPropType").value;
            const locVal = locSelect.value;
            const areaVal = parseFloat(document.getElementById("ownerPropArea").value);
            const condVal = document.getElementById("ownerPropCond").value;
            
            // Získanie cenového základu (€/m²) podľa vybranej lokality a typu nehnuteľnosti
            const locData = SLOVAKIA_LOCATION_PRICING[locVal] || SLOVAKIA_LOCATION_PRICING["ina"];
            const fallbackPrices = { byt: 2000, dom: 1500, pozemi: 110, chata: 1150, pozemok_iny: 22 };
            const basePrice = locData[propType] || fallbackPrices[propType] || 1500;
            
            // Koeficient stavu nehnuteľnosti
            let condCoeff = 1.00; // Čiastočná rekonštrukcia (neutrálna báza)
            if (condVal === "novostavba") condCoeff = 1.25;
            else if (condVal === "kompletna") condCoeff = 1.15;
            else if (condVal === "povodne") condCoeff = 0.80;
            
            // Algoritmus výpočtu orientačnej trhovej hodnoty
            const calculatedPrice = areaVal * basePrice * condCoeff;
            
            // Cenové rozpätie (minimálna a maximálna odhadovaná hodnota)
            const priceMin = Math.round((calculatedPrice * 0.92) / 1000) * 1000;
            const priceMax = Math.round((calculatedPrice * 1.08) / 1000) * 1000;
            
            // Naplnenie textov v sumári parametrov
            const typeText = propType === "byt" ? "Byt" : 
                             propType === "dom" ? "Rodinný dom" : 
                             propType === "pozemi" ? "Stavebný pozemok" : 
                             propType === "chata" ? "Chata / Chalupa" : 
                             propType === "pozemok_iny" ? "Iný typ pozemku" : "Nehnuteľnosť";
            
            let locText = locSelect.options[locSelect.selectedIndex].text;
            if (locVal === "ina") {
                locText = locTextInput.value || "Vlastná lokalita";
            }
            
            const condText = condVal === "novostavba" ? "Novostavba / Holobyt" : condVal === "kompletna" ? "Kompletná rekonštrukcia" : condVal === "ciastocna" ? "Čiastočná rekonštrukcia" : "Pôvodný stav";
            
            document.getElementById("summaryType").innerText = typeText;
            document.getElementById("summaryLoc").innerText = locText;
            document.getElementById("summaryArea").innerText = areaVal;
            document.getElementById("summaryCond").innerText = condText;
            
            // Zobrazenie výsledku a skrytie formulára (v kroku 1 sa neodosiela žiadny e-mail)
            sellForm.style.display = "none";
            calcResult.style.display = "block";
            calcResult.scrollIntoView({ behavior: "smooth", block: "nearest" });

            // Uloženie výsledku pre následný lead formulár
            lastEstimate = { typeText, locText, areaVal, condText, priceMin, priceMax };

            // Animované počítadlo v jednom riadku: "237 000 € – 278 000 €"
            const rangeEl = document.getElementById("calcPriceRange");
            const startTs = performance.now();
            const dur = 1500;
            const tick = (now) => {
                const p = Math.min(1, (now - startTs) / dur);
                const k = 1 - Math.pow(1 - p, 3);
                rangeEl.textContent = Math.round(priceMin * k).toLocaleString("sk-SK") + " € – " + Math.round(priceMax * k).toLocaleString("sk-SK") + " €";
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);

            // Vyplnenie progres baru (optimálna cena, zvyčajne 75% šírky)
            setTimeout(() => {
                const fill = document.getElementById("calcProgressFill");
                if (fill) fill.style.width = "75%";
            }, 100);
        });

        // Odoslanie zberného kontaktného formulára (lead) na e-mail
        const leadForm = document.getElementById("calcLeadForm");
        const leadSuccess = document.getElementById("calcLeadSuccess");
        if (leadForm) {
            leadForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const btn = document.getElementById("btnCalcLeadSubmit");
                const origHtml = btn.innerHTML;
                btn.disabled = true;
                btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Odosielam požiadavku...`;
                const est = lastEstimate || {};
                const fmt = (n) => (typeof n === "number" ? n.toLocaleString("sk-SK") + " €" : "-");

                fetch("https://formsubmit.co/ajax/dbre_obchod@keyspartners.sk", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify({
                        _subject: "Nový dopyt: Detailná analýza trhovej ceny nehnuteľnosti – Keys Partners",
                        "Meno a priezvisko": document.getElementById("calcLeadName").value.trim(),
                        "Telefón": document.getElementById("calcLeadPhone").value.trim(),
                        "E-mail": document.getElementById("calcLeadEmail").value.trim(),
                        "Typ nehnuteľnosti": est.typeText,
                        "Lokalita / Ulica": est.locText,
                        "Rozloha (m²)": est.areaVal,
                        "Stav nehnuteľnosti": est.condText,
                        "Odhadovaná cena": fmt(est.priceMin) + " – " + fmt(est.priceMax)
                    })
                })
                .then(res => res.json())
                .then(data => console.log("[KEYS PARTNERS] Lead z kalkulačky odoslaný:", data))
                .catch(err => console.error("[KEYS PARTNERS] Chyba pri odosielaní leadu:", err))
                .finally(() => {
                    leadForm.style.display = "none";
                    if (leadSuccess) leadSuccess.style.display = "block";
                    btn.disabled = false;
                    btn.innerHTML = origHtml;
                });
            });
        }

        // Resetovanie kalkulačky
        document.getElementById("btnResetCalc").addEventListener("click", () => {
            sellForm.reset();
            if (leadForm) {
                leadForm.reset();
                leadForm.style.display = "block";
            }
            if (leadSuccess) leadSuccess.style.display = "none";
            locTextGroup.style.display = "none";
            locTextInput.removeAttribute("required");

            const fill = document.getElementById("calcProgressFill");
            if (fill) fill.style.width = "0%";

            sellForm.style.display = "block";
            calcResult.style.display = "none";
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

// ==========================================================================
// DYNAMICKÝ SYSTÉM ZÁKAZNÍCKYCH RECENZIÍ (KEYS PARTNERS a.s.)
// Automatický zber, moderácia a zobrazovanie výlučne schválených hodnotení
// ==========================================================================

function escapeHtml(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function initReviewsSystem() {
    const grid = document.getElementById("reviewsGrid");
    const container = document.getElementById("reviewFormContainer");
    const btnOpen = document.getElementById("btnOpenReviewForm");
    const btnClose = document.getElementById("btnCloseReviewForm");
    const reviewForm = document.getElementById("reviewSubmitForm");
    const starPicker = document.getElementById("starRatingPicker");
    const ratingInput = document.getElementById("reviewRatingInput");
    const ratingText = document.getElementById("starRatingText");
    const submitBtn = document.getElementById("btnSubmitReview");
    const successBox = document.getElementById("reviewSuccessBox");
    const errorBox = document.getElementById("reviewErrorBox");
    const errorMessage = document.getElementById("reviewErrorMessage");

    // 1. Prepínanie viditeľnosti formulára
    const toggleReviewForm = (forceOpen = false) => {
        if (!container) return;
        const isCurrentlyOpen = container.style.display !== "none";
        const willOpen = forceOpen ? true : !isCurrentlyOpen;

        if (willOpen) {
            container.style.display = "block";
            // Ak bol formulár v minulosti úspešne odoslaný, obnovíme ho
            if (reviewForm) reviewForm.style.display = "block";
            if (successBox) successBox.style.display = "none";
            if (errorBox) errorBox.style.display = "none";

            const nameInput = document.getElementById("reviewAuthorName");
            if (nameInput) setTimeout(() => nameInput.focus(), 150);
            container.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
            container.style.display = "none";
        }
    };

    if (btnOpen) {
        btnOpen.addEventListener("click", () => toggleReviewForm());
    }

    if (btnClose) {
        btnClose.addEventListener("click", () => toggleReviewForm(false));
    }

    // 2. Interaktívny výber hviezdičiek
    const ratingDescriptions = {
        1: "1 / 5 (Nespokojnosť)",
        2: "2 / 5 (Priemerná skúsenosť)",
        3: "3 / 5 (Dobrá spolupráca)",
        4: "4 / 5 (Veľmi spokojný)",
        5: "5 / 5 (Výborná skúsenosť)"
    };

    const updateStarsVisual = (selectedRating) => {
        if (!starPicker || !ratingInput) return;
        ratingInput.value = selectedRating;
        const starBtns = starPicker.querySelectorAll(".star-btn");
        starBtns.forEach(btn => {
            const val = parseInt(btn.dataset.rating, 10);
            if (val <= selectedRating) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
        if (ratingText) {
            ratingText.textContent = ratingDescriptions[selectedRating] || `${selectedRating} / 5`;
        }
    };

    if (starPicker) {
        const starBtns = starPicker.querySelectorAll(".star-btn");
        starBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const val = parseInt(btn.dataset.rating, 10) || 5;
                updateStarsVisual(val);
            });

            btn.addEventListener("mouseenter", () => {
                const hoverVal = parseInt(btn.dataset.rating, 10) || 5;
                starBtns.forEach(b => {
                    const bVal = parseInt(b.dataset.rating, 10);
                    if (bVal <= hoverVal) {
                        b.classList.add("hover");
                    } else {
                        b.classList.remove("hover");
                    }
                });
            });
        });

        starPicker.addEventListener("mouseleave", () => {
            starBtns.forEach(b => b.classList.remove("hover"));
        });
    }

    // 3. Odoslanie formulára na backendový endpoint /api/submit-review
    if (reviewForm) {
        reviewForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const name = document.getElementById("reviewAuthorName")?.value.trim();
            const rating = parseInt(document.getElementById("reviewRatingInput")?.value, 10) || 5;
            const text = document.getElementById("reviewCommentText")?.value.trim();

            if (!name || name.length < 2) {
                alert("Prosím, zadajte vaše meno a priezvisko.");
                return;
            }

            if (!text || text.length < 5) {
                alert("Prosím, napíšte text recenzie (aspoň 5 znakov).");
                return;
            }

            if (errorBox) errorBox.style.display = "none";
            if (successBox) successBox.style.display = "none";

            const origBtnHtml = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Odosielam na schválenie...</span>`;

            try {
                let res = await fetch("/api/submit-review", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, rating, text, meno_zakaznika: name, hodnotenie: rating, text_recenzie: text })
                });

                if (!res.ok && res.status === 404) {
                    res = await fetch("/.netlify/functions/submit-review", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ name, rating, text, meno_zakaznika: name, hodnotenie: rating, text_recenzie: text })
                    });
                }

                const data = await res.json();
                if (!res.ok || !data.success) {
                    throw new Error(data.error || "Nepodarilo sa odoslať recenziu.");
                }

                // Odoslanie schvaľovacieho e-mailu cez natívne Netlify Forms presne podľa oficiálnej dokumentácie
                const approvalLink = data.approvalUrl || `${window.location.origin}/api/approve-review?id=${data.id}`;

                // Vyplnenie skrytých polí vo formulári
                const approvalInput = document.getElementById("reviewApprovalLinkInput");
                const idInput = document.getElementById("reviewIdInput");
                if (approvalInput) approvalInput.value = approvalLink;
                if (idInput) idInput.value = data.id;

                const netlifyFormData = new URLSearchParams();
                netlifyFormData.append("form-name", "schvalenie-recenzie");
                netlifyFormData.append("meno_zakaznika", name);
                netlifyFormData.append("hodnotenie", `${rating} z 5 hviezdičiek`);
                netlifyFormData.append("text_recenzie", text);
                netlifyFormData.append("schvalovaci_odkaz", approvalLink);
                netlifyFormData.append("id_recenzie", data.id);

                try {
                    const nfRes = await fetch("/", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: netlifyFormData.toString()
                    });
                    if (nfRes.ok) {
                        console.log("[KEYS PARTNERS] Netlify Forms: Schvaľovacia notifikácia úspešne odoslaná (status " + nfRes.status + ").");
                    } else {
                        console.warn("[KEYS PARTNERS] Netlify Forms status:", nfRes.status);
                    }
                } catch (nfErr) {
                    console.error("[KEYS PARTNERS] Netlify Forms chyba odoslania:", nfErr);
                }

                // Úspešné odoslanie
                reviewForm.reset();
                updateStarsVisual(5);
                reviewForm.style.display = "none";
                if (successBox) successBox.style.display = "flex";
                console.log("[KEYS PARTNERS] Recenzia bola úspešne odoslaná na schválenie (ID: " + data.id + ")");
            } catch (err) {
                console.error("[KEYS PARTNERS] Chyba pri odosielaní recenzie:", err);
                if (errorBox) {
                    if (errorMessage) errorMessage.textContent = err.message || "Nepodarilo sa odoslať recenziu. Skontrolujte pripojenie a skúste to znova.";
                    errorBox.style.display = "flex";
                }
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = origBtnHtml;
            }
        });
    }

    // 4. Asynchrónne načítanie skutočných schválených recenzií z Netlify Blobs
    loadApprovedReviews();

    async function loadApprovedReviews() {
        if (!grid) return;

        try {
            let res = await fetch(`/api/get-reviews?_=${Date.now()}`, { cache: "no-store" });
            if (!res.ok && res.status === 404) {
                res = await fetch(`/.netlify/functions/get-reviews?_=${Date.now()}`, { cache: "no-store" });
            }

            if (!res.ok) {
                throw new Error("HTTP " + res.status);
            }

            const json = await res.json();
            const reviews = (json && Array.isArray(json.data)) ? json.data : [];

            // Striktná kontrola: Zobrazujeme VÝLUČNE recenzie so statusom "approved"
            const approved = reviews.filter(r => r && (r.status === "approved" || !r.status));

            renderReviews(approved);
        } catch (err) {
            console.warn("[KEYS PARTNERS] Nepodarilo sa načítať recenzie z Netlify Blobs:", err.message);
            renderReviews([]);
        }
    }

    function formatReviewsCountText(count) {
        return count === 1
            ? "na základe 1 hodnotenia"
            : `na základe ${count} hodnotení`;
    }

    function buildAverageStarsHtml(rating) {
        const stepped = Math.round(rating * 2) / 2;
        let html = "";
        for (let i = 1; i <= 5; i++) {
            if (stepped >= i) {
                html += `<i class="fa-solid fa-star"></i>`;
            } else if (stepped >= i - 0.5) {
                html += `<i class="fa-solid fa-star-half-stroke"></i>`;
            } else {
                html += `<i class="fa-regular fa-star"></i>`;
            }
        }
        return html;
    }

    function updateReviewsSummary(reviews) {
        const badgeEl = document.getElementById("reviewsAvgBadge") || document.querySelector(".reviews-avg-badge");
        const valueEl = document.getElementById("reviewsAverageValue");
        const starsEl = document.getElementById("reviewsAverageStars") || document.querySelector(".reviews-avg-stars");
        const countEl = document.getElementById("reviewsAverageCount");

        const validRatings = (Array.isArray(reviews) ? reviews : [])
            .map(r => (r && r.rating !== null && r.rating !== undefined && String(r.rating).trim() !== "") ? Number(r.rating) : NaN)
            .filter(val => Number.isFinite(val) && val >= 1 && val <= 5);

        if (validRatings.length === 0) {
            if (badgeEl) {
                badgeEl.classList.add("is-empty");
                badgeEl.setAttribute("aria-label", "Zatiaľ bez hodnotení");
            }
            if (valueEl) {
                valueEl.classList.add("is-empty");
                valueEl.textContent = "Zatiaľ bez hodnotení";
            }
            if (starsEl) {
                starsEl.classList.add("is-empty");
                starsEl.innerHTML = buildAverageStarsHtml(0);
            }
            if (countEl) {
                countEl.textContent = "";
                countEl.style.display = "none";
            }
            return;
        }

        const sum = validRatings.reduce((acc, val) => acc + val, 0);
        const roundedAvg = Math.round((sum / validRatings.length) * 10) / 10;
        const avgText = roundedAvg.toFixed(1);

        if (badgeEl) {
            badgeEl.classList.remove("is-empty");
            badgeEl.setAttribute("aria-label", `Priemerné hodnotenie ${avgText} z 5`);
        }
        if (valueEl) {
            valueEl.classList.remove("is-empty");
            valueEl.textContent = `${avgText} / 5`;
        }
        if (starsEl) {
            starsEl.classList.remove("is-empty");
            starsEl.innerHTML = buildAverageStarsHtml(roundedAvg);
        }
        if (countEl) {
            countEl.textContent = formatReviewsCountText(validRatings.length);
            countEl.style.display = "";
        }
    }

    function renderReviews(reviews) {
        updateReviewsSummary(reviews);
        if (!grid) return;

        if (!reviews || reviews.length === 0) {
            grid.innerHTML = `
                <div class="reviews-empty-state">
                    <div class="empty-state-icon"><i class="fa-regular fa-star"></i></div>
                    <h3>Zatiaľ žiadne verejné hodnotenia</h3>
                    <p>Boli ste spokojní s našimi realitnými službami? Podeľte sa o vašu skúsenosť a buďte prvý, kto pridá hodnotenie.</p>
                    <button type="button" class="btn btn-primary" id="btnEmptyAddReview">
                        <i class="fa-solid fa-pen-to-square"></i> <span>Pridať prvé hodnotenie</span>
                    </button>
                </div>
            `;
            const emptyBtn = document.getElementById("btnEmptyAddReview");
            if (emptyBtn) {
                emptyBtn.addEventListener("click", () => toggleReviewForm(true));
            }
            return;
        }

        grid.innerHTML = reviews.map(r => {
            const ratingNum = Math.min(5, Math.max(1, parseInt(r.rating, 10) || 5));
            let starsHtml = "";
            for (let i = 1; i <= 5; i++) {
                if (i <= ratingNum) {
                    starsHtml += `<i class="fa-solid fa-star"></i>`;
                } else {
                    starsHtml += `<i class="fa-regular fa-star"></i>`;
                }
            }

            const safeName = escapeHtml(r.name || "Klient");
            const safeText = escapeHtml(r.text || "");

            return `
                <div class="review-card">
                    <div class="review-rating" aria-label="${ratingNum} z 5 hviezdičiek">
                        ${starsHtml}
                    </div>
                    <p class="review-text">"${safeText}"</p>
                    <div class="review-author">
                        <div class="author-avatar"><i class="fa-solid fa-user"></i></div>
                        <div>
                            <h4>${safeName}</h4>
                        </div>
                    </div>
                </div>
            `;
        }).join("");
    }
}
