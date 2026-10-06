import { FiArrowRight } from 'react-icons/fi'

/** Link/button with magnetic pull, sliding fill and moving arrow. */
export default function MagneticButton({ href, onClick, children, variant = 'solid', arrow = true, type, className = '', ...rest }) {
  const Tag = href ? 'a' : 'button'
  const styles = variant === 'solid' ? 'bg-accent text-ink' : 'border border-line text-white'
  const fill = variant === 'solid' ? 'bg-white' : 'bg-accent'
  return (
    <Tag href={href} type={href ? undefined : type || 'button'} onClick={onClick}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-sm font-semibold ${styles} ${className}`} {...rest}>
      <span className={`absolute inset-0 translate-y-full rounded-full transition-transform duration-500 ease-out group-hover:translate-y-0 ${fill}`} />
      <span className={`relative flex items-center gap-3 transition-colors duration-300 ${variant === 'ghost' ? 'group-hover:text-ink' : ''}`}>
        {children}
        {arrow && <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </Tag>
  )
}
