"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import { languages } from "@/lib/languages"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-white hover:bg-cyan-500/10 flex items-center space-x-2"
      >
        <Globe className="w-4 h-4" />
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <ChevronDown className="w-4 h-4" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-64 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 z-50 max-h-80 overflow-y-auto">
            <div className="p-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                    language === lang.code
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "text-gray-300 hover:bg-cyan-500/10 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="flex-1">{lang.name}</span>
                  {language === lang.code && <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
