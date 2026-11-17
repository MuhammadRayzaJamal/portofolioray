import { useState } from 'react'
import { contact, profile } from '../data.js'
import { Reveal, SectionHead } from './Reveal.jsx'
import Icon from './Icon.jsx'
import { composeMail } from '../lib.js'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const submit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    window.open(composeMail(profile.email, form, false), '_blank', 'noopener')
    form.reset()
    setStatus('sent')
  }

  const wa = `https://wa.me/${profile.phone.replace(/\D/g, '')}`
  const info = [
    ['pin', 'Address', profile.address],
    ['phone', 'Phone', profile.phone, `tel:${profile.phone}`],
    ['chat', 'WhatsApp', 'Chat on WhatsApp', wa],
    ['mail', 'Email', profile.email, `mailto:${profile.email}`],
    ['insta', 'Instagram', profile.instagram, 'https://www.instagram.com/mhmmadrayza_j'],
  ]

  return (
    <section id="contact" className="section section-dark">
      <div className="wrap">
        <SectionHead eyebrow="// 07 contact" title="Get in touch" intro="Have a project in mind, or just want to say hello? Send a message and I’ll get back to you soon." />
        <div className="contact-grid">
          <div className="contact-info">
            {info.map(([icon, k, v, href], i) => (
              <Reveal key={k} delay={i * 0.08} className="info-item">
                <span className="info-icon"><Icon name={icon} size={18} /></span>
                <div>
                  <small>{k}</small>
                  {href ? <a href={href}>{v}</a> : <p>{v}</p>}
                </div>
              </Reveal>
            ))}
            <Reveal className="map" delay={0.2}>
              <iframe title="Map" src={contact.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form className="form" onSubmit={submit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New message from portfolio" />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <div className="row2">
                <label className="field"><input name="name" required placeholder="Your name" /><span>Name</span></label>
                <label className="field"><input name="email" type="email" required placeholder="you@email.com" /><span>Email</span></label>
              </div>
              <label className="field"><input name="subject" required placeholder="How can I help?" /><span>Subject</span></label>
              <label className="field"><textarea name="message" rows="6" required placeholder="Tell me about your project" /><span>Message</span></label>
              <div className="form-foot">
                <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Opening…' : 'Send message'}
                </button>
                {status === 'sent' && <p className="form-msg ok">Gmail opened with your message ready — just press Send there. Thank you!</p>}
                {status === 'error' && <p className="form-msg err">Couldn’t send — please <a href={`mailto:${profile.email}`}>email me</a> or <a href={wa} target="_blank" rel="noreferrer">message me on WhatsApp</a>.</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
