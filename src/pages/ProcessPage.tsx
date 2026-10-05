import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProcessPage() {
  const detailedStages = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Understanding operations & mapping friction points',
      duration: 'Week 1',
      description:
        'We learn how the business works, what is slowing it down and what the project needs to achieve. We interview operators, inspect existing codebase performance, and define concrete operational metrics.',
      deliverables: [
        'Detailed technical & UX audit of current assets',
        'Requirements breakdown with strict priority ranking',
        'Success metrics (conversion targets, load velocity, workflow hours saved)',
        'Proposed architecture and fixed commercial proposal',
      ],
    },
    {
      number: '02',
      title: 'PLAN',
      subtitle: 'Architecture, interface schematics & data modeling',
      duration: 'Week 1 – 2',
      description:
        'We define the structure, scope, priorities and technical direction. Design systems are constructed in Figma, relational schemas are modeled in PostgreSQL, and API endpoints are mapped before code is written.',
      deliverables: [
        'Complete high-fidelity Figma component library and layouts',
        'Relational database schema diagrams & migration plans',
        'API contracts and integration authentication flows',
        'Milestone delivery schedule with weekly target checkpoints',
      ],
    },
    {
      number: '03',
      title: 'BUILD',
      subtitle: 'Iterative design & parallel development sprints',
      duration: 'Week 2 – 5',
      description:
        'Design and development happen together, with regular testing and feedback. We deploy staging URLs every Friday so you can interact with features on real mobile devices and browsers as they are completed.',
      deliverables: [
        'Production-ready TypeScript & Tailwind code on GitHub',
        'Continuous integration tests & edge caching verification',
        'Automated database seed scripts & role-based authentication',
        'Weekly video walkthroughs demonstrating implemented features',
      ],
    },
    {
      number: '04',
      title: 'LAUNCH',
      subtitle: 'Deployment, telemetry verification & ongoing tuning',
      duration: 'Week 5+',
      description:
        'We deploy, measure, fix what needs fixing and keep improving the product. We manage DNS cutover with zero downtime, configure real-time error logging, and remain on-call through the stabilization window.',
      deliverables: [
        'Zero-downtime production deployment to cloud infrastructure',
        'Server-side telemetry and conversion tracking verification',
        'Internal staff documentation & recorded operator guides',
        'Continuous monthly engineering & growth retainer onboarding',
      ],
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-5xl mx-auto">
        <header className="pb-16 border-b border-white/10 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            DELIVERY METHODOLOGY
          </span>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
            HOW WE WORK
          </h1>
          <p className="text-xl sm:text-2xl text-white/60 font-normal max-w-2xl leading-relaxed mb-10">
            A structured, four-phase delivery cycle engineered to eliminate scope drift,
            miscommunication, and late-stage surprises.
          </p>

          <Link
            to="/contact"
            className="bg-white text-black text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            <span>Plan Your Project Scope</span>
            <ArrowRight size={15} />
          </Link>
        </header>

        {/* Detailed Stages List */}
        <div className="space-y-16">
          {detailedStages.map((stage) => (
            <div
              key={stage.number}
              className="liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-white/40">
                    STAGE {stage.number}
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="font-mono text-xs text-white/50">{stage.duration}</span>
                </div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  PHASE SPECIFICATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-medium text-white mb-2">
                {stage.title}
              </h2>
              <p className="text-base text-white/60 font-mono mb-6">{stage.subtitle}</p>

              <p className="text-base text-white/80 leading-relaxed font-normal mb-8 max-w-3xl">
                {stage.description}
              </p>

              <div className="pt-6 border-t border-white/10">
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
                  Concrete Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stage.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-white/85 flex items-start gap-2.5"
                    >
                      <CheckCircle2 size={15} className="text-white/60 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Have questions about how your project fits into this workflow?
          </h2>
          <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
            We review your current timeline, codebase, and team structure on our first call.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-block shadow-lg"
          >
            Start a Direct Project Discussion
          </Link>
        </div>
      </div>
    </div>
  );
}
