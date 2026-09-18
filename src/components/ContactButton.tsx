type ContactButtonProps = {
  label?: string
  href?: string
  className?: string
}

/**
 * Primary call to action: a solid "mist" pill on the dark page.
 * Pairs with LiveProjectButton, which is the outlined secondary variant.
 */
export default function ContactButton({
  label = 'Contact Us',
  href = '#contact',
  className = '',
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`inline-block shrink-0 rounded-full border-2 border-[#D7E2EA] bg-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#0C0C0C] transition-colors duration-200 hover:bg-transparent hover:text-[#D7E2EA] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
    >
      {label}
    </a>
  )
}
