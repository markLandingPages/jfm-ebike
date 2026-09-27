import { useState } from 'react';
import {
  Plane,
  FileText,
  Megaphone,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  Building2,
  X,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { OTHER_BUSINESSES_DATA, OtherBusiness } from '../data/ebikesData';
import { useCms } from '../context/CmsContext';

export default function OtherBusinessesSection() {
  const { config } = useCms();
  const [selectedBusiness, setSelectedBusiness] = useState<OtherBusiness | null>(null);

  const getBusinessIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return <Plane className="w-6 h-6 text-[#800020]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#800020]" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-[#800020]" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-[#800020]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#800020]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#800020]" />;
    }
  };

  return (
    <section id="other-businesses" className="py-20 sm:py-28 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div data-gsap="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-bold text-[#800020] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#800020]" />
              <span>JFM Group of Businesses · Multi-Industry Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Integrated Services for Families, Professionals & Local Enterprises
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Beyond premier electric mobility and ATVs, JFM Group operates trusted divisions delivering travel ticketing, document processing, digital marketing, business bookkeeping, and security surveillance systems.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-4 py-2 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 flex items-center gap-2 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>All 5 Divisions Open for Direct Contact</span>
            </div>
          </div>
        </div>

        {/* 5 Businesses Grid */}
        <div data-gsap="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OTHER_BUSINESSES_DATA.map((biz) => {
            const primaryNumber = biz.hotline.split('/')[0].trim();

            return (
              <div
                key={biz.id}
                className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#800020]/40 relative overflow-hidden"
              >
                {/* Subtle Maroon Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#800020] via-rose-600 to-[#800020] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#fbf0f2] border border-[#800020]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getBusinessIcon(biz.icon)}
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-bold text-zinc-700 uppercase tracking-wider">
                      {biz.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-zinc-950 group-hover:text-[#800020] transition-colors">
                      {biz.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#800020]">
                      {biz.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {biz.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-2 border-t border-zinc-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Core Capabilities:
                    </span>
                    <ul className="space-y-1.5">
                      {biz.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#800020] shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions (Direct Call, No Form) */}
                <div className="pt-5 mt-6 border-t border-zinc-100 flex items-center justify-between gap-2">
                  <a
                    href={`tel:${primaryNumber}`}
                    className="flex-1 py-2 px-3 rounded-xl bg-[#800020] hover:bg-[#6b001b] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call: {primaryNumber}</span>
                  </a>

                  <button
                    onClick={() => setSelectedBusiness(biz)}
                    className="px-3 py-2 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-zinc-700 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    title="View Information"
                  >
                    <span>Info</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* 6th Card: JFM Group Consolidated Overview Card */}
          <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-[#450012] rounded-3xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                <Building2 className="w-6 h-6 text-rose-300" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  JFM Group of Businesses
                </h3>
                <p className="text-xs font-semibold text-rose-300">
                  Regional Multi-Enterprise Conglomerate
                </p>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Founded and managed by John Francis L. Manuel, JFM Group has grown from pioneering e-mobility distribution into an integrated ecosystem serving thousands of Ilocano residents, institutions, and entrepreneurs.
              </p>
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1 text-xs">
                <div className="flex items-center justify-between font-bold text-white">
                  <span>Main Headquarters:</span>
                  <span className="font-mono text-rose-200">San Juan, Ilocos Sur</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300 text-[11px]">
                  <span>Physical Branches:</span>
                  <span className="font-semibold text-white">10 Display Centers</span>
                </div>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <a
                href="#locations"
                className="w-full py-2.5 px-4 rounded-xl bg-white text-zinc-950 hover:bg-rose-50 text-xs font-bold text-center transition-colors block shadow-md"
              >
                View 10 Branch Locations & Contacts
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Informational Modal (No Form / No Inputs) */}
      {selectedBusiness && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-zinc-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedBusiness(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <span className="px-2.5 py-0.5 rounded-md border border-zinc-200 bg-zinc-100 text-[11px] font-bold uppercase tracking-wider text-zinc-800">
                {selectedBusiness.category}
              </span>
              <h3 className="text-xl font-bold text-zinc-950">
                {selectedBusiness.name}
              </h3>
              <p className="text-xs text-zinc-600">{selectedBusiness.tagline}</p>
            </div>

            <p className="text-xs text-zinc-700 leading-relaxed bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
              {selectedBusiness.description}
            </p>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
                Key Services:
              </span>
              <ul className="space-y-1.5">
                {selectedBusiness.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#800020] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Calling Hotlines */}
            <div className="space-y-2 pt-2 border-t border-zinc-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
                Direct Contact Desk:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedBusiness.hotline.split('/').map((num) => {
                  const cleaned = num.trim();
                  return (
                    <a
                      key={cleaned}
                      href={`tel:${cleaned}`}
                      className="flex-1 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-[#800020] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{cleaned}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Message on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setSelectedBusiness(null)}
                className="py-3 px-5 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-zinc-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
