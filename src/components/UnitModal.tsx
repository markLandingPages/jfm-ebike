import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  X,
  Phone,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Zap,
  Tag,
  Gift
} from 'lucide-react';
import { gsap } from 'gsap';
import { EbikeUnit } from '../data/ebikesData';
import { useCms } from '../context/CmsContext';
import home_credit_logo from '../assets/images/home-credit-logo.png';

interface UnitModalProps {
  unit: EbikeUnit | null;
  onClose: () => void;
}

const formatPhp = (val?: number | null): string => {
  if (val == null || isNaN(val)) return '0';
  return val.toLocaleString();
};

export default function UnitModal({ unit, onClose }: UnitModalProps) {
  const { branches, config } = useCms();
  const [copied, setCopied] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isClosingRef = useRef(false);

  // Lock body scroll and trigger GSAP slide-in & clean text reveal
  useEffect(() => {
    if (!unit) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Slide in smoothly from right
      tl.fromTo(
        containerRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.45, ease: 'power3.out' }
      );

      // Staggered reveal for clean content elements
      if (contentRef.current) {
        const reveals = contentRef.current.querySelectorAll('.reveal-item');
        tl.fromTo(
          reveals,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 },
          '-=0.2'
        );
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      ctx.revert();
    };
  }, [unit]);

  const handleClose = () => {
    if (isClosingRef.current || !containerRef.current) return;
    isClosingRef.current = true;

    gsap.to(containerRef.current, {
      x: '100%',
      duration: 0.35,
      ease: 'power3.in',
      onComplete: () => {
        isClosingRef.current = false;
        onClose();
      }
    });
  };

  const handleCopyCode = () => {
    if (!unit) return;
    navigator.clipboard.writeText(unit.code || unit.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!unit) return null;

  const hasDiscount = Boolean(unit.salePriceCash && unit.srpCash && unit.salePriceCash < unit.srpCash);
  const savings = hasDiscount && unit.srpCash && unit.salePriceCash ? unit.srpCash - unit.salePriceCash : 0;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-white flex flex-col font-sans"
      role="dialog"
      aria-modal="true"
      aria-label={`${unit.name} Details`}
    >
      {/* Top Floating Control Bar */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <button
          onClick={handleClose}
          className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Units</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-xs font-semibold text-zinc-700 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Code Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span className="font-mono">{unit.code}</span>
              </>
            )}
          </button>

          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Spacious Content */}
      <main
        ref={contentRef}
        className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Photo Focus (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="reveal-item relative aspect-[4/3] sm:aspect-square w-full rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-sm">
              <img
                src={unit.image}
                alt={unit.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-zinc-900/90 backdrop-blur-md text-white font-mono text-xs font-bold shadow-sm">
                  {unit.code}
                </span>
              </div>
              {hasDiscount && (
                <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Save ₱{formatPhp(savings)}</span>
                </div>
              )}
            </div>

            {/* Quick Assurance Strip */}
            <div className="reveal-item flex items-center justify-between text-xs text-zinc-500 px-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#800020]" />
                <span>1-Year Warranty</span>
              </div>
              <span className="text-zinc-300">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#800020]" />
                <span>{branches.length} Ilocos Hubs</span>
              </div>
              <span className="text-zinc-300">•</span>
              <span>Same-Day Release</span>
            </div>
          </div>

          {/* Right: Detailed Buyer & Technical Info (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Title, Badge & Tagline */}
            <div className="space-y-3">
              <span className="reveal-item inline-block text-xs font-bold uppercase tracking-wider text-[#800020] bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                {unit.categoryLabel}
              </span>
              <h1 className="reveal-item text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                {unit.name}
              </h1>
              <p className="reveal-item text-base text-zinc-600 leading-relaxed">
                {unit.description}
              </p>
            </div>

            {/* Cash & Promo Pricing Card */}
            <div className="reveal-item p-5 rounded-3xl bg-zinc-50 border border-zinc-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Cash Basis Price
                </span>
                {hasDiscount && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    Discounted Promo Available
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-3">
                {unit.salePriceCash ? (
                  <>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#800020] font-mono">
                      ₱{formatPhp(unit.salePriceCash)}
                    </span>
                    <span className="text-base text-zinc-400 line-through font-mono">
                      ₱{formatPhp(unit.srpCash)}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-lg">
                      Save ₱{formatPhp(savings)}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 font-mono">
                    ₱{formatPhp(unit.srpCash)}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-zinc-500">
                Cash on delivery or walk-in payment accepted across all {branches.length} Ilocos display centers.
              </p>
            </div>

            {/* Home Credit Installment Financing Table */}
            {unit.homeCredit && (
              <div className="reveal-item p-5 rounded-3xl bg-rose-50/50 border border-[#800020]/20 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#800020]">
                    <img
                      src={home_credit_logo}
                      alt="Home Credit"
                      className="w-15 h-15 object-contain"
                    />
                    <span>Home Credit Financing Plan</span>
                  </div>
                  <span className="text-[11px] font-semibold text-zinc-600 bg-white px-2.5 py-1 rounded-md border border-zinc-200 shadow-2xs">
                    Fast 15-Minute Approval
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
                  <div className="p-3 rounded-2xl bg-white border border-rose-200/80">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block">Down Payment</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#800020] font-mono mt-0.5 block">
                      ₱{formatPhp(unit.homeCredit.downPayment)}
                    </span>
                    <span className="text-[10px] text-zinc-500">at release</span>
                  </div>

                  {unit.homeCredit.installment9mo != null && (
                    <div className="p-3 rounded-2xl bg-white border border-zinc-200">
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block">9 Months</span>
                      <span className="text-sm sm:text-base font-extrabold text-zinc-900 font-mono mt-0.5 block">
                        ₱{formatPhp(unit.homeCredit.installment9mo)}
                      </span>
                      <span className="text-[10px] text-zinc-500">per month</span>
                    </div>
                  )}

                  {unit.homeCredit.installment12mo != null && (
                    <div className="p-3 rounded-2xl bg-white border border-[#800020]/40 ring-2 ring-[#800020]/10">
                      <span className="text-[10px] uppercase font-bold text-[#800020] block">12 Months (Rec)</span>
                      <span className="text-sm sm:text-base font-extrabold text-[#800020] font-mono mt-0.5 block">
                        ₱{formatPhp(unit.homeCredit.installment12mo)}
                      </span>
                      <span className="text-[10px] text-zinc-500">per month</span>
                    </div>
                  )}

                  {unit.homeCredit.installment15mo != null && (
                    <div className="p-3 rounded-2xl bg-white border border-zinc-200">
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block">15 Months</span>
                      <span className="text-sm sm:text-base font-extrabold text-zinc-900 font-mono mt-0.5 block">
                        ₱{formatPhp(unit.homeCredit.installment15mo)}
                      </span>
                      <span className="text-[10px] text-zinc-500">per month</span>
                    </div>
                  )}

                  {unit.homeCredit.installment18mo != null && (
                    <div className="p-3 rounded-2xl bg-white border border-zinc-200">
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block">18 Months</span>
                      <span className="text-sm sm:text-base font-extrabold text-zinc-900 font-mono mt-0.5 block">
                        ₱{formatPhp(unit.homeCredit.installment18mo)}
                      </span>
                      <span className="text-[10px] text-zinc-500">per month</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Included Freebies */}
            {unit.freebies && unit.freebies.length > 0 && unit.categoryLabel !== "All-Terrain Quad Vehicle (ATV)" && (
              <div className="reveal-item space-y-3 pt-2 bg-amber-50/50 p-4 rounded-2xl border border-amber-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                  <Gift className="w-4 h-4 text-amber-700" />
                  <span>Free Package Inclusions (₱0 Extra)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {unit.freebies.map((freebie: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs sm:text-sm text-zinc-800 font-medium bg-white px-3 py-2 rounded-xl border border-amber-100 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{freebie}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features List */}
            {unit.features && unit.features.length > 0 &&(
              <div className="reveal-item space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                  Highlights & Inclusions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {unit.features.map((feat: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#800020] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specifications Summary */}
            <div className="reveal-item space-y-3 pt-2 border-t border-zinc-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                Detailed Specifications
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-xs text-zinc-600 bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
                <div>
                  <span className="text-zinc-400 block text-[11px]">
                    {unit.category === 'atv' ? 'Engine Power' : 'Motor'}
                  </span>
                  <span className="font-semibold text-zinc-900">{unit.motor || 'Standard'}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block text-[11px]">Battery / Power</span>
                  <span className="font-semibold text-zinc-900">{unit.battery || 'Standard'}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block text-[11px]">Operating Range</span>
                  <span className="font-semibold text-zinc-900">{unit.range || 'Standard'}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block text-[11px]">Payload Capacity</span>
                  <span className="font-semibold text-zinc-900">{unit.maxLoad || 'Standard'}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block text-[11px]">Seaters / Capacity</span>
                  <span className="font-semibold text-zinc-900">{unit.seaters || '2'}</span>
                </div>
                {unit.transmission && (
                  <div>
                    <span className="text-zinc-400 block text-[11px]">Transmission</span>
                    <span className="font-semibold text-zinc-900">{unit.transmission}</span>
                  </div>
                )}
                {unit.tireSize && (
                  <div>
                    <span className="text-zinc-400 block text-[11px]">Tire Dimensions</span>
                    <span className="font-semibold text-zinc-900">{unit.tireSize}</span>
                  </div>
                )}
                {unit.brakes && (
                  <div>
                    <span className="text-zinc-400 block text-[11px]">Braking System</span>
                    <span className="font-semibold text-zinc-900">{unit.brakes}</span>
                  </div>
                )}
                <div>
                  <span className="text-zinc-400 block text-[11px]">Warranty Protection</span>
                  <span className="font-semibold text-zinc-900">1 Year Motor & Parts Support</span>
                </div>
              </div>
            </div>

            {/* Direct High-Contrast Action Bar (Pure Landing Page - No form) */}
            <div className="reveal-item pt-4 border-t border-zinc-100 space-y-4">
              <div className="p-5 rounded-2xl bg-zinc-900 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-white">How to Inquire or Reserve this Model:</h4>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">Immediate Stock</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Call our showroom hotline or message our Facebook page quoting model code <strong className="font-mono text-white bg-white/10 px-1.5 py-0.5 rounded">{unit.code}</strong>. Our branch manager will verify real-time stock at your nearest display center and schedule a free test drive with zero reservation fees.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`tel:${config.hotline}`}
                  className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#800020] hover:bg-[#6b001b] text-white text-sm sm:text-base font-bold transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hotline: {config.hotline}</span>
                </a>

                <a
                  href={config.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs sm:text-sm font-bold transition-colors"
                >
                  <span>Chat on Facebook</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={handleClose}
                  className="py-4 px-6 rounded-full border border-zinc-300 hover:bg-zinc-100 text-zinc-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
