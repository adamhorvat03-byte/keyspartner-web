/**
 * ==============================================================================
 * Doménové typy nehnuteľnosti pre KEYS & PARTNERS a.s.
 * ==============================================================================
 */

export type TransactionType = 'sale' | 'rent';

export type PropertyType = 'flat' | 'house' | 'land' | 'commercial' | 'other';

export type PropertyStatus = 'active' | 'reserved' | 'sold' | 'inactive';

export interface PropertyLocation {
  city: string;
  district?: string;
  street?: string;
  formattedAddress?: string;
  gpsLat?: number;
  gpsLng?: number;
}

export interface PropertyAgent {
  name?: string;
  phone?: string;
  email?: string;
}

export interface Property {
  id: string;
  externalId: string; // Unikátne ID zákazky v Realsoft
  title: string;
  description?: string;
  price: number;
  currency: string;
  transactionType: TransactionType;
  propertyType: PropertyType;
  status: PropertyStatus;
  location: PropertyLocation;
  area?: number; // Úžitková plocha v m2
  areaLand?: number; // Výmera pozemku v m2
  images: string[]; // Pole URL adries fotografií
  agent?: PropertyAgent;
  rawPayload?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface UpsertPropertyDTO {
  externalId: string;
  title: string;
  description?: string;
  price: number;
  currency?: string;
  transactionType: TransactionType;
  propertyType: PropertyType;
  status?: PropertyStatus;
  location: PropertyLocation;
  area?: number;
  areaLand?: number;
  images: string[];
  agent?: PropertyAgent;
  rawPayload?: Record<string, unknown>;
}
