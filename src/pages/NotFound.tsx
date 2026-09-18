import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#0C0C0C] px-6 text-center">
      <h1
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(4rem, 18vw, 200px)' }}
      >
        404
      </h1>
      <p
        className="font-light uppercase tracking-wide text-[#D7E2EA]"
        style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
      >
        this page drifted out of orbit
      </p>
      <Link
        to="/"
        className="flex items-center gap-3 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
      >
        <ArrowLeft size={18} strokeWidth={2} />
        back home
      </Link>
    </main>
  )
}
