import { WORK } from '../data/site'
import { ArrowUpRight } from './icons'

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="head" data-reveal>
          <div className="reveal">
            <span className="eyebrow">Selected work</span>
            <h2 className="h2 head__title">
              Shipped, measured,
              <br />
              <em className="serif accent-text">still running</em>.
            </h2>
          </div>
          <p className="head__aside reveal" style={{ '--d': '140ms' }}>
            A sample of recent engagements across product, AI, security and
            creative. Full case studies available on request.
          </p>
        </div>

        <div className="work-grid">
          {WORK.map((w, i) => (
            <article
              key={w.title}
              className="card reveal"
              data-reveal
              style={{ '--d': `${i * 110}ms` }}
              data-cursor="hover"
            >
              <div className="card__orb" />
              <div className="card__mesh" />

              <div className="card__top">
                <span className="card__cat">{w.category}</span>
                <span className="card__year">{w.year}</span>
              </div>

              <div>
                <h3 className="card__title">{w.title}</h3>
                <p className="card__blurb">{w.blurb}</p>
                <span className="card__metric">
                  {w.metric}
                  <ArrowUpRight className="btn__arrow" style={{ marginLeft: 'auto' }} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
