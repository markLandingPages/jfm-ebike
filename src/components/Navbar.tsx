import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onExploreClick?: () => void;
}

export default function Navbar({ onExploreClick }: NavbarProps) {
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
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-2.5 sm:pt-3.5 px-3 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
      {/* Sleek Floating Island Container */}
      <div
        className={`pointer-events-auto max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-2xl border-zinc-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.07)]'
            : 'bg-white/85 backdrop-blur-xl border-zinc-200/80 shadow-[0_6px_20px_rgba(0,0,0,0.04)]'
        } border px-3 sm:px-4.5 h-11 sm:h-12 flex items-center justify-between`}
      >
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a href="#hero" className="flex items-center gap-1.5 group">
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-zinc-950 flex items-center gap-1">
              JFM E-BIKES
            </span>
          </a>
        </div>

        {/* Center: Clean Sequential Navigation Dock */}
        <nav className="hidden lg:flex items-center gap-0.5 text-xs font-medium">
          <a
            href="#hero"
            className="px-3 py-1 rounded-full bg-zinc-900 text-white shadow-xs font-semibold text-[11px] transition-transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#problem"
            className="px-2.5 py-1 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all text-[11px] hover:scale-105"
          >
            Why Switch
          </a>
          <a
            href="#showcase"
            className="px-2.5 py-1 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all text-[11px] hover:scale-105"
          >
            In Action
          </a>
          <a
            href="#features"
            className="px-2.5 py-1 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all text-[11px] hover:scale-105"
          >
            Features
          </a>
          <a
            href="#reviews"
            className="px-2.5 py-1 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all text-[11px] hover:scale-105"
          >
            Social Proof
          </a>
          <a
            href="#comparison"
            className="px-2.5 py-1 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all text-[11px] hover:scale-105"
          >
            Comparison
          </a>
          <a
            href="#faq"
            className="px-2.5 py-1 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all text-[11px] hover:scale-105"
          >
            FAQ
          </a>
        </nav>

        {/* Right: Hotline & Direct Maroon Action Pill */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="tel:09366082578"
            className="hidden sm:flex items-center gap-1.5 text-[11px] text-zinc-700 hover:text-[#800020] font-medium transition-colors"
          >
            <Phone className="w-3 h-3 text-[#800020]" />
            <span>Call: <strong className="font-mono text-zinc-950 font-semibold">09366082578</strong></span>
          </a>

          {/* Slim Maroon Action Button */}
          <a
            href="#inventory"
            onClick={onExploreClick}
            className="group flex items-center gap-1.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#800020] hover:bg-[#6b001b] text-white text-[11px] sm:text-xs font-bold tracking-tight transition-all shadow-[0_2px_10px_rgba(128,0,32,0.25)] hover:shadow-[0_4px_14px_rgba(128,0,32,0.35)] active:scale-[0.98]"
          >
            <span>Explore Units</span>
            <div className="w-4 h-4 rounded-full bg-white text-[#800020] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs">
              <ArrowUpRight className="w-2.5 h-2.5" />
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-950 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden max-w-6xl mx-auto mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-zinc-200 shadow-xl space-y-3 animate-fade-in">
          <div className="grid grid-cols-2 gap-1.5 text-xs font-semibold text-zinc-800">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-[#fbf0f2] hover:text-[#800020] transition-colors text-[11px]"
            >
              Home
            </a>
            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-[#fbf0f2] hover:text-[#800020] transition-colors text-[11px]"
            >
              Why Switch
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-[#fbf0f2] hover:text-[#800020] transition-colors text-[11px]"
            >
              Product in Action
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-[#fbf0f2] hover:text-[#800020] transition-colors text-[11px]"
            >
              Features & Benefits
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-[#fbf0f2] hover:text-[#800020] transition-colors text-[11px]"
            >
              Social Proof
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-zinc-50 hover:bg-[#fbf0f2] hover:text-[#800020] transition-colors text-[11px]"
            >
              Comparison & Value
            </a>
            <a
              href="#reserve"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-[#fbf0f2] text-[#800020] font-bold transition-colors text-[11px]"
            >
              Reserve a Unit
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
              href="tel:09366082578"
              className="text-[#800020] font-bold flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>09366082578</span>
            </a>
            <a
              href="https://www.facebook.com/JFMeBikeShopMaintenanceandRepair"
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
