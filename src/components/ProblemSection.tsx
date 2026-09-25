import { Fuel, Wrench, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ProblemSection() {
  const painPoints = [
    {
      icon: Fuel,
      badge: 'Rising Fuel Expenses',
      title: '₱150–₱300 Daily on Gasoline',
      description: 'Daily market trips, school drops, and errands quickly drain household budgets with unpredictable provincial gasoline prices.'
    },
    {
      icon: AlertTriangle,
      badge: 'Fly-by-Night Sellers',
      title: 'Online Sellers With No Spare Parts',
      description: 'Buying unbranded e-bikes online often leaves owners stranded when batteries fail or replacement controllers cannot be found.'
    },
    {
      icon: Wrench,
      badge: 'No Local Service Hubs',
      title: 'Zero After-Sales Support',
      description: 'Most dealerships sell and disappear. When maintenance or tire replacements are needed, owners have no physical shop to visit.'
    }
  ];

  const solutions = [
    {
      stat: '₱8.50',
      label: 'Per Full Charge',
      desc: 'Travel 40–60 km for less than the price of one bottle of mineral water.'
    },
    {
      stat: '10 Hubs',
      label: 'Physical Service Centers',
      desc: 'Real brick-and-mortar display centers across Ilocos Sur and Ilocos Norte.'
    },
    {
      stat: '100%',
      label: 'Parts & Battery Stocked',
      desc: 'Direct manufacturer access for chargers, tires, motors, and controllers.'
    }
  ];

  return (
    <section id="problem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* Section Header */}
      <div data-gsap="fade-up" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-semibold text-[#800020]">
          <AlertTriangle className="w-3.5 h-3.5 text-[#800020]" />
          <span>The Everyday Transportation Dilemma</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
          Tired of High Gas Costs and <br className="hidden sm:inline" />
          <span className="text-[#800020]">
            Unreliable E-Bike Sellers?
          </span>
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
          Commuting in Ilocos shouldn't cost a fortune or leave you stranded with an unserviceable vehicle. Here is why hundreds of local families are switching to JFM.
        </p>
      </div>

      {/* Pain Points Grid (3 cards) */}
      <div data-gsap="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {painPoints.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white border border-[#800020]/15 shadow-[0_8px_25px_rgba(0,0,0,0.04)] p-7 space-y-4 relative overflow-hidden group hover:border-[#800020]/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#fbf0f2] border border-[#800020]/20 flex items-center justify-center text-[#800020] group-hover:scale-110 transition-transform">
              <item.icon className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#800020] uppercase tracking-wider">
                {item.badge}
              </span>
              <h3 className="text-xl font-bold text-zinc-950 group-hover:text-[#800020] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* The JFM Resolution Banner */}
      <div data-gsap="scale-in" className="rounded-3xl bg-gradient-to-br from-[#800020] via-[#6d001b] to-[#4d0013] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              <span>The JFM Alternative</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              A Direct Dealership You Can Actually Visit Anytime.
            </h3>
            <p className="text-rose-100 text-xs sm:text-sm leading-relaxed">
              JFM E-Bikes gives you full peace of mind with 10 physical display centers across Ilocos Sur & Norte, ready stock, and authorized mechanics on standby.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {solutions.map((sol, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-black/20 border border-white/20 backdrop-blur-md space-y-2 text-white hover:bg-black/30 transition-colors"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block">
                  {sol.stat}
                </span>
                <h4 className="text-xs font-bold text-rose-200 uppercase tracking-wider">
                  {sol.label}
                </h4>
                <p className="text-xs text-rose-100 leading-relaxed">
                  {sol.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
