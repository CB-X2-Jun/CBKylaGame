"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { LanguageCode } from "@/lib/languages"
import { defaultLanguage } from "@/lib/languages"
import { translations } from "@/lib/translations"

interface LanguageContextType {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(defaultLanguage)

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("language") as LanguageCode
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: LanguageCode) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    // 首先尝试当前语言
    if (translations[language]?.[key]) {
      return translations[language][key]
    }

    // 如果当前语言没有，尝试默认语言（英文）
    if (translations[defaultLanguage]?.[key]) {
      return translations[defaultLanguage][key]
    }

    // 如果都没有，返回 key 本身
    return key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
