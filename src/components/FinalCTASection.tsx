import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="relative bg-black text-white py-28 sm:py-40 px-6 sm:px-12 border-b border-white/5 overflow-hidden">
      {/* Subtle cinematic gradient backdrop matching hero lighting */}
      <div className="absolute inset-0 bg-radial-[at_50%_40%] from-white/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-4">
          13 / GET IN TOUCH
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-tight">
          HAVE A PROJECT IN MIND?
        </h2>

        <p className="text-base sm:text-xl text-white/60 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Tell us what you&apos;re building, what needs fixing or what you want to improve.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-black text-sm sm:text-base font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg active:scale-[0.98]"
          >
            <span>START A PROJECT</span>
            <ArrowRight size={16} />
          </Link>

          <a
            href="mailto:hello@forge.agency"
            className="liquid-glass text-white text-sm sm:text-base font-medium px-7 py-3.5 rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
          >
            <Mail size={16} className="text-white/70" />
            <span>EMAIL FORGE</span>
          </a>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/40">
          <span>AVERAGE RESPONSE: UNDER 24 HOURS</span>
          <span>·</span>
          <span>FIXED PRICE PROPOSALS</span>
          <span>·</span>
          <span>NO VENDOR LOCK-IN</span>
        </div>
      </div>
    </section>
  );
}
