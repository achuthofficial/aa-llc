import { useEffect, useRef } from 'react'

const NODE = '#1c3f9c'
const NODE_MUTED = '#8e95a6'

/**
 * Ambient "neural mesh": drifting nodes that link when close and lean
 * toward the pointer. Cheap enough to run at 60fps on a laptop GPU.
 */
export default function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let dpr = 1
    let nodes = []
    let raf
    let mouse = { x: -9999, y: -9999 }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const density = Math.min(Math.round((w * h) / 17000), 110)
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        r: Math.random() * 1.5 + 0.6,
        c: Math.random() > 0.55 ? NODE : NODE_MUTED,
      }))
    }

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const LINK = 132

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]

        n.x += n.vx
        n.y += n.vy

        if (n.x < -20) n.x = w + 20
        if (n.x > w + 20) n.x = -20
        if (n.y < -20) n.y = h + 20
        if (n.y > h + 20) n.y = -20

        // gentle pull toward the pointer
        const mdx = mouse.x - n.x
        const mdy = mouse.y - n.y
        const md2 = mdx * mdx + mdy * mdy
        if (md2 < 34000) {
          const f = (1 - md2 / 34000) * 0.5
          n.x += (mdx / Math.sqrt(md2 || 1)) * f
          n.y += (mdy / Math.sqrt(md2 || 1)) * f
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = n.c
        ctx.globalAlpha = 0.5
        ctx.fill()

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j]
          const dx = n.x - m.x
          const dy = n.y - m.y
          const d2 = dx * dx + dy * dy
          if (d2 > LINK * LINK) continue

          const alpha = (1 - Math.sqrt(d2) / LINK) * 0.16
          ctx.globalAlpha = alpha
          ctx.strokeStyle = n.c
          ctx.lineWidth = 0.6
          ctx.beginPath()
          ctx.moveTo(n.x, n.y)
          ctx.lineTo(m.x, m.y)
          ctx.stroke()
        }
      }

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    if (reduce) {
      draw()
      cancelAnimationFrame(raf)
    } else {
      raf = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('mouseout', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />
}
