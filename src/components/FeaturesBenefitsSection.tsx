import {
  Zap,
  ShieldCheck,
  CloudRain,
  RotateCcw,
  BatteryCharging,
  Gauge,
  CheckCircle2,
  Wrench,
  Cpu,
  Sparkles,
  Layers,
  Award
} from 'lucide-react';

export default function FeaturesBenefitsSection() {
  const reliabilityPillars = [
    {
      icon: Zap,
      tag: 'POWERTRAIN',
      title: 'High-Torque Brushless Motor',
      highlight: 'Uphill Climbs & Heavy Cargo',
      description: 'Instant torque response engineered for steep bridge inclines, dirt roads, and heavy passenger loads without motor strain or overheating.',
      specs: [
        { label: 'Max Output', value: '500W–800W' },
        { label: 'Energy Cost', value: '~₱8.50 / Charge' },
        { label: 'Water Sealing', value: 'IP65 Protected' }
      ]
    },
    {
      icon: BatteryCharging,
      tag: 'BATTERY & RANGE',
      title: 'Deep-Cycle Smart BMS Battery',
      highlight: '40–60 km per Full Charge',
      description: 'Equipped with surge-protected Intelligent Battery Management (BMS) that prevents overcharging, voltage drops, and thermal degradation.',
      specs: [
        { label: 'Tested Range', value: '40–60 km' },
        { label: 'Charge Source', value: '220V Household' },
        { label: 'Charge Time', value: '6–8 Hours' }
      ]
    },
    {
      icon: Layers,
      tag: 'FRAME & SUSPENSION',
      title: 'Reinforced Steel Tube Chassis',
      highlight: 'Built for Potholes & Rough Roads',
      description: 'Heavy-gauge tubular steel framework paired with front telescopic forks and rear hydraulic shock absorbers to eliminate rugged road vibrations.',
      specs: [
        { label: 'Payload Capacity', value: 'Up to 350 kg' },
        { label: 'Damping', value: 'Dual Hydraulic' },
        { label: 'Braking', value: 'Drum / Disc Hybrid' }
      ]
    },
    {
      icon: CloudRain,
      tag: 'ALL-WEATHER UTILITY',
      title: 'Heavy-Duty Canopy & Digital Reverse',
      highlight: 'Daily Market & School Runs',
      description: 'Steel-reinforced canopy roof shields families from sun and tropical rainstorms, while push-button digital reverse makes crowded parking effortless.',
      specs: [
        { label: 'Weather Protection', value: 'UV & Rain Roof' },
        { label: 'Reverse Gear', value: '1-Touch Toggle' },
        { label: 'Lighting', value: 'High-Lumen LED' }
      ]
    }
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* 1. Clear Section Header with High-Order Hierarchy */}
      <div data-gsap="fade-up" className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-bold text-[#800020] uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5 text-[#800020]" />
          <span>Provincial Durability Standard</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.1]">
          Engineered for Rough Roads. <br />
          <span className="text-[#800020]">
            Tested for Total Reliability.
          </span>
        </h2>

        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Every JFM unit is manufactured with industrial-grade components calibrated specifically for Northern Luzon heat, rainy seasons, and rugged barangay paths.
        </p>
      </div>

      {/* 2. Structured 4-Pillar Reliability Matrix */}
      <div data-gsap="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {reliabilityPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white border border-zinc-200/90 hover:border-[#800020]/40 p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-lg transition-all duration-300 group"
          >
            {/* Top Tag & Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#fbf0f2] border border-[#800020]/20 flex items-center justify-center text-[#800020] group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200 uppercase tracking-wider">
                  {pillar.tag}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-[#800020] uppercase tracking-wide block">
                  {pillar.highlight}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 group-hover:text-[#800020] transition-colors">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>

            {/* Micro Telemetry Spec Grid */}
            <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-zinc-100">
              {pillar.specs.map((s, sIdx) => (
                <div key={sIdx} className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-100/80 space-y-0.5">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block truncate">
                    {s.label}
                  </span>
                  <span className="text-xs font-extrabold text-zinc-900 block truncate font-mono">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Comprehensive Dealership Reliability Guarantee Banner */}
      <div
        data-gsap="scale-in"
        className="rounded-3xl bg-gradient-to-r from-[#800020] via-[#6d001b] to-[#480012] text-white p-7 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8"
      >
        <div className="space-y-2 text-center lg:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-mono font-bold text-rose-200">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>DIRECT FACTORY GUARANTEE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            1-Year Official Motor & Electrical Warranty
          </h3>
          <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed">
            Every unit is inspected and calibrated before release. When maintenance is required, our 10 Ilocos hubs provide certified technicians and genuine factory parts.
          </p>
        </div>

        {/* 4 Quick Assurance Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center space-y-1">
            <span className="text-2xl font-black text-white block">10</span>
            <span className="text-[11px] text-rose-200 font-semibold block">Local Hubs</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center space-y-1">
            <span className="text-2xl font-black text-white block">100%</span>
            <span className="text-[11px] text-rose-200 font-semibold block">Parts In Stock</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center space-y-1">
            <span className="text-2xl font-black text-white block">₱8.50</span>
            <span className="text-[11px] text-rose-200 font-semibold block">Per Charge</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center space-y-1">
            <span className="text-2xl font-black text-white block">Free</span>
            <span className="text-[11px] text-rose-200 font-semibold block">Test Drive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
