import { Star, CheckCircle2, Quote, MapPin, Building2, Users, Award } from 'lucide-react';
import { REVIEWS_DATA } from '../data/ebikesData';

export default function SocialProofSection() {
  const metrics = [
    { value: '350+', label: 'Units Delivered in Ilocos', icon: Users },
    { value: '10', label: 'Physical Display Centers', icon: Building2 },
    { value: '4.98 / 5', label: 'Average Customer Rating', icon: Star },
    { value: 'Since 2019', label: 'Trusted Regional Brand', icon: Award }
  ];

  return (
    <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* Header */}
      <div data-gsap="fade-up" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-semibold text-[#800020]">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>Real Voices From Real Owners</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
          Trusted by Families & Businesses <br />
          <span className="text-[#800020]">
            Across Ilocos Sur & Norte.
          </span>
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
          See why buyers across 10 municipalities choose JFM for their daily mobility, school runs, and neighborhood deliveries.
        </p>
      </div>

      {/* Proof Stats Bar */}
      <div data-gsap="stagger" className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-3xl bg-zinc-50 border border-zinc-200 text-center space-y-2 relative overflow-hidden shadow-sm hover:border-[#800020]/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#fbf0f2] border border-[#800020]/20 flex items-center justify-center text-[#800020]">
              <m.icon className="w-5 h-5" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-zinc-950 block tracking-tight">
              {m.value}
            </span>
            <p className="text-xs text-zinc-600 font-semibold">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      {/* Reviews Cards Grid */}
      <div data-gsap="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS_DATA.map((rev) => (
          <div
            key={rev.id}
            className="rounded-3xl bg-white border border-zinc-200 hover:border-[#800020]/50 p-7 space-y-5 transition-all duration-300 flex flex-col justify-between group shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1"
          >
            <div className="space-y-3.5">
              {/* Star Rating */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-zinc-300 group-hover:text-[#800020] transition-colors" />
              </div>

              {/* Review Text */}
              <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                "{rev.comment}"
              </p>
            </div>

            {/* Author Meta */}
            <div className="pt-4 border-t border-zinc-100 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-zinc-950 flex items-center gap-1.5">
                  {rev.name}
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </span>
                <span className="text-xs text-zinc-400 font-mono">{rev.date}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#800020] font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {rev.location}
                </span>
                <span className="text-zinc-500 font-medium">Unit: {rev.unitPurchased}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
