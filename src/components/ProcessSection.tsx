import { Search, LayoutTemplate, Coffee } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'We study your business.',
      icon: Search,
      description:
        'We research your market, your competitors and the gaps costing you customers. We inspect your existing digital presence, conversion bottlenecks, and technical opportunities.',
      highlight: 'Deep market & gap analysis',
    },
    {
      number: '02',
      title: 'We map your tailored solution.',
      icon: LayoutTemplate,
      description:
        'A concrete strategic preview of the website, mobile app, automation system or creative campaign engineered for your brand. Before you commit any investment, you see a clear solution roadmap.',
      highlight: 'Delivered in 48 hours',
    },
    {
      number: '03',
      title: 'We talk, and you decide.',
      icon: Coffee,
      description:
        'A short, focused meeting to walk you through the insights and live prototype. No pressure, no pushy sales tactics. If you love the direction, we partner. If not, the roadmap is yours.',
      highlight: 'Zero sales pressure',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
              05 / HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              HOW IT WORKS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-sm">
            Three simple, risk-free steps from initial discovery to a working digital solution.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="liquid-glass rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
                      STEP {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed font-normal mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/50">
                  <span>Commitment:</span>
                  <span className="text-white/80">{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
