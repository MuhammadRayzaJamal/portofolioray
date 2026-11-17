import { useRef } from 'react'
import { highlights } from '../data.js'
import { Reveal, SectionHead } from './Reveal.jsx'
import Icon from './Icon.jsx'

export default function Highlights() {
  const track = useRef(null)
  const scroll = (d) => track.current?.scrollBy({ left: d * (track.current.clientWidth * 0.6), behavior: 'smooth' })
  return (
    <section id="highlights" className="section">
      <div className="wrap hl-head">
        <SectionHead eyebrow="// 06 collaborations" title="Collaborations" intro={highlights.intro} />
        <div className="hl-controls">
          <button onClick={() => scroll(-1)} aria-label="Previous"><Icon name="left" /></button>
          <button onClick={() => scroll(1)} aria-label="Next"><Icon name="right" /></button>
        </div>
      </div>
      <div className="hl-track" ref={track}>
        {highlights.items.map((h, i) => (
          <Reveal key={h.name} delay={i * 0.06} className="hl-card">
            <a className="hl-img" href={h.href} target="_blank" rel="noreferrer" aria-label={`Open ${h.name}`}>
              <img src={h.img} alt={h.name} draggable="false" loading="lazy" />
            </a>
            <div className="hl-text">
              <h4>{h.role}</h4>
              <h3>{h.name}</h3>
              <p>{h.text}</p>
              <a className="hl-link" href={h.href} target="_blank" rel="noreferrer">
                Visit <Icon name="arrow" size={14} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
