import { useState } from 'react';
import { sampleFavorites, basicCards } from '../data/cards';
import { speak } from '../services/speechService';

const mostUsed = basicCards.slice(0, 6);

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState(sampleFavorites);
  const [activeTab, setActiveTab] = useState<'favorites' | 'used'>('favorites');

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="flex flex-col h-full" style={{ background: '#F5F7FF' }}>
      {/* Header */}
      <div className="px-4 pt-5 pb-3 bg-white border-b border-gray-100">
        <h2 className="font-800 text-xl" style={{ color: '#1E1E2E' }}>Favoritos</h2>

        {/* Tab selector */}
        <div
          className="flex mt-3 rounded-xl p-1"
          style={{ background: '#F3F4F6' }}
        >
          <button
            onClick={() => setActiveTab('favorites')}
            className="flex-1 rounded-lg py-2 text-sm font-700 transition-all"
            style={{
              background: activeTab === 'favorites' ? 'white' : 'transparent',
              color: activeTab === 'favorites' ? '#4F6EF7' : '#9CA3AF',
              boxShadow: activeTab === 'favorites' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            }}
          >
            ⭐ Meus favoritos
          </button>
          <button
            onClick={() => setActiveTab('used')}
            className="flex-1 rounded-lg py-2 text-sm font-700 transition-all"
            style={{
              background: activeTab === 'used' ? 'white' : 'transparent',
              color: activeTab === 'used' ? '#4F6EF7' : '#9CA3AF',
              boxShadow: activeTab === 'used' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            }}
          >
            📈 Mais usados
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-3">
        {activeTab === 'favorites' ? (
          <div className="flex flex-col gap-3">
            {favorites.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 gap-3">
                <span style={{ fontSize: 56 }}>⭐</span>
                <p className="font-700 text-center" style={{ color: '#9CA3AF' }}>
                  Nenhum favorito ainda
                </p>
                <p className="text-sm text-center font-500" style={{ color: '#D1D5DB' }}>
                  Salve frases do histórico ou da comunicação
                </p>
              </div>
            ) : (
              favorites.map((fav) => (
                <div
                  key={fav.id}
                  className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 border"
                  style={{ borderColor: '#E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
                >
                  <div
                    className="flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ width: 48, height: 48, background: '#EEF1FE' }}
                  >
                    <span style={{ fontSize: 26 }}>{fav.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-700 text-sm" style={{ color: '#1E1E2E' }}>{fav.phrase}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => speak(fav.phrase)}
                      className="flex items-center justify-center rounded-xl"
                      style={{ width: 40, height: 40, background: '#D1FAE5', color: '#065F46', fontSize: 18 }}
                      aria-label="Falar"
                    >
                      🔊
                    </button>
                    <button
                      onClick={() => removeFavorite(fav.id)}
                      className="flex items-center justify-center rounded-xl"
                      style={{ width: 40, height: 40, background: '#FEE2E2', color: '#991B1B', fontSize: 18 }}
                      aria-label="Remover favorito"
                    >
                      ⭐
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* Add phrase */}
            <button
              disabled
              aria-label="Adicionar frase favorita (indisponível nesta versão)"
              className="flex items-center justify-center gap-2 w-full rounded-2xl py-4 border-2 border-dashed font-700 text-sm"
              style={{ borderColor: '#D1D5DB', color: '#9CA3AF' }}
            >
              ➕ Adicionar frase favorita
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-xs font-700 px-1" style={{ color: '#9CA3AF' }}>CARTÕES MAIS UTILIZADOS</p>
            <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {mostUsed.map((card) => (
                <button
                  key={card.id}
                  onClick={() => speak(card.word)}
                  className="card-press flex flex-col items-center justify-center rounded-2xl border-2 gap-2 py-4"
                  style={{ background: card.bgColor, borderColor: card.borderColor }}
                >
                  <span style={{ fontSize: 32 }}>{card.emoji}</span>
                  <span className="font-700 text-sm" style={{ color: card.textColor }}>{card.word}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
