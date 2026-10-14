import { Cpu, Layout, Bot, Search, CheckCircle2 } from 'lucide-react';

export default function CapabilitiesSection() {
  const capabilityGroups = [
    {
      number: '01',
      icon: <Cpu size={20} className="text-blue-400" />,
      title: 'Digital Systems Architecture',
      description:
        'We build software foundations that do not require rewrites twelve months after launch. Clean component trees, type-safe API boundaries, and modular microservices.',
      items: [
        'Single-page & server-rendered applications (Next.js, React)',
        'Headless e-commerce infrastructure with edge caching',
        'High-density dashboard canvases & CRM portals',
        'Database modeling & relational schemas (PostgreSQL, Supabase)',
        'Global edge routing, SSL & zero-downtime CI/CD deployment',
      ],
    },
    {
      number: '02',
      icon: <Layout size={20} className="text-purple-400" />,
      title: 'Interface & Interaction Design',
      description:
        'Design guided by real operator utility. We eliminate superfluous clicks, construct strict typographic hierarchies, and engineer subtle kinetic motion that commands authority.',
      items: [
        'Comprehensive production Figma design tokens',
        'Micro-interactions & tactile state transitions',
        'High-contrast accessible color tokens (WCAG AA)',
        'Complex information layout & interactive data grids',
        'Mobile web ergonomic adaptations for sub-second touch',
      ],
    },
    {
      number: '03',
      icon: <Bot size={20} className="text-emerald-400" />,
      title: 'Applied AI & Autonomous Pipelines',
      description:
        'Connecting language models and vector search to actual business pipelines. Automating routine extraction, client messaging, and triage tasks with strict verification.',
      items: [
        'Conversational 24/7 lead qualification agents',
        'Unstructured document & receipt parsing into databases',
        'Contextual internal knowledge bases (RAG)',
        'WhatsApp, Slack, HubSpot & Notion webhook connectors',
        'Reliable human-in-the-loop escalation safeguards',
      ],
    },
    {
      number: '04',
      icon: <Search size={20} className="text-amber-400" />,
      title: 'Search & Acquisition Infrastructure',
      description:
        'Auditing technical search crawls, page load velocities, and paid advertising funnels so qualified decision-makers land on fast, high-converting surfaces.',
      items: [
        'Core Web Vitals sub-second latency tuning (< 1.2s)',
        'Structured Schema.org semantic markup & local SEO',
        'High-converting dedicated campaign landing pages',
        'Server-side ad conversion tracking (CAPI) & analytics',
        'Iterative message-match testing for measurable ROI',
      ],
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass text-xs font-mono text-white/70 mb-4 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>08 · TECHNICAL DEPTH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Full-spectrum execution.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-white/70">
                Production-grade code.
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/70 max-w-md font-normal leading-relaxed">
            Disciplined execution across systems engineering, interface design, applied AI automations, and growth infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {capabilityGroups.map((group) => (
            <div
              key={group.number}
              className="liquid-glass rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {group.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-white/40 block">
                        DISCIPLINE {group.number}
                      </span>
                      <span className="text-xs font-mono text-emerald-400">
                        Production Ready
                      </span>
                    </div>
                  </div>

                  <span className="text-2xl font-mono text-white/30 font-medium">
                    0{group.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium text-white mb-3 tracking-tight">
                  {group.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed mb-6 font-normal">
                  {group.description}
                </p>

                <div className="pt-6 border-t border-white/10">
                  <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider block mb-3">
                    DELIVERABLES & ARCHITECTURE:
                  </span>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-white/80 flex items-start gap-2.5 font-normal"
                      >
                        <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
