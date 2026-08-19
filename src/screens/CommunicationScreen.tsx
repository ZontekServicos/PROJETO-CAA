import { useState, useCallback } from 'react';
import type { CAACard } from '../types';
import { basicCards, quickAnswers } from '../data/cards';
import CommunicationCard from '../components/CommunicationCard';
import PhraseBar from '../components/PhraseBar';

const categoryFilters = [
  { id: 'todos', label: 'Todos' },
  { id: 'pessoas', label: 'Pessoas' },
  { id: 'acoes', label: 'Ações' },
  { id: 'respostas', label: 'Respostas' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'comida', label: 'Comida' },
  { id: 'sentimentos', label: 'Sentimentos' },
  { id: 'necessidades', label: 'Necessidades' },
  { id: 'saude', label: 'Saúde' },
  { id: 'lazer', label: 'Lazer' },
];

function speak(text: string, onEnd: () => void) {
  if (!('speechSynthesis' in window)) {
    onEnd();
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.onend = onEnd;
  utterance.onerror = onEnd;
  window.speechSynthesis.speak(utterance);
}

export default function CommunicationScreen() {
  const [selectedCards, setSelectedCards] = useState<CAACard[]>([]);
  const [activeCategory, setActiveCategory] = useState('todos');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [search, setSearch] = useState('');
  const [showQuickAnswers, setShowQuickAnswers] = useState(false);

  const filtered = basicCards.filter((c) => {
    const matchesCategory = activeCategory === 'todos' || c.category === activeCategory;
    const matchesSearch = !search || c.word.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCardSelect = useCallback((card: CAACard) => {
    setSelectedCards((prev) => [...prev, card]);
  }, []);

  const handleRemoveLast = useCallback(() => {
    setSelectedCards((prev) => prev.slice(0, -1));
  }, []);

  const handleClear = useCallback(() => {
    setSelectedCards([]);
  }, []);

  const handleSpeak = useCallback(() => {
    if (selectedCards.length === 0 || isSpeaking) return;
    const phrase = selectedCards.map((c) => c.word).join(' ') + '.';
    setIsSpeaking(true);
    speak(phrase, () => setIsSpeaking(false));
  }, [selectedCards, isSpeaking]);

  const handleQuickAnswer = (text: string) => {
    setIsSpeaking(true);
    speak(text + '.', () => setIsSpeaking(false));
  };

  return (
    <div className="flex flex-col h-full" style={{ background: '#F5F7FF' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: 40, height: 40, background: '#EEF1FE' }}
          >
            <span style={{ fontSize: 22 }}>🧑</span>
          </div>
          <div>
            <p className="text-xs font-600" style={{ color: '#9CA3AF' }}>Olá!</p>
            <p className="font-800 text-sm" style={{ color: '#1E1E2E' }}>Como posso ajudar?</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowQuickAnswers(!showQuickAnswers)}
            className="flex items-center justify-center rounded-xl text-sm font-700 px-3 py-2 transition-colors"
            style={{ background: showQuickAnswers ? '#4F6EF7' : '#EEF1FE', color: showQuickAnswers ? 'white' : '#4F6EF7' }}
          >
            ⚡ Rápido
          </button>
          <button
            className="flex items-center justify-center rounded-xl"
            style={{ width: 40, height: 40, background: '#EEF1FE', color: '#4F6EF7', fontSize: 20 }}
            aria-label="Configurações"
          >
            ⚙️
          </button>
        </div>
      </div>

      {/* Phrase bar */}
      <PhraseBar
        selectedCards={selectedCards}
        onRemoveLast={handleRemoveLast}
        onClear={handleClear}
        onSpeak={handleSpeak}
        isSpeaking={isSpeaking}
      />

      {/* Quick answers panel */}
      {showQuickAnswers && (
        <div className="bg-white border-b border-gray-100 px-3 py-3 fade-in">
          <p className="text-xs font-700 mb-2" style={{ color: '#9CA3AF' }}>RESPOSTAS RÁPIDAS</p>
          <div className="flex flex-wrap gap-2">
            {quickAnswers.map((qa) => (
              <button
                key={qa.id}
                onClick={() => handleQuickAnswer(qa.text)}
                className="card-press flex items-center gap-1.5 rounded-xl px-3 py-2 font-700 text-sm border"
                style={{ background: qa.bg, color: qa.color, borderColor: qa.bg }}
              >
                <span>{qa.emoji}</span>
                <span>{qa.text}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search */}
      <div className="px-3 py-2 bg-white border-b border-gray-100">
        <div className="flex items-center gap-2 rounded-xl px-3 py-2.5 border" style={{ background: '#F5F7FF', borderColor: '#E2E8F0' }}>
          <span style={{ fontSize: 18, opacity: 0.5 }}>🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="O que você quer dizer?"
            className="flex-1 bg-transparent outline-none font-500 text-sm"
            style={{ color: '#1E1E2E' }}
          />
          {search && (
            <button onClick={() => setSearch('')} className="text-gray-400 font-700">✕</button>
          )}
        </div>
      </div>

      {/* Category pills */}
      <div
        className="flex gap-2 px-3 py-2 overflow-x-auto bg-white border-b border-gray-100"
        style={{ scrollbarWidth: 'none' }}
      >
        {categoryFilters.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex-shrink-0 rounded-xl px-3 py-1.5 text-sm font-700 transition-colors"
              style={{
                background: isActive ? '#4F6EF7' : '#EEF1FE',
                color: isActive ? 'white' : '#4F6EF7',
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Cards grid */}
      <div className="flex-1 overflow-y-auto p-3">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <span style={{ fontSize: 48 }}>🔍</span>
            <p className="font-600 text-center" style={{ color: '#9CA3AF' }}>
              Nenhum cartão encontrado
            </p>
          </div>
        ) : (
          <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {filtered.map((card) => (
              <CommunicationCard
                key={card.id}
                card={card}
                onSelect={handleCardSelect}
                isSelected={selectedCards.some((c) => c.id === card.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
