import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServiceButtons from "@/components/ServiceButtons";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ServicesListSection from "@/components/ServicesListSection";
import CTASection from "@/components/CTASection";
import AccordionSection from "@/components/AccordionSection";
import TakeoffServicesSection from "@/components/TakeoffServicesSection";
import HowToBeginSection from "@/components/HowToBeginSection";
import HelpContractorsSection from "@/components/HelpContractorsSection";
import ProcessEstimationSection from "@/components/ProcessEstimationSection";
import ProcessSection from "@/components/ProcessSection";
import SampleProjectsSection from "@/components/SampleProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Paradise Construction Estimating",
    "description": "Professional construction estimating services with 15+ years of experience. Get accurate material take-offs, residential and commercial estimates.",
    "url": "https://paradiseestimating.com",
    "telephone": "+1-718-719-6171",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "areaServed": "US",
    "serviceType": [
      "Construction Estimating",
      "Material Take-Off Service",
      "Residential Estimating",
      "Commercial Estimating",
      "Industrial Estimating"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2000"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Paradise Construction Estimating | Expert Construction Estimation Services"
        description="Professional construction estimating services with 15+ years of experience. Get accurate material take-offs, residential and commercial estimates. Trusted by 2000+ projects."
        canonical="https://paradiseestimating.com/"
        structuredData={structuredData}
        preloadImages={["/assets/hero_illustration.png"]}
      />
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <ServiceButtons />
        <TrustSection />
        {/* <ContactSection /> */}
        <FeaturesSection />
        <AboutSection />
        <ServicesListSection />
        <CTASection />
        <AccordionSection />
        <TakeoffServicesSection />
        <HowToBeginSection />
        <HelpContractorsSection />
        <ProcessEstimationSection />
        <SampleProjectsSection />
        {/* <ClientsSection /> */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
