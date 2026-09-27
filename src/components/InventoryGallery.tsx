import { useState } from 'react';
import { EbikeUnit } from '../data/ebikesData';
import { Check, Search, Sparkles } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import UnitModal from './UnitModal';
import home_credit_logo from '../assets/images/home-credit-logo.png';

interface InventoryGalleryProps {
  initialCategory?: string;
}

const formatPhp = (val?: number | null): string => {
  if (val == null || isNaN(val)) return '0';
  return val.toLocaleString();
};

export default function InventoryGallery({ initialCategory = 'all' }: InventoryGalleryProps) {
  const { units, config } = useCms();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeUnit, setActiveUnit] = useState<EbikeUnit | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Vehicles', count: units.length },
    { id: 'commuter', label: '2-Wheeler E-Bikes', count: units.filter((u) => u.category === 'commuter').length },
    { id: 'etrike', label: '3 & 4-Wheeler Trikes', count: units.filter((u) => u.category === 'etrike' || u.category === 'cargo').length },
    { id: 'atv', label: 'ATV Quads (Off-Road)', count: units.filter((u) => u.category === 'atv').length }
  ];

  const filteredUnits = units.filter((unit) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      unit.category === selectedCategory ||
      (selectedCategory === 'etrike' && unit.category === 'cargo');
    const matchesSearch =
      (unit.name && unit.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (unit.code && unit.code.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (unit.motor && unit.motor.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (unit.battery && unit.battery.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="inventory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 border border-zinc-700 text-xs font-medium animate-fade-in">
          <Check className="w-4 h-4 text-[#800020]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Section Header */}
      <div data-gsap="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-bold text-[#800020] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#800020]" />
            <span>JFM Showroom Fleet · {units.length} Ready Units</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            E-Bikes, E-Trikes & All-Terrain Quads
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Every model is available with cash promotional pricing, fast approval Home Credit installment plans, and walk-in test drives across all 10 Ilocos branches.
          </p>
        </div>

        {/* Promo / Hotline Note Bar */}
        <div className="flex items-center gap-2">
          <div className="px-4 py-2.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-700 flex items-center gap-2.5 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#800020] shrink-0 animate-pulse" />
            <span>Call showroom hotline: <strong className="font-mono text-zinc-950 font-bold">{config.hotline}</strong></span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div data-gsap="fade-up" className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-10 p-2 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-[#800020] text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-zinc-200 text-zinc-700'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search model, motor, battery..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#800020] shadow-xs transition-colors"
          />
        </div>
      </div>

      {/* Units Grid */}
      <div data-gsap="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUnits.map((unit) => {
          const hasDiscount = Boolean(unit.salePriceCash && unit.srpCash && unit.salePriceCash < unit.srpCash);
          const savings = hasDiscount && unit.srpCash && unit.salePriceCash ? unit.srpCash - unit.salePriceCash : 0;

          return (
            <div
              key={unit.id}
              className="group rounded-2xl overflow-hidden bg-white border border-zinc-200/90 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container: Clean showroom stage */}
              <div
                onClick={() => setActiveUnit(unit)}
                className="relative aspect-[4/3] w-full bg-zinc-50/80 p-6 flex items-center justify-center overflow-hidden cursor-pointer"
              >
                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-zinc-200/60 shadow-xs">
                    {unit.categoryLabel}
                  </span>
                </div>

                {/* Savings Pill */}
                {hasDiscount && (
                  <div className="absolute top-3.5 right-3.5">
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/80 shadow-xs">
                      Save ₱{formatPhp(savings)}
                    </span>
                  </div>
                )}

                {/* Product Image */}
                <img
                  src={unit.image}
                  alt={unit.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <div className="space-y-3">
                  {/* Model Name */}
                  <h3
                    onClick={() => setActiveUnit(unit)}
                    className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-[#800020] transition-colors leading-snug cursor-pointer line-clamp-1"
                  >
                    {unit.name}
                  </h3>

                  {/* Clean Technical Attributes */}
                  <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs text-zinc-500 font-medium">
                    <span>{unit.motor ? unit.motor.split(' ')[0] : 'Electric'}</span>
                    <span className="text-zinc-300">·</span>
                    <span>{unit.battery || unit.tireSize || 'Standard'}</span>
                    {unit.maxLoad && (
                      <>
                        <span className="text-zinc-300">·</span>
                        <span>{unit.maxLoad} load</span>
                      </>
                    )}
                  </div>

                  {/* Pricing & Financing Block */}
                  <div className="pt-2 space-y-2 border-t border-zinc-100">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-zinc-400 block">Cash Price</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-extrabold font-mono text-zinc-950">
                            ₱{formatPhp(unit.salePriceCash || unit.srpCash)}
                          </span>
                          {hasDiscount && (
                            <span className="text-xs text-zinc-400 line-through font-mono">
                              ₱{formatPhp(unit.srpCash)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Emphasized Home Credit Financing Banner */}
                    {unit.homeCredit && unit.homeCredit.downPayment != null && (
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-rose-50/90 to-amber-50/50 border border-[#800020]/20 flex items-center justify-between shadow-2xs">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={home_credit_logo}
                            alt="Home Credit"
                            className="w-15 h-15 object-contain"
                          />
                          <div>
                            <span className="text-[10px] font-bold text-[#800020] uppercase tracking-wider block">Home Credit DP</span>
                            <span className="text-sm font-black font-mono text-zinc-950">
                              ₱{formatPhp(unit.homeCredit.downPayment)}
                            </span>
                          </div>
                        </div>
                        {unit.homeCredit.installment12mo != null && (
                          <div className="text-right">
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">12 Mo. Term</span>
                            <span className="text-xs font-mono font-bold text-zinc-800">
                              ₱{formatPhp(unit.homeCredit.installment12mo)}/mo
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setActiveUnit(unit)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold transition-colors text-center cursor-pointer"
                  >
                    View Details
                  </button>

                  <a
                    href={`tel:${config.hotline}`}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#800020] hover:bg-[#6b001b] text-white text-xs font-bold transition-all text-center shadow-xs"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Modal */}
      <UnitModal unit={activeUnit} onClose={() => setActiveUnit(null)} />
    </section>
  );
}
