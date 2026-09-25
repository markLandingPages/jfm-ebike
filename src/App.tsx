/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import GsapScrollAnimator from './components/GsapScrollAnimator';
import HeroSection from './components/HeroSection';
import BranchTicker from './components/BranchTicker';
import ProblemSection from './components/ProblemSection';
import ProductInActionSection from './components/ProductInActionSection';
import InventoryGallery from './components/InventoryGallery';
import FeaturesBenefitsSection from './components/FeaturesBenefitsSection';
import SocialProofSection from './components/SocialProofSection';
import ComparisonValueStackSection from './components/ComparisonValueStackSection';
import SecondaryCtaSection from './components/SecondaryCtaSection';
import FaqSection from './components/FaqSection';
import GuaranteeFooterSection from './components/GuaranteeFooterSection';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const scrollToInventory = () => {
    const el = document.getElementById('inventory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-[#800020] selection:text-white antialiased">
      {/* GSAP Global Scroll Animation Driver & Progress Bar */}
      <GsapScrollAnimator />

      {/* Floating Modern Island Navbar */}
      <Navbar onExploreClick={scrollToInventory} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onExploreClick={scrollToInventory} />
        <BranchTicker />

        {/* 2. Problem / Relatability Section */}
        <ProblemSection />

        {/* 3. Product in Action Section (Video Showcase + Live Showroom Units) */}
        <ProductInActionSection onExploreClick={scrollToInventory} />
        <InventoryGallery initialCategory={activeCategory} />

        {/* 4. Features & Benefits Section */}
        <FeaturesBenefitsSection />

        {/* 5. Social Proof Section */}
        <SocialProofSection />

        {/* 6. Comparison or Value Stack Section */}
        <ComparisonValueStackSection />

        {/* 7. Secondary CTA + Urgency Section */}
        <SecondaryCtaSection onExploreClick={scrollToInventory} />

        {/* 8. FAQ Section */}
        <FaqSection />
      </main>

      {/* 9. Guarantee + Footer Section */}
      <GuaranteeFooterSection />
    </div>
  );
}
