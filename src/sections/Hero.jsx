import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { site } from '../data/site'
import Sunburst from '../components/Sunburst'
import { SplitLines } from '../components/Reveal'
import { useLenis } from '../lib/scroll'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const lenis = useLenis()

  const raysRotate = useTransform(scrollYProgress, [0, 1], [0, 90])
  const raysScale = useTransform(scrollYProgress, [0, 1], [1, 1.6])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const handleScrollDown = () => {
    const scrollTarget = window.innerHeight
    if (lenis) {
      lenis.scrollTo(scrollTarget)
    } else {
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' })
    }
  }

  return (
    <section ref={ref} className="relative flex min-h-svh flex-col overflow-hidden bg-void text-paper">
      {/* radiant emblem */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[150vmax] w-[150vmax] -translate-x-1/2 -translate-y-1/2 text-ink"
        style={{ rotate: raysRotate, scale: raysScale, opacity: fade }}
      >
        <Sunburst rays={96} innerRadius={90} outerRadius={490} className="h-full w-full opacity-60" />
      </motion.div>

      {/* halftone fields */}
      <div className="tx-dots mask-fade-radial pointer-events-none absolute inset-0 text-ink opacity-40" />
      <div className="tx-dots pointer-events-none absolute inset-0 text-paper opacity-[0.05]" />

      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 text-center"
        style={{ y: titleY, opacity: fade }}
      >
        <motion.p
          className="mono-label"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {site.name} — {site.role}
        </motion.p>

        <h1 className="display-caps mt-8 text-[13.5vw] font-black leading-[0.95] sm:text-[11vw] lg:text-[9vw]">
          <SplitLines
            lines={site.heroLines}
            delay={0.35}
            stagger={0.14}
            lineClassName="[&:nth-child(1)]:text-paper"
          />
        </h1>

        <motion.p
          className="mt-10 max-w-xl text-sm leading-relaxed opacity-60 md:text-base"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          {site.tagline} AI does the heavy lifting — I do the engineering that makes it real.
        </motion.p>
      </motion.div>

      {/* bottom strip */}
      <motion.div
        className="relative z-10 flex items-center justify-between px-5 pb-6 md:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <p className="mono-label hidden opacity-50 sm:block">{site.location}</p>
        <button
          type="button"
          onClick={handleScrollDown}
          className="mono-label flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
        >
          Scroll <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </button>
        <p className="mono-label hidden opacity-50 sm:block">Est. fobertwebsites.com</p>
      </motion.div>
    </section>
  )
}
