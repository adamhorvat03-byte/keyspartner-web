/**
 * ==============================================================================
 * Express.js / Node.js Router: POST /api/realsoft-webhook
 * Oficiálna integrácia pre Admin Nehnuteľnosti / Realsoft (United Classifieds)
 * KEYS PARTNERS a.s.
 * ==============================================================================
 */

import { Router, Request, Response } from 'express';
import {
  verifyRealsoftAuth,
  processRealsoftWebhook,
  logIncomingPayload,
} from '../lib/realsoftService';
import { RealsoftWebhookPayload } from '../types/realsoft';

export const realsoftWebhookRouter = Router();

/**
 * Middleware pre overenie API kľúča alebo HTTP Basic Auth
 */
function authenticateAdminNehnutelnosti(req: Request, res: Response, next: () => void) {
  const authHeader =
    (req.headers['authorization'] as string) ||
    (req.headers['x-api-key'] as string) ||
    (req.headers['x-realsoft-token'] as string);

  const queryApiKey =
    (req.query.apiKey as string) ||
    (req.query.api_key as string) ||
    (req.query.secret as string);

  const body = req.body || {};
  const bodyApiKey = body.apiKey || body.api_key || body.secret_key || body.token;
  const bodyUser = body.Meno || body.username || body.user;
  const bodyPass = body.Heslo || body.password || body.pass;

  const isAuthorized = verifyRealsoftAuth({
    apiKey: (queryApiKey || bodyApiKey) ? String(queryApiKey || bodyApiKey) : null,
    authHeader,
    basicUser: bodyUser ? String(bodyUser) : null,
    basicPass: bodyPass ? String(bodyPass) : null,
  });

  if (!isAuthorized) {
    const timestamp = new Date().toISOString();
    console.warn(
      `[Realsoft Webhook - ${timestamp}] 401 UNAUTHORIZED: Neplatný kľúč alebo Basic Auth z IP: ${req.ip}`
    );
    return res.status(401).json({
      status: 'error',
      message: 'Neplatný alebo chýbajúci autorizačný kľúč.',
      timestamp,
    });
  }

  next();
}

/**
 * POST /api/realsoft-webhook
 */
realsoftWebhookRouter.post(
  '/realsoft-webhook',
  authenticateAdminNehnutelnosti,
  async (req: Request, res: Response) => {
    const timestamp = new Date().toISOString();

    try {
      const payload: RealsoftWebhookPayload = req.body;

      if (!payload || typeof payload !== 'object') {
        return res.status(400).json({
          status: 'error',
          message: 'Neplatný alebo prázdny JSON payload.',
          timestamp,
        });
      }

      // Dočasné logovanie celého prichádzajúceho objektu do konzoly pre ladenie
      logIncomingPayload(payload);

      // Spracovanie webhooku
      const result = await processRealsoftWebhook(payload);

      if (result.status === 'error') {
        return res.status(400).json(result);
      }

      // Oficiálny formát odpovede pre Admin Nehnuteľnosti
      return res.status(200).json({
        status: 'ok',
        message: 'Import successful',
      });
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Neznáma systémová chyba';
      console.error(`[Realsoft Webhook - ${timestamp}] 500 SERVER ERROR:`, error);

      return res.status(500).json({
        status: 'error',
        message: 'Interná chyba servera pri spracovaní webhooku.',
        error: errorMsg,
        timestamp,
      });
    }
  }
);

/**
 * GET /api/realsoft-webhook (Healthcheck)
 */
realsoftWebhookRouter.get('/realsoft-webhook', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'online',
    site: 'https://keyspartner.netlify.app',
    service: 'KEYS PARTNERS a.s. - Admin Nehnuteľnosti / Realsoft Webhook API (Express)',
    endpoint: '/api/realsoft-webhook',
    webhookUrl: 'https://keyspartner.netlify.app/api/realsoft-webhook',
    acceptedMethod: 'POST',
    responseFormat: { status: 'ok', message: 'Import successful' },
    timestamp: new Date().toISOString(),
  });
});

export default realsoftWebhookRouter;
