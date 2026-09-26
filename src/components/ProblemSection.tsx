import { XCircle, CheckCircle2, ArrowRight, Zap, TrendingDown } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      title: '₱150–₱300 Daily Fuel Drain',
      desc: 'Trips to the market, school drops, and errands easily add up to over ₱6,000 every month in gasoline alone.'
    },
    {
      title: 'Disposable Online Units',
      desc: 'Unbranded e-bikes bought online leave owners stranded when generic batteries fail or controllers burn out.'
    },
    {
      title: 'Zero Local Service or Parts',
      desc: 'Fly-by-night sellers offer no physical shop in Ilocos to service brakes, replace tires, or honor warranty claims.'
    }
  ];

  const solutions = [
    {
      highlight: '₱8.50 Full Charge',
      title: '90% Monthly Savings',
      desc: 'Travel 40–60 km for less than a bottle of water. Charge overnight via any ordinary 220V household outlet.'
    },
    {
      highlight: '10 Ilocos Showrooms',
      title: 'Walk-In Physical Hubs',
      desc: 'Real brick-and-mortar display centers in San Juan, Vigan, Badoc, Bantay, and 6 more towns for immediate support.'
    },
    {
      highlight: '100% In-Stock Parts',
      title: 'Factory-Backed Warranty',
      desc: 'Comprehensive 1-year motor coverage with ready replacement batteries, tires, and dedicated in-house mechanics.'
    }
  ];

  return (
    <section id="problem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* Editorial Header */}
      <div data-gsap="fade-up" className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-semibold text-[#800020]">
          <TrendingDown className="w-3.5 h-3.5" />
          <span>The Transportation Dilemma</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.1]">
          Still Burning ₱200 a Day on Gas? <br />
          <span className="text-[#800020]">
            There is a Smarter Way in Ilocos.
          </span>
        </h2>

        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Everyday travel shouldn't drain your household budget or leave you stranded with an unserviceable vehicle. Here is how switching to JFM solves both.
        </p>
      </div>

      {/* Side-by-Side Impact Comparison Grid */}
      <div data-gsap="scale-in" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left: The Everyday Frustrations (Zinc / Muted Card) */}
        <div className="lg:col-span-5 rounded-3xl bg-zinc-50 border border-zinc-200/90 p-7 sm:p-9 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-200/80 pb-4">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                  The Old Way
                </span>
                <h3 className="text-xl font-bold text-zinc-900">
                  Gas & Generic Sellers
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                High Risk & Expense
              </span>
            </div>

            <div className="space-y-5">
              {problems.map((p, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-zinc-900">{p.title}</h4>
                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-200 text-xs text-zinc-400 font-medium flex items-center justify-between">
            <span>Result: Unpredictable monthly costs</span>
            <span className="text-red-600 font-semibold">₱60,000+/yr burned</span>
          </div>
        </div>

        {/* Center Indicator (Hidden on small screens) */}
        <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center space-y-3">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#800020]/30 to-transparent" />
          <div className="w-11 h-11 rounded-full bg-[#800020] text-white flex items-center justify-center shadow-lg shadow-[#800020]/30 font-bold shrink-0">
            <ArrowRight className="w-5 h-5" />
          </div>
          <div className="h-full w-px bg-gradient-to-b from-[#800020]/30 via-[#800020]/30 to-transparent" />
        </div>

        {/* Right: The JFM Resolution (Deep Crimson Hero Card) */}
        <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#800020] via-[#6d001b] to-[#480012] text-white p-7 sm:p-9 flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-200">
                  The JFM Standard
                </span>
                <h3 className="text-xl font-bold text-white">
                  Built for Ilocos Daily Life
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-300 fill-current" />
                <span>Zero Gas</span>
              </span>
            </div>

            <div className="space-y-5">
              {solutions.map((s, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-white/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-rose-200 uppercase">{s.highlight}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{s.title}</h4>
                    <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/20 text-xs text-rose-200 font-semibold flex items-center justify-between">
            <span>Official 1-Year Motor Warranty</span>
            <span className="text-white font-bold font-mono">10 Local Hubs</span>
          </div>
        </div>

      </div>
    </section>
  );
}
