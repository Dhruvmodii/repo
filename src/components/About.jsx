import { useInView } from '../hooks/useInView.js'

function MapPinIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

export default function About({ site }) {
  const [ref, inView] = useInView()

  const paragraphs = site.bio?.split('\n\n').filter(Boolean) || []
  const stats = site.stats || []
  const initials = site.name
    ? site.name.split(' ').map(n => n[0]).join('')
    : 'AR'

  return (
    <section id="about" className="py-28 md:py-36">
      <div className="container-narrow">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <p className={`section-label mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              About me
            </p>
            <h2 className={`section-heading mb-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Building with intention.
            </h2>

            <div className="space-y-4">
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={`text-ink-600 dark:text-ink-400 leading-relaxed font-light transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${(i + 2) * 100}ms` }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className={`mt-8 flex flex-col gap-3 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {site.location && (
                <div className="flex items-center gap-2 text-sm text-ink-500 dark:text-ink-500">
                  <MapPinIcon />
                  <span>{site.location}</span>
                </div>
              )}
              {site.email && (
                <div className="flex items-center gap-2 text-sm text-ink-500 dark:text-ink-500">
                  <MailIcon />
                  <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
                    {site.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right: Photo + Stats */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Photo */}
            <div className="relative mb-8">
              <div className="aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden bg-ink-100 dark:bg-ink-800 flex items-center justify-center">
                {site.photo ? (
                  <img
                    src={site.photo}
                    alt={site.name || 'Profile photo'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-4 w-full h-full select-none">
                    <div className="w-20 h-20 rounded-full bg-ink-200 dark:bg-ink-700 flex items-center justify-center">
                      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" className="text-ink-400 dark:text-ink-600">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <span className="font-display text-5xl font-bold text-ink-300 dark:text-ink-600">{initials}</span>
                    <span className="text-xs font-mono text-ink-400 dark:text-ink-600 text-center px-6">
                      Upload your photo via Admin → Site Info
                    </span>
                  </div>
                )}
              </div>

              {site.availableForWork && (
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="font-mono text-xs text-accent font-medium text-center leading-tight">OPEN<br/>TO<br/>WORK</span>
                </div>
              )}
            </div>

            {/* Stats from CMS */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`card p-5 hover:shadow-md transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${(i + 4) * 100}ms` }}
                  >
                    <div className="font-display text-3xl font-semibold text-ink-900 dark:text-ink-100 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-ink-500 dark:text-ink-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
