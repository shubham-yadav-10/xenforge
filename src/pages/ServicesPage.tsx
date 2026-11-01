import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Globe, Smartphone, Bot, Megaphone, Film, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicesPage() {
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'web-development':
        return <Globe size={20} className="text-blue-400" />;
      case 'app-development':
        return <Smartphone size={20} className="text-emerald-400" />;
      case 'ai-automation':
        return <Bot size={20} className="text-purple-400" />;
      case 'digital-marketing':
        return <Megaphone size={20} className="text-amber-400" />;
      case 'video-editing':
        return <Film size={20} className="text-rose-400" />;
      default:
        return <Sparkles size={20} className="text-white" />;
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-[#111214] min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 pb-8 border-b border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            CAPABILITIES & SERVICES
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-6">
            FIVE PRACTICES.
            <br />
            <span className="text-white/70">ALL UNDER ONE ROOF.</span>
          </h1>
          <p className="text-base sm:text-xl text-white/60 max-w-2xl font-normal leading-relaxed">
            Everything your business needs to look professional, work smarter, and scale online.
            Choose individual practices or combine them into a unified digital roadmap.
          </p>
        </div>

        {/* Services List with Dedicated Scope & Architecture */}
        <div className="space-y-16">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="liquid-glass rounded-2xl p-8 sm:p-12 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {getIcon(service.slug)}
                      </div>
                      <span className="font-mono text-xs text-white/40">
                        PRACTICE {service.number} / 05
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm font-mono text-white/50 mb-5">
                      {service.shortDesc}
                    </p>
                    <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-lg mb-8 font-normal">
                      {service.copy}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="bg-white text-black text-xs sm:text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-sm"
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.includes.map((item) => (
                        <div
                          key={item}
                          className="p-3 rounded-lg bg-white/5 text-xs text-white/80 border border-white/5 flex items-center gap-2"
                        >
                          <Check size={13} className="text-white/40 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <span className="font-mono text-[11px] text-white/40 uppercase tracking-widest block mb-3">
                      Primary Technologies & Runtimes
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-md text-xs font-mono text-white/70 bg-white/5 border border-white/5"
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

        {/* Clean, Focused Bottom Action */}
        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3">
            Need a tailored scope across multiple disciplines?
          </h3>
          <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
            Most engagements blend design, engineering, and automation into a single coordinated roadmap.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-block shadow-lg"
          >
            Start a Direct Project Discussion
          </Link>
        </div>
      </div>
    </div>
  );
}
