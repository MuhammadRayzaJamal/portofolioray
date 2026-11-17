import { motion } from 'framer-motion'
import { ease } from '../lib.js'

// Glass card with a spotlight that follows the pointer
export default function Tile({ children, className = '', delay = 0, ...rest }) {
  return (
    <motion.div
      className={'tile-card ' + className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, ease, delay }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--x', e.clientX - r.left + 'px')
        e.currentTarget.style.setProperty('--y', e.clientY - r.top + 'px')
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
