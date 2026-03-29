import { useInView } from '../hooks/useInView.js'

export default function Skills({ skills }) {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-28 md:py-36 bg-ink-900 dark:bg-ink-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-narrow relative" ref={ref}>
        {/* Header */}
        <div className="mb-16">
          <p className={`section-label mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Toolkit
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className={`font-display text-4xl md:text-5xl font-semibold text-ink-100 leading-tight transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Skills & technologies.
            </h2>
            <p className={`text-ink-400 font-light max-w-xs text-right transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              The tools I reach for when building things that matter.
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((group, gi) => (
            <div
              key={gi}
              className={`rounded-2xl border border-ink-800 bg-ink-800/50 p-6 hover:border-ink-700 hover:bg-ink-800 transition-all duration-500 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${gi * 120}ms` }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-5 bg-accent rounded-full" />
                <h3 className="font-mono text-xs tracking-widest uppercase text-ink-400 group-hover:text-accent transition-colors duration-200">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <span
                    key={si}
                    className="inline-block px-2.5 py-1 rounded-lg bg-ink-900/70 border border-ink-700/50 text-ink-300 text-xs font-mono hover:border-accent/50 hover:text-accent transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling ticker */}
        <div className="mt-16 overflow-hidden -mx-6 md:-mx-10">
          <div className="flex gap-8 animate-[ticker_20s_linear_infinite] whitespace-nowrap">
            {[...skills.flatMap(g => g.items), ...skills.flatMap(g => g.items)].map((skill, i) => (
              <span key={i} className="text-ink-700 dark:text-ink-700 font-mono text-sm font-medium flex-shrink-0">
                {skill} <span className="text-accent mx-2">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
