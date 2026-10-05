import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      tagline: 'Understanding operations & bottlenecks',
      description:
        'We learn how the business works, what is slowing it down and what the project needs to achieve.',
      details: [
        'Stakeholder and operator interviews',
        'Audit of existing technical stack & analytics',
        'Clear problem definition without assumptions',
        'Commercial and operational criteria for success',
      ],
    },
    {
      number: '02',
      title: 'PLAN',
      tagline: 'Scope, architecture & priorities',
      description:
        'We define the structure, scope, priorities and technical direction.',
      details: [
        'System architecture & database schema modeling',
        'Figma wireframes & user journey schematics',
        'Fixed scope milestones and delivery schedule',
        'Technology selection suited to the operational load',
      ],
    },
    {
      number: '03',
      title: 'BUILD',
      tagline: 'Parallel design and development',
      description:
        'Design and development happen together, with regular testing and feedback.',
      details: [
        'Weekly preview builds for continuous review',
        'Type-safe components and responsive layouts',
        'Integration of APIs, AI models, and databases',
        'Cross-browser testing across target device resolutions',
      ],
    },
    {
      number: '04',
      title: 'LAUNCH',
      tagline: 'Deployment, verification & continuous tuning',
      description:
        'We deploy, measure, fix what needs fixing and keep improving the product.',
      details: [
        'Production release with zero-downtime deployment',
        'Core Web Vitals monitoring & telemetry validation',
        'Team walkthrough and operations handoff documentation',
        'Continuous retainer support and ongoing iteration',
      ],
    },
  ];

  return (
    <section
      id="process"
      className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
              06 / PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              HOW WE WORK
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-sm">
            Four sequential stages from initial problem definition to post-launch optimization.
          </p>
        </div>

        {/* Desktop View: Horizontal Timeline Interaction */}
        <div className="hidden lg:block">
          {/* Progress bar connecting timeline */}
          <div className="relative mb-12">
            <div className="h-px w-full bg-white/10 absolute top-5 left-0" />
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className="text-left group cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs transition-all duration-300 ${
                          isActive
                            ? 'bg-white text-black font-semibold ring-4 ring-white/20'
                            : 'bg-black border border-white/20 text-white/50 group-hover:border-white/40 group-hover:text-white'
                        }`}
                      >
                        {step.number}
                      </div>
                      <span
                        className={`font-mono text-xs uppercase tracking-wider transition-colors ${
                          isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                        }`}
                      >
                        STAGE {step.number}
                      </span>
                    </div>

                    <h3
                      className={`text-xl font-medium tracking-tight transition-colors ${
                        isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Highlight Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="liquid-glass rounded-2xl p-10 border border-white/10"
          >
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-5">
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
                  STAGE {steps[activeStep].number} — OVERVIEW
                </span>
                <h4 className="text-3xl font-medium text-white mb-2">
                  {steps[activeStep].title}
                </h4>
                <p className="text-sm font-mono text-white/50 mb-6">
                  {steps[activeStep].tagline}
                </p>
                <p className="text-base text-white/80 leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>

              <div className="col-span-7 pl-6 border-l border-white/10">
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
                  OPERATIONAL DELIVERABLES
                </span>
                <div className="grid grid-cols-2 gap-4">
                  {steps[activeStep].details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-white/80 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="font-mono text-[10px] text-white/40 mt-0.5">
                        0{dIdx + 1}
                      </span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile View: Vertical Timeline */}
        <div className="lg:hidden flex flex-col space-y-8 relative pl-6 border-l border-white/15">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-black" />

              <span className="font-mono text-xs text-white/40 uppercase tracking-wider block mb-1">
                STAGE {step.number}
              </span>
              <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                {step.description}
              </p>

              <div className="p-4 rounded-xl liquid-glass border border-white/10">
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                  Key Practices
                </span>
                <ul className="space-y-1.5">
                  {step.details.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-white/75 flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/40 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
