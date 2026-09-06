import { useEffect, useState } from 'react'
import { whatsappLink } from '../data/site'
import { WhatsAppIcon } from './icons'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className={`wa-float ${visible ? 'is-visible' : ''}`}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a consultation on WhatsApp"
      data-cursor="hover"
    >
      <span className="wa-float__pulse" />
      <WhatsAppIcon />
      <span className="wa-float__text">Book a consultation</span>
    </a>
  )
}
