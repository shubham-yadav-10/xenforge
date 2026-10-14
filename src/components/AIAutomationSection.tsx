import { useState } from 'react';
import {
  Bot,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Database,
  Calendar,
  Send,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIAutomationSection() {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState<number>(0);
  const [simulating, setSimulating] = useState<boolean>(false);
  const [simulatedStep, setSimulatedStep] = useState<number>(-1);

  const workflows = [
    {
      id: 0,
      badge: 'SALES & INQUIRY PIPELINE',
      title: '24/7 Lead Capture, Qualification & WhatsApp Booking',
      impact: '18 hrs saved/week · < 5s response',
      description:
        'Instead of losing inquiries while you sleep, an intelligent AI engine qualifies buyer budget, requirements, and books them directly onto your calendar with zero manual data entry.',
      steps: [
        {
          num: '01',
          name: 'Inbound Inquiry',
          desc: 'Visitor submits form or sends WhatsApp message',
          icon: <MessageSquare size={16} className="text-blue-400" />,
          status: 'Trigger: Web / WhatsApp'
        },
        {
          num: '02',
          name: 'AI Intent Parsing',
          desc: 'Understands budget, service need & timeline in < 3s',
          icon: <Bot size={16} className="text-emerald-400" />,
          status: 'Grounded: Instant'
        },
        {
          num: '03',
          name: 'CRM & Sheet Sync',
          desc: 'Enriched customer profile logged automatically',
          icon: <Database size={16} className="text-amber-400" />,
          status: 'Synced: Notion / HubSpot'
        },
        {
          num: '04',
          name: 'Direct Booking',
          desc: 'Sends instant WhatsApp confirmation link with pre-filled context',
          icon: <Calendar size={16} className="text-purple-400" />,
          status: 'Action: Confirmed'
        }
      ]
    },
    {
      id: 1,
      badge: 'CLIENT OPERATIONS',
      title: 'Automated Invoice & Document Extraction',
      impact: '24 hrs saved/month · 99.8% precision',
      description:
        'Extract structured key-value line items from vendor invoices, estimates, and receipts directly into your production database or accounting software without human data entry.',
      steps: [
        {
          num: '01',
          name: 'File Uploaded',
          desc: 'Client uploads PDF invoice, image, or contract',
          icon: <Send size={16} className="text-blue-400" />,
          status: 'Ingest: Cloud Storage'
        },
        {
          num: '02',
          name: 'OCR & Vision Parse',
          desc: 'Multi-modal model extracts line items & tax sums',
          icon: <Bot size={16} className="text-emerald-400" />,
          status: 'Latency: 1.2s'
        },
        {
          num: '03',
          name: 'Schema Verification',
          desc: 'Type-safe validation checks totals against rules',
          icon: <Zap size={16} className="text-amber-400" />,
          status: 'Verified: Type-safe'
        },
        {
          num: '04',
          name: 'Ledger Insertion',
          desc: 'Structured ledger entry written with audit trail',
          icon: <Database size={16} className="text-purple-400" />,
          status: 'Written: SQL / Sheets'
        }
      ]
    },
    {
      id: 2,
      badge: 'CUSTOMER EXPERIENCE',
      title: 'Intelligent Support Triage & Human Escalation',
      impact: '72% repetitive queries answered · Zero delay',
      description:
        'Answers common client questions accurately using your company policies, then hands off warm, context-rich summaries to your team when human judgment is needed.',
      steps: [
        {
          num: '01',
          name: 'Customer Question',
          desc: 'User asks pricing, delivery, or support query',
          icon: <MessageSquare size={16} className="text-blue-400" />,
          status: 'Trigger: Live Chat'
        },
        {
          num: '02',
          name: 'Contextual Search',
          desc: 'Retrieves verified answer from knowledge base',
          icon: <Bot size={16} className="text-emerald-400" />,
          status: 'RAG Retrieval'
        },
        {
          num: '03',
          name: 'Instant Answer',
          desc: 'Provides friendly, accurate resolution in seconds',
          icon: <Sparkles size={16} className="text-amber-400" />,
          status: 'Resolved: 80%'
        },
        {
          num: '04',
          name: 'Smart Handoff',
          desc: 'If complex, notifies founder/agent with full transcript',
          icon: <Calendar size={16} className="text-purple-400" />,
          status: 'Escalated: Alert'
        }
      ]
    }
  ];

  const currentWorkflow = workflows[activeWorkflowIndex];

  const runSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setSimulatedStep(0);

    const stepInterval = setInterval(() => {
      setSimulatedStep((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          setTimeout(() => {
            setSimulating(false);
            setSimulatedStep(-1);
          }, 1500);
          return 3;
        }
        return prev + 1;
      });
    }, 800);
  };

  return (
    <section
      id="automation"
      className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass text-xs font-mono text-white/70 mb-4 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>03 · APPLIED AI AUTOMATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              AI that actually has a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-white/70">
                job to do.
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/70 max-w-md font-normal leading-relaxed">
            We don&apos;t build AI for the sake of buzzwords. We build battle-tested automated pipelines
            that eliminate manual repetitive work, capture lost leads, and save dozens of hours every week.
          </p>
        </div>

        {/* Workflow Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 p-1.5 rounded-xl bg-white/[0.03] border border-white/10 max-w-fit">
          {workflows.map((wf, idx) => (
            <button
              key={wf.id}
              onClick={() => {
                setActiveWorkflowIndex(idx);
                setSimulatedStep(-1);
                setSimulating(false);
              }}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeWorkflowIndex === idx
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {wf.badge}
            </button>
          ))}
        </div>

        {/* Interactive Pipeline Canvas */}
        <div className="rounded-3xl p-8 sm:p-12 liquid-glass border border-white/15 relative overflow-hidden">
          {/* Header of Canvas */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-emerald-400 block mb-1">
                {currentWorkflow.impact}
              </span>
              <h3 className="text-xl sm:text-3xl font-medium text-white tracking-tight">
                {currentWorkflow.title}
              </h3>
              <p className="text-sm text-white/70 mt-2 max-w-2xl font-normal leading-relaxed">
                {currentWorkflow.description}
              </p>
            </div>

            <button
              onClick={runSimulation}
              disabled={simulating}
              className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-mono inline-flex items-center gap-2 transition-all cursor-pointer ${
                simulating
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-white text-black hover:bg-white/90 active:scale-95 shadow-md'
              }`}
            >
              <Play size={13} className={simulating ? 'animate-spin' : ''} />
              <span>{simulating ? 'Simulating Pipeline...' : 'Test Run Pipeline'}</span>
            </button>
          </div>

          {/* Step Sequence Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {currentWorkflow.steps.map((step, idx) => {
              const isCurrentStep = simulating && simulatedStep === idx;
              const isPastStep = simulating && simulatedStep > idx;

              return (
                <div
                  key={step.num}
                  className={`rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between ${
                    isCurrentStep
                      ? 'bg-emerald-500/15 border-2 border-emerald-400 shadow-2xl scale-[1.02]'
                      : isPastStep
                      ? 'bg-white/[0.05] border border-emerald-500/30'
                      : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <span className="text-xs font-mono text-white/40">STEP {step.num}</span>
                    </div>

                    <h4 className="text-base font-medium text-white mb-2 tracking-tight">
                      {step.name}
                    </h4>

                    <p className="text-xs text-white/60 leading-relaxed font-normal mb-4">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className={isCurrentStep || isPastStep ? 'text-emerald-400 font-semibold' : 'text-white/40'}>
                      {isCurrentStep ? 'Processing...' : isPastStep ? '✓ Completed' : step.status}
                    </span>
                    {idx < 3 && (
                      <span className="hidden lg:inline text-white/20">→</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Bar: Action */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-white/50 flex items-center gap-2">
              <Sparkles size={13} className="text-emerald-400" />
              <span>We build custom automations tailored to your exact tech stack & spreadsheets</span>
            </div>

            <Link
              to="/audit"
              className="text-xs font-mono text-white hover:text-emerald-300 underline underline-offset-4 flex items-center gap-1 transition-colors"
            >
              <span>Request custom automation sample for your business</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
