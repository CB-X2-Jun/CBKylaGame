export const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh-CN", name: "简体中文", flag: "🇨🇳" },
  { code: "zh-TW", name: "繁體中文", flag: "🇹🇼" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "ko-KP", name: "조선어", flag: "🇰🇵" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "km", name: "ខ្មែរ", flag: "🇰🇭" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "no", name: "Norsk", flag: "🇳🇴" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
  { code: "da", name: "Dansk", flag: "🇩🇰" },
  { code: "fi", name: "Suomi", flag: "🇫🇮" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "he", name: "עברית", flag: "🇮🇱" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "ms", name: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "jv", name: "Basa Jawa", flag: "🇮🇩" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "eo", name: "Esperanto", flag: "🌍" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
] as const

export type LanguageCode = (typeof languages)[number]["code"]

export const defaultLanguage: LanguageCode = "en"
