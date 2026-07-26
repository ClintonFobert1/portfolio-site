import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Reveal, EASE } from '../components/Reveal'

export const methodSteps = [
  {
    numeral: 'I',
    title: 'Listen',
    text: 'Sit with the team or manager who has the problem. The real requirement is never in the ticket.',
  },
  {
    numeral: 'II',
    title: 'Specify',
    text: 'Write the system down — schema, invariants, edge cases. Precision here is what makes AI useful later.',
  },
  {
    numeral: 'III',
    title: 'Generate',
    text: 'Put the machines to work. AI drafts the app, the tooling, the tedious 80% — fast.',
  },
  {
    numeral: 'IV',
    title: 'Engineer',
    text: 'The handmade 20%: backend connections, database work, auth, the failure modes AI can’t see.',
  },
  {
    numeral: 'V',
    title: 'Ship & Study',
    text: 'Put it in front of the team, watch it get used, fold what we learn back into the next build.',
  },
]

/** Blue ink band — the five-step method, connected by a drawing line. */
export default function MethodStrip() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="tx-dots pointer-events-none absolute inset-0 text-void opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="mono-label">03</span>
            <span className="mono-label opacity-70">The Method</span>
            <span className="rule-etched flex-1" />
          </div>
          <h2 className="display-caps mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
            How the work gets made
          </h2>
        </Reveal>

        {/* connecting line */}
        <div className="relative mt-16">
          <motion.div
            className="absolute left-0 top-6 hidden h-px w-full bg-paper/40 lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 1.6, ease: EASE }}
            style={{ transformOrigin: 'left' }}
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {methodSteps.map((step, i) => (
              <Reveal key={step.numeral} delay={0.15 + i * 0.12}>
                <div className="relative">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center border border-paper bg-ink font-display text-lg font-bold">
                    {step.numeral}
                  </span>
                  <h3 className="display-caps mt-6 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-75">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <Link
            to="/process"
            className="group mt-16 inline-flex items-center gap-3 border border-paper px-8 py-4 font-mono text-[0.7rem] uppercase tracking-[0.3em] transition-colors duration-300 hover:bg-paper hover:text-ink"
          >
            The full method
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
