import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { portfolio, cliploo } from '../data.js'
import { Shots } from './Cliploo.jsx'
import { SectionHead, Reveal } from './Reveal.jsx'
import Icon from './Icon.jsx'
import { ease } from '../lib.js'

function Lightbox({ items, index, onClose, onIndex }) {
  const item = items[index]
  const prev = useCallback(() => onIndex((index - 1 + items.length) % items.length), [index, items.length, onIndex])
  const next = useCallback(() => onIndex((index + 1) % items.length), [index, items.length, onIndex])

  useEffect(() => {
    const key = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', key)
    return () => {
      window.removeEventListener('keydown', key)
    }
  }, [onClose, prev, next])

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button className="lb-close" onClick={onClose} aria-label="Close">
        ✕
      </button>
      <button
        className="lb-nav lb-prev"
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
        aria-label="Previous"
      >
        ←
      </button>
      <button
        className="lb-nav lb-next"
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
        aria-label="Next"
      >
        →
      </button>
      <AnimatePresence mode="wait">
        <motion.figure
          key={item.img}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.45, ease }}
        >
          <img src={item.img} alt={item.title} />
          <figcaption>
            <span>{item.cat}</span> {item.title}
            <em>
              {index + 1} / {items.length}
            </em>
          </figcaption>
        </motion.figure>
      </AnimatePresence>
    </motion.div>
  )
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(null)
  const shown = portfolio.items.filter((i) => filter === 'All' || i.cat === filter)

  return (
    <section id="portfolio" className="section">
      <div className="wrap">
        <SectionHead eyebrow="// 05 projects" title="Projects" intro={portfolio.intro} />

        <Reveal className="filters" y={20}>
          {portfolio.filters.map((f) => (
            <button key={f} className={filter === f ? 'is-active' : ''} onClick={() => setFilter(f)}>
              {f}
              <sup>{f === 'All' ? portfolio.items.length : portfolio.items.filter((i) => i.cat === f).length}</sup>
            </button>
          ))}
        </Reveal>

        <LayoutGroup>
          <motion.div className="gallery" layout>
            <AnimatePresence mode="popLayout">
              {shown.map((item, i) => (
                <motion.figure
                  key={item.img}
                  layout
                  className={'tile' + (i % 7 === 0 ? ' feature' : '')}
                  data-hover
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7, ease, delay: i * 0.03 }}
                  onClick={() => setOpen(i)}
                >
                  
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <span className="tile-chip">{item.cat}</span>
                  <figcaption>
                    <h4>{item.title}</h4>
                    <span className="tile-plus"><Icon name="arrow" size={16} /></span>
                  </figcaption>
                  
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
        <div style={{ marginTop: 48 }}><Shots items={cliploo.shots} /></div>
      </div>

      <AnimatePresence>
        {open !== null && <Lightbox items={shown} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />}
      </AnimatePresence>
    </section>
  )
}
