import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data'

function Card({ t, i }) {
  return (
    <figure data-reveal
      className={`glass flex flex-col justify-between rounded-3xl p-8 shadow-xl shadow-black/30 transition-transform duration-500 hover:-translate-y-2 ${i === 1 ? 'md:translate-y-10' : ''}`}>
      <blockquote><span className="font-display text-5xl leading-none text-accent">“</span><p className="mt-2 leading-relaxed text-zinc-300">{t.quote}</p></blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <span aria-hidden className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-accent/40 to-violet-500/40 font-display font-semibold text-white">{t.name[0]}</span>
        <span><span className="block font-semibold text-white">{t.name}</span><span className="text-xs text-muted">{t.role}, {t.company}</span></span>
      </figcaption>
    </figure>
  )
}
export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 pb-32 pt-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="06" eyebrow="Kind Words" title="Trusted by clients." />
        <div className="grid gap-6 md:grid-cols-3">{testimonials.map((t, i) => <Card key={t.name} t={t} i={i} />)}</div>
      </div>
    </section>
  )
}
