import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import GameSection from "@/components/game-section"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "CBKylaGame - Epic Gaming Adventure | Play Now",
  description:
    "Experience the ultimate gaming adventure with CBKylaGame. Immerse yourself in a futuristic world filled with challenges, rewards, and endless excitement. Play now for free!",
  keywords: "game, online game, adventure, cyberpunk, gaming, free game, browser game",
  authors: [{ name: "CyberQuest Team" }],
  openGraph: {
    title: "CBKylaGame - Epic Gaming Adventure",
    description: "Experience the ultimate gaming adventure with CBKylaGame. Play now for free!",
    type: "website",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CBKylaGame - Epic Gaming Adventure",
    description: "Experience the ultimate gaming adventure with CBKylaGame. Play now for free!",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10"></div>

        <Navbar />
        <main>
          <Hero />
          <GameSection />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  )
}
