export interface EbikeUnit {
  id: string;
  code: string;
  name: string;
  category: 'commuter' | 'etrike' | 'atv' | 'cargo';
  categoryLabel: string;
  tagline: string;
  priceNote: string;
  motor: string;
  battery: string;
  range: string;
  topSpeed: string;
  maxLoad: string;
  chargeTime: string;
  image: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Branch {
  name: string;
  barangay: string;
  municipality: string;
  province: string;
  isMain?: boolean;
  contact: string;
  hours: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  unitPurchased: string;
  rating: number;
  date: string;
  comment: string;
}

export interface SisterBusiness {
  name: string;
  tagline: string;
  description: string;
  icon: string;
}

export const BRANCHES_DATA: Branch[] = [
  {
    name: "Main Branch",
    barangay: "Brgy. Bannuar",
    municipality: "San Juan",
    province: "Ilocos Sur",
    isMain: true,
    contact: "09366082578",
    hours: "8:00 AM - 5:30 PM (Mon-Sat)"
  },
  {
    name: "Badoc Display Center",
    barangay: "Brgy. Garreta",
    municipality: "Badoc",
    province: "Ilocos Norte",
    contact: "09366082578",
    hours: "8:30 AM - 5:00 PM"
  },
  {
    name: "Sinait Display Center",
    barangay: "Brgy. Jordan",
    municipality: "Sinait",
    province: "Ilocos Sur",
    contact: "09366082578",
    hours: "8:30 AM - 5:00 PM"
  },
  {
    name: "Cabugao Display Center",
    barangay: "Brgy. Rizal",
    municipality: "Cabugao",
    province: "Ilocos Sur",
    contact: "09366082578",
    hours: "8:30 AM - 5:00 PM"
  },
  {
    name: "Magsingal Display Center",
    barangay: "Brgy. San Vicente",
    municipality: "Magsingal",
    province: "Ilocos Sur",
    contact: "09366082578",
    hours: "8:30 AM - 5:00 PM"
  },
  {
    name: "Bantay Display Center",
    barangay: "Brgy. Aggay",
    municipality: "Bantay",
    province: "Ilocos Sur",
    contact: "09366082578",
    hours: "8:00 AM - 5:30 PM"
  },
  {
    name: "Vigan City Display Center",
    barangay: "Brgy. VIII",
    municipality: "Vigan City",
    province: "Ilocos Sur",
    contact: "09366082578",
    hours: "8:00 AM - 6:00 PM"
  },
  {
    name: "Sta. Catalina Display Center",
    barangay: "Brgy. Pangada",
    municipality: "Sta. Catalina",
    province: "Ilocos Sur",
    contact: "09366082578",
    hours: "8:30 AM - 5:00 PM"
  },
  {
    name: "Candon City Display Center",
    barangay: "Brgy. San Jose",
    municipality: "Candon City",
    province: "Ilocos Sur",
    contact: "09366082578",
    hours: "8:00 AM - 5:30 PM"
  },
  {
    name: "Sta. Cruz Display Center",
    barangay: "Brgy. Sidaoen",
    municipality: "Sta. Cruz",
    province: "Ilocos Sur",
    contact: "09366082578",
    hours: "8:30 AM - 5:00 PM"
  }
];

export const INVENTORY_DATA: EbikeUnit[] = [
  {
    id: "jfm-voltstar-city",
    code: "JFM-VS500",
    name: "JFM VoltStar Urban 500W",
    category: "commuter",
    categoryLabel: "Commuter E-Bike",
    tagline: "Effortless daily city navigation with ultra-smooth pedal assist and twist throttle.",
    priceNote: "Inquire for Installment / Cash Promo",
    motor: "500W High-Torque Brushless Motor",
    battery: "48V 15Ah Long-Life Lithium Battery",
    range: "45 - 60 km per charge",
    topSpeed: "35 km/h",
    maxLoad: "130 kg",
    chargeTime: "4 - 5 hours",
    image: "/src/assets/images/ebike_commuter_bike_1790339345034.jpg",
    description: "Engineered for students, office workers, and market runs. Features a lightweight step-through frame, bright projector LED headlight, front wire basket, and tubeless puncture-resistant tires.",
    features: [
      "Front basket & rear cushioned seat",
      "Digital LCD speedometer with battery level",
      "Hydraulic front fork suspension",
      "Keyless ignition with anti-theft alarm"
    ],
    popular: true
  },
  {
    id: "jfm-cargomax-trike",
    code: "JFM-CM800",
    name: "JFM CargoMax Heavy E-Trike 800W",
    category: "etrike",
    categoryLabel: "3-Wheeler Passenger & Cargo",
    tagline: "Heavy-duty electric trike with weather roof canopy, bench seats, and extra cargo bed.",
    priceNote: "Best Seller • Flexible Terms Available",
    motor: "800W Differential Gear Motor",
    battery: "60V 20Ah Graphene Deep Cycle Battery",
    range: "50 - 70 km per charge",
    topSpeed: "32 km/h",
    maxLoad: "320 kg (2-3 Passengers + Cargo)",
    chargeTime: "6 - 7 hours",
    image: "/src/assets/images/ebike_cargo_trike_1790339362290.jpg",
    description: "The ultimate family runabout and business workhorse. Fully sheltered with an all-weather roof canopy, reverse gear button, and wide reinforced chassis built for provincial roads.",
    features: [
      "Weather-shield canopy roof & windshield",
      "Push-button reverse gear with audible warning",
      "Heavy-duty leaf spring rear suspension",
      "Spacious under-seat lockable storage"
    ],
    popular: true
  },
  {
    id: "jfm-quad-apex-atv",
    code: "JFM-ATV200",
    name: "JFM TrailMaster 200 Quad ATV",
    category: "atv",
    categoryLabel: "All-Terrain Vehicle (ATV)",
    tagline: "Rugged off-road power built for agri-farms, coastal sand, and recreation trails.",
    priceNote: "Inquire for Direct Unit Reservation",
    motor: "200cc 4-Stroke High Torque Powerplant",
    battery: "12V 9Ah Electric Push Start",
    range: "Full tank 6.5 Liters (Long Endurance)",
    topSpeed: "55 km/h",
    maxLoad: "180 kg",
    chargeTime: "Electric Start with pull backup",
    image: "/src/assets/images/atv_quad_vehicle_1790339374646.jpg",
    description: "Tested on rugged Ilocos terrain. Built with aggressive deep-tread off-road tires, reinforced steel front bumper, heavy steel luggage racks, and dual disc brakes for absolute safety.",
    features: [
      "Rugged all-terrain deep-lug knobby tires",
      "Dual LED ultra-wide trail searchlights",
      "Front and rear reinforced utility steel racks",
      "Automatic transmission with reverse gear"
    ],
    popular: true
  },
  {
    id: "jfm-metroglide-cruiser",
    code: "JFM-MG600",
    name: "JFM MetroGlide Step-Through 600W",
    category: "commuter",
    categoryLabel: "Commuter E-Bike",
    tagline: "Modern sleek aesthetic with balanced center-mass battery and passenger footpegs.",
    priceNote: "Special Promotional Unit",
    motor: "600W High Efficiency Hub Motor",
    battery: "48V 20Ah Extended Range Battery",
    range: "55 - 65 km per charge",
    topSpeed: "38 km/h",
    maxLoad: "150 kg",
    chargeTime: "4 - 6 hours",
    image: "/src/assets/images/ebike_commuter_bike_1790339345034.jpg",
    description: "Ideal for daily commutes between municipalities. Features dual rear shock absorbers for bumpy road comfort, wide floorboard, and built-in USB mobile phone charging port.",
    features: [
      "Integrated USB phone charger on handlebar",
      "Dual hydraulic rear suspension",
      "Drum brakes with auto motor shut-off cutoff",
      "Rear pillion passenger backrest"
    ]
  },
  {
    id: "jfm-ecotran-utility",
    code: "JFM-ET1000",
    name: "JFM EcoTrans Commercial Hauler",
    category: "cargo",
    categoryLabel: "Cargo & Commercial",
    tagline: "Built for delivery businesses, water refilling stations, and agricultural market hauls.",
    priceNote: "Commercial Bulk Inquiry Welcome",
    motor: "1000W Heavy Duty Geared Axle Motor",
    battery: "72V 32Ah High Capacity Pack",
    range: "60 - 80 km per charge",
    topSpeed: "30 km/h (Gov. restricted for safety)",
    maxLoad: "450 kg Flatbed Capacity",
    chargeTime: "7 - 8 hours",
    image: "/src/assets/images/ebike_cargo_trike_1790339362290.jpg",
    description: "Ditch expensive gasoline for your local deliveries. Features drop-down steel cargo sides, reinforced chassis, extra-wide tires, and high/low gear climbing torque selector.",
    features: [
      "3-side drop gate modular steel bed",
      "High-torque hill climbing mechanical gear ratio",
      "Double heavy-duty rear coil springs",
      "Emergency parking brake lock"
    ]
  },
  {
    id: "jfm-predator-atv-junior",
    code: "JFM-ATV125",
    name: "JFM Scout 125 Sport ATV",
    category: "atv",
    categoryLabel: "All-Terrain Vehicle (ATV)",
    tagline: "Compact, agile sports quad perfect for hobbyists, farm scouting, and beach resort trails.",
    priceNote: "Ready Stock at San Juan & Bantay",
    motor: "125cc 4-Stroke Air-Cooled Engine",
    battery: "12V 5Ah Electric Start",
    range: "Economy fuel efficiency (4.5L tank)",
    topSpeed: "45 km/h (Adjustable speed governor)",
    maxLoad: "110 kg",
    chargeTime: "Key electric start",
    image: "/src/assets/images/atv_quad_vehicle_1790339374646.jpg",
    description: "Compact chassis with easy automatic throttle control and speed limiter screw for beginner safety. Perfect for recreational parks, beach runs, and resort hospitality.",
    features: [
      "Adjustable speed throttle limiter",
      "Safety tether emergency engine cutoff",
      "Dual A-Arm front suspension",
      "Front bumper brush guard"
    ]
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "Engr. Mark Jerome Bautista",
    location: "San Juan, Ilocos Sur (Main Branch)",
    unitPurchased: "JFM CargoMax 800W Trike",
    rating: 5,
    date: "August 2026",
    comment: "Sobrang tipid sa pamalengke at panghatid sa mga bata sa Bannuar Elementary! Hindi na kami gumagastos sa krudo. 1 charge lang tumatagal ng 3-4 days sa amin. Solid ang serbisyo ni Boss John Francis at mabilis mag-deliver."
  },
  {
    id: "rev-2",
    name: "Aling Corazon Dela Cruz",
    location: "Vigan City, Ilocos Sur",
    unitPurchased: "JFM VoltStar 500W Commuter",
    rating: 5,
    date: "July 2026",
    comment: "Ginamit ko na araw-araw papunta sa Calle Crisologo souvenir shop ko. Napakadaling patakbuhin, tahimik, at hindi mabigat dalhin. Nung nagka-minor concern ako sa side mirror, agad inasikaso sa Vigan branch. Salamat JFM!"
  },
  {
    id: "rev-3",
    name: "Rodelio 'Del' Agcaoili",
    location: "Badoc, Ilocos Norte",
    unitPurchased: "JFM EcoTrans Commercial Hauler",
    rating: 5,
    date: "September 2026",
    comment: "Pang-deliver ng gulay at bawang mula Badoc papuntang Sinait. Nakakarga ng saku-sakong ani nang walang hirap sa mga ahon. Malaking tulong sa hanapbuhay ng pamilya namin."
  },
  {
    id: "rev-4",
    name: "Dr. Catherine Mendoza",
    location: "Candon City, Ilocos Sur",
    unitPurchased: "JFM MetroGlide Step-Through",
    rating: 5,
    date: "June 2026",
    comment: "Very stylish e-bike! I use it within the hospital compound and quick clinic trips around Candon. Smooth ride, great battery indicator, and peaceful driving. Highly recommend JFM Group!"
  },
  {
    id: "rev-5",
    name: "Reynaldo 'Kap' Valdez",
    location: "Bantay, Ilocos Sur",
    unitPurchased: "JFM TrailMaster 200 Quad ATV",
    rating: 5,
    date: "August 2026",
    comment: "Matikas ang ATV ng JFM. Ginagamit namin pang-ikot sa farm at bukid sa Aggay, Bantay. Kayang-kaya ang putik at buhangin. Maayos kausap ang staff sa Bantay branch."
  }
];

export const SISTER_BUSINESSES_DATA: SisterBusiness[] = [
  {
    name: "JFM Online Booking Services",
    tagline: "Air, Sea & Land Travel Ticketing",
    description: "Domestic and international airline flight bookings, ferry vessel tickets, bus ticketing, and custom holiday travel packages.",
    icon: "Plane"
  },
  {
    name: "JFM Document Processing",
    tagline: "Fast & Hassle-Free Assistance",
    description: "Assistance with PSA certificates, passports, NBI clearances, government agency compliances, and legal document support.",
    icon: "FileText"
  },
  {
    name: "JFM Digital Marketing",
    tagline: "Local Business Growth & Media",
    description: "Social media advertising campaigns, promotional video production, content branding, and localized digital promotions.",
    icon: "Megaphone"
  },
  {
    name: "JFM Bookkeeping",
    tagline: "Accurate Financial Records",
    description: "Reliable small business bookkeeping, BIR tax filing support, ledger maintenance, and monthly financial statement preparation.",
    icon: "Calculator"
  },
  {
    name: "JFM CCTV & Security",
    tagline: "Home & Business Protection",
    description: "High-definition surveillance cameras, remote phone viewing setup, perimeter security systems, and preventative maintenance.",
    icon: "ShieldCheck"
  }
];
