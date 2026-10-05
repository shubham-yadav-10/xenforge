export default function CapabilitiesSection() {
  const capabilityGroups = [
    {
      number: '01',
      title: 'Digital Systems Architecture',
      description:
        'We build software foundations that do not require rewrites twelve months after launch. Clean component trees, type-safe API boundaries, and modular microservices.',
      items: [
        'Single-page & server-rendered applications',
        'Headless e-commerce infrastructure',
        'High-density dashboard canvases',
        'Database modeling & relational schemas',
        'Edge caching & CDN configuration',
      ],
    },
    {
      number: '02',
      title: 'Interface & Interaction Design',
      description:
        'Design guided by real operator utility. We eliminate superfluous clicks, construct strict typographic hierarchies, and engineer subtle kinetic motion that supports orientation.',
      items: [
        'Comprehensive Figma design systems',
        'Micro-interactions & tactile transitions',
        'High-contrast accessible color tokens',
        'Complex information layout & data tables',
        'Mobile web ergonomic adaptations',
      ],
    },
    {
      number: '03',
      title: 'Applied AI & Automation',
      description:
        'Connecting language models and vector search to actual business pipelines. Automating routine extraction, client messaging, and triage tasks with strict verification.',
      items: [
        'Conversational qualification agents',
        'Unstructured document & receipt parsing',
        'Contextual internal knowledge bases',
        'WhatsApp, Slack & CRM connectors',
        'Automated fallback to human operators',
      ],
    },
    {
      number: '04',
      title: 'Search & Acquisition Infrastructure',
      description:
        'Auditing technical search crawls, page load velocities, and paid advertising funnels so qualified decision-makers land on fast, high-converting surfaces.',
      items: [
        'Core Web Vitals sub-second latency tuning',
        'Structured schema.org semantic markup',
        'Dedicated conversion funnel landing pages',
        'Server-side ad conversion tracking (CAPI)',
        'Iterative creative message-match testing',
      ],
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
              05 / CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              WHAT WE BUILD
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-sm">
            Disciplined execution across engineering, interface design, automation and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {capabilityGroups.map((group) => (
            <div
              key={group.number}
              className="liquid-glass rounded-2xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-white/40 block mb-4">
                  {group.number} / DISCIPLINE
                </span>
                <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">
                  {group.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6 font-normal">
                  {group.description}
                </p>

                <div className="pt-6 border-t border-white/10">
                  <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider block mb-3">
                    Deliverables & Practices
                  </span>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-white/80 flex items-start gap-2.5 font-normal"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 shrink-0" />
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
