import { useState } from 'react';
import { INVENTORY_DATA, EbikeUnit } from '../data/ebikesData';
import { Eye, Phone, Check, Search, Sparkles } from 'lucide-react';
import UnitModal from './UnitModal';

interface InventoryGalleryProps {
  initialCategory?: string;
}

export default function InventoryGallery({ initialCategory = 'all' }: InventoryGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeUnit, setActiveUnit] = useState<EbikeUnit | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Units' },
    { id: 'commuter', label: 'Commuter Bikes' },
    { id: 'etrike', label: 'E-Trikes' },
    { id: 'cargo', label: 'Cargo Hauler' },
    { id: 'atv', label: 'ATV Quads' }
  ];

  const filteredUnits = INVENTORY_DATA.filter((unit) => {
    const matchesCategory = selectedCategory === 'all' || unit.category === selectedCategory;
    const matchesSearch =
      unit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquireClick = (unit: EbikeUnit) => {
    navigator.clipboard.writeText(`Unit: ${unit.name} (Code: ${unit.code})`);
    setToastMessage(`Copied ${unit.code} to clipboard.`);
    setTimeout(() => setToastMessage(null), 3000);
  };

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
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-bold text-[#800020] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#800020]" />
            <span>Direct Showroom Stock</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Units Ready for Immediate Release
          </h2>
        </div>

        {/* Promo Note Bar */}
        <div className="px-4 py-2.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-700 flex items-center gap-2.5 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#800020] shrink-0 animate-pulse" />
          <span>Screenshot your preferred unit & call hotline <strong>09366082578</strong></span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div data-gsap="fade-up" className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-10 p-2 rounded-2xl bg-zinc-50 border border-zinc-200">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#800020] text-white shadow-md shadow-[#800020]/25'
                  : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search code or model..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#800020] shadow-sm transition-colors"
          />
        </div>
      </div>

      {/* Units Grid */}
      <div data-gsap="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredUnits.map((unit) => (
          <div
            key={unit.id}
            className="group rounded-3xl overflow-hidden bg-white border border-zinc-200 hover:border-[#800020]/50 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
              <img
                src={unit.image}
                alt={unit.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Code */}
              <div className="absolute top-3.5 left-3.5 bg-black/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-lg text-xs font-mono font-bold text-white shadow-md">
                {unit.code}
              </div>

              {unit.popular && (
                <div className="absolute top-3.5 right-3.5 bg-[#800020] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Popular</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-[#800020] uppercase tracking-wider">
                  {unit.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-zinc-950 group-hover:text-[#800020] transition-colors">
                  {unit.name}
                </h3>
                <p className="text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                  {unit.tagline}
                </p>
              </div>

              {/* Specs Strip */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-100 text-center bg-zinc-50/70 rounded-xl px-2">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block">Motor</span>
                  <span className="font-bold text-zinc-900 text-xs sm:text-sm truncate block">
                    {unit.motor.split(' ')[0]}
                  </span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block">Range</span>
                  <span className="font-bold text-zinc-900 text-xs sm:text-sm truncate block">
                    {unit.range.split(' ')[0]} km
                  </span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block">Payload</span>
                  <span className="font-bold text-zinc-900 text-xs sm:text-sm truncate block">
                    {unit.maxLoad.split(' ')[0]} kg
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 pt-1">
                <button
                  onClick={() => setActiveUnit(unit)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs sm:text-sm font-bold border border-zinc-200 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-zinc-600" />
                  <span>View Specs</span>
                </button>

                <a
                  href="tel:09366082578"
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#800020] hover:bg-[#6b001b] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#800020]/25"
                >
                  <Phone className="w-4 h-4" />
                  <span>Inquire</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <UnitModal unit={activeUnit} onClose={() => setActiveUnit(null)} />
    </section>
  );
}
