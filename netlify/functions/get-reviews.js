/**
 * ==============================================================================
 * Netlify Serverless Function: get-reviews
 * Umiestnenie: netlify/functions/get-reviews.js
 * Dostupné na: /api/get-reviews, /api/reviews, /.netlify/functions/get-reviews
 * Vracia VÝLUČNE schválené recenzie (status: "approved") z Netlify Blobs
 * pre dynamické zobrazenie v sekcii Hodnotenie našich partnerov.
 * Bezpečnosť: Tajné schvaľovacie tokeny a citlivé údaje sa verejnosti neposielajú.
 * KEYS PARTNERS a.s. - https://keyspartners.sk
 * ==============================================================================
 */

import { getStore } from "@netlify/blobs";

export const config = {
  path: [
    "/api/get-reviews",
    "/api/reviews",
    "/.netlify/functions/get-reviews",
    "/.netlify/functions/reviews"
  ]
};

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate"
};

function getReviewsStore(context) {
  if (context && context.blobs && typeof context.blobs.getStore === "function") {
    try {
      return { store: context.blobs.getStore("reviews"), mode: "context.blobs" };
    } catch (e) {
      console.warn("[Blobs] context.blobs.getStore zlyhalo:", e.message);
    }
  }

  const options = { consistency: "strong" };
  if (process.env.NETLIFY_BLOBS_TOKEN && process.env.NETLIFY_SITE_ID) {
    options.token = process.env.NETLIFY_BLOBS_TOKEN;
    options.siteID = process.env.NETLIFY_SITE_ID;
  }

  try {
    const store = getStore("reviews", options);
    return { store, mode: "zero-config-strong" };
  } catch (_err1) {
    try {
      const store = getStore("reviews");
      return { store, mode: "zero-config" };
    } catch (err2) {
      console.error("[Blobs] getStore zlyhalo:", err2.message);
      return { store: null, mode: "failed", error: err2.message };
    }
  }
}

export default async (req, context) => {
  if (req.method === "OPTIONS") {
    return new Response("", { status: 200, headers: corsHeaders });
  }

  const storeInfo = getReviewsStore(context);
  if (!storeInfo.store) {
    return new Response(JSON.stringify({
      status: "success",
      count: 0,
      data: [],
      warning: "Úložisko recenzií nie je v tomto prostredí dostupné."
    }), {
      status: 200,
      headers: corsHeaders
    });
  }

  try {
    const listRes = await storeInfo.store.list();
    const blobs = (listRes && listRes.blobs) ? listRes.blobs : [];

    const approvedReviews = [];

    await Promise.all(
      blobs.map(async (b) => {
        try {
          let item = null;
          if (typeof storeInfo.store.getJSON === "function") {
            item = await storeInfo.store.getJSON(b.key);
          } else {
            const raw = await storeInfo.store.get(b.key);
            item = raw ? JSON.parse(raw) : null;
          }

          // Striktná kontrola: Zobrazovať VÝLUČNE recenzie so stavom "approved"
          if (item && item.status === "approved") {
            approvedReviews.push({
              id: item.id || b.key,
              name: item.name,
              rating: Number(item.rating) || 5,
              text: item.text,
              createdAt: item.createdAt || null,
              approvedAt: item.approvedAt || null
            });
          }
        } catch (err) {
          console.error(`[GET-REVIEWS] Chyba pri čítaní kľúča ${b.key}:`, err.message);
        }
      })
    );

    // Zoradenie od najnovších po najstaršie
    approvedReviews.sort((a, b) => {
      const timeA = new Date(a.approvedAt || a.createdAt || 0).getTime();
      const timeB = new Date(b.approvedAt || b.createdAt || 0).getTime();
      return timeB - timeA;
    });

    return new Response(JSON.stringify({
      status: "success",
      count: approvedReviews.length,
      data: approvedReviews,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    console.error("[GET-REVIEWS] Neočakávaná chyba:", err.message);
    return new Response(JSON.stringify({
      status: "error",
      message: "Nepodarilo sa načítať recenzie z úložiska.",
      count: 0,
      data: []
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
};
