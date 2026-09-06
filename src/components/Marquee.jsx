export default function Marquee({ items, variant = '', reverse = false }) {
  const doubled = [...items, ...items]

  return (
    <div
      className={`marquee ${variant} ${reverse ? 'marquee--reverse' : ''}`}
      aria-hidden="true"
    >
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span
            className={`marquee__item ${
              variant === 'marquee--xl' && i % 2 ? 'outline' : ''
            }`}
            key={`${item}-${i}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
