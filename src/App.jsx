import { useCallback, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [ready, setReady] = useState(false)
  const done = useCallback(() => setReady(true), [])

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let tick
    if (!reduce) {
      const lenis = new Lenis({ lerp: 0.14 })
      window.__lenis = lenis
      lenis.on('scroll', ScrollTrigger.update)
      tick = (t) => lenis.raf(t * 1000)
      gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0)
    }
    // generic scroll reveal for [data-reveal]
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 90%', once: true,
        onEnter: (els) => gsap.fromTo(els, { y: 28, opacity: 0 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.07, ease: 'power3.out', overwrite: true }),
      })
      gsap.set('[data-reveal]', { opacity: 0 })
    })
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    return () => { mm.revert(); window.removeEventListener('load', refresh); if (tick) gsap.ticker.remove(tick); window.__lenis?.destroy(); window.__lenis = null }
  }, [])

  return (
    <>
      <a href="#about" className="sr-only z-[200] rounded bg-accent px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      {!ready && <Preloader onDone={done} />}
      <Navbar ready={ready} />
      <main>
        <Hero ready={ready} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
