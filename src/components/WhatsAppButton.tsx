import { MessageCircle } from 'lucide-react'
import type { WhatsAppContact } from '../data/contact'

export default function WhatsAppButton({ contact }: { contact: WhatsAppContact }) {
  return (
    <a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message AA Studioz on WhatsApp — ${contact.region}, ${contact.display}`}
      className="flex items-center gap-3 rounded-full px-8 py-3.5 text-white transition-transform duration-200 hover:scale-[1.03] sm:px-10 sm:py-4 md:px-12"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      <MessageCircle size={20} strokeWidth={2} className="shrink-0" aria-hidden="true" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[0.65rem] font-light uppercase tracking-widest opacity-80 sm:text-xs">
          {contact.region}
        </span>
        <span className="text-sm font-medium tracking-wide sm:text-base">{contact.display}</span>
      </span>
    </a>
  )
}
