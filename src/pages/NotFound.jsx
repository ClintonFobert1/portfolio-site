import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Sunburst from '../components/Sunburst'
import { SplitLines, Reveal } from '../components/Reveal'

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-void text-center text-paper">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[100vmax] w-[100vmax] -translate-x-1/2 -translate-y-1/2 text-ink opacity-50">
        <Sunburst rays={84} className="h-full w-full animate-spin-slower" />
      </div>
      <div className="tx-dots mask-fade-radial pointer-events-none absolute inset-0 text-ink opacity-30" />

      <div className="relative z-10 px-5">
        <p className="mono-label text-ink-bright">Plate Not Found</p>
        <h1 className="display-caps text-engrave-outline mt-6 text-[9rem] font-black leading-none text-paper sm:text-[14rem]">
          <SplitLines lines={['404']} />
        </h1>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-sm leading-relaxed opacity-60">
            This page was never engraved — or it has been struck from the catalogue.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link
            to="/"
            className="group mt-10 inline-flex items-center gap-3 border border-paper px-8 py-4 font-mono text-[0.7rem] uppercase tracking-[0.3em] transition-colors duration-300 hover:border-ink hover:bg-ink"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Return to the index
          </Link>
        </Reveal>
      </div>
    </main>
  )
}
