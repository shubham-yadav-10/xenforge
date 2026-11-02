import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Globe, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const nextProject =
    projectsData.find((p) => p.slug === project.nextProjectSlug) || projectsData[0];

  return (
    <article className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>BACK TO ALL SAMPLES</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="pb-12 border-b border-white/10 mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-xs font-mono text-emerald-400 border border-white/10">
              <Sparkles size={12} />
              <span>{project.conceptType}</span>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-black bg-white px-4 py-2 rounded-full hover:bg-white/90 transition-all shadow-md font-medium"
              >
                <Globe size={13} className="text-emerald-600" />
                <span>{project.externalLinkText || `Visit Project (${project.liveUrl.replace('https://', '')})`}</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-white/60 font-normal max-w-2xl leading-relaxed mb-10">
            {project.subtitle}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 text-xs font-mono">
            <div>
              <span className="text-white/40 uppercase tracking-widest block mb-1">
                Target Business
              </span>
              <span className="text-white/90">{project.businessType}</span>
            </div>
            <div>
              <span className="text-white/40 uppercase tracking-widest block mb-1">
                Services
              </span>
              <span className="text-white/90">{project.services.join(', ')}</span>
            </div>
            <div>
              <span className="text-white/40 uppercase tracking-widest block mb-1">
                Status
              </span>
              <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.isClientProject ? 'Live Production Platform' : 'XenForge Prototype Concept'}
              </span>
            </div>
            <div>
              <span className="text-white/40 uppercase tracking-widest block mb-1">
                Agency
              </span>
              <span className="text-white/90">XenForge (2026)</span>
            </div>
          </div>
        </header>

        {/* Visual Mockup Screen / Canvas Frame */}
        <div className="mb-20 rounded-2xl liquid-glass border border-white/10 p-4 sm:p-8 overflow-hidden">
          <div className="rounded-xl border border-white/15 overflow-hidden shadow-2xl bg-black/60">
            {/* Browser Header Bar */}
            <div className="bg-[#14151a] px-4 py-3 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 mr-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {project.liveUrl || `https://${project.slug}.sample.xenforge.com`}
                </span>
              </div>
              <span className="text-[10px] uppercase text-white/40">
                {project.isClientProject ? 'LIVE PRODUCTION CLIENT' : 'VERIFIED CONCEPT'}
              </span>
            </div>

            {/* Project Interface / Mockup Display */}
            {project.slug === 'estateflow-real-estate-crm-app' ? (
              <div className="p-6 sm:p-10 bg-black flex flex-col items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-2xl w-full">
                  {/* Phone 1: Dashboard */}
                  <div className="rounded-3xl p-3 bg-[#181a20] border-2 border-white/20 shadow-2xl">
                    <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2" />
                    <div className="rounded-2xl overflow-hidden aspect-[9/18.5] bg-black">
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} Dashboard Screen`}
                        className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-3 text-center text-xs font-mono text-emerald-400 font-medium">
                      01 / Builder Dashboard & Deal Funnel
                    </div>
                  </div>

                  {/* Phone 2: Properties */}
                  <div className="rounded-3xl p-3 bg-[#181a20] border-2 border-white/20 shadow-2xl">
                    <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2" />
                    <div className="rounded-2xl overflow-hidden aspect-[9/18.5] bg-black">
                      <img
                        src={project.secondaryImageUrl}
                        alt={`${project.title} Property Inventory Screen`}
                        className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-3 text-center text-xs font-mono text-blue-400 font-medium">
                      02 / Multi-City Property Inventory
                    </div>
                  </div>
                </div>
              </div>
            ) : project.slug === 'shopify-crm-ai-marketing-automation' ? (
              <div className="p-4 sm:p-8 bg-black flex flex-col items-center">
                <div className="w-full max-w-4xl space-y-4">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60 p-2">
                    <img
                      src="/assets/images/shopify_automation_header_badge.png"
                      alt="Shopify CRM 9 Workflows Badge"
                      className="w-full h-auto object-contain max-h-16"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-white/15 bg-black p-4">
                    <img
                      src={project.imageUrl}
                      alt="Shopify Marketing Automation 9 Workflows Diagram"
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
              </div>
            ) : project.slug === 'makrand-honey-brand-marketing' ? (
              <div className="p-6 sm:p-10 bg-black flex flex-col items-center">
                <div className="max-w-[340px] w-full rounded-3xl p-3 bg-[#181a20] border-2 border-white/20 shadow-2xl">
                  <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2" />
                  <div className="rounded-2xl overflow-hidden bg-black">
                    <img
                      src={project.imageUrl}
                      alt="Makrand Honey Instagram Profile and Highlights"
                      className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-3 text-center text-xs font-mono text-amber-300">
                    @makrandhoney · D2C Organic Brand Strategy
                  </div>
                </div>
              </div>
            ) : project.imageUrl ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} live interface`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ) : (
              <div className="p-8 sm:p-14 text-center my-auto aspect-[16/9] flex flex-col justify-center bg-gradient-to-br from-white/10 via-black to-[#0e1015]">
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
                  {project.businessType}
                </span>
                <h2 className="text-3xl sm:text-5xl font-medium text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm text-white/60 mt-2 max-w-md mx-auto">
                  {project.subtitle}
                </p>
              </div>
            )}

            {/* Browser Footer Meta */}
            <div className="px-4 py-3 bg-[#111215] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-white/50">
              <span>STACK: {project.technologies.join(' · ')}</span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:text-emerald-400 transition-colors font-medium"
                >
                  <Globe size={13} className="text-emerald-400" />
                  <span>{project.externalLinkText || `Launch Live (${project.liveUrl.replace('https://', '')})`}</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Editorial Content Sections */}
        <div className="space-y-16 max-w-4xl">
          {/* Overview */}
          <section>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
              01 / OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">
              The Concept Brief
            </h2>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-normal">
              {project.overview}
            </p>
          </section>

          {/* Problem It Solves */}
          <section className="pt-12 border-t border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
              02 / THE PROBLEM IT SOLVES
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">
              Where Small Businesses Lose Customers
            </h2>
            <div className="p-6 rounded-xl liquid-glass border border-white/10 text-base text-white/80 leading-relaxed font-normal">
              {project.problemSolves}
            </div>
          </section>

          {/* Approach & Solution */}
          <section className="pt-12 border-t border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
              03 / HOW WE BUILT THE SOLUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">
              Design & Technical Architecture
            </h2>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-normal mb-6">
              {project.approach}
            </p>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-normal">
              {project.solution}
            </p>
          </section>

          {/* Technology */}
          <section className="pt-12 border-t border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
              04 / TECHNOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              Tools & Integrations
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl liquid-glass text-xs font-mono text-white/80 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Qualitative Results */}
          <section className="pt-12 border-t border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
              05 / EXPECTED OPERATIONAL IMPACT
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              Direct Customer Outcomes
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {project.qualitativeResults.map((result, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl liquid-glass border border-white/10 flex items-start gap-4"
                >
                  <CheckCircle2 size={18} className="text-white/60 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Next Project & CTA Navigation */}
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-1">
              NEXT SAMPLE CONCEPT
            </span>
            <Link
              to={`/work/${nextProject.slug}`}
              className="text-xl sm:text-2xl font-medium text-white hover:text-white/80 transition-colors inline-flex items-center gap-2 group"
            >
              <span>{nextProject.title}</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <Link
            to="/audit"
            className="bg-white text-black text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            <span>Get a Free Business Audit</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
