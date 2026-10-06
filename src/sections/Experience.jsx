import gsap from 'gsap'
import useGsap from '../hooks/useGsap'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data'

export default function Experience() {
  const ref = useGsap(({ root }) => {
    gsap.fromTo('.t-line', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.t-wrap', start: 'top 70%', end: 'bottom 70%', scrub: true } })
    root.querySelectorAll('.t-item').forEach((el, i) => {
      gsap.from(el, { x: i % 2 ? 60 : -60, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } })
      gsap.from(el.querySelector('.t-dot'), { scale: 0, duration: 0.6, ease: 'back.out(3)', scrollTrigger: { trigger: el, start: 'top 80%', once: true } })
    })
  })
  return (
    <section id="experience" ref={ref} className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="04" eyebrow="Journey" title="Experience." />
        <div className="t-wrap relative">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-line md:left-1/2"><div className="t-line h-full origin-top bg-accent" /></div>
          {experience.map((e, i) => (
            <article key={e.role + e.period} className={`t-item relative mb-14 pl-10 md:mb-20 md:w-1/2 md:pl-0 ${i % 2 ? 'md:ml-auto md:pl-14' : 'md:pr-14 md:text-right'}`}>
              <span className={`t-dot absolute top-2 h-4 w-4 rounded-full border-2 border-accent bg-ink shadow-[0_0_14px_rgba(0,255,156,.6)] left-0 ${i % 2 ? 'md:-left-2' : 'md:-right-2 md:left-auto'}`} />
              <p className="font-mono text-xs uppercase tracking-widest text-accent">{e.period}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">{e.role}</h3>
              <p className="text-sm text-muted">{e.company}</p>
              <p className="mt-3 text-zinc-400">{e.desc}</p>
              <ul className={`mt-4 flex flex-wrap gap-2 ${i % 2 ? '' : 'md:justify-end'}`}>{e.tech.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-zinc-300">{t}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
