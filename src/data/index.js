import { SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiGit, SiGithub, SiFirebase } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { FaMobileAlt } from 'react-icons/fa'
import { FiLayers, FiMonitor, FiServer, FiSmartphone, FiPenTool } from 'react-icons/fi'

// ✏️ EDIT HERE: replace contact details & links
export const profile = {
  name: 'Afnan Aziz',
  role: 'MERN Stack Developer',
  email: 'hello@afnanaziz.dev',
  whatsapp: '923341982718',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
  instagram: 'https://instagram.com/',
  resume: '/Afnan_Aziz_CV.pdf', // put your CV in /public
  photo: 'ak.png',
}

export const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact']

export const stats = [
  { value: 1, suffix: '+', label: 'Years Experience' },
  { value: 6, suffix: '+', label: 'Projects' },
  { value: 6, suffix: '+', label: 'Technologies' },
  { value: 100, suffix: '%', label: 'Passion' },
]

export const skills = [
  { name: 'React.js', icon: SiReact, note: 'UI & state' },
  { name: 'JavaScript', icon: SiJavascript, note: 'ES2024' },
  { name: 'TypeScript', icon: SiTypescript, note: 'Type-safe code' },
  { name: 'Node.js', icon: SiNodedotjs, note: 'Runtime' },
  { name: 'Express.js', icon: SiExpress, note: 'APIs & middleware' },
  { name: 'MongoDB', icon: SiMongodb, note: 'NoSQL data' },
  { name: 'Next.js', icon: SiNextdotjs, note: 'SSR & routing' },
  { name: 'REST APIs', icon: TbApi, note: 'Clean contracts' },
  { name: 'Git', icon: SiGit, note: 'Version control' },
  { name: 'GitHub', icon: SiGithub, note: 'Collaboration' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, note: 'Design systems' },
  { name: 'Firebase', icon: SiFirebase, note: 'Auth & realtime' },
  { name: 'React Native', icon: FaMobileAlt, note: 'Cross-platform apps' },
]

export const marquee = ['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'TypeScript', 'Tailwind', 'Git', 'React Native']

export const services = [
  { icon: FiLayers, title: 'Full Stack Web Development', desc: 'Building scalable and production-ready web applications using modern technologies.', more: 'MERN architecture · Auth · Payments · Deployment & CI/CD' },
  { icon: FiMonitor, title: 'Frontend Development', desc: 'Creating responsive, accessible and interactive interfaces with React and modern UI systems.', more: 'React · Tailwind · GSAP · Accessibility · Performance tuning' },
  { icon: FiServer, title: 'Backend Development', desc: 'Developing secure APIs, authentication systems, databases and scalable server-side architectures.', more: 'Node/Express · JWT · MongoDB schemas · Rate limiting & validation' },
  { icon: FiSmartphone, title: 'Mobile App Development', desc: 'Building modern cross-platform applications using React Native.', more: 'React Native · Expo · API integration · Push notifications' },
  { icon: FiPenTool, title: 'UI/UX Implementation', desc: 'Turning modern designs into highly polished, responsive and interactive digital experiences.', more: 'Figma to code · Design systems · Micro-interactions' },
]

// Placeholder artwork (SVG data-URI). Replace `image` with real screenshots, e.g. '/projects/shop.webp'
const art = (a, b, label) => 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="900" height="600" fill="#062417"/><rect x="60" y="60" width="780" height="480" rx="22" fill="url(#g)" opacity=".18"/><rect x="60" y="60" width="780" height="480" rx="22" fill="none" stroke="${a}" stroke-opacity=".5"/><g fill="${a}" opacity=".5"><rect x="100" y="100" width="180" height="14" rx="7"/><rect x="100" y="140" width="360" height="90" rx="14" opacity=".4"/><rect x="480" y="140" width="320" height="90" rx="14" opacity=".4"/><rect x="100" y="260" width="700" height="240" rx="14" opacity=".25"/></g><text x="450" y="395" font-size="46" text-anchor="middle" fill="#fff" font-family="sans-serif" font-weight="700">${label}</text></svg>`)

export const projects = [
  {
    title: 'Offline App',
    category: 'Web App',
    desc: 'Write a short description of what your offline app does.',
    tech: ['React', 'JavaScript' , 'HTML' , 'CSS' , 'Electron'],
    image: '/offlineapp.png',
    live: '#',
    github: '#',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    desc: 'Full-stack e-commerce platform with authentication, product management, shopping cart, payments and admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: art('#00ff9c', '#3b82f6', 'E-Commerce'),
    live: '#',
    github: '#',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web App',
    desc: 'Modern analytics dashboard with authentication, charts, role-based access and responsive UI.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    image: art('#a78bfa', '#00ff9c', 'SaaS Dashboard'),
    live: '#',
    github: '#',
  },
  {
    title: 'Social Media Application',
    category: 'Real-time',
    desc: 'Real-time social platform with user profiles, posts, comments, likes and messaging.',
    tech: ['MERN Stack', 'Socket.io'],
    image: art('#00ff9c', '#00ff9c', 'Social App'),
    live: '#',
    github: '#',
  },
  {
    title: 'Mobile Application',
    category: 'Mobile',
    desc: 'Cross-platform mobile application with modern UI and API integration.',
    tech: ['React Native', 'Node.js'],
    image: art('#f472b6', '#a78bfa', 'Mobile App'),
    live: '#',
    github: '#',
  },
]

export const experience = [
  { role: 'MERN Stack Developer', company: 'Freelance', period: '2024 — Present', desc: 'Building modern full-stack applications and scalable digital products for international clients.', tech: ['React', 'Node.js', 'MongoDB', 'Express'] },
  { role: 'Frontend Developer', company: 'Software House (Placeholder)', period: '2023 — 2024', desc: 'Shipped responsive, animated interfaces and reusable component libraries with React and GSAP.', tech: ['React', 'Tailwind', 'GSAP'] },
  { role: 'Junior Web Developer', company: 'Freelance', period: '2022 — 2023', desc: 'Delivered business websites and landing pages with a focus on performance and clean code.', tech: ['HTML', 'CSS', 'JavaScript'] },
]

export const testimonials = [
  { quote: 'Afnan delivered a polished, fast product ahead of schedule. Communication was clear throughout and the code was clean.', name: 'Sarah Mitchell', role: 'Product Manager', company: 'Northwind Labs' },
  { quote: 'One of the most reliable developers I have worked with. He turned our rough Figma into a smooth, production-ready app.', name: 'Daniel Brooks', role: 'Founder', company: 'LaunchPad Studio' },
  { quote: 'Great attention to detail, great performance. Our dashboard loads instantly and our users love the interactions.', name: 'Ayesha Khan', role: 'CTO', company: 'Craftly' },
]
