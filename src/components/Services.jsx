import { useState } from 'react'
import { SERVICES } from '../data/site'
import { Plus } from './icons'
import WhatsAppButton from './WhatsAppButton'

export default function Services() {
  const [open, setOpen] = useState('web')

  return (
    <section className="section services" id="services">
      <div className="shell">
        <div className="head" data-reveal>
          <div className="reveal">
            <span className="eyebrow">What we do</span>
            <h2 className="h2 head__title">
              Four disciplines
              <br />
              that <em className="serif grad-text">compound</em>.
            </h2>
          </div>
          <p className="head__aside reveal" style={{ '--d': '140ms' }}>
            Most studios do one of these well. We combine them — so your product,
            your AI, your security posture and your creative all ship from the
            same brain.
          </p>
        </div>

        <div className="svc-list">
          {SERVICES.map((s, i) => {
            const isOpen = open === s.id
            return (
              <div
                key={s.id}
                className={`svc reveal ${isOpen ? 'is-open' : ''}`}
                data-reveal
                style={{ '--c': s.accent, '--d': `${i * 90}ms` }}
              >
                <button
                  className="svc__head"
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  aria-expanded={isOpen}
                  aria-controls={`svc-panel-${s.id}`}
                >
                  <span className="svc__index">{s.index}</span>
                  <span className="svc__titlewrap">
                    <span className="svc__title">{s.title}</span>
                    <span className="svc__line">{s.line}</span>
                  </span>
                  <span className="svc__toggle">
                    <Plus />
                  </span>
                </button>

                <div className="svc__panel" id={`svc-panel-${s.id}`}>
                  <div className="svc__panelinner">
                    <div className="svc__content">
                      <div />
                      <div>
                        <span className="svc__tag">{s.tag}</span>
                        <p className="svc__body">{s.body}</p>
                        <div style={{ marginTop: '1.6rem' }}>
                          <WhatsAppButton
                            variant="ghost"
                            size="btn--sm"
                            showArrow
                            message={`Hi AA LLC — I'd like to book a consultation about ${s.title}.`}
                          >
                            Discuss {s.title}
                          </WhatsAppButton>
                        </div>
                      </div>
                      <ul className="svc__bullets">
                        {s.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
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
