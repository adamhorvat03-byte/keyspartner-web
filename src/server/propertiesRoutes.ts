/**
 * ==============================================================================
 * Express.js Router: Verejné endpointy pre nehnuteľnosti
 * KEYS PARTNERS a.s.
 * ==============================================================================
 * Použitie v Express aplikácii:
 *   import { propertiesRouter } from './server/propertiesRoutes';
 *   app.use('/api', propertiesRouter);
 * ==============================================================================
 */

import { Router, Request, Response } from 'express';
import { getProperties, getPropertyById, PropertyFilters } from '../lib/propertyRepository';

export const propertiesRouter = Router();

/**
 * GET /api/properties - Zoznam a filtrovanie aktívnych nehnuteľností
 */
propertiesRouter.get('/properties', async (req: Request, res: Response) => {
  try {
    const filters: PropertyFilters = {
      deal: (req.query.deal as string) || (req.query.transactionType as string) || undefined,
      category: (req.query.category as string) || (req.query.propertyType as string) || undefined,
      location: (req.query.location as string) || (req.query.query as string) || undefined,
      status: (req.query.status as string) || 'active',
      minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
      maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
    };

    const properties = await getProperties(filters);

    return res.status(200).json({
      status: 'success',
      count: properties.length,
      filters,
      data: properties,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Chyba servera pri načítaní nehnuteľností.';
    return res.status(500).json({
      status: 'error',
      message,
      timestamp: new Date().toISOString(),
    });
  }
});

/**
 * GET /api/properties/:id - Detail konkrétnej nehnuteľnosti
 */
propertiesRouter.get('/properties/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: 'error',
        message: 'Chýba parameter ID nehnuteľnosti.',
      });
    }

    const property = await getPropertyById(id);

    if (!property) {
      return res.status(404).json({
        status: 'error',
        message: `Nehnuteľnosť s ID "${id}" sa nenašla.`,
        timestamp: new Date().toISOString(),
      });
    }

    return res.status(200).json({
      status: 'success',
      data: property,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Chyba servera pri načítaní detailu.';
    return res.status(500).json({
      status: 'error',
      message,
      timestamp: new Date().toISOString(),
    });
  }
});

export default propertiesRouter;
