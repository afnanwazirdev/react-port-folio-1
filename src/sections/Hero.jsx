import gsap from 'gsap'
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si'
import useGsap from '../hooks/useGsap'
import MagneticButton from '../components/MagneticButton'
import { goTo } from '../components/Navbar'

const lines = ['Building Digital Experiences', 'That Feel Fast, Modern', '& Exceptional.']
const badges = [
  [SiReact, 'React', 'left-[4%] top-[10%]', '#61dafb'],
  [SiNodedotjs, 'Node.js', 'right-[2%] top-[28%]', '#68a063'],
  [SiMongodb, 'MongoDB', 'left-[10%] bottom-[10%]', '#47a248'],
  [SiExpress, 'Express', 'right-[12%] bottom-[2%]', '#e5e7eb'],
]

export default function Hero({ ready }) {
  const ref = useGsap(() => {
    // Hide before the preloader finishes so nothing flashes
    gsap.set('.hero-fade', { opacity: 0 })
    gsap.set('.line-in', { yPercent: 110 })
    if (!ready) return

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    tl.to('.line-in', { yPercent: 0, duration: 0.9, stagger: 0.08 })
      .to('.hero-fade', { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 }, '-=.7')
      .fromTo('.hero-visual', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 }, '-=1.2')

    gsap.to('.float', { y: -8, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: { each: 0.6, from: 'random' } })
    gsap.to('.orb', { scale: 1.06, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  }, [ready])

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 md:px-10">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="orb absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" aria-hidden />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        {/* Text */}
        <div className="relative z-10">
          <p className="hero-fade mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[.3em] text-accent">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />Available for freelance work
          </p>
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-7xl" aria-label={lines.join(' ')}>
            {lines.map((l, i) => (
              <span key={l} aria-hidden className="mask-line pb-2">
                <span className={`line-in block ${i === 2 ? 'text-accent' : ''}`}>{l}</span>
              </span>
            ))}
          </h1>
          <p className="hero-fade mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
            I'm Afnan Aziz — a MERN Stack Developer specializing in modern web applications, scalable backend systems, and interactive digital experiences.
          </p>
          <div className="hero-fade mt-10 flex flex-wrap gap-4">
            <MagneticButton onClick={() => goTo('projects')}>View My Work</MagneticButton>
            <MagneticButton onClick={() => goTo('contact')} variant="ghost" arrow={false}>Let's Talk</MagneticButton>
          </div>
          <button onClick={() => goTo('about')} className="hero-fade link-u mt-14 inline-block text-sm text-muted hover:text-white">
            Scroll to explore ↓
          </button>
        </div>

        {/* Visual */}
        <div className="hero-visual relative mx-auto hidden aspect-square w-full max-w-[480px] md:block" aria-hidden>
          <div className="absolute inset-[12%]">
            <div className="orb absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 via-blue-500/20 to-violet-500/30 blur-2xl" />
            <div className="absolute inset-0 rounded-full border border-accent/30 [animation:spin-slow_40s_linear_infinite]">
              <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_#00ff9c]" />
            </div>
            <div className="absolute inset-8 rounded-full border border-dashed border-line [animation:spin-slow_60s_linear_infinite_reverse]" />
          </div>

        {/* Photo: circle inside the spinning ring */}
<div className="absolute inset-[19%] rounded-full p-1.5 bg-gradient-to-br from-accent/70 via-accent/10 to-transparent shadow-[0_0_60px_rgba(0,255,156,.25)]">
  <img
    src="/ak.png"
    alt="Afnan Aziz"
    width="400"
    height="400"
    fetchpriority="high"
    className="h-full w-full rounded-full border border-accent/40 object-cover object-top"
  />
</div>
          {badges.map(([Icon, n, pos, c]) => (
            <div key={n} className={`absolute ${pos}`}>
              <div className="float glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white">
                <Icon style={{ color: c }} />{n}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}