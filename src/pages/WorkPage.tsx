import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Sparkles,
  Globe,
  ExternalLink,
  Play,
  Flame,
  ThumbsUp,
  Eye,
  Film,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Building2,
  TrendingUp,
  Workflow,
  Instagram,
  Bot,
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

type FilterType = 'All' | 'Website' | 'App Development' | 'AI Automation' | 'Marketing' | 'Video';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.categories.includes(activeFilter));

  const sanvoProject = projectsData.find((p) => p.slug === 'sanvo-bath-fixtures') || projectsData[0];
  const videoProject = projectsData.find((p) => p.slug === 'gta5-car-business-editing') || projectsData[1];
  const appProject = projectsData.find((p) => p.slug === 'estateflow-real-estate-crm-app') || projectsData[2];
  const automationProject = projectsData.find((p) => p.slug === 'shopify-crm-ai-marketing-automation') || projectsData[3];
  const marketingProject = projectsData.find((p) => p.slug === 'makrand-honey-brand-marketing') || projectsData[4];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        {/* Page Introduction */}
        <div className="mb-16 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass text-xs font-mono text-white/80 mb-4 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>VERIFIED PORTFOLIO & LIVE CLIENT WORK</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-6">
            WHAT WE BUILD.
          </h1>
          <p className="text-base sm:text-xl text-white/70 max-w-2xl font-normal leading-relaxed">
            Real production platforms and high-impact creative campaigns engineered by XenForge.
            Explore our verified client website deployment and viral video editing showcase.
          </p>

          {/* Clean Filter Controls */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {(['All', 'Website', 'App Development', 'AI Automation', 'Marketing', 'Video'] as FilterType[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'liquid-glass text-white/70 hover:text-white'
                }`}
              >
                {filter === 'All'
                  ? 'All Verified Work'
                  : filter === 'Website'
                  ? 'Website Development'
                  : filter === 'App Development'
                  ? 'App Development'
                  : filter === 'AI Automation'
                  ? 'AI Automation'
                  : filter === 'Marketing'
                  ? 'Digital Marketing'
                  : 'Video Editing'}
              </button>
            ))}
          </div>
        </div>

        {/* 01: FEATURED CLIENT WEBSITE: Sanvo (sanvo.co) */}
        {(activeFilter === 'All' || activeFilter === 'Website') && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                FLAGSHIP CLIENT PLATFORM
              </span>
              <a
                href="https://sanvo.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Globe size={13} />
                <span>sanvo.co</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="liquid-glass rounded-2xl p-6 sm:p-10 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live Production Client
                    </span>
                    <span className="text-xs font-mono text-white/50 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      Luxury Bath Fixtures
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-medium text-white tracking-tight">
                    Sanvo (sanvo.co)
                  </h2>
                  <p className="text-sm sm:text-base text-white/60 mt-2 mb-6 font-normal">
                    &ldquo;Quiet luxury, precisely made&rdquo; — Architectural Bath Fixtures & Digital Experience
                  </p>

                  <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/75 leading-relaxed">
                    <strong className="text-white block font-mono text-[11px] uppercase mb-1">
                      The Challenge & Delivery:
                    </strong>
                    Sanvo required an architectural digital presence that matches the physical elegance and tactile precision of their luxury bath collections. XenForge engineered an editorial catalog experience with sub-second mobile page loads, smooth collection galleries (Cubix Prime), and a direct dealer inquiry funnel.
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://sanvo.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-black bg-white px-5 py-3 rounded-full hover:bg-white/90 transition-all shadow-md cursor-pointer"
                    >
                      <Globe size={14} className="text-black" />
                      <span>VISIT LIVE WEBSITE (SANVO.CO)</span>
                      <ExternalLink size={13} />
                    </a>
                    <Link
                      to={`/work/${sanvoProject.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-white px-4 py-3 rounded-full liquid-glass border border-white/10 hover:border-white/25 transition-all"
                    >
                      <span>Case Details</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-xl border border-white/15 overflow-hidden shadow-2xl relative group bg-black/60">
                    <div className="bg-[#14151a] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                      <span className="flex items-center gap-2 text-emerald-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        https://sanvo.co
                      </span>
                      <span className="text-[10px] uppercase text-white/40">LIVE PRODUCTION SITE</span>
                    </div>

                    <a
                      href="https://sanvo.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-[16/8] sm:aspect-[16/7.5] overflow-hidden bg-black"
                    >
                      <img
                        src="/assets/images/sanvo_bath_fixtures_preview.png"
                        alt="Sanvo Bath Fixtures Live Website"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-xs font-mono text-white bg-black/80 px-3 py-1 rounded-md border border-white/20 flex items-center gap-1.5">
                          <span>Open sanvo.co</span>
                          <ExternalLink size={12} />
                        </span>
                      </div>
                    </a>

                    <div className="px-4 py-2 bg-[#101115] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40">
                      <span>REACT / NEXT.JS / TAILWIND CSS</span>
                      <span className="text-emerald-400">ACTIVE CLIENT PRODUCTION</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 02: FEATURED MOBILE APPLICATION: EstateFlow Builder CRM & Inventory */}
        {(activeFilter === 'All' || activeFilter === 'App Development') && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest flex items-center gap-2">
                <Smartphone size={14} className="text-emerald-400" />
                FLAGSHIP MOBILE PRODUCTION PLATFORM
              </span>
              <Link
                to="/services/app-development"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>App Development Practice</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="liquid-glass rounded-2xl p-6 sm:p-10 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center gap-1.5">
                      <Smartphone size={12} />
                      Native iOS & Android App
                    </span>
                    <span className="text-xs font-mono text-white/60 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      Real Estate Builders & Brokers
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-medium text-white tracking-tight">
                    EstateFlow Mobile CRM & Inventory
                  </h2>
                  <p className="text-sm sm:text-base text-white/60 mt-2 mb-6 font-normal">
                    Enterprise Real Estate Lead Conversion Funnel & Multi-City Inventory Management
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                      <div className="flex items-center gap-1.5 text-white/50 text-[11px] mb-1">
                        <TrendingUp size={12} className="text-emerald-400" />
                        <span>DEAL FUNNEL</span>
                      </div>
                      <div className="text-base font-medium text-white">7 Conversion Stages</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                      <div className="flex items-center gap-1.5 text-white/50 text-[11px] mb-1">
                        <Building2 size={12} className="text-blue-400" />
                        <span>INVENTORY</span>
                      </div>
                      <div className="text-base font-medium text-white">Multi-City Assets</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 col-span-2 sm:col-span-1">
                      <div className="flex items-center gap-1.5 text-white/50 text-[11px] mb-1">
                        <Smartphone size={12} className="text-amber-400" />
                        <span>OFFLINE SYNC</span>
                      </div>
                      <div className="text-base font-medium text-white">SQLite Engine</div>
                    </div>
                  </div>

                  <p className="text-sm text-white/75 leading-relaxed font-normal mb-6">
                    Custom built for property developers and on-ground sales teams. Enables builders to capture leads in 1 tap, track prospects through an interactive conversion funnel (New to Closed Won), manage multi-crore property inventory across Mumbai, Bengaluru & Hyderabad, and triage inquiries with on-device AI.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to={`/work/${appProject.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-medium text-black bg-white px-5 py-3 rounded-full hover:bg-white/90 transition-all shadow-md cursor-pointer"
                    >
                      <Smartphone size={13} className="text-black" />
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowUpRight size={13} />
                    </Link>
                    <Link
                      to="/services/app-development"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-white px-4 py-3 rounded-full liquid-glass border border-white/10 hover:border-white/25 transition-all"
                    >
                      <span>App Development Details</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Dual Screen Previews */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl border border-white/15 overflow-hidden shadow-2xl bg-black/60 p-4 sm:p-6">
                    <div className="bg-[#14151a] -mx-4 -mt-4 sm:-mx-6 sm:-mt-6 px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50 mb-4">
                      <span className="flex items-center gap-2 text-emerald-400 font-medium">
                        <Smartphone size={13} />
                        ESTATEFLOW MOBILE UI
                      </span>
                      <span className="text-[10px] uppercase text-white/40">DASHBOARD & INVENTORY</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 items-center">
                      {/* Phone 1: Dashboard */}
                      <div className="rounded-2xl p-2 bg-[#181a20] border border-white/20 shadow-lg">
                        <div className="w-14 h-3 bg-black rounded-full mx-auto mb-1.5" />
                        <div className="rounded-xl overflow-hidden aspect-[9/18.5] bg-black">
                          <img
                            src="/assets/images/realestate_crm_mobile_dashboard.png"
                            alt="EstateFlow Mobile Dashboard & Funnel"
                            className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-300"
                          />
                        </div>
                        <div className="mt-2 text-center text-[10px] font-mono text-white/60">
                          Builder Pipeline
                        </div>
                      </div>

                      {/* Phone 2: Properties */}
                      <div className="rounded-2xl p-2 bg-[#181a20] border border-white/20 shadow-lg">
                        <div className="w-14 h-3 bg-black rounded-full mx-auto mb-1.5" />
                        <div className="rounded-xl overflow-hidden aspect-[9/18.5] bg-black">
                          <img
                            src="/assets/images/realestate_crm_mobile_properties.png"
                            alt="EstateFlow Mobile Property Inventory"
                            className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-300"
                          />
                        </div>
                        <div className="mt-2 text-center text-[10px] font-mono text-white/60">
                          Property Inventory
                        </div>
                      </div>
                    </div>

                    <div className="-mx-4 -mb-4 sm:-mx-6 sm:-mb-6 mt-4 px-4 py-2 bg-[#101115] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40">
                      <span>REACT NATIVE / TAILWIND / SQLITE</span>
                      <span className="text-emerald-400">PRODUCTION DEPLOYMENT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 03: FEATURED AI AUTOMATION: Shopify CRM + Marketing Automation (9 Workflows) */}
        {(activeFilter === 'All' || activeFilter === 'AI Automation') && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest flex items-center gap-2">
                <Workflow size={14} className="text-purple-400" />
                FLAGSHIP ENTERPRISE AUTOMATION SYSTEM
              </span>
              <Link
                to="/services/ai-automation"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>AI Automation Practice</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="liquid-glass rounded-2xl p-6 sm:p-10 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-purple-400 px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/20 flex items-center gap-1.5">
                      <Workflow size={12} />
                      9 Live Production Workflows
                    </span>
                    <span className="text-xs font-mono text-white/60 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      Shopify + WhatsApp + OpenAI + Sheets
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-medium text-white tracking-tight">
                    Shopify CRM + Marketing Automation
                  </h2>
                  <p className="text-sm sm:text-base text-white/60 mt-2 mb-6 font-normal">
                    End-to-End E-Commerce Operations: Webhook Sync, Live Tracking Bot & AI Support
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                      <div className="flex items-center gap-1.5 text-white/50 text-[11px] mb-1">
                        <Workflow size={12} className="text-purple-400" />
                        <span>PIPELINES</span>
                      </div>
                      <div className="text-base font-medium text-white">9 Live Workflows</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                      <div className="flex items-center gap-1.5 text-white/50 text-[11px] mb-1">
                        <Bot size={12} className="text-cyan-400" />
                        <span>AI TRIAGE</span>
                      </div>
                      <div className="text-base font-medium text-white">OpenAI + Slack</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 col-span-2 sm:col-span-1">
                      <div className="flex items-center gap-1.5 text-white/50 text-[11px] mb-1">
                        <TrendingUp size={12} className="text-emerald-400" />
                        <span>CART RECOVERY</span>
                      </div>
                      <div className="text-base font-medium text-white">1h & 23h Triggers</div>
                    </div>
                  </div>

                  <p className="text-sm text-white/75 leading-relaxed font-normal mb-6">
                    A battle-tested production automation pipeline connecting Shopify store webhooks, WhatsApp Cloud API, and Google Sheets CRM. Handles new order processing, automated COD verification, live order tracking lookups, abandoned cart sequences, and OpenAI-powered customer service with seamless Slack escalation.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to={`/work/${automationProject.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-medium text-black bg-white px-5 py-3 rounded-full hover:bg-white/90 transition-all shadow-md cursor-pointer"
                    >
                      <Workflow size={13} className="text-black" />
                      <span>EXPLORE ARCHITECTURE</span>
                      <ArrowUpRight size={13} />
                    </Link>
                    <Link
                      to="/services/ai-automation"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-white px-4 py-3 rounded-full liquid-glass border border-white/10 hover:border-white/25 transition-all"
                    >
                      <span>Service Specifications</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Workflow Canvas Preview */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl border border-white/15 overflow-hidden shadow-2xl bg-black/80">
                    <div className="bg-[#14151a] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                      <span className="flex items-center gap-2 text-purple-400 font-medium">
                        <Workflow size={13} />
                        SHOPIFY CRM AUTOMATION CANVAS
                      </span>
                      <span className="text-[10px] uppercase text-emerald-400">9 ACTIVE WORKFLOWS</span>
                    </div>

                    <Link to={`/work/${automationProject.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-black group p-3">
                      <img
                        src="/assets/images/shopify_marketing_ai_automation_workflows.png"
                        alt="Shopify CRM Marketing Automation 9 Workflows"
                        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-xs font-mono text-white bg-black/80 px-3 py-1 rounded-md border border-white/20 flex items-center gap-1.5">
                          <span>View Full 9-Workflow Breakdown</span>
                          <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </Link>

                    <div className="px-4 py-2 bg-[#101115] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40">
                      <span>N8N / MAKE / OPENAI / WHATSAPP API</span>
                      <span className="text-purple-400">VERIFIED ARCHITECTURE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 04: FEATURED DIGITAL MARKETING: Makrand Honey D2C Brand Strategy */}
        {(activeFilter === 'All' || activeFilter === 'Marketing') && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest flex items-center gap-2">
                <Instagram size={14} className="text-amber-400" />
                FLAGSHIP D2C BRAND & SOCIAL STRATEGY
              </span>
              <a
                href="https://www.instagram.com/makrandhoney/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>@makrandhoney on Instagram</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="liquid-glass rounded-2xl p-6 sm:p-10 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center gap-1.5">
                      <Instagram size={12} />
                      D2C Brand Architecture
                    </span>
                    <span className="text-xs font-mono text-white/60 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      Organic Wellness & Purity
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-medium text-white tracking-tight">
                    Makrand (मकरंद) Honey
                  </h2>
                  <p className="text-sm sm:text-base text-white/60 mt-2 mb-6 font-normal">
                    &ldquo;The Untouched Honey&rdquo; — Brand Narrative, Bio Conversion & 5-Pillar Highlights
                  </p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/75 leading-relaxed mb-6 space-y-2">
                    <div className="text-white font-mono text-[11px] uppercase tracking-wider mb-1">
                      Conversion-Tuned Bio Architecture:
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-white/80">
                      <div>🐝 Real Beekeepers</div>
                      <div>🔬 Batch Tested, No BS</div>
                      <div>🗓️ Built for Daily Ritual</div>
                      <div className="text-amber-300">👇 www.makrandhoney.in</div>
                    </div>
                  </div>

                  <p className="text-sm text-white/75 leading-relaxed font-normal mb-6">
                    XenForge structured Makrand&apos;s complete D2C social footprint, transforming casual Instagram visitors into regular buyers through a 5-pillar story highlights system (Buzz & Bake, Brand Story, Bee-Fact, Skin & Nectar, Buzz Academy) and an authoritative organic brand narrative.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.instagram.com/makrandhoney/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-black bg-white px-5 py-3 rounded-full hover:bg-white/90 transition-all shadow-md cursor-pointer"
                    >
                      <Instagram size={13} className="text-black" />
                      <span>VIEW @MAKRANDHONEY</span>
                      <ExternalLink size={13} />
                    </a>
                    <Link
                      to={`/work/${marketingProject.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-white px-4 py-3 rounded-full liquid-glass border border-white/10 hover:border-white/25 transition-all"
                    >
                      <span>Case Details</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Instagram Profile Mobile Mockup */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl border border-white/15 overflow-hidden shadow-2xl bg-black/60 p-4 sm:p-6 flex flex-col items-center">
                    <div className="w-full bg-[#14151a] -mx-4 -mt-4 sm:-mx-6 sm:-mt-6 px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50 mb-4">
                      <span className="flex items-center gap-2 text-amber-400 font-medium">
                        <Instagram size={13} />
                        INSTAGRAM PROFILE & HIGHLIGHTS
                      </span>
                      <span className="text-[10px] uppercase text-white/40">D2C ORGANIC CONVERSION</span>
                    </div>

                    <div className="max-w-[320px] w-full rounded-2xl p-2 bg-[#181a20] border border-white/20 shadow-lg">
                      <div className="w-14 h-3 bg-black rounded-full mx-auto mb-1.5" />
                      <div className="rounded-xl overflow-hidden bg-black">
                        <img
                          src="/assets/images/makrand_honey_instagram_marketing.png"
                          alt="Makrand Honey Instagram Profile"
                          className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                      <div className="mt-2 text-center text-[10px] font-mono text-amber-300">
                        @makrandhoney · www.makrandhoney.in
                      </div>
                    </div>

                    <div className="w-full -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 mt-4 px-4 py-2 bg-[#101115] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40">
                      <span>ORGANIC SOCIAL / STORY FUNNELS</span>
                      <span className="text-amber-400">LIVE D2C BRAND</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 05: FEATURED VIDEO EDITOR WORK: Techno Gamerz Car Business (#169) */}
        {(activeFilter === 'All' || activeFilter === 'Video') && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest flex items-center gap-2">
                <Flame size={14} className="text-amber-400" />
                FEATURED VIDEO EDITING PROJECT · 26.85M+ VIEWS
              </span>
              <a
                href="https://ytjobs.co/talent/vitrine/238018"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Verified on YTJobs</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="liquid-glass rounded-2xl p-6 sm:p-10 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center gap-1.5">
                      <Flame size={12} />
                      26.85M Views · 826K Likes
                    </span>
                    <span className="text-xs font-mono text-white/60 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      Techno Gamerz (40M+ Subs)
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-medium text-white tracking-tight">
                    I Started My Own Car Business | GTA 5 #169
                  </h2>
                  <p className="text-sm sm:text-base text-white/60 mt-2 mb-5 font-normal">
                    Flagship Long-Form Retention Editing & Visual Storytelling
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                      <div className="flex items-center gap-1.5 text-white/50 text-[11px] mb-1">
                        <Eye size={12} className="text-amber-400" />
                        <span>TOTAL WATCHES</span>
                      </div>
                      <div className="text-lg font-medium text-white">26.85 Million+</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                      <div className="flex items-center gap-1.5 text-white/50 text-[11px] mb-1">
                        <ThumbsUp size={12} className="text-emerald-400" />
                        <span>ENGAGED LIKES</span>
                      </div>
                      <div className="text-lg font-medium text-white">826,000+</div>
                    </div>
                  </div>

                  <p className="text-sm text-white/75 leading-relaxed font-normal mb-6">
                    Edited by our lead video editor, this episode commands top-tier retention curves through kinetic pacing, custom comedic audio mixing, sound FX layering, dynamic punch-in zooms, and narrative tension designed specifically to hold millions of viewers.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://ytjobs.co/talent/vitrine/238018"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-black bg-white px-5 py-3 rounded-full hover:bg-white/90 transition-all shadow-md cursor-pointer"
                    >
                      <Play size={13} className="fill-black" />
                      <span>VIEW PROJECT ON YTJOBS</span>
                      <ExternalLink size={13} />
                    </a>
                    <Link
                      to={`/work/${videoProject.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-white px-4 py-3 rounded-full liquid-glass border border-white/10 hover:border-white/25 transition-all"
                    >
                      <span>Breakdown</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="rounded-xl border border-white/15 overflow-hidden shadow-2xl relative group bg-black/60">
                    <div className="bg-[#14151a] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                      <span className="flex items-center gap-2 text-amber-400 font-medium">
                        <Film size={13} />
                        YOUTUBE GAMEPLAY #169
                      </span>
                      <span className="text-[10px] uppercase text-emerald-400 font-medium">VERIFIED EDITOR CREDIT</span>
                    </div>

                    <a
                      href="https://ytjobs.co/talent/vitrine/238018"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-[16/9] overflow-hidden bg-black"
                    >
                      <img
                        src="/assets/images/gta5_car_business_thumbnail.png"
                        alt="GTA 5 Billionaire Car Business YouTube Video"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
                        <div className="flex justify-end">
                          <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono text-amber-300 border border-amber-300/30">
                            26.85M Views
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-white/90 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/15 flex items-center gap-2">
                            <Play size={12} className="text-white fill-white" />
                            <span>Click to View on YTJobs Vitrine</span>
                          </span>
                        </div>
                      </div>
                    </a>

                    <div className="px-4 py-2.5 bg-[#101115] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                      <span>PREMIERE PRO / AFTER EFFECTS</span>
                      <span className="text-white/70">826.11K LIKES</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 03: DEDICATED LEAD EDITOR VITRINE SHOWCASE & LINK ("hamre editor ka link mention krdena for more work esa kuch krke sahi english me") */}
        <section className="mb-20">
          <div className="liquid-glass rounded-2xl p-8 sm:p-12 border border-white/15 bg-gradient-to-br from-white/[0.04] via-black to-black shadow-2xl relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-500/[0.08] rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-white mb-4">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span>VERIFIED TALENT VITRINE ON YTJOBS</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
                  Explore Our Lead Editor&apos;s Full Video Portfolio
                </h2>

                <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed mb-6">
                  Want to explore more of our high-retention video edits? Browse <strong>87+ published video projects</strong>, viral Shorts, and documentary-style edits with <strong>over 150 million combined views</strong> on our editor&apos;s verified YTJobs vitrine.
                </p>

                {/* Big Stats Row from the Screenshot */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">87+</div>
                    <div className="text-[11px] sm:text-xs font-mono text-white/50 uppercase mt-0.5">
                      Videos Produced
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-amber-300 tracking-tight">+150M</div>
                    <div className="text-[11px] sm:text-xs font-mono text-white/50 uppercase mt-0.5">
                      Total Views
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">+6M</div>
                    <div className="text-[11px] sm:text-xs font-mono text-white/50 uppercase mt-0.5">
                      Likes Generated
                    </div>
                  </div>
                </div>

                {/* Direct CTA Link to the Editor's YTJobs profile */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://ytjobs.co/talent/vitrine/238018"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-all inline-flex items-center gap-2 shadow-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>View Complete Video Portfolio on YTJobs</span>
                    <ExternalLink size={14} />
                  </a>

                  <Link
                    to="/contact"
                    className="liquid-glass text-white text-xs sm:text-sm font-medium px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Hire for Your YouTube Channel</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Visual Preview of the Vitrine Grid */}
              <div className="lg:col-span-5">
                <a
                  href="https://ytjobs.co/talent/vitrine/238018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/15 overflow-hidden shadow-2xl relative group bg-black/80"
                >
                  <div className="bg-[#14151a] px-4 py-2 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                    <span className="flex items-center gap-2 text-white">
                      <span>ytjobs.co/talent/vitrine/238018</span>
                    </span>
                    <span className="text-[10px] text-amber-400">87 VIDEOS · +150M VIEWS</span>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <img
                      src="/assets/images/ytjobs_editor_portfolio.png"
                      alt="Editor Portfolio on YTJobs"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-5">
                      <div className="w-full bg-black/80 backdrop-blur-md rounded-xl p-3 border border-white/15 flex items-center justify-between text-xs font-mono text-white">
                        <span>Click to open live YTJobs Vitrine</span>
                        <ExternalLink size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Page CTA */}
        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3">
            Ready to build a high-performance website or scale your video content?
          </h3>
          <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
            Tell us about your brand. We&apos;ll research your audience and deliver a custom roadmap within 48 hours.
          </p>
          <Link
            to="/audit"
            className="bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            <Sparkles size={15} />
            <span>Get a Free Business Audit</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
