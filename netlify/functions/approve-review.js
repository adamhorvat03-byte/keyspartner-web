/**
 * ==============================================================================
 * Netlify Serverless Function: approve-review
 * Umiestnenie: netlify/functions/approve-review.js
 * Dostupné na: /api/approve-review a /.netlify/functions/approve-review
 * Overí ID a tajný token z e-mailu makléra Braňa Horváta,
 * zmení stav recenzie v Netlify Blobs z "pending" na "approved"
 * a vráti prehľadnú, luxusne formátovanú HTML odpoveď.
 * KEYS PARTNERS a.s. - https://keyspartners.sk
 * ==============================================================================
 */

import { getStore } from "@netlify/blobs";

export const config = {
  path: ["/api/approve-review", "/.netlify/functions/approve-review"]
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

function renderHtmlResponse({ title, badgeType, heading, message, review, siteUrl }) {
  const isSuccess = badgeType === "success";
  const isInfo = badgeType === "info";
  const isError = badgeType === "error";

  const badgeColor = isSuccess ? "#10B981" : isInfo ? "#3B82F6" : "#EF4444";
  const badgeBg = isSuccess ? "rgba(16, 185, 129, 0.15)" : isInfo ? "rgba(59, 130, 246, 0.15)" : "rgba(239, 68, 68, 0.15)";
  const icon = isSuccess ? "✓" : isInfo ? "ℹ" : "✕";

  const starsHtml = review ? "★".repeat(review.rating) + "☆".repeat(5 - review.rating) : "";

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
      max-width: 580px;
      width: 100%;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(181, 137, 32, 0.1);
      overflow: hidden;
      text-align: center;
    }
    .header {
      background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
      padding: 28px 24px;
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
      padding: 36px 32px 40px;
    }
    .badge-icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: ${badgeBg};
      border: 2px solid ${badgeColor};
      color: ${badgeColor};
      font-size: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      font-weight: bold;
    }
    h2 {
      font-family: 'Outfit', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 12px;
    }
    .lead {
      color: #94A3B8;
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 28px;
    }
    .review-box {
      background: #1E293B;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 20px 24px;
      text-align: left;
      margin-bottom: 30px;
    }
    .review-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .reviewer-name {
      font-weight: 700;
      color: #FFFFFF;
      font-size: 16px;
    }
    .reviewer-stars {
      color: #B58920;
      font-size: 18px;
      letter-spacing: 2px;
    }
    .review-quote {
      font-style: italic;
      color: #E2E8F0;
      font-size: 14px;
      line-height: 1.6;
      background: #0A0F1D;
      padding: 14px;
      border-radius: 8px;
      border-left: 3px solid #B58920;
    }
    .btn {
      display: inline-block;
      background: #B58920;
      color: #05080F;
      font-family: 'Outfit', sans-serif;
      font-weight: 700;
      font-size: 15px;
      padding: 14px 32px;
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
      padding: 16px 24px;
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

      ${review ? `
      <div class="review-box">
        <div class="review-meta">
          <span class="reviewer-name">${review.name}</span>
          <span class="reviewer-stars">${starsHtml} (${review.rating}/5)</span>
        </div>
        <div class="review-quote">“${review.text}”</div>
      </div>
      ` : ''}

      <a href="${siteUrl}/#recenzie" class="btn">Prejsť na web Keys Partners</a>
    </div>
    <div class="footer">
      KEYS PARTNERS a.s. • Systém moderácie zákazníckych recenzií
    </div>
  </div>
</body>
</html>`;
}

export default async (req, context) => {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const token = url.searchParams.get("token");

  const siteUrl = (
    process.env.SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    req.headers.get("origin") ||
    "https://keyspartners.sk"
  ).replace(/\/$/, "");

  // 1. Kontrola chýbajúcich parametrov
  if (!id || !token) {
    return new Response(renderHtmlResponse({
      title: "Chýbajúce údaje",
      badgeType: "error",
      heading: "Neplatný schvaľovací odkaz",
      message: "V schvaľovacom odkaze chýba unikátne ID recenzie alebo bezpečnostný token. Skontrolujte prosím odkaz v doručenom e-maili.",
      review: null,
      siteUrl
    }), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }

  // 2. Načítanie z Netlify Blobs
  const storeInfo = getReviewsStore(context);
  if (!storeInfo.store) {
    console.error("[APPROVE-REVIEW] Úložisko Blobs 'reviews' nie je dostupné:", storeInfo.error);
    return new Response(renderHtmlResponse({
      title: "Chyba databázy",
      badgeType: "error",
      heading: "Úložisko recenzií nie je dostupné",
      message: "Nepodarilo sa pripojiť k úložisku recenzií. Skúste to prosím znova o niekoľko minút.",
      review: null,
      siteUrl
    }), {
      status: 503,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }

  let review = null;
  try {
    if (typeof storeInfo.store.getJSON === "function") {
      review = await storeInfo.store.getJSON(id);
    } else {
      const raw = await storeInfo.store.get(id);
      review = raw ? JSON.parse(raw) : null;
    }
  } catch (err) {
    console.error(`[APPROVE-REVIEW] Chyba pri čítaní recenzie ${id}:`, err.message);
  }

  // 3. Kontrola existencie recenzie
  if (!review) {
    return new Response(renderHtmlResponse({
      title: "Recenzia nenájdená",
      badgeType: "error",
      heading: "Recenzia nebola nájdená",
      message: `Recenzia s identifikátorom "${id}" sa v databáze nenachádza alebo už bola odstránená.`,
      review: null,
      siteUrl
    }), {
      status: 404,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }

  // 4. Overenie bezpečnostného tokenu
  if (review.token !== token) {
    console.warn(`[APPROVE-REVIEW] Neplatný token pre recenziu ${id}`);
    return new Response(renderHtmlResponse({
      title: "Neplatný token",
      badgeType: "error",
      heading: "Neplatný schvaľovací token",
      message: "Bezpečnostný token v schvaľovacom odkaze sa nezhoduje so záznamom v databáze.",
      review: null,
      siteUrl
    }), {
      status: 403,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }

  // 5. Prípad, keď recenzia už bola schválená predtým
  if (review.status === "approved") {
    return new Response(renderHtmlResponse({
      title: "Už schválené",
      badgeType: "info",
      heading: "Recenzia už bola schválená",
      message: "Táto recenzia už bola v minulosti schválená a v súčasnosti je riadne zverejnená na webe v sekcii Hodnotenie našich partnerov.",
      review,
      siteUrl
    }), {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }

  // 6. Schválenie recenzie: zmena statusu na "approved"
  review.status = "approved";
  review.approvedAt = new Date().toISOString();

  try {
    if (typeof storeInfo.store.setJSON === "function") {
      await storeInfo.store.setJSON(id, review);
    } else {
      await storeInfo.store.set(id, JSON.stringify(review));
    }
    console.log(`[APPROVE-REVIEW] Recenzia ${id} bola úspešne schválená maklérom.`);
  } catch (err) {
    console.error(`[APPROVE-REVIEW] Chyba pri ukladaní schválenej recenzie ${id}:`, err.message);
    return new Response(renderHtmlResponse({
      title: "Chyba uloženia",
      badgeType: "error",
      heading: "Chyba pri ukladaní schválenia",
      message: "Nastala neočakávaná technická chyba pri ukladaní zmeny stavu recenzie.",
      review: null,
      siteUrl
    }), {
      status: 500,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }

  // 7. Úspešná odpoveď pre Braňa
  return new Response(renderHtmlResponse({
    title: "Recenzia schválená",
    badgeType: "success",
    heading: "Recenzia bola úspešne schválená!",
    message: "Recenzia bola úspešne schválená a je online na webe. Od tohto momentu ju vidia všetci návštevníci v sekcii Hodnotenie našich partnerov.",
    review,
    siteUrl
  }), {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
};
