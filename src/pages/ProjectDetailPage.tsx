import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-xs font-mono text-emerald-400 mb-4 border border-white/10">
            <Sparkles size={12} />
            <span>{project.conceptType}</span>
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
              <span className="text-white/90">XenForge Prototype Concept</span>
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
        <div className="mb-20 rounded-2xl liquid-glass border border-white/10 p-6 sm:p-12 overflow-hidden">
          <div className="rounded-xl bg-gradient-to-br from-white/10 via-black to-black border border-white/10 p-6 sm:p-10 aspect-[16/9] flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[11px] text-white/40 border-b border-white/10 pb-3">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                https://{project.slug}.sample.xenforge.com
              </span>
              <span>VERIFIED XENFORGE CONCEPT</span>
            </div>

            <div className="my-auto text-center py-6">
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

            <div className="flex items-center justify-between font-mono text-[10px] text-white/30 pt-3 border-t border-white/5">
              <span>STACK: {project.technologies.join(' · ')}</span>
              <span>HONEST SAMPLE</span>
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
            <span>Request a Free Sample for Your Brand</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
