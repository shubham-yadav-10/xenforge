import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles, ArrowRight, ShieldCheck, Zap, Code, Clock } from 'lucide-react';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4';

interface HeroProps {
  onDiscoverClick?: () => void;
}

export default function Hero({ onDiscoverClick }: HeroProps) {
  const handleScrollToServices = () => {
    if (onDiscoverClick) {
      onDiscoverClick();
      return;
    }
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProblem = () => {
    const el = document.getElementById('introduction');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black select-none flex flex-col justify-between">
      {/* Background radial atmosphere & lighting mesh */}
      <div className="absolute inset-0 bg-radial-gradient from-slate-900/40 via-black to-black pointer-events-none -z-20" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-500/[0.08] rounded-full blur-[120px] pointer-events-none -z-20" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none -z-20" />

      {/* Looping ambient cinematic background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        autoPlay
        muted
        loop
        playsInline
        src={BG_VIDEO}
      />

      {/* Layered cinematic contrast overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40 pointer-events-none" />

      {/* Spacer for navbar */}
      <div className="pt-28 sm:pt-36" />

      {/* Hero content placement */}
      <div className="relative z-20 px-6 sm:px-12 pb-14 sm:pb-20 max-w-4xl mx-auto lg:mx-0 lg:ml-8 xl:ml-16">
        {/* Editorial kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass text-xs font-mono text-white/90 mb-6 border border-white/15 shadow-sm">
          <Sparkles size={13} className="text-amber-300 shrink-0" />
          <span className="font-medium tracking-wide">XenForge Digital Systems</span>
          <span className="text-white/30">·</span>
          <span className="text-white/60">India & Worldwide</span>
        </div>

        {/* Content Pack Headline */}
        <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-medium leading-[1.08] tracking-tight mb-6">
          We Forge Digital Growth for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70">
            Ambitious Businesses.
          </span>
        </h1>

        {/* Content Pack Sub-headline */}
        <p className="text-white/80 text-base sm:text-xl leading-relaxed mb-8 max-w-2xl font-normal">
          Websites, AI automation, marketing and video — all under one roof. XenForge helps
          growing brands get online, get noticed and get customers.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Link
            to="/audit"
            className="bg-white text-black text-sm sm:text-base font-medium px-7 sm:px-8 py-4 rounded-full hover:bg-white/90 transition-all cursor-pointer shadow-xl active:scale-[0.98] inline-flex items-center gap-2 group"
          >
            <span>Get a Free Business Audit</span>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <button
            onClick={handleScrollToServices}
            className="liquid-glass text-white text-sm sm:text-base font-medium px-7 sm:px-8 py-4 rounded-full hover:bg-white/10 transition-colors cursor-pointer border border-white/15 inline-flex items-center gap-2"
          >
            <span>Explore 4 Core Practices</span>
            <ChevronDown size={15} />
          </button>
        </div>

        {/* Micro Guarantees Strip */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-white/60">
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-emerald-400" />
            48-Hour Free Audit Turnaround
          </span>
          <span className="flex items-center gap-1.5">
            <Code size={13} className="text-blue-400" />
            100% Code & Asset Ownership
          </span>
          <span className="flex items-center gap-1.5">
            <Zap size={13} className="text-amber-400" />
            Sub-1.2s Load Speed Standard
          </span>
        </div>
      </div>

      {/* Trust Strip under hero */}
      <div className="relative z-20 w-full border-t border-white/10 bg-black/60 backdrop-blur-md px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/70">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2">
            <span className="text-white font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Four Core Disciplines:
            </span>
            <span className="text-white/80 hover:text-white transition-colors">
              Website Development
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/80 hover:text-white transition-colors">
              AI Automation
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/80 hover:text-white transition-colors">
              Digital Marketing
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/80 hover:text-white transition-colors">
              Video Editing
            </span>
          </div>

          <button
            onClick={handleScrollToProblem}
            className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors cursor-pointer group"
          >
            <span>The Problem We Solve</span>
            <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Subtle bottom gradient mask for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
    </section>
  );
}
