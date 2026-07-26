import { motion } from 'framer-motion'
import { SplitLines } from './Reveal'
import Sunburst from './Sunburst'

/** Shared inner-page hero: mono kicker, giant engraved title, optional intro. */
export default function PageHeader({ kicker, title, intro, invert = false }) {
  const lines = Array.isArray(title) ? title : [title]
  const theme = invert ? 'bg-paper text-void' : 'bg-void text-paper'

  return (
    <section className={`relative overflow-hidden ${theme}`}>
      <div className="pointer-events-none absolute -right-72 -top-72 h-[46rem] w-[46rem] text-ink opacity-25">
        <Sunburst className="h-full w-full animate-spin-slower" />
      </div>
      <div className={`tx-dots pointer-events-none absolute inset-0 opacity-[0.05] ${invert ? 'text-void' : 'text-paper'}`} />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
        <motion.p
          className="mono-label text-ink-bright"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {kicker}
        </motion.p>
        <h1 className="display-caps mt-6 text-5xl font-black sm:text-7xl lg:text-8xl">
          <SplitLines lines={lines} delay={0.15} />
        </h1>
        {intro && (
          <motion.p
            className="mt-8 max-w-2xl text-base leading-relaxed opacity-70 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {intro}
          </motion.p>
        )}
      </div>
      <div className="rule-etched" />
    </section>
  )
}
