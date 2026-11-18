import { composeMail } from '../lib.js'
import ThemeToggle from '../components/ThemeToggle.jsx'
import LangToggle from '../components/LangToggle.jsx'
import { t as tr } from '../i18n.js'
import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { about, cliploo, contact, featured, highlights, portfolio, profile, resume, showcase, skillGroups, stats } from '../data.js'
import Icon from '../components/Icon.jsx'
import Counter from '../components/Counter.jsx'
import './mobile.css'

const ease = [0.25, 0.1, 0.25, 1]
const tabs = [
  { id: 'm-home', label: 'Home', icon: 'home' },
  { id: 'm-about', label: 'About', icon: 'user' },
  { id: 'm-work', label: 'Work', icon: 'work' },
  { id: 'm-projects', label: 'Projects', icon: 'grid' },
  { id: 'm-contact', label: 'Contact', icon: 'chat' },
]

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Fade({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

function Head({ kicker, title }) {
  return (
    <Fade className="m-head">
      <span>{kicker}</span>
      <h2>{title}</h2>
    </Fade>
  )
}

/* ---------- Home ---------- */
function Home() {
  return (
    <section id="m-home" className="m-hero">
      <motion.div className="m-avatar" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }}>
        <span className="m-avatar-img"><img src={profile.photo} alt={profile.name} /></span>
        <i />
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.15 }}>
        {profile.name}
      </motion.h1>
      <motion.p className="m-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        {tr('App Builder')} · {tr('Data Analyst')} · {tr('Creative Media')}
      </motion.p>
      <motion.p className="m-lead" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.4 }}>
        {about.lead}
      </motion.p>
      <motion.div className="m-cta" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.5 }}>
        <button className="m-btn m-btn-light" onClick={() => go('m-projects')}>{tr('View projects')}</button>
        <a className="m-btn m-btn-line" href={profile.cv} target="_blank" rel="noreferrer">
          <Icon name="download" size={16} /> {tr('Download CV')}
        </a>
      </motion.div>
      <div className="m-stats">
        {stats.map((s, i) => (
          <div className="m-stat" key={s.label}>
            <strong><Counter to={s.value} suffix={s.suffix} /></strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- About ---------- */
function About() {
  const facts = [
    ['pin', tr('Location'), profile.city],
    ['user', tr('Education'), profile.education],
    ['mail', tr('Email'), profile.email, `mailto:${profile.email}`],
    ['phone', tr('Phone'), profile.phone, `tel:${profile.phone}`],
    ['insta', 'Instagram', profile.instagram, 'https://www.instagram.com/mhmmadrayza_j'],
  ]
  return (
    <section id="m-about" className="m-section">
      <Head kicker="// 01 about" title={tr('About me')} />
      <Fade className="m-card">
        <h3>{about.headline}</h3>
        <p>{about.lead}</p>
        <p className="m-muted">{about.body}</p>
      </Fade>
      <Fade className="m-list">
        {facts.map(([icon, k, v, href]) => {
          const Row = href ? 'a' : 'div'
          return (
            <Row className="m-row" key={k} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <span className="m-row-icon"><Icon name={icon} size={18} /></span>
              <span className="m-row-text"><small>{k}</small>{v}</span>
            </Row>
          )
        })}
      </Fade>
      <Fade className="m-card">
        <h3 className="m-card-title">{tr('Skills & Tools')}</h3>
        {skillGroups.map((g) => (
          <div className="m-skillgroup" key={g.title}>
            <h4>{g.title}</h4>
            <ul className="m-chips">
              {g.items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </Fade>
    </section>
  )
}

/* ---------- Work: featured + expertise + experience ---------- */
function Work() {
  const [open, setOpen] = useState(0)
  return (
    <section id="m-work" className="m-section m-alt">
      <Head kicker="// 02 featured" title={tr('Building Cliploo')} />
      <Fade className="m-feat">
        <span className="m-feat-label">{featured.label}</span>
        <p className="m-feat-role">{featured.role}</p>
        <p>{featured.text}</p>
        <ul className="m-chips m-chips-dark">
          {featured.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </Fade>
      <ol className="m-steps">
        {featured.steps.map((s, i) => (
          <Fade key={s.title} delay={i * 0.05} className="m-step">
            <span>0{i + 1}</span>
            <div><h4>{s.title}</h4><p>{s.text}</p></div>
          </Fade>
        ))}
      </ol>

      <Head kicker="// cliploo" title={tr('App & dashboard analysis')} />
      {[cliploo.platform, cliploo.seller].map((blk) => (
        <div key={blk.title}>
          <h4 className="m-cl-h">{blk.title}</h4>
          {blk.groups.map((g) => (
            <Fade className="m-card" key={g.name}>
              <h3>{g.name}</h3>
              <ul className="m-cl-list">{g.items.map((t) => <li key={t}>{t}</li>)}</ul>
            </Fade>
          ))}
        </div>
      ))}
      <Fade className="m-card">
        <h3>{cliploo.contributions.title}</h3>
        <ul className="m-cl-list">
          {cliploo.contributions.items.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <ul className="m-chips m-chips-sm">
          {cliploo.contributions.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </Fade>

      <Head kicker="// 03 expertise" title={tr('What I do')} />
      <div className="m-swipe">
        {showcase.items.map((s) => (
          <div className="m-slide m-svc" key={s.id}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <ul className="m-chips m-chips-sm">
              {s.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            {s.links.length > 0 && (
              <div className="m-svc-links">
                {s.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} <Icon name="arrow" size={14} /></a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Head kicker="// 04 experience" title={tr('Experience')} />
      <div className="m-acc">
        {resume.experience.map((e, i) => {
          const isOpen = open === i
          return (
            <Fade key={e.title} className={'m-acc-item' + (isOpen ? ' is-open' : '')}>
              <button className="m-acc-head" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                <span className="m-acc-main">
                  <small>{e.period}</small>
                  <strong>{e.title}</strong>
                  <em>{e.place}</em>
                </span>
                <Icon name={isOpen ? 'minus' : 'plus'} size={18} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.ul
                    className="m-acc-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </motion.ul>
                )}
              </AnimatePresence>
            </Fade>
          )
        })}
      </div>

      <h3 className="m-sub">{tr('Education')}</h3>
      <div className="m-edu">
        {resume.education.map((e) => (
          <Fade key={e.title} className="m-edu-item">
            <small>{e.period}</small>
            <strong>{e.title}</strong>
            <em>{e.place}</em>
          </Fade>
        ))}
      </div>
    </section>
  )
}

/* ---------- Projects ---------- */
function Projects() {
  const [filter, setFilter] = useState('All')
  const [view, setView] = useState(null)
  const shown = portfolio.items.filter((i) => filter === 'All' || i.cat === filter)

  useEffect(() => {
    document.body.style.overflow = view !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [view])

  const step = (d) => setView((v) => (v + d + shown.length) % shown.length)

  return (
    <section id="m-projects" className="m-section">
      <Head kicker="// 05 projects" title={tr('Projects')} />
      <div className="m-filters">
        {portfolio.filters.map((f) => (
          <button key={f} className={filter === f ? 'is-active' : ''} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <motion.div className="m-grid" layout>
        <AnimatePresence mode="popLayout">
          {shown.map((it, i) => (
            <motion.button
              key={it.img}
              layout
              className="m-thumb"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease }}
              onClick={() => setView(i)}
              aria-label={it.title}
            >
              <img src={it.img} alt={it.title} loading="lazy" />
              <span>{it.cat}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      {[[tr('App & dashboard analysis'), cliploo.shots]].map(([t, list]) => (
        <div key={t}>
          <h4 className="m-cl-h">{t}</h4>
          <div className="m-swipe m-cl-swipe">
            {list.map((v) => (
              <figure className="m-cl-fig" key={v.img}>
                <img className={v.kind ? 'is-' + v.kind : ''} src={v.img} alt={v.title} loading="lazy" />
                <figcaption><b>{v.title}</b>{v.meta && <span>{v.meta}</span>}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}

      <Head kicker="// 06 collaborations" title={tr('Collaborations')} />
      <div className="m-swipe">
        {highlights.items.map((h) => (
          <a className="m-slide m-hl" key={h.name} href={h.href} target="_blank" rel="noreferrer">
            <img src={h.img} alt={h.name} loading="lazy" draggable="false" />
            <div>
              <small>{h.role}</small>
              <h3>{h.name}</h3>
              <p>{h.text}</p>
            </div>
          </a>
        ))}
      </div>

      <AnimatePresence>
        {view !== null && (
          <motion.div className="m-viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <button className="m-viewer-close" onClick={() => setView(null)} aria-label={tr('Close')}><Icon name="close" /></button>
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={shown[view].img}
                src={shown[view].img}
                alt={shown[view].title}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) step(1)
                  else if (info.offset.x > 70) step(-1)
                }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
            <div className="m-viewer-cap">
              <small>{shown[view].cat}</small>
              <strong>{shown[view].title}</strong>
              <em>{view + 1} / {shown.length} · swipe</em>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ---------- Contact ---------- */
function Contact() {
  const [status, setStatus] = useState('idle')
  const wa = `https://wa.me/${profile.phone.replace(/\D/g, '')}`
  const submit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const url = composeMail(profile.email, form, true)
    form.reset()
    setStatus('sent')
    window.location.href = url
  }
  const actions = [
    ['WhatsApp', 'chat', wa],
    [tr('Email'), 'mail', `mailto:${profile.email}`],
    [tr('Call'), 'phone', `tel:${profile.phone}`],
    ['Instagram', 'insta', 'https://www.instagram.com/mhmmadrayza_j'],
  ]
  return (
    <section id="m-contact" className="m-section m-dark">
      <Head kicker="// 07 contact" title={tr('Get in touch')} />
      <div className="m-actions">
        {actions.map(([label, icon, href]) => (
          <Fade key={label}>
            <a className="m-action" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <Icon name={icon} size={22} />
              <span>{label}</span>
            </a>
          </Fade>
        ))}
      </div>
      <Fade>
        <form className="m-form" onSubmit={submit}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New message from portfolio" />
          <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
          <input name="name" required placeholder={tr('Your name')} autoComplete="name" />
          <input name="email" type="email" required placeholder={tr('Your email')} autoComplete="email" />
          <input name="subject" required placeholder={tr('Subject')} />
          <textarea name="message" rows="5" required placeholder={tr('Your message')} />
          <button className="m-btn m-btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? tr('Sending…') : tr('Send message')}
          </button>
          {status === 'sent' && <p className="m-msg ok">{tr('Your email app opened with the message ready — just press Send. Thank you!')}</p>}
          {status === 'error' && <p className="m-msg err">{tr('Couldn’t send — please use the WhatsApp or Email button above.')}</p>}
        </form>
      </Fade>
      <p className="m-foot">© {new Date().getFullYear()} {profile.name}</p>
    </section>
  )
}

/* ---------- Shell ---------- */
export default function MobileApp() {
  const [active, setActive] = useState('m-home')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    tabs.forEach((t) => {
      const el = document.getElementById(t.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <header className="m-top">
        <button className="m-top-brand" onClick={() => go('m-home')}>
          <span>R</span> Rayza Jamal
        </button>
        <LangToggle className="m-top-lang" />
        <ThemeToggle className="m-top-theme" />
        <a className="m-top-cv" href={profile.cv} target="_blank" rel="noreferrer" aria-label={tr('Download CV')}>
          <Icon name="download" size={18} />
        </a>
      </header>
      <main>
        <Home />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
      <nav className="m-tabbar" aria-label={tr('Primary')}>
        {tabs.map((t) => (
          <button key={t.id} className={active === t.id ? 'is-active' : ''} onClick={() => go(t.id)}>
            {active === t.id && <motion.i layoutId="m-tab" className="m-tab-bg" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
            <Icon name={t.icon} size={20} />
            <span>{tr(t.label)}</span>
          </button>
        ))}
      </nav>
    </MotionConfig>
  )
}
