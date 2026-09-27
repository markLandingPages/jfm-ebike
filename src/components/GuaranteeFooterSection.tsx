import { ShieldCheck, MapPin, ExternalLink, Youtube, CheckCircle2, FileText, Building2 } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import { BOOKING_CONTACT_INFO } from '../data/ebikesData';

export default function GuaranteeFooterSection() {
  const { branches, config } = useCms();

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
      title: `${branches.length}-Branch Walk-In Network`,
      desc: `Honor your warranty and receive service assistance at any of our ${branches.length} locations across Ilocos Sur & Norte.`
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
                When you buy from JFM E-Bikes or transact with JFM Group of Businesses, you are backed by registered physical offices, real technicians, and dedicated regional management.
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
                JFM <span className="text-[#a01c3b]">GROUP OF BUSINESSES</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              JFM Group is an integrated enterprise based in Ilocos, operating 10 physical e-mobility showrooms alongside authorized government booking, document liaison, digital marketing, bookkeeping, and security surveillance divisions.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={config.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Youtube className="w-3.5 h-3.5 text-red-500" />
                <span>YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Business Divisions
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#inventory" className="hover:text-rose-400 transition-colors">JFM E-Bikes & E-Trikes</a></li>
              <li><a href="#booking-services" className="hover:text-rose-400 transition-colors">JFM Booking & Gov't Docs</a></li>
              <li><a href="#other-businesses" className="hover:text-rose-400 transition-colors">JFM Online Booking (Flights/Sea)</a></li>
              <li><a href="#other-businesses" className="hover:text-rose-400 transition-colors">JFM Document Processing</a></li>
              <li><a href="#other-businesses" className="hover:text-rose-400 transition-colors">JFM Digital Marketing</a></li>
              <li><a href="#other-businesses" className="hover:text-rose-400 transition-colors">JFM Bookkeeping & BIR Tax</a></li>
              <li><a href="#other-businesses" className="hover:text-rose-400 transition-colors">JFM CCTV & Security</a></li>
            </ul>
          </div>

          {/* Display Centers Directory */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {branches.length} Ilocos Display Centers
              </h4>
              <span className="text-[10px] font-mono text-rose-400 font-semibold">Open Mon–Sat</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
              {branches.map((b) => (
                <div key={b.name + b.municipality} className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-3 h-3 text-[#a01c3b] shrink-0" />
                  <span className="truncate">{b.municipality} ({b.province})</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-zinc-400">Central Hotlines:</span>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-white">
                <a href={`tel:${config.hotline}`} className="hover:text-rose-400 transition-colors">
                  {config.hotline}
                </a>
                <span>·</span>
                <a href={`tel:${BOOKING_CONTACT_INFO.contactNumbers[0]}`} className="hover:text-rose-400 transition-colors">
                  {BOOKING_CONTACT_INFO.contactNumbers[0]}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} JFM Group of Businesses · John Francis L. Manuel. All rights reserved.</p>
          <span>Main HQ: {BOOKING_CONTACT_INFO.address}</span>
        </div>
      </div>
    </footer>
  );
}
