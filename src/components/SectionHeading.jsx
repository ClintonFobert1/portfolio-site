import { Reveal } from './Reveal'

/** Numbered engraved section heading with etched rule. */
export default function SectionHeading({ number, kicker, title, className = '' }) {
  return (
    <Reveal className={className}>
      <div className="flex items-baseline gap-4">
        {number && <span className="mono-label text-ink-bright">{number}</span>}
        <span className="mono-label opacity-50">{kicker}</span>
        <span className="rule-etched flex-1" />
      </div>
      <h2 className="display-caps mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h2>
    </Reveal>
  )
}
