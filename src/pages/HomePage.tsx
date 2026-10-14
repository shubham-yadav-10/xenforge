import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';

export default function HomePage() {
  return (
    <div className="w-full bg-black min-h-screen text-white">
      {/* 01 — Hero */}
      <Hero />

      {/* 02 — The Problem We Solve & "We Show, We Don't Just Tell" */}
      <Introduction />

      {/* 03 — What We Do (The 4 Core Practices) */}
      <ServicesSection />

      {/* 04 — How It Works (3 Steps: Study, Blueprint, Talk & Decide) */}
      <ProcessSection />

      {/* 05 — Client Testimonials & Results (Replaces "What We Build") */}
      <TestimonialsSection />

      {/* 06 — About XenForge (Altered & Focused Founder Studio) */}
      <AboutSection />

      {/* 07 — Common Enquiries (Separate Standalone FAQ & Enquiries Section) */}
      <FAQSection />

      {/* 08 — Final Action Banner (Audit in 48 Hours - Zero Penny Upfront) */}
      <FinalCTASection />
    </div>
  );
}
