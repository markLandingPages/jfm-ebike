import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need a driver's license or LTO registration to drive an e-bike?",
      a: "Category L1a/L1b and electric bicycles intended for barangay and local municipal roads generally do not require a driver's license or mandatory LTO registration under existing e-mobility guidelines. For highway routes or commercial passenger transit, local municipal ordinances apply. Contact our team at 09366082578 for guidelines specific to your town."
    },
    {
      q: "How much does it cost to charge the battery from empty to full?",
      a: "On standard Ilocos residential electricity rates (ISECO / INEC), a full 6 to 8-hour charge costs approximately ₱7.00 to ₱10.00. This delivers roughly 40 to 60 km of travel—costing less than 10% of equivalent gasoline travel."
    },
    {
      q: "How far can I travel on a single charge?",
      a: "Range depends on rider weight, terrain, and motor size. Commuter 2-wheelers typically achieve 45–60 km per charge. 3-wheel passenger e-trikes carrying full passenger load achieve 35–45 km per charge."
    },
    {
      q: "Can the 3-wheel passenger e-trike carry heavy loads and climb bridge inclines?",
      a: "Yes. JFM 3-wheel models are equipped with high-torque 650W to 800W brushless motors with differential gearing designed specifically to handle 300kg+ payloads and steep bridge or driveway ramps without stalling."
    },
    {
      q: "What is the battery lifespan and where can I buy replacement batteries?",
      a: "Standard deep-cycle batteries last 2 to 3 years with normal daily charging, while lithium options last 4 to 5+ years. Because JFM operates 10 physical branches across Ilocos, official replacement battery packs, chargers, and controllers are always kept in stock locally."
    },
    {
      q: "Where are the 10 JFM display centers located?",
      a: "Our main headquarters is in Brgy. Bannuar, San Juan, Ilocos Sur. We maintain active display centers and service points in San Juan, Vigan, Narvacan, Candon, Tagudin, Bantay, Cabugao, Sinait, Laoag, and Batac."
    },
    {
      q: "How can I reserve a unit or schedule a free showroom test-drive?",
      a: "Simply browse our inventory gallery above, take a screenshot of your preferred unit or note its code, and call our central hotline at 09366082578. Our staff will confirm unit availability at your closest branch for immediate inspection or release."
    }
  ];

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* Header */}
      <div data-gsap="fade-up" className="text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-semibold text-[#800020]">
          <HelpCircle className="w-3.5 h-3.5 text-[#800020]" />
          <span>Got Questions? We Have Answers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
          Everything you need to know about owning, charging, and maintaining an electric bike in Ilocos.
        </p>
      </div>

      {/* Accordion */}
      <div data-gsap="stagger" className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#fdf6f7] border-[#800020]/30 shadow-md'
                  : 'bg-white border-zinc-200 hover:border-zinc-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-sm sm:text-base font-bold text-zinc-950">
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#800020] text-white rotate-180' : 'bg-zinc-100 text-zinc-600'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-700 leading-relaxed border-t border-[#800020]/15 mt-1 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Additional Help Callout */}
      <div data-gsap="scale-in" className="mt-12 p-6 rounded-3xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm font-bold text-zinc-950">Have a specific question not listed here?</h4>
          <p className="text-xs text-zinc-500">Speak directly with our showroom team.</p>
        </div>
        <a
          href="tel:09366082578"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#800020] hover:bg-[#6b001b] text-white text-xs font-bold transition-all shadow-md shadow-[#800020]/25 shrink-0 hover:scale-105"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call 09366082578</span>
        </a>
      </div>
    </section>
  );
}
