import { useLang } from '../lang.jsx'

// Shows the language you would switch TO (EN is the base language).
export default function LangToggle({ className = '' }) {
  const { lang, toggle } = useLang()
  const toId = lang === 'en'
  return (
    <button
      className={'theme-btn lang-btn ' + className}
      onClick={toggle}
      aria-label={toId ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
      title={toId ? 'Bahasa Indonesia' : 'English'}
    >
      {toId ? 'ID' : 'EN'}
    </button>
  )
}
