/**
 * ==============================================================================
 * Next.js App Router: GET /api/properties/[id]
 * Verejné API pre detail konkrétnej nehnuteľnosti
 * KEYS & PARTNERS a.s.
 * ==============================================================================
 */

import { NextRequest, NextResponse } from 'next/server';
import { getPropertyById } from '../../../../lib/propertyRepository';

interface RouteContext {
  params: Promise<{ id: string }> | { id: string };
}

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const params = await Promise.resolve(context.params);
    const id = params?.id;

    if (!id) {
      return NextResponse.json(
        { status: 'error', message: 'Chýba parameter ID nehnuteľnosti.' },
        { status: 400 }
      );
    }

    const property = await getPropertyById(id);

    if (!property) {
      return NextResponse.json(
        {
          status: 'error',
          message: `Nehnuteľnosť s identifikátorom "${id}" sa nenašla.`,
          timestamp: new Date().toISOString(),
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: 'success',
      data: property,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Chyba servera pri načítaní detailu ponuky.';
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
