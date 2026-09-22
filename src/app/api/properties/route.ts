/**
 * ==============================================================================
 * Next.js App Router: GET /api/properties
 * Verejné API pre zoznam nehnuteľností s filtrovaním
 * KEYS PARTNERS a.s.
 * ==============================================================================
 */

import { NextRequest, NextResponse } from 'next/server';
import { getProperties, PropertyFilters } from '../../../lib/propertyRepository';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const filters: PropertyFilters = {
      deal: searchParams.get('deal') || searchParams.get('transactionType') || undefined,
      category: searchParams.get('category') || searchParams.get('propertyType') || undefined,
      location: searchParams.get('location') || searchParams.get('query') || undefined,
      status: searchParams.get('status') || 'active',
      minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
      maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    };

    const properties = await getProperties(filters);

    return NextResponse.json({
      status: 'success',
      count: properties.length,
      filters,
      data: properties,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Chyba servera pri načítaní nehnuteľností.';
    return NextResponse.json(
      {
        status: 'error',
        message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
