import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('xenforge_cookie_consent');
    if (!consent) {
      // Show banner after brief delay
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'xenforge_cookie_consent',
      JSON.stringify({ essential: true, analytics: true, marketing: true })
    );
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem(
      'xenforge_cookie_consent',
      JSON.stringify({ essential: true, analytics: false, marketing: false })
    );
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('xenforge_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowManage(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50">
      <div className="liquid-glass rounded-2xl p-5 border border-white/20 shadow-2xl backdrop-blur-2xl text-white">
        {!showManage ? (
          <div>
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <Cookie size={16} className="text-white/80" />
                <span className="font-medium text-xs tracking-wide">Cookie Privacy Choices</span>
              </div>
              <button
                onClick={handleRejectNonEssential}
                className="text-white/40 hover:text-white"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            <p className="text-xs text-white/70 leading-relaxed mb-4">
              We use essential cookies to maintain security and optional cookies to evaluate site
              performance. Read our{' '}
              <Link to="/cookies" className="text-white underline hover:text-white/80">
                Cookie Policy
              </Link>
              .
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleAcceptAll}
                className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="liquid-glass text-white text-xs font-medium px-3.5 py-2 rounded-full hover:bg-white/10 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={() => setShowManage(true)}
                className="text-xs text-white/60 hover:text-white px-2 py-1 underline font-mono"
              >
                Manage
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
              <span className="font-medium text-xs">Manage Cookie Preferences</span>
              <button
                onClick={() => setShowManage(false)}
                className="text-white/40 hover:text-white text-xs"
              >
                Back
              </button>
            </div>

            <div className="space-y-3 mb-4 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-white">Essential Cookies</div>
                  <div className="text-[11px] text-white/50">Required for platform security</div>
                </div>
                <span className="text-[10px] font-mono text-white/60 bg-white/10 px-2 py-0.5 rounded">
                  Required
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-white">Analytics Cookies</div>
                  <div className="text-[11px] text-white/50">Aggregate visitor analytics</div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="rounded bg-white/10 border-white/20 text-white"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-white">Marketing Cookies</div>
                  <div className="text-[11px] text-white/50">Campaign attribution</div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  className="rounded bg-white/10 border-white/20 text-white"
                />
              </div>
            </div>

            <button
              onClick={handleSavePreferences}
              className="w-full bg-white text-black text-xs font-medium py-2 rounded-full hover:bg-white/90 transition-colors"
            >
              Save Preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
