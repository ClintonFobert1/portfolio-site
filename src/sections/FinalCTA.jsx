import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { site } from '../data/site'
import Sunburst from '../components/Sunburst'
import { SplitLines, Reveal } from '../components/Reveal'

/** Black closing altar — radiant CTA. */
export default function FinalCTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [-45, 0])

  return (
    <section ref={ref} className="relative overflow-hidden bg-void py-32 text-center text-paper md:py-48">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[110vmax] w-[110vmax] -translate-x-1/2 -translate-y-1/2 text-ink"
        style={{ scale, rotate }}
      >
        <Sunburst rays={84} className="h-full w-full opacity-70" />
      </motion.div>
      <div className="tx-dots mask-fade-radial pointer-events-none absolute inset-0 text-ink opacity-30" />

      <div className="relative z-10 mx-auto max-w-5xl px-5">
        <p className="mono-label">Correspondence Invited</p>
        <h2 className="display-caps mt-8 text-6xl font-black sm:text-8xl">
          <SplitLines lines={['Let’s Build', 'Something']} />
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-md leading-relaxed opacity-60">
            A tool your team needs, a platform worth converting, or a hard problem
            that wants leverage — I’m listening.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link
            to="/contact"
            className="group relative mt-12 inline-block overflow-hidden border border-paper px-12 py-5 font-mono text-[0.75rem] uppercase tracking-[0.35em]"
          >
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
            <span className="relative">Start a conversation</span>
          </Link>
        </Reveal>
        <Reveal delay={0.4}>
          <a href={`mailto:${site.email}`} className="link-draw mono-label mt-8 inline-block opacity-60 hover:opacity-100">
            or write directly — {site.email}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
