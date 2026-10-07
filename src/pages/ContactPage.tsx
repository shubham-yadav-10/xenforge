import { useState, FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Calendar, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: 'Website',
    link: '',
    message: '',
    privacyAgreed: false,
    honeypot: '', // Hidden spam trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);

  const serviceOptions = [
    'Website',
    'AI Automation',
    'Digital Marketing',
    'Video Editing',
    'Not sure / Multiple',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please tell us what you need or what is currently not working.';
    }
    if (!formData.privacyAgreed) {
      errs.privacy = 'You must agree to the Privacy Policy to proceed.';
    }
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent abort for spam bots

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
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="pb-14 border-b border-white/10 mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            05 / CONTACT US
          </span>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
            Let&apos;s talk about your business.
          </h1>
          <p className="text-xl sm:text-2xl text-white/60 font-normal max-w-2xl leading-relaxed">
            Tell us what you need, or even just what&apos;s not working. We&apos;ll reply within{' '}
            <strong className="text-white font-medium">24 hours</strong> on working days with a
            free audit and next steps.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setShowCallModal(true)}
              className="bg-white text-black text-xs sm:text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Calendar size={15} />
              <span>Book a Free 20-Minute Call</span>
            </button>
            <a
              href="https://wa.me/919876543210?text=Hi%20XenForge%2C%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
            >
              <MessageSquare size={15} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Area */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="liquid-glass rounded-2xl p-10 border border-white/15 text-center">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-5 font-bold">
                  <CheckCircle2 size={28} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium text-white mb-3">
                  Thanks, {formData.name}!
                </h2>
                <p className="text-sm sm:text-base text-white/80 max-w-md mx-auto mb-6 leading-relaxed">
                  We&apos;ve received your message and will reply within <strong>24 hours</strong> on
                  working days.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto mb-6 text-xs font-mono text-white/70">
                  If your request is urgent, message us directly on WhatsApp:{' '}
                  <a
                    href="https://wa.me/919876543210"
                    className="text-white underline font-semibold block mt-1"
                  >
                    +91 98765 43210
                  </a>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      businessName: '',
                      email: '',
                      phone: '',
                      service: 'Website',
                      link: '',
                      message: '',
                      privacyAgreed: false,
                      honeypot: '',
                    });
                  }}
                  className="liquid-glass text-white text-xs font-mono px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="liquid-glass rounded-2xl p-8 sm:p-10 border border-white/10 space-y-6"
              >
                {/* Honeypot field for anti-spam */}
                <input
                  type="text"
                  name="extra_verification_code"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
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
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({ ...formData, businessName: e.target.value })
                      }
                      placeholder="Acme Studio / Brand"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
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
                      placeholder="jane@company.com"
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
                      Phone / WhatsApp
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                      Instagram or Website Link
                    </label>
                    <input
                      type="text"
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      placeholder="@instagram or https://..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                    Message / What&apos;s Not Working *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you need, what is currently slowing your business down, or what you'd like to improve..."
                    className={`w-full bg-white/5 border rounded-xl p-4 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-400' : 'border-white/10 focus:border-white/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacyAgreed}
                      onChange={(e) =>
                        setFormData({ ...formData, privacyAgreed: e.target.checked })
                      }
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-white focus:ring-0 cursor-pointer"
                    />
                    <span className="text-xs text-white/70 leading-relaxed">
                      I agree to the{' '}
                      <Link to="/privacy" className="text-white underline hover:text-white/80">
                        Privacy Policy
                      </Link>
                      * and consent to XenForge reviewing my submission.
                    </span>
                  </label>
                  {errors.privacy && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.privacy}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-black text-sm font-medium px-8 py-4 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'SENDING INQUIRY...' : 'SEND INQUIRY →'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="liquid-glass rounded-2xl p-7 border border-white/10">
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
                DIRECT CONTACT DETAILS
              </span>

              <div className="space-y-5 text-sm">
                <div>
                  <span className="text-xs font-mono text-white/40 block mb-1">Email</span>
                  <a
                    href="mailto:hello@xenforge.com"
                    className="text-white hover:underline font-medium flex items-center gap-2"
                  >
                    <Mail size={14} className="text-white/50" />
                    <span>hello@xenforge.com</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs font-mono text-white/40 block mb-1">Phone / WhatsApp</span>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline font-medium flex items-center gap-2"
                  >
                    <Phone size={14} className="text-white/50" />
                    <span>+91 98765 43210</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs font-mono text-white/40 block mb-1">Working Hours</span>
                  <div className="text-white/80 flex items-center gap-2 text-xs font-mono">
                    <Clock size={13} className="text-white/50" />
                    <span>Mon–Sat, 10:00 AM – 7:00 PM IST</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs font-mono text-white/40 block mb-1">Location</span>
                  <div className="text-white/80 flex items-start gap-2 text-xs">
                    <MapPin size={14} className="text-white/50 shrink-0 mt-0.5" />
                    <span>Bengaluru, India · Serving clients across India & worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-white/10 text-xs font-mono text-white/50 space-y-2">
              <span className="text-white font-medium block">Social Media Channels</span>
              <div className="flex gap-4 pt-1 text-white/70">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Instagram
                </a>
                <span>·</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  LinkedIn
                </a>
                <span>·</span>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book a Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="liquid-glass rounded-2xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
            <h3 className="text-xl font-medium text-white mb-2">Book a Free 20-Minute Call</h3>
            <p className="text-xs text-white/70 mb-6 leading-relaxed">
              We&apos;ll discuss your brand, examine your current bottlenecks, and outline a tailored roadmap.
              Zero sales pressure.
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 mb-6 space-y-2">
              <div>• Platform: Google Meet or Zoom</div>
              <div>• Duration: 20 Minutes</div>
              <div>• With: Shubham & XenForge Core Team</div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@xenforge.com?subject=Schedule%20a%2020-Minute%20Call"
                className="w-full bg-white text-black text-center text-xs font-medium py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Send Direct Meeting Request
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20Shubham%2C%20I'd%20like%20to%20schedule%20a%20call%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full liquid-glass text-white text-center text-xs font-medium py-3 rounded-full hover:bg-white/5 transition-colors"
              >
                Schedule via WhatsApp
              </a>
              <button
                onClick={() => setShowCallModal(false)}
                className="text-xs text-white/50 hover:text-white pt-2 text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
