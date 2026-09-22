import React from 'react';
import { MapPin, Maximize2, BedDouble, Layers, ArrowRight } from 'lucide-react';
import { DetailedProperty } from '../lib/propertyRepository';

interface PropertyCardProps {
  property: DetailedProperty;
  onSelect?: (property: DetailedProperty) => void;
}

const isAgentPhoto = (url?: string) => {
  if (!url) return false;
  const lower = url.toLowerCase();
  return (
    lower.includes('duda') ||
    lower.includes('brano') ||
    lower.includes('agent') ||
    lower.includes('broker') ||
    lower.includes('avatar') ||
    lower.includes('profile') ||
    lower.includes('makler') ||
    lower.includes('user_photo') ||
    lower.endsWith('duda.jpg') ||
    lower.endsWith('brano.jpg')
  );
};

const NEUTRAL_PROPERTY_PLACEHOLDER =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  const isRent = property.transactionType === 'rent';
  const mainImage =
    (property.images && property.images.find((img) => img && !isAgentPhoto(img))) ||
    (property.image && !isAgentPhoto(property.image) ? property.image : NEUTRAL_PROPERTY_PLACEHOLDER);
  
  const formattedPrice = isRent
    ? `${property.price.toLocaleString('sk-SK')} € / mesiac`
    : `${property.price.toLocaleString('sk-SK')} €`;

  const propertyTypeLabel = {
    flat: 'Byt',
    house: 'Rodinný dom',
    land: 'Stavebný pozemok',
    commercial: 'Komerčný priestor',
    other: 'Nehnuteľnosť',
  }[property.propertyType] || 'Nehnuteľnosť';

  return (
    <div
      onClick={() => onSelect && onSelect(property)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900 cursor-pointer"
    >
      {/* Obrázok a štítky */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={mainImage}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Gradientový overlay pre čitateľnosť štítkov */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Štítky: Typ transakcie a stav */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-sm ${
              isRent ? 'bg-blue-400' : 'bg-amber-400'
            }`}
          >
            {isRent ? 'Na prenájom' : 'Na predaj'}
          </span>
          {property.status === 'reserved' && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
              Rezervované
            </span>
          )}
        </div>

        {/* Cenovka */}
        <div className="absolute bottom-3 left-3 rounded-lg bg-slate-950/80 px-3 py-1.5 backdrop-blur-md">
          <span className="font-heading text-lg font-extrabold text-white sm:text-xl">
            {formattedPrice}
          </span>
        </div>
      </div>

      {/* Telo karty */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            {propertyTypeLabel}
          </span>
          <span className="text-xs text-slate-400">
            ID: {property.externalId}
          </span>
        </div>

        <h3 className="line-clamp-2 text-base font-bold text-slate-900 transition-colors group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-400">
          {property.title}
        </h3>

        <div className="mt-2.5 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <MapPin className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <span className="truncate">
            {property.location.city}
            {property.location.district ? `, ${property.location.district}` : ''}
          </span>
        </div>

        {/* Základné technické parametre */}
        <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-3 text-xs font-medium text-slate-600 dark:border-slate-800 dark:text-slate-300">
          {property.area && (
            <div className="flex items-center gap-1.5">
              <Maximize2 className="h-3.5 w-3.5 text-slate-400" />
              <span>{property.area} m²</span>
            </div>
          )}

          {property.rooms && (
            <div className="flex items-center gap-1.5">
              <BedDouble className="h-3.5 w-3.5 text-slate-400" />
              <span>{property.rooms} izby</span>
            </div>
          )}

          {property.floor && (
            <div className="flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-slate-400" />
              <span>{property.floor} p.</span>
            </div>
          )}
        </div>

        {/* CTA preklik */}
        <div className="mt-4 flex items-center justify-end pt-2 text-xs font-bold text-amber-600 group-hover:underline dark:text-amber-400">
          <span>Zobraziť detail ponuky</span>
          <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
