import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import ServicesSection from '../components/ServicesSection';
import FeaturedWorkSection from '../components/FeaturedWorkSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import ProcessSection from '../components/ProcessSection';
import AIAutomationSection from '../components/AIAutomationSection';
import ResultsSection from '../components/ResultsSection';
import TechStackSection from '../components/TechStackSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';

export default function HomePage() {
  return (
    <div className="w-full bg-black min-h-screen text-white">
      {/* 01 — Existing Approved Hero */}
      <Hero />

      {/* 02 — Agency Introduction */}
      <Introduction />

      {/* 03 — Services */}
      <ServicesSection />

      {/* 04 — Featured Work */}
      <FeaturedWorkSection />

      {/* 05 — Capabilities / What We Do */}
      <CapabilitiesSection />

      {/* 06 — Process */}
      <ProcessSection />

      {/* 07 — AI Automation */}
      <AIAutomationSection />

      {/* 08 — Results / Metrics */}
      <ResultsSection />

      {/* 09 — Technology */}
      <TechStackSection />

      {/* 10 — About FORGE */}
      <AboutSection />

      {/* 11 — Testimonials */}
      <TestimonialsSection />

      {/* 12 — FAQ */}
      <FAQSection />

      {/* 13 — Final CTA */}
      <FinalCTASection />
    </div>
  );
}
