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
      accent: '#3B82F6',
    },
    {
      number: '02',
      title: 'STRATEGY & SAMPLE',
      subtitle: 'Free prototype & technical blueprint',
      duration: 'Week 1 – 2',
      description:
        'We build you a tailored free sample mockup before you commit a single rupee. Design systems are constructed, relational schemas are modeled, and conversion pathways are mapped.',
      deliverables: [
        'Interactive high-fidelity component layouts & sample preview',
        'Relational database schema diagrams & migration plans',
        'API contracts and integration authentication flows',
        'Milestone delivery schedule with weekly target checkpoints',
      ],
      accent: '#E07A5F',
    },
    {
      number: '03',
      title: 'BUILD',
      subtitle: 'Iterative design & parallel development sprints',
      duration: 'Week 2 – 5',
      description:
        'Design and development happen together, with regular testing and feedback. We deploy staging URLs so you can interact with features on real mobile devices and browsers as they are completed.',
      deliverables: [
        'Production-ready TypeScript & Tailwind code on GitHub',
        'Continuous integration tests & edge caching verification',
        'Automated database seed scripts & role-based authentication',
        'Weekly video walkthroughs demonstrating implemented features',
      ],
      accent: '#3B82F6',
    },
    {
      number: '04',
      title: 'LAUNCH',
      subtitle: 'Deployment, telemetry verification & zero downtime',
      duration: 'Week 5',
      description:
        'We deploy, measure, fix what needs fixing and ensure optimal search indexing. We manage DNS cutover with zero downtime and remain on-call through the stabilization window.',
      deliverables: [
        'Zero-downtime production deployment to cloud infrastructure',
        'Server-side telemetry and conversion tracking verification',
        'Internal staff documentation & recorded operator guides',
        'Smooth transition to growth monitoring',
      ],
      accent: '#E07A5F',
    },
    {
      number: '05',
      title: 'GROW',
      subtitle: 'Compounding optimization & automated iterations',
      duration: 'Ongoing',
      description:
        'Continuous improvement of your conversion funnels, AI pipelines, and organic search ranking to protect your digital advantage against competitors.',
      deliverables: [
        'Monthly Core Web Vitals and SEO rank tracking',
        'Automated workflow monitoring and exception alerts',
        'Iterative CRO A/B testing on core landing pages',
        'Dedicated engineering support retainer',
      ],
      accent: '#3B82F6',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-[#E8E5DE] min-h-screen text-[#111214]">
      <div className="max-w-5xl mx-auto">
        <header className="pb-16 border-b border-[#111214]/15 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5F6063] block mb-3 font-medium">
            DELIVERY METHODOLOGY
          </span>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#111214] mb-6 leading-tight">
            HOW WE WORK
          </h1>
          <p className="text-xl sm:text-2xl text-[#5F6063] font-normal max-w-2xl leading-relaxed mb-10">
            A structured, five-phase delivery cycle engineered to eliminate scope drift,
            miscommunication, and late-stage surprises.
          </p>

          <Link
            to="/audit"
            className="bg-[#111214] text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-black transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <span>Claim Your Free Sample First</span>
            <ArrowRight size={15} />
          </Link>
        </header>

        {/* Detailed Stages List */}
        <div className="space-y-12">
          {detailedStages.map((stage) => (
            <div
              key={stage.number}
              className="bg-[#FAF8F5] rounded-2xl p-8 sm:p-12 border border-[#111214]/15 shadow-[0_4px_20px_rgba(17,18,20,0.03)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-[#111214]/10 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-medium text-[#111214]">
                    STAGE {stage.number}
                  </span>
                  <span className="text-[#111214]/20">·</span>
                  <span className="font-mono text-xs text-[#5F6063]">{stage.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: stage.accent }} />
                  <span className="text-xs font-mono text-[#5F6063] uppercase tracking-widest">
                    PHASE SPECIFICATION
                  </span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-medium text-[#111214] mb-2 tracking-tight">
                {stage.title}
              </h2>
              <p className="text-base font-mono text-[#5F6063] mb-4">{stage.subtitle}</p>
              <p className="text-base text-[#111214]/85 leading-relaxed font-normal mb-8 max-w-3xl">
                {stage.description}
              </p>

              <div>
                <span className="font-mono text-xs text-[#5F6063] uppercase tracking-wider block mb-3 font-medium">
                  Verified Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stage.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111214]/80"
                    >
                      <CheckCircle2 size={16} className="text-[#111214] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
