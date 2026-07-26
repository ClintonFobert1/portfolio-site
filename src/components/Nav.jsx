import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { site, navLinks } from '../data/site'
import { EASE } from './Reveal'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { scrollY } = useScroll()
  const scrolled = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 text-paper ${open ? '' : 'mix-blend-difference'}`}
      >
        <motion.div
          className="absolute inset-0 bg-void/80 backdrop-blur-md"
          style={{ opacity: scrolled }}
        />
        <div className="relative flex items-center justify-between px-5 py-4 md:px-10 md:py-6">
          <Link to="/" className="display-caps text-sm tracking-[0.3em] font-bold">
            C·Fobert
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `mono-label link-draw transition-opacity ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mono-label flex items-center gap-3 lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? 'Close' : 'Menu'}
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${open ? 'translate-y-[5.5px] rotate-45' : ''}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 ${open ? '-translate-y-[5.5px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink text-paper"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="tx-dots pointer-events-none absolute inset-0 text-paper opacity-[0.12]" />
            <div className="relative flex h-full flex-col justify-between px-5 pb-10 pt-28">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((l, i) => (
                  <span key={l.to} className="block overflow-hidden">
                    <motion.span
                      className="block"
                      initial={{ y: '110%' }}
                      animate={{ y: '0%' }}
                      transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: EASE }}
                    >
                      <NavLink
                        to={l.to}
                        end={l.to === '/'}
                        className={({ isActive }) =>
                          `display-caps block text-5xl font-bold sm:text-6xl ${isActive ? 'text-void' : ''}`
                        }
                      >
                        {l.label}
                      </NavLink>
                    </motion.span>
                  </span>
                ))}
              </nav>
              <div className="flex items-end justify-between">
                <p className="mono-label opacity-80">{site.availability}</p>
                <a href={`mailto:${site.email}`} className="mono-label link-draw">
                  {site.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
