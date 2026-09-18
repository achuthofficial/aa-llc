export type WhatsAppContact = {
  region: string
  /** Human-readable number shown on the button. */
  display: string
  /** wa.me deep link — digits only, country code first, no plus or spaces. */
  href: string
}

export const WHATSAPP_CONTACTS: WhatsAppContact[] = [
  {
    region: 'India',
    display: '+91 90142 62115',
    href: 'https://wa.me/919014262115',
  },
  {
    region: 'USA',
    display: '+1 940 536 3431',
    href: 'https://wa.me/19405363431',
  },
]
