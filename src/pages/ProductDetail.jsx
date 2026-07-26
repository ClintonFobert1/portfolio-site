import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { products, getProduct } from '../data/products'
import Sunburst from '../components/Sunburst'
import { Reveal, SplitLines } from '../components/Reveal'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)

  if (!product) return <Navigate to="/products" replace />

  const index = products.findIndex((p) => p.slug === slug)
  const next = products[(index + 1) % products.length]

  return (
    <main className="bg-paper text-void">
      {/* plate hero */}
      <section className="relative overflow-hidden bg-void text-paper">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[90vmax] w-[90vmax] -translate-x-1/2 -translate-y-1/2 text-ink opacity-50">
          <Sunburst rays={84} className="h-full w-full animate-spin-slower" />
        </div>
        <div className="tx-dots mask-fade-radial pointer-events-none absolute inset-0 text-ink opacity-30" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-10 md:pb-28 md:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <Link to="/products" className="mono-label link-draw inline-flex items-center gap-2 opacity-70 hover:opacity-100">
              <ArrowLeft className="h-3.5 w-3.5" /> Catalogue
            </Link>
            <span className="mono-label text-ink-bright">Plate {product.plate}</span>
            <span className="mono-label opacity-50">{product.category}</span>
            <span className="mono-label opacity-50">{product.year}</span>
            <span className="mono-label border border-paper/30 px-3 py-1">{product.status}</span>
          </motion.div>

          <h1 className="display-caps mt-10 text-5xl font-black sm:text-7xl lg:text-8xl">
            <SplitLines lines={product.title.split(' ')} delay={0.2} stagger={0.08} />
          </h1>

          <motion.p
            className="mt-8 max-w-2xl text-lg leading-relaxed opacity-70"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            {product.summary}
          </motion.p>
        </div>
      </section>

      {/* body */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mono-label text-ink">The Account</p>
            </Reveal>
            {product.description.map((para, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="mt-6 text-lg leading-relaxed text-void/75">{para}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <p className="mono-label mt-14 text-ink">Notable Qualities</p>
              <ul className="mt-6 divide-y divide-void/10 border-y border-void/10">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-4 py-4">
                    <span className="font-display text-sm font-bold text-ink">{String(i + 1).padStart(2, '0')}</span>
                    <span className="leading-relaxed text-void/75">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden border border-void/20">
                <div className="relative aspect-square">
                  <div className="tx-crosshatch absolute inset-0 text-void opacity-[0.07]" />
                  <div className="absolute inset-0 flex items-center justify-center text-ink opacity-50">
                    <Sunburst rays={56} className="h-[125%] w-[125%]" />
                  </div>
                  <div className="tx-dots-lg mask-fade-radial absolute inset-0 text-ink opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="display-caps text-[10rem] font-black text-ink">{product.plate}</span>
                  </div>
                  <span className="mono-label absolute left-4 top-4 text-void/50">Plate {product.plate}</span>
                </div>
                <div className="border-t border-void/20 p-6">
                  <p className="mono-label text-void/50">Role</p>
                  <p className="mt-2 font-display text-lg font-semibold">{product.role}</p>
                  <p className="mono-label mt-6 text-void/50">Materials</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.stack.map((s) => (
                      <span key={s} className="border border-void/25 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-void/70">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* next plate */}
      <Link to={`/products/${next.slug}`} className="group relative block overflow-hidden border-t border-void/15 bg-paper">
        <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-14 transition-colors duration-500 group-hover:text-paper md:px-10">
          <div>
            <p className="mono-label text-ink transition-colors duration-500 group-hover:text-paper/70">Next Plate — {next.plate}</p>
            <p className="display-caps mt-3 text-3xl font-bold sm:text-5xl">{next.title}</p>
          </div>
          <ArrowRight className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </Link>
    </main>
  )
}
