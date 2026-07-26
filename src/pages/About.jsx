import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/site'
import PageHeader from '../components/PageHeader'
import Sunburst from '../components/Sunburst'
import Marquee from '../components/Marquee'
import { Reveal } from '../components/Reveal'

const timeline = [
  {
    period: '2015 — 2024',
    title: 'Fobert Digital Development',
    text: 'Independent studio. Designed, built, hosted, and maintained sites for real businesses — every role, one person.',
  },
  {
    period: '2024 — 2025',
    title: 'The Turn to Software',
    text: 'Client sites became platforms. Dashboards, databases, APIs — the work shifted from pages to systems.',
  },
  {
    period: '2025 — Now',
    title: 'AI Prompt Engineer, DentalQore',
    text: 'Using AI to build apps, tools, and websites that keep the company competitive — plus the manual engineering underneath: backend connections, database work, and tools built with teams and management.',
  },
  {
    period: 'Ongoing',
    title: 'The Research Mandate',
    text: 'Formally tasked with staying current on AI tools and methods, and turning what matters into practice the whole team can use.',
  },
]

export default function About() {
  return (
    <main className="bg-void text-paper">
      <PageHeader
        kicker="Fig. 1 — The Builder"
        title={['Clinton', 'Fobert']}
        intro={site.intro}
      />

      {/* portrait + bio */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] border border-paper/20">
              <div className="tx-dots-lg mask-fade-radial absolute inset-0 text-ink opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-ink">
                <Sunburst rays={72} className="h-full w-full animate-spin-slower" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="display-caps text-engrave-outline text-[9rem] font-black text-paper">CF</span>
              </div>
              <span className="mono-label absolute left-4 top-4 opacity-50">Portrait of the builder</span>
              <span className="mono-label absolute bottom-4 right-4 opacity-50">One ink, no gradients</span>
            </div>
            <p className="mono-label mt-4 text-center opacity-40">Photograph pending — the emblem stands in</p>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="mono-label text-ink-bright">The Account</p>
              <p className="display-caps mt-6 text-2xl font-medium leading-snug sm:text-3xl">
                The title is new. The habit is old:{' '}
                <span className="text-ink-bright">find the bottleneck, build the tool.</span>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 leading-relaxed opacity-70">
                <p>
                  I spent nearly a decade running my own web studio — design, build, hosting,
                  support, all of it. That work taught me how businesses actually use software,
                  and how much of "development" is really listening.
                </p>
                <p>
                  Today I'm an AI prompt engineer at {site.company}. In practice that means I use
                  AI to build apps, tools, and websites that keep the company competitive — and
                  then do the distinctly non-AI work of wiring backends together, living inside
                  databases, and sitting with teams and management to shape tools, dashboards,
                  and apps that help their everyday jobs.
                </p>
                <p>
                  My current obsession: a conversion engine that rebuilds legacy WordPress sites
                  into our modern custom platform automatically. Software that retires technical
                  debt at scale — that's the kind of leverage I look for.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 grid grid-cols-2 gap-px border border-paper/15 bg-paper/15 sm:grid-cols-4">
                {site.stats.map((s) => (
                  <div key={s.label} className="bg-void p-5">
                    <p className="display-caps text-2xl font-bold text-ink-bright md:text-3xl">{s.value}</p>
                    <p className="mono-label mt-3 leading-relaxed normal-case tracking-[0.15em] opacity-60">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* skills band */}
      <section className="relative overflow-hidden border-y border-ink bg-ink py-5 text-paper">
        <Marquee
          items={site.skills.flatMap((g) => g.items)}
          className="display-caps text-xl font-bold md:text-2xl"
        />
      </section>

      {/* capabilities */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="mono-label text-ink-bright">Capabilities</span>
            <span className="rule-etched flex-1" />
          </div>
        </Reveal>
        <div className="mt-10 grid gap-px border border-paper/15 bg-paper/15 md:grid-cols-3">
          {site.skills.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 0.1} className="bg-void p-8">
              <p className="font-display text-sm font-bold text-ink-bright">
                {['I.', 'II.', 'III.'][gi]} {group.group}
              </p>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed opacity-70">
                    <span className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-ink-bright" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* timeline */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="mono-label text-ink-bright">The Record</span>
            <span className="rule-etched flex-1" />
          </div>
        </Reveal>
        <div className="mt-10">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="grid gap-2 border-b border-paper/10 py-8 md:grid-cols-12 md:gap-8">
                <p className="mono-label text-ink-bright md:col-span-3">{t.period}</p>
                <h3 className="display-caps text-2xl font-bold md:col-span-4">{t.title}</h3>
                <p className="text-sm leading-relaxed opacity-60 md:col-span-5">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            to="/contact"
            className="group mt-16 inline-flex items-center gap-3 border border-paper px-8 py-4 font-mono text-[0.7rem] uppercase tracking-[0.3em] transition-colors duration-300 hover:border-ink hover:bg-ink"
          >
            Work with me
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </main>
  )
}
