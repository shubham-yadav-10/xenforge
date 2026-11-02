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
  Building2,
  Sparkles,
  Layers,
  TrendingUp,
  Workflow,
  MessageSquare,
  ShoppingBag,
  Bot,
  Bell,
  Instagram,
  ExternalLink,
  Globe,
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

        {/* App Development Live Mobile Showcase */}
        {service.slug === 'app-development' && (
          <section className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-white/10">
              <div>
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  FLAGSHIP MOBILE PRODUCTION SYSTEM
                </span>
                <h2 className="text-2xl sm:text-4xl font-medium text-white tracking-tight">
                  EstateFlow — Real Estate Builder CRM & Inventory Mobile App
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-mono text-white/50">
                IOS & ANDROID · NATIVE TAILWIND UI · OFFLINE SQLITE
              </p>
            </div>

            {/* Mobile Screens Dual Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Screen 01: Builder Dashboard & Lead Conversion Funnel */}
              <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-3 pb-3 border-b border-white/10">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <TrendingUp size={13} />
                      SCREEN 01 · BUILDER DASHBOARD
                    </span>
                    <span className="text-[10px] uppercase text-white/40">LEAD FUNNEL & REVENUE</span>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-2">
                    Deal Conversion Funnel & Lead Triage
                  </h3>
                  <p className="text-xs text-white/60 mb-6 leading-relaxed">
                    Tracks high-value buyer leads across 7 stages: New, Contacted, Interested, Site Visit, Negotiation, Won, and Lost with instant + New Lead capture and builder role authentication.
                  </p>

                  {/* Mobile Frame Container */}
                  <div className="max-w-[280px] sm:max-w-[320px] mx-auto rounded-3xl p-2.5 bg-[#181a20] border-2 border-white/20 shadow-2xl relative mb-6">
                    {/* Notch / Dynamic Island */}
                    <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2" />
                    <div className="rounded-2xl overflow-hidden bg-black border border-white/10 aspect-[9/18.5]">
                      <img
                        src="/assets/images/realestate_crm_mobile_dashboard.png"
                        alt="EstateFlow Builder Dashboard with Conversion Funnel"
                        className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Feature Pills */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-white/70">
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-emerald-400 block font-semibold">7-Stage Funnel</span>
                    <span>New → Site Visit → Won</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-amber-400 block font-semibold">Builder Role</span>
                    <span>Multi-Agent Auth & Logs</span>
                  </div>
                </div>
              </div>

              {/* Screen 02: Properties Inventory */}
              <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-3 pb-3 border-b border-white/10">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <Building2 size={13} />
                      SCREEN 02 · PROPERTY INVENTORY
                    </span>
                    <span className="text-[10px] uppercase text-white/40">MULTI-CITY ASSET CATALOG</span>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-2">
                    Multi-City Real Estate Inventory Catalog
                  </h3>
                  <p className="text-xs text-white/60 mb-6 leading-relaxed">
                    Live inventory engine managing high-ticket commercial spaces (₹3.20 Cr in Hyderabad), luxury apartments (₹2.20 Cr in Mumbai), and modern villas in Bengaluru with unit specs.
                  </p>

                  {/* Mobile Frame Container */}
                  <div className="max-w-[280px] sm:max-w-[320px] mx-auto rounded-3xl p-2.5 bg-[#181a20] border-2 border-white/20 shadow-2xl relative mb-6">
                    {/* Notch / Dynamic Island */}
                    <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2" />
                    <div className="rounded-2xl overflow-hidden bg-black border border-white/10 aspect-[9/18.5]">
                      <img
                        src="/assets/images/realestate_crm_mobile_properties.png"
                        alt="EstateFlow Real Estate Property Inventory Screen"
                        className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Feature Pills */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-white/70">
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-blue-400 block font-semibold">Asset Categories</span>
                    <span>Commercial · Villa · Flat</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-purple-400 block font-semibold">City Specs</span>
                    <span>Mumbai · Bengaluru · Hyd</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Architecture Layers */}
            <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10">
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
                ENGINEERING PILLARS BEHIND OUR APPS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Smartphone size={18} className="text-emerald-400 mb-2" />
                  <div className="font-mono text-xs text-white/40 mb-1">LAYER 01</div>
                  <div className="text-sm font-medium text-white mb-1">60 FPS Native Touch</div>
                  <p className="text-xs text-white/60">Fluid micro-gestures, responsive sheets, and zero-lag list scrolling.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Database size={18} className="text-blue-400 mb-2" />
                  <div className="font-mono text-xs text-white/40 mb-1">LAYER 02</div>
                  <div className="text-sm font-medium text-white mb-1">Offline SQLite Cache</div>
                  <p className="text-xs text-white/60">Full access to leads and brochures even at basement or remote construction sites.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Shield size={18} className="text-purple-400 mb-2" />
                  <div className="font-mono text-xs text-white/40 mb-1">LAYER 03</div>
                  <div className="text-sm font-medium text-white mb-1">Role-Based Auth</div>
                  <p className="text-xs text-white/60">Strict separation between Builder financials and Broker sales permissions.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Sparkles size={18} className="text-amber-400 mb-2" />
                  <div className="font-mono text-xs text-white/40 mb-1">LAYER 04</div>
                  <div className="text-sm font-medium text-white mb-1">Integrated AI Assistant</div>
                  <p className="text-xs text-white/60">In-app AI tab for instant lead qualification, automated notes, and follow-ups.</p>
                </div>
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

        {/* AI Automation Workflows — Shopify 9-Workflow Production Engine */}
        {service.slug === 'ai-automation' && (
          <section className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-white/10">
              <div>
                <span className="font-mono text-xs text-purple-400 uppercase tracking-widest flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  FLAGSHIP ENTERPRISE AUTOMATION SYSTEM
                </span>
                <h2 className="text-2xl sm:text-4xl font-medium text-white tracking-tight">
                  Shopify CRM + Marketing Automation + Order Tracking
                </h2>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded bg-white/10 border border-white/15 text-white/90">Production</span>
                <span className="px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">Marketing Automation</span>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">WhatsApp Automation</span>
                <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300">Shopify CRM</span>
              </div>
            </div>

            {/* Architecture Canvas Viewer */}
            <div className="liquid-glass rounded-2xl p-4 sm:p-8 border border-white/10 mb-8">
              <div className="rounded-xl border border-white/15 overflow-hidden shadow-2xl bg-[#0d0f14]">
                {/* Canvas Header Bar */}
                <div className="bg-[#14151a] px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-white/80">
                    <Workflow size={14} className="text-purple-400" />
                    <span className="font-medium text-white">n8n / Make.com Automated Architecture · 9 Live Workflows</span>
                  </div>
                  <span className="text-[11px] text-white/50">
                    WEBHOOKS · GOOGLE SHEETS CRM · OPENAI · WHATSAPP CLOUD API · SLACK
                  </span>
                </div>

                {/* Workflow Diagram High-Res Image */}
                <div className="relative overflow-hidden bg-black p-4 sm:p-6 group">
                  <img
                    src="/assets/images/shopify_marketing_ai_automation_workflows.png"
                    alt="Shopify CRM Marketing Automation 9 Workflows Diagram"
                    className="w-full h-auto object-contain rounded-lg border border-white/10 group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <div className="absolute top-6 right-6 px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-purple-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>9 Interconnected Workflows Active</span>
                  </div>
                </div>

                {/* Canvas Footer */}
                <div className="px-4 py-2.5 bg-[#101115] border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-white/50">
                  <span>DEPLOYED & MAINTAINED BY XENFORGE</span>
                  <span className="text-emerald-400 font-medium">ZERO MANUAL DISPATCH OVERHEAD</span>
                </div>
              </div>
            </div>

            {/* Detailed 9 Workflows Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  id: 'WF 01',
                  title: 'Shopify New Order & CRM Sync',
                  tag: 'Webhook Trigger',
                  tagColor: 'text-emerald-400',
                  desc: 'Captures incoming orders, extracts customer payload, upserts into Google Sheets master CRM, checks COD status, and fires instant WhatsApp order confirmation.',
                },
                {
                  id: 'WF 02',
                  title: 'Fulfillment & Real-Time Tracking',
                  tag: 'Logistics Sync',
                  tagColor: 'text-blue-400',
                  desc: 'Extracts AWB tracking URLs from Shopify fulfillment webhooks, cross-references customer sheets, and sends direct WhatsApp tracking links to buyers.',
                },
                {
                  id: 'WF 03',
                  title: 'WhatsApp Order Tracking Bot',
                  tag: 'Inbound Bot',
                  tagColor: 'text-purple-400',
                  desc: 'Listens to incoming WhatsApp queries, detects tracking intent, searches orders in the live database within 400ms, and replies with instant delivery status.',
                },
                {
                  id: 'WF 04',
                  title: '2-Stage Abandoned Cart Recovery',
                  tag: 'Revenue Engine',
                  tagColor: 'text-amber-400',
                  desc: 'Triggers on cart abandonment. Sends 1st reminder at 1 hour with a personalized link, waits 22 hours, sends 2nd incentive reminder, and logs conversion recovery.',
                },
                {
                  id: 'WF 05',
                  title: 'Automated COD Verification (YES/NO)',
                  tag: 'Fraud Reduction',
                  tagColor: 'text-red-400',
                  desc: 'Sends interactive WhatsApp buttons for Cash on Delivery. Parses user reply and automatically tags the Shopify order as "COD Confirmed" or "COD Cancelled".',
                },
                {
                  id: 'WF 06',
                  title: '7-Day Post-Delivery Review Loop',
                  tag: 'Social Proof',
                  tagColor: 'text-emerald-400',
                  desc: 'Daily cron scheduler filters orders delivered exactly 7 days ago and dispatches a warm WhatsApp request for verified reviews and customer feedback.',
                },
                {
                  id: 'WF 07',
                  title: 'Daily VIP Customer Detection',
                  tag: 'Retention & LTV',
                  tagColor: 'text-purple-400',
                  desc: 'Calculates cumulative customer spend. When a customer reaches VIP tier, tags their profile in the CRM and sends an exclusive VIP reward WhatsApp message.',
                },
                {
                  id: 'WF 08',
                  title: 'OpenAI / Gemini AI Customer Support',
                  tag: 'AI Intelligence',
                  tagColor: 'text-cyan-400',
                  desc: 'Parses complex incoming customer messages, classifies query category, constructs a grounded LLM prompt with order context, and generates human-grade answers.',
                },
                {
                  id: 'WF 09',
                  title: 'Automated Slack Human Escalation',
                  tag: 'Human Handoff',
                  tagColor: 'text-pink-400',
                  desc: 'If the AI classifies a customer issue as high-friction (complaint, damaged item, refund dispute), it immediately alerts the human support team via Slack with full logs.',
                },
              ].map((wf) => (
                <div key={wf.id} className="liquid-glass rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-white/40">{wf.id}</span>
                      <span className={wf.tagColor}>{wf.tag}</span>
                    </div>
                    <h3 className="text-sm font-medium text-white mb-2">{wf.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{wf.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Digital Marketing — Makrand Honey D2C Brand Strategy Showcase */}
        {service.slug === 'digital-marketing' && (
          <section className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-white/10">
              <div>
                <span className="font-mono text-xs text-amber-400 uppercase tracking-widest flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  FLAGSHIP D2C BRAND & SOCIAL MEDIA STRATEGY
                </span>
                <h2 className="text-2xl sm:text-4xl font-medium text-white tracking-tight">
                  Makrand (मकरंद) — D2C Organic Instagram & Brand Positioning
                </h2>
              </div>
              <a
                href="https://www.instagram.com/makrandhoney/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Instagram size={13} />
                <span>@makrandhoney</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Visual Showcase in Mobile Frame */}
              <div className="lg:col-span-6">
                <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10">
                  <div className="max-w-[340px] mx-auto rounded-3xl p-3 bg-[#181a20] border-2 border-white/20 shadow-2xl relative">
                    <div className="w-20 h-3.5 bg-black rounded-full mx-auto mb-2" />
                    <div className="rounded-2xl overflow-hidden bg-black border border-white/10">
                      <img
                        src="/assets/images/makrand_honey_instagram_marketing.png"
                        alt="Makrand Honey Instagram Profile and Story Highlights Strategy"
                        className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-3 text-center text-[11px] font-mono text-amber-300">
                      @makrandhoney · Organic D2C Architecture
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Strategic Breakdown */}
              <div className="lg:col-span-6 space-y-6">
                <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10">
                  <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
                    01 / BIO CONVERSION ARCHITECTURE
                  </span>
                  <h3 className="text-lg font-medium text-white mb-3">
                    Crafting Trust-Anchored D2C Positioning
                  </h3>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span className="text-white/80">Real Beekeepers 🐝</span>
                      <span className="text-amber-400">Authentic Sourcing Hook</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span className="text-white/80">Batch Tested, No BS 🔬</span>
                      <span className="text-emerald-400">Lab-Certified Trust</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span className="text-white/80">Built for Your Daily Ritual 🗓️</span>
                      <span className="text-blue-400">Habit Formation</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span className="text-white/80">www.makrandhoney.in 👇</span>
                      <span className="text-purple-400">Direct Purchase Funnel</span>
                    </div>
                  </div>
                </div>

                <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10">
                  <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
                    02 / STORY HIGHLIGHTS TAXONOMY
                  </span>
                  <h3 className="text-lg font-medium text-white mb-3">
                    5 Pillar Education & Conversion Funnels
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                      <strong className="text-amber-300 block mb-1">Buzz & Bake</strong>
                      <p className="text-white/60 text-[11px]">Culinary use cases, recipes, and everyday kitchen integrations.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                      <strong className="text-amber-300 block mb-1">Brand Story</strong>
                      <p className="text-white/60 text-[11px]">Origins, ethical apiaries, and "The Untouched Honey" philosophy.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                      <strong className="text-amber-300 block mb-1">Bee-Fact</strong>
                      <p className="text-white/60 text-[11px]">Bite-sized apiculture education building category authority.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                      <strong className="text-amber-300 block mb-1">Skin & Nectar</strong>
                      <p className="text-white/60 text-[11px]">Holistic wellness, topical skincare uses, and natural remedies.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 sm:col-span-2">
                      <strong className="text-amber-300 block mb-1">Buzz Academy</strong>
                      <p className="text-white/60 text-[11px]">Transparency lab results, raw honey crystallization guides, and consumer trust FAQs.</p>
                    </div>
                  </div>
                </div>
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
