/**
 * ==============================================================================
 * Netlify Serverless Function: Verejné API pre nehnuteľnosti
 * Umiestnenie: netlify/functions/properties.js
 * Dostupné na: /.netlify/functions/properties a /api/properties
 * ==============================================================================
 */

const PROPERTIES = [
  {
    id: "prop-101",
    externalId: "RS-88421",
    title: "Exkluzívna ponuka: 21 stavebných pozemkov v obci Ľubotice",
    price: 95000,
    currency: "EUR",
    transactionType: "sale",
    propertyType: "land",
    status: "active",
    location: {
      city: "Ľubotice",
      district: "Okres Prešov",
      street: "Pod Hájom",
      formattedAddress: "Pod Hájom, 080 06 Ľubotice"
    },
    area: 750,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Peter DUDA",
      phone: "+421 907 441 405",
      email: "peter_duda@keyspartners.sk"
    }
  },
  {
    id: "prop-103",
    externalId: "RS-88423",
    title: "Priestranný 3-izbový byt po kompletnej rekonštrukcii, Prešov",
    price: 159000,
    currency: "EUR",
    transactionType: "sale",
    propertyType: "flat",
    status: "active",
    location: {
      city: "Prešov",
      district: "Sídlisko II",
      street: "Československej armády",
      formattedAddress: "Československej armády, 080 01 Prešov"
    },
    area: 74,
    rooms: 3,
    floor: "3/8",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Ing. Branislav HORVÁT",
      phone: "+421 905 785 951",
      email: "branislav_horvat@keyspartners.sk"
    }
  },
  {
    id: "prop-106",
    externalId: "RS-88426",
    title: "Nadštandardný 2-izbový byt na prenájom, Werferova, Košice",
    price: 650,
    currency: "EUR",
    transactionType: "rent",
    propertyType: "flat",
    status: "active",
    location: {
      city: "Košice",
      district: "Košice - Juh",
      street: "Werferova 1",
      formattedAddress: "Werferova 1, 040 11 Košice-Juh"
    },
    area: 55,
    rooms: 2,
    floor: "2/5",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Ing. Branislav HORVÁT",
      phone: "+421 905 785 951",
      email: "branislav_horvat@keyspartners.sk"
    }
  }
];

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
  let filtered = PROPERTIES;

  if (query.deal && query.deal !== "vsetko") {
    const isRent = query.deal.includes("prenaj") || query.deal === "rent";
    filtered = filtered.filter(p => isRent ? p.transactionType === "rent" : p.transactionType === "sale");
  }

  if (query.category && query.category !== "vsetky") {
    filtered = filtered.filter(p => p.propertyType === query.category);
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      status: "success",
      count: filtered.length,
      data: filtered,
      timestamp: new Date().toISOString()
    })
  };
};
