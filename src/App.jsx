import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { LenisProvider, ScrollToTop } from './lib/scroll'
import Nav from './components/Nav'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Process from './pages/Process'
import Journal from './pages/Journal'
import JournalPost from './pages/JournalPost'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-ink-bright"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

export default function App() {
  const location = useLocation()

  return (
    <LenisProvider>
      <ScrollToTop />
      <ScrollProgress />
      {/* global print-grain — distressed screen-print quality */}
      <div className="tx-grain pointer-events-none fixed inset-0 z-[65] opacity-[0.05] mix-blend-overlay" aria-hidden="true" />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/products/:slug" element={<PageTransition><ProductDetail /></PageTransition>} />
          <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
          <Route path="/journal" element={<PageTransition><Journal /></PageTransition>} />
          <Route path="/journal/:slug" element={<PageTransition><JournalPost /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </LenisProvider>
  )
}
