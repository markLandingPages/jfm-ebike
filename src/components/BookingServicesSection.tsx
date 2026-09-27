import { useState } from 'react';
import {
  FileText,
  Search,
  AlertCircle,
  Phone,
  ShieldCheck,
  Building2,
  Clock,
  X,
  MapPin,
  ExternalLink,
  Table as TableIcon,
  LayoutGrid,
  Info,
  FileCheck
} from 'lucide-react';
import {
  BOOKING_SERVICES_DATA,
  BOOKING_CONTACT_INFO,
  PAYMENT_METHODS,
  BookingService
} from '../data/ebikesData';
import { useCms } from '../context/CmsContext';

import dfa_logo from '../assets/images/dfa-logo.png';
import prc_logo from '../assets/images/prc-logo.png';
import pcap_logo from '../assets/images/pcap-logo.png';
import nbi_logo from '../assets/images/nbi-logo.png';
import psa_logo from '../assets/images/psa-logo.png';
import lto_logo from '../assets/images/lto-logo.png';
import poea_logo from '../assets/images/poea-logo.png'

import booking1 from '../assets/images/booking-testimonial-1.jpg';
import booking2 from '../assets/images/booking-testimonial-2.jpg';
import booking3 from '../assets/images/booking-testimonial-3.jpg';
import booking4 from "../assets/images/booking-testimonial-4.jpg";
import booking5 from "../assets/images/booking-testimonial-5.jpg";
import booking6 from "../assets/images/booking-testimonial-6.jpg";

const getAgencyLogo = (agency: string) => {
  if (agency.includes('DFA')) return dfa_logo;
  if (agency.includes('PRC')) return prc_logo;
  if (agency.includes('PCAP')) return pcap_logo;
  if (agency.includes('NBI') || agency.includes('NPC')) return nbi_logo;
  if (agency.includes('PSA')) return psa_logo;
  if (agency.includes('LTO')) return lto_logo;
  if (agency.includes('POEA')) return poea_logo; 
  return null;
};

const renderRequirementsList = (reqs: string) => {
  const items = reqs.split(';').map((i) => i.trim()).filter(Boolean);
  return (
    <ul className="space-y-1.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 leading-snug">
          <span className="w-1.5 h-1.5 rounded-full bg-[#800020] mt-1.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default function BookingServicesSection() {
  const { config } = useCms();
  const [selectedAgency, setSelectedAgency] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [activeService, setActiveService] = useState<BookingService | null>(null);

  const agencies = [
    { id: 'all', label: 'All Services', count: BOOKING_SERVICES_DATA.length },
    { id: 'DFA', label: 'DFA Passports', count: BOOKING_SERVICES_DATA.filter((s) => s.agency.includes('DFA')).length },
    { id: 'PRC', label: 'PRC Licensing', count: BOOKING_SERVICES_DATA.filter((s) => s.agency.includes('PRC')).length },
    { id: 'PSA', label: 'PSA Certificates', count: BOOKING_SERVICES_DATA.filter((s) => s.agency.includes('PSA')).length },
    { id: 'LTO', label: 'LTO License', count: BOOKING_SERVICES_DATA.filter((s) => s.agency.includes('LTO')).length },
    { id: 'POEA e-Reg', label: 'POEA / OFW', count: BOOKING_SERVICES_DATA.filter((s) => s.agency.includes('POEA')).length },
    { id: 'PCAP', label: 'PCAP', count: BOOKING_SERVICES_DATA.filter((s) => s.agency.includes('PCAP')).length },
    { id: 'NBI / NPC', label: 'NBI / NPC', count: BOOKING_SERVICES_DATA.filter((s) => s.agency.includes('NBI')).length }
  ];

  const filteredServices = BOOKING_SERVICES_DATA.filter((svc) => {
    const matchesAgency = selectedAgency === 'all' || svc.agency.toLowerCase().includes(selectedAgency.toLowerCase());
    const matchesSearch =
      svc.serviceType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.agency.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (svc.requirements && svc.requirements.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (svc.price && svc.price.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (svc.notes && svc.notes.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesAgency && matchesSearch;
  });

  const getAgencyColor = (agency: string) => {
    if (agency.includes('DFA')) return 'bg-blue-50 text-blue-700 border-blue-200';
    if (agency.includes('PRC')) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (agency.includes('PSA')) return 'bg-rose-50 text-rose-700 border-rose-200';
    if (agency.includes('LTO')) return 'bg-amber-50 text-amber-800 border-amber-200';
    if (agency.includes('POEA')) return 'bg-purple-50 text-purple-700 border-purple-200';
    if (agency.includes('NBI')) return 'bg-teal-50 text-teal-700 border-teal-200';
    if (agency.includes('PCAP')) return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    return 'bg-zinc-100 text-zinc-800 border-zinc-200';
  };

  return (
    <section id="booking-services" className="bg-zinc-50/80 border-y border-zinc-200 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div data-gsap="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbf0f2] border border-[#800020]/20 text-xs font-bold text-[#800020] uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-[#800020]" />
              <span>Official Service Catalog · 26 Government Transactions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              JFM Government Booking Services & Fee Schedule
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Transparent, organized pricing and documentary requirements for PRC renewals, DFA Passports, PSA Civil Registry, LTO licensing, POEA, and NBI clearances.
            </p>
          </div>

          {/* Quick Notice Pill */}
          <div className="flex items-center gap-2">
            <div className="px-4 py-2.5 rounded-2xl bg-white border border-zinc-200 text-xs text-zinc-700 flex items-center gap-2.5 shadow-xs">
              <Building2 className="w-4 h-4 text-[#800020] shrink-0" />
              <span>Physical Liaison: <strong>BVP Bldg, Bannuar, San Juan</strong></span>
            </div>
          </div>
        </div>

        {/* Official Contact & Direct Payment Notice Card */}
        <div data-gsap="fade-up" className="rounded-3xl bg-white border border-zinc-200 shadow-xs p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
              <ShieldCheck className="w-4 h-4 text-[#800020]" />
              <span>Authorized Representative & Processing Officer</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-950">
                {BOOKING_CONTACT_INFO.name}
              </h3>
              <p className="text-xs text-zinc-600 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>{BOOKING_CONTACT_INFO.address}</span>
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-zinc-500 font-semibold mr-1">Hotlines:</span>
              {BOOKING_CONTACT_INFO.contactNumbers.map((num) => (
                <a
                  key={num}
                  href={`tel:${num}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-[#800020] hover:text-white text-xs font-mono font-bold text-zinc-800 transition-colors shadow-2xs"
                >
                  <Phone className="w-3 h-3 text-[#800020]" />
                  <span>{num}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 space-y-2 text-xs leading-relaxed">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Official Payment Guidelines</span>
            </div>
            <p className="text-[11px] text-amber-900/90">
              {BOOKING_CONTACT_INFO.paymentNote}
            </p>
          </div>
        </div>

        {/* Filter Bar, Search, and View Mode Toggle (Table vs Cards) */}
        <div data-gsap="fade-up" className="space-y-3">
          {/* Agency Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {agencies.map((agency) => (
              <button
                key={agency.id}
                onClick={() => setSelectedAgency(agency.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedAgency === agency.id
                    ? 'bg-[#800020] text-white shadow-xs'
                    : 'bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                <span>{agency.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedAgency === agency.id ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-600'
                }`}>
                  {agency.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Bar & View Mode Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2 rounded-2xl bg-white border border-zinc-200 shadow-xs">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search transaction, fee, keyword (e.g. Passport, Birth, LERIS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#800020] focus:bg-white transition-colors"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 self-end sm:self-auto bg-zinc-100 p-1 rounded-xl border border-zinc-200 shrink-0">
              <button
                onClick={() => setViewMode('table')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
                title="Structured Table View"
              >
                <TableIcon className="w-3.5 h-3.5 text-[#800020]" />
                <span>Table View</span>
              </button>

              <button
                onClick={() => setViewMode('cards')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
                title="Service Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-[#800020]" />
                <span>Cards View</span>
              </button>
            </div>
          </div>
        </div>

        {/* RESULTS: TABLE VIEW (Default) */}
        {viewMode === 'table' && (
          <div data-gsap="fade-up" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="overflow-x-auto scrollbar-thin">
              <table className="w-full text-left border-collapse min-w-[760px]">
                <thead>
                  <tr className="bg-zinc-100/70 border-b border-zinc-200 text-[11px] font-bold uppercase tracking-wider text-zinc-600">
                    <th className="py-3.5 px-4 w-28">Agency</th>
                    <th className="py-3.5 px-4 min-w-[220px]">Service / Transaction</th>
                    <th className="py-3.5 px-4 w-44">Official Fee / Rate</th>
                    <th className="py-3.5 px-4 min-w-[260px]">Required Documents</th>
                    <th className="py-3.5 px-4 w-40">Processing Notes</th>
                    <th className="py-3.5 px-4 text-right w-36">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/80 text-xs text-zinc-700">
                  {filteredServices.map((svc) => (
                    <tr
                      key={svc.id}
                      className="hover:bg-rose-50/30 transition-colors group"
                    >
                      {/* Agency Badge */}
                      <td className="py-4 px-4 align-top">
                        <div className="flex items-center gap-3">
                          <span className={`inline-block px-2.5 py-0.5 rounded-md border text-[11px] font-bold uppercase tracking-wider ${getAgencyColor(svc.agency)}`}>
                            {svc.agency}
                          </span>
                        </div>
                      </td>

                      {/* Service Title */}
                      <td className="py-4 px-4 align-top">
                        <div className="font-bold text-zinc-950 text-sm group-hover:text-[#800020] transition-colors leading-snug">
                          {svc.serviceType}
                        </div>
                      </td>

                      {/* Price */}
                      <td className="py-4 px-4 align-top">
                        {svc.price ? (
                          <div className="font-mono font-extrabold text-zinc-950 bg-zinc-100 px-2.5 py-1 rounded-lg border border-zinc-200 inline-block text-xs sm:text-sm">
                            ₱{svc.price}
                          </div>
                        ) : (
                          <span className="text-zinc-500 italic text-xs">
                            Inquire for fee
                          </span>
                        )}
                      </td>

                      {/* Requirements */}
                      <td className="py-4 px-4 align-top text-zinc-600">
                        {svc.requirements ? (
                          <div className="space-y-1">
                            <p className="line-clamp-2 text-xs leading-relaxed" title={svc.requirements}>
                              {svc.requirements}
                            </p>
                            <button
                              onClick={() => setActiveService(svc)}
                              className="text-[11px] font-bold text-[#800020] hover:underline cursor-pointer flex items-center gap-1"
                            >
                              <FileCheck className="w-3 h-3" />
                              <span>View checklist</span>
                            </button>
                          </div>
                        ) : (
                          <span className="text-zinc-400 italic">None specified</span>
                        )}
                      </td>

                      {/* Notes / Turnaround */}
                      <td className="py-4 px-4 align-top">
                        {svc.notes ? (
                          <div className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-700 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200">
                            <Clock className="w-3 h-3 text-zinc-400 shrink-0" />
                            <span>{svc.notes}</span>
                          </div>
                        ) : (
                          <span className="text-zinc-400 text-xs">—</span>
                        )}
                      </td>

                      {/* Action Call Button */}
                      <td className="py-4 px-4 align-top text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <a
                            href={`tel:${BOOKING_CONTACT_INFO.contactNumbers[0]}`}
                            className="py-1.5 px-3 rounded-xl bg-[#800020] hover:bg-[#6b001b] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1"
                            title={`Call ${BOOKING_CONTACT_INFO.contactNumbers[0]}`}
                          >
                            <Phone className="w-3 h-3" />
                            <span>Call</span>
                          </a>

                          <button
                            onClick={() => setActiveService(svc)}
                            className="p-1.5 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
                            title="View Full Details"
                          >
                            <Info className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer Summary */}
            <div className="p-3.5 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
              <span>Showing <strong>{filteredServices.length}</strong> of {BOOKING_SERVICES_DATA.length} registered services</span>
              <span>Liaison Desk Hotline: <strong className="font-mono text-zinc-900">{BOOKING_CONTACT_INFO.contactNumbers[0]}</strong></span>
            </div>
          </div>
        )}

        {/* RESULTS: CARDS VIEW */}
        {viewMode === 'cards' && (
          <div data-gsap="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-3xl border border-zinc-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#800020]/40"
              >
                <div className="space-y-3.5">
                  {/* Agency Pill & Price Tag */}
                  <div className="flex flex-col justify-center items-center gap-2">
                    <div className="flex items-center gap-2.5">
                      {getAgencyLogo(svc.agency) && (
                        <img
                          src={getAgencyLogo(svc.agency)!}
                          alt={svc.agency}
                        />
                      )}
                    </div>
                    {svc.price ? (
                      <span className="font-mono text-xs sm:text-sm font-extrabold text-zinc-950 bg-zinc-100 px-2.5 py-0.5 rounded-lg border border-zinc-200">
                        ₱{svc.price}
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-zinc-500 italic">
                        Inquire for fee
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <div>
                    <h4 className="text-base font-bold text-zinc-950 group-hover:text-[#800020] transition-colors leading-snug">
                      {svc.serviceType}
                    </h4>
                    {svc.notes && (
                      <div className="mt-1 flex items-center gap-1 text-[11px] text-zinc-500 font-medium">
                        <Clock className="w-3 h-3 text-zinc-400" />
                        <span>{svc.notes}</span>
                      </div>
                    )}
                  </div>

                  {/* Requirements Box */}
                  {svc.requirements && (
                    <div className="pt-2 border-t border-zinc-100 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        Document Requirements:
                      </span>
                      <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100">
                        {renderRequirementsList(svc.requirements)}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 mt-5 border-t border-zinc-100 flex items-center gap-2">
                  <a
                    href={`tel:${BOOKING_CONTACT_INFO.contactNumbers[0]}`}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#800020] hover:bg-[#6b001b] text-white text-xs font-bold text-center transition-all shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call to Avail</span>
                  </a>

                  {svc.formUrl && (
                    <a
                      href={svc.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold text-center transition-all shadow-xs flex items-center justify-center gap-1"
                      title="Fill Online Form"
                    >
                      <span>Form</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveService(svc)}
                    className="py-2.5 px-3 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-zinc-700 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    title="View Details"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-zinc-200 space-y-3">
            <AlertCircle className="w-10 h-10 text-zinc-400 mx-auto" />
            <h4 className="text-base font-bold text-zinc-900">No matching services found</h4>
            <p className="text-xs text-zinc-500 max-w-md mx-auto">
              Try searching for "Passport", "Birth Certificate", "PRC", "Renewal", or select another agency.
            </p>
            <button
              onClick={() => {
                setSelectedAgency('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#800020] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Client Testimonial Gallery */}
        <div className="mt-16 pt-12 border-t border-zinc-200 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="px-3 py-1 rounded-full bg-rose-50 text-[#800020] border border-rose-200 text-[11px] font-bold uppercase tracking-wider inline-block">
              Client Testimonials & Proof of Transactions
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
              Verified Feedback & Successful Bookings
            </h3>
            <p className="text-xs text-zinc-600">
              Screenshots and proof of successful government document processing and client interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { img: booking1, title: 'PRC Renewal Testimonial' },
              { img: booking2, title: 'DFA Passport Testimonial' },
              { img: booking3, title: 'PCAP Membership Testimonial' },
              { img: booking4, title: 'PSA & NBI Testimonial' },
              { img: booking5, title: 'LTO License Testimonial' },
              { img: booking6, title: 'POEA OFW Testimonial' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-zinc-200 p-3 shadow-xs hover:shadow-md transition-all group overflow-hidden"
              >
                <div className="rounded-2xl overflow-hidden border border-zinc-100 bg-zinc-50 aspect-square flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Informational Service Guide Dialog (No Form / No Inputs) */}
      {activeService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-zinc-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-3 text-center">
              <div className="flex flex-col justify-center items-center gap-3">
                {getAgencyLogo(activeService.agency) && (
                  <img
                    src={getAgencyLogo(activeService.agency)!}
                    alt={activeService.agency}
                    className=""
                  />
                )}
                <div>
                  <span className={`px-2.5 py-0.5 rounded-md border text-[11px] font-bold uppercase tracking-wider ${getAgencyColor(activeService.agency)}`}>
                    {activeService.agency}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-950 mt-1">
                    {activeService.serviceType}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-600 pt-1">
                <span>Fee: <strong className="font-mono text-zinc-950 font-bold">{activeService.price ? `₱${activeService.price}` : 'Inquire for quote'}</strong></span>
                {activeService.notes && <span>• {activeService.notes}</span>}
              </div>
            </div>

            {activeService.requirements && (
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2.5 text-xs">
                <span className="font-bold text-zinc-900 block uppercase tracking-wider text-[11px]">Required Documents to Prepare:</span>
                {renderRequirementsList(activeService.requirements)}
              </div>
            )}

            <div className="p-4 rounded-2xl bg-rose-50/60 border border-[#800020]/20 space-y-2 text-xs">
              <span className="font-bold text-zinc-900 block">How to Avail:</span>
              <p className="text-zinc-600 leading-relaxed">
                Contact John Francis L. Manuel or visit the JFM Booking Desk at <strong className="text-zinc-900">BVP Building, Zamora St., Bannuar, San Juan, Ilocos Sur</strong> with your documents.
              </p>
            </div>

            {/* Official Payment Channels */}
            <div className="space-y-3">
              <span className="font-bold text-zinc-900 block uppercase tracking-wider text-[11px]">
                Official Payment Channels:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PAYMENT_METHODS.map((pay) => (
                  <div
                    key={pay.id}
                    className="p-3 rounded-2xl bg-white border border-zinc-200 shadow-2xs flex items-center gap-3"
                  >
                    {pay.image && (
                      <img
                        src={pay.image}
                        alt={pay.provider}
                        className="w-10 h-10 object-contain rounded-xl border border-zinc-200 bg-white p-1 shrink-0"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-zinc-950 truncate">{pay.provider}</span>
                        <span className="text-[10px] font-medium text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">{pay.channel}</span>
                      </div>
                      <div className="text-[11px] text-zinc-600 truncate mt-0.5">
                        {pay.accountName}
                      </div>
                      <div className="text-[11px] font-mono font-bold text-[#800020] mt-0.5">
                        {pay.accountNumber}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-zinc-500 italic">
                {BOOKING_CONTACT_INFO.paymentNote}
              </p>
            </div>

            {/* Direct Calling Hotlines */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                Direct Booking Hotlines:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BOOKING_CONTACT_INFO.contactNumbers.map((num) => (
                  <a
                    key={num}
                    href={`tel:${num}`}
                    className="p-3 rounded-xl bg-zinc-900 hover:bg-[#800020] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{num}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              {activeService.formUrl && (
                <a
                  href={activeService.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs text-center transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Fill Out Google Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Chat on Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setActiveService(null)}
                className="py-3 px-5 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-zinc-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
