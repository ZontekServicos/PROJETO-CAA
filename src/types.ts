export type Screen = "splash" | "onboarding" | "login" | "app"
export type Tab = "communication" | "categories" | "favorites" | "history" | "profile"

export interface CAACard {
  id: string
  emoji: string
  word: string
  name?: string
  image?: string
  bgColor: string
  textColor: string
  borderColor: string
  category: string
  subcategory?: string
  categoryId?: string
  subcategoryId?: string
  favorite?: boolean
  order?: number
  custom?: boolean
  isCore?: boolean
}

export interface Subcategory {
  id: string
  name: string
  emoji: string
  items: CAACard[]
}

export interface Category {
  id: string
  name: string
  emoji: string
  bgColor: string
  textColor: string
  borderColor: string
  cardCount: number
  description?: string
  subcategories?: Subcategory[]
}

export interface HistoryEntry {
  id: string
  phrase: string
  time: string
  date: string
  isFavorited: boolean
}

export interface FavoritePhrase {
  id: string
  phrase: string
  emoji: string
}
