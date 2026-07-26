import { motion } from 'framer-motion'
import { EASE } from './Reveal'

/** Ink-wipe page transition: a blue panel sweeps the viewport between routes. */
export default function PageTransition({ children }) {
  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[70] bg-ink"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        style={{ transformOrigin: 'top' }}
      >
        <div className="tx-dots h-full w-full text-paper opacity-15" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.25 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        {children}
      </motion.div>
    </>
  )
}
