import { useEffect, useRef } from 'react';
import { Star, Phone, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import jfm_hero_lifestyle_ebike_1790339387002 from '../assets/images/jfm_hero_lifestyle_ebike_1790339387002.jpg';
import hero_video from '../assets/hero-video.mp4';
interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgesRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.1, clearProps: 'all' }
      )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, clearProps: 'all' },
        '-=0.4'
      )
      .fromTo(
        copyRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, clearProps: 'all' },
        '-=0.5'
      )
      .fromTo(
        ctasRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: 'all' },
        '-=0.4'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-zinc-950">
      {/* Background Video - High Visibility, Looping, Muted, No Controls */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover object-center scale-100 opacity-90 transition-opacity duration-700"
          poster={jfm_hero_lifestyle_ebike_1790339387002}
        >
          <source src={hero_video} type="video/mp4" />
        </video>

        {/* Soft Contrast Veil for clear text legibility */}
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[0.5px]" />

        {/* Smooth Bottom Fade Effect transitioning seamlessly into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Main Centered Content */}
      <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center space-y-6 sm:space-y-7">
        {/* Top Badges Group */}
        <div ref={badgesRef} className="flex flex-col items-center space-y-2 sm:space-y-2.5">
          {/* Top Review Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200/90 text-xs text-zinc-800 shadow-md">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-zinc-950">5.0</span>
            <span className="text-zinc-600 font-medium">350+ Verified Ilocos Owners</span>
          </div>

          {/* 3 Horizontal Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-3.5 py-0.5 rounded-full bg-[#fbf0f2]/95 backdrop-blur-md border border-[#800020]/25 text-[11px] sm:text-xs font-semibold text-[#800020] shadow-sm">
              Tier-1 Battery Platforms
            </span>
            <span className="px-3.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/90 text-[11px] sm:text-xs font-semibold text-zinc-800 shadow-sm">
              0% Gasoline Costs
            </span>
            <span className="px-3.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/90 text-[11px] sm:text-xs font-semibold text-zinc-800 shadow-sm">
              10 Display Centers
            </span>
          </div>
        </div>

        {/* Big Headline */}
        <div className="space-y-1 max-w-3xl">
          <h1 ref={headlineRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.08] drop-shadow-sm">
            Ilocos premier e-mobility, <br />
            <span className="font-semibold text-[#800020] drop-shadow-sm">
              engineered for real roads.
            </span>
          </h1>
        </div>

        {/* Supporting Copy */}
        <p ref={copyRef} className="text-zinc-800 text-base sm:text-lg leading-relaxed max-w-2xl font-medium mx-auto drop-shadow-xs">
          High-efficiency commuter electric bikes, passenger e-trikes, and heavy-duty quad ATVs for Ilocos Sur & Norte. Direct showroom stock with official warranty, battery service & genuine parts.
        </p>

        {/* CTA Button Group */}
        <div ref={ctasRef} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
          <button
            onClick={onExploreClick}
            className="group flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#800020] hover:bg-[#6b001b] text-white text-sm sm:text-base font-bold tracking-tight transition-all shadow-[0_8px_25px_rgba(128,0,32,0.4)] hover:shadow-[0_12px_32px_rgba(128,0,32,0.55)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Explore Inventory</span>
            <div className="w-6 h-6 rounded-full bg-white text-[#800020] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>

          <a
            href="tel:09366082578"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-zinc-200/90 text-sm sm:text-base text-zinc-800 hover:text-[#800020] font-medium transition-all shadow-md"
          >
            <div className="w-8 h-8 rounded-full bg-[#fbf0f2] border border-[#800020]/20 flex items-center justify-center text-[#800020] shadow-xs">
              <Phone className="w-3.5 h-3.5 fill-current" />
            </div>
            <span>Call Directly: <strong className="text-zinc-950 font-mono font-bold">(0936) 608-2578</strong></span>
          </a>
        </div>
      </div>
    </section>
  );
}
