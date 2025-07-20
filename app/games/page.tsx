import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { games, getAllCategories } from "@/lib/games"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Games - CBKylaGame | Play Free Online Games",
  description:
    "Discover and play amazing free online games. From strategy to action, puzzle to arcade - find your next favorite game!",
  keywords: "free games, online games, browser games, strategy games, puzzle games, action games",
}

export default function GamesPage() {
  const categories = getAllCategories()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10"></div>

        <Navbar />

        <main className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Game{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Collection
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover amazing free online games. No downloads required - play instantly in your browser!
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {games.map((game) => (
                <Link key={game.id} href={`/game/${game.slug}`}>
                  <Card className="bg-black/20 backdrop-blur-sm border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-white text-xl group-hover:text-cyan-300 transition-colors">
                          {game.name}
                        </CardTitle>
                        <Badge className="bg-cyan-500/80 text-white">{game.category}</Badge>
                      </div>
                      <div className="mt-4 pt-4 border-t border-cyan-500/20">
                        <span className="text-cyan-300 text-sm font-medium group-hover:text-cyan-200 transition-colors">
                          Click to play →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-4">Can't find what you're looking for?</h2>
                <p className="text-gray-300 mb-6">
                  We're constantly adding new games to our collection. Check back regularly for the latest additions!
                </p>
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
