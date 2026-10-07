import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Infinity, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/servicesData';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Click outside and escape key handling for dropdown
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
    };
  }, []);

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
            ? 'bg-black/85 backdrop-blur-md border-b border-white/5 py-3 md:py-3.5 shadow-xl'
            : 'py-4 md:py-5'
        }`}
      >
        {/*
          3-COLUMN GRID LAYOUT (Desktop & Tablet >= 768px):
          grid-template-columns: 1fr auto 1fr;
          - LEFT COLUMN: justify-self: start (Logo [∞ XenForge])
          - CENTER COLUMN: justify-self: center (True viewport-centered nav container)
          - RIGHT COLUMN: justify-self: end (Get Free Audit CTA)

          MOBILE (< 768px):
          flex items-center justify-between (Logo left, Hamburger right)
        */}
        <div className="xf-navbar-container">
          {/* LEFT COLUMN: Logo [∞ XenForge] */}
          <div className="xf-navbar-left flex items-center min-w-0">
            <Link
              to="/"
              className="flex items-center gap-2 text-white font-medium focus:outline-none pointer-events-auto cursor-pointer group shrink-0"
            >
              <Infinity
                size={22}
                strokeWidth={1.5}
                className="text-white group-hover:rotate-12 transition-transform duration-300 shrink-0"
              />
              <span className="tracking-wide font-semibold text-base sm:text-lg whitespace-nowrap">
                XenForge
              </span>
            </Link>
          </div>

          {/* CENTER COLUMN: Centered Navigation Container (Home, About, Services ˅, Work) */}
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
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => navigate('/services')}
                        className={`flex items-center gap-1 rounded-md transition-colors cursor-pointer whitespace-nowrap font-medium px-2.5 lg:px-3.5 py-1.5 text-xs lg:text-sm ${
                          isActive
                            ? 'bg-white/15 text-white'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <span className="whitespace-nowrap">{item.label}</span>
                        <ChevronDown
                          size={13}
                          className={`mt-px transition-transform duration-200 shrink-0 ${
                            dropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Services Dropdown Panel */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-2.5 w-[320px] sm:w-[350px] max-w-[min(360px,calc(100vw-32px))] bg-black/90 liquid-glass rounded-xl p-2 z-50 flex flex-col gap-1 shadow-2xl backdrop-blur-xl border border-white/10"
                          >
                            {servicesData.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.slug}`}
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors block group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-xs text-white group-hover:text-white whitespace-nowrap">
                                    {service.title}
                                  </span>
                                  <span className="text-[10px] text-white/40 font-mono">
                                    {service.number}
                                  </span>
                                </div>
                                <p className="text-[11px] text-white/50 line-clamp-1 mt-0.5">
                                  {service.shortDesc}
                                </p>
                              </Link>
                            ))}
                            <div className="pt-1.5 mt-1 border-t border-white/10">
                              <Link
                                to="/services"
                                onClick={() => setDropdownOpen(false)}
                                className="px-3 py-1.5 text-[11px] text-white/70 hover:text-white flex items-center justify-between rounded-md hover:bg-white/5 transition-colors"
                              >
                                <span>View All 4 Practices</span>
                                <ArrowUpRight size={12} />
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
                    className={`flex items-center rounded-md transition-colors cursor-pointer whitespace-nowrap font-medium px-2.5 lg:px-3.5 py-1.5 text-xs lg:text-sm shrink-0 ${
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

          {/* RIGHT COLUMN: Right-Aligned CTA [ ✨ Get Free Audit ] on Desktop/Tablet, Hamburger on Mobile */}
          <div className="xf-navbar-right flex items-center justify-end pointer-events-auto">
            {/* Desktop & Tablet CTA: [ ✨ Get Free Audit ] (White Background, Black Text) */}
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
              className="md:hidden liquid-glass text-white p-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors shrink-0"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Down / Full-Screen Menu (< 768px) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-widest text-white/40 font-mono mb-2">
                Navigation
              </span>

              {/* The exact 4 navigation options */}
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
                        isActive ? 'text-white' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={16} className="text-white/40" />
                    </Link>
                  </div>
                );
              })}

              {/* Services Sub-Links */}
              <div className="mt-4 pt-2">
                <span className="text-[11px] uppercase tracking-widest text-white/40 font-mono mb-2 block">
                  Core Practices
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between py-2 text-sm text-white/70 hover:text-white"
                    >
                      <span>{service.title}</span>
                      <span className="font-mono text-xs text-white/30">{service.number}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA in Mobile Menu: Get Free Audit (White background, black text) */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/audit"
                onClick={() => setMenuOpen(false)}
                className="w-full bg-white text-black text-center text-sm font-medium py-3 rounded-full hover:bg-white/90 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Sparkles size={14} className="text-black/80" />
                <span>Get Free Audit</span>
              </Link>

              <div className="flex items-center justify-between text-xs text-white/50 mt-2 font-mono">
                <span>hello@xenforge.com</span>
                <span>XenForge © 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
