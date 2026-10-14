import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Zap, Code2, Users } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Direct Builder Collaboration',
      desc: 'You work directly with senior software engineers, designers, and growth strategists. Zero account managers playing telephone.',
      icon: Users,
    },
    {
      title: 'Proof Before Investment',
      desc: 'Before you spend a single penny, we run an in-depth diagnostic on your current digital bottlenecks and deliver a clear plan.',
      icon: ShieldCheck,
    },
    {
      title: 'Sub-Second Speed & Quality',
      desc: 'We engineer focused, clean codebases that load in under a second and convert traffic into paying customers.',
      icon: Zap,
    },
    {
      title: 'Complete Client Ownership',
      desc: 'You own 100% of your code, repository, design assets, and client data. We never lock you into closed platforms.',
      icon: Code2,
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">
            05 / ABOUT XENFORGE
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Studio Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.15] text-white mb-6">
              A focused digital studio
              <br />
              <span className="text-white/60">engineered for ambitious brands.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-normal max-w-xl mb-6">
              XenForge was built on a simple premise: ambitious small and medium businesses deserve
              the high-caliber digital engineering that was previously only accessible to funded
              enterprises.
            </p>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed font-normal max-w-xl mb-8">
              We combine custom web development, automated AI workflows, digital marketing, and
              cinematic video editing under one cohesive studio. No fragmented freelancers. No agency
              bloat. Just senior builders executing high-converting digital systems.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="liquid-glass text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
              >
                <span>Read Our Full Story & Principles</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-1">
              OUR CORE ADVANTAGES
            </span>
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="liquid-glass rounded-xl p-5 border border-white/10 flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/80 mt-0.5">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-1">
                      <span>PILLAR 0{idx + 1}</span>
                    </div>
                    <h3 className="text-base font-medium text-white mb-1">{pillar.title}</h3>
                    <p className="text-xs text-white/65 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance metrics banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-white/10">
          <div className="liquid-glass rounded-xl p-5 border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-1">
              &lt; 48h
            </div>
            <div className="text-xs font-mono text-white/50">Audit Turnaround</div>
          </div>
          <div className="liquid-glass rounded-xl p-5 border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-1">
              &lt; 0.9s
            </div>
            <div className="text-xs font-mono text-white/50">Average Load Time</div>
          </div>
          <div className="liquid-glass rounded-xl p-5 border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-1">
              100%
            </div>
            <div className="text-xs font-mono text-white/50">Client Ownership</div>
          </div>
          <div className="liquid-glass rounded-xl p-5 border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-1">
              0 Penny
            </div>
            <div className="text-xs font-mono text-white/50">Upfront Commitment</div>
          </div>
        </div>
      </div>
    </section>
  );
}
