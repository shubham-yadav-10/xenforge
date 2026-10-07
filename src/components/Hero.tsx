import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

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

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black select-none flex flex-col justify-between">
      {/* Background looping cinematic video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={BG_VIDEO}
      />

      {/* Subtle vignette/contrast overlay for high readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none" />

      {/* Spacer for navbar */}
      <div className="pt-24 sm:pt-28" />

      {/* Hero content (bottom-left placement) */}
      <div className="relative z-20 px-6 sm:px-12 pb-12 sm:pb-16 max-w-3xl my-auto sm:my-0">
        {/* Subtle kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-xs font-mono text-white/80 mb-5 border border-white/10">
          <Sparkles size={12} className="text-white/80" />
          <span>XenForge Digital Agency</span>
          <span className="text-white/30">·</span>
          <span className="text-white/60">India & Worldwide</span>
        </div>

        {/* Content Pack Headline */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-5">
          We Forge Digital Growth for Ambitious Businesses.
        </h1>

        {/* Content Pack Sub-headline */}
        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
          Websites, AI automation, marketing and video, all under one roof. XenForge helps
          growing brands get online, get noticed and get customers.
        </p>

        {/* Content Pack Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/audit"
            className="bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors cursor-pointer shadow-lg active:scale-[0.98] inline-flex items-center gap-2"
          >
            <span>Get a Free Business Audit</span>
            <ArrowRight size={15} />
          </Link>
          <button
            onClick={handleScrollToServices}
            className="liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            See Our Services
          </button>
        </div>
      </div>

      {/* Trust Strip under hero */}
      <div className="relative z-20 w-full border-t border-white/10 bg-black/40 backdrop-blur-md px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/60">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="text-white/80 font-medium">Core Practices:</span>
            <span>Website Development</span>
            <span className="text-white/20">·</span>
            <span>AI Automation</span>
            <span className="text-white/20">·</span>
            <span>Digital Marketing</span>
            <span className="text-white/20">·</span>
            <span>Video Editing</span>
          </div>

          <button
            onClick={handleScrollToServices}
            className="hidden lg:flex items-center gap-1.5 text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            <span>Explore Details</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Bottom blend into subsequent section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
    </section>
  );
}
