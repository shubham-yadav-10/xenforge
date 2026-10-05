import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

type FilterType = 'All' | 'Web' | 'Apps' | 'AI' | 'Growth' | 'Video';

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
            PORTFOLIO / SELECTED WORK
          </span>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6">
            DIGITAL SYSTEMS & PRODUCTS
          </h1>
          <p className="text-base sm:text-xl text-white/60 max-w-2xl font-normal leading-relaxed">
            Real production architectures built for businesses across web development,
            mobile products, applied AI automation, and performance marketing.
          </p>

          {/* Category Filter Controls */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {(['All', 'Web', 'Apps', 'AI', 'Growth', 'Video'] as FilterType[]).map(
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

        {/* Featured Case Study Highlight (shown when All or Apps or AI is active) */}
        {activeFilter === 'All' && (
          <div className="mb-16">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
              FEATURED CASE STUDY
            </span>
            <Link
              to={`/work/${featured.slug}`}
              className="group block liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 text-xs font-mono text-white/50 mb-3">
                    <span>{featured.industry}</span>
                    <span>·</span>
                    <span>{featured.services.join(' / ')}</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-medium text-white group-hover:text-white/90 tracking-tight">
                    {featured.title}
                  </h2>
                  <p className="text-lg text-white/50 mt-1 mb-4">{featured.subtitle}</p>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">
                    {featured.overview}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-white group-hover:translate-x-1 transition-transform">
                      <span>VIEW FULL CASE STUDY</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between aspect-[16/10]">
                    <div className="flex items-center justify-between text-[11px] font-mono text-white/40">
                      <span>{featured.slug}.app</span>
                      <span>ACTIVE PIPELINE</span>
                    </div>
                    <div className="my-auto text-center">
                      <span className="font-mono text-xs text-white/50 block mb-1">
                        OUTCOME HIGHLIGHT
                      </span>
                      <p className="text-sm text-white/90 max-w-xs mx-auto">
                        Automated qualification dialogue & calendar sync for zero after-hours lead loss.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-white/30 text-right">
                      NEXT.JS / FASTAPI / POSTGRES
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
                <div className="rounded-xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-6 aspect-[16/9] mb-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span>{project.slug}</span>
                    <span>{project.category}</span>
                  </div>
                  <div className="text-center my-auto">
                    <span className="text-xs font-mono text-white/40 uppercase block mb-1">
                      {project.industry}
                    </span>
                    <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                  </div>
                  <div className="text-[10px] font-mono text-white/30 text-right">
                    FORGE PRODUCTION
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-2">
                  <span>{project.industry}</span>
                  <span>·</span>
                  <span>{project.category}</span>
                </div>

                <h3 className="text-2xl font-medium text-white group-hover:text-white/90 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 font-normal mt-0.5">
                  {project.subtitle}
                </p>

                <p className="text-sm text-white/70 leading-relaxed mt-4 line-clamp-3">
                  {project.overview}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/40">
                  {project.technologies.slice(0, 3).join(' · ')}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-white group-hover:translate-x-1 transition-transform">
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Page CTA */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3">
            Want to see how we can build for your business?
          </h3>
          <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
            We will discuss your requirements, propose an architectural plan, and outline a fixed timeline.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors inline-block"
          >
            Start a Project Inquiry
          </Link>
        </div>
      </div>
    </div>
  );
}
