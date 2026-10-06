import { useState } from 'react'
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import MagneticButton from '../components/MagneticButton'
import { profile } from '../data'

const rules = {
  name: (v) => (v.trim().length < 2 ? 'Please enter your name' : ''),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email address'),
  subject: (v) => (v.trim().length < 3 ? 'Add a short subject' : ''),
  message: (v) => (v.trim().length < 10 ? 'Tell me a bit more (10+ characters)' : ''),
}
const links = [[FiMail, 'Email', profile.email, `mailto:${profile.email}`], [FiLinkedin, 'LinkedIn', '/in/afnanaziz', profile.linkedin], [FiGithub, 'GitHub', '@afnanaziz', profile.github], [FaWhatsapp, 'WhatsApp', `+${profile.whatsapp}`, `https://wa.me/${profile.whatsapp}`]]

export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', subject: '', message: '' })
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => { setV({ ...v, [k]: e.target.value }); if (err[k]) setErr({ ...err, [k]: rules[k](e.target.value) }) }
  const submit = (e) => {
    e.preventDefault()
    const errs = Object.fromEntries(Object.keys(rules).map((k) => [k, rules[k](v[k])]))
    setErr(errs)
    if (Object.values(errs).some(Boolean)) return
    const text = `Hi Afnan! I'm ${v.name} (${v.email}).\n*${v.subject}*\n${v.message}`
    window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setSent(true); setV({ name: '', email: '', subject: '', message: '' })
  }
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 md:px-10 md:py-40">
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <p data-reveal className="mb-5 flex items-center gap-4 font-mono text-xs uppercase tracking-[.3em] text-accent"><span>07</span><span className="h-px w-12 bg-accent/50" />Contact</p>
        <h2 data-reveal className="max-w-5xl font-display text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-8xl">Have a Project in Mind? <span className="text-accent">Let's Build Something Great.</span></h2>
        <p data-reveal className="mt-8 max-w-2xl text-lg text-zinc-400">Whether you have an idea, need a full-stack application, or want to improve an existing product, let's talk.</p>
        <div className="mt-16 grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <ul className="space-y-3">{links.map(([Icon, n, t, h]) => (
            <li key={n} data-reveal><a href={h} target="_blank" rel="noreferrer" className="group flex items-center gap-5 rounded-2xl border border-line p-5 transition-all hover:border-accent/60 hover:bg-white/[.03]">
              <Icon className="text-2xl text-accent" /><span className="flex-1"><span className="block text-xs text-muted">{n}</span><span className="text-white">{t}</span></span>
              <FiArrowUpRight className="text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </a></li>
          ))}</ul>
          <form onSubmit={submit} noValidate data-reveal className="space-y-6" aria-label="Contact form">
            {Object.keys(rules).map((k) => (
              <div key={k}>
                <label htmlFor={k} className="font-mono text-xs uppercase tracking-widest text-muted">{k}</label>
                {k === 'message' ? <textarea id={k} rows={4} value={v[k]} onChange={set(k)} className="field resize-none" placeholder="Tell me about your project" aria-invalid={!!err[k]} aria-describedby={`${k}-e`} />
                  : <input id={k} type={k === 'email' ? 'email' : 'text'} value={v[k]} onChange={set(k)} className="field" placeholder={k === 'email' ? 'you@company.com' : k === 'name' ? 'Your name' : 'What is this about?'} aria-invalid={!!err[k]} aria-describedby={`${k}-e`} />}
                <p id={`${k}-e`} role="alert" className={`overflow-hidden text-xs text-red-400 transition-all duration-300 ${err[k] ? 'mt-2 max-h-6 opacity-100' : 'max-h-0 opacity-0'}`}>{err[k]}</p>
              </div>
            ))}
            <MagneticButton type="submit">Send Message</MagneticButton>
            <p role="status" className={`text-sm text-emerald-400 transition-opacity ${sent ? 'opacity-100' : 'opacity-0'}`}>Opening WhatsApp with your message… thank you!</p>
          </form>
        </div>
      </div>
    </section>
  )
}
