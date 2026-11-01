import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Play,
  Smartphone,
  Database,
  Shield,
  Zap,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Map legacy / alternative slugs to the 5 XenForge core practices
  const normalizedSlug =
    slug === 'seo' || slug === 'paid-advertising'
      ? 'digital-marketing'
      : slug;

  const service = servicesData.find((s) => s.slug === normalizedSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <article className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>BACK TO ALL 5 SERVICES</span>
          </Link>
        </div>

        {/* Hero Section of Service */}
        <header className="pb-16 border-b border-white/10 mb-16">
          <div className="flex items-center gap-3 text-xs font-mono text-white/40 mb-4">
            <span>SERVICE {service.number} / 05</span>
            <span>·</span>
            <span className="uppercase">{service.title}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
            {service.heading}
          </h1>

          <p className="text-xl sm:text-2xl text-white/70 font-normal max-w-2xl leading-relaxed mb-10">
            {service.copy}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <span>{service.ctaText}</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/audit"
              className="liquid-glass text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2 border border-white/15"
            >
              <span>Request Free Scope Audit</span>
            </Link>
          </div>
        </header>

        {/* Problem & Solution Statement */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="liquid-glass rounded-2xl p-8 border border-white/10">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-3">
              THE TYPICAL PROBLEM
            </span>
            <h2 className="text-xl font-medium text-white mb-3">Where Most Projects Stall</h2>
            <p className="text-sm text-white/70 leading-relaxed font-normal">
              {service.problemStatement}
            </p>
          </div>

          <div className="liquid-glass rounded-2xl p-8 border border-white/10">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-3">
              THE XENFORGE APPROACH
            </span>
            <h2 className="text-xl font-medium text-white mb-3">How We Build Around It</h2>
            <p className="text-sm text-white/70 leading-relaxed font-normal">
              {service.solutionStatement}
            </p>
          </div>
        </section>

        {/* App Development Architecture Visual */}
        {service.slug === 'app-development' && (
          <section className="mb-20 liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
              MOBILE STACK ARCHITECTURE
            </span>
            <h2 className="text-2xl font-medium text-white mb-6">
              Native Performance & Offline Reliability
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <Smartphone size={20} className="text-emerald-400 mb-3" />
                  <span className="font-mono text-xs text-white/40 block mb-1">LAYER 01</span>
                  <div className="font-medium text-sm text-white mb-2">60 FPS Native UI</div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Smooth gesture animations and tailored platform UI patterns for iOS and Android.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <Database size={20} className="text-blue-400 mb-3" />
                  <span className="font-mono text-xs text-white/40 block mb-1">LAYER 02</span>
                  <div className="font-medium text-sm text-white mb-2">Offline Cache</div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Local SQLite/MMKV database ensures users can interact even in airplane mode.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <Shield size={20} className="text-purple-400 mb-3" />
                  <span className="font-mono text-xs text-white/40 block mb-1">LAYER 03</span>
                  <div className="font-medium text-sm text-white mb-2">Biometrics & Auth</div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  FaceID, TouchID, and JWT tokens protected inside the operating system keychain.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <Zap size={20} className="text-amber-400 mb-3" />
                  <span className="font-mono text-xs text-white/40 block mb-1">LAYER 04</span>
                  <div className="font-medium text-sm text-white mb-2">Cloud Realtime Sync</div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Instant background synchronization and push notifications when connectivity restores.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Video Editing Visual Previews */}
        {service.slug === 'video-editing' && (
          <section className="mb-20">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
              VISUAL CUTS & FORMATS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'Product Macro Reel', ratio: '9:16 Social Format', desc: 'Tactile closeups with kinetic rhythm' },
                { title: 'Brand Launch Film', ratio: '16:9 Widescreen', desc: 'Cinematic narrative pacing for homepages' },
                { title: 'Motion Graphic Explainers', ratio: 'Multi-Aspect', desc: 'Visualizing technical data flows' },
              ].map((video, idx) => (
                <div
                  key={idx}
                  className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between aspect-[4/5]"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span>CUT 0{idx + 1}</span>
                    <span>{video.ratio}</span>
                  </div>

                  <div className="my-auto text-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-3 text-white">
                      <Play size={18} className="translate-x-0.5" />
                    </div>
                    <h3 className="text-lg font-medium text-white">{video.title}</h3>
                    <p className="text-xs text-white/50 mt-1">{video.desc}</p>
                  </div>

                  <div className="text-[10px] font-mono text-white/30 text-center pt-3 border-t border-white/5">
                    COLOR GRADED & SOUND DESIGNED
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AI Automation Workflows */}
        {service.slug === 'ai-automation' && (
          <section className="mb-20 liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
              AUTOMATION ARCHITECTURE
            </span>
            <h2 className="text-2xl font-medium text-white mb-6">
              Automations Built for Daily Operations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-xs text-white/40 block mb-2">PIPELINE A</span>
                <div className="font-mono text-xs text-white font-medium mb-2">
                  LEAD → QUALIFICATION → CRM
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Extracts buyer budget, intended timeframe, and customer specifications automatically.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-xs text-white/40 block mb-2">PIPELINE B</span>
                <div className="font-mono text-xs text-white font-medium mb-2">
                  MESSAGE → AI TRIAGE → HANDOFF
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Resolves standard questions instantly; alerts staff for high-priority conversations.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-xs text-white/40 block mb-2">PIPELINE C</span>
                <div className="font-mono text-xs text-white font-medium mb-2">
                  DOCUMENT → OCR → SPREADSHEET
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Extracts structured records from PDFs and receipts into your Google Sheet or database.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Deliverables & Scope */}
        <section className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            DELIVERABLES & SCOPE
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
            What Is Included in the Engagement
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.includes.map((item) => (
              <div
                key={item}
                className="p-5 rounded-xl liquid-glass border border-white/10 flex items-center gap-3"
              >
                <CheckCircle2 size={16} className="text-white/60 shrink-0" />
                <span className="text-sm text-white/85 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Checklist */}
        {service.capabilities && (
          <section className="mb-20 pt-12 border-t border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
              TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              Engineering Disciplines
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.capabilities.map((cap) => (
                <div
                  key={cap}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-white/75 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <div className="pt-12 border-t border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3">
            Ready to initiate a {service.title.toLowerCase()} engagement?
          </h3>
          <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
            Contact us with your scope details and target timeline for a fixed architectural proposal.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-block shadow-lg"
          >
            {service.ctaText}
          </Link>
        </div>
      </div>
    </article>
  );
}
