import { useEffect, useState } from 'react'

function ArrowDown() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.735-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
    </svg>
  )
}

export default function Hero({ site }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const socialLinks = [
    site.github && { icon: <GithubIcon />, href: site.github, label: 'GitHub' },
    site.linkedin && { icon: <LinkedinIcon />, href: site.linkedin, label: 'LinkedIn' },
    site.twitter && { icon: <TwitterIcon />, href: site.twitter, label: 'Twitter' },
  ].filter(Boolean)

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" id="hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-ink-200/30 dark:bg-ink-800/30 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-narrow w-full py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Available badge */}
          {site.availableForWork && (
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/50 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono font-medium text-green-700 dark:text-green-400">Available for work</span>
            </div>
          )}

          {/* Greeting */}
          <p className={`section-label mb-4 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className={`font-display text-6xl md:text-7xl lg:text-8xl font-semibold text-ink-900 dark:text-ink-100 leading-none mb-6 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {site.name}
          </h1>

          {/* Role */}
          <div className={`flex items-center gap-4 mb-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="h-px w-12 bg-accent" />
            <span className="text-xl md:text-2xl text-ink-600 dark:text-ink-400 font-light font-display italic">
              {site.role}
            </span>
          </div>

          {/* Tagline */}
          <p className={`text-lg md:text-xl text-ink-600 dark:text-ink-400 font-light leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {site.tagline}
          </p>

          {/* CTAs */}
          <div className={`flex flex-wrap items-center gap-3 mb-12 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            {site.resumeUrl && (
              <a href={site.resumeUrl} download className="btn-outline">
                <DownloadIcon />
                Download CV
              </a>
            )}
          </div>

          {/* Social links */}
          {socialLinks.length > 0 && (
            <div className={`flex items-center gap-4 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-xs font-mono text-ink-400 dark:text-ink-600">Find me on</span>
              <div className="flex items-center gap-2">
                {socialLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-2 text-ink-500 dark:text-ink-500 hover:text-ink-900 dark:hover:text-ink-100 hover:bg-ink-100 dark:hover:bg-ink-800 rounded-lg transition-all duration-150"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-400 dark:text-ink-600 transition-all duration-700 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="animate-bounce">
            <ArrowDown />
          </div>
        </div>
      </div>
    </section>
  )
}
