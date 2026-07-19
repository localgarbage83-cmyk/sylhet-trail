"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <button
      onClick={() => setLang(lang === "bn" ? "en" : "bn")}
      className="px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-background hover:bg-muted transition-colors"
      aria-label="Toggle language"
    >
      {lang === "bn" ? "EN" : "বাংলা"}
    </button>
  )
}
