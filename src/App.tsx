import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ProductInActionSection from './components/ProductInActionSection';
import FeaturesBenefitsSection from './components/FeaturesBenefitsSection';
import ComparisonValueStackSection from './components/ComparisonValueStackSection';
import InventoryGallery from './components/InventoryGallery';
import BookingServicesSection from './components/BookingServicesSection';
import OtherBusinessesSection from './components/OtherBusinessesSection';
import SocialProofSection from './components/SocialProofSection';
import FaqSection from './components/FaqSection';
import SecondaryCtaSection from './components/SecondaryCtaSection';
import GuaranteeFooterSection from './components/GuaranteeFooterSection';
import GsapScrollAnimator from './components/GsapScrollAnimator';
import { CmsProvider, useCms } from './context/CmsContext';

function WebsiteContent() {
  const { config } = useCms();

  const scrollToInventory = () => {
    const el = document.getElementById('inventory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#800020] selection:text-white">
      <GsapScrollAnimator />

      {/* Floating Navbar */}
      <Navbar onExploreClick={scrollToInventory} />

      <main id="main-content">
        <HeroSection onExploreClick={scrollToInventory} />
        <ProblemSection />
        <ProductInActionSection onExploreClick={scrollToInventory} />
        <FeaturesBenefitsSection />
        <ComparisonValueStackSection />
        <InventoryGallery />
        <BookingServicesSection />
        <OtherBusinessesSection />
        <SocialProofSection />
        <FaqSection />
        <SecondaryCtaSection onExploreClick={scrollToInventory} />
      </main>

      <GuaranteeFooterSection />
    </div>
  );
}

export default function App() {
  return (
    <CmsProvider>
      <WebsiteContent />
    </CmsProvider>
  );
}
