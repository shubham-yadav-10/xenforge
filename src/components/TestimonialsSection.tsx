import { Link } from 'react-router-dom';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function TestimonialsSection() {
  const promises = [
    'A free business audit and sample before you pay anything',
    'A reply within 24 hours on working days',
    'A clear written quote, with no hidden costs',
    'Two rounds of free revisions on every project',
    'You own 100% of your website, content and data',
  ];

  return (
    <section className="relative bg-black text-white py-24 sm:py-32 px-6 sm:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">
            04 / TRANSPARENCY & OUR PROMISE
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Our Promise */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
              BUILDING TRUST HONESTLY
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6">
              What you can expect from XenForge.
            </h2>
            <p className="text-base text-white/70 leading-relaxed font-normal mb-8 max-w-xl">
              We never invent fake 5-star reviews or claim results we haven&apos;t earned.
              As an ambitious new agency, we earn your partnership through proof, speed,
              and concrete guarantees before you commit.
            </p>

            <div className="space-y-3.5 mb-8">
              {promises.map((promise) => (
                <div key={promise} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-white/80 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white/90 font-normal">
                    {promise}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/audit"
              className="bg-white text-black text-xs sm:text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <Sparkles size={14} />
              <span>Claim Your Free Audit & Sample</span>
            </Link>
          </div>

          {/* Right Column: Stories Coming Soon Card */}
          <div className="lg:col-span-5">
            <div className="liquid-glass rounded-2xl p-8 sm:p-10 border border-white/10 text-center">
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
                PILOT CLIENTS
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3">
                Stories coming soon.
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-sm mx-auto mb-6 font-normal">
                We&apos;re a new team and proud of it. We&apos;re working with our first clients
                right now, and their verified stories will live here soon. Want to be one of
                our pilot case studies?
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-6 text-xs text-white/60 font-mono text-left space-y-1">
                <div>✓ Pilot pricing available</div>
                <div>✓ Free mockups before kickoff</div>
                <div>✓ Direct founder attention</div>
              </div>

              <Link
                to="/contact"
                className="liquid-glass text-white text-xs font-mono px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
              >
                <span>BE A PILOT CLIENT</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
