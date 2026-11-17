import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, profile } from '../data.js'
import { ease, scrollToId } from '../lib.js'
import ThemeToggle from './ThemeToggle.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nav.forEach((n) => {
      const el = document.getElementById(n.id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const go = (id) => {
    setOpen(false)
    setTimeout(() => scrollToId(id), open ? 50 : 0)
  }

  return (
    <>
      <motion.header
        className={'topbar' + (scrolled ? ' is-scrolled' : '')}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
      >
        <button className="brand" onClick={() => go('hero')} aria-label="Back to top">
          <span className="brand-mark">R</span>
          <span className="brand-name">{profile.name}</span>
        </button>
        <nav className="topnav" aria-label="Primary">
          {nav.slice(1).map((n) => (
            <button key={n.id} className={active === n.id ? 'is-active' : ''} onClick={() => go(n.id)}>
              {n.label}
              {active === n.id && n.id !== 'contact' && (
                <motion.span layoutId="nav-ul" className="nav-ul" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
              )}
            </button>
          ))}
        </nav>
        <ThemeToggle />
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
          <span className={open ? 'is-open' : ''} />
          <span className={open ? 'is-open' : ''} />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {nav.map((n, i) => (
                <li key={n.id} className="mask">
                  <motion.button
                    onClick={() => go(n.id)}
                    className={active === n.id ? 'is-active' : ''}
                  >
                    <small>0{i + 1}</small> {n.label}
                  </motion.button>
                </li>
              ))}
            </ul>
            <div className="overlay-foot">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
