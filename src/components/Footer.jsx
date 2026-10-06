import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { profile } from '../data'
import { goTo } from './Navbar'

export default function Footer() {
  const socials = [['GitHub', profile.github, FiGithub], ['LinkedIn', profile.linkedin, FiLinkedin], ['Instagram', profile.instagram, FiInstagram], ['WhatsApp', `https://wa.me/${profile.whatsapp}`, FaWhatsapp]]
  return (
    <footer className="border-t border-line px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-white">Afnan Aziz<span className="text-accent">.</span></p>
          <p className="mt-1 text-sm text-muted">MERN Stack Developer</p>
        </div>
        <ul className="flex gap-3">{socials.map(([n, h, Icon]) => (
          <li key={n}><a href={h} target="_blank" rel="noreferrer" aria-label={n} className="grid h-11 w-11 place-items-center rounded-full border border-line text-zinc-300 transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"><Icon /></a></li>
        ))}</ul>
        <button onClick={() => goTo('home')} aria-label="Back to top" className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-white">
          Back to top <span className="grid h-11 w-11 place-items-center rounded-full border border-line transition-colors group-hover:border-accent"><FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" /></span>
        </button>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-muted">Designed &amp; Built by Afnan Aziz © 2026</p>
    </footer>
  )
}
