import { ShieldCheck, MapPin, ExternalLink, Youtube, CheckCircle2 } from 'lucide-react';
import { BRANCHES_DATA } from '../data/ebikesData';

export default function GuaranteeFooterSection() {
  const guaranteePoints = [
    {
      title: '1-Year Motor & Electrical Warranty',
      desc: 'Full manufacturer warranty against factory defects on motor, controller, and major electrical components.'
    },
    {
      title: 'Guaranteed Local Spare Parts Stock',
      desc: 'Tires, tubes, brake pads, throttles, and replacement battery packs stocked across our Ilocos hubs.'
    },
    {
      title: 'Free 1st Preventive Maintenance Service',
      desc: 'Complimentary mechanical tuning, brake calibration, and battery diagnostics after your initial break-in period.'
    },
    {
      title: '10-Branch Walk-In Network',
      desc: 'Honor your warranty and receive service assistance at any of our 10 locations across Ilocos Sur & Norte.'
    }
  ];

  return (
    <footer id="guarantee" className="border-t border-zinc-200 bg-zinc-950 text-white pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Official Guarantee Box in Deep Maroon */}
        <div data-gsap="scale-in" className="rounded-3xl bg-gradient-to-br from-[#800020] via-[#6a001b] to-[#450012] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Guarantee Header */}
            <div className="lg:col-span-4 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-200">
                  Official Warranty Protection
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  The JFM 100% Peace-of-Mind Guarantee
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
                When you buy from JFM E-Bikes, you are backed by a registered Philippine company with physical showrooms, real technicians, and dedicated customer service.
              </p>
            </div>

            {/* Right Guarantee Points */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guaranteePoints.map((pt, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-black/20 border border-white/20 backdrop-blur-md space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>{pt.title}</span>
                  </div>
                  <p className="text-xs text-rose-100 leading-relaxed pl-6">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Navigation & 10 Branch Directory */}
        <div id="locations" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pt-4">
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-white">
                JFM <span className="text-[#a01c3b]">E-BIKES</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              JFM E-Bikes Trading & Services is the premier e-mobility dealership in Ilocos, operating 10 physical display centers alongside regional security, ticketing, and document services.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.facebook.com/JFMeBikeShopMaintenanceandRepair"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.youtube.com/@JohnFrancisManuelRNRMLPT"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Youtube className="w-3.5 h-3.5 text-red-500" />
                <span>YouTube Channel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#hero" className="hover:text-rose-400 transition-colors">Home</a></li>
              <li><a href="#problem" className="hover:text-rose-400 transition-colors">Why Switch</a></li>
              <li><a href="#showcase" className="hover:text-rose-400 transition-colors">In Action</a></li>
              <li><a href="#features" className="hover:text-rose-400 transition-colors">Features & Tech</a></li>
              <li><a href="#inventory" className="hover:text-rose-400 transition-colors">Live Inventory</a></li>
              <li><a href="#reviews" className="hover:text-rose-400 transition-colors">Social Proof</a></li>
              <li><a href="#comparison" className="hover:text-rose-400 transition-colors">Comparison & Value</a></li>
              <li><a href="#reserve" className="hover:text-rose-400 transition-colors">Reserve a Unit</a></li>
              <li><a href="#faq" className="hover:text-rose-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* 10 Branch Quick Directory */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                10 Ilocos Display Centers
              </h4>
              <span className="text-[10px] font-mono text-rose-400 font-semibold">Open Mon–Sat</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
              {BRANCHES_DATA.map((b) => (
                <div key={b.name} className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-3 h-3 text-[#a01c3b] shrink-0" />
                  <span className="truncate">{b.municipality} ({b.province})</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-zinc-400">Central Hotline:</span>
              <a href="tel:09366082578" className="text-sm font-bold text-white hover:text-rose-400 font-mono transition-colors">
                09366082578
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} JFM Group of Businesses · JFM E-Bikes Trading & Services. All rights reserved.</p>
          <p>Main Office: Brgy. Bannuar, San Juan, Ilocos Sur, Philippines.</p>
        </div>
      </div>
    </footer>
  );
}
