import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Send } from 'lucide-react'
import { site } from '../data/site'
import PageHeader from '../components/PageHeader'
import { Reveal } from '../components/Reveal'

const inputClass =
  'w-full border-b border-paper/25 bg-transparent py-4 font-sans text-lg text-paper placeholder:text-paper/30 focus:border-ink-bright focus:outline-none transition-colors'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'your site'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <main className="bg-void text-paper">
      <PageHeader
        kicker="Correspondence"
        title={['Write', 'To Me']}
        intro="A tool your team needs, a platform to convert, a role to discuss, or just a good question — email is the fastest way in."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* form */}
          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label htmlFor="name" className="mono-label text-ink-bright">
                  01 — Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Who am I speaking with?"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mono-label text-ink-bright">
                  02 — Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Where do I reply?"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="message" className="mono-label text-ink-bright">
                  03 — The message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are we building?"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 overflow-hidden border border-paper px-10 py-5 font-mono text-[0.75rem] uppercase tracking-[0.35em]"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
                <span className="relative">Send the letter</span>
                <Send className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.button>
              <p className="mono-label opacity-40">Opens your mail client — no servers, no tracking.</p>
            </form>
          </Reveal>

          {/* details */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border border-paper/15 p-8">
                <p className="mono-label text-ink-bright">Direct</p>
                <a
                  href={`mailto:${site.email}`}
                  className="link-draw mt-4 inline-block font-display text-xl font-semibold sm:text-2xl"
                >
                  {site.email}
                </a>
                <p className="mono-label mt-8 text-ink-bright">Status</p>
                <p className="mt-3 flex items-center gap-3 text-sm opacity-70">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping bg-ink-bright opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 bg-ink-bright" />
                  </span>
                  {site.availability}
                </p>
                <p className="mono-label mt-8 text-ink-bright">Post</p>
                <p className="mt-3 text-sm opacity-70">{site.role}</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 border border-paper/15 p-8">
                <p className="mono-label text-ink-bright">Elsewhere</p>
                <ul className="mt-4 divide-y divide-paper/10">
                  {site.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between py-4"
                      >
                        <span className="font-sans text-sm uppercase tracking-widest opacity-80 group-hover:opacity-100">
                          {s.label}
                        </span>
                        <span className="mono-label flex items-center gap-2 opacity-50 group-hover:opacity-100">
                          {s.handle}
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
