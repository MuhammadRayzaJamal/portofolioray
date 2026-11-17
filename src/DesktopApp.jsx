import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Featured from './components/Featured.jsx'
import Cliploo from './components/Cliploo.jsx'
import Showcase from './components/Showcase.jsx'
import Resume from './components/Resume.jsx'
import Portfolio from './components/Portfolio.jsx'
import Highlights from './components/Highlights.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function DesktopApp() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="progress" style={{ scaleX: progress }} />
      <Nav />
      <main>
        <Hero />
        <About />
        <Featured />
        <Cliploo />
        <Showcase />
        <Resume />
        <Portfolio />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
