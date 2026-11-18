import { cliploo } from '../data.js'
import { t } from '../i18n.js'
import { Reveal, SectionHead } from './Reveal.jsx'
import Icon from './Icon.jsx'

function Block({ data, delay }) {
  return (
    <Reveal className="cl-card" delay={delay}>
      <h3>{data.title}{data.handle && <span className="cl-handle">{data.handle}</span>}</h3>
      <div className="cl-stats">
        {data.items.map((s) => (
          <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
        ))}
      </div>
      <p>{data.note}</p>
    </Reveal>
  )
}

function Groups({ data, delay = 0 }) {
  return (
    <Reveal className="cl-gal" delay={delay}>
      <h4>{data.title}</h4>
      <div className="cl-groups">
        {data.groups.map((g) => (
          <div className="cl-card" key={g.name}>
            <h3>{g.name}</h3>
            <ul className="cl-list">{g.items.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

function Gallery({ title, items, square }) {
  return (
    <Reveal className="cl-gal">
      <h4>{title}</h4>
      <div className={'cl-tiles' + (square ? ' is-square' : '')}>
        {items.map((v) => (
          <figure key={v.img}>
            <img src={v.img} alt={v.title} loading="lazy" />
            <figcaption><b>{v.title}</b>{v.meta && <span>{v.meta}</span>}</figcaption>
          </figure>
        ))}
      </div>
    </Reveal>
  )
}

export function Shots({ items }) {
  const wide = items.filter((x) => x.kind === 'wide')
  const phone = items.filter((x) => x.kind === 'phone')
  return (
    <Reveal className="cl-gal">
      <h4>{t('App & dashboard analysis')}</h4>
      <div className="cl-wide">
        {wide.map((v) => (
          <figure key={v.img}><img src={v.img} alt={v.title} loading="lazy" /><figcaption><b>{v.title}</b></figcaption></figure>
        ))}
      </div>
      <div className="cl-phones">
        {phone.map((v) => (
          <figure key={v.img}><img src={v.img} alt={v.title} loading="lazy" /><figcaption><b>{v.title}</b></figcaption></figure>
        ))}
      </div>
    </Reveal>
  )
}

export default function Cliploo() {
  const c = cliploo
  return (
    <section id="cliploo" className="section">
      <div className="wrap">
        <SectionHead eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
        <div className="cl-grid">
          <Reveal className="cl-card" delay={0.16}>
            <h3>{c.contributions.title}</h3>
            <ul className="cl-list">
              {c.contributions.items.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <ul className="tags">
              {c.contributions.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </Reveal>
        </div>
        <Groups data={c.platform} />
        <Groups data={c.seller} />
      </div>
    </section>
  )
}
