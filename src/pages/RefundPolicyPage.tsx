import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>BACK TO HOME</span>
          </Link>
        </div>

        <header className="pb-10 border-b border-white/10 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
            PAYMENT & DISPUTE TERMS
          </span>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-2">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs font-mono text-white/50">
            Last updated: October 2026 · Compliant with Indian payment gateway guidelines
          </p>
        </header>

        <div className="space-y-8 text-sm text-white/80 leading-relaxed font-normal">
          <section className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10">
            <h2 className="text-lg font-medium text-white mb-4">Core Cancellation Policy Summary</h2>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-white/70 shrink-0 mt-0.5" />
                <p>
                  <strong>Before work starts:</strong> If you cancel prior to sprint kickoff or project discovery commencement, you receive a full refund of your advance deposit, minus payment gateway merchant transaction fees (typically 2–3%).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-white/70 shrink-0 mt-0.5" />
                <p>
                  <strong>After work starts:</strong> Advance payments cover committed engineering, design, and infrastructure reservation time. Once design mockups or code repositories have been initialized, advances are non-refundable. Any remaining balance refund is calculated strictly against deliverables not yet produced.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-white/70 shrink-0 mt-0.5" />
                <p>
                  <strong>Delivered work:</strong> Fees for completed, approved, or deployed milestones and source code deliverables are final and non-refundable.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-white/70 shrink-0 mt-0.5" />
                <p>
                  <strong>Monthly retainers:</strong> Ongoing maintenance and marketing retainer plans can be cancelled at any time with 30 days&apos; written notice. No refunds are issued for the current active billing cycle.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-2">How to Request a Cancellation or Refund</h2>
            <p>
              To request a cancellation, please email{' '}
              <a href="mailto:hello@xenforge.com" className="text-white underline">
                hello@xenforge.com
              </a>{' '}
              stating your project name, invoice number, and reason for cancellation. We acknowledge and evaluate all inquiries within <strong>3 business days</strong>. Approved refunds are credited back to the original method of payment within 5 to 7 business banking days.
            </p>
          </section>

          <section className="pt-6 border-t border-white/10 text-xs font-mono text-white/50">
            <div>Questions or billing inquiries: hello@xenforge.com</div>
            <div>XenForge Digital Agency · Bengaluru, Karnataka, India</div>
          </section>
        </div>
      </div>
    </div>
  );
}
