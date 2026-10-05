import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white pt-20 pb-12 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl sm:text-7xl font-semibold tracking-tighter text-white mb-6">
              FORGE
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-sm leading-relaxed mb-6 font-normal">
              Digital products, automation and growth systems for ambitious businesses.
            </p>
            <div className="text-xs font-mono text-white/40">
              Direct engagements with senior engineers & designers.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-white/70 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-white/70 hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-4">
              Services
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services/web-development"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Web
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-development"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-automation"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  AI
                </Link>
              </li>
              <li>
                <Link
                  to="/services/seo"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  to="/services/video-editing"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Video
                </Link>
              </li>
              <li>
                <Link
                  to="/services/paid-advertising"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Ads
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-4">
              Contact & Social
            </span>
            <a
              href="mailto:hello@forge.agency"
              className="text-sm font-medium text-white hover:text-white/80 transition-colors block mb-4"
            >
              hello@forge.agency
            </a>

            <div className="space-y-2 text-sm text-white/60">
              <div>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>© 2026 FORGE. ALL RIGHTS RESERVED.</div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms
            </Link>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
