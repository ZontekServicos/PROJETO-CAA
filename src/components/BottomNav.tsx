import type { Tab } from '../types';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'communication', label: 'Comunicar', icon: '💬' },
  { id: 'categories', label: 'Categorias', icon: '📂' },
  { id: 'favorites', label: 'Favoritos', icon: '⭐' },
  { id: 'history', label: 'Histórico', icon: '📋' },
  { id: 'profile', label: 'Perfil', icon: '👤' },
];

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="flex items-stretch border-t border-gray-100 bg-white" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center justify-center flex-1 py-2 gap-0.5 transition-colors"
            style={{ minHeight: 56 }}
            aria-label={tab.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="text-xl leading-none" style={{ filter: isActive ? 'none' : 'grayscale(80%) opacity(0.5)' }}>
              {tab.icon}
            </span>
            <span
              className="text-xs font-700 leading-none"
              style={{ color: isActive ? '#4F6EF7' : '#9CA3AF', fontWeight: isActive ? 700 : 500 }}
            >
              {tab.label}
            </span>
            {isActive && (
              <span
                className="absolute bottom-0 rounded-full"
                style={{ width: 32, height: 3, background: '#4F6EF7' }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
