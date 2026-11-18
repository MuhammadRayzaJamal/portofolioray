import { profile } from '../data.js'
import { t } from '../i18n.js'
import { scrollToId } from '../lib.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <p>© {new Date().getFullYear()} {profile.name}. {t('All rights reserved.')}</p>
        <div className="footer-links">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
        <button onClick={() => scrollToId('hero')}>{t('Back to top ↑')}</button>
      </div>
    </footer>
  )
}
