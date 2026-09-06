import { useEffect, useState } from 'react'
import Lenis from 'lenis'

import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Stats from './components/Stats'
import Studio from './components/Studio'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

import useReveal from './hooks/useReveal'
import { CAPABILITIES } from './data/site'

const BANNER = [
  'Web Applications',
  'Agentic AI',
  'Cyber Security',
  '3D & AI Video',
]

export default function App() {
  const [ready, setReady] = useState(false)

  useReveal([ready])

  /* Smooth scrolling + anchor handling */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href')
      const target = id === '#top' ? 0 : document.querySelector(id)
      if (target === null) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: id === '#top' ? 0 : -70 })
    }

    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  /* Scroll progress bar */
  useEffect(() => {
    const bar = document.querySelector('.progress')
    if (!bar) return

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      bar.style.transform = `scaleX(${p})`
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <Cursor />
      <div className="progress" />

      <Nav />

      <main>
        <Hero />
        <Marquee items={CAPABILITIES} />
        <Services />
        <Marquee items={BANNER} variant="marquee--xl" />
        <Work />
        <Stats />
        <Process />
        <Studio />
        <Testimonials />
        <Faq />
        <CTA />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
