import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CookiePolicyPage() {
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
            XenForge Cookie Policy
          </h1>
          <p className="text-xs font-mono text-white/50">
            Last updated: October 2026 · Transparent cookie management
          </p>
        </header>

        <div className="space-y-8 text-sm text-white/80 leading-relaxed font-normal">
          <section>
            <h2 className="text-lg font-medium text-white mb-2">What Are Cookies?</h2>
            <p>
              Cookies are small text files stored locally on your device (computer, tablet, or smartphone) when you visit websites. They help websites remember preferences, authenticate sessions, and collect anonymous aggregate usage metrics.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-2">Types of Cookies We Use</h2>
            <div className="space-y-4 mt-3">
              <div className="liquid-glass rounded-xl p-5 border border-white/10">
                <h3 className="text-white font-medium mb-1">1. Essential Cookies</h3>
                <p className="text-xs text-white/70">
                  Strictly necessary for our website to operate securely. They maintain your security token, allow form submission handling, and remember cookie preference choices. These cannot be disabled.
                </p>
              </div>

              <div className="liquid-glass rounded-xl p-5 border border-white/10">
                <h3 className="text-white font-medium mb-1">2. Performance & Analytics Cookies</h3>
                <p className="text-xs text-white/70">
                  Help us understand how visitors discover and navigate our website (such as page view counts, bounce rates, and device resolution stats) without storing directly identifying personal records.
                </p>
              </div>

              <div className="liquid-glass rounded-xl p-5 border border-white/10">
                <h3 className="text-white font-medium mb-1">3. Marketing & Ad Attribution Cookies</h3>
                <p className="text-xs text-white/70">
                  Used to measure the efficacy of our advertising campaigns and prevent repeating promotional messages to the same user.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-2">Your Choices and Browser Controls</h2>
            <p>
              You have full control over cookie permissions. You can accept or decline optional cookies at any time using our on-site cookie banner or through your browser settings. You can delete stored cookies or set your browser to alert you when cookies are being sent. Note that blocking essential cookies may affect form submission functionality.
            </p>
          </section>

          <section className="pt-6 border-t border-white/10">
            <h2 className="text-lg font-medium text-white mb-2">Contact Us</h2>
            <p className="text-xs text-white/60 font-mono">
              If you have any questions regarding our cookie practices, email{' '}
              <a href="mailto:privacy@xenforge.com" className="text-white underline">
                privacy@xenforge.com
              </a>{' '}
              or visit XenForge, Bengaluru, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
