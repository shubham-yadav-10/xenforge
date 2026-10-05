import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function FeaturedWorkSection() {
  const leadProject = projectsData[0]; // EstateFlow
  const secondaryProjects = projectsData.slice(1);

  return (
    <section
      id="work"
      className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
              04 / FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-sm">
            A few projects across products, websites, AI and growth.
          </p>
        </div>

        {/* Lead Project: Full-width Editorial Layout */}
        <div className="mb-14">
          <Link
            to={`/work/${leadProject.slug}`}
            className="group block relative liquid-glass rounded-2xl overflow-hidden border border-white/10 p-6 sm:p-12 hover:border-white/20 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-white/50 mb-4">
                    <span>{leadProject.industry}</span>
                    <span>·</span>
                    <span>{leadProject.services.join(' / ')}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white group-hover:text-white/90 transition-colors">
                    {leadProject.title}
                  </h3>

                  <p className="text-base sm:text-lg text-white/50 font-normal mt-2">
                    {leadProject.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-white/70 leading-relaxed mt-6 max-w-lg">
                    {leadProject.overview}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {leadProject.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-white/60 px-2 py-0.5 rounded bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white group-hover:translate-x-1 transition-transform">
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Lead Project Visual Mockup Frame */}
              <div className="lg:col-span-6">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-black/60 border border-white/10 p-6 sm:p-8 aspect-[16/10] flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[11px] text-white/40">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white/40" />
                      estateflow.internal/pipeline
                    </span>
                    <span>LIVE PIPELINE ENGINE</span>
                  </div>

                  <div className="my-auto py-4">
                    <div className="text-xs font-mono text-white/40 uppercase mb-2">
                      Inbound Lead Triage
                    </div>
                    <div className="bg-black/40 rounded-lg p-4 border border-white/10 backdrop-blur-md">
                      <div className="flex items-center justify-between text-xs text-white/70 pb-2 border-b border-white/5">
                        <span className="font-medium text-white">42 Central Park West</span>
                        <span className="font-mono text-emerald-400 text-[10px]">VERIFIED BUYER</span>
                      </div>
                      <p className="text-xs text-white/60 mt-2">
                        WhatsApp dialogue complete. Showing confirmed for Thursday 14:00.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-2 border-t border-white/5">
                    <span>STATUS: ACTIVE DISPATCH</span>
                    <span>LATENCY: 42ms</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Secondary Projects Grid: Varied Heights & Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project, idx) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className={`group liquid-glass rounded-2xl overflow-hidden border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 ${
                idx % 2 === 1 ? 'md:translate-y-6' : ''
              }`}
            >
              <div>
                {/* Visual Canvas Representation */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-white/10 to-white/0 border border-white/10 p-5 aspect-[16/9] mb-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/40">
                    <span>{project.slug}.io</span>
                    <span>{project.category}</span>
                  </div>

                  <div className="text-center my-auto">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/50 block mb-1">
                      {project.industry}
                    </span>
                    <h4 className="text-2xl font-medium text-white tracking-tight">
                      {project.title}
                    </h4>
                  </div>

                  <div className="text-[10px] font-mono text-white/30 text-right">
                    FORGE / 2026
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-2">
                  <span>{project.industry}</span>
                </div>

                <h3 className="text-2xl font-medium tracking-tight text-white group-hover:text-white/90 transition-colors">
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

        {/* View All Work Link */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
            Case studies detailed with problem architectures and solutions
          </p>
          <Link
            to="/work"
            className="liquid-glass text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
          >
            <span>View Full Portfolio Index</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
