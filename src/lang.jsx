import { createContext, useContext } from 'react'

export const LangContext = createContext({ lang: 'en', toggle: () => {} })
export const useLang = () => useContext(LangContext)
