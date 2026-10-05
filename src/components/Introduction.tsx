export default function Introduction() {
  return (
    <section
      id="introduction"
      className="relative bg-black text-white pt-24 sm:pt-36 pb-20 sm:pb-32 px-6 sm:px-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Subtle section label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">
            02 / AGENCY INTRODUCTION
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Large editorial typography with generous whitespace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-white">
              WE BUILD DIGITAL SYSTEMS
              <br />
              <span className="text-white/80">PEOPLE ACTUALLY USE.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-3">
            <p className="text-base sm:text-lg text-white/60 leading-relaxed font-normal">
              FORGE works across design, development, AI and growth. We help businesses
              turn ideas into websites, apps, automated workflows and campaigns that are
              built to do a job.
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <span className="block font-mono text-[11px] text-white/40 uppercase tracking-wider">
                  Discipline
                </span>
                <span className="text-sm text-white/80 mt-1 block">Engineering & Design</span>
              </div>
              <div>
                <span className="block font-mono text-[11px] text-white/40 uppercase tracking-wider">
                  Location
                </span>
                <span className="text-sm text-white/80 mt-1 block">Global Client Base</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
