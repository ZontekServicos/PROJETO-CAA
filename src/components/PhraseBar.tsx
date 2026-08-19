import type { CAACard } from '../types';

interface PhraseBarProps {
  selectedCards: CAACard[];
  onRemoveLast: () => void;
  onClear: () => void;
  onSpeak: () => void;
  isSpeaking: boolean;
}

export default function PhraseBar({ selectedCards, onRemoveLast, onClear, onSpeak, isSpeaking }: PhraseBarProps) {
  const phrase = selectedCards.map((c) => c.word).join(' ');
  const hasCards = selectedCards.length > 0;

  return (
    <div className="flex flex-col gap-2 px-3 pt-3 pb-2 bg-white border-b border-gray-100">
      {/* Chips row */}
      <div className="flex items-center gap-1.5 min-h-12 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        {hasCards ? (
          selectedCards.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className="chip-pop flex-shrink-0 flex items-center gap-1 rounded-xl px-2 py-1.5 border"
              style={{ background: card.bgColor, borderColor: card.borderColor }}
            >
              <span style={{ fontSize: 18 }}>{card.emoji}</span>
              <span className="font-700 text-sm" style={{ color: card.textColor }}>
                {card.word}
              </span>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-400 font-500 italic px-1">
            Toque nos cartões para montar uma frase...
          </p>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={onRemoveLast}
          disabled={!hasCards}
          className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-700 transition-opacity"
          style={{ background: '#FEF3C7', color: '#92400E', opacity: hasCards ? 1 : 0.4 }}
          aria-label="Apagar último cartão"
        >
          <span>⌫</span>
          <span className="hidden sm:inline">Apagar</span>
        </button>

        <button
          onClick={onClear}
          disabled={!hasCards}
          className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-700 transition-opacity"
          style={{ background: '#FEE2E2', color: '#991B1B', opacity: hasCards ? 1 : 0.4 }}
          aria-label="Limpar frase"
        >
          <span>✕</span>
          <span className="hidden sm:inline">Limpar</span>
        </button>

        <button
          onClick={onSpeak}
          disabled={!hasCards}
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 font-800 text-white transition-all ${hasCards && !isSpeaking ? 'speak-pulse' : ''}`}
          style={{
            background: hasCards ? (isSpeaking ? '#047857' : '#059669') : '#D1D5DB',
            fontSize: 15,
            boxShadow: hasCards ? '0 4px 12px rgba(5,150,105,0.4)' : 'none',
            cursor: hasCards ? 'pointer' : 'not-allowed',
          }}
          aria-label={`Falar: ${phrase}`}
        >
          <span style={{ fontSize: 20 }}>{isSpeaking ? '🔊' : '🔊'}</span>
          {isSpeaking ? 'Falando...' : 'FALAR'}
        </button>
      </div>
    </div>
  );
}
