/** A prospect: one local business, plus everything we track about winning it. */
export type Lead = {
  id: string
  name: string
  category: string
  address: string
  phone: string
  /** Empty string means no website — the whole reason this lead is worth calling. */
  website: string
  rating: number | null
  reviewCount: number | null
  mapsUrl: string
  lat: number | null
  lng: number | null
  status: LeadStatus
  buildFee: number
  monthlyFee: number
  notes: string
  source: LeadSource
  addedAt: string
  updatedAt: string
}

export type LeadStatus = 'new' | 'contacted' | 'pitched' | 'won' | 'lost'

export type LeadSource = 'demo' | 'places' | 'csv' | 'manual'

export const LEAD_STATUSES: LeadStatus[] = ['new', 'contacted', 'pitched', 'won', 'lost']

export const STATUS_LABELS: Record<LeadStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  pitched: 'Pitched',
  won: 'Won',
  lost: 'Lost',
}

/** Tailwind classes per status, so pills and columns stay in sync everywhere. */
export const STATUS_STYLES: Record<LeadStatus, { pill: string; dot: string }> = {
  new: { pill: 'bg-sky-400/10 text-sky-300 ring-sky-400/30', dot: 'bg-sky-400' },
  contacted: { pill: 'bg-amber-400/10 text-amber-300 ring-amber-400/30', dot: 'bg-amber-400' },
  pitched: { pill: 'bg-violet-400/10 text-violet-300 ring-violet-400/30', dot: 'bg-violet-400' },
  won: { pill: 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/30', dot: 'bg-emerald-400' },
  lost: { pill: 'bg-white/5 text-white/40 ring-white/10', dot: 'bg-white/30' },
}

/** Everything the site templates render. One draft per site you build. */
export type SiteContent = {
  businessName: string
  tagline: string
  category: string
  about: string
  services: SiteService[]
  testimonials: SiteTestimonial[]
  phone: string
  whatsapp: string
  email: string
  address: string
  hours: string
  mapsUrl: string
  ctaLabel: string
  heroImage: string
  builtBy: string
  builtByUrl: string
}

export type SiteService = {
  name: string
  description: string
  price: string
}

export type SiteTestimonial = {
  quote: string
  author: string
}

export type SiteDraft = {
  id: string
  leadId: string | null
  templateId: string
  paletteId: string
  content: SiteContent
  createdAt: string
  updatedAt: string
}

export type Settings = {
  /** Google Maps Platform key, stored only in this browser. */
  googleApiKey: string
  defaultBuildFee: number
  defaultMonthlyFee: number
  currency: CurrencyCode
  studioName: string
  contactName: string
  whatsappNumber: string
  email: string
  siteUrl: string
}

export type CurrencyCode = 'USD' | 'INR' | 'GBP' | 'EUR' | 'AUD' | 'CAD' | 'AED'

export const CURRENCIES: Record<CurrencyCode, { symbol: string; locale: string }> = {
  USD: { symbol: '$', locale: 'en-US' },
  INR: { symbol: '₹', locale: 'en-IN' },
  GBP: { symbol: '£', locale: 'en-GB' },
  EUR: { symbol: '€', locale: 'de-DE' },
  AUD: { symbol: 'A$', locale: 'en-AU' },
  CAD: { symbol: 'C$', locale: 'en-CA' },
  AED: { symbol: 'AED ', locale: 'en-AE' },
}
