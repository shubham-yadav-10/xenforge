import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            LEGAL COMPLIANCE
          </span>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-2">
            XenForge Privacy Policy
          </h1>
          <p className="text-xs font-mono text-white/50">
            Last updated: October 2026 · Validated under Digital Personal Data Protection Act, 2023 (India) & GDPR
          </p>
        </header>

        <div className="space-y-10 text-sm text-white/80 leading-relaxed font-normal">
          {/* Section 1 */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">1. Who We Are</h2>
            <p>
              XenForge (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a digital services agency based in Bengaluru, Karnataka, India offering website development, AI automation, digital marketing and video editing. Contact: <a href="mailto:privacy@xenforge.com" className="text-white underline">privacy@xenforge.com</a>.
            </p>
            <p className="mt-2">
              This policy explains how we collect, use and protect personal data when you use www.xenforge.com or our services. We handle personal data in line with applicable laws, including India&apos;s Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 and its rules, and, where relevant, the General Data Protection Regulation (GDPR) for visitors and clients in the EU/UK.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-white/75">
              <li><strong>Information you give us:</strong> Name, business name, email address, phone / WhatsApp number, website links, social media handles, project requirements, messages, and files you provide.</li>
              <li><strong>Business information:</strong> Details regarding your operations, brand assets, customer journeys, and credentials necessary to deliver agreed services.</li>
              <li><strong>Payment information:</strong> Invoices and transaction records. Online card and UPI transactions are handled by PCI-DSS compliant payment gateways; we never store your full payment card details or banking PINs.</li>
              <li><strong>Automatically collected data:</strong> Technical log data such as IP address, browser type, device identifiers, referring URLs, and anonymous page interaction telemetry.</li>
              <li><strong>Publicly available business information:</strong> When performing outreach or preparing a requested business audit, we review public profiles (such as your public Instagram or website) to propose relevant solutions. We stop immediately upon request.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">3. How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-white/75">
              <li>To prepare free audits, custom mockup samples, and project proposals.</li>
              <li>To develop, test, deploy and manage your client deliverables.</li>
              <li>To communicate about project milestones, revisions, invoicing, and support.</li>
              <li>To improve our engineering tools, website performance, and platform security.</li>
              <li>To comply with statutory tax, legal, and regulatory requirements.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">4. Legal Basis (Where Required)</h2>
            <p>
              We process data based on your explicit consent, to perform a contractual agreement, to meet statutory compliance duties, and for our legitimate commercial interests (such as preventing cyber abuse and improving delivery quality).
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">5. Sharing Your Information</h2>
            <p>
              We do not sell, rent or trade your personal data. We share it only with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-white/75">
              <li>Infrastructure and service providers supporting our operations (cloud hosting, database providers, email routers, and payment gateways).</li>
              <li>Professional legal and accounting advisors under standard professional confidentiality duties.</li>
              <li>Statutory government authorities if strictly required by lawful court order.</li>
              <li>Successors in interest in the event of a merger or acquisition (with prior written notice).</li>
            </ul>
            <p className="mt-2 text-xs font-mono text-white/60">
              Where AI tools (such as OpenAI or Google Cloud) are utilized for custom automation, we use enterprise APIs with zero-data-retention options that do not train foundation models on client private data.
            </p>
          </section>

          {/* Section 6 & 7 */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">6. International Transfers & Cookies</h2>
            <p>
              Certain cloud infrastructure providers maintain data centers outside India. Where transfers occur, we work only with vendors adhering to certified data transfer safeguards. For details on tracking technologies, refer to our <Link to="/cookies" className="text-white underline">Cookie Policy</Link>.
            </p>
          </section>

          {/* Section 8 & 9 */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">7. Data Retention & Security</h2>
            <p>
              We retain project records only as long as required to deliver your project, satisfy statutory tax requirements (up to 7 years for commercial invoices), or resolve contractual disputes. Afterwards, data is securely erased or anonymized. Refer to our <Link to="/security" className="text-white underline">Security Page</Link> for our infrastructure protections.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">8. Your Rights</h2>
            <p>
              Subject to applicable legislation, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-white/75">
              <li>Access the personal data we hold about you.</li>
              <li>Correct or update inaccurate information.</li>
              <li>Request erasure of your records.</li>
              <li>Withdraw consent at any time without penalty.</li>
              <li>Opt out of marketing messages.</li>
              <li>Nominate a representative under the DPDP Act 2023.</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, email <a href="mailto:privacy@xenforge.com" className="text-white underline">privacy@xenforge.com</a>. We respond to all verified requests within 30 days.
            </p>
          </section>

          {/* Section 11 - 14 */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">9. Children & Third-Party Links</h2>
            <p>
              Our services are strictly directed to businesses and adults over 18 years of age. We do not knowingly collect personal data from minors. Our website may contain links to external platforms (such as Instagram or LinkedIn); we are not responsible for their independent privacy practices.
            </p>
          </section>

          {/* Section 15 */}
          <section className="pt-6 border-t border-white/10">
            <h2 className="text-lg font-medium text-white mb-3">10. Grievance Officer</h2>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono space-y-1">
              <div className="text-white font-semibold">Shubham Yadav, Grievance Officer</div>
              <div>XenForge Digital Agency</div>
              <div>Email: <a href="mailto:privacy@xenforge.com" className="text-white underline">privacy@xenforge.com</a></div>
              <div>Address: Bengaluru, Karnataka, India</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
