import { Phone, ArrowUpRight, Flame, MapPin, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { useCms } from '../context/CmsContext';

interface SecondaryCtaProps {
  onExploreClick: () => void;
}

export default function SecondaryCtaSection({ onExploreClick }: SecondaryCtaProps) {
  const { branches, config } = useCms();

  return (
    <section id="reserve" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div data-gsap="scale-in" className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden bg-gradient-to-br from-[#800020] via-[#6a001b] to-[#450012] text-white p-8 sm:p-14 lg:p-18 shadow-2xl">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          {/* Urgency Pill & Heading */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-bold text-white shadow-md">
              <Flame className="w-4 h-4 text-amber-300 fill-current" />
              <span>High Seasonal Demand · Immediate Branch Release Available</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Ready to Cut Fuel Costs & Upgrade Your Daily Ride?
            </h2>
            <p className="text-rose-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Units in high demand move quickly across our {branches.length} Ilocos display centers. Connect with our showroom team directly for immediate unit availability, promotional cash pricing, or Home Credit approval.
            </p>
          </div>

          {/* 3 Direct Contact Cards (No forms, instant contact) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Direct Call Card */}
            <a
              href={`tel:${config.hotline}`}
              className="group p-6 rounded-3xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-4 text-left"
            >
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#800020] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">Call Showroom Hotline</h3>
                <p className="text-xs text-rose-100 leading-relaxed">
                  Speak directly with our sales team for instant stock checks and test-drive schedules.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 font-mono text-sm font-extrabold text-amber-300">
                <span>{config.hotline}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* 2. Facebook Chat Card */}
            <a
              href={config.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-4 text-left"
            >
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#800020] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">Message on Facebook</h3>
                <p className="text-xs text-rose-100 leading-relaxed">
                  Inquire via Facebook Messenger for real unit photos, video walk-arounds, and promo quotes.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-white">
                <span>Open Official Page</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* 3. Walk-In Locations Card */}
            <a
              href="#locations"
              className="group p-6 rounded-3xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-4 text-left"
            >
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#800020] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">{branches.length} Ilocos Branches</h3>
                <p className="text-xs text-rose-100 leading-relaxed">
                  Visit any display center in San Juan, Vigan, Badoc, Sinait, Candon, and neighboring towns.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-amber-300">
                <span>View All Locations</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>

          {/* Quick Assurance Badges */}
          <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-rose-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>1-Year Official Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>15-Minute Home Credit Approval</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-300" />
              <span>Same-Day Unit Release</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#800020] hover:bg-rose-50 text-xs sm:text-sm font-extrabold transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Browse All Models</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${config.hotline}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-black/40 hover:bg-black/60 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Call Us: <strong className="font-mono">{config.hotline}</strong></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
