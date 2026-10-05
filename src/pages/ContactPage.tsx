import { useState, FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    service: 'Website Development',
    budget: '₹1L–₹3L',
    details: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Website Development',
    'App Development',
    'AI Automation',
    'SEO',
    'Video Editing',
    'Paid Advertising',
    'Something Else',
  ];

  const budgetOptions = [
    'Under ₹50K',
    '₹50K–₹1L',
    '₹1L–₹3L',
    '₹3L–₹5L',
    '₹5L+',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.details.trim()) {
      errs.details = 'Please briefly describe what you need built or solved.';
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

    // Realistic client-side submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="pb-16 border-b border-white/10 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            PROJECT INITIATION
          </span>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
            LET&apos;S TALK ABOUT THE PROJECT.
          </h1>
          <p className="text-xl sm:text-2xl text-white/60 font-normal max-w-2xl leading-relaxed">
            Tell us what you are building, what needs fixing, or where you want to grow.
            We review all inquiries within 24 hours.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="liquid-glass rounded-2xl p-10 border border-white/15 text-center">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-4 font-bold">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium text-white mb-3">
                  Inquiry Received
                </h2>
                <p className="text-sm text-white/70 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our
                  team has received your project brief regarding{' '}
                  <strong className="text-white">{formData.service}</strong>. We will review
                  your requirements and respond at{' '}
                  <strong className="text-white">{formData.email}</strong> within one
                  business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      website: '',
                      service: 'Website Development',
                      budget: '₹1L–₹3L',
                      details: '',
                    });
                  }}
                  className="liquid-glass text-white text-xs font-mono px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10 space-y-8"
              >
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-400/80 focus:border-red-400' : 'border-white/10 focus:border-white/30'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400/80 focus:border-red-400' : 'border-white/10 focus:border-white/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company & Website Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Acme Corp"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2"
                    >
                      Website URL
                    </label>
                    <input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      placeholder="https://company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <span className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-3">
                    Service Required
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {serviceOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, service: opt })}
                        className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                          formData.service === opt
                            ? 'bg-white text-black border-white font-medium'
                            : 'bg-white/5 text-white/70 border-white/5 hover:border-white/15'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <span className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-3">
                    Target Budget Range
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                          formData.budget === b
                            ? 'bg-white text-black border-white font-medium'
                            : 'bg-white/5 text-white/70 border-white/5 hover:border-white/15'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="details"
                    className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    placeholder="Tell us what you are building, the current challenges, target launch timeframe, or key operational requirements..."
                    className={`w-full bg-white/5 border rounded-xl p-4 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                      errors.details ? 'border-red-400/80 focus:border-red-400' : 'border-white/10 focus:border-white/30'
                    }`}
                  />
                  {errors.details && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.details}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-black text-sm font-medium px-8 py-4 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'PROCESSING...' : 'SEND INQUIRY'}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Direct Details Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="liquid-glass rounded-2xl p-8 border border-white/10">
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
                DIRECT CHANNELS
              </span>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-white/40 block mb-1">
                    Direct Email
                  </span>
                  <a
                    href="mailto:hello@forge.agency"
                    className="text-base text-white hover:text-white/80 font-medium inline-flex items-center gap-2"
                  >
                    <Mail size={16} className="text-white/60" />
                    <span>hello@forge.agency</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-white/40 block mb-1">
                    Response Window
                  </span>
                  <p className="text-sm text-white/70">
                    Within 24 business hours from a senior technical director.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-white/40 block mb-1">
                    Meeting Location
                  </span>
                  <div className="text-sm text-white/70 flex items-start gap-2">
                    <MapPin size={16} className="text-white/40 shrink-0 mt-0.5" />
                    <span>Virtual via Google Meet / Zoom worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="liquid-glass rounded-2xl p-8 border border-white/10">
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-3">
                ENGAGEMENT TERMS
              </span>
              <ul className="space-y-2 text-xs text-white/70 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>Fixed-scope, fixed-price contracts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>Full intellectual property handover</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>No long-term platform lock-in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
