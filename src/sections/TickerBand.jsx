import Marquee from '../components/Marquee'

const LINE_A = ['AI Prompt Engineering', 'Full-Stack Development', 'Internal Tools', 'Dashboards', 'Automation']
const LINE_B = ['Backend Connections', 'Databases', 'React', 'Node', 'WordPress Conversion', 'Research']

/** Blue ink band — two counter-scrolling engraved tickers. */
export default function TickerBand() {
  return (
    <section className="relative overflow-hidden border-y border-ink bg-ink py-6 text-paper md:py-8" aria-hidden="true">
      <div className="tx-lines pointer-events-none absolute inset-0 text-void opacity-20" />
      <Marquee items={LINE_A} className="display-caps text-2xl font-bold md:text-4xl" />
      <Marquee
        items={LINE_B}
        reverse
        className="display-caps text-engrave-outline mt-3 text-2xl font-bold md:text-4xl"
        separator="◦"
      />
    </section>
  )
}
