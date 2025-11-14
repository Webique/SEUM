import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { StrengthsSection } from '@/components/StrengthsSection';
import { ValuesSection } from '@/components/ValuesSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CatalogueSection } from '@/components/CatalogueSection';
import { ClientsSection } from '@/components/ClientsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <StrengthsSection />
        <ValuesSection />
        <ServicesSection />
        <CatalogueSection />
        <ClientsSection />
        <WhyChooseUsSection />
        <ContactSection />
        <Footer />
      </div>
      <ScrollToTop />
      <FloatingWhatsApp />
    </LanguageProvider>
  );
};

export default Index;
