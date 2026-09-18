import { useRef, type CSSProperties } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

type AnimatedTextProps = {
  text: string
  className?: string
  style?: CSSProperties
}

type CharProps = {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1])

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder keeps the layout stable while the animated copy fades in. */}
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')
  const totalChars = text.length
  let charIndex = 0

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wordIdx) => {
        const chars = word.split('')
        const node = (
          <span key={`word-${wordIdx}`} className="inline-block whitespace-nowrap">
            {chars.map((char) => {
              const start = charIndex / totalChars
              const end = (charIndex + 1) / totalChars
              charIndex += 1
              return <Char key={`${wordIdx}-${charIndex}`} char={char} progress={scrollYProgress} range={[start, end]} />
            })}
          </span>
        )
        // Account for the space that follows every word but the last one.
        charIndex += 1
        return (
          <span key={`wrap-${wordIdx}`}>
            {node}
            {wordIdx < words.length - 1 ? ' ' : null}
          </span>
        )
      })}
    </p>
  )
}
