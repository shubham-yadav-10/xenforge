import { useState, FormEvent } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Clock, MessageSquare } from 'lucide-react';

export default function FreeAuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    link: '',
    email: '',
    phone: '',
    serviceInterest: 'Website Development',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business or brand name.';
    if (!formData.link.trim()) errs.link = 'Please provide your Instagram handle or website link.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 850);
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center pb-12 border-b border-white/10 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-xs font-mono text-white/80 mb-5 border border-white/10">
            <Sparkles size={12} className="text-white/80" />
            <span>FREE VALUE AUDIT · NO COMMITMENT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
            Get a free audit of your online presence.
          </h1>

          <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-normal">
            Share your Instagram or website and we&apos;ll send you a short report showing
            what&apos;s working, what&apos;s costing you customers, and what to fix first.
            It&apos;s completely free, with no obligation.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Form Area */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="liquid-glass rounded-2xl p-10 border border-white/15 text-center">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={28} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium text-white mb-3">
                  Audit Request Confirmed!
                </h2>
                <p className="text-sm text-white/80 max-w-md mx-auto mb-6 leading-relaxed">
                  Thanks, <strong className="text-white">{formData.name}</strong>! We are now analyzing{' '}
                  <strong className="text-white">{formData.businessName}</strong> ({formData.link}).
                  We will deliver your free audit report and mock sample to{' '}
                  <strong className="text-white">{formData.email}</strong> within <strong>48 hours</strong>.
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto mb-8 text-xs font-mono text-white/60 text-left">
                  <div className="text-white mb-1">What to expect next:</div>
                  <div>1. Review of your current mobile speed & user flow</div>
                  <div>2. Competitor presence & local search gaps</div>
                  <div>3. Tailored mockup preview of your solution</div>
                </div>

                <a
                  href={`https://wa.me/919876543210?text=Hi%20XenForge%2C%20I%20just%20submitted%20an%20audit%20request%20for%20${encodeURIComponent(
                    formData.businessName
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black text-xs font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                >
                  <MessageSquare size={14} />
                  <span>Connect with us on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="liquid-glass rounded-2xl p-8 sm:p-10 border border-white/10 space-y-6"
              >
                <div>
                  <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-400' : 'border-white/10 focus:border-white/30'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                    Business / Brand Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    placeholder="e.g. Amber Hearth Café"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                      errors.businessName ? 'border-red-400' : 'border-white/10 focus:border-white/30'
                    }`}
                  />
                  {errors.businessName && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.businessName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                    Instagram Handle or Website Link *
                  </label>
                  <input
                    type="text"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    placeholder="@yourbusiness or https://yourbrand.com"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                      errors.link ? 'border-red-400' : 'border-white/10 focus:border-white/30'
                    }`}
                  />
                  {errors.link && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.link}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400' : 'border-white/10 focus:border-white/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                    Primary Service of Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceInterest: e.target.value })
                    }
                    className="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="AI Automation">AI Automation (Chatbots & Workflows)</option>
                    <option value="Digital Marketing">Digital Marketing & SEO</option>
                    <option value="Video Editing">Video Editing (Reels & Ads)</option>
                    <option value="Complete Overhaul">Everything / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                    What challenges are currently costing you customers? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. People ask for menu or pricing in DMs, our current site is slow on phones..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black text-sm font-medium py-4 rounded-full hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'ANALYZING & SENDING...' : 'SEND MY FREE AUDIT & SAMPLE →'}</span>
                  </button>
                  <p className="text-center text-[11px] font-mono text-white/40 mt-3">
                    100% Free · No credit card required · Delivered within 48 hours
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Sidebar: Guarantees */}
          <div className="lg:col-span-4 space-y-6">
            <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10">
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
                THE XENFORGE GUARANTEE
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-white/60 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-white">48-Hour Delivery</h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      You receive a short, actionable report with prioritized fixes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles size={16} className="text-white/60 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-white">Custom Free Sample</h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      A visual mockup or workflow test showing what we would build for you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck size={16} className="text-white/60 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-white">Zero Pressure</h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      No pushy sales calls. If you don&apos;t want to partner, the audit is yours to keep.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-white/10 text-xs font-mono text-white/50 space-y-2">
              <div className="text-white font-medium">Prefer a direct conversation?</div>
              <p>Book a 20-minute video discussion with Shubham and the XenForge team.</p>
              <div className="pt-2">
                <a
                  href="mailto:hello@xenforge.com?subject=Inquiry%20from%20Website"
                  className="text-white hover:underline block"
                >
                  Email: hello@xenforge.com
                </a>
                <span className="block mt-1">WhatsApp: +91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
