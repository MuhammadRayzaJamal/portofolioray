import { motion } from 'framer-motion'
import { ease } from '../lib.js'

// Subtle fade + small rise when scrolled into view
export function Reveal({ children, delay = 0, y = 18, x = 0, className, as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </Tag>
  )
}

// Words slide up out of a mask
export function WordReveal({ text, as = 'h2', className, delay = 0, onMount = false }) {
  const Tag = motion[as]
  const trigger = onMount ? { animate: 'show' } : { whileInView: 'show', viewport: { once: true, margin: '-60px' } }
  return (
    <Tag className={className} initial="hide" {...trigger} transition={{ staggerChildren: 0.06, delayChildren: delay }} aria-label={text}>
      {text.split(' ').map((w, i, a) => (
        <span className="mask" key={i} aria-hidden="true">
          <motion.span className="mask-inner" variants={{ hide: { y: '108%' }, show: { y: 0 } }} transition={{ duration: 0.8, ease }}>
            {w}
          </motion.span>
          {i < a.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  )
}

export function SectionHead({ eyebrow, title, intro }) {
  return (
    <header className="section-head">
      <Reveal className="eyebrow" x={-14} y={0}>
        {eyebrow}
      </Reveal>
      <WordReveal text={title} className="section-title" delay={0.08} />
      <motion.span
        className="head-bar"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease, delay: 0.3 }}
      />
      {intro && (
        <Reveal className="section-intro" delay={0.2}>
          {intro}
        </Reveal>
      )}
    </header>
  )
}
