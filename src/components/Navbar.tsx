import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, Sparkles, Building2 } from 'lucide-react';
import { useCms } from '../context/CmsContext';

interface NavbarProps {
  onExploreClick?: () => void;
}

export default function Navbar({ onExploreClick }: NavbarProps) {
  const { config, units, reviews } = useCms();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-2.5 sm:pt-3 px-3 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
      {/* Sleek Floating Island Container */}
      <div
        className={`pointer-events-auto max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-2xl border-zinc-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.07)]'
            : 'bg-white/90 backdrop-blur-xl border-zinc-200/80 shadow-[0_6px_20px_rgba(0,0,0,0.04)]'
        } border px-3 sm:px-5 h-11 sm:h-12 flex items-center justify-between`}
      >
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-2 shrink-0">
          <a href="#hero" className="flex items-center gap-1.5 group">
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-zinc-950 flex items-center gap-1">
              JFM <span className="text-[#800020]">GROUP</span>
            </span>
            <span className="hidden xl:inline-block text-[10px] text-zinc-400 border-l border-zinc-300 pl-2 ml-1 font-medium">
              E-Bikes · ATVs · Services
            </span>
          </a>
        </div>

        {/* Center: Clean Sequential Navigation Dock */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium">
          <a
            href="#hero"
            className="px-3 py-1 rounded-full bg-zinc-900 text-white shadow-xs font-semibold text-[11px] transition-transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#inventory"
            className="px-2.5 py-1 rounded-full text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-all text-[11px] font-semibold hover:scale-105"
          >
            E-Bikes & ATVs ({units.length})
          </a>
          <a
            href="#booking-services"
            className="px-2.5 py-1 rounded-full text-[#800020] hover:text-[#6b001b] hover:bg-rose-50 font-bold transition-all text-[11px] hover:scale-105 flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3" />
            <span>Booking Services (26)</span>
          </a>
          <a
            href="#other-businesses"
            className="px-2.5 py-1 rounded-full text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-all text-[11px] font-semibold hover:scale-105"
          >
            5 JFM Divisions
          </a>
          <a
            href="#locations"
            className="px-2.5 py-1 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all text-[11px] hover:scale-105"
          >
            10 Branches
          </a>
          <a
            href="#reviews"
            className="px-2.5 py-1 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all text-[11px] hover:scale-105"
          >
            Reviews
          </a>
          <a
            href="#faq"
            className="px-2.5 py-1 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all text-[11px] hover:scale-105"
          >
            FAQ
          </a>
        </nav>

        {/* Right: Hotline & Direct Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <a
            href={`tel:${config.hotline}`}
            className="hidden sm:flex items-center gap-1.5 text-[11px] text-zinc-700 hover:text-[#800020] font-medium transition-colors"
          >
            <Phone className="w-3 h-3 text-[#800020]" />
            <span>Call: <strong className="font-mono text-zinc-950 font-semibold">{config.hotline}</strong></span>
          </a>

          {/* Slim Maroon Action Button */}
          <a
            href="#inventory"
            onClick={onExploreClick}
            className="group flex items-center gap-1.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#800020] hover:bg-[#6b001b] text-white text-[11px] sm:text-xs font-bold tracking-tight transition-all shadow-[0_2px_10px_rgba(128,0,32,0.25)] hover:shadow-[0_4px_14px_rgba(128,0,32,0.35)] active:scale-[0.98]"
          >
            <span>Browse Catalog</span>
            <div className="w-4 h-4 rounded-full bg-white text-[#800020] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs">
              <ArrowUpRight className="w-2.5 h-2.5" />
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-950 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden max-w-7xl mx-auto mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-zinc-200 shadow-xl space-y-3 animate-fade-in">
          <div className="grid grid-cols-2 gap-1.5 text-xs font-semibold text-zinc-800">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-[#fbf0f2] hover:text-[#800020] transition-colors text-[11px]"
            >
              Home
            </a>
            <a
              href="#inventory"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-[#fbf0f2] text-[#800020] font-bold transition-colors text-[11px]"
            >
              E-Bikes & ATVs ({units.length})
            </a>
            <a
              href="#booking-services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-rose-50 text-[#800020] font-bold transition-colors text-[11px] col-span-2 text-center"
            >
              ⚡ Booking Services (PRC, DFA, PSA, LTO)
            </a>
            <a
              href="#other-businesses"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-[#fbf0f2] hover:text-[#800020] transition-colors text-[11px]"
            >
              5 JFM Divisions
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-[#fbf0f2] hover:text-[#800020] transition-colors text-[11px]"
            >
              10 Branches
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-[#fbf0f2] hover:text-[#800020] transition-colors text-[11px]"
            >
              Reviews ({reviews?.length || 5})
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-[#fbf0f2] hover:text-[#800020] transition-colors text-[11px]"
            >
              FAQ
            </a>
          </div>

          <div className="pt-2.5 border-t border-zinc-200 flex items-center justify-between text-[11px] text-zinc-600 px-1">
            <a
              href={`tel:${config.hotline}`}
              className="text-[#800020] font-bold flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{config.hotline}</span>
            </a>
            <a
              href={config.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#800020] flex items-center gap-1 transition-colors font-medium"
            >
              <span>Facebook Page</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
