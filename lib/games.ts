export interface Game {
  id: string
  name: string
  slug: string
  embedUrl: string
  description: string
  category: string
  thumbnail?: string
}

export const games: Game[] = [
  {
    id: "domino-duel",
    name: "Domino Duel",
    slug: "domino-duel",
    embedUrl: "https://www.crazygames.com/embed/domino-duel-uit",
    description:
      "Challenge players worldwide in this strategic domino game. Match tiles, plan your moves, and dominate the board!",
    category: "Strategy",
  },
  {
    id: "basketball-legends-2020",
    name: "Basketball Legends 2020",
    slug: "basketball-legends-2020",
    embedUrl: "https://games.crazygames.com/en_US/basketball-legends-2020/index.html?v=1.335",
    description:
      "Play as legendary basketball players in this exciting sports game. Shoot hoops, perform amazing dunks, and compete in thrilling matches!",
    category: "Sports",
  },
]

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug)
}

export function getGamesByCategory(category: string): Game[] {
  return games.filter((game) => game.category === category)
}

export function getAllCategories(): string[] {
  return [...new Set(games.map((game) => game.category))]
}
