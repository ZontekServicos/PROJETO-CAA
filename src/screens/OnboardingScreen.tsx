import { useState } from 'react';

interface OnboardingScreenProps {
  onDone: () => void;
}

const steps = [
  {
    emoji: '🗣️',
    title: 'Comunique-se do seu jeito',
    description: 'Use imagens, símbolos e palavras para construir mensagens de forma simples e rápida.',
    bg: 'linear-gradient(145deg, #EEF1FE 0%, #E0E7FF 100%)',
    accent: '#4F6EF7',
  },
  {
    emoji: '🔊',
    title: 'Monte frases rapidamente',
    description: 'Selecione os cartões e transforme-os em fala com um único toque no botão FALAR.',
    bg: 'linear-gradient(145deg, #D1FAE5 0%, #A7F3D0 100%)',
    accent: '#059669',
  },
  {
    emoji: '✨',
    title: 'Personalize sua comunicação',
    description: 'Crie categorias, palavras e frases importantes para você. Tudo do seu jeito.',
    bg: 'linear-gradient(145deg, #F3E8FF 0%, #E9D5FF 100%)',
    accent: '#7C3AED',
  },
];

export default function OnboardingScreen({ onDone }: OnboardingScreenProps) {
  const [step, setStep] = useState(0);
  const current = steps[step];
  const isLast = step === steps.length - 1;

  const next = () => {
    if (isLast) onDone();
    else setStep(step + 1);
  };

  return (
    <div className="flex flex-col h-full" style={{ background: '#F5F7FF' }}>
      {/* Skip */}
      <div className="flex justify-end p-4 pt-6">
        <button
          onClick={onDone}
          className="font-600 text-sm px-3 py-1.5 rounded-xl"
          style={{ color: '#9CA3AF', background: '#F3F4F6' }}
        >
          Pular
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center flex-1 px-6 pt-4 pb-6 gap-6">
        {/* Illustration area */}
        <div
          className="fade-in flex items-center justify-center rounded-3xl w-full"
          style={{
            background: current.bg,
            height: 260,
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          }}
          key={step}
        >
          <span style={{ fontSize: 96 }}>{current.emoji}</span>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-3 text-center fade-in" key={`text-${step}`}>
          <h2 className="font-800" style={{ fontSize: 24, color: '#1E1E2E', lineHeight: 1.2 }}>
            {current.title}
          </h2>
          <p className="font-500 text-gray-500" style={{ fontSize: 16, lineHeight: 1.6, maxWidth: 300 }}>
            {current.description}
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 mt-auto">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className="rounded-full transition-all"
              style={{
                width: i === step ? 24 : 8,
                height: 8,
                background: i === step ? current.accent : '#D1D5DB',
              }}
              aria-label={`Etapa ${i + 1}`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="w-full font-800 rounded-2xl py-4 text-white text-base transition-transform active:scale-95"
          style={{
            background: current.accent,
            boxShadow: `0 8px 24px ${current.accent}50`,
          }}
        >
          {isLast ? 'Começar' : 'Próximo →'}
        </button>
      </div>
    </div>
  );
}
