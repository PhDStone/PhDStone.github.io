import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Education from '@/sections/Education'
import Research from '@/sections/Research'
import Publications from '@/sections/Publications'
import Skills from '@/sections/Skills'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-slate-950 text-slate-500 text-center text-sm py-6">
        © {new Date().getFullYear()} 杨欣磊 · Xinlei Yang — Built with React & Tailwind CSS
      </footer>
    </div>
  )
}
