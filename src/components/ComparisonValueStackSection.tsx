import { Check, X, Sparkles, Zap, Gift } from 'lucide-react';

export default function ComparisonValueStackSection() {
  const comparisonRows = [
    {
      feature: 'Daily Fuel / Charging Cost',
      jfm: '₱8.50 per full charge',
      gas: '₱150–₱300 daily gas',
      online: '₱8.50 (low quality cells)'
    },
    {
      feature: '10 Physical Display Centers in Ilocos',
      jfm: true,
      gas: false,
      online: false
    },
    {
      feature: 'Pre-Delivery Test Drive & Inspection',
      jfm: true,
      gas: true,
      online: false
    },
    {
      feature: 'In-Stock Replacement Batteries & Parts',
      jfm: true,
      gas: true,
      online: false
    },
    {
      feature: 'Official Motor & Chassis Warranty',
      jfm: 'Comprehensive 1-Year',
      gas: 'Varies / 3rd Party',
      online: '7–14 Days or None'
    },
    {
      feature: 'Engine Noise & Exhaust Fumes',
      jfm: '100% Zero Emissions & Silent',
      gas: 'High Smoke & Loud Engine',
      online: 'Silent'
    },
    {
      feature: 'Dedicated Hotline & Repair Support',
      jfm: 'Direct Hotline (09366082578)',
      gas: 'Standard Mechanic',
      online: 'Ghosted / No Reply'
    }
  ];

  const valueStackItems = [
    {
      title: 'Direct Showroom Unit',
      value: 'Factory Direct Tier-1 Quality',
      desc: 'Tested, assembled, and fully tuned before customer hand-over.'
    },
    {
      title: 'Free Fast-Charging Smart Adapter',
      value: 'Over-voltage protected',
      desc: 'Automatic cutoff prevents overcharging and extends battery lifespan.'
    },
    {
      title: 'Free 1st Preventive Maintenance Tune-Up',
      value: 'Full Safety Check',
      desc: 'Brake alignment, tire pressure optimization, and wire harness inspection.'
    },
    {
      title: '10-Branch Service Network Access',
      value: 'Province-Wide Coverage',
      desc: 'Service your unit at San Juan, Vigan, Narvacan, Laoag, or any nearby JFM hub.'
    }
  ];

  return (
    <section id="comparison" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* Header */}
      <div data-gsap="fade-up" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-semibold text-[#800020]">
          <Zap className="w-3.5 h-3.5 text-[#800020]" />
          <span>The Smart Buyer's Comparison</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
          How JFM Compares <br />
          <span className="text-[#800020]">
            To Other Options.
          </span>
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
          See why choosing a localized dealership with 10 physical branches saves you thousands of pesos in fuel and headaches.
        </p>
      </div>

      {/* Comparison Table */}
      <div data-gsap="scale-in" className="rounded-3xl bg-white border border-zinc-200 overflow-hidden shadow-xl mb-16">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th className="p-5 sm:p-6 text-xs sm:text-sm font-bold text-zinc-600 uppercase tracking-wider w-2/5">
                  Key Feature / Capability
                </th>
                <th className="p-5 sm:p-6 text-xs sm:text-sm font-extrabold text-[#800020] bg-[#fbf0f2] border-x border-[#800020]/20 w-1/4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#800020]" />
                    <span>JFM E-Bikes</span>
                  </div>
                </th>
                <th className="p-5 sm:p-6 text-xs sm:text-sm font-semibold text-zinc-500 w-1/5">
                  Gasoline Tricycles
                </th>
                <th className="p-5 sm:p-6 text-xs sm:text-sm font-semibold text-zinc-500 w-1/5">
                  Generic Online Sellers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-5 sm:p-6 font-semibold text-zinc-900">
                    {row.feature}
                  </td>
                  <td className="p-5 sm:p-6 font-bold text-zinc-950 bg-[#fdf8f9] border-x border-[#800020]/15">
                    {typeof row.jfm === 'boolean' ? (
                      <div className="flex items-center gap-2 text-[#800020] font-bold">
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Included</span>
                      </div>
                    ) : (
                      <span className="text-[#800020] font-bold">{row.jfm}</span>
                    )}
                  </td>
                  <td className="p-5 sm:p-6 text-zinc-600">
                    {typeof row.gas === 'boolean' ? (
                      row.gas ? (
                        <Check className="w-4 h-4 text-emerald-600 font-bold" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-400" />
                      )
                    ) : (
                      <span>{row.gas}</span>
                    )}
                  </td>
                  <td className="p-5 sm:p-6 text-zinc-600">
                    {typeof row.online === 'boolean' ? (
                      row.online ? (
                        <Check className="w-4 h-4 text-emerald-600 font-bold" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-400" />
                      )
                    ) : (
                      <span>{row.online}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* The JFM Value Stack Package */}
      <div data-gsap="scale-in" className="rounded-3xl bg-gradient-to-br from-[#fdf6f7] via-white to-[#fbf0f2] border border-[#800020]/20 p-8 sm:p-12 shadow-xl space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#800020]/15 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#800020] tracking-wider">
              <Gift className="w-4 h-4" />
              <span>Complete Ownership Package</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
              Every Unit Comes Fully Loaded
            </h3>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-[#800020] text-white font-bold text-xs shadow-sm">
            Zero Hidden Fees
          </span>
        </div>

        <div data-gsap="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueStackItems.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-[#800020]/10 shadow-sm space-y-2 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-xl bg-[#fbf0f2] text-[#800020] border border-[#800020]/20 flex items-center justify-center font-mono font-bold text-xs">
                0{i + 1}
              </div>
              <h4 className="text-sm font-bold text-zinc-950">
                {item.title}
              </h4>
              <p className="text-xs text-[#800020] font-bold">
                {item.value}
              </p>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
