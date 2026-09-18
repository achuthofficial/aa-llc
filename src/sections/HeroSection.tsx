import ContactButton from '../components/ContactButton'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Price', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

// Served from public/. The source render is 4096², resized to 2x the largest
// display width and encoded as WebP so the hero image is ~73KB rather than 7MB.
const PORTRAIT_URL = '/hero-portrait.webp'

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <FadeIn as="nav" delay={0} y={-20} className="px-6 pt-6 md:px-10 md:pt-8">
        <ul className="flex items-center justify-between">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      <div className="overflow-hidden px-6 md:px-10">
        <FadeIn as="h1" delay={0.15} y={40}>
          {/*
            Sizes are tuned so "AA STUDIOZ" fills the gutters edge-to-edge without
            clipping. md dips below the sm value on purpose: the horizontal padding
            jumps from px-6 to px-10 there, so the available width shrinks.
          */}
          <span className="hero-heading block w-full whitespace-nowrap text-[14.8vw] font-black uppercase leading-none tracking-tight sm:text-[16.4vw] md:text-[15.8vw] lg:text-[16.3vw]">
            AA Studioz
          </span>
        </FadeIn>
      </div>

      <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={PORTRAIT_URL}
              alt="3D isometric scene of a character studying data charts through a magnifying glass"
              width={1040}
              height={1040}
              className="h-auto w-full select-none"
              draggable={false}
              // Hero image is the LCP element, so it loads eagerly and at high priority.
              fetchPriority="high"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  )
}
