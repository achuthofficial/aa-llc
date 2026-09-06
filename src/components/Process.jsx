import { PROCESS } from '../data/site'

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="shell">
        <div className="head" data-reveal>
          <div className="reveal">
            <span className="eyebrow">How it works</span>
            <h2 className="h2 head__title">
              From first message
              <br />
              to <em className="serif grad-text">live</em>.
            </h2>
          </div>
          <p className="head__aside reveal" style={{ '--d': '140ms' }}>
            No agency runaround. You talk to the people building the thing, from
            the first WhatsApp message to the handover.
          </p>
        </div>

        <div className="process">
          {PROCESS.map((p, i) => (
            <div
              className="step reveal"
              data-reveal
              key={p.step}
              style={{ '--d': `${i * 90}ms` }}
            >
              <span className="step__num">STEP {p.step}</span>
              <h3 className="step__title">{p.title}</h3>
              <p className="step__body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
