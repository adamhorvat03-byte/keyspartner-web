import React, { useState } from 'react';
import { Facebook, Instagram, Menu, X, Key } from 'lucide-react';
import { NavItem, SocialLink } from '../types';

/**
 * ============================================================================
 * Štruktúra SOCIAL_LINKS (Konfigurácia sociálnych sietí)
 * ============================================================================
 * Pre pridanie novej sociálnej siete (napr. LinkedIn, TikTok, YouTube):
 * 1. Importujte príslušnú ikonu z `lucide-react` (napr. `Linkedin`).
 * 2. Pridajte nový objekt do poľa `SOCIAL_LINKS` nižšie:
 *    {
 *      name: 'LinkedIn',
 *      href: 'https://linkedin.com/company/keyspartners',
 *      icon: Linkedin,
 *      ariaLabel: 'Navštíviť náš LinkedIn profil'
 *    }
 * Pre odobratie stačí vymazať alebo zakomentovať príslušný objekt v poli.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/keyspartners/?locale=sk_SK',
    icon: Facebook,
    ariaLabel: 'Navštíviť náš Facebook profil',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/keyspartners/',
    icon: Instagram,
    ariaLabel: 'Navštíviť náš Instagram profil',
  },
];

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Naša ponuka', href: '#ponuka', isActive: true },
  { label: 'Prečo my', href: '#benefity' },
  { label: 'Náš tím', href: '#makleri' },
  { label: 'Skúsenosti', href: '#recenzie' },
  { label: 'Bezplatný odhad', href: '#chcem-predat' },
];

interface NavbarProps {
  brandName?: string;
  navItems?: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({
  brandName = 'KEYS & PARTNERS',
  navItems = DEFAULT_NAV_ITEMS,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Branding / Logo s fontom Fraunces */}
        <a
          href="#"
          className="group flex items-center gap-3 text-slate-900 transition-opacity hover:opacity-90 dark:text-white"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Key className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <span
            className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {brandName}
          </span>
        </a>

        {/* Desktop Navigácia + Sociálne siete (>= 768px / md) */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <nav aria-label="Hlavná navigácia">
            <ul className="flex items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`transition-colors hover:text-amber-600 dark:hover:text-amber-400 ${
                      item.isActive
                        ? 'text-amber-600 dark:text-amber-400 font-bold'
                        : ''
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Vertikálny oddeľovač */}
          <div className="h-5 w-px bg-slate-200 dark:bg-slate-800" aria-hidden="true" />

          {/* Sociálne siete pre desktop */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-all hover:bg-amber-500/10 hover:text-amber-600 dark:text-slate-300 dark:hover:bg-amber-400/10 dark:hover:text-amber-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          {/* CTA Tlačidlo */}
          <a
            href="#chcem-predat"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-amber-700 hover:shadow-md dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400"
          >
            <Key className="h-4 w-4" />
            <span>Chcem predať</span>
          </a>
        </div>

        {/* Mobilné tlačidlo (Hamburger) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Zatvoriť menu' : 'Otvoriť menu'}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobilné rozbaľovacie menu (< 768px / md:hidden) */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 pb-6 pt-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <nav aria-label="Mobilná navigácia" className="mb-6">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-900 ${
                      item.isActive
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold'
                        : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sociálne siete v mobilnom menu */}
          <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Sledujte nás
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-all hover:border-amber-500 hover:text-amber-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-amber-400 dark:hover:text-amber-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
