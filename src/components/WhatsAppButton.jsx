import { whatsappLink } from '../data/site'
import { WhatsAppIcon, ArrowUpRight } from './icons'

/**
 * Every conversion path on the site funnels through this button:
 * it opens WhatsApp with a prefilled message to +1 (940) 536-3431.
 */
export default function WhatsAppButton({
  children = 'Book a consultation',
  message,
  variant = 'primary',
  size = '',
  className = '',
  showArrow = false,
}) {
  return (
    <a
      className={`btn btn--${variant} ${size} ${className}`}
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="hover"
    >
      <span className="btn__label">
        <WhatsAppIcon className="btn__wa" />
        {children}
        {showArrow && <ArrowUpRight className="btn__arrow" />}
      </span>
    </a>
  )
}
