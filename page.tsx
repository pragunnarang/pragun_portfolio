import ScrollySection from '@/components/ScrollySection'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollySection />
      <div className="relative z-20 bg-gradient-to-b from-[#2A0F05] via-[#1A0A04] to-[#0A0502]">
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}
