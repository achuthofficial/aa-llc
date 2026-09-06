import { TESTIMONIALS } from '../data/site'

export default function Testimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className="section section--tight">
      <div className="shell">
        <div className="head" data-reveal>
          <div className="reveal">
            <span className="eyebrow">Client words</span>
            <h2 className="h2 head__title">
              What it's like
              <br />
              to <em className="serif grad-text">work with us</em>.
            </h2>
          </div>
        </div>
      </div>

      <div className="quotes-wrap">
        <div className="quotes">
          {items.map((t, i) => (
            <figure className="quote" key={`${t.name}-${i}`} data-cursor="hover">
              <span className="quote__mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="quote__text">{t.quote}</blockquote>
              <figcaption className="quote__who">
                <span className="quote__av">{t.name.charAt(0)}</span>
                <span>
                  <span className="quote__name" style={{ display: 'block' }}>
                    {t.name}
                  </span>
                  <span className="quote__role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
