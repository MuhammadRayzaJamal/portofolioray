import { useRef } from 'react'
import { t } from '../i18n.js'
import { motion, useScroll, useTransform } from 'framer-motion'
import { about, profile, stats } from '../data.js'
import { Reveal, WordReveal } from './Reveal.jsx'
import Counter from './Counter.jsx'
import Icon from './Icon.jsx'
import { ease, scrollToId } from '../lib.js'

const codeLines = [
  <><b className="k">const</b> rayza = {'{'}</>,
  <>  <b className="p">builds</b>: [<b className="s">"apps"</b>, <b className="s">"dashboards"</b>],</>,
  <>  <b className="p">data</b>: [<b className="s">"scrape"</b>, <b className="s">"clean"</b>, <b className="s">"analyze"</b>],</>,
  <>  <b className="p">stack</b>: [<b className="s">"Node.js"</b>, <b className="s">"PHP"</b>, <b className="s">"MySQL"</b>],</>,
  <>{'}'}</>,
]

const clients = ['Cliploo', 'PoliceTube', 'Hitztar', 'IKRIA', 'ELYON XXIV']

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const patternY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  return (
    <>
      <section id="hero" className="hero" ref={ref}>
        <motion.div className="hero-pattern" style={{ y: patternY }} aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Reveal className="status-pill">
              <i /> {t('Open to opportunities')}
            </Reveal>
            <WordReveal as="h1" className="hero-title" text={profile.name} delay={0.2} onMount />
            <Reveal className="hero-role" delay={0.1}>
              {t('App Builder')} <span>/</span> {t('Data Analyst')} <span>/</span> {t('Creative Media')}
            </Reveal>
            <Reveal className="hero-lead" delay={0.15}>
              {about.lead}
            </Reveal>
            <Reveal className="hero-cta" delay={0.2}>
              <button className="btn btn-light" onClick={() => scrollToId('portfolio')}>
                {t('View projects')} <Icon name="arrow" size={16} />
              </button>
              <a className="btn btn-line" href={profile.cv} target="_blank" rel="noreferrer">
                <Icon name="download" size={16} /> {t('Download CV')}
              </a>
            </Reveal>
          </div>

          <motion.div className="hero-visual" style={{ y: photoY }}>
            <motion.div
              className="hero-frame"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.15 }}
            >
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
            </motion.div>
            <motion.div
              className="code-card"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{ opacity: { duration: 0.8, delay: 0.7 }, x: { duration: 0.8, ease, delay: 0.7 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } }}
              aria-hidden="true"
            >
              <div className="code-bar"><i /><i /><i /><span>analysis.js</span></div>
              <pre>
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ clipPath: 'inset(0 100% 0 0)' }}
                    animate={{ clipPath: 'inset(0 0% 0 0)' }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: 1.1 + i * 0.5 }}
                  >
                    {line}
                  </motion.div>
                ))}
                <span className="caret" />
              </pre>
            </motion.div>
            <motion.div
              className="float-card fc-2"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
              transition={{ opacity: { duration: 0.8, delay: 0.9 }, x: { duration: 0.8, ease, delay: 0.9 }, y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.7 } }}
            >
              <Icon name="pin" size={18} />
              <span>{profile.city}</span>
            </motion.div>
          </motion.div>
        </div>

        <div className="wrap clients">
          <span>{t('Worked with')}</span>
          <ul>
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="wrap stats-band">
        <div className="stats-card">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat">
              <strong>
                <Counter to={s.value} suffix={s.suffix} />
              </strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}
