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
  Sparkles
} from 'lucide-react';
import { gsap } from 'gsap';
import { EbikeUnit } from '../data/ebikesData';

interface UnitModalProps {
  unit: EbikeUnit | null;
  onClose: () => void;
}

export default function UnitModal({ unit, onClose }: UnitModalProps) {
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
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.05,
            ease: 'power2.out',
            clearProps: 'transform,opacity'
          },
          '-=0.15'
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
    if (isClosingRef.current || !containerRef.current) {
      onClose();
      return;
    }
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
    navigator.clipboard.writeText(`Unit Code: ${unit.code} (${unit.name})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!unit) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] w-full h-full bg-white text-zinc-900 overflow-y-auto overscroll-contain flex flex-col"
    >
      {/* Clean, Minimalist Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 px-4 sm:px-8 py-4 flex items-center justify-between">
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
          
          {/* Left: Clean, Crisp Photo Focus (5 Cols) */}
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
                <span>10 Ilocos Showrooms</span>
              </div>
              <span className="text-zinc-300">•</span>
              <span>Available for Release</span>
            </div>
          </div>

          {/* Right: What the Buyer Actually Needs to Know (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Title & Tagline */}
            <div className="space-y-3">
              <span className="reveal-item inline-block text-xs font-bold uppercase tracking-wider text-[#800020]">
                {unit.categoryLabel}
              </span>
              <h1 className="reveal-item text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                {unit.name}
              </h1>
              <p className="reveal-item text-base text-zinc-600 leading-relaxed">
                {unit.description}
              </p>
            </div>

            {/* 4 Core Essential Metrics */}
            <div className="reveal-item grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                  Range
                </span>
                <span className="text-lg font-extrabold text-zinc-900 mt-1 block">
                  {unit.range.split(' ')[0]} km
                </span>
                <span className="text-[11px] text-zinc-500">per charge</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                  Motor
                </span>
                <span className="text-lg font-extrabold text-zinc-900 mt-1 block">
                  {unit.motor.split(' ')[0]}
                </span>
                <span className="text-[11px] text-zinc-500">high torque</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                  Charge Cost
                </span>
                <span className="text-lg font-extrabold text-[#800020] mt-1 block">
                  ~₱8.50
                </span>
                <span className="text-[11px] text-zinc-500">full charge</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                  Capacity
                </span>
                <span className="text-lg font-extrabold text-zinc-900 mt-1 block">
                  {unit.maxLoad.split(' ')[0]} kg
                </span>
                <span className="text-[11px] text-zinc-500">max payload</span>
              </div>
            </div>

            {/* Key Features List */}
            {unit.features && unit.features.length > 0 && (
              <div className="reveal-item space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                  Included Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {unit.features.map((feat, i) => (
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

            {/* Specifications Summary */}
            <div className="reveal-item space-y-3 pt-2 border-t border-zinc-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs text-zinc-600">
                <div>
                  <span className="text-zinc-400 block">Battery</span>
                  <span className="font-semibold text-zinc-900">{unit.battery}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block">Charging Time</span>
                  <span className="font-semibold text-zinc-900">{unit.chargeTime}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block">Speed</span>
                  <span className="font-semibold text-zinc-900">{unit.topSpeed}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block">Warranty</span>
                  <span className="font-semibold text-zinc-900">1 Year Motor & Electrical</span>
                </div>
              </div>
            </div>

            {/* Direct High-Contrast Action Bar */}
            <div className="reveal-item pt-4 border-t border-zinc-100 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="tel:09366082578"
                  className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#800020] hover:bg-[#6b001b] text-white text-sm sm:text-base font-bold transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hotline: (0936) 608-2578</span>
                </a>

                <a
                  href="https://www.facebook.com/JFMeBikeShopMaintenanceandRepair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Inquire on Facebook</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-center text-[11px] text-zinc-500">
                Quote code <strong className="text-zinc-900 font-mono">{unit.code}</strong> for quick branch stock verification or free test-drive scheduling.
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
