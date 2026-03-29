export default function Footer({ site }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-100 dark:border-ink-900 bg-ink-50 dark:bg-ink-950">
      <div className="container-narrow py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-ink-900 dark:bg-ink-100 rounded flex items-center justify-center text-ink-50 dark:text-ink-950 font-display font-bold text-xs">
            {site.name?.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="font-display text-sm text-ink-600 dark:text-ink-400">
            {site.name}
          </span>
        </div>

        <p className="text-xs font-mono text-ink-400 dark:text-ink-600">
          © {year} — Built with React & Tailwind CSS
        </p>

        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="text-xs font-mono text-ink-400 dark:text-ink-600 hover:text-accent transition-colors flex items-center gap-1"
        >
          Back to top
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}
