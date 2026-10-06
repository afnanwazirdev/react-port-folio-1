import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data'
import useActiveSection from '../hooks/useActiveSection'
import MagneticButton from './MagneticButton'

const ids = navLinks.map((l) => l.toLowerCase())
export const goTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  window.__lenis ? window.__lenis.scrollTo(el, { offset: id === 'home' ? 0 : -10 }) : el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar({ ready }) {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const menu = useRef(null)
  const active = useActiveSection(ids)

  useEffect(() => {
    let last = 0
    const on = () => { const y = window.scrollY; setScrolled(y > 40); setHidden(y > last && y > 400 && !open); last = y }
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [open])

  useEffect(() => {
    if (ready && !matchMedia('(prefers-reduced-motion: reduce)').matches) gsap.from('.nav-in', { y: -30, opacity: 0, stagger: 0.07, duration: 0.8, ease: 'power3.out' })
  }, [ready])

  useEffect(() => {
    const m = menu.current
    gsap.to(m, { clipPath: open ? 'circle(150% at 92% 4%)' : 'circle(0% at 92% 4%)', duration: open ? 0.9 : 0.6, ease: 'power3.inOut' })
    if (open) gsap.fromTo('.m-link', { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, delay: 0.3, duration: 0.7, ease: 'power3.out' })
    document.body.style.overflow = open ? 'hidden' : ''
    window.__lenis?.[open ? 'stop' : 'start']()
  }, [open])

  const click = (e, id) => { e.preventDefault(); setOpen(false); setTimeout(() => goTo(id), open ? 450 : 0) }

  return (
    <>
      <header className={`site-nav fixed inset-x-0 top-0 z-50 transition-all duration-500 ${hidden ? '-translate-y-full' : ''} ${scrolled ? 'border-b border-line bg-ink/60 py-3 backdrop-blur-xl' : 'py-6'}`}>
        <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="#home" onClick={(e) => click(e, 'home')} className="nav-in relative z-[60] font-display text-xl font-semibold tracking-tight text-white">Afnan Aziz<span className="text-accent">.</span></a>
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <li key={l} className="nav-in">
                <a href={`#${l.toLowerCase()}`} onClick={(e) => click(e, l.toLowerCase())} aria-current={active === l.toLowerCase() ? 'true' : undefined}
                  className={`relative py-1 text-sm transition-colors ${active === l.toLowerCase() ? 'text-white' : 'text-muted hover:text-white'}`}>
                  {l}
                  <span className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-accent transition-transform duration-500 ${active === l.toLowerCase() ? 'scale-x-100' : 'scale-x-0'}`} />
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-in flex items-center gap-3">
            <a href={profile.resume} download className="hidden rounded-full border border-line px-5 py-2.5 text-sm text-white transition-colors hover:border-accent hover:text-accent sm:block">Resume</a>
            <button aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="relative z-[60] grid h-11 w-11 place-items-center rounded-full border border-line text-white lg:hidden">
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>
      </header>
      <div ref={menu} aria-hidden={!open} style={{ clipPath: 'circle(0% at 92% 4%)' }} className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 lg:hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <ul className="relative space-y-1">
          {navLinks.map((l, i) => (
            <li key={l} className="overflow-hidden">
              <a tabIndex={open ? 0 : -1} href={`#${l.toLowerCase()}`} onClick={(e) => click(e, l.toLowerCase())} className="m-link flex items-baseline gap-4 py-2 font-display text-5xl font-semibold text-white">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>{l}
              </a>
            </li>
          ))}
        </ul>
        <div className="relative mt-10"><MagneticButton href={profile.resume} download variant="ghost">Download Resume</MagneticButton></div>
      </div>
    </>
  )
}
