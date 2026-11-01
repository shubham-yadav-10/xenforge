import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Globe,
  Smartphone,
  Bot,
  Megaphone,
  Film,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import Logo from './Logo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Click outside and escape key handling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  // Helper icon for each service
  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'web-development':
        return <Globe size={15} className="text-blue-400 shrink-0" />;
      case 'app-development':
        return <Smartphone size={15} className="text-emerald-400 shrink-0" />;
      case 'ai-automation':
        return <Bot size={15} className="text-purple-400 shrink-0" />;
      case 'digital-marketing':
        return <Megaphone size={15} className="text-amber-400 shrink-0" />;
      case 'video-editing':
        return <Film size={15} className="text-rose-400 shrink-0" />;
      default:
        return <Sparkles size={15} className="text-white/60 shrink-0" />;
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services', dropdown: true },
    { label: 'Work', path: '/work' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
          scrolled
            ? 'bg-[#111214]/90 backdrop-blur-md border-b border-white/10 py-3 md:py-3.5 shadow-xl'
            : 'py-4 md:py-5'
        }`}
      >
        <div className="xf-navbar-container">
          {/* LEFT: Clean Logo */}
          <div className="xf-navbar-left flex items-center min-w-0">
            <div className="pointer-events-auto">
              <Logo size="md" />
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="xf-navbar-center hidden md:flex items-center justify-center pointer-events-auto">
            <nav className="liquid-glass !overflow-visible flex items-center gap-1 rounded-xl p-1.5 px-2.5 shrink-0 select-none border border-white/10">
              {navLinks.map((item) => {
                const isActive =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);

                if (item.dropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative shrink-0"
                      ref={dropdownRef}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className={`flex items-center gap-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap font-medium px-3 lg:px-4 py-1.5 text-xs lg:text-sm ${
                          isActive || dropdownOpen
                            ? 'bg-white/15 text-white'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                      >
                        <span className="whitespace-nowrap">{item.label}</span>
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 shrink-0 ${
                            dropdownOpen ? 'rotate-180 text-white' : 'text-white/60'
                          }`}
                        />
                      </button>

                      {/* Redesigned Modern Services Dropdown Panel */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[360px] sm:w-[410px] max-w-[calc(100vw-32px)] bg-[#111214]/95 backdrop-blur-2xl rounded-2xl p-3 z-50 flex flex-col shadow-2xl border border-white/15"
                          >
                            {/* Header row */}
                            <div className="flex items-center justify-between px-3 py-2 mb-1 border-b border-white/10 text-[11px] font-mono">
                              <span className="text-white/50 uppercase tracking-wider">
                                Core Practices (05)
                              </span>
                              <Link
                                to="/services"
                                onClick={() => setDropdownOpen(false)}
                                className="text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                              >
                                <span>Overview</span>
                                <ArrowUpRight
                                  size={11}
                                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                />
                              </Link>
                            </div>

                            {/* Services items list */}
                            <div className="flex flex-col gap-1">
                              {servicesData.map((service) => (
                                <Link
                                  key={service.id}
                                  to={`/services/${service.slug}`}
                                  onClick={() => setDropdownOpen(false)}
                                  className="p-2.5 rounded-xl hover:bg-white/10 transition-all flex items-start gap-3 group border border-transparent hover:border-white/10"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors mt-0.5">
                                    {getServiceIcon(service.slug)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="text-xs font-medium text-white group-hover:text-white transition-colors truncate">
                                        {service.title}
                                      </span>
                                      <span className="text-[10px] font-mono text-white/40 group-hover:text-white/70 transition-colors shrink-0">
                                        {service.number}
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-white/55 line-clamp-1 mt-0.5 font-normal">
                                      {service.shortDesc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Footer row */}
                            <div className="mt-2 pt-2 border-t border-white/10 px-2 flex items-center justify-between">
                              <Link
                                to="/services"
                                onClick={() => setDropdownOpen(false)}
                                className="text-xs text-white/80 hover:text-white font-medium flex items-center gap-1.5 py-1 px-2 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <span>View all 5 practices</span>
                                <ArrowUpRight size={13} />
                              </Link>
                              <Link
                                to="/audit"
                                onClick={() => setDropdownOpen(false)}
                                className="text-xs text-amber-300 hover:text-amber-200 font-medium flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <Sparkles size={12} />
                                <span>Free Audit</span>
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex items-center rounded-lg transition-colors cursor-pointer whitespace-nowrap font-medium px-3 lg:px-4 py-1.5 text-xs lg:text-sm shrink-0 ${
                      isActive
                        ? 'bg-white/15 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* RIGHT: CTA Button & Mobile Hamburger */}
          <div className="xf-navbar-right flex items-center justify-end pointer-events-auto gap-3">
            <Link
              to="/audit"
              className="hidden md:inline-flex bg-white text-black font-medium rounded-full px-5 py-2.5 text-xs sm:text-sm whitespace-nowrap shadow-sm hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all items-center gap-1.5 cursor-pointer"
            >
              <Sparkles size={13} className="text-black/80 shrink-0" />
              <span className="whitespace-nowrap">Get Free Audit</span>
            </Link>

            {/* Mobile hamburger toggle (< 768px) */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="md:hidden liquid-glass text-white p-2.5 rounded-xl cursor-pointer hover:bg-white/10 transition-colors shrink-0 border border-white/15"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Down / Full-Screen Menu (< 768px) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-widest text-white/40 font-mono mb-2">
                Navigation
              </span>

              {navLinks.map((item) => {
                const isActive =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);

                return (
                  <div key={item.label} className="w-full">
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between w-full py-3 text-lg font-medium border-b border-white/10 transition-colors ${
                        isActive ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={16} className="text-white/40" />
                    </Link>
                  </div>
                );
              })}

              {/* Mobile Services list */}
              <div className="mt-5 pt-3">
                <span className="text-[11px] uppercase tracking-widest text-white/40 font-mono mb-3 block">
                  All 5 Core Practices
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white/80 hover:text-white text-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                          {getServiceIcon(service.slug)}
                        </span>
                        <span className="font-medium text-xs">{service.title}</span>
                      </div>
                      <span className="font-mono text-[11px] text-white/40">{service.number}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Footer CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/audit"
                onClick={() => setMenuOpen(false)}
                className="w-full bg-white text-black text-center text-sm font-medium py-3.5 rounded-full hover:bg-white/90 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles size={14} className="text-black/80" />
                <span>Get Free Audit</span>
              </Link>

              <div className="flex items-center justify-between text-xs text-white/40 mt-2 font-mono">
                <span>XenForge Digital Systems</span>
                <span>Bengaluru & Worldwide</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
