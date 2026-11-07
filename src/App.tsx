import React, { useState } from 'react';
import { useApp, AppProvider } from './context/AppContext';
import { LandingNavbar } from './components/landing/LandingNavbar';
import { HeroSection } from './components/landing/HeroSection';
import { AboutBrandSection } from './components/landing/AboutBrandSection';
import { CollectionsSection } from './components/landing/CollectionsSection';
import { CatalogSection } from './components/landing/CatalogSection';
import { BuyingExperienceSection } from './components/landing/BuyingExperienceSection';
import { NationalShippingSection } from './components/landing/NationalShippingSection';
import { SocialProofSection } from './components/landing/SocialProofSection';
import { FinalCtaSection } from './components/landing/FinalCtaSection';
import { FooterSection } from './components/landing/FooterSection';
import { ProductDetailModal } from './components/catalog/ProductDetailModal';
import { InquiryListModal } from './components/catalog/InquiryListModal';
import { BrandGuideModal } from './components/brand/BrandGuideModal';
import { DashboardLayout } from './components/dashboard/DashboardLayout';

const MainAppContent: React.FC = () => {
  const { view, selectedProduct, setSelectedProduct } = useApp();
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#E5E7EB]">
      {/* Accessibility Skip Link */}
      <a 
        href="#catalogo" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-rose-600 focus:text-white focus:rounded-xl focus:shadow-2xl focus:font-bold focus:text-xs"
      >
        Pular para o catálogo de produtos
      </a>

      {view === 'landing' ? (
        <>
          <LandingNavbar onOpenInquiryList={() => setInquiryModalOpen(true)} />
          <main id="main-content">
            <HeroSection />
            <AboutBrandSection />
            <CollectionsSection />
            <CatalogSection />
            <BuyingExperienceSection />
            <NationalShippingSection />
            <SocialProofSection />
            <FinalCtaSection />
          </main>
          <FooterSection />
        </>
      ) : (
        <DashboardLayout />
      )}

      {/* Global Modals */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <InquiryListModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />

      <BrandGuideModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}

export default App;
