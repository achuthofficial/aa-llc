import FadeIn from '../components/FadeIn'
import { WHATSAPP_CONTACTS } from '../data/contact'

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Price', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer
      className="bg-[#0C0C0C] px-5 pb-10 sm:px-8 md:px-10"
      style={{ overflowX: 'clip' }}
    >
      <div
        className="flex flex-col gap-12 pt-12 sm:pt-14 md:pt-16"
        style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
      >
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-16">
          <FadeIn delay={0} className="flex flex-col gap-4">
            <span className="hero-heading text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl md:text-5xl">
              AA Studioz
            </span>
            <p
              className="max-w-[280px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] opacity-60"
              style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}
            >
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-4">
            <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-50">
              Menu
            </span>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col gap-4">
            <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-50">
              WhatsApp
            </span>
            <ul className="flex flex-col gap-2">
              {WHATSAPP_CONTACTS.map((contact) => (
                <li key={contact.region}>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium tracking-wide text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-base"
                  >
                    <span className="opacity-50">{contact.region}</span> {contact.display}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <div
          className="flex flex-col gap-2 pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
        >
          <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-50">
            &copy; {new Date().getFullYear()} AA Studioz. All rights reserved.
          </span>
          <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-50">
            Crafted with care
          </span>
        </div>
      </div>
    </footer>
  )
}
