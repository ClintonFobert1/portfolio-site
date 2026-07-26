import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { journal, getPost } from '../data/journal'
import { Reveal, SplitLines } from '../components/Reveal'
import Sunburst from '../components/Sunburst'

export default function JournalPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) return <Navigate to="/journal" replace />

  const index = journal.findIndex((p) => p.slug === slug)
  const next = journal[(index + 1) % journal.length]

  return (
    <main className="bg-paper text-void">
      <section className="relative overflow-hidden border-b border-void/10">
        <div className="pointer-events-none absolute -right-64 -top-64 h-[40rem] w-[40rem] text-ink opacity-15">
          <Sunburst className="h-full w-full animate-spin-slower" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 pb-14 pt-36 md:pt-44">
          <motion.div
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Link to="/journal" className="mono-label link-draw inline-flex items-center gap-2 text-void/60 hover:text-void">
              <ArrowLeft className="h-3.5 w-3.5" /> Field Notes
            </Link>
            <span className="mono-label text-ink">No. {post.number}</span>
            <span className="mono-label text-void/50">{post.date}</span>
            <span className="mono-label text-void/50">{post.readTime}</span>
          </motion.div>

          <h1 className="display-caps mt-8 text-4xl font-black sm:text-6xl">
            <SplitLines lines={[post.title]} delay={0.2} />
          </h1>

          <motion.div
            className="mt-6 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {post.tags.map((t) => (
              <span key={t} className="border border-void/20 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-void/60">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <Reveal>
          <p className="display-caps text-xl font-medium leading-relaxed text-ink sm:text-2xl">{post.excerpt}</p>
        </Reveal>
        <div className="mt-10 space-y-7">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <p className="text-lg leading-[1.85] text-void/75">
                {i === 0 ? (
                  <>
                    <span className="float-left mr-3 font-display text-6xl font-black leading-[0.8] text-ink">
                      {para.charAt(0)}
                    </span>
                    {para.slice(1)}
                  </>
                ) : (
                  para
                )}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-14 flex items-center gap-4">
            <span className="rule-etched flex-1" />
            <span className="text-ink">✦</span>
            <span className="rule-etched flex-1" />
          </div>
        </Reveal>
      </article>

      <Link to={`/journal/${next.slug}`} className="group relative block overflow-hidden border-t border-void/15">
        <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
        <div className="relative mx-auto flex max-w-4xl items-center justify-between px-5 py-12 transition-colors duration-500 group-hover:text-paper">
          <div>
            <p className="mono-label text-ink transition-colors duration-500 group-hover:text-paper/70">
              Next Entry — No. {next.number}
            </p>
            <p className="display-caps mt-3 text-2xl font-bold sm:text-4xl">{next.title}</p>
          </div>
          <ArrowRight className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </Link>
    </main>
  )
}
