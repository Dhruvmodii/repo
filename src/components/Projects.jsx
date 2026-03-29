import { useState } from 'react'
import { useInView } from '../hooks/useInView.js'

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`card p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 group cursor-default transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          {project.featured && (
            <span className="section-label text-[10px] tracking-widest">Featured</span>
          )}
          <span className="text-xs font-mono text-ink-400 dark:text-ink-600">{project.year}</span>
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-ink-500 hover:text-ink-900 dark:hover:text-ink-100 hover:bg-ink-100 dark:hover:bg-ink-800 rounded-lg transition-all"
              onClick={e => e.stopPropagation()}
            >
              <GithubIcon />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-ink-500 hover:text-ink-900 dark:hover:text-ink-100 hover:bg-ink-100 dark:hover:bg-ink-800 rounded-lg transition-all"
              onClick={e => e.stopPropagation()}
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-100 mb-3 group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-ink-600 dark:text-ink-400 font-light leading-relaxed text-sm mb-6 line-clamp-3">
        {hovered && project.longDescription ? project.longDescription : project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech?.map((t, i) => (
          <span key={i} className="tag">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects({ projects }) {
  const [ref, inView] = useInView()
  const [showAll, setShowAll] = useState(false)

  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)
  const displayProjects = showAll ? projects : featured

  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="container-narrow" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className={`section-label mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Work
            </p>
            <h2 className={`section-heading transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Selected projects.
            </h2>
          </div>
          <p className={`text-ink-500 dark:text-ink-500 font-light max-w-xs transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Things I've built, shipped, and am proud of.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {displayProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* Show more */}
        {rest.length > 0 && (
          <div className={`mt-10 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline"
            >
              {showAll ? `Show less` : `Show ${rest.length} more project${rest.length > 1 ? 's' : ''}`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
