import WhatsAppButton from './WhatsAppButton'
import { WHATSAPP_DISPLAY, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './icons'

export default function CTA() {
  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="cta reveal" data-reveal>
          <div className="cta__grid" />
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Let's build
          </span>

          <h2 className="h2 cta__title">
            Book a <em className="serif accent-text">consultation</em>.
          </h2>

          <p className="lead cta__sub">
            One message, one call, one clear plan. Tell us what you're building —
            we'll tell you exactly what it takes.
          </p>

          <div className="cta__actions">
            <WhatsAppButton size="btn--lg" showArrow>
              Book a consultation
            </WhatsAppButton>
            <a
              className="btn btn--ghost btn--lg"
              href={whatsappLink('Hi AA Digital Studio — could you send over a quote for a project?')}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
            >
              <span className="btn__label">Request a quote</span>
            </a>
          </div>

          <a
            className="cta__phone link-sweep"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="btn__wa" />
            {WHATSAPP_DISPLAY}
          </a>

          <p className="cta__note">
            Opens WhatsApp with your message ready to send · Replies within 24 hours
          </p>
        </div>
      </div>
    </section>
  )
}
