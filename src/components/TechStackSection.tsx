import { useState } from 'react';

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    {
      name: 'Frontend',
      description: 'Component architecture, reactive state, and styling systems',
      techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      name: 'Backend',
      description: 'High-throughput APIs, task runners, and relational persistence',
      techs: ['Node.js', 'FastAPI', 'Python', 'PostgreSQL', 'Redis'],
    },
    {
      name: 'Cloud & DevOps',
      description: 'Zero-downtime clustering, edge networks, and container runtimes',
      techs: ['AWS', 'Docker', 'Kubernetes', 'Cloudflare', 'GitHub Actions'],
    },
    {
      name: 'AI Engineering',
      description: 'Foundation models, vector embeddings, and retrieval pipelines',
      techs: ['OpenAI', 'Gemini', 'Claude', 'LangChain', 'ChromaDB'],
    },
  ];

  const filteredCategories =
    activeCategory === 'All'
      ? categories
      : categories.filter((c) => c.name === activeCategory);

  return (
    <section className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
              09 / TECHNOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              THE STACK BEHIND THE WORK
            </h2>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap gap-1.5">
            {['All', 'Frontend', 'Backend', 'Cloud & DevOps', 'AI Engineering'].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-white text-black font-medium'
                      : 'text-white/60 hover:text-white bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>
        </div>

        {/* Restrained Interactive Tech Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group) => (
            <div
              key={group.name}
              className="liquid-glass rounded-2xl p-8 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
                    {group.name}
                  </span>
                  <span className="font-mono text-xs text-white/30">
                    {group.techs.length} CORE TOOLS
                  </span>
                </div>

                <p className="text-xs text-white/60 mb-6 font-normal leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white/5 text-white/85 text-xs font-mono border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
