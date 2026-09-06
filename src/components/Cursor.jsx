import { useEffect, useRef } from 'react'

/** Difference-blended dot + lagging ring that swells over interactive elements. */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const d = dot.current
    const r = ring.current
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf

    const move = (e) => {
      mx = e.clientX
      my = e.clientY
      d.style.transform = `translate3d(${mx}px, ${my}px, 0)`
    }

    const loop = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    const INTERACTIVE = 'a, button, [data-cursor="hover"], input, textarea, summary'
    const over = (e) => {
      if (e.target.closest?.(INTERACTIVE)) r.classList.add('is-hover')
    }
    const out = (e) => {
      if (e.target.closest?.(INTERACTIVE)) r.classList.remove('is-hover')
    }
    const down = () => r.classList.add('is-down')
    const up = () => r.classList.remove('is-down')

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
