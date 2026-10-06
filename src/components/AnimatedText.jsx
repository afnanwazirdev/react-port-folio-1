import useGsap from '../hooks/useGsap'
import gsap from 'gsap'

/** Word-by-word mask reveal when scrolled into view. */
export default function AnimatedText({ text, as: Tag = 'h2', className = '' }) {
  const ref = useGsap(({ root }) => {
    gsap.from(root.querySelectorAll('.w-in'), { yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.06, scrollTrigger: { trigger: root, start: 'top 85%', once: true } })
  })
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[.12em] align-top"><span className="w-in inline-block">{w}&nbsp;</span></span>
      ))}
    </Tag>
  )
}
