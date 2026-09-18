import { MessageCircle } from 'lucide-react'
import type { WhatsAppContact } from '../data/contact'

export default function WhatsAppButton({ contact }: { contact: WhatsAppContact }) {
  return (
    <a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message AA Studioz on WhatsApp — ${contact.region}, ${contact.display}`}
      className="group flex items-center gap-3 rounded-full border-2 border-[#D7E2EA] bg-[#D7E2EA] px-8 py-3.5 text-[#0C0C0C] transition-colors duration-200 hover:bg-transparent hover:text-[#D7E2EA] sm:px-10 sm:py-4 md:px-12"
    >
      <MessageCircle size={20} strokeWidth={2} className="shrink-0" aria-hidden="true" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[0.65rem] font-light uppercase tracking-widest opacity-60 sm:text-xs">
          {contact.region}
        </span>
        <span className="text-sm font-medium tracking-wide sm:text-base">{contact.display}</span>
      </span>
    </a>
  )
}
