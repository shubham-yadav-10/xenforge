import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Infinity, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/servicesData';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
    { label: 'Services', path: '/services', dropdown: true },
    { label: 'About', path: '/about' },
    { label: 'Process', path: '/process' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-5 sm:px-8 py-5 ${
          scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/5 py-4' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo (left) */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-medium text-base focus:outline-none pointer-events-auto cursor-pointer"
          >
            <Infinity size={22} strokeWidth={1.5} className="text-white" />
            <span className="tracking-wide">FORGE</span>
          </Link>

          {/* Nav pill (center, desktop) */}
          <nav className="hidden md:flex liquid-glass items-center gap-1 rounded-xl px-2 py-2 pointer-events-auto">
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => navigate('/services')}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer ${
                        isActive ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={13}
                        className={`mt-px transition-transform duration-200 ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-72 liquid-glass rounded-xl p-2 z-50 flex flex-col gap-1 shadow-2xl backdrop-blur-xl border border-white/10"
                        >
                          {servicesData.map((service) => (
                            <Link
                              key={service.id}
                              to={`/services/${service.slug}`}
                              className="w-full text-left px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors block group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-xs text-white group-hover:text-white">
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
                              className="px-3 py-1.5 text-[11px] text-white/70 hover:text-white flex items-center justify-between rounded-md hover:bg-white/5 transition-colors"
                            >
                              <span>View All Services</span>
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
                  className={`flex items-center gap-0.5 px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer ${
                    isActive ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTAs (right, desktop) */}
          <div className="hidden md:flex items-center gap-3 pointer-events-auto">
            <button
              onClick={() => showToast('Client portal access is available for ongoing retainers.')}
              className="liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
            >
              Log in
            </button>
            <Link
              to="/contact"
              className="bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors cursor-pointer shadow-sm active:scale-[0.98]"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden liquid-glass text-white p-2 rounded-lg cursor-pointer pointer-events-auto"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen navigation menu */}
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
              {navItems.map((item) => {
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

              <div className="mt-4 pt-2">
                <span className="text-[11px] uppercase tracking-widest text-white/40 font-mono mb-2 block">
                  Services
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

            {/* Bottom CTA & info in mobile menu */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full bg-white text-black text-center text-sm font-medium py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Start a Project
              </Link>
              <div className="flex items-center justify-between text-xs text-white/50 mt-2 font-mono">
                <span>hello@forge.agency</span>
                <span>FORGE © 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating feedback toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 liquid-glass text-white text-xs px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 pointer-events-none"
          >
            <div className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
