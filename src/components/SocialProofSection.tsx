import { Star, CheckCircle2, Quote, MapPin, Building2, ShieldCheck, ThumbsUp, Sparkles, Store, Award, BadgeCheck } from 'lucide-react';
import { REVIEWS_DATA } from '../data/ebikesData';

export default function SocialProofSection() {
  const featuredReview = REVIEWS_DATA[0];
  const otherReviews = REVIEWS_DATA.slice(1);

  return (
    <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* Section Header */}
      <div data-gsap="fade-up" className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-semibold text-[#800020]">
          <BadgeCheck className="w-3.5 h-3.5 text-[#800020]" />
          <span>Real Ilocos Owners · Verified Deliveries</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.1]">
          Trusted on Ilocos Roads. <br />
          <span className="text-[#800020]">
            Backed by Real Neighbors.
          </span>
        </h2>

        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Over 350 families, small business owners, and daily commuters across Ilocos Sur & Norte rely on JFM every single day.
        </p>
      </div>

      {/* Trust Ledger: Headline Hero Proof Block */}
      <div data-gsap="scale-in" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
        
        {/* Left: Prominent Verified Customer Spotlight (7 Cols) */}
        <div className="lg:col-span-7 rounded-3xl bg-zinc-900 text-white p-7 sm:p-9 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#800020]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(featuredReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-white">5.0 / 5.0 Rating</span>
              </div>

              <span className="px-3 py-1 rounded-full bg-white/10 text-rose-200 text-xs font-mono font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Buyer Spotlight</span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-zinc-100 font-medium leading-relaxed">
              "{featuredReview.comment}"
            </p>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                {featuredReview.name}
              </h4>
              <p className="text-rose-200/90 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-rose-400" />
                <span>{featuredReview.location}</span>
              </p>
            </div>

            <div className="sm:text-right">
              <span className="text-zinc-400 block text-[11px]">Unit Purchased:</span>
              <span className="text-white font-semibold font-mono">{featuredReview.unitPurchased}</span>
            </div>
          </div>
        </div>

        {/* Right: Dealership Proof Scoreboard (5 Cols) */}
        <div className="lg:col-span-5 rounded-3xl bg-[#fbf0f2] border border-[#800020]/20 p-7 sm:p-9 flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#800020]">
              Official Track Record
            </span>
            <h3 className="text-2xl font-extrabold text-zinc-950">
              Why Ilocanos Trust JFM E-Bikes
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              We are a registered regional enterprise with physical presence, accountable management, and genuine spare parts.
            </p>
          </div>

          {/* Quick Credibility Badges */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-white border border-[#800020]/15 space-y-1 shadow-2xs">
              <span className="text-2xl font-black text-[#800020] block">350+</span>
              <span className="text-xs font-bold text-zinc-800 block">Units Delivered</span>
              <span className="text-[10px] text-zinc-500">Across Ilocos</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-[#800020]/15 space-y-1 shadow-2xs">
              <span className="text-2xl font-black text-[#800020] block">10 Hubs</span>
              <span className="text-xs font-bold text-zinc-800 block">Display Centers</span>
              <span className="text-[10px] text-zinc-500">Walk-In Access</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-[#800020]/15 space-y-1 shadow-2xs">
              <span className="text-2xl font-black text-[#800020] block">1-Year</span>
              <span className="text-xs font-bold text-zinc-800 block">Motor Warranty</span>
              <span className="text-[10px] text-zinc-500">Official Coverage</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-[#800020]/15 space-y-1 shadow-2xs">
              <span className="text-2xl font-black text-[#800020] block">100%</span>
              <span className="text-xs font-bold text-zinc-800 block">Parts In Stock</span>
              <span className="text-[10px] text-zinc-500">Tires & Batteries</span>
            </div>
          </div>
        </div>

      </div>

      {/* Grid of Other Verified Local Reviews */}
      <div data-gsap="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {otherReviews.map((rev) => (
          <div
            key={rev.id}
            className="rounded-3xl bg-white border border-zinc-200/90 p-6 space-y-4 flex flex-col justify-between shadow-xs hover:border-[#800020]/40 hover:shadow-md transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-zinc-200" />
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-100 space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-zinc-950 truncate">{rev.name}</span>
                <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  Verified
                </span>
              </div>
              <p className="text-[#800020] font-semibold text-[11px] flex items-center gap-1">
                <MapPin className="w-3 h-3 shrink-0" />
                <span className="truncate">{rev.location}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Footnote */}
      <div data-gsap="fade-up" className="mt-10 p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <div className="flex items-center gap-2">
          <Store className="w-4 h-4 text-[#800020] shrink-0" />
          <span>
            Have questions about any unit? Visit your closest showroom or call our central team at <strong className="text-zinc-950 font-mono">09366082578</strong>.
          </span>
        </div>
        <a
          href="#inventory"
          className="font-bold text-[#800020] hover:underline shrink-0"
        >
          View Available Units →
        </a>
      </div>
    </section>
  );
}
