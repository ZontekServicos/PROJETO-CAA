import { useState, useEffect } from 'react';
import type { Screen, Tab } from './types';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import CommunicationScreen from './screens/CommunicationScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import HistoryScreen from './screens/HistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNav from './components/BottomNav';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [activeTab, setActiveTab] = useState<Tab>('communication');

  useEffect(() => {
    if (screen === 'splash') {
      const timer = setTimeout(() => setScreen('onboarding'), 2800);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  const renderTab = () => {
    switch (activeTab) {
      case 'communication': return <CommunicationScreen />;
      case 'categories': return <CategoriesScreen />;
      case 'favorites': return <FavoritesScreen />;
      case 'history': return <HistoryScreen />;
      case 'profile': return <ProfileScreen />;
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen" style={{ background: '#1E1E2E' }}>
      <div
        className="relative flex flex-col w-full overflow-hidden"
        style={{
          maxWidth: 430,
          minHeight: '100svh',
          height: '100svh',
          background: '#F5F7FF',
          boxShadow: '0 0 60px rgba(0,0,0,0.5)',
        }}
      >
        {screen === 'splash' && (
          <SplashScreen onDone={() => setScreen('onboarding')} />
        )}

        {screen === 'onboarding' && (
          <OnboardingScreen onDone={() => setScreen('login')} />
        )}

        {screen === 'login' && (
          <LoginScreen onLogin={() => setScreen('app')} />
        )}

        {screen === 'app' && (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-hidden">
              {renderTab()}
            </div>
            <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        )}
      </div>
    </div>
  );
}
