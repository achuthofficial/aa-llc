import WhatsAppButton from './WhatsAppButton'

const FACTS = [
  ['01', <><strong>Senior only.</strong> No juniors learning on your budget — every hour is billed by the person doing the work.</>],
  ['02', <><strong>Fixed scope, fixed price.</strong> You approve a written blueprint before we start. No surprise invoices.</>],
  ['03', <><strong>Weekly demos.</strong> A live staging link from week one, so you never wait for a big reveal.</>],
  ['04', <><strong>You own everything.</strong> Code, models, renders and docs transfer to you on completion.</>],
]

export default function Studio() {
  return (
    <section className="section" id="studio">
      <div className="shell studio">
        <div data-reveal>
          <span className="eyebrow reveal">The studio</span>
          <h2 className="h2 reveal" style={{ marginTop: '1.1rem', '--d': '80ms' }}>
            A small team
            <br />
            with an <em className="serif accent-text">unfair</em> range.
          </h2>
          <p className="lead reveal" style={{ marginTop: '1.4rem', '--d': '160ms' }}>
            We're freelancers by choice, not by circumstance. That means no
            account managers, no handoffs and no diluted work — just the people
            who can actually build it, talking to you directly.
          </p>

          <ul className="studio__list reveal" style={{ '--d': '240ms' }}>
            {FACTS.map(([k, node]) => (
              <li key={k}>
                <span className="studio__k">{k}</span>
                <span>{node}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '2.2rem' }} className="reveal">
            <WhatsAppButton showArrow message="Hi AA Digital Studio — I'd like to talk about working together.">
              Start a conversation
            </WhatsAppButton>
          </div>
        </div>

        <div className="studio__visual reveal" data-reveal style={{ '--d': '160ms' }}>
          <div className="studio__rings">
            <span className="ring" />
            <span className="ring" />
            <span className="ring" />
          </div>
          <div className="studio__core" />
        </div>
      </div>
    </section>
  )
}
