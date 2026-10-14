import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Zap } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projectsData';

export default function FeaturedWorkSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Website', 'AI Automation', 'Marketing', 'Video'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter(
          (p) => p.category === activeCategory || p.categories?.includes(activeCategory as any)
        );

  return (
    <section
      id="work"
      className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[400px] bg-purple-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass text-xs font-mono text-white/70 mb-4 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>06 · SAMPLE WORK SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Engineered solutions for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-white/70">
                ambitious brands.
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/70 max-w-md font-normal leading-relaxed">
            High-converting websites, autonomous AI pipelines, and digital products engineered
            with meticulous craft, speed, and real business results.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 p-1 rounded-xl bg-white/[0.03] border border-white/10 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat === 'All' ? 'All Deployments' : cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project: ProjectItem) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className="group liquid-glass rounded-3xl p-7 sm:p-9 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Visual Browser Preview Mockup */}
                <div className="rounded-2xl bg-gradient-to-b from-white/[0.08] via-black/90 to-black border border-white/10 p-5 aspect-[16/10] mb-8 flex flex-col justify-between overflow-hidden relative group-hover:border-white/20 transition-all">
                  {/* Browser chrome header */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pb-3 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="ml-2 text-white/50 text-[10px]">{project.slug}.xenforge.app</span>
                    </div>

                    <span className="text-xs font-mono text-white/60">
                      {project.category}
                    </span>
                  </div>

                  {/* Center Showcase Visual */}
                  <div className="my-auto text-center py-4 relative z-10">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 block mb-1">
                      {project.businessType}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight group-hover:scale-[1.02] transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/60 mt-1 max-w-sm mx-auto">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Card bottom telemetry */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/40 pt-2.5 border-t border-white/5">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Zap size={11} />
                      Sub-second Edge Speed
                    </span>
                    <span>XenForge Production</span>
                  </div>
                </div>

                {/* Content Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-white/50">
                      {project.conceptType}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-mono text-white group-hover:text-amber-300 transition-colors">
                      <span>View Case Study</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed font-normal">
                    {project.problemSolves}
                  </p>

                  {/* Services / Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.services.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono bg-white/5 border border-white/5 px-2 py-0.5 rounded text-white/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Deliverables */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                <span>Stack: {project.technologies.slice(0, 3).join(', ')}</span>
                <span className="text-white/30 group-hover:text-white transition-colors">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center pt-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full liquid-glass text-sm font-medium text-white hover:bg-white/10 transition-colors border border-white/15 cursor-pointer"
          >
            <span>Explore All Client Work & Case Studies</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
