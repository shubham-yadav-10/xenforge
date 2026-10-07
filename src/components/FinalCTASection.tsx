import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="relative bg-black text-white py-28 sm:py-36 px-6 sm:px-12 border-b border-white/5 overflow-hidden">
      {/* Subtle radial backdrop matching hero lighting */}
      <div className="absolute inset-0 bg-radial-[at_50%_40%] from-white/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-xs font-mono text-white/80 mb-6 border border-white/10">
          <Sparkles size={12} className="text-white/80" />
          <span>ZERO PRESSURE · NO OBLIGATION</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
          Ready to grow faster?
        </h2>

        <p className="text-base sm:text-xl text-white/70 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Tell us about your business and we&apos;ll send you a free audit within 48 hours.
          See what&apos;s working, what&apos;s costing you customers, and a sample of what we&apos;d build.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/audit"
            className="bg-white text-black text-sm sm:text-base font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg active:scale-[0.98]"
          >
            <span>Get a Free Business Audit</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            to="/contact"
            className="liquid-glass text-white text-sm sm:text-base font-medium px-7 py-3.5 rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
          >
            <PhoneCall size={16} className="text-white/70" />
            <span>Book a Free Call</span>
          </Link>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/40">
          <span>REPORT IN 48 HOURS</span>
          <span>·</span>
          <span>HONEST ADVICE</span>
          <span>·</span>
          <span>NO CREDIT CARD OR RUPEE REQUIRED</span>
        </div>
      </div>
    </section>
  );
}
