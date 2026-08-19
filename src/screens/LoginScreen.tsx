import { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<'login' | 'register'>('login');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex flex-col h-full" style={{ background: '#F5F7FF' }}>
      {/* Header */}
      <div
        className="flex flex-col items-center pt-10 pb-8 px-6"
        style={{ background: 'linear-gradient(145deg, #4F6EF7 0%, #7C3AED 100%)' }}
      >
        <div
          className="flex items-center justify-center rounded-2xl mb-4"
          style={{ width: 64, height: 64, background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.3)' }}
        >
          <span style={{ fontSize: 34 }}>💬</span>
        </div>
        <h1 className="font-900 text-white" style={{ fontSize: 28 }}>API CAA</h1>
        <p className="font-500 text-white text-sm mt-1" style={{ opacity: 0.8 }}>
          {mode === 'login' ? 'Entre na sua conta' : 'Crie sua conta'}
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 flex flex-col px-6 pt-8 pb-6 gap-5 overflow-y-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-700 text-sm" style={{ color: '#374151' }}>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full rounded-2xl px-4 py-4 font-500 text-base border-2 outline-none transition-all"
              style={{
                background: 'white',
                borderColor: '#E2E8F0',
                color: '#1E1E2E',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#4F6EF7')}
              onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')}
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-700 text-sm" style={{ color: '#374151' }}>Senha</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-2xl px-4 py-4 font-500 text-base border-2 outline-none transition-all"
                style={{ background: 'white', borderColor: '#E2E8F0', color: '#1E1E2E', paddingRight: 52 }}
                onFocus={(e) => (e.target.style.borderColor = '#4F6EF7')}
                onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 font-600 text-sm"
                style={{ color: '#9CA3AF' }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {mode === 'login' && (
            <button type="button" className="text-sm font-700 text-right" style={{ color: '#4F6EF7' }}>
              Esqueci minha senha
            </button>
          )}

          <button
            type="submit"
            className="w-full font-800 rounded-2xl py-4 text-white text-base mt-2 transition-transform active:scale-95"
            style={{ background: '#4F6EF7', boxShadow: '0 8px 24px rgba(79,110,247,0.4)' }}
          >
            {mode === 'login' ? 'Entrar' : 'Criar conta'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px" style={{ background: '#E2E8F0' }} />
          <span className="text-sm font-600" style={{ color: '#9CA3AF' }}>ou continue com</span>
          <div className="flex-1 h-px" style={{ background: '#E2E8F0' }} />
        </div>

        {/* Social buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 font-700 text-sm border-2 transition-all active:scale-95"
            style={{ borderColor: '#E2E8F0', background: 'white', color: '#374151' }}
            onClick={onLogin}
          >
            <span style={{ fontSize: 20 }}>🔵</span> Google
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 font-700 text-sm border-2 transition-all active:scale-95"
            style={{ borderColor: '#E2E8F0', background: 'white', color: '#374151' }}
            onClick={onLogin}
          >
            <span style={{ fontSize: 20 }}>⚫</span> Apple
          </button>
        </div>

        {/* Toggle mode */}
        <p className="text-center text-sm font-600" style={{ color: '#6B7280' }}>
          {mode === 'login' ? 'Não tem conta? ' : 'Já tem conta? '}
          <button
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            className="font-800"
            style={{ color: '#4F6EF7' }}
          >
            {mode === 'login' ? 'Criar conta' : 'Entrar'}
          </button>
        </p>

        {/* Guest access */}
        <button
          onClick={onLogin}
          className="text-center text-sm font-600 underline"
          style={{ color: '#9CA3AF' }}
        >
          Continuar sem conta
        </button>
      </div>
    </div>
  );
}
