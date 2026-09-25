import { useState } from 'react';
import { X, Phone, Copy, Check, ExternalLink, Zap, Battery, Gauge, Weight, Clock, ShieldCheck, Camera } from 'lucide-react';
import { EbikeUnit } from '../data/ebikesData';

interface UnitModalProps {
  unit: EbikeUnit | null;
  onClose: () => void;
}

export default function UnitModal({ unit, onClose }: UnitModalProps) {
  const [copied, setCopied] = useState(false);

  if (!unit) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`Unit: ${unit.name} (${unit.code})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-zinc-200 p-6 sm:p-8 shadow-2xl z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-950 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Photo & Tip */}
          <div className="space-y-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
              <img
                src={unit.image}
                alt={unit.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-black/80 text-white text-xs font-mono font-bold px-2.5 py-1 rounded-lg">
                {unit.code}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#fbf0f2] border border-[#800020]/20 text-xs font-medium text-[#800020] flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#800020] shrink-0" />
              <span>Screenshot this unit for fast branch inquiries</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-1.5">
              <span className="text-xs uppercase font-bold text-[#800020] tracking-wider">
                {unit.categoryLabel}
              </span>
              <h3 className="text-2xl font-extrabold text-zinc-950">
                {unit.name}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {unit.description}
              </p>
            </div>

            {/* Spec Matrix */}
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-zinc-200 text-xs bg-zinc-50 rounded-xl p-3">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase font-bold block">Motor</span>
                <span className="font-bold text-zinc-900 text-sm">{unit.motor}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase font-bold block">Battery</span>
                <span className="font-bold text-zinc-900 text-sm">{unit.battery}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase font-bold block">Range</span>
                <span className="font-bold text-zinc-900 text-sm">{unit.range}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase font-bold block">Max Load</span>
                <span className="font-bold text-zinc-900 text-sm">{unit.maxLoad}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="tel:09366082578"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#800020] hover:bg-[#6b001b] text-white text-sm font-bold transition-all shadow-md shadow-[#800020]/25"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline</span>
              </a>

              <button
                onClick={handleCopyCode}
                className="py-3 px-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold border border-zinc-200 transition-colors cursor-pointer"
                title="Copy unit code"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>

              <a
                href="https://www.facebook.com/JFMeBikeShopMaintenanceandRepair"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200 transition-colors"
                title="Facebook"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
