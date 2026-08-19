import type { CAACard } from "../types"

export function buildPhrase(cards: readonly CAACard[]): string {
  if (cards.length === 0) return ""

  const words = cards.map((card, index) => {
    if (index === 0 || card.category === "alfabeto") return card.word
    return card.word.toLocaleLowerCase("pt-BR")
  })

  for (let index = 1; index < cards.length; index += 1) {
    if (cards[index - 1]?.id === "ir" && cards[index]?.id === "banheiro") {
      words[index] = "ao banheiro"
    }
  }

  const phrase = words.join(" ").replace(/\s+/g, " ").trim()
  return phrase ? `${phrase}.` : ""
}
