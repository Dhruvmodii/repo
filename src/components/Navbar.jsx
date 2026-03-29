import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function SunIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 12h18M3 6h18M3 18h18"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  )
}

export default function Navbar({ dark, setDark, name }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = name ? name.split(' ').map(n => n[0]).join('') : 'AR'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-50/90 dark:bg-ink-950/90 backdrop-blur-md shadow-sm border-b border-ink-100 dark:border-ink-900'
          : 'bg-transparent'
      }`}>
        <div className="container-narrow flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <div className="w-8 h-8 bg-ink-900 dark:bg-ink-100 rounded-lg flex items-center justify-center text-ink-50 dark:text-ink-950 font-display font-bold text-sm group-hover:bg-accent transition-colors duration-200">
              {initials}
            </div>
            <span className="font-display font-semibold text-ink-900 dark:text-ink-100 hidden sm:block text-sm">
              {name}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100 font-medium transition-colors duration-150 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100 hover:bg-ink-100 dark:hover:bg-ink-800 rounded-lg transition-all duration-150"
              aria-label="Toggle theme"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a href="#contact" className="hidden md:flex btn-primary text-xs px-4 py-2">
              Hire me
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-ink-600 dark:text-ink-400 hover:bg-ink-100 dark:hover:bg-ink-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-72 bg-ink-50 dark:bg-ink-950 shadow-2xl transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between px-6 h-16 border-b border-ink-100 dark:border-ink-900">
            <span className="font-display font-semibold text-ink-900 dark:text-ink-100">Menu</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-ink-500 hover:text-ink-900 dark:hover:text-ink-100 rounded-lg">
              <CloseIcon />
            </button>
          </div>
          <nav className="px-4 py-6 flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-100 hover:bg-ink-100 dark:hover:bg-ink-800 rounded-xl font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-ink-100 dark:border-ink-900">
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center">
                Hire me
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
