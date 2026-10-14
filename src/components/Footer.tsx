import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#111214] text-white pt-20 pb-12 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tighter text-white mb-4">
              XenForge
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-sm leading-relaxed mb-6 font-normal">
              Websites, AI, marketing and video, forged for growth. Helping ambitious brands
              get online, get noticed and get customers.
            </p>

            <div className="space-y-2 text-xs font-mono text-white/50">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-white/40" />
                <span>Bengaluru, India · Serving clients across India and worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-white/40" />
                <a href="mailto:hello@xenforge.com" className="hover:text-white transition-colors">
                  hello@xenforge.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-white/40" />
                <a href="https://wa.me/919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210 (WhatsApp / Call)
                </a>
              </div>
            </div>

            {/* Social Media Links Strip */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full liquid-glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://www.instagram.com/xen.forge?stkn=MWN1aGllazc3OWp3NQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full liquid-glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-full liquid-glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all"
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full liquid-glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all"
              >
                <Github size={14} />
              </a>
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
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-white/70 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/audit" className="text-white/70 hover:text-white transition-colors">
                  Free Audit
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
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-automation"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  AI Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/video-editing"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Video Editing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-4">
              Legal & Trust
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-white/70 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-white/70 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/refunds" className="text-white/70 hover:text-white transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>© 2026 XenForge. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/security" className="hover:text-white transition-colors">
              Security
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
