import { showcase } from '../data.js'
import { Reveal, SectionHead } from './Reveal.jsx'
import Icon from './Icon.jsx'

const icons = { build: 'web', data: 'chart', ops: 'check', creative: 'design' }

export default function Showcase() {
  return (
    <section id="expertise" className="section section-alt">
      <div className="wrap">
        <SectionHead eyebrow="// 03 expertise" title="What I do" intro={showcase.intro} />
        <div className="svc-grid">
          {showcase.items.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08} className="svc">
              <div className="svc-top">
                <span className="svc-icon">
                  <Icon name={icons[s.id]} size={22} />
                </span>
                <span className="svc-num">0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="tags">{s.tags.map((g) => <li key={g}>{g}</li>)}</ul>
              {s.links.length > 0 && (
                <div className="svc-links">
                
                {s.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                    {l.label} <Icon name="arrow" size={14} />
                  </a>
                ))}
              </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
