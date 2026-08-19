import type { CAACard } from '../types';

interface CommunicationCardProps {
  card: CAACard;
  onSelect: (card: CAACard) => void;
  isSelected?: boolean;
  size?: 'normal' | 'small';
}

export default function CommunicationCard({ card, onSelect, isSelected, size = 'normal' }: CommunicationCardProps) {
  const isSmall = size === 'small';

  return (
    <button
      onClick={() => onSelect(card)}
      className="card-press flex flex-col items-center justify-center rounded-2xl border-2 transition-all relative overflow-hidden"
      style={{
        background: isSelected ? card.textColor : card.bgColor,
        borderColor: isSelected ? card.textColor : card.borderColor,
        boxShadow: isSelected
          ? `0 4px 12px ${card.textColor}40`
          : '0 2px 6px rgba(0,0,0,0.08)',
        minHeight: isSmall ? 80 : 100,
        gap: isSmall ? 4 : 6,
        padding: isSmall ? '8px 4px' : '10px 6px',
      }}
      aria-label={card.word}
      aria-pressed={isSelected}
    >
      {isSelected && (
        <span
          className="absolute top-1 right-1 rounded-full flex items-center justify-center text-white"
          style={{ background: card.textColor, width: 16, height: 16, fontSize: 9 }}
        >
          ✓
        </span>
      )}
      <span style={{ fontSize: isSmall ? 26 : 34, lineHeight: 1 }}>{card.emoji}</span>
      <span
        className="font-700 text-center leading-tight"
        style={{
          color: isSelected ? '#fff' : card.textColor,
          fontSize: isSmall ? 11 : 13,
          fontWeight: 700,
          maxWidth: '100%',
          wordBreak: 'break-word',
        }}
      >
        {card.word}
      </span>
    </button>
  );
}
