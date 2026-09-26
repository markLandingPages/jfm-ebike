import { useState } from 'react';
import { Play, Youtube, ExternalLink, Sparkles } from 'lucide-react';
import hero_ebike_commuter_bike_1790339345034 from '../assets/images/hero_ebike_fleet_1790339326610.jpg';
import jfm_hero_lifestyle_ebike_1790339387002 from '../assets/images/jfm_hero_lifestyle_1790341591947.jpg';
import jfm_showroom_hero_1790339399358 from '../assets/images/jfm_showroom_hub_1790339391145.jpg';
interface ProductInActionProps {
  onExploreClick: () => void;
}

export default function ProductInActionSection({ onExploreClick }: ProductInActionProps) {
  const [activeVideo, setActiveVideo] = useState<'tour' | 'showcase'>('showcase');

  const actionHighlights = [
    {
      title: 'Daily Market & School Runs',
      description: 'Effortless step-through geometry, generous front storage basket, and 45–60 km range on a single charge.',
      tag: 'City Commuter Series',
      stat: '500W–600W Hub Motor',
      image: hero_ebike_commuter_bike_1790339345034
    },
    {
      title: 'All-Weather Family Transit',
      description: 'Full canopy overhead weather roof, comfortable bench seating for 3 passengers, and digital reverse gear.',
      tag: 'Heavy-Duty E-Trike',
      stat: '320kg Max Load',
      image: jfm_showroom_hero_1790339399358
    },
    {
      title: 'Off-Road & Farm Cargo Power',
      description: 'Reinforced utility cargo racks, 4-wheel off-road suspension, and heavy knobby tread tires for rough terrain.',
      tag: 'Quad ATV Series',
      stat: '125cc–200cc Engine',
      image: jfm_hero_lifestyle_ebike_1790339387002
    }
  ];

  return (
    <section id="showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-zinc-50/60 rounded-[40px] my-12 border border-zinc-200/80">
      {/* Section Header */}
      <div data-gsap="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-semibold text-[#800020]">
            <Sparkles className="w-3.5 h-3.5 text-[#800020]" />
            <span>Real Performance & Real Utility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
            See JFM Vehicles In Action <br className="hidden sm:inline" />
            <span className="text-[#800020]">Across Ilocos Roads.</span>
          </h2>
        </div>
        <p className="text-zinc-600 text-sm sm:text-base max-w-md leading-relaxed">
          From bustling town centers to provincial terrain, watch our electric fleet deliver smooth, economical, and dependable daily transportation.
        </p>
      </div>

      {/* Main Video Showcase Panel */}
      <div data-gsap="scale-in" className="rounded-3xl bg-white border border-zinc-200 p-6 sm:p-10 mb-14 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Video Player */}
          <div className="lg:col-span-8">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-zinc-200 shadow-lg">
              <iframe
                src={
                  activeVideo === 'showcase'
                    ? 'https://www.youtube.com/embed/AAejzY2EwDI?autoplay=0'
                    : 'https://www.youtube.com/embed/8x38AnuuzT4?autoplay=0'
                }
                title="JFM E-Bikes Testing and Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* Video Selector & Meta */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-mono text-[#800020] font-bold">
                Official Broadcast
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">
                Direct Unit Walkthrough & Road Test
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Watch detailed unit walkarounds, hill-climb capability tests, and live turn-overs at our San Juan and Vigan branches.
              </p>
            </div>

            {/* Selector Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={() => setActiveVideo('showcase')}
                className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                  activeVideo === 'showcase'
                    ? 'bg-[#fbf0f2] border-[#800020] text-[#800020] shadow-sm font-semibold'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${activeVideo === 'showcase' ? 'bg-[#800020] text-white' : 'bg-zinc-200 text-zinc-700'}`}>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block">E-Bike Fleet Showcase</span>
                    <span className="text-[11px] text-zinc-500">Test drives & features</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#800020] font-bold">Part 1</span>
              </button>

              <button
                onClick={() => setActiveVideo('tour')}
                className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                  activeVideo === 'tour'
                    ? 'bg-[#fbf0f2] border-[#800020] text-[#800020] shadow-sm font-semibold'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${activeVideo === 'tour' ? 'bg-[#800020] text-white' : 'bg-zinc-200 text-zinc-700'}`}>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block">JFM Group Highlights</span>
                    <span className="text-[11px] text-zinc-500">Branch & customer release</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#800020] font-bold">Part 2</span>
              </button>
            </div>

            <a
              href="https://www.youtube.com/@JohnFrancisManuelRNRMLPT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#800020] hover:text-[#5a0016] transition-colors pt-2"
            >
              <Youtube className="w-4 h-4 text-red-600" />
              <span>Watch full video updates on YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 3 Action Category Cards */}
      <div data-gsap="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {actionHighlights.map((card, idx) => (
          <div
            key={idx}
            className="rounded-3xl overflow-hidden bg-white border border-zinc-200 hover:border-[#800020] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div className="aspect-[16/10] w-full relative overflow-hidden bg-zinc-100">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 text-[11px] font-mono font-bold text-zinc-900 shadow-sm">
                {card.tag}
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#800020] text-white text-[11px] font-bold shadow-md">
                {card.stat}
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-zinc-950 group-hover:text-[#800020] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <button
                  onClick={onExploreClick}
                  className="text-xs font-bold text-[#800020] hover:text-[#5a0016] cursor-pointer flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>View in Inventory</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
