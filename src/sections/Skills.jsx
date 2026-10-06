import { useRef } from 'react'
import gsap from 'gsap'
import useGsap from '../hooks/useGsap'
import SectionHeading from '../components/SectionHeading'
import { skills, marquee } from '../data'

function SkillCard({ s }) {
  const ref = useRef(null)
  const glow = (e) => { const r = ref.current.getBoundingClientRect(); ref.current.style.setProperty('--x', `${e.clientX - r.left}px`); ref.current.style.setProperty('--y', `${e.clientY - r.top}px`) }
  return (
    <li ref={ref} onMouseMove={glow} data-reveal tabIndex={0}
      className="group relative overflow-hidden rounded-2xl border border-line bg-panel p-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 focus-visible:-translate-y-2 focus-visible:border-accent/60">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(260px circle at var(--x) var(--y), rgba(0,255,156,.18), transparent 70%)' }} />
      <s.icon className="relative text-4xl text-zinc-400 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:text-accent" />
      <p className="relative mt-10 overflow-hidden font-display text-xl font-semibold text-white"><span className="inline-block transition-transform duration-500 group-hover:translate-x-2">{s.name}</span></p>
      <p className="relative mt-1 text-xs text-muted">{s.note}</p>
    </li>
  )
}

export default function Skills() {
  const ref = useGsap(({ root }) => {
    const t = gsap.to('.marquee-track', { xPercent: -50, repeat: -1, duration: 35, ease: 'none' })
    const m = root.querySelector('.marquee')
    const slow = () => gsap.to(t, { timeScale: 0.2, duration: 0.6 }), fast = () => gsap.to(t, { timeScale: 1, duration: 0.6 })
    m.addEventListener('mouseenter', slow); m.addEventListener('mouseleave', fast)
    return () => { m.removeEventListener('mouseenter', slow); m.removeEventListener('mouseleave', fast) }
  })
  const row = [...marquee, ...marquee]
  return (
    <section id="skills" ref={ref} className="relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="02" eyebrow="Toolkit" title="Technologies I Build With." />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">{skills.map((s) => <SkillCard key={s.name} s={s} />)}</ul>
      </div>
      <div className="marquee mt-24 border-y border-line py-8" aria-hidden>
        <div className="marquee-track flex w-max gap-10 will-change-transform">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 gap-10">{marquee.map((w, i) => (
              <span key={w + i} className="flex items-center gap-10 font-display text-5xl font-semibold md:text-7xl"><span className={i % 2 ? 'text-white' : 'outline-text'}>{w}</span><span className="text-accent">→</span></span>
            ))}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
