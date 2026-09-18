import { CURRENCIES, type CurrencyCode } from '../types'

export function formatMoney(amount: number, currency: CurrencyCode) {
  const { locale } = CURRENCIES[currency]
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(Number.isFinite(amount) ? amount : 0)
}

export function formatDate(iso: string) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return '—'
  return date.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })
}

export function relativeDate(iso: string) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return '—'
  const days = Math.round((date.getTime() - Date.now()) / 86_400_000)
  if (days === 0) return 'today'
  if (days === -1) return 'yesterday'
  if (days > -30) return `${Math.abs(days)} days ago`
  return formatDate(iso)
}

/** Digits only, country code first — what wa.me expects. */
export function toWhatsAppNumber(input: string) {
  return input.replace(/\D/g, '')
}

export function whatsappLink(number: string, message: string) {
  const digits = toWhatsAppNumber(number)
  if (!digits) return ''
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export function telLink(number: string) {
  const cleaned = number.replace(/[^\d+]/g, '')
  return cleaned ? `tel:${cleaned}` : ''
}

/** Great-circle distance in km, used to sort search results by how close they are. */
export function distanceKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
) {
  const toRad = (deg: number) => (deg * Math.PI) / 180
  const earthRadius = 6371
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const lat1 = toRad(a.lat)
  const lat2 = toRad(b.lat)
  const h =
    Math.sin(dLat / 2) ** 2 + Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2)
  return 2 * earthRadius * Math.asin(Math.sqrt(h))
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}
