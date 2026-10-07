import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projectsData';

type FilterType = 'All' | 'Website' | 'AI Automation' | 'Marketing' | 'Video';

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
            SAMPLE WORK SHOWCASE & CONCEPTS
          </span>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6">
            WHAT WE BUILD.
          </h1>
          <p className="text-base sm:text-xl text-white/70 max-w-2xl font-normal leading-relaxed">
            Honest sample concepts and prototypes engineered by XenForge. Before you pay a single
            rupee, we study your business and create a tailored preview of your solution.
          </p>

          {/* Category Filter Controls */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {(['All', 'Website', 'AI Automation', 'Marketing', 'Video'] as FilterType[]).map(
              (filter) => (
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
              )
            )}
          </div>
        </div>

        {/* Featured Sample Concept Highlight */}
        {activeFilter === 'All' && (
          <div className="mb-16">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
              FEATURED SAMPLE CONCEPT
            </span>
            <Link
              to={`/work/${featured.slug}`}
              className="group block liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="text-xs font-mono text-emerald-400 mb-3">
                    {featured.conceptType}
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-medium text-white group-hover:text-white/90 tracking-tight">
                    {featured.title}
                  </h2>
                  <p className="text-lg text-white/50 mt-1 mb-4">{featured.subtitle}</p>

                  <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/75 leading-relaxed">
                    <strong className="text-white block font-mono text-[11px] uppercase mb-1">
                      Problem It Solves:
                    </strong>
                    {featured.problemSolves}
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-white group-hover:translate-x-1 transition-transform">
                      <span>VIEW CONCEPT ARCHITECTURE</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between aspect-[16/10]">
                    <div className="flex items-center justify-between text-[11px] font-mono text-white/40">
                      <span>{featured.slug}.internal</span>
                      <span>XENFORGE CONCEPT</span>
                    </div>
                    <div className="my-auto text-center">
                      <span className="font-mono text-xs text-white/50 block mb-1">
                        DESIGNED BY XENFORGE
                      </span>
                      <p className="text-sm text-white/90 max-w-xs mx-auto">
                        Automated WhatsApp triage & calendar sync eliminating delayed responses.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-white/30 text-right">
                      REACT / TAILWIND / WHATSAPP API
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
                <div className="rounded-xl bg-gradient-to-br from-white/10 via-black to-black border border-white/10 p-6 aspect-[16/9] mb-6 flex flex-col justify-between">
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
                    XENFORGE SAMPLE
                  </div>
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
            Want to see a custom sample for your business?
          </h3>
          <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
            Tell us about your brand. We&apos;ll research your competitors and send you a real mockup within 48 hours.
          </p>
          <Link
            to="/audit"
            className="bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            <Sparkles size={15} />
            <span>Get a Free Business Audit & Sample</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
