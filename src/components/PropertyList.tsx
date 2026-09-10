import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Home, Building2, Trees, Landmark } from 'lucide-react';
import { DetailedProperty, INITIAL_PROPERTIES } from '../lib/propertyRepository';
import { PropertyCard } from './PropertyCard';

interface PropertyListProps {
  initialProperties?: DetailedProperty[];
  onSelectProperty?: (property: DetailedProperty) => void;
}

export const PropertyList: React.FC<PropertyListProps> = ({
  initialProperties = INITIAL_PROPERTIES,
  onSelectProperty,
}) => {
  const [dealFilter, setDealFilter] = useState<'all' | 'sale' | 'rent'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Kategórie nehnuteľností
  const categories = [
    { id: 'all', label: 'Všetky ponuky', icon: Home },
    { id: 'flat', label: 'Byty', icon: Building2 },
    { id: 'house', label: 'Domy', icon: Home },
    { id: 'land', label: 'Pozemky', icon: Trees },
    { id: 'commercial', label: 'Komerčné', icon: Landmark },
  ];

  // Filtrovanie nehnuteľností
  const filteredProperties = useMemo(() => {
    return initialProperties.filter((prop) => {
      // 1. Filter predaj / prenájom
      if (dealFilter !== 'all' && prop.transactionType !== dealFilter) {
        return false;
      }

      // 2. Filter kategória
      if (categoryFilter !== 'all' && prop.propertyType !== categoryFilter) {
        return false;
      }

      // 3. Textové vyhľadávanie v lokalite a názve
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = prop.title.toLowerCase().includes(q);
        const matchCity = prop.location.city.toLowerCase().includes(q);
        const matchDistrict = prop.location.district?.toLowerCase().includes(q) || false;
        const matchStreet = prop.location.street?.toLowerCase().includes(q) || false;
        if (!matchTitle && !matchCity && !matchDistrict && !matchStreet) {
          return false;
        }
      }

      return true;
    });
  }, [initialProperties, dealFilter, categoryFilter, searchQuery]);

  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hlavička sekcie katalógu */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Aktuálne z Realsoftu
            </span>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Portfólio našich nehnuteľností
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Exkluzívne stavebné pozemky, byty a overené investičné príležitosti
            </p>
          </div>

          {/* Prepínač: Všetko / Predaj / Prenájom */}
          <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1 dark:border-slate-800 dark:bg-slate-900 self-start md:self-auto">
            <button
              onClick={() => setDealFilter('all')}
              className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                dealFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Všetko
            </button>
            <button
              onClick={() => setDealFilter('sale')}
              className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                dealFilter === 'sale'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Na predaj
            </button>
            <button
              onClick={() => setDealFilter('rent')}
              className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                dealFilter === 'rent'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Na prenájom
            </button>
          </div>
        </div>

        {/* Filtračný panel: Vyhľadávanie a Kategórie */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Tlačidlá kategórií */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = categoryFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? 'border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-400'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Vyhľadávací input */}
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Hľadať mesto, ulicu alebo lokalitu..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-4 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Mriežka nehnuteľností */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onSelectProperty}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-800">
            <SlidersHorizontal className="h-10 w-10 text-slate-400" />
            <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
              Nenašli sa žiadne nehnuteľnosti
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Skúste upraviť parametre filtra alebo zmazať vyhľadávací dopyt.
            </p>
            <button
              onClick={() => {
                setDealFilter('all');
                setCategoryFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-amber-700"
            >
              Resetovať filtre
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyList;
