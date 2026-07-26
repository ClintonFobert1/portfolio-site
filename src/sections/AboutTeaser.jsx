import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/site'
import SectionHeading from '../components/SectionHeading'
import Sunburst from '../components/Sunburst'
import { Reveal } from '../components/Reveal'

/** Black section — the figure behind the work. */
export default function AboutTeaser() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const haloRotate = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section ref={ref} className="relative overflow-hidden bg-void text-paper">
      <div className="tx-lines pointer-events-none absolute inset-0 text-paper opacity-[0.04]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
        <SectionHeading number="02" kicker="The Figure" title="Man & Machine" />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-12">
          {/* devotional portrait emblem */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-square max-w-md border border-paper/20">
              <div className="tx-dots-lg mask-fade-radial absolute inset-0 text-ink opacity-60" />
              <motion.div className="absolute inset-0 p-6 text-ink" style={{ rotate: haloRotate }}>
                <Sunburst rays={72} innerRadius={150} outerRadius={470} className="h-full w-full" />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="display-caps text-engrave-outline text-[8rem] font-black text-paper md:text-[10rem]">
                  CF
                </span>
              </div>
              <span className="mono-label absolute left-4 top-4 opacity-50">Fig. 1</span>
              <span className="mono-label absolute bottom-4 right-4 opacity-50">The Builder</span>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="display-caps text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
                “I use AI to build apps, tools, and websites —{' '}
                <span className="text-ink-bright">then do the manual engineering</span> that makes
                them survive contact with reality.”
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl leading-relaxed opacity-60">
                {site.intro}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-12 grid grid-cols-2 gap-px border border-paper/15 bg-paper/15 sm:grid-cols-4">
                {site.stats.map((s) => (
                  <div key={s.label} className="bg-void p-5">
                    <p className="display-caps text-3xl font-bold text-ink-bright md:text-4xl">{s.value}</p>
                    <p className="mono-label mt-3 leading-relaxed normal-case tracking-[0.15em] opacity-60">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                to="/about"
                className="group mt-12 inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-paper/80 transition-colors hover:text-ink-bright"
              >
                Full portrait <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
