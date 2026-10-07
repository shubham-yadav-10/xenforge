import { Link } from 'react-router-dom';
import { ArrowRight, Eye, ShieldCheck, Zap } from 'lucide-react';

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="relative bg-black text-white pt-24 sm:pt-32 pb-20 sm:pb-28 px-6 sm:px-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Subtle section label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">
            01 / THE PROBLEM WE SOLVE
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* The Problem We Solve */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.15] text-white">
              Most great small businesses are losing customers online.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
              No website, a slow one, messy social media, and hours wasted on tasks a machine
              could do. Your competitors are already fixing this. We help you catch up, and
              then get ahead.
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-white/50">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                No Agency Fluff
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                Transparent Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                Real Deliverables
              </span>
            </div>
          </div>
        </div>

        {/* Why we're different: "We show, we don't just tell" */}
        <div className="liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-3">
                <Eye size={14} className="text-white/80" />
                <span className="uppercase tracking-widest">WHY WE&apos;RE DIFFERENT</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-medium text-white mb-4 tracking-tight">
                &ldquo;We show, we don&apos;t just tell.&rdquo;
              </h3>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl font-normal">
                Before we ask for a rupee, we study your business and build a sample of your
                solution, such as a homepage mockup for your brand. You see exactly what you&apos;re
                getting before you decide.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                to="/audit"
                className="bg-white text-black text-xs sm:text-sm font-medium px-6 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Claim Your Free Sample</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/about"
                className="liquid-glass text-white text-xs sm:text-sm font-medium px-6 py-3.5 rounded-full hover:bg-white/5 transition-colors text-center"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
