import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onDone }) {
  const root = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const o = { v: 0 }
    const tl = gsap.timeline({ onComplete: onDone })
    tl.to(o, { v: 100, duration: reduce ? 0.1 : 0.9, ease: 'power2.inOut', onUpdate: () => setN(Math.round(o.v)) })
      .to('.pre-name', { yPercent: -100, opacity: 0, duration: reduce ? 0 : 0.5, ease: 'power3.in' })
      .to(root.current, { yPercent: -100, duration: reduce ? 0 : 0.9, ease: 'expo.inOut' }, '-=.1')
    return () => tl.kill()
  }, [onDone])
  return (
    <div ref={root} role="status" aria-label="Loading" className="fixed inset-0 z-[100] flex items-end justify-between bg-ink p-6 md:p-12">
      <p className="pre-name font-display text-lg font-semibold tracking-tight text-white">Afnan Aziz<span className="text-accent">.</span></p>
      <p className="font-display text-7xl font-semibold tabular-nums text-white md:text-9xl">{n}</p>
    </div>
  )
}
