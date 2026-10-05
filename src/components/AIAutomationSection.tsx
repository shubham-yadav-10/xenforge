import { useState } from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export default function AIAutomationSection() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<number>(0);

  const workflows = [
    {
      id: 0,
      title: 'Inbound Lead Pipeline',
      description:
        'Eliminating inquiry delays by validating buyer intent and synchronizing confirmed appointments into sales pipelines.',
      steps: [
        { label: 'LEAD', role: 'Inbound inquiry from portal or web form', timing: 'Instant' },
        { label: 'AI QUALIFICATION', role: 'Validates budget, timeline & requirements', timing: 'Under 10s' },
        { label: 'CRM', role: 'Creates enriched lead record with transcript', timing: 'Automated' },
        { label: 'SALES TEAM', role: 'Rep receives verified high-intent notification', timing: 'Immediate' },
      ],
    },
    {
      id: 1,
      title: 'Customer Support & Triage',
      description:
        'Resolving routine requests automatically while escalating sensitive edge cases to human specialists with context.',
      steps: [
        { label: 'CUSTOMER MESSAGE', role: 'Inbound chat across web or WhatsApp', timing: 'Instant' },
        { label: 'AI RESPONSE', role: 'Grounded retrieval against policy documents', timing: 'Under 2s' },
        { label: 'HUMAN HANDOFF', role: 'Context-rich alert sent when escalation needed', timing: 'Triggered' },
        { label: 'CRM UPDATE', role: 'Resolution status logged to customer history', timing: 'Automated' },
      ],
    },
    {
      id: 2,
      title: 'Document & Receipt Processing',
      description:
        'Extracting structured key-value entities from invoices, contracts, and receipts directly into production databases.',
      steps: [
        { label: 'DOCUMENT', role: 'PDF, scanned receipt or contract uploaded', timing: 'Ingest' },
        { label: 'AI EXTRACTION', role: 'Multi-modal OCR with schema validation', timing: 'Sub-second' },
        { label: 'DATABASE', role: 'Normalized records inserted into PostgreSQL', timing: 'Type-safe' },
        { label: 'AUTOMATION', role: 'Dispatches downstream payment or webhook', timing: 'Triggered' },
      ],
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
              07 / AI AUTOMATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              AI THAT HAS A JOB TO DO.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-sm">
            We build AI systems around specific business tasks instead of adding AI for the
            sake of it.
          </p>
        </div>

        {/* Workflow Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {workflows.map((wf, idx) => (
            <button
              key={wf.id}
              onClick={() => setSelectedWorkflow(idx)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                selectedWorkflow === idx
                  ? 'bg-white text-black font-semibold'
                  : 'liquid-glass text-white/70 hover:text-white'
              }`}
            >
              FLOW 0{idx + 1} — {wf.title}
            </button>
          ))}
        </div>

        {/* Current Active Workflow Visual Canvas */}
        <div className="liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10">
          <div className="mb-10 max-w-2xl">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
              PRODUCTION ARCHITECTURE FLOW
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-white mb-2">
              {workflows[selectedWorkflow].title}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed font-normal">
              {workflows[selectedWorkflow].description}
            </p>
          </div>

          {/* Step Sequence Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {workflows[selectedWorkflow].steps.map((step, sIdx, arr) => (
              <div key={sIdx} className="flex flex-col items-center md:items-stretch">
                <div className="w-full rounded-xl bg-white/5 border border-white/10 p-5 flex flex-col justify-between min-h-[140px]">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-3">
                      <span>STEP 0{sIdx + 1}</span>
                      <span className="text-white/60">{step.timing}</span>
                    </div>
                    <div className="font-mono text-sm sm:text-base font-semibold text-white tracking-wide">
                      {step.label}
                    </div>
                  </div>
                  <p className="text-xs text-white/50 mt-3 leading-relaxed">
                    {step.role}
                  </p>
                </div>

                {/* Arrow indicator between steps */}
                {sIdx < arr.length - 1 && (
                  <div className="my-2 md:my-0 md:absolute md:top-1/2 md:-translate-y-1/2 flex items-center justify-center text-white/30"
                       style={{ left: `${(sIdx + 1) * 25 - 1.5}%` }}>
                    <div className="hidden md:block w-3 h-px bg-white/30" />
                    <ArrowDown size={14} className="md:-rotate-90 text-white/40" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-white/50">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-white/60" />
              <span>Strict human-in-the-loop oversight on anomalies</span>
            </div>
            <span>ZERO HALLUCINATED RESPONSES / GROUNDED RETRIEVAL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
