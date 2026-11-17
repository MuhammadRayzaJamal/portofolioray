import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { about, profile, skillGroups } from '../data.js'
import { Reveal, SectionHead } from './Reveal.jsx'
import { ease } from '../lib.js'

export default function About() {
  const photoRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start end', 'end start'] })
  const py = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const facts = [
    ['Location', profile.city],
    ['Education', profile.education],
    ['Email', profile.email],
    ['Phone', profile.phone],
    ['Instagram', profile.instagram],
    ['Status', profile.freelance],
  ]
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHead eyebrow="// 01 about" title="About me" intro={about.intro} />

        <div className="about-grid">
          <Reveal className="about-photo">
            <div className="about-frame" ref={photoRef}>
              <motion.img style={{ y: py, scale: 1.14 }} src={profile.photo} alt="Rayza Jamal" loading="lazy" />
            </div>
          </Reveal>
          <div className="about-main">
            <Reveal className="card">
              <h3>{about.headline}</h3>
              <p className="lead">{about.lead}</p>
              <p>{about.body}</p>
            </Reveal>
            <Reveal className="card" delay={0.08}>
              <dl className="facts">
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <Reveal className="card skills-card" delay={0.05}>
          <h3 className="card-title">Skills & Tools</h3>
          <div className="skill-groups">
            {skillGroups.map((g) => (
              <div className="skill-group" key={g.title}>
                <h4>{g.title}</h4>
                <ul className="chips">
                  {g.items.map((s, i) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                    >
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
