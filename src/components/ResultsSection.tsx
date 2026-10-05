export default function ResultsSection() {
  const statements = [
    {
      number: '01',
      headline: 'FAST LOAD TIMES',
      subline: 'Responsive, performance-focused builds.',
      detail:
        'We benchmark every deployment across mobile 4G latency thresholds, static edge assets, and optimal bundle chunking.',
    },
    {
      number: '02',
      headline: 'CLEARER USER FLOWS',
      subline: 'Interfaces designed around what people need to do.',
      detail:
        'Eliminating ambiguity from critical conversion paths, complex data tables, and onboarding checklists.',
    },
    {
      number: '03',
      headline: 'CONNECTED SYSTEMS',
      subline: 'Websites, APIs, automation and business tools working together.',
      detail:
        'Ensuring your frontend storefront, backend databases, CRM registries, and communication tools share a single source of truth.',
    },
    {
      number: '04',
      headline: 'MEASURABLE CAMPAIGNS',
      subline: 'Tracking built into growth work.',
      detail:
        'Configuring precise server-side analytics, custom conversion events, and transparent attribution models from day one.',
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
              08 / RESULTS & STANDARDS
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              WHAT WE GUARANTEE IN THE CODE
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-sm">
            Disciplined standards verified on every production deployment.
          </p>
        </div>

        {/* Large Typography-Driven Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {statements.map((st) => (
            <div
              key={st.number}
              className="border-t border-white/15 pt-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-white/40 block mb-4">
                  STANDARD {st.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-2">
                  {st.headline}
                </h3>
                <p className="text-base text-white/80 font-normal mb-4">
                  {st.subline}
                </p>
                <p className="text-sm text-white/50 leading-relaxed max-w-md font-normal">
                  {st.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
