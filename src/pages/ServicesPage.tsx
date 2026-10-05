import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 pb-8 border-b border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            CAPABILITIES & SERVICES
          </span>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6">
            SIX PRACTICES.
            <br />
            <span className="text-white/70">ONE INTEGRATED WORKFLOW.</span>
          </h1>
          <p className="text-base sm:text-xl text-white/60 max-w-2xl font-normal leading-relaxed">
            We avoid fractured handoffs between disparate creative shops and dev firms.
            Every service operates in unison under one team.
          </p>
        </div>

        {/* Services List with Dedicated Service Details */}
        <div className="space-y-16">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-white/40 block mb-3">
                      SERVICE {service.number} / 06
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm font-mono text-white/50 mb-6">
                      {service.shortDesc}
                    </p>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-lg mb-8">
                      {service.copy}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="bg-white text-black text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6 lg:pl-8 lg:border-l lg:border-white/10">
                  <div className="mb-6">
                    <span className="font-mono text-[11px] text-white/40 uppercase tracking-widest block mb-3">
                      Core Scope & Deliverables
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {service.includes.map((item) => (
                        <div
                          key={item}
                          className="p-3 rounded-lg bg-white/5 text-xs text-white/80 font-mono border border-white/5 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <span className="font-mono text-[11px] text-white/40 uppercase tracking-widest block mb-3">
                      Primary Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded text-xs font-mono text-white/60 bg-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3">
            Need a tailored scope across multiple disciplines?
          </h3>
          <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
            Most engagements blend design, engineering, and growth into a single roadmap.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors inline-block"
          >
            Start a Direct Project Discussion
          </Link>
        </div>
      </div>
    </div>
  );
}
