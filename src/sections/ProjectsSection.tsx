import { useRef, type SyntheticEvent } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import FadeIn from '../components/FadeIn'

// Unsplash CDN. Swap an id here to change a card's artwork.
const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`

type Project = {
  number: string
  category: string
  name: string
  image: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'CRM & Dashboards',
    name: '5+ CRM solutions and admin dashboards for offline stores',
    image: unsplash('photo-1460925895917-afdab827c52f'),
  },
  {
    number: '02',
    category: 'Web',
    name: '14 websites and landing pages shipped',
    image: unsplash('photo-1498050108023-c5249f4df085'),
  },
  {
    number: '03',
    category: 'AI Automation',
    name: '4 happy clients running our AI automation',
    image: unsplash('photo-1677442136019-21780ecad995'),
  },
  {
    number: '04',
    category: 'Data Science',
    name: 'Data science services for the real estate domain',
    image: unsplash('photo-1560518883-ce09059eeffa'),
  },
  {
    number: '05',
    category: 'Computer Vision',
    name: 'Computer vision pipeline for the construction department',
    image: unsplash('photo-1504307651254-35680f356dfd'),
  },
]

const CARD_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

// The artwork sits on a branded panel, so a photo that fails to load leaves a
// deliberate gradient rather than a broken-image icon.
const PANEL_GRADIENT = 'linear-gradient(135deg, #1A1D22 0%, #2A2F37 55%, #14171B 100%)'

function hideBrokenImage(event: SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.style.display = 'none'
}

type ProjectCardProps = {
  project: Project
  index: number
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}

function ProjectCard({ project, index, progress, range, targetScale }: ProjectCardProps) {
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="sticky top-24 flex h-[62vh] items-start justify-center sm:h-[72vh] md:top-32 md:h-[85vh]">
      <motion.article
        className={`relative flex w-full origin-top flex-col border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${CARD_RADIUS}`}
        // The card fills its sticky box minus the stack offset, so the image takes
        // whatever height is left instead of leaving dead space below the card.
        style={{ scale, top: `${index * 28}px`, height: `calc(100% - ${index * 28}px)` }}
      >
        <div className="mb-4 flex shrink-0 items-center gap-3 sm:mb-6 sm:gap-6 md:mb-8 md:gap-8">
          <span
            className="shrink-0 font-black leading-none text-[#D7E2EA]"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            {project.number}
          </span>

          <div className="flex flex-col gap-1 sm:gap-2">
            <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
              {project.category}
            </span>
            <h3
              className="font-medium uppercase leading-tight text-[#D7E2EA]"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.9rem)' }}
            >
              {project.name}
            </h3>
          </div>
        </div>

        <div
          className={`min-h-0 w-full flex-1 overflow-hidden ${CARD_RADIUS}`}
          style={{ background: PANEL_GRADIENT }}
        >
          <img
            src={project.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            onError={hideBrokenImage}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.article>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn as="h2" delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28">
        <span
          className="hero-heading block text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </span>
      </FadeIn>

      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={project.number}
          project={project}
          index={index}
          progress={scrollYProgress}
          range={[index / PROJECTS.length, 1]}
          targetScale={1 - (PROJECTS.length - 1 - index) * 0.03}
        />
      ))}
    </section>
  )
}
