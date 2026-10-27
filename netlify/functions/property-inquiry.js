/**
 * ==============================================================================
 * Netlify Serverless Function: property-inquiry
 * Umiestnenie: netlify/functions/property-inquiry.js
 * Dostupné na: /api/property-inquiry a /.netlify/functions/property-inquiry
 * Prijíma dopyt z formulára "Mám záujem o ponuku" v detaile nehnuteľnosti
 * a odosiela e-mail dynamicky priamo maklérovi priradenému k danej nehnuteľnosti.
 * KEYS PARTNERS a.s. - https://keyspartners.sk
 * ==============================================================================
 */

export const config = {
  path: ["/api/property-inquiry", "/.netlify/functions/property-inquiry"]
};

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store, no-cache, must-revalidate"
};

function sanitizeText(str) {
  if (!str) return "";
  return String(str)
    .replace(/[<>]/g, "")
    .trim();
}

function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function buildInquiryEmailHtml({ clientName, clientPhone, propertyId, propertyTitle, propertyLocation, propertyPrice, agentName }) {
  const dateFormatted = new Date().toLocaleString("sk-SK", {
    timeZone: "Europe/Bratislava",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  return `<!DOCTYPE html>
<html lang="sk">
<head>
  <meta charset="utf-8">
  <title>Nový záujem o ponuku - Keys Partners</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #05080F; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #E2E8F0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #0F172A; border: 1px solid rgba(181, 137, 32, 0.35); border-radius: 16px; overflow: hidden;">
    <div style="background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%); padding: 24px 28px; border-bottom: 1px solid rgba(181, 137, 32, 0.25); text-align: center;">
      <h1 style="margin: 0; font-size: 20px; font-weight: 800; color: #B58920; letter-spacing: 2px;">KEYS PARTNERS</h1>
      <p style="margin: 6px 0 0; font-size: 13px; color: #94A3B8; text-transform: uppercase;">Nový dopyt z detailu nehnuteľnosti</p>
    </div>
    <div style="padding: 28px;">
      <p style="margin: 0 0 18px; font-size: 15px; color: #F8FAFC;">
        Dobrý deň${agentName ? ` (${agentName})` : ""},<br>klient prejavil záujem o vašu nehnuteľnosť na webe Keys Partners:
      </p>
      <div style="background-color: #1E293B; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
        <div style="margin-bottom: 12px;">
          <span style="font-size: 11px; text-transform: uppercase; color: #94A3B8; font-weight: bold;">Meno záujemcu:</span>
          <div style="font-size: 17px; font-weight: bold; color: #FFFFFF; margin-top: 2px;">${clientName}</div>
        </div>
        <div style="margin-bottom: 12px;">
          <span style="font-size: 11px; text-transform: uppercase; color: #94A3B8; font-weight: bold;">Telefón:</span>
          <div style="font-size: 17px; font-weight: bold; color: #B58920; margin-top: 2px;"><a href="tel:${clientPhone}" style="color: #B58920; text-decoration: none;">${clientPhone}</a></div>
        </div>
        <hr style="border: none; border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 14px 0;">
        <div style="margin-bottom: 8px;">
          <span style="font-size: 11px; text-transform: uppercase; color: #94A3B8; font-weight: bold;">Nehnuteľnosť:</span>
          <div style="font-size: 15px; font-weight: bold; color: #FFFFFF; margin-top: 2px;">${propertyTitle}</div>
        </div>
        <div style="font-size: 13px; color: #CBD5E1; margin-bottom: 4px;"><strong>ID ponuky:</strong> ${propertyId}</div>
        <div style="font-size: 13px; color: #CBD5E1; margin-bottom: 4px;"><strong>Lokalita:</strong> ${propertyLocation || "-"}</div>
        <div style="font-size: 13px; color: #CBD5E1; margin-bottom: 8px;"><strong>Cena:</strong> ${propertyPrice || "-"}</div>
        <div style="font-size: 11px; color: #64748B;">Doručené dňa: ${dateFormatted}</div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

function buildInquiryEmailText({ clientName, clientPhone, propertyId, propertyTitle, propertyLocation, propertyPrice, agentName }) {
  return `Nový záujem o ponuku – Keys Partners

Maklér: ${agentName || "-"}
Meno záujemcu: ${clientName}
Telefón záujemcu: ${clientPhone}

Nehnuteľnosť: ${propertyTitle}
ID ponuky: ${propertyId}
Lokalita: ${propertyLocation || "-"}
Cena: ${propertyPrice || "-"}`;
}

export default async (req) => {
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

  const clientName = sanitizeText(body.clientName || body.name);
  const clientPhone = sanitizeText(body.clientPhone || body.phone);
  const propertyId = sanitizeText(body.propertyId || body.propId || "-");
  const propertyTitle = sanitizeText(body.propertyTitle || body.title || "Nehnuteľnosť z ponuky Keys Partners");
  const propertyLocation = sanitizeText(body.propertyLocation || body.location || "-");
  const propertyPrice = sanitizeText(body.propertyPrice || body.price || "-");
  const agentName = sanitizeText(body.agentName || "");
  const rawAgentEmail = sanitizeText(body.agentEmail || "");

  if (!clientName || !clientPhone) {
    return new Response(JSON.stringify({ success: false, error: "Prosím, vyplňte vaše meno a telefónne číslo." }), {
      status: 400,
      headers: corsHeaders
    });
  }

  // Dynamický e-mail makléra priradeného k nehnuteľnosti (fallback na branislav_horvat@keyspartners.sk iba ak nehnuteľnosť nemá e-mail)
  const recipientEmail = isValidEmail(rawAgentEmail)
    ? rawAgentEmail.toLowerCase()
    : "branislav_horvat@keyspartners.sk";

  const subject = `Nový záujem o ponuku (${propertyId}): ${propertyTitle} – Keys Partners`;
  const htmlContent = buildInquiryEmailHtml({
    clientName,
    clientPhone,
    propertyId,
    propertyTitle,
    propertyLocation,
    propertyPrice,
    agentName
  });
  const textContent = buildInquiryEmailText({
    clientName,
    clientPhone,
    propertyId,
    propertyTitle,
    propertyLocation,
    propertyPrice,
    agentName
  });

  console.log(`[PROPERTY-INQUIRY] Odosielam dopyt pre ponuku ${propertyId} (${propertyTitle}) priamo maklérovi: ${agentName} <${recipientEmail}>`);

  let emailSent = false;
  let emailProvider = null;
  let emailError = null;

  // 1. Ak je nastavený RESEND_API_KEY
  if (process.env.RESEND_API_KEY) {
    emailProvider = "resend";
    try {
      const fromEmail = (process.env.REVIEW_EMAIL_FROM || "Keys Partners <onboarding@resend.dev>").trim();
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY.trim()}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipientEmail],
          subject,
          html: htmlContent,
          text: textContent
        })
      });
      if (res.ok) {
        emailSent = true;
      } else {
        emailError = `Resend HTTP ${res.status}: ${await res.text()}`;
        console.error("[PROPERTY-INQUIRY] Resend chyba:", emailError);
      }
    } catch (e) {
      emailError = e.message;
      console.error("[PROPERTY-INQUIRY] Resend výnimka:", e.message);
    }
  } else if (process.env.BREVO_API_KEY || process.env.SENDINBLUE_API_KEY) {
    // 2. Ak je nastavený BREVO_API_KEY
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
          sender: { name: "Keys Partners Web", email: process.env.BREVO_SENDER_EMAIL || "info@keyspartners.sk" },
          to: [{ email: recipientEmail, name: agentName || "Maklér Keys Partners" }],
          subject,
          htmlContent,
          textContent
        })
      });
      if (res.ok) {
        emailSent = true;
      } else {
        emailError = `Brevo HTTP ${res.status}: ${await res.text()}`;
        console.error("[PROPERTY-INQUIRY] Brevo chyba:", emailError);
      }
    } catch (e) {
      emailError = e.message;
      console.error("[PROPERTY-INQUIRY] Brevo výnimka:", e.message);
    }
  } else if (process.env.SENDGRID_API_KEY) {
    // 3. Ak je nastavený SENDGRID_API_KEY
    emailProvider = "sendgrid";
    try {
      const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.SENDGRID_API_KEY.trim()}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: recipientEmail, name: agentName || "Maklér Keys Partners" }] }],
          from: { email: process.env.SENDGRID_FROM || "info@keyspartners.sk", name: "Keys Partners Web" },
          subject,
          content: [
            { type: "text/plain", value: textContent },
            { type: "text/html", value: htmlContent }
          ]
        })
      });
      if (res.ok) {
        emailSent = true;
      } else {
        emailError = `SendGrid HTTP ${res.status}: ${await res.text()}`;
        console.error("[PROPERTY-INQUIRY] SendGrid chyba:", emailError);
      }
    } catch (e) {
      emailError = e.message;
      console.error("[PROPERTY-INQUIRY] SendGrid výnimka:", e.message);
    }
  }

  // 4. Ak nebol použitý externý SMTP kľúč, pokúsime sa odoslať cez FormSubmit AJAX API priamo na dynamický e-mail makléra
  if (!emailSent) {
    emailProvider = "formsubmit";
    try {
      const fsRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Origin": "https://keyspartners.sk",
          "Referer": "https://keyspartners.sk/"
        },
        body: JSON.stringify({
          _subject: subject,
          "Meno záujemcu": clientName,
          "Telefón záujemcu": clientPhone,
          "Nehnuteľnosť": propertyTitle,
          "ID ponuky": propertyId,
          "Lokalita": propertyLocation,
          "Cena": propertyPrice,
          "Zodpovedný maklér": `${agentName} (${recipientEmail})`
        })
      });
      if (fsRes.ok) {
        const fsData = await fsRes.json().catch(() => ({}));
        if (fsData && (fsData.success === "true" || fsData.success === true)) {
          emailSent = true;
        }
      }
    } catch (e) {
      emailError = e.message;
    }
  }

  return new Response(JSON.stringify({
    success: true,
    emailSent,
    emailProvider,
    recipientEmail,
    agentName,
    propertyId,
    emailError
  }), {
    status: 200,
    headers: corsHeaders
  });
};
