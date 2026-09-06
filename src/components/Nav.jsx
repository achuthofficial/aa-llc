import { useEffect, useState } from 'react'
import { NAV_LINKS, WHATSAPP_DISPLAY } from '../data/site'
import WhatsAppButton from './WhatsAppButton'

export default function Nav() {
  const [stuck, setStuck] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let last = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      setStuck(y > 40)
      setHidden(y > 420 && y > last && !open)
      last = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav ${stuck ? 'is-stuck' : ''} ${hidden ? 'is-hidden' : ''}`}>
        <div className="shell nav__inner">
          <a className="brand" href="#top" aria-label="AA LLC home">
            <span className="brand__mark">AA</span>
            <span>
              AA LLC
              <span className="brand__sub">Digital Studio</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__right">
            <div className="nav__cta">
              <WhatsAppButton size="btn--sm" showArrow>
                Book a consultation
              </WhatsAppButton>
            </div>
            <button
              className={`nav__burger ${open ? 'is-open' : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="drawer__links" aria-label="Mobile">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${140 + i * 70}ms` }}
            >
              {l.label}
              <span>0{i + 1}</span>
            </a>
          ))}
        </nav>

        <div className="drawer__foot">
          <div>
            <p className="mono muted">Talk to us</p>
            <p style={{ fontSize: '1.15rem', marginTop: '0.35rem' }}>{WHATSAPP_DISPLAY}</p>
          </div>
          <WhatsAppButton className="btn--block" showArrow>
            Book a consultation
          </WhatsAppButton>
        </div>
      </div>
    </>
  )
}
