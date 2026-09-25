import { MapPin } from 'lucide-react';
import { BRANCHES_DATA } from '../data/ebikesData';

export default function BranchTicker() {
  return (
    <div className="w-full border-y border-zinc-200 bg-[#fdf6f7]/60 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 shrink-0 text-xs font-bold text-[#800020] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#800020]" />
            <span>10 Showrooms Across Ilocos:</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-zinc-600">
            {BRANCHES_DATA.map((b) => (
              <a
                key={b.name}
                href="#branches"
                className="hover:text-[#800020] transition-colors flex items-center gap-1.5"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${b.isMain ? 'bg-[#800020]' : 'bg-zinc-400'}`} />
                <span className="font-semibold text-zinc-800">{b.municipality}</span>
                {b.isMain && <span className="text-[10px] text-[#800020] font-mono font-bold">(HQ)</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
