import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      title: 'Show, don’t just tell',
      desc: 'We prove our value with real work before you commit.',
    },
    {
      title: 'Honest advice',
      desc: 'If you don’t need a service, we’ll say so directly.',
    },
    {
      title: 'Speed with quality',
      desc: 'Fast delivery never means rushed or careless work.',
    },
    {
      title: 'Your growth is our growth',
      desc: 'We measure success by your results, not by our invoices.',
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">
            05 / ABOUT XENFORGE
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.15] text-white mb-6">
              Three people. One mission:
              <br />
              <span className="text-white/70">help businesses win online.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-normal max-w-xl mb-6">
              XenForge started with a simple observation: thousands of talented small businesses,
              from local cafés to boutique brands, run beautiful Instagram pages but have no website,
              no automation and no real digital system behind them. They&apos;re doing great work and
              still losing customers.
            </p>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed font-normal max-w-xl mb-8">
              We&apos;re a team of three who decided to fix that. We combine design, development,
              AI and marketing under one roof so you don&apos;t have to juggle five different freelancers.
            </p>

            <Link
              to="/about"
              className="liquid-glass text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
            >
              <span>Read Our Full Story & Mission</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-1">
              OUR CORE VALUES
            </span>
            {values.map((v, idx) => (
              <div
                key={v.title}
                className="liquid-glass rounded-xl p-5 border border-white/10"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-1">
                  <span>VALUE 0{idx + 1}</span>
                </div>
                <h3 className="text-base font-medium text-white mb-1">{v.title}</h3>
                <p className="text-xs text-white/65 leading-relaxed font-normal">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
