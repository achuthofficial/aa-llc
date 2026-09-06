import { STATS } from '../data/site'
import useCountUp from '../hooks/useCountUp'

function Stat({ value, suffix, label }) {
  const [ref, current] = useCountUp(value)

  return (
    <div className="stat" ref={ref}>
      <span className="stat__value">
        {current}
        <span className="grad-text">{suffix}</span>
      </span>
      <span className="stat__label">{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="section section--tight">
      <div className="shell">
        <div className="stats reveal" data-reveal>
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
