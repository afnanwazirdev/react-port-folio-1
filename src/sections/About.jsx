import gsap from 'gsap'
import { FiUser } from 'react-icons/fi'
import useGsap from '../hooks/useGsap'
import AnimatedText from '../components/AnimatedText'
import { stats, profile } from '../data'

const points = ['Modern web development', 'Clean UI', 'Scalable architecture', 'Performance', 'User experience', 'Problem solving', 'Building real-world products']

export default function About() {
  const ref = useGsap(({ root }) => {
    gsap.fromTo('.img-mask', { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.img-mask', start: 'top 80%', once: true } })
    gsap.fromTo('.img-mask img, .img-ph', { scale: 1.3 }, { scale: 1, duration: 1.8, ease: 'expo.out', scrollTrigger: { trigger: '.img-mask', start: 'top 80%', once: true } })
    root.querySelectorAll('[data-count]').forEach((el) => {
      const o = { v: 0 }, end = +el.dataset.count
      gsap.to(o, { v: end, duration: 2, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true }, onUpdate: () => (el.textContent = Math.round(o.v)) })
    })
  })
  return (
    <section id="about" ref={ref} className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div className="about-par relative mx-auto w-full max-w-md">
          <div className="img-mask relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line">
            {profile.photo ? <img src={profile.photo} alt="Portrait of Afnan Aziz" loading="lazy" className="h-full w-full object-cover" /> :
              <div className="img-ph grid h-full w-full place-items-center bg-gradient-to-br from-panel to-ink" role="img" aria-label="Profile image placeholder"><FiUser className="text-8xl text-accent/40" /></div>}
          </div>
          <div className="glass absolute -bottom-6 -right-4 rounded-2xl px-5 py-4 md:-right-8"><p className="font-display text-3xl font-semibold text-white">MERN</p><p className="text-xs text-muted">Stack specialist</p></div>
        </div>
        <div>
          <p data-reveal className="mb-5 flex items-center gap-4 font-mono text-xs uppercase tracking-[.3em] text-accent"><span>01</span><span className="h-px w-12 bg-accent/50" />About</p>
          <AnimatedText text="A Developer Who Cares About The Details." className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl" />
          <p data-reveal className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">I'm Afnan Aziz, a MERN Stack Developer focused on creating modern digital experiences with clean architecture, smooth interactions, and exceptional user experiences. I enjoy turning complex problems into simple, fast and reliable products people actually enjoy using.</p>
          <ul data-reveal className="mt-8 flex flex-wrap gap-2">{points.map((p) => <li key={p} className="rounded-full border border-line px-4 py-2 text-sm text-zinc-300">{p}</li>)}</ul>
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} data-reveal className="bg-ink p-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-semibold text-white md:text-5xl"><span data-count={s.value}>0</span><span className="text-accent">{s.suffix}</span></dd>
                <p className="mt-2 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
