import { useState } from 'react'
import { FAQS, WHATSAPP_DISPLAY } from '../data/site'
import WhatsAppButton from './WhatsAppButton'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="shell faq">
        <div data-reveal>
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="h2 reveal" style={{ marginTop: '1.1rem', '--d': '80ms' }}>
            Good
            <br />
            <em className="serif accent-text">questions</em>.
          </h2>
          <p
            className="reveal"
            style={{ marginTop: '1.3rem', color: 'var(--ink-dim)', maxWidth: '30ch', '--d': '160ms' }}
          >
            Anything else? Message us on WhatsApp at {WHATSAPP_DISPLAY} — we
            usually reply the same day.
          </p>
          <div style={{ marginTop: '1.6rem' }} className="reveal">
            <WhatsAppButton variant="ghost" size="btn--sm" showArrow message="Hi AA Digital Studio — I have a question about your services.">
              Ask a question
            </WhatsAppButton>
          </div>
        </div>

        <div className="faq__list reveal" data-reveal>
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={f.q}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  {f.q}
                  <span className="faq__icon" aria-hidden="true" />
                </button>
                <div className="faq__panel" id={`faq-panel-${i}`}>
                  <div className="faq__panelinner">
                    <p className="faq__a">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
