import HeroCanvas from './HeroCanvas'
import WhatsAppButton from './WhatsAppButton'
import { ArrowDown, ArrowUpRight } from './icons'
import { WHATSAPP_DISPLAY } from '../data/site'

const CHIPS = ['Web Apps', 'Agentic AI', 'Cyber Security', 'Blender 3D', 'AI Video Ads']

export default function Hero() {
  return (
    <section className="hero" id="top">
      <HeroCanvas />
      <div className="hero__veil" />
      <div
        className="glow"
        style={{ width: '48vw', height: '48vw', left: '-12vw', top: '2vh', background: 'rgba(28,63,156,0.09)' }}
      />
      <div
        className="glow"
        style={{ width: '40vw', height: '40vw', right: '-10vw', top: '26vh', background: 'rgba(28,63,156,0.06)' }}
      />

      <div className="shell hero__inner">
        <div className="hero__top">
          <div className="hero__badge reveal is-in">
            <span className="hero__dot" />
            Available for new projects — Q4 2026
          </div>
          <a
            className="mono muted link-sweep"
            href="#services"
            style={{ paddingTop: '0.4rem' }}
          >
            Four disciplines, one team <ArrowUpRight size={12} />
          </a>
        </div>

        <h1 className="display hero__title" data-reveal>
          <span className="line mask-line" style={{ '--d': '80ms' }}>
            <span>We build the</span>
          </span>
          <span className="line mask-line" style={{ '--d': '190ms' }}>
            <span>
              <em className="serif accent-text">intelligent</em> edge
            </span>
          </span>
          <span className="line mask-line" style={{ '--d': '300ms' }}>
            <span>of your business.</span>
          </span>
        </h1>

        <div className="hero__bottom">
          <div data-reveal className="reveal" style={{ '--d': '420ms' }}>
            <p className="lead">
              AA Digital Studio is a boutique freelance studio shipping high-performance web
              applications, autonomous AI agents, hardened security programs and
              Blender-crafted 3D &amp; AI video advertising — end to end, under one roof.
            </p>
            <div className="hero__actions">
              <WhatsAppButton size="btn--lg" showArrow>
                Book a consultation
              </WhatsAppButton>
              <a className="btn btn--ghost btn--lg" href="#work" data-cursor="hover">
                <span className="btn__label">
                  See the work <ArrowUpRight className="btn__arrow" />
                </span>
              </a>
            </div>
          </div>

          <div className="hero__side reveal" data-reveal style={{ '--d': '540ms' }}>
            <div className="hero__chips">
              {CHIPS.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
            <p className="mono muted">
              Direct line · {WHATSAPP_DISPLAY}
            </p>
          </div>
        </div>

        <div className="hero__scroll mono">
          <ArrowDown /> Scroll to explore
        </div>
      </div>
    </section>
  )
}
