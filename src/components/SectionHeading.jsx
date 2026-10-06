export default function SectionHeading({ index, eyebrow, title, className = '' }) {
  return (
    <div className={`mb-14 md:mb-20 ${className}`}>
      <p data-reveal className="mb-5 flex items-center gap-4 font-mono text-xs uppercase tracking-[.3em] text-accent">
        <span>{index}</span><span className="h-px w-12 bg-accent/50" />{eyebrow}
      </p>
      <h2 data-reveal className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl">{title}</h2>
    </div>
  )
}
