/**
 * ==============================================================================
 * Typy prichádzajúceho payloadu z Realsoft / Admin Nehnuteľnosti (United Classifieds)
 * ==============================================================================
 */

export type RealsoftAction =
  | 'create'
  | 'update'
  | 'upsert'
  | 'delete'
  | 'deactivate'
  | 'status_change';

export interface RealsoftAgentPayload {
  name?: string;
  phone?: string;
  email?: string;
  photo?: string;
}

export interface RealsoftLocationPayload {
  city?: string;
  district?: string;
  street?: string;
  formatted_address?: string;
  zip?: string;
  lat?: number | string;
  lng?: number | string;
}

export interface RealsoftPropertyData {
  // Identifikácia
  id?: string | number;
  external_id?: string | number;
  code?: string;
  
  // Texty
  title?: string;
  name?: string;
  description?: string;
  text?: string;
  
  // Cena
  price?: number | string;
  currency?: string;
  price_type?: string;
  
  // Transakcia a typ
  transaction_type?: string; // 'sale' | 'rent' | 'predaj' | 'prenajom'
  deal_type?: string;
  property_type?: string; // 'byt' | 'dom' | 'pozemok' | 'flat' | 'house' | 'land'
  category?: string;
  
  // Stav inzerátu
  status?: string; // 'active' | 'reserved' | 'sold' | 'deleted' | 'inactive'
  is_active?: boolean;
  
  // Lokalita
  location?: RealsoftLocationPayload | string;
  city?: string;
  district?: string;
  street?: string;
  lat?: number | string;
  lng?: number | string;
  
  // Rozlohy
  area?: number | string;
  usable_area?: number | string;
  living_area?: number | string;
  land_area?: number | string;
  
  // Fotografie
  images?: Array<string | { url: string; order?: number; title?: string }>;
  photos?: Array<string | { url: string; order?: number; title?: string }>;
  
  // Maklér
  agent?: RealsoftAgentPayload;
  broker?: RealsoftAgentPayload;
  
  // Čas
  updated_at?: string;
}

export interface RealsoftWebhookPayload {
  action?: RealsoftAction | string;
  
  // Autentifikácia v tele požiadavky (Admin Nehnuteľnosti)
  apiKey?: string;
  api_key?: string;
  secret_key?: string;
  token?: string;
  
  // Voliteľné Basic Auth polia v tele
  Meno?: string;
  Heslo?: string;
  username?: string;
  password?: string;
  
  timestamp?: string | number;
  
  // Samotné dáta môžu byť zabalené v objekte 'property', 'data', 'listing' alebo priamo v koreni
  property?: RealsoftPropertyData;
  data?: RealsoftPropertyData;
  listing?: RealsoftPropertyData;
  
  // Fallback ak Admin Nehnuteľnosti posiela polia priamo v koreni
  [key: string]: unknown;
}

export interface RealsoftWebhookSuccessResponse {
  status: 'ok';
  message: 'Import successful';
  external_id?: string;
  action?: 'upsert' | 'delete' | 'ignored';
  timestamp?: string;
}

export interface RealsoftWebhookErrorResponse {
  status: 'error';
  message: string;
  error?: string;
  timestamp?: string;
}

export type RealsoftWebhookResponse =
  | RealsoftWebhookSuccessResponse
  | RealsoftWebhookErrorResponse;
