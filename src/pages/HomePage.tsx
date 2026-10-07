import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import FeaturedWorkSection from '../components/FeaturedWorkSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import AIAutomationSection from '../components/AIAutomationSection';
import ResultsSection from '../components/ResultsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';

export default function HomePage() {
  return (
    <div className="w-full bg-black min-h-screen text-white">
      {/* 01 — Hero with Content Pack Headline, Sub-headline, Buttons & Trust Strip */}
      <Hero />

      {/* 02 — The Problem We Solve & "We Show, We Don't Just Tell" */}
      <Introduction />

      {/* 03 — What We Do (The 4 Core Practices) */}
      <ServicesSection />

      {/* 04 — How It Works (The 3 Steps: Study, Free Sample, Talk & Decide) */}
      <ProcessSection />

      {/* 05 — Sample Work Showcase (Honest Concepts) */}
      <FeaturedWorkSection />

      {/* 06 — Applied AI Automations & Workflows */}
      <AIAutomationSection />

      {/* 07 — Technical Capabilities */}
      <CapabilitiesSection />

      {/* 08 — Quality & Code Guarantees */}
      <ResultsSection />

      {/* 09 — Building Trust: Our Promise & Stories Coming Soon */}
      <TestimonialsSection />

      {/* 10 — About XenForge (Three people. One mission) */}
      <AboutSection />

      {/* 11 — FAQ */}
      <FAQSection />

      {/* 12 — Final Call To Action (Free Audit in 48 Hours) */}
      <FinalCTASection />
    </div>
  );
}
