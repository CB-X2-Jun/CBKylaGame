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
    // description:
    //   "Challenge players worldwide in this strategic domino game. Match tiles, plan your moves, and dominate the board!",
    category: "Strategy",
  },
  // {
  //   id: "basketball-legends-2020",
  //   name: "Basketball Legends 2020",
  //   slug: "basketball-legends-2020",
  //   embedUrl: "https://games.crazygames.com/en_US/basketball-legends-2020/index.html?v=1.335",
  //   // description:
  //   //   "Play as legendary basketball players in this exciting sports game. Shoot hoops, perform amazing dunks, and compete in thrilling matches!",
  //   category: "Sports",
  // }, 
  {
    id: "2048-game",
    name: "2048",
    slug: "2048-game",
    embedUrl: "https://www.crazygames.com/embed/2048",
    // description:
    //   "The classic number puzzle game! Slide tiles to combine numbers and reach the 2048 tile. Simple to learn but challenging to master!",
    category: "Puzzle",
  },
  // {
  //   id: "chess-free",
  //   name: "Chess Free",
  //   slug: "chess-free",
  //   embedUrl: "https://games.crazygames.com/en_US/chess-free/index.html?v=1.335",
  //   category: "Chess",
  // },
  {
    id: "words-of-wonders",
    name: "Words of Wonders",
    slug: "words-of-wonders",
    embedUrl: "https://www.crazygames.com/embed/words-of-wonders",
    category: "Puzzle",
  },
  {
    id: "bloxd-io",
    name: "Bloxd.io",
    slug: "bloxd-io",
    embedUrl: "https://www.crazygames.com/embed/bloxdhop-io",
    category: "Adventure",
  },
  {
    id: "idle-construction-3d",
    name: "Idle Construction 3D",
    slug: "idle-construction-3d",
    embedUrl: "https://www.crazygames.com/embed/idle-construction-3d",
    category: "Idle",
  },
  {
    id: "sky-riders",
    name: "Sky Riders",
    slug: "sky-riders",
    embedUrl: "https://www.crazygames.com/embed/sky-riders-buk",
    category: "Racing",
  },
  {
    id: "moutain-jeep-drive",
    name: "Moutain Jeep Drive",
    slug: "moutain-jeep-drive",
    embedUrl: "https://play.gamepix.com/moutain-jeep-drive/embed",
    category: "Racing",
  },
  {
    id: "number-guessing-1-to-100",
    name: "Number Guessing",
    slug: "number-guessing-1-to-100",
    embedUrl: "https://cb-x2-jun.github.io/CBKylaGameEmbed/embed/number-guessing",
    category: "Strategy",
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
