import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Key, Server, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function SecurityPage() {
  const practices = [
    {
      title: 'Encrypted connections',
      desc: 'Our website, client portals and forms utilize strict HTTPS/TLS encryption for all in-transit communications.',
      icon: Lock,
    },
    {
      title: 'Least-access principle',
      desc: 'Team members only access the specific repositories, databases and accounts strictly required for your project.',
      icon: Key,
    },
    {
      title: 'Strong authentication',
      desc: 'We mandate unique generated passwords, password managers, and hardware-backed two-factor authentication across all agency infrastructure.',
      icon: ShieldCheck,
    },
    {
      title: 'Secure credential handling',
      desc: 'If you share third-party logins, we request you use temporary delegate access or encrypted credential vaults. We never request passwords over open social chats.',
      icon: Server,
    },
    {
      title: 'Trusted providers',
      desc: 'We host client solutions on industry-recognized cloud platforms (AWS, Cloudflare, Google Cloud, Vercel) that maintain certified ISO/SOC compliance.',
      icon: Server,
    },
    {
      title: 'Data minimisation',
      desc: 'We collect only what is strictly necessary to develop, deploy, and maintain your digital products.',
      icon: ShieldCheck,
    },
    {
      title: 'Backups and updates',
      desc: 'We configure routine automated database snapshots and keep all software dependencies, libraries, and security patches updated.',
      icon: Lock,
    },
    {
      title: 'Secure development practices',
      desc: 'We enforce automated input sanitization, CSRF/XSS mitigations, parameterized queries, and strict dependency vulnerability auditing.',
      icon: ShieldCheck,
    },
    {
      title: 'Confidentiality',
      desc: 'Your business roadmaps, trade secrets, customer records, and design assets are held strictly confidential under binding non-disclosure terms.',
      icon: Lock,
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>BACK TO HOME</span>
          </Link>
        </div>

        <header className="pb-12 border-b border-white/10 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            TRUST & INFRASTRUCTURE
          </span>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            How we protect your information.
          </h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            At XenForge, we handle your business details, content and access credentials. We treat
            that trust seriously. Here is what we do to keep it safe.
          </p>
        </header>

        {/* Practices Grid */}
        <div className="space-y-6 mb-16">
          <h2 className="text-xl font-medium text-white mb-4">Our Security Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practices.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="liquid-glass rounded-xl p-6 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-white font-medium text-base mb-2">
                      <Icon size={16} className="text-white/60 shrink-0" />
                      <span>{p.title}</span>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-normal">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Your Part */}
        <section className="mb-12 p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-base font-medium text-white mb-2">Your Part</h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Please use strong, unique passwords for any accounts shared with us, enable two-factor
            authentication on your registrar and hosting dashboards, and notify us immediately if you
            suspect any suspicious activity on connected platforms.
          </p>
        </section>

        {/* Report a security concern */}
        <section className="mb-12 p-6 rounded-xl liquid-glass border border-white/10">
          <div className="flex items-start gap-3">
            <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-medium text-white mb-1">
                Report a Security Concern
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-3">
                If you believe you have discovered a vulnerability or have a security concern regarding
                our infrastructure or client deliverables, please email{' '}
                <a href="mailto:security@xenforge.com" className="text-white underline">
                  security@xenforge.com
                </a>
                . Please include technical details so we can investigate promptly, and give us
                reasonable time to remediate before disclosing publicly. We acknowledge reports
                within 3 business days.
              </p>
            </div>
          </div>
        </section>

        {/* Data Breach Response */}
        <section className="p-6 rounded-xl border border-white/10 text-xs text-white/60 space-y-2 font-mono">
          <div className="text-white font-medium uppercase tracking-wider">
            Data Breach Response Commitment
          </div>
          <p>
            If a security event affecting your business or customer personal data occurs, we will
            investigate promptly, take immediate technical steps to contain it, and notify affected
            parties and relevant statutory authorities as required by applicable laws.
          </p>
        </section>
      </div>
    </div>
  );
}
