import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4';

interface HeroProps {
  onDiscoverClick?: () => void;
}

export default function Hero({ onDiscoverClick }: HeroProps) {
  const handleDiscover = () => {
    if (onDiscoverClick) {
      onDiscoverClick();
      return;
    }
    const introEl = document.getElementById('introduction');
    if (introEl) {
      introEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black select-none">
      {/* Background looping video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={BG_VIDEO}
      />

      {/* Subtle vignette/contrast overlay for text clarity */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40 pointer-events-none" />

      {/* Hero content (bottom-left) */}
      <div className="absolute bottom-0 left-0 z-20 px-6 sm:px-12 pb-10 sm:pb-16 max-w-2xl">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-4">
          Live Better, Feel Whole Every Day
        </h1>
        <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-md">
          Take charge of how you feel with a companion built for your journey—build
          routines, follow your growth, and unlock tailored insights for a steadier,
          more vibrant life each day.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/90 transition-colors cursor-pointer shadow-lg active:scale-[0.98] inline-block"
          >
            Start Today
          </Link>
          <button
            onClick={handleDiscover}
            className="liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            Discover How
          </button>
        </div>
      </div>

      {/* Subtle scroll transition indicator at bottom right */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 hidden sm:flex items-center gap-2">
        <button
          onClick={handleDiscover}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors cursor-pointer font-mono group"
        >
          <span>Scroll to explore</span>
          <ChevronDown
            size={14}
            className="transition-transform group-hover:translate-y-0.5"
          />
        </button>
      </div>

      {/* Cinematic bottom blend into subsequent section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-10" />
    </section>
  );
}
