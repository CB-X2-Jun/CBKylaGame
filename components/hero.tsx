"use client"

import { Button } from "@/components/ui/button"
import { Play, Download, Star } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm text-cyan-300 font-medium">{t("hero.featured")}</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t("hero.title")}
                </span>
                <br />
                <span className="text-white">{t("hero.subtitle")}</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">{t("hero.description")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-lg shadow-cyan-500/25 text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                {t("hero.playNow")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 text-lg px-8 py-6 bg-transparent"
              >
                <Download className="w-5 h-5 mr-2" />
                {t("hero.download")}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">50K+</div>
                <div className="text-sm text-gray-400">{t("hero.players")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">4.8</div>
                <div className="text-sm text-gray-400">{t("hero.rating")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">Free</div>
                <div className="text-sm text-gray-400">{t("hero.toPlay")}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Game Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt={t("hero.title") + " Game Preview"}
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/30">
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30"
                >
                  <Play className="w-6 h-6 mr-2" />
                  {t("hero.previewGame")}
                </Button>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
