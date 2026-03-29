import { getSiteInfo, getProjects, getSkills, getExperience } from '../utils/data.js'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Portfolio({ dark, setDark }) {
  const site = getSiteInfo()
  const projects = getProjects()
  const skills = getSkills()
  const experience = getExperience()

  return (
    <div className="min-h-screen bg-ink-50 dark:bg-ink-950 transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} name={site.name} />
      <main>
        <Hero site={site} />
        <About site={site} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Contact site={site} />
      </main>
      <Footer site={site} />
    </div>
  )
}
