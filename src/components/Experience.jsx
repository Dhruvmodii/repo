import { useState } from 'react'
import { useInView } from '../hooks/useInView.js'

function ChevronIcon({ open }) {
  return (
    <svg
      width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M6 9l6 6 6-6"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  )
}

function ExperienceCard({ exp, index, inView }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <div
      className={`group transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`card overflow-hidden ${open ? 'shadow-md' : 'hover:shadow-sm'}`}
      >
        {/* Header — always visible */}
        <button
          className="w-full text-left p-6 md:p-8 flex items-start gap-6"
          onClick={() => setOpen(!open)}
        >
          {/* Timeline dot */}
          <div className="flex-shrink-0 mt-1">
            <div className={`w-3 h-3 rounded-full border-2 transition-colors duration-200 ${open ? 'bg-accent border-accent' : 'bg-transparent border-ink-300 dark:border-ink-700'}`} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
              <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-100">
                {exp.role}
              </h3>
              <span className="text-accent font-medium text-sm">@ {exp.company}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-500 dark:text-ink-500">
              <span>{exp.period}</span>
              {exp.location && (
                <>
                  <span className="text-ink-300 dark:text-ink-700">·</span>
                  <span>{exp.location}</span>
                </>
              )}
            </div>
          </div>

          <div className="flex-shrink-0 text-ink-400 dark:text-ink-600 mt-1">
            <ChevronIcon open={open} />
          </div>
        </button>

        {/* Expandable body */}
        <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-6 md:px-8 pb-6 md:pb-8 pl-14 md:pl-20">
            <p className="text-ink-600 dark:text-ink-400 font-light leading-relaxed text-sm mb-5">
              {exp.description}
            </p>

            {exp.highlights?.length > 0 && (
              <ul className="space-y-2">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink-600 dark:text-ink-400">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience({ experience }) {
  const [ref, inView] = useInView()

  if (!experience || experience.length === 0) return null

  return (
    <section id="experience" className="py-28 md:py-36 bg-ink-50 dark:bg-ink-950/50">
      <div className="container-narrow" ref={ref}>
        {/* Header */}
        <div className="mb-16">
          <p className={`section-label mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Career
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className={`section-heading transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Where I've worked.
            </h2>
            <p className={`text-ink-500 dark:text-ink-500 font-light max-w-xs transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              The teams and companies that shaped how I think.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {experience.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
