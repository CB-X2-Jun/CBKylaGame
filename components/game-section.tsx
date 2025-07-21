"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Maximize2, Minimize2, RotateCcw, Volume2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function GameSection() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const { t } = useLanguage()

  return (
    <section id="game" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t("game.readyToPlay")}{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t("game.play")}
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{t("game.description")}</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Game Container */}
          <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-500/10">
            {/* Game Controls */}
            <div className="flex items-center justify-between p-4 bg-black/60 border-b border-cyan-500/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <div className="text-cyan-300 font-medium">Basketball Legends 2020 - {t("game.level")}</div>

              <div className="flex items-center space-x-2">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Volume2 className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {/* Game Iframe */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
              <iframe
                src="https://www.crazygames.com/embed/2048"
                className="w-full h-full"
                title="2048"
                allowFullScreen
                style={{ border: "none" }}
              />
            </div>

            {/* Game Info Bar */}
            <div className="p-4 bg-black/60 border-t border-cyan-500/20">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4 text-gray-400">
                  <span>{t("game.controls.move")}</span>
                  <span>•</span>
                  <span>{t("game.controls.jump")}</span>
                  <span>•</span>
                  <span>{t("game.controls.aim")}</span>
                </div>
                <div className="text-cyan-300">
                  {t("game.score")}: <span className="font-bold">0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating game stats */}
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="bg-black/60 backdrop-blur-md rounded-lg border border-cyan-500/30 p-4 space-y-3">
              <div className="text-center">
                <div className="text-cyan-400 font-bold text-lg">{t("game.liveStats")}</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">{t("game.playersOnline")}:</span>
                  <span className="text-white font-medium">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">{t("game.yourBest")}:</span>
                  <span className="text-cyan-300 font-medium">-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">{t("game.globalRecord")}:</span>
                  <span className="text-purple-400 font-medium">99,999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
