import { useState } from 'react';

const settingsGroups = [
  {
    title: 'Interface',
    icon: '🎨',
    items: [
      { id: 'card-size', label: 'Tamanho dos cartões', type: 'select', options: ['Pequeno', 'Normal', 'Grande'] },
      { id: 'text-size', label: 'Tamanho do texto', type: 'select', options: ['Pequeno', 'Normal', 'Grande', 'Muito grande'] },
      { id: 'cols', label: 'Cartões por linha', type: 'select', options: ['2', '3', '4'] },
      { id: 'dark-mode', label: 'Modo escuro', type: 'toggle' },
      { id: 'high-contrast', label: 'Alto contraste', type: 'toggle' },
    ],
  },
  {
    title: 'Comunicação',
    icon: '🔊',
    items: [
      { id: 'auto-read', label: 'Leitura automática', type: 'toggle' },
      { id: 'voice-speed', label: 'Velocidade da voz', type: 'slider' },
      { id: 'volume', label: 'Volume', type: 'slider' },
    ],
  },
  {
    title: 'Interação',
    icon: '👆',
    items: [
      { id: 'confirm-select', label: 'Confirmar seleção', type: 'toggle' },
      { id: 'animations', label: 'Animações reduzidas', type: 'toggle' },
      { id: 'touch-time', label: 'Tempo de toque (ms)', type: 'select', options: ['100', '300', '500', '800'] },
    ],
  },
];

interface ToggleState {
  [key: string]: boolean;
}

interface SliderState {
  [key: string]: number;
}

export default function ProfileScreen() {
  const [toggles, setToggles] = useState<ToggleState>({
    'auto-read': false,
    'dark-mode': false,
    'high-contrast': false,
    'confirm-select': false,
    animations: false,
  });

  const [sliders, setSliders] = useState<SliderState>({
    'voice-speed': 70,
    volume: 80,
  });

  const [activeSection, setActiveSection] = useState<'profile' | 'settings' | 'caregiver'>('profile');

  return (
    <div className="flex flex-col h-full" style={{ background: '#F5F7FF' }}>
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        {/* Profile card */}
        <div
          className="flex flex-col items-center py-8 px-6"
          style={{ background: 'linear-gradient(145deg, #4F6EF7 0%, #7C3AED 100%)' }}
        >
          <div
            className="flex items-center justify-center rounded-full border-4 border-white mb-3"
            style={{ width: 80, height: 80, background: '#EEF1FE', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
          >
            <span style={{ fontSize: 44 }}>🧑</span>
          </div>
          <h2 className="font-800 text-white text-xl">João Silva</h2>
          <p className="text-white text-sm font-500 mt-0.5" style={{ opacity: 0.8 }}>Usuário principal</p>
          <button
            className="mt-3 px-4 py-1.5 rounded-xl font-700 text-sm"
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            Editar perfil
          </button>
        </div>

        {/* Section tabs */}
        <div className="flex gap-0 border-b border-gray-100">
          {[
            { id: 'profile', label: 'Perfil' },
            { id: 'settings', label: 'Acessibilidade' },
            { id: 'caregiver', label: 'Cuidador' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as typeof activeSection)}
              className="flex-1 py-3 text-sm font-700 border-b-2 transition-colors"
              style={{
                borderColor: activeSection === tab.id ? '#4F6EF7' : 'transparent',
                color: activeSection === tab.id ? '#4F6EF7' : '#9CA3AF',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-3">
        {activeSection === 'profile' && (
          <div className="flex flex-col gap-3">
            {[
              { icon: '📧', label: 'E-mail', value: 'joao@email.com' },
              { icon: '🎂', label: 'Idade', value: '12 anos' },
              { icon: '👨‍👩‍👧', label: 'Responsável', value: 'Maria Silva' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-white rounded-2xl px-4 py-4 border"
                style={{ borderColor: '#E2E8F0' }}
              >
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ width: 44, height: 44, background: '#EEF1FE' }}
                >
                  <span style={{ fontSize: 22 }}>{item.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-600" style={{ color: '#9CA3AF' }}>{item.label}</p>
                  <p className="font-700 text-sm mt-0.5" style={{ color: '#1E1E2E' }}>{item.value}</p>
                </div>
                <span style={{ color: '#D1D5DB', fontSize: 18 }}>›</span>
              </div>
            ))}

            {/* Logout */}
            <button
              className="w-full flex items-center justify-center gap-2 rounded-2xl py-4 font-700 text-sm mt-2"
              style={{ background: '#FEE2E2', color: '#991B1B' }}
            >
              🚪 Sair da conta
            </button>
          </div>
        )}

        {activeSection === 'settings' && (
          <div className="flex flex-col gap-4">
            {settingsGroups.map((group) => (
              <div key={group.title} className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: '#E2E8F0' }}>
                <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: '#F3F4F6' }}>
                  <span style={{ fontSize: 20 }}>{group.icon}</span>
                  <p className="font-800 text-sm" style={{ color: '#1E1E2E' }}>{group.title}</p>
                </div>
                <div className="flex flex-col divide-y divide-gray-100">
                  {group.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 px-4 py-3.5">
                      <span className="flex-1 font-600 text-sm" style={{ color: '#374151' }}>{item.label}</span>
                      {item.type === 'toggle' && (
                        <button
                          onClick={() => setToggles((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className="relative flex-shrink-0 rounded-full transition-all"
                          style={{
                            width: 48,
                            height: 28,
                            background: toggles[item.id] ? '#4F6EF7' : '#D1D5DB',
                          }}
                          aria-checked={toggles[item.id]}
                          role="switch"
                        >
                          <span
                            className="absolute top-1 rounded-full bg-white transition-all"
                            style={{
                              width: 20,
                              height: 20,
                              left: toggles[item.id] ? 24 : 4,
                              boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                            }}
                          />
                        </button>
                      )}
                      {item.type === 'select' && (
                        <span className="font-700 text-sm" style={{ color: '#4F6EF7' }}>
                          {item.options?.[1]} ›
                        </span>
                      )}
                      {item.type === 'slider' && (
                        <div className="flex items-center gap-2" style={{ width: 120 }}>
                          <input
                            type="range"
                            min={0}
                            max={100}
                            value={sliders[item.id] ?? 70}
                            onChange={(e) => setSliders((prev) => ({ ...prev, [item.id]: Number(e.target.value) }))}
                            className="flex-1"
                            style={{ accentColor: '#4F6EF7' }}
                          />
                          <span className="text-xs font-700" style={{ color: '#9CA3AF', minWidth: 28 }}>
                            {sliders[item.id] ?? 70}%
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'caregiver' && (
          <div className="flex flex-col gap-3">
            <div
              className="flex items-center gap-3 bg-amber-50 rounded-2xl px-4 py-4 border"
              style={{ borderColor: '#FDE68A' }}
            >
              <span style={{ fontSize: 28 }}>🔒</span>
              <div className="flex-1">
                <p className="font-700 text-sm" style={{ color: '#92400E' }}>Área protegida</p>
                <p className="text-xs font-500 mt-0.5" style={{ color: '#B45309' }}>
                  Requer PIN do cuidador para acessar
                </p>
              </div>
            </div>

            {[
              { icon: '➕', label: 'Adicionar cartões', color: '#D1FAE5', tc: '#065F46' },
              { icon: '🗂️', label: 'Reorganizar categorias', color: '#DBEAFE', tc: '#1D4ED8' },
              { icon: '💬', label: 'Criar frases', color: '#F3E8FF', tc: '#6B21A8' },
              { icon: '📊', label: 'Ver estatísticas de uso', color: '#FEF3C7', tc: '#92400E' },
              { icon: '⚙️', label: 'Configurar preferências', color: '#EEF1FE', tc: '#4F6EF7' },
            ].map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-3 bg-white rounded-2xl px-4 py-4 border text-left"
                style={{ borderColor: '#E2E8F0' }}
              >
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ width: 44, height: 44, background: item.color }}
                >
                  <span style={{ fontSize: 22 }}>{item.icon}</span>
                </div>
                <span className="flex-1 font-700 text-sm" style={{ color: '#1E1E2E' }}>{item.label}</span>
                <span style={{ color: '#D1D5DB', fontSize: 18 }}>›</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
