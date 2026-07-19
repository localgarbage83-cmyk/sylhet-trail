"use client"

import React, { createContext, useContext, useState, useCallback } from "react"

type Lang = "bn" | "en"

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (bn: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("bn")

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    document.documentElement.lang = newLang
  }, [])

  const t = useCallback(
    (bn: string, en: string) => (lang === "bn" ? bn : en),
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
