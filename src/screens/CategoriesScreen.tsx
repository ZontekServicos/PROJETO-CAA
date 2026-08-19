import { useMemo, useState } from "react"
import type { CAACard } from "../types"
import { categories, categoryCards, basicCards } from "../data/cards"
import CommunicationCard from "../components/CommunicationCard"
import { speak } from "../services/speechService"
import { buildPhrase } from "../utils/phrase"

export default function CategoriesScreen() {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    "principais",
  )
  const [selectedCards, setSelectedCards] = useState<CAACard[]>([])
  const [search, setSearch] = useState("")
  const [activeSubcategory, setActiveSubcategory] = useState<string>("todos")

  const currentCat = categories.find(
    (category) => category.id === activeCategory,
  )

  const currentCards = useMemo(() => {
    if (!activeCategory) return []
    if (activeCategory === "principais")
      return basicCards.filter((card) => card.category === "principais")
    return (
      categoryCards[activeCategory] ??
      basicCards.filter((card) => card.category === activeCategory)
    )
  }, [activeCategory])

  const subcategories = useMemo(() => {
    if (!currentCat?.subcategories || currentCat.subcategories.length === 0) {
      return [{ id: "todos", name: "Todos", emoji: "📚" }]
    }

    return [
      { id: "todos", name: "Todos", emoji: "📚" },
      ...currentCat.subcategories,
    ]
  }, [currentCat])

  const filteredCards = useMemo(
    () =>
      currentCards.filter((card) => {
        const matchesSearch =
          !search || card.word.toLowerCase().includes(search.toLowerCase())
        const matchesSubcategory =
          activeSubcategory === "todos" ||
          card.subcategory === activeSubcategory
        return matchesSearch && matchesSubcategory
      }),
    [activeSubcategory, currentCards, search],
  )

  const handleCardSelect = (card: CAACard) => {
    setSelectedCards((prev) => [...prev, card])
  }

  if (activeCategory && currentCat) {
    return (
      <div className="flex flex-col h-full" style={{ background: "#F5F7FF" }}>
        <div className="flex items-center gap-3 px-4 py-4 bg-white border-b border-gray-100">
          <button
            onClick={() => {
              setActiveCategory(null)
              setSearch("")
              setActiveSubcategory("todos")
              setSelectedCards([])
            }}
            className="flex items-center justify-center rounded-xl font-700 text-sm"
            style={{
              width: 40,
              height: 40,
              background: "#EEF1FE",
              color: "#4F6EF7",
            }}
            aria-label="Voltar"
          >
            ←
          </button>

          <div
            className="flex items-center justify-center rounded-xl"
            style={{ width: 40, height: 40, background: currentCat.bgColor }}
          >
            <span style={{ fontSize: 22 }}>{currentCat.emoji}</span>
          </div>

          <div className="flex-1">
            <h2 className="font-800 text-base" style={{ color: "#1E1E2E" }}>
              {currentCat.name}
            </h2>
            <p className="text-xs font-500" style={{ color: "#9CA3AF" }}>
              {filteredCards.length} cartões
            </p>
          </div>

          {selectedCards.length > 0 && (
            <button
              onClick={() => speak(buildPhrase(selectedCards))}
              className="flex items-center gap-1 rounded-xl px-3 py-2 font-700 text-sm text-white"
              style={{ background: "#059669" }}
            >
              🔊 Falar
            </button>
          )}
        </div>

        <div className="px-3 py-2 bg-white border-b border-gray-100">
          <div
            className="flex items-center gap-2 rounded-xl px-3 py-2.5 border"
            style={{ background: "#F5F7FF", borderColor: "#E2E8F0" }}
          >
            <span style={{ fontSize: 18, opacity: 0.5 }}>🔍</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={`Buscar em ${currentCat.name}...`}
              className="flex-1 bg-transparent outline-none font-500 text-sm"
              style={{ color: "#1E1E2E" }}
              aria-label={`Buscar cartões em ${currentCat.name}`}
            />
          </div>
        </div>

        <div
          className="px-3 py-2 overflow-x-auto bg-white border-b border-gray-100"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-2">
            {subcategories.map((subcategory) => {
              const isActive = activeSubcategory === subcategory.id
              return (
                <button
                  key={subcategory.id}
                  onClick={() => setActiveSubcategory(subcategory.id)}
                  className="flex-shrink-0 rounded-xl px-3 py-1.5 text-xs font-700"
                  style={{
                    background: isActive ? "#4F6EF7" : "#EEF1FE",
                    color: isActive ? "white" : "#4F6EF7",
                    minHeight: 44,
                  }}
                  aria-pressed={isActive}
                >
                  {subcategory.emoji} {subcategory.name}
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          <div
            className="grid gap-2.5"
            style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
          >
            {filteredCards.map((card) => (
              <CommunicationCard
                key={card.id}
                card={card}
                onSelect={handleCardSelect}
                isSelected={selectedCards.some(
                  (selected) => selected.id === card.id,
                )}
              />
            ))}

            <button
              disabled
              aria-label="Adicionar cartão (indisponível nesta versão)"
              className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed gap-2"
              style={{
                minHeight: 100,
                borderColor: "#D1D5DB",
                color: "#9CA3AF",
              }}
            >
              <span style={{ fontSize: 28 }}>➕</span>
              <span className="font-700 text-xs">Adicionar</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full" style={{ background: "#F5F7FF" }}>
      <div className="px-4 pt-5 pb-3 bg-white border-b border-gray-100">
        <h2 className="font-800 text-xl" style={{ color: "#1E1E2E" }}>
          Categorias
        </h2>
        <p className="text-sm font-500 mt-0.5" style={{ color: "#9CA3AF" }}>
          Selecione uma categoria para ver os cartões
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id)
                setActiveSubcategory("todos")
              }}
              className="card-press flex flex-col items-start gap-3 rounded-2xl p-4 border-2 text-left"
              style={{
                background: cat.bgColor,
                borderColor: cat.borderColor,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <span style={{ fontSize: 36 }}>{cat.emoji}</span>
              <div>
                <p
                  className="font-800 text-base"
                  style={{ color: cat.textColor }}
                >
                  {cat.name}
                </p>
                <p
                  className="text-xs font-600 mt-0.5"
                  style={{ color: cat.textColor, opacity: 0.7 }}
                >
                  {cat.cardCount} cartões
                </p>
              </div>
            </button>
          ))}

          <button
            disabled
            aria-label="Nova categoria (indisponível nesta versão)"
            className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed gap-2 py-6"
            style={{ borderColor: "#D1D5DB", color: "#9CA3AF" }}
          >
            <span style={{ fontSize: 36 }}>➕</span>
            <p className="font-700 text-sm">Nova categoria</p>
          </button>
        </div>
      </div>
    </div>
  )
}
