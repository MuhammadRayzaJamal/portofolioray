import { motion } from 'framer-motion'
import { t } from '../i18n.js'
import { featured } from '../data.js'
import { Reveal, SectionHead } from './Reveal.jsx'

export default function Featured() {
  return (
    <section id="featured" className="section section-alt">
      <div className="wrap">
        <SectionHead eyebrow="// 02 featured project" title={t('Building Cliploo, end to end')} />
        <div className="feat">
          <Reveal className="feat-main">
            <span className="feat-label">{featured.label}</span>
            <h3>{featured.title}</h3>
            <p className="feat-role">{featured.role}</p>
            <p>{featured.text}</p>
            <ul className="tags tags-light">
              {featured.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
          <ol className="pipeline">
            {featured.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} x={28} y={0} className="pipe-step">
                <motion.span
                  className="pipe-no"
                  initial={{ backgroundColor: '#e8eefc', color: '#2557d6', scale: 0.8 }}
                  whileInView={{ backgroundColor: '#2557d6', color: '#ffffff', scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                >
                  0{i + 1}
                </motion.span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
