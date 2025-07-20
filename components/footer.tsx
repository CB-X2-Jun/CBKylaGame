"use client"

import Link from "next/link"
import { Gamepad2, Mail, MessageCircle, Twitter, DiscIcon as Discord, Youtube } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Gamepad2 className="h-8 w-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Discord className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Game */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">{t("footer.game")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("footer.playNow")}
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("footer.leaderboard")}
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("footer.achievements")}
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("footer.gameUpdates")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">{t("footer.community")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("footer.blog")}
                </Link>
              </li>
              <li>
                <Link href="/forums" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("footer.forums")}
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("footer.events")}
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("footer.tournaments")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">{t("footer.support")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {t("footer.contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CBKylaGame. {t("footer.rights")}
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                {t("footer.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
