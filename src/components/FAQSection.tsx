import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/faqData';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('01');

  return (
    <section className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
              12 / FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              COMMON INQUIRIES
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-sm">
            Direct answers on engagements, timelines, workflows, and deliverables.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="max-w-4xl mx-auto divide-y divide-white/10">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-6 group">
                <button
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
                    className={`p-1.5 rounded-full transition-all duration-200 ${
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
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden pl-10 sm:pl-12"
                    >
                      <p className="text-sm sm:text-base text-white/65 leading-relaxed pt-4 pb-2 font-normal">
                        {item.answer}
                      </p>
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
