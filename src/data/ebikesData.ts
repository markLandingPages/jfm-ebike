// ==========================================
// REAL PRODUCT IMAGES IMPORTED FROM /src/assets/images
// ==========================================
// 2-Wheeler E-Bikes
import imgSuperRaptor126 from "../assets/images/super-raptor-126.png";
import imgSuperBlaze118 from "../assets/images/super-blaze-118.png";
import imgSaWosu1 from "../assets/images/sa-wosu-1.png";
import imgSaWosu2 from "../assets/images/sa-wosu-2.png";
import imgSuperEbike102 from "../assets/images/super-ebike-102.png";
import imgSaPrincess from "../assets/images/sa-princess.png";
import imgSparky from "../assets/images/sparky.png";
import imgAviaSuperMe from "../assets/images/avia-super-me.png";
import imgAviaSk from "../assets/images/avia-sk.png";
import imgSuperZeus from "../assets/images/super-zeus.png";
import imgSaTricolor1 from "../assets/images/sa-tricolor-1.png";
import imgAviaBeta from "../assets/images/avia-beta.png";
import imgSaTricolor2 from "../assets/images/sa-tricolor-2.png";
import imgAviaAeon from "../assets/images/avia-aeon.png";
import imgSuperZoey from "../assets/images/super-zoey.png";
import imgSaDyno from "../assets/images/sa-dyno.png";
import imgSuperJmax from "../assets/images/super-jmax.png";

// 3 & 4-Wheeler E-Trikes & Multi-Wheelers
import imgSuperjElux from "../assets/images/superj-elux.png";
import imgSunshineA28 from "../assets/images/sunshine-a28.png";
import imgSuperj210Ss from "../assets/images/superj-210-22.png";
import imgSuperjElektra from "../assets/images/superj-electra.png";
import imgSuperj001 from "../assets/images/superj-001.png";
import imgSuperj210 from "../assets/images/superj-210.png";
import imgSuperj007 from "../assets/images/superj-007.png";
import imgSuperj204 from "../assets/images/superj-204.png";
import imgSuperj005 from "../assets/images/superj-005.png";
import imgSuperj201 from "../assets/images/superj-201.png";
import imgSuperj206 from "../assets/images/superj-206.png";
import imgSaWosuSidecar from "../assets/images/sa-wosu-w-side-car.png";
import imgSuperJW1 from "../assets/images/super-j-w1.png";
import imgAviaNovaN7 from "../assets/images/avia-nova-n7-golf-car.png";
import imgSuperj006eK6 from "../assets/images/superj-006e-k6.png";
import imgLuodaUltra from "../assets/images/luoda-ultra.png";
import imgSuperj006f from "../assets/images/superj-006f.png";
import imgSuperj209Pegasus from "../assets/images/superj-209-pegasus.png";
import imgSuperj209K6 from "../assets/images/superj-209-k6.png";
import imgAviaN9Solar from "../assets/images/avia-n9-solar-ebike.png";

// All-Terrain Vehicles (ATV)
import imgShark200 from "../assets/images/shark-200.png";
import imgShark125_8 from "../assets/images/shark-125-8.png";
import imgPentora200 from "../assets/images/pentora-200.png";
import imgSonic125Yellow from "../assets/images/sonic-125-yellow.png";
import imgSonic125Black from "../assets/images/sonic-125-black.png";
import imgAk125_8 from "../assets/images/ak-125-8.png";
import imgFalcon200 from "../assets/images/falcon-200.png";

// All Payment Logo
import imgGcash from "../assets/images/gcash-logo.png";
import imgBpi from "../assets/images/bpi-logo.png"
import imgPaymaya from "../assets/images/paymaya-logo.png"
import imgBdo from "../assets/images/bdo-logo.png"
import imgLandbank from "../assets/images/landbank-logo.png"

// Booking Testimonial Avatars
import imgTestimonial1 from "../assets/images/booking-testimonial-1.jpg";
import imgTestimonial2 from "../assets/images/booking-testimonial-2.jpg";
import imgTestimonial3 from "../assets/images/booking-testimonial-3.jpg";
import imgTestimonial4 from "../assets/images/booking-testimonial-4.jpg";
import imgTestimonial5 from "../assets/images/booking-testimonial-5.jpg";
import imgTestimonial6 from "../assets/images/booking-testimonial-6.jpg";

// JFM Group of Companies — Product & Services Catalog Data
// Source: JFM_Ebikes_Catalog.xlsx (sheets: "JFM E-Bikes", "Booking Services", "ATV")
// Split into three independent datasets: e-bikes/e-trikes, booking/document
// processing services, and ATVs.
export type EbikeCategory = '2-Wheeler' | '3&4-Wheeler';
 
export interface HomeCreditPlan {
  srp: number;
  downPayment: number;
  installment9mo: number | null;
  installment12mo: number | null;
  installment15mo: number | null;
  installment18mo: number | null;
}
export interface Ebike {
  id: string;
  category: EbikeCategory;
  modelName: string;
  /** Direct URL to the product image. Left empty for now — fill in when images are re-hosted. */
  image: string;
  /** Color options shown in a separate "VARIATIONS" dropdown on the source page, if any */
  colorVariations?: string[];
  /** Items listed in the "FREEBIES" dropdown for this model */
  freebies: string[];
  /** Cash SRP (before any promo) */
  srpCash: number;
  /** Cash sale price; null when the source page lists no separate sale price */
  salePriceCash: number | null;
  battery: string;
  motor: string;
  /** Only present where the source page states a charging duration */
  chargingTime?: string;
  range: string;
  loadCapacity: string;
  seaters: string;
  availability: 'Available' | 'Sold Out' | '1 Unit Left';
  /** True when "OPEN FOR PRE-ORDER" is shown alongside a Sold Out status */
  openForPreOrder?: boolean;
  homeCredit: HomeCreditPlan;
  /** Flags a data inconsistency or typo present on the source page itself */
  sourceNote?: string;
}
 
// ---------- Shared freebie sets ----------
 
/** Freebies dropdown shown on every 2-wheeler model */
const FREEBIES_2W = ['Helmet', 'Magic Gatas'];
 
/** Freebies dropdown shown on every 3&4-wheeler model */
const FREEBIES_BIG = ['E-Bike Trapal', 'Timer Charger', 'Magic Gatas', 'CCTV (Limited Edition)'];
 

export interface BookingService {
  id: string;
  /** Issuing agency or program, e.g. PRC, DFA, PSA, LTO */
  agency: string;
  serviceType: string;
  /** Free-form price string (PHP) — kept as text since several rows mix
   *  flat fees with per-copy or penalty add-ons (e.g. "150/copy + 1,000"). */
  price: string | null;
  notes: string | null;
  requirements: string | null;
}

export interface BookingContactInfo {
  name: string;
  address: string;
  contactNumbers: string[];
  facebookPages: string[];
  paymentNote: string;
}

export interface ATVUnit {
  id: string;
  modelName: string;
  image: string;
  srpCash: number;
  salePriceCash: number;
  transmission: string;
  tireSize: string;
  engine: string;
  brakes: string;
  freebies?: string[];
  homeCredit: {
    srp: number;
    downPayment: number;
    installment12mo: number;
    installment15mo: number;
    installment18mo: number;
  };
}

export const EBIKES_2_WHEELER: Ebike[] = [
  {
    id: 'ebike-super-raptor-126',
    category: '2-Wheeler',
    modelName: 'SUPER RAPTOR 126',
    image: imgSuperRaptor126,
    freebies: [...FREEBIES_2W],
    srpCash: 25000,
    salePriceCash: 22000,
    battery: '60v20ah',
    motor: '1000W motor / 500W controller',
    chargingTime: '8 hrs',
    range: '30-40 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Available',
    homeCredit: { srp: 25582, downPayment: 7700, installment9mo: null, installment12mo: 1798, installment15mo: 1471, installment18mo: 1254 },
  },
  {
    id: 'ebike-super-blaze-118',
    category: '2-Wheeler',
    modelName: 'SUPER BLAZE 118',
    image: imgSuperBlaze118,
    freebies: [...FREEBIES_2W],
    srpCash: 19000,
    salePriceCash: 16000,
    battery: '48v12ah',
    motor: '500W motor / 500W controller',
    chargingTime: '8 hrs',
    range: '20-25 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Available',
    homeCredit: { srp: 20931, downPayment: 6300, installment9mo: 1961, installment12mo: 1509, installment15mo: 1239, installment18mo: 1059 },
  },
  {
    id: 'ebike-sa-wosu-1',
    category: '2-Wheeler',
    modelName: 'SA WOSU 1',
    image: imgSaWosu1,
    freebies: [...FREEBIES_2W],
    srpCash: 16500,
    salePriceCash: 15000,
    battery: '48v12ah',
    motor: '500W',
    range: '20-25 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Available',
    homeCredit: { srp: 18810, downPayment: 5700, installment9mo: 1789, installment12mo: 1382, installment15mo: 1139, installment18mo: 977 },
  },
  {
    id: 'ebike-sa-wosu2',
    category: '2-Wheeler',
    modelName: 'SA WOSU2',
    image: imgSaWosu2,
    freebies: [...FREEBIES_2W],
    srpCash: 19000,
    salePriceCash: 17000,
    battery: '48v20ah',
    motor: '500W',
    range: '25-30 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Available',
    homeCredit: { srp: 19768, downPayment: 6000, installment9mo: 1859, installment12mo: 1433, installment15mo: 1177, installment18mo: 1007 },
  },
  {
    id: 'ebike-super-ebike-102',
    category: '2-Wheeler',
    modelName: 'SUPER EBIKE 102',
    image: imgSuperEbike102,
    freebies: [...FREEBIES_2W],
    srpCash: 13500,
    salePriceCash: 13000,
    battery: '48v12ah',
    motor: '500W',
    range: '20-25 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Available',
    homeCredit: { srp: 15698, downPayment: 4800, installment9mo: 1523, installment12mo: 1178, installment15mo: 972, installment18mo: 835 },
  },
  {
    id: 'ebike-sa-princess',
    category: '2-Wheeler',
    modelName: 'SA PRINCESS',
    image: imgSaPrincess,
    freebies: [...FREEBIES_2W],
    srpCash: 16000,
    salePriceCash: 15000,
    battery: '48v12ah',
    motor: '500W',
    range: '20-25 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Available',
    homeCredit: { srp: 17442, downPayment: 5300, installment9mo: null, installment12mo: 1669, installment15mo: 1289, installment18mo: 910 },
  },
  {
    id: 'ebike-sparky',
    category: '2-Wheeler',
    modelName: 'SPARKY',
    image: imgSparky,
    colorVariations: ['Black/Red', 'Green/Silver'],
    freebies: [...FREEBIES_2W],
    srpCash: 19000,
    salePriceCash: 17000,
    battery: '48v12ah',
    motor: '500W',
    range: '20-25 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Available',
    homeCredit: { srp: 19768, downPayment: 6000, installment9mo: 1859, installment12mo: 1433, installment15mo: 1177, installment18mo: 1007 },
  },
  {
    id: 'ebike-avia-super-me',
    category: '2-Wheeler',
    modelName: 'AVIA SUPER ME',
    image: imgAviaSuperMe,
    freebies: [...FREEBIES_2W],
    srpCash: 13500,
    salePriceCash: 13000,
    battery: '48v12ah',
    motor: '500W',
    range: '20-25 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Sold Out',
    homeCredit: { srp: 15390, downPayment: 4700, installment9mo: 1498, installment12mo: 1160, installment15mo: 958, installment18mo: 824 },
  },
  {
    id: 'ebike-avia-sk',
    category: '2-Wheeler',
    modelName: 'AVIA SK',
    image: imgAviaSk,
    freebies: [...FREEBIES_2W],
    srpCash: 13500,
    salePriceCash: 13000,
    battery: '48v12ah',
    motor: '350W',
    range: '20-25 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Sold Out',
    homeCredit: { srp: 15390, downPayment: 4700, installment9mo: 1498, installment12mo: 1160, installment15mo: 958, installment18mo: 824 },
  },
  {
    id: 'ebike-super-zeus',
    category: '2-Wheeler',
    modelName: 'SUPER ZEUS',
    image: imgSuperZeus,
    freebies: [...FREEBIES_2W],
    srpCash: 45000,
    salePriceCash: null,
    battery: '60v20ah',
    motor: '1500W',
    range: '20-35 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Sold Out',
    homeCredit: { srp: 51300, downPayment: 16000, installment9mo: null, installment12mo: 3330, installment15mo: 2705, installment18mo: 2289 },
  },
  {
    id: 'ebike-sa-tricolor1',
    category: '2-Wheeler',
    modelName: 'SA TRICOLOR1',
    image: imgSaTricolor1,
    freebies: [...FREEBIES_2W],
    srpCash: 13000,
    salePriceCash: 12000,
    battery: '48v12ah',
    motor: '350W',
    range: '20-30 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Sold Out',
    homeCredit: { srp: 13680, downPayment: 4200, installment9mo: 1353, installment12mo: 1270, installment15mo: 1050, installment18mo: null },
  },
  {
    id: 'ebike-avia-beta',
    category: '2-Wheeler',
    modelName: 'AVIA BETA',
    image: imgAviaBeta,
    freebies: [...FREEBIES_2W],
    srpCash: 14000,
    salePriceCash: 13500,
    battery: '48v12ah',
    motor: '350W',
    range: '20-30 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: '1 Unit Left',
    homeCredit: { srp: 15960, downPayment: 4800, installment9mo: 1555, installment12mo: 1203, installment15mo: 993, installment18mo: 854 },
  },
  {
    id: 'ebike-sa-tricolor2',
    category: '2-Wheeler',
    modelName: 'SA TRICOLOR2',
    image: imgSaTricolor2,
    colorVariations: ['Black'],
    freebies: [...FREEBIES_2W],
    srpCash: 14500,
    salePriceCash: 13000,
    battery: '48v12ah',
    motor: '350W',
    range: '20-30 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Sold Out',
    homeCredit: { srp: 15390, downPayment: 4700, installment9mo: 1498, installment12mo: 1160, installment15mo: 958, installment18mo: null },
  },
  {
    id: 'ebike-avia-aeon',
    category: '2-Wheeler',
    modelName: 'AVIA AEON',
    image: imgAviaAeon,
    colorVariations: ['Red', 'Green'],
    freebies: [...FREEBIES_2W],
    srpCash: 19000,
    salePriceCash: 15000,
    battery: '48v12ah',
    motor: '350W',
    range: '20-30 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Available',
    homeCredit: { srp: 19768, downPayment: 6000, installment9mo: 1859, installment12mo: 1433, installment15mo: 1177, installment18mo: 1007 },
  },
  {
    id: 'ebike-super-zoey',
    category: '2-Wheeler',
    modelName: 'SUPER ZOEY',
    image: imgSuperZoey,
    freebies: [...FREEBIES_2W],
    srpCash: 18000,
    salePriceCash: 15000,
    battery: '48v12ah',
    motor: '350W',
    range: '20-30 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Available',
    homeCredit: { srp: 17442, downPayment: 5300, installment9mo: null, installment12mo: 1669, installment15mo: 1061, installment18mo: 910 },
  },
  {
    id: 'ebike-sa-dyno',
    category: '2-Wheeler',
    modelName: 'SA DYNO',
    image: imgSaDyno,
    freebies: [...FREEBIES_2W],
    srpCash: 14000,
    salePriceCash: 13000,
    battery: '48v12ah',
    motor: '500W',
    range: '20-25 KM',
    loadCapacity: '100KG',
    seaters: '2',
    availability: 'Sold Out',
    homeCredit: { srp: 15117, downPayment: 4600, installment9mo: 1478, installment12mo: 1145, installment15mo: 945, installment18mo: 812 },
  },
  {
    id: 'ebike-super-jmax',
    category: '2-Wheeler',
    modelName: 'SUPER JMAX',
    image: imgSuperJmax,
    freebies: [...FREEBIES_2W],
    srpCash: 45000,
    salePriceCash: 42000,
    battery: '60V 20AH',
    motor: '2200W',
    range: '30-45 KMS',
    loadCapacity: '150KG',
    seaters: '2',
    availability: 'Sold Out',
    homeCredit: { srp: 52326, downPayment: 15700, installment9mo: null, installment12mo: 3459, installment15mo: 2811, installment18mo: 2380 },
    sourceNote: 'Source page lists load capacity as "15. KG" — almost certainly a typo for 150KG, kept here in corrected form.',
  },
];
 
// ---------- 3 & 4-Wheeler e-bikes ----------
 
export const EBIKES_3_4_WHEELER: Ebike[] = [
  {
    id: 'ebike-superj-elux',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ ELUX',
    image: imgSuperjElux,
    freebies: [...FREEBIES_BIG],
    srpCash: 70000,
    salePriceCash: 65000,
    battery: '60V 20Ah',
    motor: '800W',
    range: '30-45 KM',
    loadCapacity: '300KG',
    seaters: '3',
    availability: 'Available',
    homeCredit: { srp: 75582, downPayment: 37000, installment9mo: null, installment12mo: 3633, installment15mo: 2951, installment18mo: 2498 },
  },
  {
    id: 'ebike-sunshine-a28',
    category: '3&4-Wheeler',
    modelName: 'SUNSHINE A28',
    image: imgSunshineA28,
    freebies: [...FREEBIES_BIG],
    srpCash: 55000,
    salePriceCash: 52000,
    battery: '48V 20Ah',
    motor: '1000W',
    range: '30-45 KM',
    loadCapacity: '300KG',
    seaters: '3',
    availability: 'Available',
    homeCredit: { srp: 75582, downPayment: 37000, installment9mo: null, installment12mo: 3633, installment15mo: 2951, installment18mo: 2498 },
    sourceNote: 'Home Credit figures on the source page are identical to SUPERJ ELUX\u2019s, even though the cash SRP/sale prices differ — likely a copy-paste error there rather than an actual shared plan.',
  },
  {
    id: 'ebike-superj-210-ss',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ 210-SS',
    image: imgSuperj210Ss,
    freebies: [...FREEBIES_BIG],
    srpCash: 45000,
    salePriceCash: 42000,
    battery: '48v20h',
    motor: '1200W',
    range: '20-35 KM',
    loadCapacity: '200KG',
    seaters: '3',
    availability: 'Available',
    homeCredit: { srp: 52326, downPayment: 15700, installment9mo: null, installment12mo: 3459, installment15mo: 2811, installment18mo: 2380 },
  },
  {
    id: 'ebike-superj-elektra',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ ELEKTRA',
    image: imgSuperjElektra,
    freebies: [...FREEBIES_BIG],
    srpCash: 62000,
    salePriceCash: 59000,
    battery: '60v20h',
    motor: '800W',
    range: '30-45 KM',
    loadCapacity: '350KG',
    seaters: '2-3',
    availability: 'Sold Out',
    openForPreOrder: true,
    homeCredit: { srp: 69768, downPayment: 32000, installment9mo: null, installment12mo: 3561, installment15mo: 2893, installment18mo: 2449 },
  },
  {
    id: 'ebike-superj-001',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ-001',
    image: imgSuperj001,
    freebies: [...FREEBIES_BIG],
    srpCash: 35000,
    salePriceCash: 32000,
    battery: '48v20h',
    motor: '600W',
    range: '25-30 KM',
    loadCapacity: '200KG',
    seaters: '2-3',
    availability: 'Available',
    homeCredit: { srp: 40698, downPayment: 12300, installment9mo: null, installment12mo: 2730, installment15mo: 2123, installment18mo: 1886 },
  },
  {
    id: 'ebike-superj-210',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ-210',
    image: imgSuperj210,
    freebies: [...FREEBIES_BIG],
    srpCash: 45000,
    salePriceCash: 42000,
    battery: '60v20h',
    motor: '1200W',
    range: '30-45 KM',
    loadCapacity: '350KG',
    seaters: '3',
    availability: 'Available',
    homeCredit: { srp: 52326, downPayment: 15700, installment9mo: null, installment12mo: 3459, installment15mo: 2811, installment18mo: 2380 },
  },
  {
    id: 'ebike-superj-007',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ-007',
    image: imgSuperj007,
    freebies: [...FREEBIES_BIG],
    srpCash: 45000,
    salePriceCash: null,
    battery: '48v20h',
    motor: '120W',
    range: '20-35 KM',
    loadCapacity: '200KG',
    seaters: '3',
    availability: 'Available',
    homeCredit: { srp: 52326, downPayment: 15700, installment9mo: null, installment12mo: 3459, installment15mo: 2811, installment18mo: 2380 },
  },
  {
    id: 'ebike-superj-204',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ-204',
    image: imgSuperj204,
    freebies: [...FREEBIES_BIG],
    srpCash: 62000,
    salePriceCash: 59000,
    battery: '60v20h',
    motor: '1000W',
    range: '30-45 KM',
    loadCapacity: '350KG',
    seaters: '3',
    availability: 'Sold Out',
    homeCredit: { srp: 69768, downPayment: 32000, installment9mo: null, installment12mo: 3561, installment15mo: 2893, installment18mo: 2449 },
  },
  {
    id: 'ebike-superj-005',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ-005',
    image: imgSuperj005,
    freebies: [...FREEBIES_BIG],
    srpCash: 61000,
    salePriceCash: 58000,
    battery: '60v20h',
    motor: '1000W',
    range: '30-45 KM',
    loadCapacity: '350KG',
    seaters: '3',
    availability: 'Available',
    homeCredit: { srp: 69768, downPayment: 32000, installment9mo: null, installment12mo: 3561, installment15mo: 2893, installment18mo: 2449 },
  },
  {
    id: 'ebike-superj-201',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ-201',
    image: imgSuperj201,
    freebies: [...FREEBIES_BIG],
    srpCash: 55000,
    salePriceCash: 52000,
    battery: '60v20h',
    motor: '1000W',
    range: '30-45 KM',
    loadCapacity: '300KG',
    seaters: '3',
    availability: 'Sold Out',
    openForPreOrder: true,
    homeCredit: { srp: 61628, downPayment: 23000, installment9mo: null, installment12mo: 3637, installment15mo: 2954, installment18mo: 2500 },
  },
  {
    id: 'ebike-superj-206',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ-206',
    image: imgSuperj206,
    freebies: [...FREEBIES_BIG],
    srpCash: 62000,
    salePriceCash: 59000,
    battery: '60v20h',
    motor: '1000W',
    range: '35-45 KM',
    loadCapacity: '350KG',
    seaters: '3',
    availability: 'Sold Out',
    openForPreOrder: true,
    homeCredit: { srp: 72094, downPayment: 34000, installment9mo: null, installment12mo: 3589, installment15mo: 2916, installment18mo: 2468 },
  },
  {
    id: 'ebike-sa-wosu1-sidecar',
    category: '3&4-Wheeler',
    modelName: 'SA WOSU1 w/ SIDE CAR',
    image: imgSaWosuSidecar,
    freebies: [...FREEBIES_BIG],
    srpCash: 22000,
    salePriceCash: 20000,
    battery: '48V12AH',
    motor: '500W',
    range: '20-25 KM',
    loadCapacity: '120KG',
    seaters: '2',
    availability: 'Available',
    homeCredit: { srp: 25582, downPayment: 7700, installment9mo: null, installment12mo: 1798, installment15mo: 1471, installment18mo: 1254 },
  },
  {
    id: 'ebike-super-j-w1',
    category: '3&4-Wheeler',
    modelName: 'SUPER J W1',
    image: imgSuperJW1,
    freebies: [...FREEBIES_BIG],
    srpCash: 60000,
    salePriceCash: 57000,
    battery: '60V20AH',
    motor: '1500W',
    range: '35-45 KM',
    loadCapacity: '300-400KG',
    seaters: '5-6',
    availability: 'Sold Out',
    homeCredit: { srp: 64960, downPayment: 27000, installment9mo: null, installment12mo: 3578, installment15mo: 2907, installment18mo: 2460 },
  },
  {
    id: 'ebike-avia-nova-n7-golf-car',
    category: '3&4-Wheeler',
    modelName: 'AVIA NOVA N7 GOLF CAR',
    image: imgAviaNovaN7,
    freebies: [...FREEBIES_BIG],
    srpCash: 90000,
    salePriceCash: 85000,
    battery: '60v 20ah',
    motor: '2000W controller',
    range: '35-45 KM',
    loadCapacity: '300-400KG',
    seaters: '4',
    availability: 'Available',
    homeCredit: { srp: 98600, downPayment: 60000, installment9mo: null, installment12mo: 3634, installment15mo: 2952, installment18mo: 2499 },
  },
  {
    id: 'ebike-superj-006e-k6',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ 006E K6',
    image: imgSuperj006eK6,
    freebies: [...FREEBIES_BIG],
    srpCash: 85000,
    salePriceCash: 80000,
    battery: '60v20ah',
    motor: '1500W',
    range: '35-45 KM',
    loadCapacity: '400KG',
    seaters: '5-6',
    availability: 'Sold Out',
    homeCredit: { srp: 92800, downPayment: 55000, installment9mo: null, installment12mo: 3563, installment15mo: 2895, installment18mo: 2451 },
  },
  {
    id: 'ebike-luoda-ultra',
    category: '3&4-Wheeler',
    modelName: 'LUODA ULTRA',
    image: imgLuodaUltra,
    freebies: [...FREEBIES_BIG],
    srpCash: 85000,
    salePriceCash: 80000,
    battery: '60v20ah',
    motor: '1500W motor / 1000W controller',
    range: '35-45 KM',
    loadCapacity: '400KG',
    seaters: '-',
    availability: 'Sold Out',
    homeCredit: { srp: 92800, downPayment: 55000, installment9mo: null, installment12mo: 3563, installment15mo: 2895, installment18mo: 2451 },
    sourceNote: 'Source page gives a "Highspeed: 48" spec instead of a seater count for this model (kept as "-" here), and its Home Credit SRP line omits the usual "PHP" prefix.',
  },
  {
    id: 'ebike-superj-006f',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ-006F',
    image: imgSuperj006f,
    freebies: [...FREEBIES_BIG],
    srpCash: 80000,
    salePriceCash: 75000,
    battery: '60v20h',
    motor: '1200W',
    range: '30-45 KM',
    loadCapacity: '300KG',
    seaters: '3',
    availability: 'Available',
    homeCredit: { srp: 87210, downPayment: 49000, installment9mo: null, installment12mo: 3600, installment15mo: 2925, installment18mo: 2475 },
  },
  {
    id: 'ebike-superj-209-pegasus',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ-209 PEGASUS',
    image: imgSuperj209Pegasus,
    freebies: [...FREEBIES_BIG],
    srpCash: 100000,
    salePriceCash: 80000,
    battery: '60v45h',
    motor: '1200W',
    range: '40-50 KM',
    loadCapacity: '400-450KG',
    seaters: '4-5',
    availability: 'Available',
    homeCredit: { srp: 93024, downPayment: 55000, installment9mo: null, installment12mo: 3583, installment15mo: 2911, installment18mo: 2464 },
  },
  {
    id: 'ebike-superj-209-k6',
    category: '3&4-Wheeler',
    modelName: 'SUPERJ-209 K6',
    image: imgSuperj209K6,
    freebies: [...FREEBIES_BIG],
    srpCash: 110000,
    salePriceCash: 85000,
    battery: '60v45h',
    motor: '1500W',
    range: '40-50 KM',
    loadCapacity: '400-450KG',
    seaters: '4-5',
    availability: 'Sold Out',
    homeCredit: { srp: 96900, downPayment: 59000, installment9mo: null, installment12mo: 3562, installment15mo: 2892, installment18mo: 2447 },
  },
  {
    id: 'ebike-avia-n9-solar-ebike',
    category: '3&4-Wheeler',
    modelName: 'AVIA N9 SOLAR EBIKE',
    image: imgAviaN9Solar,
    freebies: [...FREEBIES_BIG],
    srpCash: 110000,
    salePriceCash: 85000,
    battery: '60v45h',
    motor: '1500W',
    range: '40-50 KM',
    loadCapacity: '400-450KG',
    seaters: '4-5',
    availability: 'Available',
    homeCredit: { srp: 98600, downPayment: 60000, installment9mo: null, installment12mo: 3634, installment15mo: 2952, installment18mo: 2499 },
  },
];
 
// ---------- Combined export ----------
 
export const EBIKES_DATA: Ebike[] = [...EBIKES_2_WHEELER, ...EBIKES_3_4_WHEELER];
 
export default EBIKES_DATA;

// ============================================================================
// JFM Booking Services — data model
// Extracted from the JFM Group of Businesses "Booking Services" page.
// formUrl values are the Google Form links found per agency section in the
// source HTML. Where no form link existed on the site, formUrl is null.
// ============================================================================

export interface BookingService {
  id: string;
  agency: string;
  serviceType: string;
  price: string | null;
  notes: string | null;
  requirements: string | null;
  /** Google Form link used to inquire/book this service. Null if the site has none for it. */
  formUrl: string | null;
}

export interface PaymentMethod {
  id: string;
  /** Display label for the channel, e.g. 'GCash', 'PayMaya', 'Bank Transfer' */
  channel: string;
  /** Provider/bank name, e.g. 'GCash', 'PayMaya', 'BDO', 'Landbank', 'BPI', 'Metrobank' */
  provider: string;
  accountName: string;
  accountNumber: string;
  image: string;
}

export interface BookingContactInfo {
  name: string;
  address: string;
  contactNumbers: string[];
  facebookPages: string[];
  paymentNote: string;
}

// ----------------------------------------------------------------------------
// Services
// ----------------------------------------------------------------------------

export const BOOKING_SERVICES_DATA: BookingService[] = [
  {
    id: 'svc-prc-professional-regulation-commission-renewal-all-in-process',
    agency: 'PRC',
    serviceType: 'Professional Regulation Commission — Renewal (all-in process)',
    price: '1,800 + 180/yr penalty if expired',
    notes: null,
    requirements: '2x2 pic; old PRC ID (front & back); LERIS account',
    formUrl: null, // no dedicated form; requires a LERIS account first (see LERIS entry below)
  },
  {
    id: 'svc-prc-renewal-appointment-only',
    agency: 'PRC',
    serviceType: 'Renewal (appointment only)',
    price: '1,200 + 180/yr penalty if expired',
    notes: 'Appointment only',
    requirements: '2x2 pic; old PRC ID (front & back); LERIS account',
    formUrl: null,
  },
  {
    id: 'svc-prc-e-oath',
    agency: 'PRC',
    serviceType: 'E-oath',
    price: '500',
    notes: 'Appointment only',
    requirements: '2x2 pic; old PRC ID; LERIS account',
    formUrl: null,
  },
  {
    id: 'svc-prc-initial-registration',
    agency: 'PRC',
    serviceType: 'Initial Registration',
    price: '1,550',
    notes: 'Appointment only',
    requirements: '2x2 pic; old PRC ID; LERIS account',
    formUrl: null,
  },
  {
    id: 'svc-prc-leris-account',
    agency: 'PRC',
    serviceType: 'LERIS Account',
    price: '500',
    notes: 'New registration/retrieval',
    requirements: '2x2 pic; old PRC ID; LERIS account',
    formUrl: 'https://forms.gle/SXp6CNb4hC4ov3i59', // "if none, fill up form" — LERIS account creation
  },
  {
    id: 'svc-prc-exam-filing',
    agency: 'PRC',
    serviceType: 'Exam Filing',
    price: '1,400',
    notes: 'Appointment only',
    requirements: '2x2 pic; old PRC ID; LERIS account',
    formUrl: null,
  },
  {
    id: 'svc-prc-eligibility-passing-rating-good-standing-all-in',
    agency: 'PRC',
    serviceType: 'Eligibility (Passing/Rating/Good Standing) - all-in',
    price: '150/copy + 1,000',
    notes: 'All-in process',
    requirements: '2x2 pic; old PRC ID; LERIS account',
    formUrl: null,
  },
  {
    id: 'svc-prc-eligibility-passing-rating-good-standing-appointment',
    agency: 'PRC',
    serviceType: 'Eligibility (Passing/Rating/Good Standing) - appointment',
    price: '110/copy + 500 service fee',
    notes: 'Appointment only',
    requirements: '2x2 pic; old PRC ID; LERIS account',
    formUrl: null,
  },
  {
    id: 'svc-pcap-new-member-renewal',
    agency: 'PCAP',
    serviceType: 'New Member / Renewal',
    price: '2,800',
    notes: null,
    requirements: 'Scanned PRC ID (front & back); scanned 2x2 picture; Certificate of Registration (or Affidavit of Undertaking if none); proof of payment',
    formUrl: 'https://forms.gle/rJCXgq7xwG1DvR2K8',
  },
  {
    id: 'svc-pcap-active-member',
    agency: 'PCAP',
    serviceType: 'Active Member',
    price: '2,100',
    notes: null,
    requirements: 'Scanned PRC ID (front & back); scanned 2x2 picture; Certificate of Registration (or Affidavit of Undertaking if none); proof of payment',
    formUrl: 'https://forms.gle/rJCXgq7xwG1DvR2K8',
  },
  {
    id: 'svc-pcap-pwd-senior',
    agency: 'PCAP',
    serviceType: 'PWD/Senior',
    price: '2,500',
    notes: null,
    requirements: 'Scanned PRC ID (front & back); scanned 2x2 picture; Certificate of Registration (or Affidavit of Undertaking if none); proof of payment',
    formUrl: 'https://forms.gle/rJCXgq7xwG1DvR2K8',
  },
  {
    id: 'svc-dfa-new-passport-rush',
    agency: 'DFA',
    serviceType: 'New Passport - Rush',
    price: '1,800',
    notes: '7-10 working days',
    requirements: '1 Valid ID; PSA Birth Certificate; PSA Marriage Certificate (if married female)',
    formUrl: 'https://forms.gle/aP9j3VhH9Nb3j8MT7',
  },
  {
    id: 'svc-dfa-new-passport-regular',
    agency: 'DFA',
    serviceType: 'New Passport - Regular',
    price: '1,600',
    notes: '15-20 working days',
    requirements: '1 Valid ID; PSA Birth Certificate; PSA Marriage Certificate (if married female)',
    formUrl: 'https://forms.gle/aP9j3VhH9Nb3j8MT7',
  },
  {
    id: 'svc-dfa-renewal-rush',
    agency: 'DFA',
    serviceType: 'Renewal - Rush',
    price: '1,800',
    notes: '7-10 working days',
    requirements: '1 Valid ID; Old Passport',
    formUrl: 'https://forms.gle/aP9j3VhH9Nb3j8MT7',
  },
  {
    id: 'svc-dfa-renewal-regular',
    agency: 'DFA',
    serviceType: 'Renewal - Regular',
    price: '1,600',
    notes: '15-20 working days',
    requirements: '1 Valid ID; Old Passport',
    formUrl: 'https://forms.gle/aP9j3VhH9Nb3j8MT7',
  },
  {
    id: 'svc-dfa-lost-passport-rush',
    agency: 'DFA',
    serviceType: 'Lost Passport - Rush',
    price: '2,100',
    notes: '7-10 working days',
    requirements: 'PSA Birth Cert; PSA Marriage Cert (if married female); 1 Valid ID; Affidavit of lost; Police Report (if still valid)',
    formUrl: 'https://forms.gle/aP9j3VhH9Nb3j8MT7',
  },
  {
    id: 'svc-dfa-lost-passport-regular',
    agency: 'DFA',
    serviceType: 'Lost Passport - Regular',
    price: '1,900',
    notes: '15-20 working days',
    requirements: 'PSA Birth Cert; PSA Marriage Cert (if married female); 1 Valid ID; Affidavit of lost; Police Report (if still valid)',
    formUrl: 'https://forms.gle/aP9j3VhH9Nb3j8MT7',
  },
  {
    id: 'svc-dfa-minor',
    agency: 'DFA',
    serviceType: 'Minor',
    price: null,
    notes: null,
    requirements: 'Personal appearance; personal appearance of either parent; PSA Marriage contract of parents; PSA Birth Certificate; School ID or Form 137',
    formUrl: 'https://forms.gle/aP9j3VhH9Nb3j8MT7',
  },
  {
    id: 'svc-dfa-pwd-senior',
    agency: 'DFA',
    serviceType: 'PWD/Senior',
    price: '2,500',
    notes: null,
    requirements: 'Bring original & photocopy of documents',
    formUrl: 'https://forms.gle/aP9j3VhH9Nb3j8MT7',
  },
  {
    id: 'svc-nbi-npc-clearance-each',
    agency: 'NBI / NPC',
    serviceType: 'Clearance (each)',
    price: '350',
    notes: null,
    requirements: '1 Valid ID',
    formUrl: 'https://forms.gle/V1GSEuRdxV8YjAip7',
  },
  {
    id: 'svc-psa-appointment-fee',
    agency: 'PSA',
    serviceType: 'Appointment fee',
    price: '50',
    notes: null,
    requirements: null,
    formUrl: 'https://forms.gle/rLhYmJwk95VDaYMM7',
  },
  {
    id: 'svc-psa-birth-certificate',
    agency: 'PSA',
    serviceType: 'Birth Certificate',
    price: '550/copy',
    notes: 'For delivery (1-2 weeks waiting)',
    requirements: null,
    formUrl: 'https://forms.gle/rLhYmJwk95VDaYMM7',
  },
  {
    id: 'svc-psa-marriage-certificate',
    agency: 'PSA',
    serviceType: 'Marriage Certificate',
    price: '550/copy',
    notes: 'For delivery (1-2 weeks waiting)',
    requirements: null,
    formUrl: 'https://forms.gle/rLhYmJwk95VDaYMM7',
  },
  {
    id: 'svc-psa-cenomar',
    agency: 'PSA',
    serviceType: 'CENOMAR',
    price: '605/copy',
    notes: 'For delivery (1-2 weeks waiting)',
    requirements: null,
    formUrl: 'https://forms.gle/rLhYmJwk95VDaYMM7',
  },
  {
    id: 'svc-psa-death-certificate',
    agency: 'PSA',
    serviceType: 'Death Certificate',
    price: '550/copy',
    notes: 'For delivery (1-2 weeks waiting)',
    requirements: null,
    formUrl: 'https://forms.gle/rLhYmJwk95VDaYMM7',
  },
  {
    id: 'svc-lto-portal-fee',
    agency: 'LTO',
    serviceType: 'Portal fee',
    price: '100',
    notes: null,
    requirements: null,
    // NOTE: source site reuses the same forms.gle link as NBI/NPC for LTO — verify this is intentional.
    formUrl: 'https://forms.gle/V1GSEuRdxV8YjAip7',
  },
  {
    id: 'svc-lto-renewal',
    agency: 'LTO',
    serviceType: 'Renewal',
    price: '1,000',
    notes: null,
    requirements: "Old driver's license (renewal); Medical certificate (renewal); Valid ID",
    formUrl: 'https://forms.gle/V1GSEuRdxV8YjAip7', // same note as above
  },
  {
    id: 'svc-poea-e-reg-account-registration',
    agency: 'POEA e-Reg',
    serviceType: 'Account Registration',
    price: '100',
    notes: null,
    requirements: null,
    formUrl: null, // no form link present on the source site for POEA
  },
  {
    id: 'svc-poea-e-reg-balik-manggagawa',
    agency: 'POEA e-Reg',
    serviceType: 'Balik Manggagawa',
    price: '150',
    notes: null,
    requirements: null,
    formUrl: null,
  },
  {
    id: 'svc-poea-e-reg-peos',
    agency: 'POEA e-Reg',
    serviceType: 'PEOS',
    price: '300',
    notes: null,
    requirements: 'Valid ID; Passport; 2x2 pic',
    formUrl: null,
  },
];

// ----------------------------------------------------------------------------
// Payment methods
// ⚠️ PLACEHOLDER DATA — every name and account/mobile number below is fake,
// used only to fill out the schema shape. Replace with real values before
// this ever goes live.
// ----------------------------------------------------------------------------

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'pay-gcash',
    image: imgGcash,
    channel: 'GCash',
    provider: 'GCash',
    accountName: 'Maria D. Santos',
    accountNumber: '0917-123-4567',
  },
  {
    id: 'pay-paymaya',
    image: imgPaymaya,
    channel: 'PayMaya',
    provider: 'PayMaya',
    accountName: 'Juan P. Reyes',
    accountNumber: '0928-234-5678',
  },
  {
    id: 'pay-bdo',
    image: imgBdo,
    channel: 'Bank Transfer',
    provider: 'BDO',
    accountName: 'Juan P. Reyes',
    accountNumber: '0011-2233-4455',
  },
  {
    id: 'pay-landbank',
    image: imgLandbank,
    channel: 'Bank Transfer',
    provider: 'Landbank',
    accountName: 'Juan P. Reyes',
    accountNumber: '1122-3344-5566',
  },
  {
    id: 'pay-bpi',
    image: imgBpi,
    channel: 'Bank Transfer',
    provider: 'BPI',
    accountName: 'Juan P. Reyes',
    accountNumber: '9988-7766-5544',
  },
];

// ----------------------------------------------------------------------------
// Contact info
// ----------------------------------------------------------------------------

export const BOOKING_CONTACT_INFO: BookingContactInfo = {
  name: 'John Francis L. Manuel',
  address: 'BVP Building, Zamora St., Bannuar, San Juan, Ilocos Sur',
  contactNumbers: ['09059759334', '09366082578', '09754764325'],
  facebookPages: ['John Francis Doro Manuel', 'John Francis Lagasca Manuel'],
  paymentNote:
    "Only accepts listed payment channels (bank/e-wallet numbers on site) — no GCash 'Clip' payments or Money Protect-enabled sends. Screenshot or save your receipt and send it to the contacts above.",
};

export interface BookingTestimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  agency: string;
  quote: string;
  rating: number;
  image: string;
}

export const BOOKING_TESTIMONIALS: BookingTestimonial[] = [
  {
    id: 'test-1',
    name: 'Engr. Arnel V.',
    location: 'Vigan City, Ilocos Sur',
    service: 'PRC License Renewal',
    agency: 'PRC',
    quote: 'Super smooth and hassle-free PRC renewal process! Sir John Francis handled everything professionally right here in San Juan. Highly recommended!',
    rating: 5,
    image: imgTestimonial1,
  },
  {
    id: 'test-2',
    name: 'Sarah M.',
    location: 'Candon City, Ilocos Sur',
    service: 'DFA Passport - Renewal',
    agency: 'DFA',
    quote: 'Nakuha ko DFA passport ko on time nang walang pila-pila sa regional office. Thank you so much JFM Booking Services for the exceptional assistance!',
    rating: 5,
    image: imgTestimonial2,
  },
  {
    id: 'test-3',
    name: 'Dr. Marites C.',
    location: 'Bantay, Ilocos Sur',
    service: 'PCAP Active Member E-oath',
    agency: 'PCAP',
    quote: 'Very reliable and trusted liaison service. Saved me countless hours and effort for my PCAP requirements and registration.',
    rating: 5,
    image: imgTestimonial3,
  },
  {
    id: 'test-4',
    name: 'Mark Jason D.',
    location: 'San Juan, Ilocos Sur',
    service: 'PSA Birth Certificate & NBI',
    agency: 'PSA / NBI',
    quote: 'Mabilis at walang kahirap-hirap ang pag-process ng PSA civil registry documents at NBI clearance ko. Two thumbs up kay Sir John Francis!',
    rating: 5,
    image: imgTestimonial4,
  },
  {
    id: 'test-5',
    name: 'Kevins S.',
    location: 'Narvacan, Ilocos Sur',
    service: 'LTO License Assistance',
    agency: 'LTO',
    quote: 'Napaka-helpful ng JFM liaison desk. Clear instructions, transparent pricing, at madaling kausap. Dito na kayo mag-book!',
    rating: 5,
    image: imgTestimonial5,
  },
  {
    id: 'test-6',
    name: 'Aileen R.',
    location: 'Tagudin, Ilocos Sur',
    service: 'POEA / OFW Documentation',
    agency: 'POEA',
    quote: 'Salamat po nang marami sa tulong sa POEA processing ko. Tuloy-tuloy ang update at napaka-efficient ng service.',
    rating: 5,
    image: imgTestimonial6,
  },
];

export const ATV_DATA: ATVUnit[] = [
  {
    id: 'atv-shark-200-white-variation-available',
    modelName: 'SHARK 200 (White variation available)',
    image: imgShark200,
    srpCash: 105000,
    salePriceCash: 95000,
    transmission: 'Fully Automatic',
    tireSize: '23*7-10',
    engine: '4 Stroke GY6',
    brakes: 'Front & Rear Disc',
    homeCredit: {
      srp: 110000,
      downPayment: 72000,
      installment12mo: 3599,
      installment15mo: 2924,
      installment18mo: 2475,
    },
  },
  {
    id: 'atv-shark-125-8',
    modelName: 'SHARK 125-8',
    image: imgShark125_8,
    srpCash: 55000,
    salePriceCash: 50000,
    transmission: 'Fully Automatic',
    tireSize: '19*7-88',
    engine: '4 Stroke',
    brakes: 'Front Drum / Rear Disc',
    homeCredit: {
      srp: 61628,
      downPayment: 23000,
      installment12mo: 3637,
      installment15mo: 2811,
      installment18mo: 2500,
    },
  },
  {
    id: 'atv-pentora-200',
    modelName: 'PENTORA 200',
    image: imgPentora200,
    srpCash: 105000,
    salePriceCash: 95000,
    transmission: 'Fully Automatic',
    tireSize: '23*7-10',
    engine: '4 Stroke GY6',
    brakes: 'Front & Rear Disc',
    homeCredit: {
      srp: 110200,
      downPayment: 72000,
      installment12mo: 3599,
      installment15mo: 2924,
      installment18mo: 2475,
    },
  },
  {
    id: 'atv-sonic-125-yellow',
    modelName: 'SONIC 125 YELLOW',
    image: imgSonic125Yellow,
    srpCash: 45000,
    salePriceCash: 40000,
    transmission: 'Fully Automatic',
    tireSize: '16*8',
    engine: '4 Stroke',
    brakes: 'Front Drum / Rear Disc',
    homeCredit: {
      srp: 52326,
      downPayment: 17500,
      installment12mo: 3459,
      installment15mo: 2811,
      installment18mo: 2380,
    },
  },
  {
    id: 'atv-sonic-125-black',
    modelName: 'SONIC 125 BLACK',
    image: imgSonic125Black,
    srpCash: 45000,
    salePriceCash: 40000,
    transmission: 'Fully Automatic',
    tireSize: '16*8',
    engine: '4 Stroke',
    brakes: 'Front Drum / Rear Disc',
    homeCredit: {
      srp: 52326,
      downPayment: 15700,
      installment12mo: 3459,
      installment15mo: 2811,
      installment18mo: 2380,
    },
  },
  {
    id: 'atv-ak-125-8',
    modelName: 'AK 125-8',
    image: imgAk125_8,
    srpCash: 60000,
    salePriceCash: 55000,
    transmission: 'Fully Automatic',
    tireSize: '19*7-8',
    engine: '4 Stroke GY6',
    brakes: 'Front Drum / Rear Disc',
    homeCredit: {
      srp: 69768,
      downPayment: 32000,
      installment12mo: 3561,
      installment15mo: 2893,
      installment18mo: 2449,
    },
  },
  {
    id: 'atv-falcon-200',
    modelName: 'FALCON 200',
    image: imgFalcon200,
    srpCash: 110000,
    salePriceCash: 100000,
    transmission: 'Fully Automatic',
    tireSize: '23*7-10',
    engine: '4 Stroke GY6',
    brakes: 'Front & Rear Disc',
    homeCredit: {
      srp: 116000,
      downPayment: 78000,
      installment12mo: 3581,
      installment15mo: 2910,
      installment18mo: 2463,
    },
  }
];

// ==========================================
// 5 OTHER JFM GROUP BUSINESS DIVISIONS
// (JFM Online Booking, JFM Document Processing,
//  JFM Digital Marketing, JFM Bookkeeping, JFM CCTV)
// ==========================================

export interface OtherBusiness {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badge: string;
  description: string;
  highlights: string[];
  hotline: string;
  icon: string;
}

export const OTHER_BUSINESSES_DATA: OtherBusiness[] = [
  {
    id: 'jfm-online-booking-services',
    name: 'JFM Online Booking Services',
    tagline: 'Domestic & International Flight, Sea Vessel & Bus Ticketing',
    category: 'Travel & Ticketing',
    badge: 'Official Travel Partner',
    description: 'Instant ticketing and itinerary management for Philippine Airlines, Cebu Pacific, AirAsia, 2GO Travel, Trans-Asia shipping, and provincial bus lines. Personalized vacation packages, hotel bookings, and travel insurance.',
    highlights: [
      'Fast airline e-ticket issuance & prepaid baggage upgrades',
      'Flight rebooking, date modifications & cancellation claims',
      '2GO Travel passenger cabins & rolling cargo vehicle bookings',
      'Domestic & Asian package tours with hotel accommodations'
    ],
    hotline: '09059759334 / 09366082578',
    icon: 'Plane'
  },
  {
    id: 'jfm-document-processing',
    name: 'JFM Document Processing',
    tagline: 'Fast, Trusted & Hassle-Free Government Document Assistance',
    category: 'Government & Legal Documents',
    badge: 'Authorized Liaison',
    description: 'Skip the long lines and bureaucratic delays. We assist Ilocos residents, OFWs, and families with end-to-end appointment scheduling, document retrieval, and safe delivery for government agency records.',
    highlights: [
      'PSA birth, marriage, CENOMAR & death certificates with home delivery',
      'DFA Passport appointments (New, Renewal, Lost, Minor, Rush & Regular)',
      'PRC renewal, LERIS account recovery & certificate of good standing',
      'NBI clearances, Police clearances & POEA Balik-Manggagawa / PEOS'
    ],
    hotline: '09366082578 / 09754764325',
    icon: 'FileText'
  },
  {
    id: 'jfm-digital-marketing',
    name: 'JFM Digital Marketing',
    tagline: 'Strategic Social Media Growth & High-Impact Local Advertising',
    category: 'Creative Media & Ads',
    badge: 'Growth Partner',
    description: 'Grow your business with data-driven social media ad campaigns, eye-catching promotional video production, professional photo shoots, and localized brand identity packages engineered for Region 1 markets.',
    highlights: [
      'Meta (Facebook/Instagram) & TikTok targeted advertising campaigns',
      'High-conversion promotional reels, product demos & drone footage',
      'Graphic branding, logo design, menus & promotional posters',
      'Community engagement, customer response funnels & lead acquisition'
    ],
    hotline: '09366082578',
    icon: 'Megaphone'
  },
  {
    id: 'jfm-bookkeeping',
    name: 'JFM Bookkeeping',
    tagline: 'Reliable Financial Ledgers, Tax Compliance & BIR Filings',
    category: 'Accounting & Compliance',
    badge: 'BIR Compliance Ready',
    description: 'Stress-free accounting and taxation services tailored for micro, small, and medium businesses (MSMEs), retail shops, contractors, and self-employed professionals across Ilocos Sur and Ilocos Norte.',
    highlights: [
      'Monthly, quarterly & annual BIR tax filings (2551Q, 1701Q, 1702, etc.)',
      'Official books of accounts recording (Cash receipts, sales & disbursements)',
      'Financial statements preparation for bank financing & annual business permits',
      'Business registration, tax clearance & compliance consultations'
    ],
    hotline: '09366082578',
    icon: 'Calculator'
  },
  {
    id: 'jfm-cctv',
    name: 'JFM CCTV & Security',
    tagline: 'Commercial & Residential High-Definition Surveillance Systems',
    category: 'Surveillance & Protection',
    badge: 'Professional Installation',
    description: 'Protect your home, farm, warehouse, or commercial store with reliable HD/4K security camera installations. Includes mobile app remote viewing from anywhere in the world, crystal-clear color night vision, and warranty service.',
    highlights: [
      'Complete 4-Channel, 8-Channel & 16-Channel HD camera packages',
      'Real-time mobile phone viewing setup (iOS & Android) with alert notifications',
      'Color night vision, high-gain microphones & weatherproof outdoor housings',
      'Turnkey installation for houses, poultry/farms, retail shops & warehouses'
    ],
    hotline: '09366082578 / 09059759334',
    icon: 'ShieldCheck'
  }
];

// ==========================================
// 10 PHYSICAL BRANCHES & DISPLAY CENTERS
// ==========================================

export interface Branch {
  id?: string;
  name: string;
  barangay: string;
  municipality: string;
  province: string;
  isMain?: boolean;
  contact: string;
  hours: string;
}

export const BRANCHES_DATA: Branch[] = [
  {
    id: 'branch-san-juan',
    name: 'Main Showroom & HQ',
    barangay: 'Brgy. Bannuar',
    municipality: 'San Juan',
    province: 'Ilocos Sur',
    isMain: true,
    contact: '09366082578',
    hours: '8:00 AM - 5:30 PM (Mon-Sat)'
  },
  {
    id: 'branch-badoc',
    name: 'Badoc Display Center',
    barangay: 'Brgy. Garreta',
    municipality: 'Badoc',
    province: 'Ilocos Norte',
    contact: '09366082578',
    hours: '8:30 AM - 5:00 PM'
  },
  {
    id: 'branch-sinait',
    name: 'Sinait Display Center',
    barangay: 'Brgy. Jordan',
    municipality: 'Sinait',
    province: 'Ilocos Sur',
    contact: '09366082578',
    hours: '8:30 AM - 5:00 PM'
  },
  {
    id: 'branch-cabugao',
    name: 'Cabugao Display Center',
    barangay: 'Brgy. Rizal',
    municipality: 'Cabugao',
    province: 'Ilocos Sur',
    contact: '09366082578',
    hours: '8:30 AM - 5:00 PM'
  },
  {
    id: 'branch-magsingal',
    name: 'Magsingal Display Center',
    barangay: 'Brgy. San Vicente',
    municipality: 'Magsingal',
    province: 'Ilocos Sur',
    contact: '09366082578',
    hours: '8:30 AM - 5:00 PM'
  },
  {
    id: 'branch-bantay',
    name: 'Bantay Display Center',
    barangay: 'Brgy. Aggay',
    municipality: 'Bantay',
    province: 'Ilocos Sur',
    contact: '09366082578',
    hours: '8:00 AM - 5:30 PM'
  },
  {
    id: 'branch-vigan',
    name: 'Vigan City Display Center',
    barangay: 'Brgy. VIII',
    municipality: 'Vigan City',
    province: 'Ilocos Sur',
    contact: '09366082578',
    hours: '8:00 AM - 6:00 PM'
  },
  {
    id: 'branch-sta-catalina',
    name: 'Sta. Catalina Display Center',
    barangay: 'Brgy. Pangada',
    municipality: 'Sta. Catalina',
    province: 'Ilocos Sur',
    contact: '09366082578',
    hours: '8:30 AM - 5:00 PM'
  },
  {
    id: 'branch-candon',
    name: 'Candon City Display Center',
    barangay: 'Brgy. San Jose',
    municipality: 'Candon City',
    province: 'Ilocos Sur',
    contact: '09366082578',
    hours: '8:00 AM - 5:30 PM'
  },
  {
    id: 'branch-sta-cruz',
    name: 'Sta. Cruz Display Center',
    barangay: 'Brgy. Sidaoen',
    municipality: 'Sta. Cruz',
    province: 'Ilocos Sur',
    contact: '09366082578',
    hours: '8:30 AM - 5:00 PM'
  }
];

// ==========================================
// TESTIMONIALS & REVIEWS
// ==========================================

export interface Review {
  id: string;
  name: string;
  location: string;
  unitPurchased: string;
  rating: number;
  date: string;
  comment: string;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Engr. Mark Jerome Bautista',
    location: 'San Juan, Ilocos Sur (Main Branch)',
    unitPurchased: 'SUPERJ 210 E-Trike',
    rating: 5,
    date: 'August 2026',
    comment: 'Sobrang tipid sa pamalengke at panghatid sa mga bata sa Bannuar Elementary! Hindi na kami gumagastos sa krudo. 1 charge lang tumatagal ng 3-4 days sa amin. Solid ang serbisyo ni Boss John Francis at mabilis mag-release.'
  },
  {
    id: 'rev-2',
    name: 'Aling Corazon Dela Cruz',
    location: 'Vigan City, Ilocos Sur',
    unitPurchased: 'SUPER RAPTOR 126 Commuter',
    rating: 5,
    date: 'July 2026',
    comment: 'Ginamit ko na araw-araw papunta sa Calle Crisologo souvenir shop ko. Napakadaling patakbuhin, tahimik, at hindi mabigat dalhin. Nung nagka-minor concern ako sa side mirror, agad inasikaso sa Vigan branch. Salamat JFM!'
  },
  {
    id: 'rev-3',
    name: 'Rodelio "Del" Agcaoili',
    location: 'Badoc, Ilocos Norte',
    unitPurchased: 'AVIA N9 SOLAR EBIKE & Document Assistance',
    rating: 5,
    date: 'September 2026',
    comment: 'Pang-deliver ng gulay at bawang mula Badoc papuntang Sinait. Nakakarga ng saku-sakong ani nang walang hirap sa mga ahon. At inasikaso rin nila ang passport renewal ko sa DFA. All-in-one talaga ang JFM!'
  },
  {
    id: 'rev-4',
    name: 'Dr. Catherine Mendoza',
    location: 'Candon City, Ilocos Sur',
    unitPurchased: 'SUPER ZOEY 2-Wheeler',
    rating: 5,
    date: 'June 2026',
    comment: 'Very stylish e-bike! I use it within the hospital compound and quick clinic trips around Candon. Smooth ride, great battery indicator, and peaceful driving. Highly recommend JFM Group!'
  },
  {
    id: 'rev-5',
    name: 'Reynaldo "Kap" Valdez',
    location: 'Bantay, Ilocos Sur',
    unitPurchased: 'SHARK 200 Quad ATV',
    rating: 5,
    date: 'August 2026',
    comment: 'Matikas ang ATV ng JFM. Ginagamit namin pang-ikot sa farm at bukid sa Aggay, Bantay. Kayang-kaya ang putik at buhangin. Maayos kausap ang staff sa Bantay branch.'
  }
];

// ==========================================
// UNIFIED VEHICLE INVENTORY DATA (E-BIKES + ATVS)
// Structured for interactive browsing & modal details
// ==========================================

export interface EbikeUnit {
  id: string;
  code: string;
  name: string;
  category: 'commuter' | 'etrike' | 'atv' | 'cargo';
  categoryLabel: string;
  tagline: string;
  priceNote: string;
  srpCash: number;
  salePriceCash: number | null;
  motor: string;
  battery: string;
  range: string;
  topSpeed: string;
  maxLoad: string;
  chargeTime: string;
  seaters?: string;
  transmission?: string;
  tireSize?: string;
  engine?: string;
  brakes?: string;
  image: string;
  description: string;
  features: string[];
  freebies?: string[];
  popular?: boolean;
  homeCredit?: {
    srp: number;
    downPayment: number;
    installment9mo?: number | null;
    installment12mo?: number | null;
    installment15mo?: number | null;
    installment18mo?: number | null;
  };
}

// Map real catalog items to unified inventory for interactive gallery
export const INVENTORY_DATA: EbikeUnit[] = [
  // --- E-BIKES (2-Wheelers) ---
  ...EBIKES_DATA.filter((e) => e.category === '2-Wheeler').map((ebike, idx) => ({
    id: ebike.id,
    code: `EB-2W-${idx + 101}`,
    name: ebike.modelName,
    category: 'commuter' as const,
    categoryLabel: '2-Wheeler E-Bike',
    tagline: `Reliable ${ebike.motor} commuter with ${ebike.battery} power and ${ebike.range} operating range.`,
    priceNote: ebike.salePriceCash
      ? `₱${ebike.salePriceCash.toLocaleString()} Promo Cash (SRP ₱${ebike.srpCash.toLocaleString()})`
      : `₱${ebike.srpCash.toLocaleString()} Cash SRP`,
    srpCash: ebike.srpCash,
    salePriceCash: ebike.salePriceCash,
    motor: ebike.motor,
    battery: ebike.battery,
    range: ebike.range,
    topSpeed: '35 - 45 km/h',
    maxLoad: ebike.loadCapacity,
    chargeTime: '4 - 6 hours',
    seaters: ebike.seaters,
    image: ebike.image,
    description: `The ${ebike.modelName} is engineered for daily town commutes, market errands, and work travels. Featuring ${ebike.battery} battery packs and a responsive ${ebike.motor} powerplant.`,
    features: [
      `Seating: ${ebike.seaters} Passengers`,
      `Capacity: ${ebike.loadCapacity} payload rating`,
      `Home Credit Down Payment: ₱${ebike.homeCredit.downPayment.toLocaleString()}`,
      ebike.homeCredit.installment12mo ? `12-Mo Plan: ₱${ebike.homeCredit.installment12mo.toLocaleString()}/mo` : 'Flexible monthly terms'
    ],
    popular: idx < 3,
    freebies: ebike.freebies,
    homeCredit: ebike.homeCredit
  })),

  // --- E-TRIKES & MULTI-WHEELERS (3&4-Wheelers) ---
  ...EBIKES_DATA.filter((e) => e.category === '3&4-Wheeler').map((ebike, idx) => {
    const isCargo = ebike.modelName.toLowerCase().includes('cargo') || ebike.modelName.toLowerCase().includes('luoda') || parseInt(ebike.loadCapacity) >= 400;
    return {
      id: ebike.id,
      code: `ET-3W-${idx + 201}`,
      name: ebike.modelName,
      category: (isCargo ? 'cargo' : 'etrike') as 'cargo' | 'etrike',
      categoryLabel: isCargo ? 'Commercial Cargo & Multi-Wheel' : 'Passenger E-Trike (3 & 4 Wheeler)',
      tagline: `Heavy-duty ${ebike.motor} multi-passenger electric trike with ${ebike.seaters} seaters.`,
      priceNote: ebike.salePriceCash
        ? `₱${ebike.salePriceCash.toLocaleString()} Promo Cash (SRP ₱${ebike.srpCash.toLocaleString()})`
        : `₱${ebike.srpCash.toLocaleString()} Cash SRP`,
      srpCash: ebike.srpCash,
      salePriceCash: ebike.salePriceCash,
      motor: ebike.motor,
      battery: ebike.battery,
      range: ebike.range,
      topSpeed: '32 - 40 km/h',
      maxLoad: ebike.loadCapacity,
      chargeTime: '6 - 8 hours',
      seaters: ebike.seaters,
      image: ebike.image,
      description: `The ${ebike.modelName} delivers premier comfort and utility for family transport or commercial deliveries across Ilocos. Powered by a heavy-duty ${ebike.motor} system with up to ${ebike.loadCapacity} hauling capacity.`,
      features: [
        `Passenger Seating: ${ebike.seaters} Capacity`,
        `Heavy Duty Load: ${ebike.loadCapacity}`,
        `Home Credit Down Payment: ₱${ebike.homeCredit.downPayment.toLocaleString()}`,
        ebike.homeCredit.installment12mo ? `12-Mo Plan: ₱${ebike.homeCredit.installment12mo.toLocaleString()}/mo` : 'Flexible monthly terms'
      ],
      popular: idx === 0 || idx === 3 || idx === 10,
      freebies: ebike.freebies,
      homeCredit: ebike.homeCredit
    };
  }),

  // --- ATVS (All-Terrain Vehicles) ---
  ...ATV_DATA.map((atv, idx) => ({
    id: atv.id,
    code: `ATV-QUAD-${idx + 501}`,
    name: atv.modelName,
    category: 'atv' as const,
    categoryLabel: 'All-Terrain Quad Vehicle (ATV)',
    tagline: `High-torque ${atv.engine} off-road powerplant with ${atv.transmission} transmission.`,
    priceNote: atv.salePriceCash
      ? `₱${atv.salePriceCash.toLocaleString()} Promo Cash (SRP ₱${atv.srpCash.toLocaleString()})`
      : `₱${atv.srpCash.toLocaleString()} Cash SRP`,
    srpCash: atv.srpCash,
    salePriceCash: atv.salePriceCash,
    motor: atv.engine,
    battery: '12V Electric Push Start',
    range: 'High endurance trail tank',
    topSpeed: '50 - 65 km/h',
    maxLoad: '180 - 220 kg',
    chargeTime: 'Instant Gas Electric Start',
    seaters: '1-2',
    transmission: atv.transmission,
    tireSize: atv.tireSize,
    engine: atv.engine,
    brakes: atv.brakes,
    image: atv.image,
    description: `Conquer beaches, farm trails, and rugged mountain paths with the ${atv.modelName}. Built with aggressive ${atv.tireSize} knobby tires, ${atv.brakes} braking system, and durable ${atv.engine} motor.`,
    features: [
      `Engine: ${atv.engine}`,
      `Transmission: ${atv.transmission}`,
      `Tire Specification: ${atv.tireSize}`,
      `Braking: ${atv.brakes}`,
      `Home Credit Down Payment: ₱${atv.homeCredit.downPayment.toLocaleString()}`,
      `12-Mo Plan: ₱${atv.homeCredit.installment12mo.toLocaleString()}/mo`
    ],
    popular: idx === 0 || idx === 2,
    freebies: atv.freebies || ['Helmet', 'Toolkit Set', 'Magic Gatas'],
    homeCredit: atv.homeCredit
  }))
];
