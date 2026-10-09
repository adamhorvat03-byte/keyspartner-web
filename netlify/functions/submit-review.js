/**
 * ==============================================================================
 * Netlify Serverless Function: submit-review
 * Umiestnenie: netlify/functions/submit-review.js
 * Dostupné na: /api/submit-review a /.netlify/functions/submit-review
 * Prijíma recenzie od klientov, ukladá ich do Netlify Blobs (status: "pending")
 * a odošle schvaľovací e-mail maklérovi Braňovi Horvátovi s unikátnym tokenom.
 * KEYS PARTNERS a.s. - https://keyspartners.sk
 * ==============================================================================
 */

import { getStore } from "@netlify/blobs";
import crypto from "node:crypto";

export const config = {
  path: ["/api/submit-review", "/.netlify/functions/submit-review"]
};

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
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

function sanitizeText(str) {
  if (!str) return "";
  return String(str)
    .replace(/[<>]/g, "") // odstránenie < a > proti HTML injekcii
    .trim();
}

function buildApprovalEmailHtml({ review, approvalUrl }) {
  const dateFormatted = new Date().toLocaleString("sk-SK", {
    timeZone: "Europe/Bratislava",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  const starsGold = "★".repeat(review.rating);
  const starsEmpty = "☆".repeat(5 - review.rating);

  return `<!DOCTYPE html>
<html lang="sk">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nová recenzia na schválenie - Keys Partners</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #05080F; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #E2E8F0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #0F172A; border: 1px solid rgba(181, 137, 32, 0.35); border-radius: 16px; overflow: hidden; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%); padding: 28px 32px; border-bottom: 1px solid rgba(181, 137, 32, 0.25); text-align: center;">
      <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #B58920; letter-spacing: 2px;">KEYS PARTNERS</h1>
      <p style="margin: 6px 0 0; font-size: 13px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Overenie a moderácia zákazníckych recenzií</p>
    </div>

    <!-- Body -->
    <div style="padding: 32px 28px;">
      
      <div style="background-color: rgba(181, 137, 32, 0.12); border-left: 4px solid #B58920; padding: 14px 18px; border-radius: 8px; margin-bottom: 24px;">
        <p style="margin: 0; font-size: 15px; color: #F8FAFC; line-height: 1.5;">
          <strong>Ahoj Braňo,</strong><br>na webe pribudla nová zákaznícka recenzia, ktorá čaká na tvoje overenie a schválenie.
        </p>
      </div>

      <!-- Review Card -->
      <div style="background-color: #1E293B; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 22px; margin-bottom: 28px;">
        
        <div style="margin-bottom: 16px;">
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #94A3B8; font-weight: bold;">Meno zákazníka:</span>
          <div style="font-size: 18px; font-weight: bold; color: #FFFFFF; margin-top: 4px;">${review.name}</div>
        </div>

        <div style="margin-bottom: 16px;">
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #94A3B8; font-weight: bold;">Hodnotenie:</span>
          <div style="font-size: 20px; color: #B58920; margin-top: 4px; letter-spacing: 2px;">
            ${starsGold}${starsEmpty}
            <span style="font-size: 14px; color: #CBD5E1; letter-spacing: normal; margin-left: 6px;">(${review.rating} / 5)</span>
          </div>
        </div>

        <div style="margin-bottom: 14px;">
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #94A3B8; font-weight: bold;">Text recenzie:</span>
          <div style="font-size: 15px; line-height: 1.6; color: #F1F5F9; font-style: italic; background-color: #0A0F1D; border: 1px solid rgba(181, 137, 32, 0.2); border-radius: 8px; padding: 16px; margin-top: 8px;">
            “${review.text}”
          </div>
        </div>

        <div style="font-size: 12px; color: #64748B;">
          Doručené dňa: ${dateFormatted}
        </div>
      </div>

      <!-- Action Button -->
      <div style="text-align: center; margin: 32px 0 24px;">
        <a href="${approvalUrl}" style="display: inline-block; background-color: #B58920; color: #05080F; padding: 16px 36px; border-radius: 10px; font-size: 16px; font-weight: 800; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 6px 20px rgba(181, 137, 32, 0.45);">
          ✅ Schváliť recenziu na web
        </a>
      </div>

      <p style="font-size: 13px; color: #64748B; text-align: center; line-height: 1.5; margin: 0 0 16px;">
        Kliknutím na tlačidlo sa stav recenzie v Netlify Blobs zmení na <strong>approved</strong> a okamžite sa zobrazí na webe v sekcii <em>Hodnotenie našich partnerov</em>.
      </p>

      <div style="background-color: #0A0F1D; border-radius: 8px; padding: 12px; word-break: break-all; text-align: center;">
        <span style="font-size: 11px; color: #64748B; display: block; margin-bottom: 4px;">Priamy schvaľovací odkaz:</span>
        <a href="${approvalUrl}" style="color: #B58920; font-size: 12px; text-decoration: underline;">${approvalUrl}</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #080D1A; padding: 18px 24px; border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center; font-size: 12px; color: #475569;">
      KEYS PARTNERS a.s. • Systém automatickej moderácie recenzií
    </div>
  </div>
</body>
</html>`;
}

function buildApprovalEmailText({ review, approvalUrl }) {
  return `Ahoj Braňo,

Na webe Keys Partners pribudla nová zákaznícka recenzia na schválenie:

Zákazník: ${review.name}
Hodnotenie: ${review.rating} / 5 hviezdičiek
Text recenzie:
"${review.text}"

Pre schválenie a okamžité zverejnenie recenzie na webe klikni na tento odkaz:
${approvalUrl}

KEYS PARTNERS a.s.`;
}

export default async (req, context) => {
  if (req.method === "OPTIONS") {
    return new Response("", { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ success: false, error: "Povolená je len metóda POST." }), {
      status: 405,
      headers: corsHeaders
    });
  }

  let body;
  try {
    body = await req.json();
  } catch (_e) {
    return new Response(JSON.stringify({ success: false, error: "Neplatný formát dát (JSON)." }), {
      status: 400,
      headers: corsHeaders
    });
  }

  const name = sanitizeText(body.name);
  const text = sanitizeText(body.text || body.comment);
  const rating = Math.min(5, Math.max(1, parseInt(body.rating, 10) || 5));

  if (!name || name.length < 2) {
    return new Response(JSON.stringify({ success: false, error: "Prosím, zadajte vaše meno a priezvisko (aspoň 2 znaky)." }), {
      status: 400,
      headers: corsHeaders
    });
  }

  if (!text || text.length < 5) {
    return new Response(JSON.stringify({ success: false, error: "Prosím, napíšte text vašej recenzie (aspoň 5 znakov)." }), {
      status: 400,
      headers: corsHeaders
    });
  }

  const id = `rev_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;
  const token = crypto.randomBytes(24).toString("hex");

  const reviewData = {
    id,
    token,
    name,
    rating,
    text,
    status: "pending", // Vždy začína v stave pending
    createdAt: new Date().toISOString(),
    approvedAt: null
  };

  const storeInfo = getReviewsStore(context);
  if (!storeInfo.store) {
    console.error("[SUBMIT-REVIEW] Úložisko Blobs 'reviews' nie je dostupné:", storeInfo.error);
    return new Response(JSON.stringify({
      success: false,
      error: "Úložisko recenzií nie je momentálne dostupné. Skúste to prosím neskôr."
    }), {
      status: 503,
      headers: corsHeaders
    });
  }

  try {
    if (typeof storeInfo.store.setJSON === "function") {
      await storeInfo.store.setJSON(id, reviewData);
    } else {
      await storeInfo.store.set(id, JSON.stringify(reviewData));
    }
    console.log(`[SUBMIT-REVIEW] Recenzia úspešne uložená do Blobs (id: ${id}, status: pending)`);
  } catch (err) {
    console.error(`[SUBMIT-REVIEW] Chyba pri zápise recenzie ${id}:`, err.message);
    return new Response(JSON.stringify({
      success: false,
      error: "Nepodarilo sa uložiť recenziu do databázy."
    }), {
      status: 500,
      headers: corsHeaders
    });
  }

  // Zostavenie schvaľovacej URL adresy
  const siteUrl = (
    process.env.SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    req.headers.get("origin") ||
    "https://keyspartners.sk"
  ).replace(/\/$/, "");

  const approvalUrl = `${siteUrl}/api/approve-review?id=${encodeURIComponent(id)}&token=${encodeURIComponent(token)}`;

  // Odoslanie e-mailu schvaľovateľovi Braňovi Horvátovi
  // Primárna a predvolená adresa je presne branislav_horvat@keyspartners.sk
  const approverEmail = (process.env.REVIEW_APPROVER_EMAIL || "branislav_horvat@keyspartners.sk").trim();
  const fromEmail = (process.env.REVIEW_EMAIL_FROM || "Keys Partners <onboarding@resend.dev>").trim();

  console.log(`[SUBMIT-REVIEW] Odosielam schvaľovaciu notifikáciu pre recenziu ${id}`);
  console.log(`[SUBMIT-REVIEW] Príjemca e-mailu (To:): ${approverEmail}`);
  console.log(`[SUBMIT-REVIEW] Schvaľovací odkaz: ${approvalUrl}`);

  let emailSent = false;
  let emailProvider = null;
  let emailError = null;

  // 1. Prioritný poskytovateľ: Resend (premenná RESEND_API_KEY)
  if (process.env.RESEND_API_KEY) {
    emailProvider = "resend";
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY.trim()}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [approverEmail],
          subject: `⭐ Nová recenzia od ${name} (${rating}★) na schválenie`,
          html: buildApprovalEmailHtml({ review: reviewData, approvalUrl }),
          text: buildApprovalEmailText({ review: reviewData, approvalUrl })
        })
      });

      if (res.ok) {
        emailSent = true;
        const resData = await res.json().catch(() => ({}));
        console.log(`[SUBMIT-REVIEW ÚSPECH] E-mail bol úspešne doručený na ${approverEmail} cez Resend (ID: ${resData.id || 'ok'}).`);
      } else {
        const errText = await res.text();
        emailError = `Resend HTTP ${res.status}: ${errText}`;
        console.error(`[SUBMIT-REVIEW CHYBA] Odoslanie cez Resend na ${approverEmail} zlyhalo (HTTP ${res.status}): ${errText}`);
        
        if (res.status === 403) {
          console.error(`[SUBMIT-REVIEW RESEND INFO] Resend chyba 403: Testovacia adresa 'onboarding@resend.dev' dovoľuje odosielať maily iba na adresu vášho Resend účtu. Na doručovanie na doménu ${approverEmail} je potrebné overiť doménu v Resend (https://resend.com/domains) a nastaviť premennú REVIEW_EMAIL_FROM (napr. recenzie@keyspartners.sk).`);
        }
      }
    } catch (e) {
      emailError = e.message;
      console.error(`[SUBMIT-REVIEW CHYBA] Neočakávaná výnimka pri odosielaní cez Resend: ${e.message}`, e);
    }
  } else if (process.env.BREVO_API_KEY || process.env.SENDINBLUE_API_KEY) {
    // 2. Poskytovateľ Brevo / Sendinblue (premenná BREVO_API_KEY)
    emailProvider = "brevo";
    const apiKey = (process.env.BREVO_API_KEY || process.env.SENDINBLUE_API_KEY).trim();
    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          sender: { name: "Keys Partners Web", email: process.env.BREVO_SENDER_EMAIL || "recenzie@keyspartners.sk" },
          to: [{ email: approverEmail, name: "Branislav Horvát" }],
          subject: `⭐ Nová recenzia od ${name} (${rating}★) na schválenie`,
          htmlContent: buildApprovalEmailHtml({ review: reviewData, approvalUrl }),
          textContent: buildApprovalEmailText({ review: reviewData, approvalUrl })
        })
      });

      if (res.ok) {
        emailSent = true;
        console.log(`[SUBMIT-REVIEW ÚSPECH] E-mail bol úspešne odoslaný na ${approverEmail} cez Brevo.`);
      } else {
        const errText = await res.text();
        emailError = `Brevo HTTP ${res.status}: ${errText}`;
        console.error(`[SUBMIT-REVIEW CHYBA] Odoslanie cez Brevo zlyhalo: ${errText}`);
      }
    } catch (e) {
      emailError = e.message;
      console.error(`[SUBMIT-REVIEW CHYBA] Výnimka pri volaní Brevo: ${e.message}`, e);
    }
  } else if (process.env.SENDGRID_API_KEY) {
    // 3. Poskytovateľ SendGrid (premenná SENDGRID_API_KEY)
    emailProvider = "sendgrid";
    try {
      const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.SENDGRID_API_KEY.trim()}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: approverEmail, name: "Branislav Horvát" }] }],
          from: { email: process.env.SENDGRID_FROM || "recenzie@keyspartners.sk", name: "Keys Partners Web" },
          subject: `⭐ Nová recenzia od ${name} (${rating}★) na schválenie`,
          content: [
            { type: "text/plain", value: buildApprovalEmailText({ review: reviewData, approvalUrl }) },
            { type: "text/html", value: buildApprovalEmailHtml({ review: reviewData, approvalUrl }) }
          ]
        })
      });

      if (res.ok) {
        emailSent = true;
        console.log(`[SUBMIT-REVIEW ÚSPECH] E-mail bol úspešne odoslaný cez SendGrid na ${approverEmail}.`);
      } else {
        const errText = await res.text();
        emailError = `SendGrid HTTP ${res.status}: ${errText}`;
        console.error(`[SUBMIT-REVIEW CHYBA] Odoslanie cez SendGrid zlyhalo: ${errText}`);
      }
    } catch (e) {
      emailError = e.message;
      console.error(`[SUBMIT-REVIEW CHYBA] Výnimka pri volaní SendGrid: ${e.message}`, e);
    }
  } else {
    // Žiadny externý API kľúč nie je nastavený - schvaľovacia notifikácia odchádza cez natívne Netlify Forms z frontendu (bezpečné, bezpečný priamy odkaz bez SSL chýb)
    emailProvider = "netlify-forms";
    console.log(`[SUBMIT-REVIEW INFO] Schvaľovacia notifikácia odchádza cez Netlify Forms pre adresáta '${approverEmail}'.`);
    console.info(`[SUBMIT-REVIEW INFO] Priamy schvaľovací odkaz pre makléra: ${approvalUrl}`);
  }

  return new Response(JSON.stringify({
    success: true,
    message: "Recenzia bola úspešne odoslaná na schválenie maklérovi.",
    id,
    emailSent,
    approverEmail,
    emailProvider,
    emailError,
    // Vrátime odkaz aj v JSON odpovedi pre diagnostiku
    approvalUrl
  }), {
    status: 200,
    headers: corsHeaders
  });
};
