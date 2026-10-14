import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/faqData';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('01');

  return (
    <section
      id="enquiries"
      className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                06 / STANDALONE ENQUIRIES
              </span>
              <span className="text-white/20">·</span>
              <span className="text-xs font-mono text-white/60 inline-flex items-center gap-1">
                <HelpCircle size={12} className="text-white/60" /> FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              COMMON ENQUIRIES.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-sm">
            Direct, transparent answers regarding timelines, deliverables, ownership, and how we
            partner with you.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="max-w-4xl mx-auto divide-y divide-white/10 mb-16">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-6 group">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between text-left gap-6 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-white/40 group-hover:text-white/70 transition-colors">
                      {item.id}
                    </span>
                    <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-white/90 transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`p-1.5 rounded-full transition-all duration-200 shrink-0 ${
                      isOpen ? 'bg-white/10 text-white' : 'text-white/40 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 pt-4 pr-6">
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dedicated Separate Quick Enquiry Sub-Card */}
        <div className="liquid-glass rounded-2xl p-8 sm:p-10 border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/80 mt-1">
              <MessageSquare size={18} />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-1">
                HAVE A CUSTOM ENQUIRY?
              </span>
              <h4 className="text-lg sm:text-xl font-medium text-white">
                Have a question not listed here? Talk to our founders directly.
              </h4>
              <p className="text-xs sm:text-sm text-white/60 mt-1">
                We respond within 24 hours with honest, straightforward guidance.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="liquid-glass text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              Send an Enquiry
            </Link>
            <Link
              to="/audit"
              className="bg-white text-black text-xs sm:text-sm font-medium px-5 py-3 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shadow-sm cursor-pointer"
            >
              <span>Free Audit</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
