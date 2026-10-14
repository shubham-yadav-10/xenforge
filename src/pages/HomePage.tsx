import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProcessSection from '../components/ProcessSection';

export default function HomePage() {
  return (
    <div className="w-full bg-black min-h-screen text-white">
      {/* 01 — Hero */}
      <Hero />

      {/* 02 — The Problem We Solve & "We Show, We Don't Just Tell" */}
      <Introduction />

      {/* 03 — What We Do (The 4 Core Practices) */}
      <ServicesSection />

      {/* 04 — Client Testimonials & Proof (In place of former "What We Build") */}
      <TestimonialsSection />

      {/* 05 — How It Works (3 Steps: Study, Blueprint, Talk & Decide) */}
      <ProcessSection />
    </div>
  );
}
