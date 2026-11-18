import { useRef } from 'react'
import { t } from '../i18n.js'
import { motion, useScroll, useSpring } from 'framer-motion'
import { resume } from '../data.js'
import { Reveal, SectionHead } from './Reveal.jsx'

function Timeline({ title, items }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 55%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })
  return (
    <div className="tl">
      <Reveal as="h3" className="card-title">
        {title}
      </Reveal>
      <ol ref={ref}>
        <motion.span className="tl-fill" style={{ scaleY: fill }} />
        {items.map((it, i) => (
          <Reveal as="li" key={it.title} delay={i * 0.08} className="tl-item">
            <motion.span className="tl-dot" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: '-40px' }} transition={{ type: 'spring', stiffness: 300, damping: 16, delay: i * 0.05 }} />
            <span className="tl-period">{it.period}</span>
            <h4>{it.title}</h4>
            <p className="tl-place">{it.place}</p>
            {it.text && <p>{it.text}</p>}
            {it.points && (
              <ul>
                {it.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

export default function Resume() {
  return (
    <section id="resume" className="section section-alt">
      <div className="wrap">
        <SectionHead eyebrow="// 04 experience" title={t('Experience & Education')} intro={resume.intro} />
        <Reveal className="callout">
          <p>{resume.summary}</p>
        </Reveal>
        <div className="resume-cols">
          <Timeline title={t('Professional Experience')} items={resume.experience} />
          <Timeline title={t('Education')} items={resume.education} />
        </div>
      </div>
    </section>
  )
}
