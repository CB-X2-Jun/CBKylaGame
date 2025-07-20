import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberquest-game.com"),
  title: {
    default: "CBKylaGame - Epic Gaming Adventure | Play Now",
    template: "%s | CBKylaGame",
  },
  description:
    "Experience the ultimate gaming adventure with CBKylaGame. Immerse yourself in a futuristic world filled with challenges, rewards, and endless excitement. Play now for free!",
  keywords: ["game", "online game", "adventure", "cyberpunk", "gaming", "free game", "browser game", "multiplayer"],
  authors: [{ name: "CBKylaGame Team" }],
  creator: "CBKylaGame Team",
  publisher: "CBKylaGame Studios",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cyberquest-game.com",
    siteName: "CBKylaGame",
    title: "CBKylaGame - Epic Gaming Adventure",
    description: "Experience the ultimate gaming adventure with CBKylaGame. Play now for free!",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "CBKylaGame Game Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CBKylaGame - Epic Gaming Adventure",
    description: "Experience the ultimate gaming adventure with CBKylaGame. Play now for free!",
    images: ["/placeholder.svg?height=630&width=1200"],
    creator: "@cbkylagame",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://cyberquest-game.com" />
        <meta name="theme-color" content="#0891b2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: "CBKylaGame",
              description:
                "Experience the ultimate gaming adventure with CBKylaGame. Immerse yourself in a futuristic world filled with challenges, rewards, and endless excitement.",
              genre: ["Action", "Adventure", "Cyberpunk"],
              gamePlatform: "Web Browser",
              operatingSystem: "Any",
              applicationCategory: "Game",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "50000",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
