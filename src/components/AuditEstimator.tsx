import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Clock,
  Zap,
  TrendingUp,
  CheckCircle2,
  Sliders,
  RotateCcw
} from 'lucide-react';

export default function AuditEstimator() {
  const [industry, setIndustry] = useState<string>('Services');
  const [teamSize, setTeamSize] = useState<string>('1-10');
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    'Website Speed & Mobile UX',
    'Automated Lead Intake'
  ]);

  const industries = ['Services & Consulting', 'E-Commerce / D2C', 'Healthcare & Clinics', 'Real Estate', 'B2B SaaS'];

  const needsList = [
    'Website Speed & Mobile UX',
    'Automated Lead Intake',
    'WhatsApp & CRM Auto-Sync',
    'Search & Local SEO',
    'High-Converting Brand Video'
  ];

  const toggleNeed = (need: string) => {
    if (selectedNeeds.includes(need)) {
      if (selectedNeeds.length > 1) {
        setSelectedNeeds(selectedNeeds.filter((n) => n !== need));
      }
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  // Calculate dynamic metrics
  const estimatedHoursSaved = selectedNeeds.length * 4 + (teamSize === '1-10' ? 6 : 14);
  const estimatedSpeedBoost = selectedNeeds.includes('Website Speed & Mobile UX') ? 'Under 1.0s (3.4x faster)' : 'Optimized CDN';

  return (
    <section className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass text-xs font-mono text-white/70 mb-4 border border-white/10">
              <Sliders size={12} className="text-amber-300" />
              <span>04 · INTERACTIVE GROWTH ESTIMATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Calculate your business{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-white/70">
                growth potential.
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/70 max-w-md font-normal leading-relaxed">
            Select your industry and current bottlenecks. See how many operational hours you can
            reclaim and what your custom 48-hour sample will focus on.
          </p>
        </div>

        {/* Interactive Estimator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-white/[0.02] border border-white/10 rounded-3xl p-7 sm:p-10 backdrop-blur-md">
            {/* Step 1: Industry */}
            <div>
              <label className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-3">
                1. SELECT YOUR SECTOR
              </label>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setIndustry(ind)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                      industry === ind
                        ? 'bg-white text-black font-semibold shadow-md'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: What do you need solved? */}
            <div>
              <label className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-3">
                2. PRIMARY GROWTH PRIORITIES
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {needsList.map((need) => {
                  const isChecked = selectedNeeds.includes(need);
                  return (
                    <button
                      key={need}
                      onClick={() => toggleNeed(need)}
                      className={`p-3.5 rounded-xl text-xs text-left font-mono transition-all cursor-pointer flex items-center justify-between border ${
                        isChecked
                          ? 'bg-white/10 border-white/40 text-white font-medium shadow-sm'
                          : 'bg-white/[0.02] border-white/5 text-white/60 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <span>{need}</span>
                      <CheckCircle2
                        size={16}
                        className={isChecked ? 'text-emerald-400' : 'text-white/20'}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Team Scale */}
            <div>
              <label className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-3">
                3. TEAM SCALE
              </label>
              <div className="flex gap-2">
                {['Solo Founder', '1-10 Employees', '10-50 Employees'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setTeamSize(size)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      teamSize === size
                        ? 'bg-white/20 text-white border border-white/30 font-medium'
                        : 'bg-white/5 text-white/50 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Results Column */}
          <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 liquid-glass border border-white/20 relative overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/[0.08] rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono uppercase text-white/50 tracking-wider">
                  PROJECTED IMPACT SUMMARY
                </span>
                <span className="text-xs font-mono text-emerald-400">Live Estimate</span>
              </div>

              {/* Metric 1: Hours Saved */}
              <div className="mb-6 p-5 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-xs font-mono text-white/50 block mb-1">
                  ESTIMATED OPERATIONAL TIME RECLAIMED
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-medium text-white tracking-tight">
                    ~{estimatedHoursSaved}
                  </span>
                  <span className="text-sm font-mono text-emerald-400">hours / week</span>
                </div>
                <p className="text-xs text-white/50 mt-1">
                  Saved across manual WhatsApp typing, lead entry & spreadsheet follow-ups.
                </p>
              </div>

              {/* Metric 2: Speed standard */}
              <div className="mb-6 p-5 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-xs font-mono text-white/50 block mb-1">
                  TARGET PERFORMANCE CEILING
                </span>
                <div className="text-2xl font-medium text-white tracking-tight">
                  {estimatedSpeedBoost}
                </div>
                <p className="text-xs text-white/50 mt-1">
                  Engineered with Next.js/React & edge caching for immediate customer retention.
                </p>
              </div>

              {/* 48-Hour Sample Deliverable Plan */}
              <div className="mb-8">
                <span className="text-xs font-mono text-white/40 block mb-2 uppercase">
                  INCLUDED IN YOUR FREE 48H SAMPLE:
                </span>
                <div className="space-y-1.5 text-xs text-white/75">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Bespoke homepage mockup or automation pipeline draft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Complete bottleneck breakdown of your current web presence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Fixed-price quote with zero surprise line items</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Claim Action */}
            <div className="pt-6 border-t border-white/10">
              <Link
                to="/audit"
                className="w-full bg-white text-black font-medium text-sm py-4 rounded-full hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] cursor-pointer"
              >
                <span>Claim This 48-Hour Sample Free</span>
                <ArrowRight size={15} />
              </Link>
              <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mt-3">
                <span>No credit card required</span>
                <span>Zero sales pressure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
