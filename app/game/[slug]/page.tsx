import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Maximize2, RotateCcw, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getGameBySlug } from "@/lib/games"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface GamePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params
  const game = getGameBySlug(slug)

  if (!game) {
    return {
      title: "Game Not Found - CBKylaGame",
    }
  }

  return {
    title: `${game.name} - Play Free Online | CBKylaGame`,
    description: game.description,
    keywords: `${game.name}, ${game.category}, free game, online game, browser game`,
  }
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params
  const game = getGameBySlug(slug)

  if (!game) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10"></div>

        <Navbar />

        <main className="py-8 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="mb-6">
              <Link
                href="/games"
                className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Games
              </Link>
            </div>

            {/* Game Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-white">{game.name}</h1>
                <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white">{game.category}</Badge>
              </div>
            </div>

            {/* Game Container */}
            <div className="relative max-w-6xl mx-auto">
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-500/10">
                {/* Game Controls */}
                <div className="flex items-center justify-between p-4 bg-black/60 border-b border-cyan-500/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>

                  <div className="text-cyan-300 font-medium">{game.name}</div>

                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Volume2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Maximize2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Game Iframe */}
                <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
                  <iframe
                    src={game.embedUrl}
                    className="w-full h-full"
                    title={`${game.name} Game`}
                    allowFullScreen
                    style={{ border: "none" }}
                  />
                </div>

                {/* Game Info Bar */}
                <div className="p-4 bg-black/60 border-t border-cyan-500/20">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 text-gray-400">
                      <span>Use mouse and keyboard to play</span>
                      <span>•</span>
                      <span>Press F11 for fullscreen</span>
                    </div>
                    <div className="text-cyan-300">
                      Category: <span className="font-bold">{game.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Actions */}
            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/games"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 font-medium transition-all"
                >
                  Browse More Games
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
