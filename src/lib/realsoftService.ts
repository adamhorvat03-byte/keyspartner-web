/**
 * ==============================================================================
 * Realsoft / Admin Nehnuteľnosti Service: Biznis logika
 * KEYS PARTNERS a.s.
 * ==============================================================================
 */

import {
  RealsoftWebhookPayload,
  RealsoftPropertyData,
  RealsoftWebhookResponse,
} from '../types/realsoft';
import {
  UpsertPropertyDTO,
  TransactionType,
  PropertyType,
  PropertyStatus,
} from '../types/property';

export interface AuthInspectionInput {
  apiKey?: string | null;
  authHeader?: string | null;
  basicUser?: string | null;
  basicPass?: string | null;
}

/**
 * 1. Overenie autentifikácie (API Kľúč alebo HTTP Basic Auth)
 * Zodpovedá oficiálnemu rozhraniu Admin Nehnuteľnosti (United Classifieds)
 */
export function verifyRealsoftAuth(input: AuthInspectionInput): boolean {
  const configuredApiKey =
    process.env.REALSOFT_API_KEY || process.env.REALSOFT_SECRET_KEY;
  const configuredUser = process.env.REALSOFT_USER;
  const configuredPass = process.env.REALSOFT_PASS;

  // --- A. KONTROLA CEZ API KĽÚČ ---
  let candidateApiKey = input.apiKey ? input.apiKey.trim() : null;

  if (!candidateApiKey && input.authHeader) {
    const trimmedHeader = input.authHeader.trim();
    if (trimmedHeader.toLowerCase().startsWith('bearer ')) {
      candidateApiKey = trimmedHeader.substring(7).trim();
    } else if (!trimmedHeader.toLowerCase().startsWith('basic ')) {
      // Ak hlavička nie je 'Basic', môžeme ju použiť priamo ako token (napr. x-api-key)
      candidateApiKey = trimmedHeader;
    }
  }

  if (configuredApiKey && candidateApiKey && candidateApiKey === configuredApiKey.trim()) {
    return true;
  }

  // --- B. KONTROLA CEZ HTTP BASIC AUTH ---
  let candidateUser = input.basicUser ? input.basicUser.trim() : null;
  let candidatePass = input.basicPass ? input.basicPass.trim() : null;

  if (input.authHeader && input.authHeader.trim().toLowerCase().startsWith('basic ')) {
    try {
      const base64Credentials = input.authHeader.trim().substring(6).trim();
      const decoded = Buffer.from(base64Credentials, 'base64').toString('utf-8');
      const colonIndex = decoded.indexOf(':');
      if (colonIndex !== -1) {
        candidateUser = decoded.substring(0, colonIndex);
        candidatePass = decoded.substring(colonIndex + 1);
      }
    } catch (_decodeErr) {
      console.warn('[Realsoft Auth] Neplatný formát Base64 v Authorization hlavičke.');
    }
  }

  if (configuredUser && configuredPass && candidateUser && candidatePass) {
    if (candidateUser === configuredUser.trim() && candidatePass === configuredPass.trim()) {
      return true;
    }
  }

  // Ak nie sú nastavené žiadne .env premenné
  if (!configuredApiKey && (!configuredUser || !configuredPass)) {
    console.warn(
      '[Realsoft Auth] VAROVANIE: V .env nie je definovaný REALSOFT_API_KEY ani REALSOFT_USER/REALSOFT_PASS!'
    );
  }

  return false;
}

/**
 * 2. Dočasné detailné logovanie celého payloadu pre ladenie
 */
export function logIncomingPayload(payload: unknown): void {
  const timestamp = new Date().toISOString();
  console.log('\n==============================================================================');
  console.log(`[Admin Nehnuteľnosti / Realsoft] PRICHÁDZAJÚCI PAYLOAD - ${timestamp}`);
  console.log('==============================================================================');
  try {
    console.log(JSON.stringify(payload, null, 2));
  } catch (_err) {
    console.log(payload);
  }
  console.log('==============================================================================\n');
}

/**
 * 3. Normalizácia typu transakcie
 */
function normalizeTransactionType(value?: string): TransactionType {
  if (!value) return 'sale';
  const val = value.toLowerCase().trim();
  if (val.includes('prenaj') || val === 'rent') {
    return 'rent';
  }
  return 'sale';
}

/**
 * 4. Normalizácia kategórie nehnuteľnosti
 */
function normalizePropertyType(value?: string): PropertyType {
  if (!value) return 'other';
  const val = value.toLowerCase().trim();

  if (val.includes('byt') || val === 'flat' || val === 'apartment') {
    return 'flat';
  }
  if (val.includes('dom') || val.includes('vila') || val.includes('chalup') || val === 'house') {
    return 'house';
  }
  if (val.includes('pozem') || val === 'land') {
    return 'land';
  }
  if (
    val.includes('komerc') ||
    val.includes('kancelar') ||
    val.includes('sklad') ||
    val.includes('obchod') ||
    val === 'commercial'
  ) {
    return 'commercial';
  }

  return 'other';
}

/**
 * 5. Normalizácia stavu ponuky
 */
function normalizeStatus(value?: string, isActive?: boolean): PropertyStatus {
  if (isActive === false) return 'inactive';
  if (!value) return 'active';

  const val = value.toLowerCase().trim();
  if (val.includes('rezerv') || val === 'reserved') return 'reserved';
  if (val.includes('predan') || val.includes('prenajat') || val === 'sold') return 'sold';
  if (val.includes('zmazan') || val.includes('neaktiv') || val === 'deleted' || val === 'inactive') {
    return 'inactive';
  }

  return 'active';
}

/**
 * 6. Normalizácia fotografií
 */
function normalizeImages(photos?: unknown): string[] {
  if (!Array.isArray(photos)) return [];

  const result: string[] = [];
  for (const item of photos) {
    if (typeof item === 'string' && item.startsWith('http')) {
      result.push(item);
    } else if (item && typeof item === 'object' && 'url' in item && typeof (item as { url: unknown }).url === 'string') {
      result.push((item as { url: string }).url);
    }
  }
  return result;
}

/**
 * 7. Extrakcia dátového objektu nehnuteľnosti z prichádzajúceho payloadu
 */
export function extractPropertyData(payload: RealsoftWebhookPayload): {
  action: string;
  data: RealsoftPropertyData;
} {
  const action = (payload.action || 'upsert').toString().toLowerCase();

  const data: RealsoftPropertyData =
    payload.property ||
    payload.data ||
    payload.listing ||
    (payload as unknown as RealsoftPropertyData);

  return { action, data };
}

/**
 * 8. Transformácia a očistenie dát do formátu pre databázu (DTO)
 */
export function normalizePropertyData(raw: RealsoftPropertyData): UpsertPropertyDTO {
  const rawId = raw.external_id || raw.id || raw.code;
  if (!rawId) {
    throw new Error('Chýba povinný identifikátor nehnuteľnosti (external_id / id / code).');
  }

  const externalId = String(rawId).trim();
  const title = (raw.title || raw.name || `Nehnuteľnosť ${externalId}`).trim();
  const description = raw.description || raw.text || '';

  // Spracovanie ceny
  let price = 0;
  if (typeof raw.price === 'number') {
    price = raw.price;
  } else if (typeof raw.price === 'string') {
    const parsed = parseFloat(raw.price.replace(/\s+/g, '').replace(',', '.'));
    price = isNaN(parsed) ? 0 : parsed;
  }

  const currency = (raw.currency || 'EUR').toUpperCase();

  // Spracovanie rozlohy
  let area: number | undefined;
  const rawArea = raw.usable_area || raw.area || raw.living_area;
  if (rawArea !== undefined && rawArea !== null) {
    const parsedArea = typeof rawArea === 'number' ? rawArea : parseFloat(String(rawArea).replace(',', '.'));
    if (!isNaN(parsedArea)) area = parsedArea;
  }

  let areaLand: number | undefined;
  if (raw.land_area !== undefined && raw.land_area !== null) {
    const parsedLand = typeof raw.land_area === 'number' ? raw.land_area : parseFloat(String(raw.land_area).replace(',', '.'));
    if (!isNaN(parsedLand)) areaLand = parsedLand;
  }

  // Lokalita
  let city = 'Slovensko';
  let district: string | undefined;
  let street: string | undefined;
  let formattedAddress: string | undefined;
  let gpsLat: number | undefined;
  let gpsLng: number | undefined;

  if (typeof raw.location === 'object' && raw.location !== null) {
    city = raw.location.city || raw.city || city;
    district = raw.location.district || raw.district;
    street = raw.location.street || raw.street;
    formattedAddress = raw.location.formatted_address;
    if (raw.location.lat) gpsLat = Number(raw.location.lat);
    if (raw.location.lng) gpsLng = Number(raw.location.lng);
  } else {
    city = raw.city || (typeof raw.location === 'string' ? raw.location : city);
    district = raw.district;
    street = raw.street;
    if (raw.lat) gpsLat = Number(raw.lat);
    if (raw.lng) gpsLng = Number(raw.lng);
  }

  // Maklér
  const rawAgent = raw.agent || raw.broker;
  const agent = rawAgent
    ? {
        name: rawAgent.name,
        phone: rawAgent.phone,
        email: rawAgent.email,
      }
    : undefined;

  return {
    externalId,
    title,
    description,
    price,
    currency,
    transactionType: normalizeTransactionType(raw.transaction_type || raw.deal_type),
    propertyType: normalizePropertyType(raw.property_type || raw.category),
    status: normalizeStatus(raw.status, raw.is_active),
    location: {
      city,
      district,
      street,
      formattedAddress,
      gpsLat,
      gpsLng,
    },
    area,
    areaLand,
    images: normalizeImages(raw.images || raw.photos),
    agent,
    rawPayload: raw as Record<string, unknown>,
  };
}

/**
 * 9. Hlavný procesor webhooku (s odpoveďou: {"status": "ok", "message": "Import successful"})
 */
export async function processRealsoftWebhook(
  payload: RealsoftWebhookPayload,
  databaseHandler?: {
    upsertProperty: (dto: UpsertPropertyDTO) => Promise<unknown>;
    deleteProperty: (externalId: string) => Promise<unknown>;
  }
): Promise<RealsoftWebhookResponse> {
  const timestamp = new Date().toISOString();

  // Logovanie kompletného objektu pre účely ladenia
  logIncomingPayload(payload);

  try {
    const { action, data } = extractPropertyData(payload);
    const rawExternalId = data.external_id || data.id || data.code;

    if (!rawExternalId) {
      console.error(`[Realsoft Webhook - ${timestamp}] CHYBA: Chýba external_id v požiadavke.`);
      return {
        status: 'error',
        message: 'Neplatný payload: chýba external_id nehnuteľnosti.',
        timestamp,
        error: 'MISSING_EXTERNAL_ID',
      };
    }

    const externalId = String(rawExternalId).trim();

    // Ak ide o zmazanie alebo deaktiváciu zákazky
    const isDeleteAction =
      action === 'delete' ||
      action === 'deactivate' ||
      data.status === 'deleted' ||
      data.status === 'inactive' ||
      data.is_active === false;

    if (isDeleteAction) {
      console.log(`[Realsoft Webhook - ${timestamp}] DEAKTIVÁCIA zákazky: ${externalId}`);

      if (databaseHandler) {
        await databaseHandler.deleteProperty(externalId);
      } else {
        console.log(`[Realsoft Webhook - DB Mock] Zákazka ${externalId} označená ako neaktívna.`);
      }

      return {
        status: 'ok',
        message: 'Import successful',
        external_id: externalId,
        action: 'delete',
        timestamp,
      };
    }

    // Upsert zákazky
    const normalizedData = normalizePropertyData(data);
    console.log(
      `[Realsoft Webhook - ${timestamp}] UPSERT zákazky ${externalId}: "${normalizedData.title}" (${normalizedData.price} ${normalizedData.currency})`
    );

    if (databaseHandler) {
      await databaseHandler.upsertProperty(normalizedData);
    } else {
      console.log(`[Realsoft Webhook - DB Mock] Zákazka ${externalId} úspešne synchronizovaná.`);
    }

    // Oficiálny formát odpovede pre Admin Nehnuteľnosti
    return {
      status: 'ok',
      message: 'Import successful',
      external_id: externalId,
      action: 'upsert',
      timestamp,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Neznáma systémová chyba';
    console.error(`[Realsoft Webhook - ${timestamp}] KRITICKÁ CHYBA:`, error);

    return {
      status: 'error',
      message: 'Chyba pri spracovaní Realsoft webhooku.',
      error: errorMessage,
      timestamp,
    };
  }
}
