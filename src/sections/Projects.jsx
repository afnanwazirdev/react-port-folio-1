import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="03" eyebrow="Projects" title="Selected Work" />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}



