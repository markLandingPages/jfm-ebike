import { BatteryCharging, Zap, Shield, RotateCcw, CloudRain, Cpu, Coins } from 'lucide-react';

export default function FeaturesBenefitsSection() {
  const features = [
    {
      icon: Coins,
      title: '90% Transportation Savings',
      highlight: '₱8.50 per charge',
      description: 'Zero gasoline, zero oil changes, and zero spark plug replacements. Charge overnight using standard 220V household wall outlets.'
    },
    {
      icon: BatteryCharging,
      title: 'High-Density Battery Tech',
      highlight: '40–60 km range',
      description: 'Engineered with premium deep-cycle cell configurations, smart battery management (BMS), and surge-protected fast chargers.'
    },
    {
      icon: Zap,
      title: 'High-Torque Hub Motors',
      highlight: '500W to 800W power',
      description: 'Silent brushless DC motors deliver instantaneous uphill torque for bridge climbs, inclined driveways, and loaded cargo.'
    },
    {
      icon: CloudRain,
      title: 'All-Weather Canopy Enclosure',
      highlight: 'Rain & sun protection',
      description: 'Tough steel-frame canopy roofs on 3-wheel passenger models keep children and cargo shielded from intense heat or heavy tropical downpours.'
    },
    {
      icon: RotateCcw,
      title: 'Digital Reverse & Parking Gear',
      highlight: 'One-switch maneuvering',
      description: 'Effortless 3-point turns and tight parking in crowded market alleys without pushing with your feet.'
    },
    {
      icon: Shield,
      title: 'Reinforced Steel Chassis',
      highlight: 'Up to 350 kg payload',
      description: 'Heavy gauge steel tubing and front/rear hydraulic damping absorb rugged provincial barangay roads with ease.'
    }
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* Header */}
      <div data-gsap="fade-up" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-semibold text-[#800020]">
          <Cpu className="w-3.5 h-3.5 text-[#800020]" />
          <span>Engineered For Reliability</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
          Built for Provincial Travel. <br />
          <span className="text-[#800020]">
            Engineered for Pure Savings.
          </span>
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
          Every JFM e-bike and e-trike is spec'd specifically for Northern Luzon roads, offering durable components and low total cost of ownership.
        </p>
      </div>

      {/* 6 Features Grid */}
      <div data-gsap="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white border border-zinc-200 hover:border-[#800020]/50 p-7 sm:p-8 space-y-4 transition-all duration-300 group flex flex-col justify-between shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#fbf0f2] border border-[#800020]/20 flex items-center justify-center text-[#800020] group-hover:scale-110 transition-transform">
                  <feat.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#fbf0f2] text-[#800020] border border-[#800020]/20">
                  {feat.highlight}
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-950 group-hover:text-[#800020] transition-colors">
                {feat.title}
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed">
                {feat.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400">
              <span>Standard across series</span>
              <span className="text-[#800020] font-semibold">Verified Spec ✓</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
