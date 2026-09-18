import FadeIn from '../components/FadeIn'

type Service = {
  number: string
  name: string
  description: string
}

const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Web Design',
    description:
      'Storefronts and marketing sites for small shops through to big-box retail — designed to look unmistakable and built to convert.',
  },
  {
    number: '02',
    name: 'AI Automation',
    description:
      'Agentic workflows and integrations that quietly take the repetitive work off your team and hand back the hours.',
  },
  {
    number: '03',
    name: 'Mobile & Desktop Apps',
    description:
      'Native-feeling products for phone and desktop, carried from first prototype all the way to the store listing.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Identity systems, visual language and 3D art direction that make a brand impossible to scroll past.',
  },
  {
    number: '05',
    name: 'SaaS Applications',
    description:
      'End-to-end SaaS builds — auth, billing, dashboards and the infrastructure humming underneath them.',
  },
  {
    number: '06',
    name: 'Data Science',
    description:
      'Core data science problems solved properly: modelling, forecasting and the pipelines that keep them fed.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn as="h2" delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28">
        <span
          className="block text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </span>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            className="flex items-center gap-5 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
            style={{
              borderTop: index === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
            }}
          >
            <span
              className="shrink-0 font-black leading-none text-[#0C0C0C]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', width: 'clamp(4.5rem, 15vw, 210px)' }}
            >
              {service.number}
            </span>

            <div className="flex flex-col gap-2 sm:gap-3">
              <h3
                className="font-medium uppercase leading-tight text-[#0C0C0C]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
