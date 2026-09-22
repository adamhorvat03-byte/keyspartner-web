/**
 * ==============================================================================
 * Property Repository: Dátová vrstva pre nehnuteľnosti (KEYS PARTNERS a.s.)
 * Poskytuje čítanie a filtrovanie ponúk uložených z Realsoftu (Prisma / In-memory)
 * ==============================================================================
 */

import { Property, TransactionType, PropertyType, PropertyStatus } from '../types/property';

export interface PropertyFilters {
  deal?: string;         // 'predaj' | 'prenajom' | 'sale' | 'rent' | 'vsetko'
  category?: string;     // 'byt' | 'dom' | 'pozemok' | 'komercne' | 'vsetky'
  location?: string;     // vyhľadávanie v meste / okrese / ulici
  status?: string;       // 'active' | 'reserved' | 'sold' | 'all'
  minPrice?: number;
  maxPrice?: number;
}

export interface DetailedProperty extends Property {
  rooms?: number | null;
  floor?: string | null;
  technicalSpecs?: {
    utilities?: string;          // Inžinierske siete
    heating?: string;            // Vykurovanie
    construction?: string;       // Konštrukcia (tehla, panel, skelet)
    condition?: string;          // Stav objektu (novostavba, rekonštrukcia)
    balcony?: string;            // Balkón / Terasa / Loggia
    parking?: string;            // Parkovanie / Garáž
    energyCertificate?: string;  // Energetický certifikát
    orientation?: string;        // Orientácia
  };
}

/**
 * Počiatočná databáza nehnuteľností synchronizovaných z Realsoftu (United Classifieds)
 */
export const INITIAL_PROPERTIES: DetailedProperty[] = [
  {
    id: 'prop-101',
    externalId: 'KP-101',
    title: 'Exkluzívna ponuka: 21 stavebných pozemkov v obci Ľubotice',
    description:
      'Divízia sprostredkovania nehnuteľností spoločnosti Keys Partners, a.s. v zastúpení nášho Klienta Vám v portfóliu ponúka na PREDAJ 21 stavebných pozemkov v novovybudovanej obytnej zóne v obci Ľubotice. Pozemky sú rovinaté, pripravené na individuálnu výstavbu rodinných domov. Súčasťou projektu sú všetky inžinierske siete dotiahnuté k hraniciam pozemkov a nová asfaltová prístupová cesta.',
    price: 95000,
    currency: 'EUR',
    transactionType: 'sale',
    propertyType: 'land',
    status: 'active',
    location: {
      city: 'Ľubotice',
      district: 'Okres Prešov',
      street: 'Pod Hájom',
      formattedAddress: 'Pod Hájom, 080 06 Ľubotice',
      gpsLat: 49.0062,
      gpsLng: 21.2725,
    },
    area: 750,
    areaLand: 750,
    rooms: null,
    floor: null,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=1200&q=80',
    ],
    technicalSpecs: {
      utilities: 'Voda, elektrina, plyn, kanalizácia na hranici pozemku',
      condition: 'Pripravené na výstavbu',
      construction: 'Rovinatý stavebný pozemok',
      parking: 'Prístupová asfaltová komunikácia',
      energyCertificate: 'Neuvedené',
      orientation: 'Juhozápad',
    },
    agent: {
      name: 'Peter DUDA',
      phone: '+421 907 441 405',
      email: 'peter_duda@keyspartners.sk',
    },
    createdAt: '2026-06-01T10:00:00.000Z',
    updatedAt: '2026-09-10T10:00:00.000Z',
  },
  {
    id: 'prop-102',
    externalId: 'RS-88422',
    title: 'Stavebný pozemok P1 a P2, Kokošovce - časť Sigord',
    description:
      'KEYS PARTNERS a.s. Vám v portfóliu ponúka na PREDAJ slnečný pozemok v obci Kokošovce časť Sigord, situovaný na južnej strane Slánskych Vrchov. Ideálna ponuka pre klientov hľadajúcich pokoj, rekreáciu a čistú prírodu. Vhodný pre stavbu rodinného domu alebo rekreačnej chaty.',
    price: 68000,
    currency: 'EUR',
    transactionType: 'sale',
    propertyType: 'land',
    status: 'active',
    location: {
      city: 'Kokošovce',
      district: 'Sigord',
      street: 'K rekreačnej oblasti',
      formattedAddress: 'Sigord, 082 52 Kokošovce',
      gpsLat: 48.952,
      gpsLng: 21.365,
    },
    area: 1050,
    areaLand: 1050,
    rooms: null,
    floor: null,
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    ],
    technicalSpecs: {
      utilities: 'Elektrina v dosahu, voda formou studne, žumpa',
      condition: 'Pôvodný stav / lesné zátišie',
      construction: 'Mierne svahovitý pozemok',
      parking: 'Spevnená lesná prístupová cesta',
      energyCertificate: 'Neuvedené',
      orientation: 'Juh',
    },
    agent: {
      name: 'Peter DUDA',
      phone: '+421 907 441 405',
      email: 'peter_duda@keyspartners.sk',
    },
    createdAt: '2026-06-05T10:00:00.000Z',
    updatedAt: '2026-09-10T10:00:00.000Z',
  },
  {
    id: 'prop-103',
    externalId: 'RS-88423',
    title: 'Priestranný 3-izbový byt po kompletnej rekonštrukcii, Prešov',
    description:
      'KEYS PARTNERS a.s. ponúka na PREDAJ zrekonštruovaný 3-izbový byt v Prešove. Byt prešiel kompletnou a vkusnou modernou rekonštrukciou: nové rozvody elektriny, vody, stierky, sadrokartónové stropy, podlahy a moderná kuchynská linka so zabudovanými spotrebičmi. Úžitková plocha je 74 m² vrátane priestrannej loggie.',
    price: 159000,
    currency: 'EUR',
    transactionType: 'sale',
    propertyType: 'flat',
    status: 'active',
    location: {
      city: 'Prešov',
      district: 'Sídlisko II',
      street: 'Československej armády',
      formattedAddress: 'Československej armády, 080 01 Prešov',
      gpsLat: 48.998,
      gpsLng: 21.235,
    },
    area: 74,
    rooms: 3,
    floor: '3/8',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    ],
    technicalSpecs: {
      utilities: 'Kompletné mestské siete, optický internet',
      heating: 'Ústredné diaľkové vykurovanie',
      condition: 'Kompletná rekonštrukcia (2024)',
      construction: 'Panel / Zateplený bytový dom',
      balcony: 'Zasklená loggia (4 m²)',
      parking: 'Verejné parkovanie pred bytovým domom',
      energyCertificate: 'B',
      orientation: 'Východ / Západ',
    },
    agent: {
      name: 'Ing. Branislav HORVÁT',
      phone: '+421 905 785 951',
      email: 'branislav_horvat@keyspartners.sk',
    },
    createdAt: '2026-06-10T10:00:00.000Z',
    updatedAt: '2026-09-10T10:00:00.000Z',
  },
  {
    id: 'prop-104',
    externalId: 'RS-88424',
    title: 'Slnečný stavebný pozemok v obci Fintice na Ružovej ulici',
    description:
      'Hľadáte istotu a zhodnotenie? KEYS PARTNERS a.s. Vám v portfóliu ponúka na PREDAJ slnečný pozemok v obci Fintice na ulici Ružová. Podľa aktuálneho a platného územného plánu obce je pozemok určený na individuálnu výstavbu rodinného domu.',
    price: 85000,
    currency: 'EUR',
    transactionType: 'sale',
    propertyType: 'land',
    status: 'active',
    location: {
      city: 'Fintice',
      district: 'Okres Prešov',
      street: 'Ružová ulica',
      formattedAddress: 'Ružová, 082 16 Fintice',
      gpsLat: 49.048,
      gpsLng: 21.278,
    },
    area: 820,
    areaLand: 820,
    rooms: null,
    floor: null,
    images: [
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    ],
    technicalSpecs: {
      utilities: 'Voda, elektrina, plyn v dosahu 15m',
      condition: 'Pripravené na výstavbu',
      construction: 'Mierne svahovitý',
      parking: 'Prístupová cesta vo vlastníctve obce',
      energyCertificate: 'Neuvedené',
      orientation: 'Juh',
    },
    agent: {
      name: 'Ing. Branislav HORVÁT',
      phone: '+421 905 785 951',
      email: 'branislav_horvat@keyspartners.sk',
    },
    createdAt: '2026-06-15T10:00:00.000Z',
    updatedAt: '2026-09-10T10:00:00.000Z',
  },
  {
    id: 'prop-105',
    externalId: 'RS-88425',
    title: 'Nadštandardný 2-izbový byt na prenájom, Werferova, Košice',
    description:
      'Na prenájom exkluzívny, kompletne a moderne zariadený 2-izbový byt s balkónom v lukratívnej novostavbe na Werferovej ulici v Košiciach (vedľa centrály KEYS PARTNERS). Byt s úžitkovou plochou 55 m² sa nachádza na 2. poschodí s vlastným parkovacím miestom.',
    price: 650,
    currency: 'EUR',
    transactionType: 'rent',
    propertyType: 'flat',
    status: 'active',
    location: {
      city: 'Košice',
      district: 'Košice - Juh',
      street: 'Werferova 1',
      formattedAddress: 'Werferova 1, 040 11 Košice-Juh',
      gpsLat: 48.705,
      gpsLng: 21.258,
    },
    area: 55,
    rooms: 2,
    floor: '2/5',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    technicalSpecs: {
      utilities: 'Kompletné siete, optický internet, klimatizácia',
      heating: 'Podlahové kúrenie / Vlastný kotol',
      condition: 'Novostavba (2023)',
      construction: 'Tehla / Monolit',
      balcony: 'Balkón (5 m²)',
      parking: 'Vyhradené vonkajšie parkovacie státie v cene',
      energyCertificate: 'A',
      orientation: 'Juhovýchod',
    },
    agent: {
      name: 'Ing. Branislav HORVÁT',
      phone: '+421 905 785 951',
      email: 'branislav_horvat@keyspartners.sk',
    },
    createdAt: '2026-06-20T10:00:00.000Z',
    updatedAt: '2026-09-10T10:00:00.000Z',
  },
];

/**
 * 1. Získanie zoznamu nehnuteľností s podporou filtrovania
 */
export async function getProperties(filters: PropertyFilters = {}): Promise<DetailedProperty[]> {
  // Ak je k dispozícii Prisma ORM, môžeme dopytovať DB
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();

    const where: any = {
      status: filters.status === 'all' ? undefined : 'ACTIVE',
    };

    if (filters.deal && filters.deal !== 'vsetko' && filters.deal !== 'all') {
      where.transactionType = filters.deal.includes('prenaj') || filters.deal === 'rent' ? 'RENT' : 'SALE';
    }

    if (filters.category && filters.category !== 'vsetky' && filters.category !== 'all') {
      const cat = filters.category.toLowerCase();
      if (cat === 'byt' || cat === 'flat') where.propertyType = 'FLAT';
      else if (cat === 'dom' || cat === 'house') where.propertyType = 'HOUSE';
      else if (cat === 'pozemok' || cat === 'pozemi' || cat === 'land') where.propertyType = 'LAND';
      else if (cat === 'komercne' || cat === 'commercial') where.propertyType = 'COMMERCIAL';
    }

    if (filters.location && filters.location.trim()) {
      where.OR = [
        { locationCity: { contains: filters.location, mode: 'insensitive' } },
        { locationDistrict: { contains: filters.location, mode: 'insensitive' } },
        { locationStreet: { contains: filters.location, mode: 'insensitive' } },
      ];
    }

    const dbProperties = await prisma.property.findMany({
      where,
      orderBy: { updatedAt: 'desc' },
    });

    if (dbProperties && dbProperties.length > 0) {
      return dbProperties.map((p: any) => ({
        id: p.id,
        externalId: p.externalId,
        title: p.title,
        description: p.description,
        price: Number(p.price),
        currency: p.currency,
        transactionType: p.transactionType.toLowerCase() as TransactionType,
        propertyType: p.propertyType.toLowerCase() as PropertyType,
        status: p.status.toLowerCase() as PropertyStatus,
        location: {
          city: p.locationCity,
          district: p.locationDistrict,
          street: p.locationStreet,
          formattedAddress: p.formattedAddress,
          gpsLat: p.gpsLat,
          gpsLng: p.gpsLng,
        },
        area: p.area,
        areaLand: p.areaLand,
        images: p.images || [],
        agent: {
          name: p.agentName,
          phone: p.agentPhone,
          email: p.agentEmail,
        },
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
      }));
    }
  } catch (_err) {
    // Graceful fallback na in-memory kolekciu
  }

  // In-memory filtrovanie
  return INITIAL_PROPERTIES.filter((prop) => {
    // Filter podľa stavu
    if (filters.status && filters.status !== 'all' && prop.status !== filters.status) {
      return false;
    }

    // Filter podľa predaj/prenájom
    if (filters.deal && filters.deal !== 'vsetko' && filters.deal !== 'all') {
      const isRent = filters.deal.includes('prenaj') || filters.deal === 'rent';
      if (isRent && prop.transactionType !== 'rent') return false;
      if (!isRent && prop.transactionType !== 'sale') return false;
    }

    // Filter podľa kategórie
    if (filters.category && filters.category !== 'vsetky' && filters.category !== 'all') {
      const cat = filters.category.toLowerCase();
      if (cat === 'byt' && prop.propertyType !== 'flat') return false;
      if (cat === 'dom' && prop.propertyType !== 'house') return false;
      if ((cat === 'pozemok' || cat === 'pozemi') && prop.propertyType !== 'land') return false;
      if (cat === 'komercne' && prop.propertyType !== 'commercial') return false;
    }

    // Filter podľa lokality (mesto / ulica)
    if (filters.location && filters.location.trim()) {
      const q = filters.location.toLowerCase().trim();
      const matchCity = prop.location.city.toLowerCase().includes(q);
      const matchDistrict = prop.location.district?.toLowerCase().includes(q) || false;
      const matchStreet = prop.location.street?.toLowerCase().includes(q) || false;
      const matchTitle = prop.title.toLowerCase().includes(q);
      if (!matchCity && !matchDistrict && !matchStreet && !matchTitle) {
        return false;
      }
    }

    // Filter podľa ceny
    if (filters.minPrice !== undefined && prop.price < filters.minPrice) return false;
    if (filters.maxPrice !== undefined && prop.price > filters.maxPrice) return false;

    return true;
  });
}

/**
 * 2. Získanie konkrétnej nehnuteľnosti podľa ID alebo externalId
 */
export async function getPropertyById(idOrExternalId: string): Promise<DetailedProperty | null> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();

    const p = await prisma.property.findFirst({
      where: {
        OR: [{ id: idOrExternalId }, { externalId: idOrExternalId }],
      },
    });

    if (p) {
      return {
        id: p.id,
        externalId: p.externalId,
        title: p.title,
        description: p.description,
        price: Number(p.price),
        currency: p.currency,
        transactionType: p.transactionType.toLowerCase() as TransactionType,
        propertyType: p.propertyType.toLowerCase() as PropertyType,
        status: p.status.toLowerCase() as PropertyStatus,
        location: {
          city: p.locationCity,
          district: p.locationDistrict,
          street: p.locationStreet,
          formattedAddress: p.formattedAddress,
          gpsLat: p.gpsLat,
          gpsLng: p.gpsLng,
        },
        area: p.area,
        areaLand: p.areaLand,
        images: p.images || [],
        agent: {
          name: p.agentName,
          phone: p.agentPhone,
          email: p.agentEmail,
        },
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
      };
    }
  } catch (_err) {
    // Fallback
  }

  const clean = idOrExternalId.trim().toLowerCase();
  return (
    INITIAL_PROPERTIES.find(
      (p) =>
        p.id.toLowerCase() === clean ||
        p.externalId.toLowerCase() === clean ||
        p.id.replace('prop-', '') === clean
    ) || null
  );
}
