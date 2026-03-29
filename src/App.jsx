import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio.jsx'

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <Routes>
      <Route path="/" element={<Portfolio dark={dark} setDark={setDark} />} />
      <Route path="*" element={<Portfolio dark={dark} setDark={setDark} />} />
    </Routes>
  )
}
