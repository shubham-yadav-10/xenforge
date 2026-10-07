import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Check } from 'lucide-react';
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
              02 / WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              WHAT WE DO
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md">
            Everything your business needs to look professional, work smarter and grow online.
            Choose one service or combine them all.
          </p>
        </div>

        {/* 4 Cards Grid - Direct Representation of Content Pack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group liquid-glass rounded-2xl p-7 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-5">
                  <span>0{service.id}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                <h3 className="text-xl font-medium text-white mb-2 tracking-tight group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-white/50 mb-4">{service.tagline}</p>

                <p className="text-sm text-white/70 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                <span>View Details</span>
                <span className="text-white/30">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop View: Interactive Deep-Dive Specification */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start pt-8 border-t border-white/10">
          {/* Left Column: Interactive List */}
          <div className="col-span-7 flex flex-col">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4 block">
              PRACTICE SPECIFICATIONS
            </span>
            {servicesData.map((service) => {
              const isHovered = activeHoverId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveHoverId(service.id)}
                  className="group relative border-b border-white/10 transition-colors py-6"
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex items-start justify-between gap-6 cursor-pointer"
                  >
                    <div className="flex items-start gap-8">
                      <span
                        className={`font-mono text-sm transition-all duration-300 ${
                          isHovered ? 'text-white font-medium scale-105' : 'text-white/30'
                        }`}
                      >
                        {service.number}
                      </span>

                      <div className="flex flex-col">
                        <h3
                          className={`text-2xl font-medium tracking-tight transition-transform duration-300 ${
                            isHovered ? 'translate-x-3 text-white' : 'text-white/80'
                          }`}
                        >
                          {service.title}
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
                          <p className="text-sm text-white/60 mt-2 max-w-md leading-relaxed">
                            {service.copy}
                          </p>
                        </motion.div>
                      </div>
                    </div>

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

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-300 ${
                      isHovered ? 'bg-white/40' : 'bg-transparent'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Scope & Perfect-For Preview */}
          <div className="col-span-5 sticky top-28 pl-4">
            <div className="liquid-glass rounded-2xl p-8 border border-white/10 min-h-[380px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-xs text-white/40">
                    WHAT&apos;S INCLUDED
                  </span>
                  <span className="font-mono text-xs text-white/60">
                    {activeService.number} / 04
                  </span>
                </div>

                <h4 className="text-xl font-medium text-white mt-5">
                  {activeService.title}
                </h4>

                <div className="mt-4 space-y-2">
                  {activeService.includes.slice(0, 5).map((item) => (
                    <div
                      key={item}
                      className="text-xs text-white/80 flex items-center gap-2 font-normal"
                    >
                      <Check size={13} className="text-white/50 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider block mb-2">
                    Perfect For
                  </span>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {activeService.perfectFor}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  to={`/services/${activeService.slug}`}
                  className="text-xs font-mono text-white/70 hover:text-white"
                >
                  Learn full scope →
                </Link>
                <Link
                  to="/audit"
                  className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
                >
                  Request Sample
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Accordion */}
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
                      {service.title}
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
                      <p className="text-sm text-white/70 leading-relaxed mb-4">
                        {service.copy}
                      </p>

                      <div className="space-y-1.5 mb-4">
                        {service.includes.slice(0, 4).map((inc) => (
                          <div
                            key={inc}
                            className="text-xs text-white/75 flex items-center gap-2"
                          >
                            <Check size={12} className="text-white/40" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
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
      </div>
    </section>
  );
}
