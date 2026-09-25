import { Phone, ArrowUpRight, Flame } from 'lucide-react';

interface SecondaryCtaProps {
  onExploreClick: () => void;
}

export default function SecondaryCtaSection({ onExploreClick }: SecondaryCtaProps) {
  return (
    <section id="reserve" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div data-gsap="scale-in" className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden bg-gradient-to-br from-[#800020] via-[#6a001b] to-[#450012] text-white p-8 sm:p-14 lg:p-18 shadow-2xl">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Urgency Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-bold text-white shadow-md">
            <Flame className="w-4 h-4 text-amber-300 fill-current" />
            <span>High Seasonal Demand · Immediate Branch Release Available</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Ready to Cut Fuel Costs & Upgrade Your Daily Ride?
            </h2>
            <p className="text-rose-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Units in high demand move quickly across our 10 Ilocos branches. Reserve your preferred model today for instant branch pickup or door-to-door delivery.
            </p>
          </div>

          {/* 3 Step Quick Process */}
          <div data-gsap="stagger" className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto py-2">
            <div className="p-5 rounded-2xl bg-black/25 border border-white/15 space-y-1 backdrop-blur-md">
              <span className="text-xs font-mono font-bold text-amber-300">STEP 01</span>
              <h4 className="text-sm font-bold text-white">Choose Unit Code</h4>
              <p className="text-xs text-rose-100">Select model from our inventory gallery.</p>
            </div>
            <div className="p-5 rounded-2xl bg-black/25 border border-white/15 space-y-1 backdrop-blur-md">
              <span className="text-xs font-mono font-bold text-amber-300">STEP 02</span>
              <h4 className="text-sm font-bold text-white">Take Screenshot</h4>
              <p className="text-xs text-rose-100">Capture specs or note unit code for quick verification.</p>
            </div>
            <div className="p-5 rounded-2xl bg-black/25 border border-white/15 space-y-1 backdrop-blur-md">
              <span className="text-xs font-mono font-bold text-amber-300">STEP 03</span>
              <h4 className="text-sm font-bold text-white">Call 09366082578</h4>
              <p className="text-xs text-rose-100">Confirm branch stock & schedule same-day release.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
            <button
              onClick={onExploreClick}
              className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#800020] hover:bg-zinc-100 text-sm sm:text-base font-bold tracking-tight transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Browse In-Stock Units</span>
              <div className="w-6 h-6 rounded-full bg-[#800020] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>

            <a
              href="tel:09366082578"
              className="flex items-center gap-2.5 px-7 py-4 rounded-full bg-black/30 hover:bg-black/40 text-white text-sm sm:text-base font-semibold border border-white/25 transition-colors backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call Hotline: <strong className="font-mono">09366082578</strong></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
