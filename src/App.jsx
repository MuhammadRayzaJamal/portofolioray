import { Fragment, lazy, Suspense, useCallback, useMemo, useState } from 'react'
import DesktopApp from './DesktopApp.jsx'
import { useMediaQuery } from './hooks.js'
import { LangContext } from './lang.jsx'
import { setLang } from './i18n.js'

// Phones get a dedicated, app-style layout; everything else gets the desktop site.
const MobileApp = lazy(() => import('./mobile/MobileApp.jsx'))

function initialLang() {
  try { return localStorage.getItem('lang') === 'id' ? 'id' : 'en' } catch { return 'en' }
}

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [lang, setLangState] = useState(initialLang)
  setLang(lang) // swap the data objects in place before children render
  const toggle = useCallback(() => {
    setLangState((l) => {
      const next = l === 'en' ? 'id' : 'en'
      try { localStorage.setItem('lang', next) } catch { /* storage unavailable */ }
      return next
    })
  }, [])
  const value = useMemo(() => ({ lang, toggle }), [lang, toggle])
  return (
    <LangContext.Provider value={value}>
      {/* key remounts the tree so every component re-reads the translated data */}
      <Fragment key={lang}>
        {isMobile ? (
          <Suspense fallback={null}>
            <MobileApp />
          </Suspense>
        ) : (
          <DesktopApp />
        )}
      </Fragment>
    </LangContext.Provider>
  )
}
