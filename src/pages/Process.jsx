import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { methodSteps } from '../sections/MethodStrip'
import { Reveal } from '../components/Reveal'
import Sunburst from '../components/Sunburst'

const detail = {
  I: [
    'Tools built without listening become shelfware. Every build starts embedded with the team that has the problem — sales, support, management — watching how the work actually happens.',
    'The deliverable of this phase is not requirements. It is the sentence the team says that reveals the real bottleneck.',
  ],
  II: [
    'This is where AI leverage is won or lost. I write the system down before anything is generated: the data schema, the invariants that must hold, the edge cases that will hurt, the boundaries between components.',
    'A precise specification turns AI from a slot machine into a power tool. Vague in, vague out.',
  ],
  III: [
    'With the spec in hand, machines do what they are best at: volume. Scaffolding, components, endpoints, first drafts of everything — generated, reviewed, regenerated.',
    'I stay in the loop as editor and director. The machine types; I decide.',
  ],
  IV: [
    'Then the handmade portion: connecting real backends, negotiating real APIs, shaping real data. Auth that holds, migrations that run in order, queries that stay fast when tables get long.',
    'This is the part AI cannot see — the context, the legacy systems, the politics of a production database. It is where demos become tools.',
  ],
  V: [
    'Shipping is the midpoint. The tool goes in front of the team, and usage tells the truth: what gets clicked, what gets ignored, what gets asked for next.',
    'Each build feeds the next. The prompt libraries get sharper, the patterns get more reusable, the next tool ships faster.',
  ],
}

export default function Process() {
  return (
    <main className="bg-void text-paper">
      <PageHeader
        kicker="The Method — Five Movements"
        title={['How the Work', 'Gets Made']}
        intro="A repeatable method for building with machines: human judgement at the edges, AI in the middle, engineering all the way through."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        {methodSteps.map((step, i) => (
          <Reveal key={step.numeral}>
            <div className="grid gap-8 border-b border-paper/10 py-14 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-2">
                <div className="relative inline-flex h-20 w-20 items-center justify-center">
                  <div className="absolute inset-0 text-ink opacity-70">
                    <Sunburst rays={32} innerRadius={220} outerRadius={480} rings={[300]} className="h-full w-full" />
                  </div>
                  <span className="font-display text-3xl font-black text-ink-bright">{step.numeral}</span>
                </div>
              </div>
              <div className="md:col-span-4">
                <p className="mono-label opacity-50">Movement {step.numeral}</p>
                <h2 className="display-caps mt-3 text-3xl font-bold sm:text-4xl">{step.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-bright">{step.text}</p>
              </div>
              <div className="space-y-5 leading-relaxed opacity-70 md:col-span-6">
                {detail[step.numeral].map((para, pi) => (
                  <p key={pi}>{para}</p>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.15}>
          <div className="mt-20 border border-paper/15 p-8 text-center md:p-14">
            <p className="mono-label text-ink-bright">The Principle</p>
            <p className="display-caps mx-auto mt-6 max-w-3xl text-2xl font-medium leading-snug sm:text-3xl">
              “AI makes the first 80% fast. The last 20% is still handmade —
              <span className="text-ink-bright"> and that is where the value moved.</span>”
            </p>
            <Link
              to="/products"
              className="group mt-10 inline-flex items-center gap-3 border border-paper px-8 py-4 font-mono text-[0.7rem] uppercase tracking-[0.3em] transition-colors duration-300 hover:border-ink hover:bg-ink"
            >
              See the results
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
