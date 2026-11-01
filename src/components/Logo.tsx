import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export default function Logo({ className = '', size = 'md', showTagline = false }: LogoProps) {
  const iconSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-8 h-8',
  };

  const textClasses = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
  };

  return (
    <Link
      to="/"
      aria-label="XenForge Homepage"
      className={`group inline-flex items-center gap-2.5 focus:outline-none select-none transition-transform active:scale-[0.98] ${className}`}
    >
      {/* Precision Geometric Forged Emblem */}
      <div
        className={`${iconSizeClasses[size]} relative flex items-center justify-center shrink-0 rounded-lg bg-gradient-to-br from-white/15 to-white/5 p-1 border border-white/20 group-hover:border-white/40 transition-colors shadow-sm`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full text-white group-hover:rotate-12 transition-transform duration-300"
        >
          {/* Modern Infinity / Forged Tech Knot */}
          <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.267-8-12.356-8-5.096 0-5.096 8 0 8 5.09 0 7.261-8 12.356-8Z" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-semibold tracking-tight text-white leading-none ${textClasses[size]}`}
        >
          XenForge
        </span>
        {showTagline && (
          <span className="text-[10px] font-mono tracking-wider text-white/50 uppercase mt-0.5">
            Digital Systems
          </span>
        )}
      </div>
    </Link>
  );
}
