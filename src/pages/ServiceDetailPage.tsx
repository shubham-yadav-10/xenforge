import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Play } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find relevant example projects
  const relevantProjects = projectsData.filter((p) =>
    p.services.some(
      (s) =>
        s.toLowerCase().includes(service.title.toLowerCase().split(' ')[0]) ||
        service.title.toLowerCase().includes(s.toLowerCase().split(' ')[0])
    )
  );
  const displayProjects = relevantProjects.length > 0 ? relevantProjects : projectsData.slice(0, 2);

  return (
    <article className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>BACK TO ALL SERVICES</span>
          </Link>
        </div>

        {/* Hero Section of Service */}
        <header className="pb-16 border-b border-white/10 mb-16">
          <div className="flex items-center gap-3 text-xs font-mono text-white/40 mb-4">
            <span>SERVICE {service.number}</span>
            <span>·</span>
            <span className="uppercase">{service.title}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
            {service.heading}
          </h1>

          <p className="text-xl sm:text-2xl text-white/60 font-normal max-w-2xl leading-relaxed mb-10">
            {service.copy}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <span>{service.ctaText}</span>
              <ArrowRight size={15} />
            </Link>

            <a
              href="mailto:hello@forge.agency"
              className="liquid-glass text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
            >
              <span>Ask a Technical Question</span>
            </a>
          </div>
        </header>

        {/* 1. Problem & Solution Statement */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="liquid-glass rounded-2xl p-8 border border-white/10">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-3">
              THE TYPICAL PROBLEM
            </span>
            <h2 className="text-xl font-medium text-white mb-3">Where Most Projects Stall</h2>
            <p className="text-sm text-white/70 leading-relaxed font-normal">
              {service.problemStatement}
            </p>
          </div>

          <div className="liquid-glass rounded-2xl p-8 border border-white/10">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-3">
              THE FORGE APPROACH
            </span>
            <h2 className="text-xl font-medium text-white mb-3">How We Build Around It</h2>
            <p className="text-sm text-white/70 leading-relaxed font-normal">
              {service.solutionStatement}
            </p>
          </div>
        </section>

        {/* SPECIAL SERVICE-SPECIFIC VISUAL REPRESENTATIONS */}

        {/* SEO Page Flow Representation: Search -> Website -> Qualified visitor -> Enquiry */}
        {service.slug === 'seo' && (
          <section className="mb-20 liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
              ORGANIC CONVERSION ARCHITECTURE
            </span>
            <h2 className="text-2xl font-medium text-white mb-8">
              Search to Commercial Revenue Pathway
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
              {[
                { step: '01', title: 'SEARCH', desc: 'Targeted intent query on Google' },
                { step: '02', title: 'WEBSITE', desc: 'Sub-second page load with clean structure' },
                { step: '03', title: 'QUALIFIED VISITOR', desc: 'Clear solution resonance without fluff' },
                { step: '04', title: 'ENQUIRY', desc: 'Frictionless conversion form completion' },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-white/40 block mb-2">{item.step}</span>
                    <h3 className="font-mono text-sm font-semibold text-white tracking-wider mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Paid Advertising Flow: Creative -> Click -> Landing Page -> Conversion -> Data -> Optimization */}
        {service.slug === 'paid-advertising' && (
          <section className="mb-20 liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
              ATTRIBUTION & GROWTH LOOP
            </span>
            <h2 className="text-2xl font-medium text-white mb-8">
              The Full Path from Impression to Optimization
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { title: 'CREATIVE', role: 'Scroll-stopping visual hook' },
                { title: 'CLICK', role: 'High-intent clickthrough' },
                { title: 'LANDING PAGE', role: 'Message-matched headline' },
                { title: 'CONVERSION', role: 'Qualified pipeline entry' },
                { title: 'DATA', role: 'Server-side CAPI telemetry' },
                { title: 'OPTIMIZATION', role: 'Budget allocation to winners' },
              ].map((step, idx) => (
                <div
                  key={step.title}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[110px]"
                >
                  <span className="font-mono text-[10px] text-white/40">STEP 0{idx + 1}</span>
                  <div>
                    <div className="font-mono text-xs font-semibold text-white mb-1">
                      {step.title}
                    </div>
                    <div className="text-[11px] text-white/50">{step.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Video Editing Visual Previews: Highly Visual */}
        {service.slug === 'video-editing' && (
          <section className="mb-20">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
              VISUAL CUTS & FORMATS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'Product Macro Reel', ratio: '9:16 Social Format', desc: 'Tactile closeups with kinetic rhythm' },
                { title: 'Brand Launch Film', ratio: '16:9 Widescreen', desc: 'Cinematic narrative pacing for homepages' },
                { title: 'Motion Graphic Explainers', ratio: 'Multi-Aspect', desc: 'Visualizing technical data flows' },
              ].map((video, idx) => (
                <div
                  key={idx}
                  className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between aspect-[4/5]"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span>CUT 0{idx + 1}</span>
                    <span>{video.ratio}</span>
                  </div>

                  <div className="my-auto text-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-3 text-white">
                      <Play size={18} className="translate-x-0.5" />
                    </div>
                    <h3 className="text-lg font-medium text-white">{video.title}</h3>
                    <p className="text-xs text-white/50 mt-1">{video.desc}</p>
                  </div>

                  <div className="text-[10px] font-mono text-white/30 text-center pt-3 border-t border-white/5">
                    COLOR GRADED & SOUND DESIGNED
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AI Automation: Practical Workflows */}
        {service.slug === 'ai-automation' && (
          <section className="mb-20 liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
              PRACTICAL ENTERPRISE WORKFLOWS
            </span>
            <h2 className="text-2xl font-medium text-white mb-6">
              Automations Built for Concrete Operations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-xs text-white/40 block mb-2">PIPELINE A</span>
                <div className="font-mono text-xs text-white font-medium mb-2">
                  LEAD → QUALIFICATION → CRM
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Extracts buyer budget, intended timeframe, and property specifications instantly.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-xs text-white/40 block mb-2">PIPELINE B</span>
                <div className="font-mono text-xs text-white font-medium mb-2">
                  MESSAGE → AI TRIAGE → HANDOFF
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Resolves standard questions via internal vector search; routes exceptions with full context.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-xs text-white/40 block mb-2">PIPELINE C</span>
                <div className="font-mono text-xs text-white font-medium mb-2">
                  DOCUMENT → OCR → POSTGRESQL
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Ingests invoices, PDFs, and legal contracts; validates typed schema entries into DB.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 2. What We Build / Deliverables */}
        <section className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            DELIVERABLES & SCOPE
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
            What Is Included in the Engagement
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.includes.map((item) => (
              <div
                key={item}
                className="p-5 rounded-xl liquid-glass border border-white/10 flex items-center gap-3"
              >
                <CheckCircle2 size={16} className="text-white/60 shrink-0" />
                <span className="text-sm text-white/85 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Capabilities Checklist */}
        {service.capabilities && (
          <section className="mb-20 pt-12 border-t border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
              TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              Engineering Disciplines
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.capabilities.map((cap) => (
                <div
                  key={cap}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-white/75 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Production Tech Stack */}
        <section className="mb-20 pt-12 border-t border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            PRODUCTION TECHNOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
            Tools & Runtimes
          </h2>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl liquid-glass text-xs font-mono text-white/80 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 5. Example Work */}
        <section className="mb-24 pt-12 border-t border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            VERIFIED CASE STUDIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
            Related Production Systems
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {displayProjects.map((p) => (
              <Link
                key={p.id}
                to={`/work/${p.slug}`}
                className="liquid-glass rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group block"
              >
                <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-2">
                  <span>{p.industry}</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h3 className="text-xl font-medium text-white group-hover:text-white/90">
                  {p.title}
                </h3>
                <p className="text-xs text-white/60 mt-1 line-clamp-2">{p.overview}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="pt-12 border-t border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3">
            Ready to initiate a {service.title.toLowerCase()} engagement?
          </h3>
          <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
            Contact us with your scope details and target timeline for a fixed architectural proposal.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-block shadow-lg"
          >
            {service.ctaText}
          </Link>
        </div>
      </div>
    </article>
  );
}
