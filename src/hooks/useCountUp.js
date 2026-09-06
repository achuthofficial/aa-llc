import { useEffect, useRef, useState } from 'react'

/** Counts from 0 to `target` once the element scrolls into view. */
export default function useCountUp(target, duration = 1600) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const run = () => {
      if (started.current) return
      started.current = true

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return setValue(target)

      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        // easeOutExpo
        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
        setValue(Math.round(eased * target))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    if (!('IntersectionObserver' in window)) return run()

    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && run(),
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return [ref, value]
}
