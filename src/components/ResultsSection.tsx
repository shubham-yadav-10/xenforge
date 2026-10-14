import { ShieldCheck, Zap, Code, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResultsSection() {
  const guarantees = [
    {
      number: '01',
      icon: <Zap size={20} className="text-amber-400" />,
      metric: '< 1.2s',
      metricLabel: 'Page Load Standard',
      headline: 'Sub-Second Edge Performance',
      subline: 'Optimized for mobile 4G networks & zero customer drop-off.',
      detail:
        'We benchmark every deployment across Core Web Vitals, static edge assets, and lightweight bundle chunking. Your customers never wait.',
    },
    {
      number: '02',
      icon: <Code size={20} className="text-blue-400" />,
      metric: '100%',
      metricLabel: 'Client Ownership',
      headline: 'Zero Vendor Lock-In & Full Code Rights',
      subline: 'You own every line of code, design file, and domain registry.',
      detail:
        'No hostage platforms. Everything is handed over with clean Git repositories, automated CI/CD deployment, and documented configuration.',
    },
    {
      number: '03',
      icon: <ShieldCheck size={20} className="text-emerald-400" />,
      metric: '48h',
      metricLabel: 'Sample Turnaround',
      headline: 'Free Custom Sample Before Payment',
      subline: 'Experience the quality before committing any investment.',
      detail:
        'We believe in earning your trust with tangible execution. You see real code, design, and automation tailored to your business before you decide.',
    },
    {
      number: '04',
      icon: <Users size={20} className="text-purple-400" />,
      metric: '1-on-1',
      metricLabel: 'Direct Engineering Access',
      headline: 'Direct Communication With The Builders',
      subline: 'No junior account executives or bureaucratic middlemen.',
      detail:
        'You speak directly with the software engineers and designers building your system on a dedicated WhatsApp/Slack channel for lightning-fast answers.',
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass text-xs font-mono text-white/70 mb-4 border border-white/10">
              <ShieldCheck size={12} className="text-emerald-400" />
              <span>07 · QUALITY & CODE GUARANTEES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Engineered standards.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-white/70">
                Non-negotiable quality.
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/70 max-w-md font-normal leading-relaxed">
            We don&apos;t hide behind vague buzzwords or vanity metrics. Every deployment is bound to
            strict technical standards, transparent deliverables, and genuine partnership.
          </p>
        </div>

        {/* 4 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {guarantees.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl p-8 sm:p-10 liquid-glass border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-white/40 block">
                        STANDARD {item.number}
                      </span>
                      <span className="text-xs font-mono text-emerald-400">
                        {item.metricLabel}
                      </span>
                    </div>
                  </div>

                  <span className="text-3xl sm:text-4xl font-mono font-medium text-white tracking-tight">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 tracking-tight">
                  {item.headline}
                </h3>

                <p className="text-xs font-mono text-amber-300/80 mb-4">
                  {item.subline}
                </p>

                <p className="text-sm text-white/70 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                <span>Verified in production code</span>
                <span className="text-emerald-400">✓ Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
              <ShieldCheck size={20} className="text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white">
                No contracts until you approve the working sample.
              </h4>
              <p className="text-xs text-white/50">
                We design and build first. You decide with complete clarity.
              </p>
            </div>
          </div>

          <Link
            to="/security"
            className="text-xs font-mono text-white hover:text-emerald-300 underline underline-offset-4 flex items-center gap-1 transition-colors"
          >
            <span>Read our security & ownership policies</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
