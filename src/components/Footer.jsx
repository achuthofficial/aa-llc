import { useEffect, useState } from 'react'
import { NAV_LINKS, SERVICES, WHATSAPP_DISPLAY, whatsappLink } from '../data/site'
import { ArrowUpRight } from './icons'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div className="footer__col">
            <a className="brand" href="#top" aria-label="AA LLC home">
              <span className="brand__mark">AA</span>
              <span>
                AA LLC
                <span className="brand__sub">Digital Studio</span>
              </span>
            </a>
            <p className="footer__blurb">
              Web applications, agentic AI, cyber security and 3D / AI video —
              engineered by a small senior team.
            </p>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Studio</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep"
                >
                  WhatsApp {WHATSAPP_DISPLAY} <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="#contact" className="link-sweep">
                  Book a consultation
                </a>
              </li>
              <li>Remote · Working worldwide</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} AA LLC. All rights reserved.</span>
          <span className="footer__clock">
            <span className="hero__dot" style={{ background: 'var(--cyan)' }} />
            LOCAL {time}
          </span>
          <a href="#top" className="link-sweep">
            Back to top ↑
          </a>
        </div>

        <div className="footer__wordmark" aria-hidden="true">
          AA LLC
        </div>
      </div>
    </footer>
  )
}
