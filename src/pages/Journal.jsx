import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { journal } from '../data/journal'
import PageHeader from '../components/PageHeader'
import { Reveal } from '../components/Reveal'

export default function Journal() {
  return (
    <main className="bg-paper text-void">
      <PageHeader
        kicker={`Field Notes — ${journal.length} Entries`}
        title={['Notes From', 'The Workshop']}
        intro="Short dispatches on building with AI, converting legacy platforms, and the unglamorous engineering in between."
        invert
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="border-t border-void/15">
          {journal.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link
                to={`/journal/${post.slug}`}
                className="group relative grid items-baseline gap-3 overflow-hidden border-b border-void/15 py-9 pr-12 md:grid-cols-12 md:gap-6"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                <span className="mono-label relative text-ink-bright transition-colors duration-300 group-hover:text-paper/80 md:col-span-1">
                  {post.number}
                </span>
                <div className="relative md:col-span-6">
                  <h2 className="display-caps text-3xl font-bold transition-colors duration-300 group-hover:text-paper md:text-4xl">
                    {post.title}
                  </h2>
                  <div className="mt-3 flex gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-void/20 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-void/60 transition-colors duration-300 group-hover:border-paper/40 group-hover:text-paper/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="relative text-sm leading-relaxed text-void/60 transition-colors duration-300 group-hover:text-paper/80 md:col-span-3">
                  {post.excerpt}
                </p>
                <div className="mono-label relative text-void/50 transition-colors duration-300 group-hover:text-paper/70 md:col-span-2 md:text-right">
                  <p>{post.date}</p>
                  <p className="mt-1">{post.readTime}</p>
                </div>
                <ArrowUpRight className="absolute right-0 top-1/2 h-6 w-6 -translate-y-1/2 text-void/30 transition-all duration-300 group-hover:text-paper" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
