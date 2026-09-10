/**
 * ==============================================================================
 * Next.js App Router API Route Handler: POST /api/realsoft-webhook
 * Oficiálna integrácia pre Admin Nehnuteľnosti / Realsoft (United Classifieds)
 * KEYS & PARTNERS a.s.
 * ==============================================================================
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  verifyRealsoftAuth,
  processRealsoftWebhook,
  logIncomingPayload,
} from '../../../lib/realsoftService';
import { RealsoftWebhookPayload } from '../../../types/realsoft';

/**
 * Voliteľná integrácia s Prisma ORM
 */
async function getDatabaseHandler() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();

    return {
      upsertProperty: async (dto: any) => {
        return await prisma.property.upsert({
          where: { externalId: dto.externalId },
          update: {
            title: dto.title,
            description: dto.description,
            price: dto.price,
            currency: dto.currency || 'EUR',
            transactionType: dto.transactionType.toUpperCase(),
            propertyType: dto.propertyType.toUpperCase(),
            status: dto.status ? dto.status.toUpperCase() : 'ACTIVE',
            locationCity: dto.location.city,
            locationDistrict: dto.location.district,
            locationStreet: dto.location.street,
            formattedAddress: dto.location.formattedAddress,
            gpsLat: dto.location.gpsLat,
            gpsLng: dto.location.gpsLng,
            area: dto.area,
            areaLand: dto.areaLand,
            images: dto.images,
            agentName: dto.agent?.name,
            agentPhone: dto.agent?.phone,
            agentEmail: dto.agent?.email,
            rawPayload: dto.rawPayload,
            updatedAt: new Date(),
          },
          create: {
            externalId: dto.externalId,
            title: dto.title,
            description: dto.description,
            price: dto.price,
            currency: dto.currency || 'EUR',
            transactionType: dto.transactionType.toUpperCase(),
            propertyType: dto.propertyType.toUpperCase(),
            status: dto.status ? dto.status.toUpperCase() : 'ACTIVE',
            locationCity: dto.location.city,
            locationDistrict: dto.location.district,
            locationStreet: dto.location.street,
            formattedAddress: dto.location.formattedAddress,
            gpsLat: dto.location.gpsLat,
            gpsLng: dto.location.gpsLng,
            area: dto.area,
            areaLand: dto.areaLand,
            images: dto.images,
            agentName: dto.agent?.name,
            agentPhone: dto.agent?.phone,
            agentEmail: dto.agent?.email,
            rawPayload: dto.rawPayload,
          },
        });
      },
      deleteProperty: async (externalId: string) => {
        return await prisma.property.updateMany({
          where: { externalId },
          data: {
            status: 'INACTIVE',
            updatedAt: new Date(),
          },
        });
      },
    };
  } catch (_err) {
    return undefined;
  }
}

/**
 * POST /api/realsoft-webhook
 */
export async function POST(request: NextRequest) {
  const timestamp = new Date().toISOString();

  try {
    // 1. Získanie JSON tela požiadavky
    let payload: RealsoftWebhookPayload;
    try {
      payload = await request.json();
    } catch (_jsonErr) {
      console.error(`[Realsoft Webhook - ${timestamp}] 400 BAD REQUEST: Neplatný JSON.`);
      return NextResponse.json(
        { status: 'error', message: 'Neplatný JSON formát.', timestamp },
        { status: 400 }
      );
    }

    // 2. Dočasné logovanie celého payloadu do konzoly servera pre ladenie
    logIncomingPayload(payload);

    // 3. Extrakcia autentifikačných údajov
    // A) HTTP hlavičky: x-api-key, authorization, x-realsoft-token
    const authHeader =
      request.headers.get('authorization') ||
      request.headers.get('x-api-key') ||
      request.headers.get('x-realsoft-token');

    // B) Query parametre: ?apiKey=... alebo ?secret=...
    const { searchParams } = new URL(request.url);
    const queryApiKey = searchParams.get('apiKey') || searchParams.get('api_key') || searchParams.get('secret');

    // C) Telo požiadavky: apiKey, api_key, secret_key, token
    const bodyApiKey = payload.apiKey || payload.api_key || payload.secret_key || payload.token;

    // D) Basic Auth z tela: Meno, Heslo, username, password
    const bodyUser = payload.Meno || payload.username;
    const bodyPass = payload.Heslo || payload.password;

    const isAuthorized = verifyRealsoftAuth({
      apiKey: (queryApiKey || bodyApiKey) ? String(queryApiKey || bodyApiKey) : null,
      authHeader,
      basicUser: bodyUser ? String(bodyUser) : null,
      basicPass: bodyPass ? String(bodyPass) : null,
    });

    if (!isAuthorized) {
      console.warn(
        `[Realsoft Webhook - ${timestamp}] 401 UNAUTHORIZED: Neplatný API kľúč alebo Basic Auth.`
      );
      return NextResponse.json(
        {
          status: 'error',
          message: 'Neplatný alebo chýbajúci autorizačný kľúč.',
          timestamp,
        },
        { status: 401 }
      );
    }

    // 4. Spracovanie dát
    const dbHandler = await getDatabaseHandler();
    const result = await processRealsoftWebhook(payload, dbHandler);

    if (result.status === 'error') {
      return NextResponse.json(result, { status: 400 });
    }

    // 5. Oficiálna odpoveď pre Admin Nehnuteľnosti (HTTP 200 OK)
    return NextResponse.json(
      {
        status: 'ok',
        message: 'Import successful',
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Neznáma systémová chyba';
    console.error(`[Realsoft Webhook - ${timestamp}] 500 SERVER ERROR:`, error);

    return NextResponse.json(
      {
        status: 'error',
        message: 'Interná chyba servera pri spracovaní webhooku.',
        error: errorMsg,
        timestamp,
      },
      { status: 500 }
    );
  }
}

/**
 * GET metóda pre rýchly health-check
 */
export async function GET() {
  return NextResponse.json({
    status: 'online',
    site: 'https://keyspartner.netlify.app',
    service: 'KEYS & PARTNERS a.s. - Admin Nehnuteľnosti / Realsoft Webhook API',
    endpoint: '/api/realsoft-webhook',
    webhookUrl: 'https://keyspartner.netlify.app/api/realsoft-webhook',
    acceptedMethod: 'POST',
    authMethods: ['x-api-key', 'Authorization: Bearer', 'Authorization: Basic', 'apiKey body parameter'],
    timestamp: new Date().toISOString(),
  });
}
