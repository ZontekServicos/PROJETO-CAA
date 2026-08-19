interface SplashScreenProps {
  onDone: () => void;
}

export default function SplashScreen({ onDone }: SplashScreenProps) {
  return (
    <div
      className="flex flex-col items-center justify-center h-full gap-6"
      style={{
        background: 'linear-gradient(145deg, #4F6EF7 0%, #7C3AED 100%)',
      }}
    >
      {/* Logo container */}
      <div className="flex flex-col items-center gap-4">
        <div
          className="logo-bounce flex items-center justify-center rounded-3xl"
          style={{
            width: 120,
            height: 120,
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255,255,255,0.3)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
          }}
        >
          <span style={{ fontSize: 64 }}>💬</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <h1 className="font-900 text-white" style={{ fontSize: 36, letterSpacing: -0.5 }}>
            API CAA
          </h1>
          <p className="font-500 text-white" style={{ opacity: 0.8, fontSize: 15 }}>
            Comunicação Aumentativa e Alternativa
          </p>
        </div>
      </div>

      {/* Animated dots */}
      <div className="flex gap-2 mt-4">
        {[0, 0.2, 0.4].map((delay, i) => (
          <div
            key={i}
            className="rounded-full bg-white"
            style={{
              width: 8,
              height: 8,
              opacity: 0.6,
              animation: `logoBounce 1.2s ease-in-out ${delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Tagline */}
      <p className="font-600 text-white text-center px-8" style={{ opacity: 0.75, fontSize: 14, marginTop: 16 }}>
        Comunicar deve ser simples,{'\n'}rápido e acessível.
      </p>

      {/* Start button */}
      <button
        onClick={onDone}
        className="font-700 rounded-2xl px-10 py-4 text-base transition-transform active:scale-95"
        style={{
          background: 'white',
          color: '#4F6EF7',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          marginTop: 8,
        }}
      >
        Começar →
      </button>
    </div>
  );
}
