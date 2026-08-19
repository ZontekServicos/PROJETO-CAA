import { useState } from 'react';
import { sampleHistory } from '../data/cards';
import type { HistoryEntry } from '../types';
import { speak } from '../services/speechService';

export default function HistoryScreen() {
  const [history, setHistory] = useState<HistoryEntry[]>(sampleHistory);

  const toggleFavorite = (id: string) => {
    setHistory((prev) =>
      prev.map((h) => (h.id === id ? { ...h, isFavorited: !h.isFavorited } : h))
    );
  };

  const grouped = history.reduce<Record<string, HistoryEntry[]>>((acc, entry) => {
    if (!acc[entry.date]) acc[entry.date] = [];
    acc[entry.date].push(entry);
    return acc;
  }, {});

  return (
    <div className="flex flex-col h-full" style={{ background: '#F5F7FF' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-5 pb-3 bg-white border-b border-gray-100">
        <div>
          <h2 className="font-800 text-xl" style={{ color: '#1E1E2E' }}>Histórico</h2>
          <p className="text-sm font-500 mt-0.5" style={{ color: '#9CA3AF' }}>Frases utilizadas recentemente</p>
        </div>
        <button
          onClick={() => setHistory([])}
          className="text-xs font-700 px-3 py-1.5 rounded-xl"
          style={{ background: '#FEE2E2', color: '#991B1B' }}
        >
          Limpar
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-3">
        {history.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <span style={{ fontSize: 56 }}>📋</span>
            <p className="font-700 text-center" style={{ color: '#9CA3AF' }}>
              Nenhuma frase ainda
            </p>
            <p className="text-sm text-center font-500" style={{ color: '#D1D5DB' }}>
              Comece a se comunicar e as frases aparecerão aqui
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {Object.entries(grouped).map(([date, entries]) => (
              <div key={date}>
                <p className="text-xs font-800 mb-2 px-1" style={{ color: '#9CA3AF', letterSpacing: 0.5 }}>
                  {date.toUpperCase()}
                </p>
                <div className="flex flex-col gap-2">
                  {entries.map((entry) => (
                    <div
                      key={entry.id}
                      className="bg-white rounded-2xl border overflow-hidden"
                      style={{ borderColor: '#E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
                    >
                      <div className="flex items-start gap-3 px-4 pt-4 pb-3">
                        <div className="flex-1">
                          <p className="font-700 text-sm leading-relaxed" style={{ color: '#1E1E2E' }}>
                            "{entry.phrase}"
                          </p>
                          <p className="text-xs font-500 mt-1" style={{ color: '#9CA3AF' }}>
                            {entry.time}
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex border-t" style={{ borderColor: '#F3F4F6' }}>
                        <button
                          onClick={() => speak(entry.phrase)}
                          className="flex-1 flex items-center justify-center gap-1.5 py-3 font-700 text-xs transition-colors"
                          style={{ color: '#059669' }}
                        >
                          <span style={{ fontSize: 16 }}>🔊</span>
                          Falar novamente
                        </button>
                        <div style={{ width: 1, background: '#F3F4F6' }} />
                        <button
                          onClick={() => toggleFavorite(entry.id)}
                          className="flex-1 flex items-center justify-center gap-1.5 py-3 font-700 text-xs transition-colors"
                          style={{ color: entry.isFavorited ? '#D97706' : '#9CA3AF' }}
                        >
                          <span style={{ fontSize: 16 }}>{entry.isFavorited ? '⭐' : '☆'}</span>
                          {entry.isFavorited ? 'Favoritado' : 'Favoritar'}
                        </button>
                        <div style={{ width: 1, background: '#F3F4F6' }} />
                        <button
                          onClick={() => speak(entry.phrase)}
                          className="flex-1 flex items-center justify-center gap-1.5 py-3 font-700 text-xs transition-colors"
                          style={{ color: '#4F6EF7' }}
                        >
                          <span style={{ fontSize: 16 }}>🔄</span>
                          Reutilizar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
