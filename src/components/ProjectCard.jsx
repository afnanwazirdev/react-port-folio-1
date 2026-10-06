import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

export default function ProjectCard({ p, i }) {
  return (
    <article data-reveal
      className="group relative overflow-hidden rounded-3xl border border-line bg-panel transition-colors duration-500 hover:border-accent/60">
      <div className="relative aspect-[3/2] overflow-hidden">
        <img src={p.image} alt={`${p.title} preview`} loading="lazy" width="900" height="600" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-6 top-6 rounded-full border border-line bg-ink/60 px-4 py-1.5 text-xs backdrop-blur">{p.category}</span>
        <span className="absolute right-6 top-6 font-mono text-sm text-white/60">0{i + 1}</span>
      </div>
      <div className="relative -mt-24 p-6 md:p-9">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-white transition-transform duration-500 group-hover:-translate-y-1 md:text-4xl">{p.title}</h3>
          <FiArrowUpRight className="mt-1 text-3xl text-accent transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">{p.desc}</p>
        <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-zinc-300">{t}</li>)}</ul>
        <div className="mt-6 flex gap-3">
          <a href={p.live} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white">Live Demo</a>
          <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-white transition-colors hover:border-accent hover:text-accent"><FiGithub /> GitHub</a>
        </div>
      </div>
    </article>
  )
}
