import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { journal } from '../data/journal'
import SectionHeading from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

/** White section — field notes ledger. */
export default function NotesTeaser() {
  return (
    <section className="bg-paper text-void">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading number="04" kicker="Journal" title="Field Notes" className="grow" />
        </div>

        <div className="mt-12 border-t border-void/15">
          {journal.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                to={`/journal/${post.slug}`}
                className="group relative grid items-baseline gap-2 overflow-hidden border-b border-void/15 py-7 pr-10 transition-colors duration-300 md:grid-cols-12 md:gap-6"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                <span className="mono-label relative text-ink-bright transition-colors duration-300 group-hover:text-paper/80 md:col-span-1">
                  {post.number}
                </span>
                <h3 className="display-caps relative text-2xl font-bold transition-colors duration-300 group-hover:text-paper md:col-span-5 md:text-3xl">
                  {post.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-void/60 transition-colors duration-300 group-hover:text-paper/80 md:col-span-4">
                  {post.excerpt}
                </p>
                <span className="mono-label relative text-void/50 transition-colors duration-300 group-hover:text-paper/70 md:col-span-2 md:text-right">
                  {post.date}
                </span>
                <ArrowUpRight className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-void/30 transition-all duration-300 group-hover:text-paper" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            to="/journal"
            className="group mt-12 inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-void/70 transition-colors hover:text-ink"
          >
            All field notes <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
