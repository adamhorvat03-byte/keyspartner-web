import React, { useState } from 'react';
import {
  MapPin,
  Maximize2,
  BedDouble,
  Layers,
  Phone,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Send,
  ArrowLeft,
  Share2,
} from 'lucide-react';
import { DetailedProperty } from '../lib/propertyRepository';

interface PropertyDetailProps {
  property: DetailedProperty;
  onBack?: () => void;
}

export const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onBack }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: `Dobrý deň, mám záujem o bližšie informácie a obhliadku nehnuteľnosti "${property.title}" (ID: ${property.externalId}).`,
  });

  const isRent = property.transactionType === 'rent';
  const formattedPrice = isRent
    ? `${property.price.toLocaleString('sk-SK')} € / mesiac`
    : `${property.price.toLocaleString('sk-SK')} €`;

  const isAgentPhoto = (url?: string) => {
    if (!url) return false;
    const lower = url.toLowerCase();
    return (
      lower.includes('pella') ||
      lower.includes('duda') ||
      lower.includes('brano') ||
      lower.includes('horvat') ||
      lower.includes('s.unitedclassifieds.sk') ||
      lower.includes('agent') ||
      lower.includes('broker') ||
      lower.includes('avatar') ||
      lower.includes('profile') ||
      lower.includes('makler') ||
      lower.includes('user_photo') ||
      lower.includes('makleri') ||
      lower.includes('pouzivatel') ||
      lower.includes('portrait') ||
      lower.includes('face') ||
      lower.endsWith('pella.jpg') ||
      lower.endsWith('duda.jpg') ||
      lower.endsWith('brano.jpg')
    );
  };

  const safeImages = (property.images || []).filter((img) => img && !isAgentPhoto(img));
  const images =
    safeImages.length > 0
      ? safeImages
      : ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Prosím, vyplňte vaše meno a telefónne číslo.');
      return;
    }
    setFormSent(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Horná navigácia späť */}
      <div className="mb-6 flex items-center justify-between">
        {onBack && (
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Späť na zoznam ponúk</span>
          </button>
        )}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400">ID zákazky: {property.externalId}</span>
        </div>
      </div>

      {/* Titulok ponuky a lokalita */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950 ${
              isRent ? 'bg-blue-400' : 'bg-amber-400'
            }`}
          >
            {isRent ? 'Na prenájom' : 'Na predaj'}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {property.propertyType.toUpperCase()}
          </span>
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
          {property.title}
        </h1>
        <div className="mt-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>{property.location.formattedAddress || `${property.location.city}, ${property.location.street || ''}`}</span>
        </div>
      </div>

      {/* 1. Fotogaléria / Carousel */}
      <div className="mb-10 space-y-3">
        {/* Hlavná veľká fotografia */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg sm:aspect-[21/9]">
          <img
            src={images[activeImageIndex]}
            alt={`${property.title} - fotografia ${activeImageIndex + 1}`}
            className="h-full w-full object-cover transition-all duration-300"
          />
          <div className="absolute bottom-4 right-4 rounded-lg bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
            {activeImageIndex + 1} / {images.length} fotografií
          </div>
        </div>

        {/* Pás miniatúr (Thumbnails) */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                  activeImageIndex === idx
                    ? 'border-amber-500 scale-95 shadow-md'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Náhľad ${idx + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 2. Dvojstĺpcové rozloženie: Obsah vs. Sidebar makléra */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Ľavá časť: Popis a technické parametre */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Základné info karty */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <span className="text-xs text-slate-400">Výmera</span>
              <div className="mt-1 flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                <Maximize2 className="h-4 w-4 text-amber-600" />
                <span>{property.area || property.areaLand || '-'} m²</span>
              </div>
            </div>
            <div>
              <span className="text-xs text-slate-400">Počet izieb</span>
              <div className="mt-1 flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                <BedDouble className="h-4 w-4 text-amber-600" />
                <span>{property.rooms || '-'}</span>
              </div>
            </div>
            <div>
              <span className="text-xs text-slate-400">Poschodie</span>
              <div className="mt-1 flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                <Layers className="h-4 w-4 text-amber-600" />
                <span>{property.floor || '-'}</span>
              </div>
            </div>
            <div>
              <span className="text-xs text-slate-400">Stav</span>
              <div className="mt-1 flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="capitalize">{property.status}</span>
              </div>
            </div>
          </div>

          {/* Textový popis nehnuteľnosti */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Popis nehnuteľnosti
            </h2>
            <div className="prose max-w-none text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
              {property.description || 'K tejto nehnuteľnosti zatiaľ nebol priradený podrobný textový popis.'}
            </div>
          </div>

          {/* Tabuľka technických parametrov */}
          {property.technicalSpecs && (
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Technické parametre a vybavenie
              </h2>
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {property.technicalSpecs.utilities && (
                      <tr className="bg-white dark:bg-slate-900">
                        <td className="w-1/3 px-4 py-3 font-semibold text-slate-500">Inžinierske siete</td>
                        <td className="px-4 py-3 text-slate-900 dark:text-white">{property.technicalSpecs.utilities}</td>
                      </tr>
                    )}
                    {property.technicalSpecs.condition && (
                      <tr className="bg-slate-50/60 dark:bg-slate-900/60">
                        <td className="px-4 py-3 font-semibold text-slate-500">Stav objektu</td>
                        <td className="px-4 py-3 text-slate-900 dark:text-white">{property.technicalSpecs.condition}</td>
                      </tr>
                    )}
                    {property.technicalSpecs.heating && (
                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-4 py-3 font-semibold text-slate-500">Vykurovanie</td>
                        <td className="px-4 py-3 text-slate-900 dark:text-white">{property.technicalSpecs.heating}</td>
                      </tr>
                    )}
                    {property.technicalSpecs.construction && (
                      <tr className="bg-slate-50/60 dark:bg-slate-900/60">
                        <td className="px-4 py-3 font-semibold text-slate-500">Konštrukcia</td>
                        <td className="px-4 py-3 text-slate-900 dark:text-white">{property.technicalSpecs.construction}</td>
                      </tr>
                    )}
                    {property.technicalSpecs.balcony && (
                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-4 py-3 font-semibold text-slate-500">Balkón / Loggia</td>
                        <td className="px-4 py-3 text-slate-900 dark:text-white">{property.technicalSpecs.balcony}</td>
                      </tr>
                    )}
                    {property.technicalSpecs.parking && (
                      <tr className="bg-slate-50/60 dark:bg-slate-900/60">
                        <td className="px-4 py-3 font-semibold text-slate-500">Parkovanie</td>
                        <td className="px-4 py-3 text-slate-900 dark:text-white">{property.technicalSpecs.parking}</td>
                      </tr>
                    )}
                    {property.technicalSpecs.energyCertificate && (
                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-4 py-3 font-semibold text-slate-500">Energetický certifikát</td>
                        <td className="px-4 py-3 text-slate-900 dark:text-white">{property.technicalSpecs.energyCertificate}</td>
                      </tr>
                    )}
                    {property.technicalSpecs.orientation && (
                      <tr className="bg-slate-50/60 dark:bg-slate-900/60">
                        <td className="px-4 py-3 font-semibold text-slate-500">Orientácia</td>
                        <td className="px-4 py-3 text-slate-900 dark:text-white">{property.technicalSpecs.orientation}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Garancia bezpečného prevodu */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 dark:border-amber-500/20">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h3 className="font-bold text-slate-900 dark:text-white">Garantovaný realitný servis KEYS PARTNERS</h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              V cene nehnuteľnosti je zahrnutý kompletný právny servis garantovaný advokátskou kanceláriou,
              poplatky na katastri, overovanie podpisov a bezplatné hypotekárne poradenstvo.
            </p>
          </div>
        </div>

        {/* Pravá časť (Sidebar): Cenovka + Maklér + Kontaktný formulár */}
        <div className="space-y-6">
          
          {/* Cenový panel */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Ponuková cena</span>
            <div className="mt-1 font-heading text-3xl font-extrabold text-amber-600 dark:text-amber-400">
              {formattedPrice}
            </div>
            <p className="mt-1 text-xs text-slate-500">Vrátane provízie a poplatkov za prevod</p>
          </div>

          {/* Kontaktný box na makléra a rýchly formulár */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Váš realitný maklér</h3>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 font-bold text-amber-700 dark:text-amber-400">
                {property.agent?.name?.charAt(0) || 'K'}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {property.agent?.name || 'Ing. Branislav HORVÁT'}
                </h4>
                <p className="text-xs text-slate-500">Vzťahový riaditeľ / Maklér</p>
              </div>
            </div>

            {/* Tlačidlá na priamy kontakt */}
            <div className="space-y-2 mb-6">
              {property.agent?.phone && (
                <a
                  href={`tel:${property.agent.phone.replace(/\s+/g, '')}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200"
                >
                  <Phone className="h-4 w-4 text-amber-600" />
                  <span>{property.agent.phone}</span>
                </a>
              )}
              {property.agent?.email && (
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200"
                >
                  <Mail className="h-4 w-4 text-amber-600" />
                  <span>{property.agent.email}</span>
                </a>
              )}
            </div>

            {/* Rýchly dopytový formulár pre záujemcu */}
            <div className="border-t border-slate-100 pt-5 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Máte záujem o obhliadku?
              </h4>

              {formSent ? (
                <div className="rounded-xl bg-emerald-500/10 p-4 text-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="mx-auto h-8 w-8 mb-2" />
                  <p className="font-bold text-sm">Ďakujeme za záujem!</p>
                  <p className="text-xs mt-1">Maklér vás bude čoskoro telefonicky kontaktovať.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Vaše meno a priezvisko *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefónne číslo *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Váš e-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-amber-700"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Dohodnúť obhliadku</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center">
                    Odoslaním údajov súhlasíte s ich spracovaním za účelom vybavenia dopytu.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
