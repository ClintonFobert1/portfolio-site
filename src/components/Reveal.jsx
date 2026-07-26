import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/** Scroll-into-view reveal wrapper. */
export function Reveal({ children, delay = 0, y = 36, once = true, className = '', ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-12% 0px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/**
 * Headline lines that rise out of a clipping mask, staggered.
 * Observes the unclipped wrapper (a fully-clipped child never reports
 * as "in view" to IntersectionObserver), then animates the children.
 */
export function SplitLines({ lines, className = '', lineClassName = '', delay = 0, stagger = 0.09, as: Tag = 'span' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : undefined}
            transition={{ duration: 1, delay: delay + i * stagger, ease: EASE }}
          >
            <Tag>{line}</Tag>
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export { EASE }
