import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData, ServiceItem } from '../data/servicesData';

export default function ServicesSection() {
  const [activeHoverId, setActiveHoverId] = useState<string>('01');
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>('01');

  const activeService: ServiceItem =
    servicesData.find((s) => s.id === activeHoverId) || servicesData[0];

  return (
    <section
      id="services"
      className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
              03 / SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              WHAT WE DO
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-sm">
            Six ways we can help a business move forward.
          </p>
        </div>

        {/* Desktop View: Editorial Interactive Service List + Live Preview Column */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive List */}
          <div className="col-span-7 flex flex-col">
            {servicesData.map((service) => {
              const isHovered = activeHoverId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveHoverId(service.id)}
                  className="group relative border-b border-white/10 transition-colors py-7"
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex items-start justify-between gap-6 cursor-pointer"
                  >
                    <div className="flex items-start gap-8">
                      {/* Service Number */}
                      <span
                        className={`font-mono text-sm transition-all duration-300 ${
                          isHovered ? 'text-white font-medium scale-105' : 'text-white/30'
                        }`}
                      >
                        {service.number}
                      </span>

                      {/* Title & Revealed Description */}
                      <div className="flex flex-col">
                        <h3
                          className={`text-2xl sm:text-3xl font-medium tracking-tight transition-transform duration-300 ${
                            isHovered ? 'translate-x-3 text-white' : 'text-white/80'
                          }`}
                        >
                          {service.title.toUpperCase()}
                        </h3>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isHovered ? 'auto' : 0,
                            opacity: isHovered ? 1 : 0,
                          }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-white/60 mt-3 max-w-md leading-relaxed">
                            {service.shortDesc}
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Animated Arrow */}
                    <div
                      className={`p-2 rounded-full transition-all duration-300 ${
                        isHovered
                          ? 'bg-white/10 text-white translate-x-1 -translate-y-1'
                          : 'text-white/30'
                      }`}
                    >
                      <ArrowUpRight size={18} />
                    </div>
                  </Link>

                  {/* Responding bottom highlight line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-300 ${
                      isHovered ? 'bg-white/40' : 'bg-transparent'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Column */}
          <div className="col-span-5 sticky top-28 pl-4">
            <div className="liquid-glass rounded-2xl p-8 border border-white/10 min-h-[380px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-xs text-white/40">
                    SERVICE SPECIFICATION
                  </span>
                  <span className="font-mono text-xs text-white/60">
                    {activeService.number} / 06
                  </span>
                </div>

                <h4 className="text-xl font-medium text-white mt-6">
                  {activeService.title}
                </h4>

                <p className="text-sm text-white/70 mt-3 leading-relaxed">
                  {activeService.copy}
                </p>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider block mb-3">
                    Core Capabilities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeService.includes.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-white/70 font-mono px-2 py-1 rounded bg-white/5 border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-white/50 font-mono">
                  Stack: {activeService.technologies.slice(0, 3).join(', ')}
                </div>
                <Link
                  to={`/services/${activeService.slug}`}
                  className="inline-flex items-center gap-1 text-xs text-white hover:text-white/80 font-medium group"
                >
                  <span>Detailed View</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Expandable Accordion */}
        <div className="lg:hidden flex flex-col divide-y divide-white/10">
          {servicesData.map((service) => {
            const isExpanded = mobileExpandedId === service.id;

            return (
              <div key={service.id} className="py-4">
                <button
                  onClick={() =>
                    setMobileExpandedId(isExpanded ? null : service.id)
                  }
                  className="w-full flex items-center justify-between py-2 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-white/40">
                      {service.number}
                    </span>
                    <h3 className="text-lg font-medium text-white">
                      {service.title.toUpperCase()}
                    </h3>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-white/60 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pt-2 pb-4 pl-8"
                    >
                      <p className="text-sm text-white/70 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {service.includes.map((inc) => (
                          <span
                            key={inc}
                            className="text-[11px] font-mono text-white/60 px-2 py-0.5 bg-white/5 rounded border border-white/5"
                          >
                            {inc}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10">
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1 text-xs text-white font-medium"
                        >
                          <span>Explore {service.title}</span>
                          <ArrowUpRight size={13} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for Services */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
            Custom architectures for specialized operational needs
          </p>
          <Link
            to="/services"
            className="liquid-glass text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
          >
            <span>Browse All Service Details</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
