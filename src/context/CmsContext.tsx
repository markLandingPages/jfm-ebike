import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  EbikeUnit,
  Branch,
  Review,
  INVENTORY_DATA,
  BRANCHES_DATA,
  REVIEWS_DATA
} from '../data/ebikesData';

export interface CustomerInquiry {
  id: string;
  name: string;
  phone: string;
  unitCode: string;
  unitName: string;
  preferredBranch: string;
  notes?: string;
  date: string;
  status: 'new' | 'contacted' | 'reserved' | 'completed';
}

export interface SiteConfig {
  businessName: string;
  tagline: string;
  hotline: string;
  facebookUrl: string;
  youtubeUrl: string;
  mainAddress: string;
  announcementEnabled: boolean;
  announcementText: string;
}

const DEFAULT_CONFIG: SiteConfig = {
  businessName: 'JFM E-Bikes Trading & Services',
  tagline: 'Ilocos Premier E-Mobility Dealership',
  hotline: '09366082578',
  facebookUrl: 'https://www.facebook.com/JFMeBikeShopMaintenanceandRepair',
  youtubeUrl: 'https://www.youtube.com/@JohnFrancisManuelRNRMLPT',
  mainAddress: 'Brgy. Bannuar, San Juan, Ilocos Sur, Philippines',
  announcementEnabled: true,
  announcementText: '⚡ Now Available: Fast Same-Day Release Across All 10 Ilocos Display Centers!'
};

const STORAGE_KEYS = {
  UNITS: 'jfm_units_v5',
  BRANCHES: 'jfm_branches_v2',
  REVIEWS: 'jfm_reviews_v2',
  INQUIRIES: 'jfm_inquiries_v2',
  CONFIG: 'jfm_config_v2'
};

const getStoredItem = <T,>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const item = localStorage.getItem(key);
    if (!item) return defaultValue;
    const parsed = JSON.parse(item);
    return parsed ?? defaultValue;
  } catch {
    return defaultValue;
  }
};

const setStoredItem = <T,>(key: string, value: T): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`Failed to persist to localStorage [${key}]:`, err);
  }
};

interface CmsContextType {
  // Data
  units: EbikeUnit[];
  branches: Branch[];
  reviews: Review[];
  inquiries: CustomerInquiry[];
  config: SiteConfig;
  isLoading: boolean;

  // Inquiries
  submitInquiry: (inquiry: Omit<CustomerInquiry, 'id' | 'date' | 'status'>) => Promise<void>;
  refreshAllData: () => Promise<void>;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [units, setUnits] = useState<EbikeUnit[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('jfm_units_v1');
        localStorage.removeItem('jfm_units_v2');
        localStorage.removeItem('jfm_units_v3');
      } catch {}
    }
    const stored = getStoredItem<EbikeUnit[]>(STORAGE_KEYS.UNITS, INVENTORY_DATA);
    if (
      !Array.isArray(stored) ||
      stored.length === 0 ||
      typeof stored[0]?.srpCash !== 'number' ||
      !stored[0]?.image ||
      stored[0]?.image.includes('1790339')
    ) {
      return INVENTORY_DATA;
    }
    return stored;
  });

  const [branches, setBranches] = useState<Branch[]>(() =>
    getStoredItem<Branch[]>(STORAGE_KEYS.BRANCHES, BRANCHES_DATA)
  );
  const [reviews, setReviews] = useState<Review[]>(() =>
    getStoredItem<Review[]>(STORAGE_KEYS.REVIEWS, REVIEWS_DATA)
  );
  const [inquiries, setInquiries] = useState<CustomerInquiry[]>(() =>
    getStoredItem<CustomerInquiry[]>(STORAGE_KEYS.INQUIRIES, [])
  );
  const [config, setConfig] = useState<SiteConfig>(() =>
    getStoredItem<SiteConfig>(STORAGE_KEYS.CONFIG, DEFAULT_CONFIG)
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Sync to localStorage whenever state updates
  useEffect(() => {
    setStoredItem(STORAGE_KEYS.UNITS, units);
  }, [units]);

  useEffect(() => {
    setStoredItem(STORAGE_KEYS.BRANCHES, branches);
  }, [branches]);

  useEffect(() => {
    setStoredItem(STORAGE_KEYS.REVIEWS, reviews);
  }, [reviews]);

  useEffect(() => {
    setStoredItem(STORAGE_KEYS.INQUIRIES, inquiries);
  }, [inquiries]);

  useEffect(() => {
    setStoredItem(STORAGE_KEYS.CONFIG, config);
  }, [config]);

  const refreshAllData = useCallback(async () => {
    setIsLoading(true);
    setUnits(INVENTORY_DATA);
    setBranches(BRANCHES_DATA);
    setReviews(REVIEWS_DATA);
    setInquiries(getStoredItem<CustomerInquiry[]>(STORAGE_KEYS.INQUIRIES, []));
    setConfig(DEFAULT_CONFIG);
    setIsLoading(false);
  }, []);

  // Inquiries submission from customer reservation form
  const submitInquiry = async (inqData: Omit<CustomerInquiry, 'id' | 'date' | 'status'>) => {
    const newInquiry: CustomerInquiry = {
      ...inqData,
      id: `inq-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      status: 'new'
    };
    setInquiries((prev) => [newInquiry, ...prev]);
  };

  return (
    <CmsContext.Provider
      value={{
        units,
        branches,
        reviews,
        inquiries,
        config,
        isLoading,
        submitInquiry,
        refreshAllData
      }}
    >
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};
