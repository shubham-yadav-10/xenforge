import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Users } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      title: 'Show, don’t just tell.',
      desc: 'We prove our value with real work before you commit. We build you a free sample before asking for a rupee.',
    },
    {
      title: 'Honest advice.',
      desc: 'If you don’t need a service, we’ll say so. We never sell you complex systems your business isn’t ready for.',
    },
    {
      title: 'Speed with quality.',
      desc: 'Fast delivery never means rushed work. We work in focused sprint cycles without bloated bureaucratic delays.',
    },
    {
      title: 'Your growth is our growth.',
      desc: 'We measure success by your results—inquiries captured, hours saved, and customer orders—not by our invoices.',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="pb-16 border-b border-white/10 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-xs font-mono text-white/80 mb-5 border border-white/10">
            <Users size={12} className="text-white/80" />
            <span>ABOUT XENFORGE · BENGALURU, INDIA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
            Three people. One mission:
            <br />
            <span className="text-white/70">help businesses win online.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/60 font-normal max-w-2xl leading-relaxed mb-10">
            We combine design, development, AI and marketing under one roof so you don&apos;t have
            to juggle five different freelancers.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/audit"
              className="bg-white text-black text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <span>Get a Free Business Audit</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="liquid-glass text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-white/5 transition-colors"
            >
              Book a 20-Min Call
            </Link>
          </div>
        </header>

        {/* 1. Our Story */}
        <section className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            01 / OUR STORY
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
            The Observation That Started XenForge
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-white/75 leading-relaxed font-normal max-w-3xl">
            <p>
              XenForge started with a simple observation: thousands of talented small businesses,
              from local cafés to boutique brands, run beautiful Instagram pages but have no website,
              no automation and no real digital system behind them. They&apos;re doing great work and
              still losing customers.
            </p>
            <p>
              When interested buyers search Google Maps or want to book an appointment after hours,
              they hit dead ends. Inquiries sit unanswered in DMs, and founders waste dozens of hours
              every week copying phone numbers and answering repetitive questions.
            </p>
            <p>
              We&apos;re a team of three who decided to fix that. We combine design, development, AI
              and marketing under one roof so you don&apos;t have to manage disparate agencies or
              compromise on quality.
            </p>
          </div>
        </section>

        {/* 2. Our Mission */}
        <section className="mb-20 pt-12 border-t border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            02 / OUR MISSION
          </span>
          <div className="liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10 max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-medium text-white mb-4 tracking-tight leading-snug">
              To give every ambitious business the digital tools that used to be available
              only to big companies.
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
              High-speed conversion websites, intelligent customer chat automations, professional
              video ad editing, and targeted local SEO shouldn&apos;t require a ₹10 Lakh corporate
              retainer. We engineer practical, accessible digital foundations built to work.
            </p>
          </div>
        </section>

        {/* 3. Our Values */}
        <section className="mb-20 pt-12 border-t border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            03 / OUR VALUES
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-8">
            How We Operate Every Single Day
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="liquid-glass rounded-xl p-7 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-white/70" />
                    <span>{v.title}</span>
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Team Structure Note */}
        <section className="mb-20 pt-12 border-t border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            04 / THE TEAM
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <span className="font-mono text-xs text-white/40 block mb-1">FOUNDER & LEAD</span>
              <h4 className="text-lg font-medium text-white mb-1">Shubham</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Frontend architecture, interactive UI systems, and client solutions.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <span className="font-mono text-xs text-white/40 block mb-1">ENGINEERING</span>
              <h4 className="text-lg font-medium text-white mb-1">AI & Automations</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Chatbot logic, WhatsApp integration, API connectors, and lead pipelines.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <span className="font-mono text-xs text-white/40 block mb-1">GROWTH & CREATIVE</span>
              <h4 className="text-lg font-medium text-white mb-1">Creative & Media</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Short-form video editing, visual pacing, and digital ad strategy.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Bottom CTA */}
        <div className="pt-16 border-t border-white/10 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Ready to see what we can do for your business?
          </h2>
          <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
            Get a free audit and a tailored sample mockup before making any financial commitment.
          </p>
          <Link
            to="/audit"
            className="bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            <Sparkles size={15} />
            <span>Request Your Free Audit & Sample</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
