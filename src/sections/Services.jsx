import { FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="05" eyebrow="Services" title="What I Can Do For You." />
        <ul className="border-t border-line">
          {services.map((s, i) => (
            <li key={s.title} data-reveal className="group border-b border-line transition-colors duration-500 hover:bg-white/[.02] focus-within:bg-white/[.02]">
              <a href="#contact" onClick={(e) => { e.preventDefault(); window.__lenis ? window.__lenis.scrollTo('#contact') : document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }} className="block px-2 py-8 md:px-6 md:py-10">
                <div className="flex items-center gap-4 md:gap-10">
                  <span className="font-mono text-sm text-muted">0{i + 1}</span>
                  <s.icon className="hidden text-2xl text-muted transition-colors duration-500 group-hover:text-accent sm:block" />
                  <h3 className="flex-1 font-display text-2xl font-semibold text-white transition-transform duration-500 group-hover:translate-x-3 md:text-4xl">{s.title}</h3>
                  <FiArrowUpRight className="text-3xl text-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12 group-hover:text-accent" />
                </div>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] max-md:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="grid gap-4 pt-5 md:grid-cols-2 md:pl-[8.5rem]">
                      <p className="text-zinc-400">{s.desc}</p>
                      <p className="font-mono text-xs leading-6 text-accent/80">{s.more}</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
