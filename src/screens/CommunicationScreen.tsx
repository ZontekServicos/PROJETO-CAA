import { useState, useCallback } from "react"
import type { CAACard } from "../types"
import { basicCards, categoryCards, quickAnswers } from "../data/cards"
import CommunicationCard from "../components/CommunicationCard"
import PhraseBar from "../components/PhraseBar"
import { speak } from "../services/speechService"
import { buildPhrase } from "../utils/phrase"

const communicationCards = Array.from(
  new Map(
    [...basicCards, ...Object.values(categoryCards).flat()].map((card) => [
      card.id,
      card,
    ]),
  ).values(),
)

const categoryFilters = [
  { id: "todos", label: "Todos" },
  { id: "principais", label: "Principais" },
  { id: "pessoas", label: "Pessoas" },
  { id: "acoes", label: "Ações" },
  { id: "bebidas", label: "Bebidas" },
  { id: "comida", label: "Comida" },
  { id: "banheiro", label: "Banheiro" },
  { id: "lugares", label: "Lugares" },
  { id: "emocoes", label: "Emoções" },
  { id: "saude", label: "Dor / Saúde" },
  { id: "escola", label: "Escola" },
  { id: "terapia", label: "Terapia" },
  { id: "alfabeto", label: "Alfabeto" },
  { id: "cores", label: "Cores" },
  { id: "numeros", label: "Números" },
]

export default function CommunicationScreen() {
  const [selectedCards, setSelectedCards] = useState<CAACard[]>([])
  const [activeCategory, setActiveCategory] = useState("principais")
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [search, setSearch] = useState("")
  const [showQuickAnswers, setShowQuickAnswers] = useState(true)

  const filtered = communicationCards.filter((card) => {
    const matchesCategory =
      activeCategory === "todos" || card.category === activeCategory
    const matchesSearch =
      !search || card.word.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleCardSelect = useCallback((card: CAACard) => {
    setSelectedCards((prev) => [...prev, card])
  }, [])

  const handleRemoveLast = useCallback(() => {
    setSelectedCards((prev) => prev.slice(0, -1))
  }, [])

  const handleClear = useCallback(() => {
    setSelectedCards([])
  }, [])

  const handleSpeak = useCallback(() => {
    if (selectedCards.length === 0 || isSpeaking) return

    const phrase = buildPhrase(selectedCards)
    setIsSpeaking(true)
    speak(phrase, () => setIsSpeaking(false))
  }, [selectedCards, isSpeaking])

  const handleQuickAnswer = (text: string) => {
    setIsSpeaking(true)
    speak(`${text}.`, () => setIsSpeaking(false))
  }

  return (
    <div className="flex flex-col h-full" style={{ background: "#F5F7FF" }}>
      <div className="flex items-center justify-between px-4 pt-4 pb-2 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: 40, height: 40, background: "#EEF1FE" }}
          >
            <span style={{ fontSize: 22 }}>🧑</span>
          </div>
          <div>
            <p className="text-xs font-600" style={{ color: "#9CA3AF" }}>
              Olá!
            </p>
            <p className="font-800 text-sm" style={{ color: "#1E1E2E" }}>
              Comunicação
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowQuickAnswers((prev) => !prev)}
          className="flex items-center justify-center rounded-xl text-sm font-700 px-3 py-2 transition-colors"
          style={{
            background: showQuickAnswers ? "#4F6EF7" : "#EEF1FE",
            color: showQuickAnswers ? "white" : "#4F6EF7",
          }}
          aria-expanded={showQuickAnswers}
          aria-controls="quick-answers"
        >
          ⚡ Rápido
        </button>
      </div>

      <PhraseBar
        selectedCards={selectedCards}
        onRemoveLast={handleRemoveLast}
        onClear={handleClear}
        onSpeak={handleSpeak}
        isSpeaking={isSpeaking}
      />

      {showQuickAnswers && (
        <div
          id="quick-answers"
          className="bg-white border-b border-gray-100 px-3 py-3"
        >
          <p className="text-xs font-700 mb-2" style={{ color: "#9CA3AF" }}>
            FRASES RÁPIDAS
          </p>
          <div className="flex flex-wrap gap-2">
            {quickAnswers.map((qa) => (
              <button
                key={qa.id}
                onClick={() => handleQuickAnswer(qa.text)}
                className="card-press flex items-center gap-1.5 rounded-xl px-3 py-2 font-700 text-sm border"
                style={{
                  background: qa.bg,
                  color: qa.color,
                  borderColor: qa.bg,
                }}
              >
                <span>{qa.emoji}</span>
                <span>{qa.text}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="px-3 py-2 bg-white border-b border-gray-100">
        <div
          className="flex items-center gap-2 rounded-xl px-3 py-2.5 border"
          style={{ background: "#F5F7FF", borderColor: "#E2E8F0" }}
        >
          <span style={{ fontSize: 18, opacity: 0.5 }}>🔍</span>
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="O que você quer dizer?"
            className="flex-1 bg-transparent outline-none font-500 text-sm"
            style={{ color: "#1E1E2E" }}
            aria-label="Buscar cartões de comunicação"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-gray-400 font-700"
              aria-label="Limpar busca"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div
        className="flex gap-2 px-3 py-2 overflow-x-auto bg-white border-b border-gray-100"
        style={{ scrollbarWidth: "none" }}
      >
        {categoryFilters.map((cat) => {
          const isActive = cat.id === activeCategory
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex-shrink-0 rounded-xl px-3 py-1.5 text-sm font-700 transition-colors"
              style={{
                background: isActive ? "#4F6EF7" : "#EEF1FE",
                color: isActive ? "white" : "#4F6EF7",
                minHeight: 44,
              }}
              aria-pressed={isActive}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <span style={{ fontSize: 48 }}>🔍</span>
            <p className="font-600 text-center" style={{ color: "#9CA3AF" }}>
              Nenhum cartão encontrado
            </p>
          </div>
        ) : (
          <div
            className="grid gap-2.5"
            style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
          >
            {filtered.map((card) => (
              <CommunicationCard
                key={card.id}
                card={card}
                onSelect={handleCardSelect}
                isSelected={selectedCards.some(
                  (selected) => selected.id === card.id,
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
