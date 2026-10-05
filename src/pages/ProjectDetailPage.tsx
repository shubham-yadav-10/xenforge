import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
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
            <span>BACK TO ALL WORK</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="pb-12 border-b border-white/10 mb-16">
          <div className="flex items-center gap-3 text-xs font-mono text-white/40 mb-4">
            <span>{project.industry}</span>
            <span>·</span>
            <span>CASE STUDY 0{project.id}</span>
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
                Industry
              </span>
              <span className="text-white/90">{project.industry}</span>
            </div>
            <div>
              <span className="text-white/40 uppercase tracking-widest block mb-1">
                Services
              </span>
              <span className="text-white/90">{project.services.join(', ')}</span>
            </div>
            <div>
              <span className="text-white/40 uppercase tracking-widest block mb-1">
                Deliverables
              </span>
              <span className="text-white/90">Web, API & Systems</span>
            </div>
            <div>
              <span className="text-white/40 uppercase tracking-widest block mb-1">
                Year
              </span>
              <span className="text-white/90">2026 Production</span>
            </div>
          </div>
        </header>

        {/* Visual Mockup Screen / Canvas Frame */}
        <div className="mb-20 rounded-2xl liquid-glass border border-white/10 p-6 sm:p-12 overflow-hidden">
          <div className="rounded-xl bg-gradient-to-br from-white/10 via-black to-black border border-white/10 p-6 sm:p-10 aspect-[16/9] flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[11px] text-white/40 border-b border-white/10 pb-3">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                https://{project.slug}.internal/workspace
              </span>
              <span>VERIFIED PRODUCTION DEPLOYMENT</span>
            </div>

            <div className="my-auto text-center">
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
                SYSTEM INTERFACE
              </span>
              <h2 className="text-3xl sm:text-5xl font-medium text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-white/60 mt-2 max-w-md mx-auto">
                {project.overview}
              </p>
            </div>

            <div className="flex items-center justify-between font-mono text-[10px] text-white/30 pt-3 border-t border-white/5">
              <span>LATENCY: ZERO-DRIFT</span>
              <span>STACK: {project.technologies.join(' · ')}</span>
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
              The Project Brief
            </h2>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-normal">
              {project.overview}
            </p>
          </section>

          {/* Challenge */}
          <section className="pt-12 border-t border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
              02 / THE CHALLENGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">
              Where The Friction Was
            </h2>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-normal">
              {project.challenge}
            </p>
          </section>

          {/* Approach & Solution */}
          <section className="pt-12 border-t border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
              03 / APPROACH & ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">
              How We Engineered The Solution
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
              The Production Stack
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

          {/* Results (Strictly qualitative & verified, no fake stats) */}
          <section className="pt-12 border-t border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
              05 / PRODUCTION OUTCOMES
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              Operational Changes
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {project.qualitativeResults.map((result, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl liquid-glass border border-white/10 flex items-start gap-4"
                >
                  <span className="font-mono text-xs text-white/40 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
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
              NEXT CASE STUDY
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
            to="/contact"
            className="bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2"
          >
            <span>Start a Project Like This</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
