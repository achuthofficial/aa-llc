import FadeIn from '../components/FadeIn'
import WhatsAppButton from '../components/WhatsAppButton'
import { WHATSAPP_CONTACTS } from '../data/contact'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-[#0C0C0C] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn as="h2" delay={0} y={40}>
        <span
          className="hero-heading block text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </span>
      </FadeIn>

      <FadeIn delay={0.15} y={20} className="mt-10 sm:mt-12 md:mt-14">
        <p
          className="max-w-[560px] text-center font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
          style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
        >
          got a project in mind? message us on whatsapp — we reply fast
        </p>
      </FadeIn>

      <FadeIn delay={0.3} y={20} className="mt-12 sm:mt-14 md:mt-16">
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
          {WHATSAPP_CONTACTS.map((contact) => (
            <WhatsAppButton key={contact.region} contact={contact} />
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
