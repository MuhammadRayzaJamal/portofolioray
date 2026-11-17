import { lazy, Suspense } from 'react'
import DesktopApp from './DesktopApp.jsx'
import { useMediaQuery } from './hooks.js'

// Phones get a dedicated, app-style layout; everything else gets the desktop site.
const MobileApp = lazy(() => import('./mobile/MobileApp.jsx'))

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  if (isMobile) {
    return (
      <Suspense fallback={null}>
        <MobileApp />
      </Suspense>
    )
  }
  return <DesktopApp />
}
