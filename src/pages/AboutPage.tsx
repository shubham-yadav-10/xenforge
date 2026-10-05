import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-black min-h-screen text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="pb-16 border-b border-white/10 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            AGENCY MANIFESTO & PRINCIPLES
          </span>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
            A SMALL TEAM
            <br />
            <span className="text-white/70">WITH A LOT TO BUILD.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/60 font-normal max-w-2xl leading-relaxed mb-10">
            FORGE brings design, development, automation and growth into one workflow.
            We work closely with clients, keep the process direct and build around the
            actual problem instead of forcing every project into the same template.
          </p>

          <Link
            to="/contact"
            className="bg-white text-black text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            <span>Start a Project</span>
            <ArrowRight size={15} />
          </Link>
        </header>

        {/* 1. Who We Are */}
        <section className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            01 / WHO WE ARE
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
            Engineers, Designers & Systems Architects
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-white/75 leading-relaxed font-normal max-w-3xl">
            <p>
              We are not a bloated agency layer with layers of non-technical project managers.
              When you communicate with FORGE, you are speaking directly with the people who
              write the TypeScript, structure the database schemas, design the Figma tokens,
              and tune the automated pipelines.
            </p>
            <p>
              This direct model eliminates miscommunication, prevents sluggish turnaround
              times, and ensures that every technical decision is tied to commercial reality.
            </p>
          </div>
        </section>

        {/* 2. How We Think */}
        <section className="mb-20 pt-12 border-t border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            02 / HOW WE THINK
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
            Utility Precedes Decoration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="liquid-glass rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-medium text-white mb-2">Build for the Operator</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                If an interface confuses a customer or slows down an internal team member,
                it has failed regardless of how attractive it looks on a designer&apos;s monitor.
              </p>
            </div>
            <div className="liquid-glass rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-medium text-white mb-2">Zero Premature Complexity</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                We choose battle-tested technologies that perform reliably under pressure rather
                than chasing trendy frameworks that demand rewrites within eighteen months.
              </p>
            </div>
          </div>
        </section>

        {/* 3. What We Value */}
        <section className="mb-20 pt-12 border-t border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            03 / WHAT WE VALUE
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
            Core Operational Commitments
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'Transparent Timelines and Fixed Pricing',
                desc: 'We define the deliverables, scope boundaries, and delivery schedule before work starts. No surprise invoices or open-ended hourly bloat.',
              },
              {
                title: 'High Velocity Through Focus',
                desc: 'We limit the number of active clients we take on simultaneously to ensure every build receives undivided engineering attention.',
              },
              {
                title: 'Complete IP Ownership',
                desc: 'You own every line of code, design file, and database schema from day one. Zero proprietary lock-in or licensing fees.',
              },
            ].map((v) => (
              <div
                key={v.title}
                className="liquid-glass rounded-xl p-6 border border-white/10 flex items-start gap-4"
              >
                <CheckCircle2 size={18} className="text-white/70 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-medium text-white mb-1">{v.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. How We Work */}
        <section className="mb-20 pt-12 border-t border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
            04 / HOW WE WORK
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
            Sprint Rhythm & Communication
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <span className="font-mono text-xs text-white/40 block mb-2">CADENCE</span>
              <h3 className="text-lg font-medium text-white mb-2">Weekly Demos</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Live URL staging previews deployed every week so you can test features on real devices.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <span className="font-mono text-xs text-white/40 block mb-2">CHANNELS</span>
              <h3 className="text-lg font-medium text-white mb-2">Direct Slack & Git</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Shared Slack connect channels and GitHub access for real-time asynchronous updates.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <span className="font-mono text-xs text-white/40 block mb-2">HANDOFF</span>
              <h3 className="text-lg font-medium text-white mb-2">Video Walkthroughs</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Recorded system documentation and operator guides for your internal staff.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Bottom CTA */}
        <div className="pt-16 border-t border-white/10 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Ready to build together?
          </h2>
          <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
            Tell us about your team, your current infrastructure, and what you need deployed.
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
