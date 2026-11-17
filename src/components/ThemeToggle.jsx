import { useTheme } from '../hooks.js'
import Icon from './Icon.jsx'

export default function ThemeToggle({ className = '' }) {
  const [theme, toggle] = useTheme()
  const dark = theme === 'dark'
  return (
    <button
      className={'theme-btn ' + className}
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Light theme' : 'Dark theme'}
    >
      <Icon name={dark ? 'sun' : 'moon'} size={18} />
    </button>
  )
}
