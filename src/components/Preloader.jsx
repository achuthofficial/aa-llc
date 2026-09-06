import { useEffect, useState } from 'react'

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let raf
    const start = performance.now()
    const DURATION = 1500

    const tick = (now) => {
      const p = Math.min((now - start) / DURATION, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setDone(true)
          onDone?.()
        }, 260)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <div className={`preloader ${done ? 'is-done' : ''}`} aria-hidden={done}>
      <div className="preloader__inner">
        <div className="preloader__row">
          <span className="preloader__word">
            AA <span className="serif accent-text">Digital Studio</span>
          </span>
          <span className="preloader__count">{String(count).padStart(3, '0')}</span>
        </div>
        <div className="preloader__bar">
          <div className="preloader__fill" style={{ width: `${count}%` }} />
        </div>
        <div className="preloader__meta mono">
          <span>Loading studio</span>
          <span>Est. 2016</span>
        </div>
      </div>
    </div>
  )
}
