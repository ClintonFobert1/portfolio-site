import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { featuredProducts } from '../data/products'
import SectionHeading from '../components/SectionHeading'
import Sunburst from '../components/Sunburst'
import { Reveal } from '../components/Reveal'

function FeatureRow({ product, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const emblemY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])
  const raysRotate = useTransform(scrollYProgress, [0, 1], [-20, 20])
  const flip = index % 2 === 1

  return (
    <div ref={ref} className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
      {/* emblem plate */}
      <Link
        to={`/products/${product.slug}`}
        className={`group relative block overflow-hidden border border-void/20 bg-paper transition-colors duration-500 hover:border-ink ${flip ? 'md:order-2' : ''}`}
      >
        <div className="relative aspect-[5/4]">
          <div className="tx-crosshatch absolute inset-0 text-void opacity-[0.08]" />
          <motion.div className="absolute inset-0 flex items-center justify-center" style={{ y: emblemY }}>
            <motion.div className="h-[120%] w-[120%] text-ink opacity-50" style={{ rotate: raysRotate }}>
              <Sunburst rays={64} className="h-full w-full" />
            </motion.div>
          </motion.div>
          <div className="tx-dots-lg mask-fade-radial absolute inset-0 text-ink opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="display-caps text-[9rem] font-black leading-none text-ink transition-transform duration-700 group-hover:scale-110 md:text-[12rem]">
              {product.plate}
            </span>
          </div>
          <span className="mono-label absolute left-5 top-5 text-void/60">Plate {product.plate}</span>
          <span className="mono-label absolute right-5 top-5 text-void/60">{product.status}</span>
          <span className="mono-label absolute bottom-5 left-5 text-void/60">{product.year}</span>
          <ArrowUpRight className="absolute bottom-5 right-5 h-5 w-5 text-ink transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
      </Link>

      {/* caption */}
      <Reveal className={flip ? 'md:order-1' : ''}>
        <p className="mono-label text-ink-bright">{product.category}</p>
        <h3 className="display-caps mt-4 text-4xl font-bold text-void sm:text-5xl">{product.title}</h3>
        <p className="mt-6 max-w-md leading-relaxed text-void/70">{product.summary}</p>
        <ul className="mt-8 space-y-3">
          {product.stack.slice(0, 4).map((s) => (
            <li key={s} className="flex items-center gap-3 text-sm text-void/60">
              <span className="h-1 w-1 rotate-45 bg-ink" /> {s}
            </li>
          ))}
        </ul>
        <Link
          to={`/products/${product.slug}`}
          className="group mt-10 inline-flex items-center gap-3 border border-void/30 px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-void transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
        >
          Examine the plate
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </div>
  )
}

/** White gallery of engraved product plates. */
export default function WorkShowcase() {
  return (
    <section className="relative bg-paper text-void">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
        <SectionHeading number="01" kicker="Selected Work" title="The Plates" />
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl leading-relaxed text-void/60">
            Tools and platforms engraved into production — each one built to remove a real
            bottleneck. Presented as plates, in the manner of a 19th-century catalogue.
          </p>
        </Reveal>

        <div className="mt-6 divide-y divide-void/10">
          {featuredProducts.map((p, i) => (
            <FeatureRow key={p.slug} product={p} index={i} />
          ))}
        </div>

        <Reveal className="flex justify-center pt-4">
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 border border-void px-8 py-4 font-mono text-[0.7rem] uppercase tracking-[0.3em] transition-colors duration-300 hover:bg-void hover:text-paper"
          >
            View the full catalogue
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
