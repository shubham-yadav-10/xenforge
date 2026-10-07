import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
            CONTRACTUAL TERMS
          </span>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-2">
            XenForge Terms of Service
          </h1>
          <p className="text-xs font-mono text-white/50">
            Last updated: October 2026 · Governing law: Laws of India
          </p>
        </header>

        <div className="space-y-10 text-sm text-white/80 leading-relaxed font-normal">
          <section>
            <h2 className="text-lg font-medium text-white mb-3">1. Acceptance</h2>
            <p>
              By using www.xenforge.com or hiring XenForge (&ldquo;we&rdquo;, &ldquo;us&rdquo;), you (&ldquo;Client&rdquo;, &ldquo;you&rdquo;) agree to these Terms. If you do not agree, please do not use our site or services. Individual projects will also have a written proposal, scope agreement or invoice (&ldquo;Project Agreement&rdquo;), which prevails if there is a conflict.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">2. Our Services</h2>
            <p>
              We provide website development, AI automation, digital marketing, and video editing services. The exact scope, deliverables, timeline, milestones, and price for each project are set out in the Project Agreement or commercial invoice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">3. Free Samples and Proposals</h2>
            <p>
              Free samples, mockups and concepts are provided in good faith to demonstrate how we could help your business. They remain XenForge&apos;s intellectual property and may not be copied, reproduced, published, or developed by you or any third party unless you engage us for the project and pay the agreed fee.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">4. Quotes, Payments and Invoices</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-white/75">
              <li>Prices are in Indian Rupees (INR) unless expressly stated, and exclude statutory GST unless itemized.</li>
              <li>Unless otherwise agreed in writing, we require a <strong>50% advance</strong> before work begins and the remaining balance prior to final deployment, code handover, or go-live.</li>
              <li>Advance payments cover dedicated sprint time and are non-refundable once work has commenced, as described in Section 10 and our Refund Policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">5. Client Responsibilities</h2>
            <p>
              You agree to provide accurate business details, required copy, brand assets, and technical access on time; supply timely feedback and approvals; and warrant that everything you provide (text, photos, logos, media) is owned by you or properly licensed. Delays in client feedback automatically extend delivery schedules.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">6. Revisions and Changes</h2>
            <p>
              Each project includes <strong>two rounds of free revisions</strong> on deliverables. Additional revision rounds or requests that alter the original agreed scope will be quoted separately before work is executed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">7. Intellectual Property</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-white/75">
              <li><strong>Client Ownership:</strong> After full payment is received, you own 100% of the custom deliverables engineered specifically for your business (your final website code, graphic designs, and custom content).</li>
              <li><strong>Pre-Existing Tools:</strong> We retain ownership of our pre-existing code libraries, developer utilities, boilerplate tools, and know-how, granting you a perpetual, royalty-free licence to use them as part of your final deliverables.</li>
              <li><strong>Portfolio Rights:</strong> Unless you instruct us in writing beforehand, we reserve the right to display the completed work, business name, and publicly visible website in our portfolio and marketing materials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">8. Marketing, Ads and AI Results</h2>
            <p>
              We apply professional care and diligence, but cannot guarantee specific third-party rankings, social follower volumes, traffic, or sales, as these depend on consumer market behavior outside our control. AI tools can make mistakes; clients must review AI-generated customer-facing copy prior to official publishing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">9. Cancellation and Refunds</h2>
            <p>
              You may cancel a project with written notice. You will pay for all work completed up to the date of cancellation. If work has not yet commenced, the advance is refundable minus transaction processing fees. After sprint kickoff, advance deposits are non-refundable. Refer to our <Link to="/refunds" className="text-white underline">Refund & Cancellation Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">10. Post-Launch Support & Warranty</h2>
            <p>
              All completed website and automation builds include <strong>30 days of post-launch bug fixing support</strong> for code written by us. Ongoing maintenance, plugin updates, hosting management, and continuous feature additions are available under dedicated monthly retainer plans.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">11. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted under applicable law, XenForge shall not be liable for indirect, incidental, or consequential damages (such as lost profits, interrupted revenue, or lost business records). Our maximum cumulative liability for any dispute shall not exceed the total fees paid by you to XenForge for the specific project in question.
            </p>
          </section>

          <section className="pt-6 border-t border-white/10">
            <h2 className="text-lg font-medium text-white mb-3">12. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the courts of <strong>Bengaluru, Karnataka, India</strong>, or resolved through arbitration under the Arbitration and Conciliation Act, 1996.
            </p>
            <div className="mt-4 text-xs font-mono text-white/50">
              Questions: <a href="mailto:hello@xenforge.com" className="text-white underline">hello@xenforge.com</a> · Bengaluru, India
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
