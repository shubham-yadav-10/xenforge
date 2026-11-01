import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Globe, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';

type FilterType = 'All' | 'Website' | 'App Development' | 'AI Automation' | 'Marketing' | 'Video';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.categories.includes(activeFilter));

  const featured = projectsData[0];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        {/* Page Introduction */}
        <div className="mb-16 pb-8 border-b border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            PORTFOLIO & CASE CONCEPTS
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-6">
            WHAT WE BUILD.
          </h1>
          <p className="text-base sm:text-xl text-white/70 max-w-2xl font-normal leading-relaxed">
            Case studies, systems and prototypes engineered by XenForge. Before you commit any investment,
            we study your business and create a tailored preview of your solution.
          </p>

          {/* Category Filter Controls (Includes App Development) */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {(
              [
                'All',
                'Website',
                'App Development',
                'AI Automation',
                'Marketing',
                'Video',
              ] as FilterType[]
            ).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-white text-black font-semibold'
                    : 'liquid-glass text-white/70 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Highlight */}
        {activeFilter === 'All' && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                FEATURED CLIENT PROJECT
              </span>
              {featured.liveUrl && (
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Globe size={13} />
                  <span>sanvo.co</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>

            <div className="liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {featured.conceptType}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-medium text-white tracking-tight">
                    {featured.title}
                  </h2>
                  <p className="text-base sm:text-lg text-white/60 mt-1 mb-6">{featured.subtitle}</p>

                  <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/75 leading-relaxed">
                    <strong className="text-white block font-mono text-[11px] uppercase mb-1">
                      Problem It Solves:
                    </strong>
                    {featured.problemSolves}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to={`/work/${featured.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-medium text-black bg-white px-5 py-2.5 rounded-full hover:bg-white/90 transition-all shadow-md"
                    >
                      <span>VIEW FULL CASE STUDY</span>
                      <ArrowUpRight size={14} />
                    </Link>
                    {featured.liveUrl && (
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-white px-4 py-2.5 rounded-full liquid-glass border border-white/10 hover:border-white/25 transition-all"
                      >
                        <Globe size={13} className="text-emerald-400" />
                        <span>Visit Live Site ({featured.liveUrl.replace('https://', '')})</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-xl border border-white/15 overflow-hidden shadow-2xl relative group/screen bg-black/60">
                    <div className="bg-[#14151a] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                      <span className="flex items-center gap-2 text-emerald-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        https://sanvo.co
                      </span>
                      <span className="text-[10px] uppercase text-white/40">LIVE PRODUCTION</span>
                    </div>

                    {featured.imageUrl ? (
                      <div className="relative aspect-[16/10] overflow-hidden bg-black">
                        <img
                          src={featured.imageUrl}
                          alt={featured.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="p-6 sm:p-8 flex flex-col justify-between aspect-[16/11]">
                        <div className="my-auto py-4">
                          <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block mb-1">
                            WORKFORCE HOUSING OS
                          </span>
                          <h4 className="text-xl font-medium text-white mb-2">Sanvo Technologies</h4>
                          <p className="text-xs text-white/70 leading-relaxed">
                            Operating system unifying beds, compliance documents, quota, and payroll onto a single auditable ledger across Southeast Asia.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="px-4 py-2 bg-[#101115] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40">
                      <span>REACT / NEXT.JS / TAILWIND</span>
                      <span className="text-emerald-400">ACTIVE CLIENT PLATFORM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className="group liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="rounded-xl overflow-hidden border border-white/10 aspect-[16/9] mb-6 relative bg-black/60 group-hover:border-white/25 transition-colors">
                  {project.imageUrl ? (
                    <>
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4 pointer-events-none">
                        <div className="flex items-center justify-between text-[11px] font-mono text-white">
                          <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/15">
                            {project.isClientProject ? 'sanvo.co' : `${project.slug}`}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-md text-white font-medium">
                            {project.category}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-white/90">
                          <span className="text-emerald-400 font-medium">
                            {project.isClientProject ? '● LIVE CLIENT SITE' : '● CONCEPT PROTOTYPE'}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-6 h-full flex flex-col justify-between bg-gradient-to-br from-white/10 via-black to-black">
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/40">
                        <span className="truncate max-w-[200px]">{project.title}</span>
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white/70">
                          {project.category}
                        </span>
                      </div>
                      <div className="text-center my-auto">
                        <span className="text-xs font-mono text-white/40 uppercase block mb-1">
                          {project.businessType}
                        </span>
                        <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                      </div>
                      <div className="text-[10px] font-mono text-white/30 text-right">
                        XENFORGE CASE
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-xs font-mono text-emerald-400 mb-2">
                  {project.conceptType}
                </div>

                <h3 className="text-2xl font-medium text-white group-hover:text-white/90 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 font-normal mt-0.5">
                  {project.subtitle}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-1">
                    Problem It Solves
                  </span>
                  <p className="text-sm text-white/70 leading-relaxed font-normal">
                    {project.problemSolves}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/40">
                  {project.services.join(' · ')}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-white group-hover:translate-x-1 transition-transform">
                  <span>VIEW CONCEPT</span>
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Page CTA */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3">
            Want to see what we can engineer for your business?
          </h3>
          <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
            Tell us about your brand. We&apos;ll research your market and deliver an actionable growth audit within 48 hours.
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
