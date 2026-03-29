import { useState } from 'react'
import { useInView } from '../hooks/useInView.js'

function SendIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
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

export default function Contact({ site }) {
  const [ref, inView] = useInView()
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const socialLinks = [
    site.github && { icon: <GithubIcon />, href: site.github, label: 'GitHub' },
    site.linkedin && { icon: <LinkedinIcon />, href: site.linkedin, label: 'LinkedIn' },
    site.twitter && { icon: <TwitterIcon />, href: site.twitter, label: 'Twitter / X' },
  ].filter(Boolean)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formState,
        }).toString(),
      })

      if (res.ok) {
        setSubmitted(true)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = `w-full px-4 py-3 rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 text-ink-900 dark:text-ink-100 placeholder-ink-400 dark:placeholder-ink-600 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-150`

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container-narrow" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <p className={`section-label mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Get in touch
          </p>
          <h2 className={`section-heading mb-4 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Let's work together.
          </h2>
          <p className={`text-ink-500 dark:text-ink-500 font-light max-w-md mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Have a project in mind or just want to chat? I'm always open to new opportunities and conversations.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left: Contact info */}
          <div className="space-y-8">
            {/* Direct email */}
            <div>
              <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-ink-100 mb-3">Direct email</h3>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 text-ink-600 dark:text-ink-400 hover:text-accent transition-colors duration-200 font-light"
              >
                <span className="text-lg">{site.email}</span>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Social links */}
            {socialLinks.length > 0 && (
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-ink-100 mb-4">Socials</h3>
                <div className="flex flex-col gap-3">
                  {socialLinks.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100 transition-colors group"
                    >
                      <span className="p-2 bg-ink-100 dark:bg-ink-800 rounded-lg group-hover:bg-accent/10 group-hover:text-accent transition-all duration-200">
                        {link.icon}
                      </span>
                      <span className="font-light">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Response time */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-green-600 dark:text-green-400 font-medium">Quick responder</span>
              </div>
              <p className="text-sm text-ink-600 dark:text-ink-400 font-light">
                I typically respond within 24 hours. For urgent inquiries, reach out directly by email.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="card p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-green-600 dark:text-green-400">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-100 mb-2">Message sent!</h3>
                <p className="text-ink-500 dark:text-ink-500 font-light text-sm">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              /* Netlify Form */
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div>
                  <label className="block text-xs font-mono text-ink-500 dark:text-ink-500 mb-2 tracking-wider uppercase">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className={inputClass}
                    value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-ink-500 dark:text-ink-500 mb-2 tracking-wider uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                    value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-ink-500 dark:text-ink-500 mb-2 tracking-wider uppercase">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, idea, or just say hello..."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <SendIcon />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
