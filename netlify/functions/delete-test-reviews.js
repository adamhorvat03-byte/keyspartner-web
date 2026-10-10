/**
 * ==============================================================================
 * Netlify Serverless Function: delete-test-reviews
 * Umiestnenie: netlify/functions/delete-test-reviews.js
 * Dostupné na: /api/delete-test-reviews, /api/delete-reviews, /.netlify/functions/delete-test-reviews
 * Slúži na jednorazové rýchle vyčistenie testovacích recenzií z Netlify Blobs (store "reviews").
 * Stačí otvoriť v prehliadači a okamžite vymaže všetky záznamy z úložiska.
 * KEYS PARTNERS a.s. - https://keyspartners.sk
 * ==============================================================================
 */

import { getStore } from "@netlify/blobs";

export const config = {
  path: [
    "/api/delete-test-reviews",
    "/api/delete-reviews",
    "/.netlify/functions/delete-test-reviews",
    "/.netlify/functions/delete-reviews"
  ]
};

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Cache-Control": "no-store, no-cache, must-revalidate"
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

function renderHtmlResponse({ title, heading, message, deletedItems, siteUrl, isError = false }) {
  const badgeColor = isError ? "#EF4444" : (deletedItems.length > 0 ? "#10B981" : "#3B82F6");
  const badgeBg = isError ? "rgba(239, 68, 68, 0.15)" : (deletedItems.length > 0 ? "rgba(16, 185, 129, 0.15)" : "rgba(59, 130, 246, 0.15)");
  const icon = isError ? "✕" : (deletedItems.length > 0 ? "✓" : "ℹ");

  const itemsHtml = deletedItems.map(item => {
    const stars = item.rating ? "★".repeat(item.rating) + "☆".repeat(5 - item.rating) : "";
    return `
      <div style="background: #1E293B; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px; margin-bottom: 12px; text-align: left;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <strong style="color: #FFFFFF; font-size: 15px;">${item.name || "Neznáme meno"}</strong>
          <span style="color: #B58920; font-size: 14px; letter-spacing: 1px;">${stars}</span>
        </div>
        <p style="margin: 0 0 8px; font-size: 13px; color: #CBD5E1; font-style: italic; background: #0A0F1D; padding: 10px 12px; border-radius: 6px; border-left: 3px solid #B58920;">
          “${item.text || "Bez textu"}”
        </p>
        <div style="display: flex; justify-content: space-between; font-size: 11px; color: #64748B;">
          <span>ID: <code>${item.id}</code></span>
          <span>Stav: <span style="color: #E2E8F0; text-transform: uppercase;">${item.status || "—"}</span></span>
        </div>
      </div>
    `;
  }).join("");

  return `<!DOCTYPE html>
<html lang="sk">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | KEYS PARTNERS a.s.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #05080F;
      color: #E2E8F0;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .card {
      background: #0F172A;
      border: 1px solid rgba(181, 137, 32, 0.35);
      border-radius: 20px;
      max-width: 620px;
      width: 100%;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(181, 137, 32, 0.1);
      overflow: hidden;
      text-align: center;
    }
    .header {
      background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
      padding: 24px 24px;
      border-bottom: 1px solid rgba(181, 137, 32, 0.2);
    }
    .brand {
      font-family: 'Outfit', sans-serif;
      font-size: 20px;
      font-weight: 800;
      color: #B58920;
      letter-spacing: 2px;
    }
    .content {
      padding: 32px 28px 36px;
    }
    .badge-icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: ${badgeBg};
      border: 2px solid ${badgeColor};
      color: ${badgeColor};
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 18px;
      font-weight: bold;
    }
    h2 {
      font-family: 'Outfit', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 10px;
    }
    .lead {
      color: #94A3B8;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    .deleted-list {
      max-height: 380px;
      overflow-y: auto;
      margin-bottom: 24px;
      padding-right: 4px;
    }
    .btn {
      display: inline-block;
      background: #B58920;
      color: #05080F;
      font-family: 'Outfit', sans-serif;
      font-weight: 700;
      font-size: 15px;
      padding: 13px 30px;
      border-radius: 10px;
      text-decoration: none;
      transition: all 0.25s ease;
      box-shadow: 0 4px 16px rgba(181, 137, 32, 0.4);
    }
    .btn:hover {
      background: #9E7415;
      transform: translateY(-2px);
    }
    .footer {
      background: #080D1A;
      padding: 14px 24px;
      font-size: 12px;
      color: #475569;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="brand">KEYS PARTNERS a.s.</div>
    </div>
    <div class="content">
      <div class="badge-icon">${icon}</div>
      <h2>${heading}</h2>
      <p class="lead">${message}</p>

      ${deletedItems.length > 0 ? `
        <div style="text-align: left; margin-bottom: 10px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #94A3B8;">
          Zoznam vymazaných recenzií (${deletedItems.length}):
        </div>
        <div class="deleted-list">
          ${itemsHtml}
        </div>
      ` : ''}

      <div style="margin-top: 20px;">
        <a href="${siteUrl}/#recenzie" class="btn">Prejsť na web Keys Partners</a>
      </div>
    </div>
    <div class="footer">
      KEYS PARTNERS a.s. • Správa úložiska Netlify Blobs (reviews)
    </div>
  </div>
</body>
</html>`;
}

export default async (req, context) => {
  if (req.method === "OPTIONS") {
    return new Response("", { status: 200, headers: corsHeaders });
  }

  const url = new URL(req.url);
  const specificId = url.searchParams.get("id");
  const wantsJson = url.searchParams.get("format") === "json" || req.headers.get("accept")?.includes("application/json");

  const siteUrl = (
    process.env.SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    req.headers.get("origin") ||
    "https://keyspartners.sk"
  ).replace(/\/$/, "");

  const storeInfo = getReviewsStore(context);
  if (!storeInfo.store) {
    console.error("[DELETE-REVIEWS] Úložisko Blobs 'reviews' nie je dostupné:", storeInfo.error);
    if (wantsJson) {
      return new Response(JSON.stringify({
        success: false,
        error: "Úložisko recenzií nie je v tomto prostredí dostupné."
      }), { status: 503, headers: corsHeaders });
    }
    return new Response(renderHtmlResponse({
      title: "Chyba úložiska",
      heading: "Úložisko nie je dostupné",
      message: "Nepodarilo sa pripojiť k Netlify Blobs úložisku.",
      deletedItems: [],
      siteUrl,
      isError: true
    }), { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } });
  }

  try {
    const listRes = await storeInfo.store.list();
    const blobs = (listRes && listRes.blobs) ? listRes.blobs : [];

    // Ak bolo zadané konkrétne ID, zmažeme len to, inak zmažeme všetky záznamy
    const targetBlobs = specificId ? blobs.filter(b => b.key === specificId) : blobs;

    const deletedDetails = [];

    for (const b of targetBlobs) {
      try {
        let item = null;
        if (typeof storeInfo.store.getJSON === "function") {
          item = await storeInfo.store.getJSON(b.key);
        } else {
          const raw = await storeInfo.store.get(b.key);
          item = raw ? JSON.parse(raw) : null;
        }

        deletedDetails.push({
          id: b.key,
          name: item?.name || "Neznáme meno",
          rating: item?.rating || 5,
          text: item?.text || "",
          status: item?.status || "unknown"
        });

        // Vymazanie z Blobs
        await storeInfo.store.delete(b.key);
        console.log(`[DELETE-REVIEWS] Recenzia ${b.key} bola natrvalo odstránená z Blobs.`);
      } catch (delErr) {
        console.error(`[DELETE-REVIEWS] Chyba pri mazaní kľúča ${b.key}:`, delErr.message);
      }
    }

    if (wantsJson) {
      return new Response(JSON.stringify({
        success: true,
        message: deletedDetails.length > 0 
          ? `Úspešne vymazaných ${deletedDetails.length} recenzií z Netlify Blobs.`
          : "Úložisko recenzií bolo už predtým prázdne.",
        count: deletedDetails.length,
        deleted: deletedDetails
      }), { status: 200, headers: corsHeaders });
    }

    const heading = deletedDetails.length > 0
      ? "Testovacie recenzie boli úspešne vymazané!"
      : "Úložisko recenzií je prázdne";
    const message = deletedDetails.length > 0
      ? `Z úložiska Netlify Blobs bolo natrvalo odstránených ${deletedDetails.length} testovacích recenzií. Na webe v sekcii „Hodnotenie našich partnerov“ sa už nebudú zobrazovať.`
      : "V úložisku Netlify Blobs sa nenachádzajú žiadne recenzie. Databáza je už úplne čistá a pripravená pre skutočné hodnotenia.";

    return new Response(renderHtmlResponse({
      title: "Recenzie vymazané",
      heading,
      message,
      deletedItems: deletedDetails,
      siteUrl,
      isError: false
    }), {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });

  } catch (err) {
    console.error("[DELETE-REVIEWS] Neočakávaná chyba:", err.message);
    if (wantsJson) {
      return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
    }
    return new Response(renderHtmlResponse({
      title: "Chyba pri mazaní",
      heading: "Nastala chyba pri mazaní",
      message: `Chyba: ${err.message}`,
      deletedItems: [],
      siteUrl,
      isError: true
    }), { status: 500, headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
};
