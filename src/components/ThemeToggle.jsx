import { useTheme } from '../hooks.js'
import Icon from './Icon.jsx'
import { t } from '../i18n.js'

export default function ThemeToggle({ className = '' }) {
  const [theme, toggle] = useTheme()
  const dark = theme === 'dark'
  return (
    <button
      className={'theme-btn ' + className}
      onClick={toggle}
      aria-label={t(dark ? 'Switch to light theme' : 'Switch to dark theme')}
      title={t(dark ? 'Light theme' : 'Dark theme')}
    >
      <Icon name={dark ? 'sun' : 'moon'} size={18} />
    </button>
  )
}
