import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { site, navLinks } from '../data/site'
import Sunburst from './Sunburst'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-void text-paper">
      <div className="rule-etched" />
      <div className="pointer-events-none absolute -bottom-64 -right-64 h-[42rem] w-[42rem] text-ink opacity-40">
        <Sunburst className="h-full w-full animate-spin-slower" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="mono-label text-ink-bright">Correspondence</p>
            <a
              href={`mailto:${site.email}`}
              className="display-caps group mt-4 inline-flex items-start gap-2 text-xl font-bold leading-tight sm:text-2xl lg:text-3xl"
            >
              <span className="link-draw break-all">{site.email}</span>
              <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-ink-bright transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-60">
              {site.availability}. The fastest way to reach me is email — I read everything.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mono-label opacity-50">Index</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-draw font-sans text-sm uppercase tracking-widest opacity-80 hover:opacity-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mono-label opacity-50">Elsewhere</p>
            <ul className="mt-4 space-y-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-draw font-sans text-sm uppercase tracking-widest opacity-80 hover:opacity-100"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative left-1/2 mt-20 w-screen -translate-x-1/2 select-none overflow-hidden" aria-hidden="true">
          <p className="display-caps text-engrave-outline whitespace-nowrap text-center text-[6.8vw] font-black leading-none text-ink-bright opacity-80">
            {site.name}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-paper/15 pt-6 text-[0.65rem] uppercase tracking-[0.25em] opacity-50 sm:flex-row sm:justify-between">
          <p>© {year} {site.name}</p>
          <p>Set in Cinzel · Printed in one ink</p>
        </div>
      </div>
    </footer>
  )
}
