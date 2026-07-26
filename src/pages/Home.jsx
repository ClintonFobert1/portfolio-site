import Hero from '../sections/Hero'
import TickerBand from '../sections/TickerBand'
import WorkShowcase from '../sections/WorkShowcase'
import AboutTeaser from '../sections/AboutTeaser'
import MethodStrip from '../sections/MethodStrip'
import NotesTeaser from '../sections/NotesTeaser'
import FinalCTA from '../sections/FinalCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <TickerBand />
      <WorkShowcase />
      <AboutTeaser />
      <MethodStrip />
      <NotesTeaser />
      <FinalCTA />
    </main>
  )
}
