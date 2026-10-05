import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">
            10 / ABOUT FORGE
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-white mb-6">
              A SMALL TEAM
              <br />
              <span className="text-white/70">WITH A LOT TO BUILD.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal max-w-xl">
              FORGE brings design, development, automation and growth into one workflow.
              We work closely with clients, keep the process direct and build around the
              actual problem instead of forcing every project into the same template.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/about"
                className="liquid-glass text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
              >
                <span>Read Our Full Principles</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <div className="liquid-glass rounded-xl p-6 border border-white/10">
              <span className="font-mono text-[11px] text-white/40 uppercase tracking-widest block mb-2">
                PRINCIPLE 01
              </span>
              <h3 className="text-lg font-medium text-white mb-1">
                Direct Communication
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                You speak directly to the engineers and designers building your software.
                No intermediate account managers or translated telephone games.
              </p>
            </div>

            <div className="liquid-glass rounded-xl p-6 border border-white/10">
              <span className="font-mono text-[11px] text-white/40 uppercase tracking-widest block mb-2">
                PRINCIPLE 02
              </span>
              <h3 className="text-lg font-medium text-white mb-1">
                Zero Boilerplate Bloat
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                We do not resell bloated theme templates with 40 unnecessary plugins. We
                write clean, maintainable code tailored to your exact operational requirements.
              </p>
            </div>

            <div className="liquid-glass rounded-xl p-6 border border-white/10">
              <span className="font-mono text-[11px] text-white/40 uppercase tracking-widest block mb-2">
                PRINCIPLE 03
              </span>
              <h3 className="text-lg font-medium text-white mb-1">
                Commercial Focus
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Visual polish is worthless if your visitors don’t convert or your operators
                can’t use the tools. Every architectural decision is grounded in utility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
