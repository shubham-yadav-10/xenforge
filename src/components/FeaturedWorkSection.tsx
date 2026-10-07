import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function FeaturedWorkSection() {
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
              06 / SAMPLE WORK SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              WHAT WE BUILD
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-sm">
            Real sample concepts designed for growing businesses. Honest solutions, clear results.
          </p>
        </div>

        {/* Project Grid with Honest Concept Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className="group liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual mockup frame */}
                <div className="rounded-xl bg-gradient-to-br from-white/10 via-black/80 to-black border border-white/10 p-5 aspect-[16/10] mb-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/40 border-b border-white/5 pb-2.5">
                    <span className="truncate max-w-[240px] text-white/60">{project.conceptType}</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white/70">
                      {project.category}
                    </span>
                  </div>

                  <div className="text-center my-auto py-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-1">
                      {project.businessType}
                    </span>
                    <h3 className="text-2xl font-medium text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/50 mt-1 max-w-xs mx-auto">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px] text-white/30 pt-2 border-t border-white/5">
                    <span>STATUS: DESIGN CONCEPT</span>
                    <span>XENFORGE</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-emerald-400 mb-2">
                  {project.conceptType}
                </div>

                <h3 className="text-2xl font-medium tracking-tight text-white group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 font-normal mt-0.5">
                  {project.subtitle}
                </p>

                {/* The 2 lines on the problem it solves */}
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

        {/* Bottom Banner */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-white/40">
            Want to see what we would build for your brand?
          </p>
          <Link
            to="/audit"
            className="liquid-glass text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
          >
            <span>Request a Free Custom Sample for Your Business</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
