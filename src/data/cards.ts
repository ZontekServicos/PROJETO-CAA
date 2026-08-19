import type { CAACard, Category } from '../types';

export const basicCards: CAACard[] = [
  { id: 'eu', emoji: '🧑', word: 'Eu', bgColor: '#DBEAFE', textColor: '#1D4ED8', borderColor: '#BFDBFE', category: 'pessoas' },
  { id: 'voce', emoji: '🫵', word: 'Você', bgColor: '#DBEAFE', textColor: '#1D4ED8', borderColor: '#BFDBFE', category: 'pessoas' },
  { id: 'quero', emoji: '🙌', word: 'Quero', bgColor: '#FEF3C7', textColor: '#92400E', borderColor: '#FDE68A', category: 'acoes' },
  { id: 'preciso', emoji: '❗', word: 'Preciso', bgColor: '#FEF3C7', textColor: '#92400E', borderColor: '#FDE68A', category: 'acoes' },
  { id: 'sim', emoji: '✅', word: 'Sim', bgColor: '#D1FAE5', textColor: '#065F46', borderColor: '#A7F3D0', category: 'respostas' },
  { id: 'nao', emoji: '🚫', word: 'Não', bgColor: '#FEE2E2', textColor: '#991B1B', borderColor: '#FECACA', category: 'respostas' },
  { id: 'agua', emoji: '💧', word: 'Água', bgColor: '#CFFAFE', textColor: '#164E63', borderColor: '#A5F3FC', category: 'bebidas' },
  { id: 'comida', emoji: '🍽️', word: 'Comida', bgColor: '#FED7AA', textColor: '#7C2D12', borderColor: '#FDBA74', category: 'comida' },
  { id: 'banheiro', emoji: '🚽', word: 'Banheiro', bgColor: '#F3E8FF', textColor: '#6B21A8', borderColor: '#E9D5FF', category: 'necessidades' },
  { id: 'ajuda', emoji: '🆘', word: 'Ajuda', bgColor: '#FFE4E6', textColor: '#9F1239', borderColor: '#FECDD3', category: 'necessidades' },
  { id: 'dor', emoji: '😣', word: 'Dor', bgColor: '#FEE2E2', textColor: '#991B1B', borderColor: '#FECACA', category: 'saude' },
  { id: 'obrigado', emoji: '🤝', word: 'Obrigado', bgColor: '#D1FAE5', textColor: '#065F46', borderColor: '#A7F3D0', category: 'social' },
  { id: 'mais', emoji: '➕', word: 'Mais', bgColor: '#FEF3C7', textColor: '#92400E', borderColor: '#FDE68A', category: 'acoes' },
  { id: 'parar', emoji: '✋', word: 'Parar', bgColor: '#FEE2E2', textColor: '#991B1B', borderColor: '#FECACA', category: 'acoes' },
  { id: 'feliz', emoji: '😊', word: 'Feliz', bgColor: '#FEF9C3', textColor: '#854D0E', borderColor: '#FDE047', category: 'sentimentos' },
  { id: 'triste', emoji: '😢', word: 'Triste', bgColor: '#DBEAFE', textColor: '#1D4ED8', borderColor: '#BFDBFE', category: 'sentimentos' },
  { id: 'cansado', emoji: '😴', word: 'Cansado', bgColor: '#F3E8FF', textColor: '#6B21A8', borderColor: '#E9D5FF', category: 'sentimentos' },
  { id: 'fome', emoji: '🍴', word: 'Fome', bgColor: '#FED7AA', textColor: '#7C2D12', borderColor: '#FDBA74', category: 'necessidades' },
  { id: 'casa', emoji: '🏠', word: 'Casa', bgColor: '#D1FAE5', textColor: '#065F46', borderColor: '#A7F3D0', category: 'lugares' },
  { id: 'escola', emoji: '🏫', word: 'Escola', bgColor: '#FEF9C3', textColor: '#854D0E', borderColor: '#FDE047', category: 'lugares' },
  { id: 'medico', emoji: '👨‍⚕️', word: 'Médico', bgColor: '#CFFAFE', textColor: '#164E63', borderColor: '#A5F3FC', category: 'saude' },
  { id: 'dormir', emoji: '🛏️', word: 'Dormir', bgColor: '#F3E8FF', textColor: '#6B21A8', borderColor: '#E9D5FF', category: 'acoes' },
  { id: 'brincar', emoji: '🎮', word: 'Brincar', bgColor: '#FEF9C3', textColor: '#854D0E', borderColor: '#FDE047', category: 'acoes' },
  { id: 'musica', emoji: '🎵', word: 'Música', bgColor: '#FCE7F3', textColor: '#9D174D', borderColor: '#FBCFE8', category: 'lazer' },
];

export const categoryCards: Record<string, CAACard[]> = {
  bebidas: [
    { id: 'agua', emoji: '💧', word: 'Água', bgColor: '#CFFAFE', textColor: '#164E63', borderColor: '#A5F3FC', category: 'bebidas' },
    { id: 'suco', emoji: '🥤', word: 'Suco', bgColor: '#FEF9C3', textColor: '#854D0E', borderColor: '#FDE047', category: 'bebidas' },
    { id: 'cafe', emoji: '☕', word: 'Café', bgColor: '#FED7AA', textColor: '#7C2D12', borderColor: '#FDBA74', category: 'bebidas' },
    { id: 'leite', emoji: '🥛', word: 'Leite', bgColor: '#F0FDF4', textColor: '#14532D', borderColor: '#BBF7D0', category: 'bebidas' },
    { id: 'refri', emoji: '🧃', word: 'Refrigerante', bgColor: '#FFE4E6', textColor: '#9F1239', borderColor: '#FECDD3', category: 'bebidas' },
    { id: 'cha', emoji: '🍵', word: 'Chá', bgColor: '#D1FAE5', textColor: '#065F46', borderColor: '#A7F3D0', category: 'bebidas' },
  ],
  comida: [
    { id: 'arroz', emoji: '🍚', word: 'Arroz', bgColor: '#F0FDF4', textColor: '#14532D', borderColor: '#BBF7D0', category: 'comida' },
    { id: 'feijao', emoji: '🫘', word: 'Feijão', bgColor: '#FED7AA', textColor: '#7C2D12', borderColor: '#FDBA74', category: 'comida' },
    { id: 'fruta', emoji: '🍎', word: 'Fruta', bgColor: '#FEE2E2', textColor: '#991B1B', borderColor: '#FECACA', category: 'comida' },
    { id: 'pao', emoji: '🍞', word: 'Pão', bgColor: '#FEF9C3', textColor: '#854D0E', borderColor: '#FDE047', category: 'comida' },
    { id: 'carne', emoji: '🥩', word: 'Carne', bgColor: '#FEE2E2', textColor: '#991B1B', borderColor: '#FECACA', category: 'comida' },
    { id: 'ovo', emoji: '🥚', word: 'Ovo', bgColor: '#FEF3C7', textColor: '#92400E', borderColor: '#FDE68A', category: 'comida' },
  ],
  sentimentos: [
    { id: 'feliz', emoji: '😊', word: 'Feliz', bgColor: '#FEF9C3', textColor: '#854D0E', borderColor: '#FDE047', category: 'sentimentos' },
    { id: 'triste', emoji: '😢', word: 'Triste', bgColor: '#DBEAFE', textColor: '#1D4ED8', borderColor: '#BFDBFE', category: 'sentimentos' },
    { id: 'bravo', emoji: '😠', word: 'Bravo', bgColor: '#FEE2E2', textColor: '#991B1B', borderColor: '#FECACA', category: 'sentimentos' },
    { id: 'ansioso', emoji: '😰', word: 'Ansioso', bgColor: '#FEF3C7', textColor: '#92400E', borderColor: '#FDE68A', category: 'sentimentos' },
    { id: 'medo', emoji: '😨', word: 'Com medo', bgColor: '#F3E8FF', textColor: '#6B21A8', borderColor: '#E9D5FF', category: 'sentimentos' },
    { id: 'cansado2', emoji: '😴', word: 'Cansado', bgColor: '#DBEAFE', textColor: '#1D4ED8', borderColor: '#BFDBFE', category: 'sentimentos' },
    { id: 'confuso', emoji: '😕', word: 'Confuso', bgColor: '#F3E8FF', textColor: '#6B21A8', borderColor: '#E9D5FF', category: 'sentimentos' },
    { id: 'calmo', emoji: '😌', word: 'Calmo', bgColor: '#D1FAE5', textColor: '#065F46', borderColor: '#A7F3D0', category: 'sentimentos' },
  ],
  saude: [
    { id: 'dor2', emoji: '😣', word: 'Dor', bgColor: '#FEE2E2', textColor: '#991B1B', borderColor: '#FECACA', category: 'saude' },
    { id: 'cabeca', emoji: '🤕', word: 'Cabeça', bgColor: '#FEE2E2', textColor: '#991B1B', borderColor: '#FECACA', category: 'saude' },
    { id: 'barriga', emoji: '🤢', word: 'Barriga', bgColor: '#FEF3C7', textColor: '#92400E', borderColor: '#FDE68A', category: 'saude' },
    { id: 'febre', emoji: '🤒', word: 'Febre', bgColor: '#FED7AA', textColor: '#7C2D12', borderColor: '#FDBA74', category: 'saude' },
    { id: 'remedios', emoji: '💊', word: 'Remédio', bgColor: '#CFFAFE', textColor: '#164E63', borderColor: '#A5F3FC', category: 'saude' },
    { id: 'medico2', emoji: '👨‍⚕️', word: 'Médico', bgColor: '#DBEAFE', textColor: '#1D4ED8', borderColor: '#BFDBFE', category: 'saude' },
  ],
};

export const categories: Category[] = [
  { id: 'pessoas', name: 'Pessoas', emoji: '👨‍👩‍👧', bgColor: '#DBEAFE', textColor: '#1D4ED8', borderColor: '#BFDBFE', cardCount: 4 },
  { id: 'acoes', name: 'Ações', emoji: '🙌', bgColor: '#FEF3C7', textColor: '#92400E', borderColor: '#FDE68A', cardCount: 6 },
  { id: 'comida', name: 'Comida', emoji: '🍽️', bgColor: '#FED7AA', textColor: '#7C2D12', borderColor: '#FDBA74', cardCount: 6 },
  { id: 'bebidas', name: 'Bebidas', emoji: '💧', bgColor: '#CFFAFE', textColor: '#164E63', borderColor: '#A5F3FC', cardCount: 6 },
  { id: 'lugares', name: 'Lugares', emoji: '📍', bgColor: '#D1FAE5', textColor: '#065F46', borderColor: '#A7F3D0', cardCount: 5 },
  { id: 'sentimentos', name: 'Sentimentos', emoji: '❤️', bgColor: '#FCE7F3', textColor: '#9D174D', borderColor: '#FBCFE8', cardCount: 8 },
  { id: 'necessidades', name: 'Necessidades', emoji: '🆘', bgColor: '#FFE4E6', textColor: '#9F1239', borderColor: '#FECDD3', cardCount: 4 },
  { id: 'saude', name: 'Saúde', emoji: '❤️‍🩹', bgColor: '#FEE2E2', textColor: '#991B1B', borderColor: '#FECACA', cardCount: 6 },
  { id: 'escola', name: 'Escola', emoji: '📚', bgColor: '#FEF9C3', textColor: '#854D0E', borderColor: '#FDE047', cardCount: 5 },
  { id: 'casa', name: 'Casa', emoji: '🏠', bgColor: '#D1FAE5', textColor: '#065F46', borderColor: '#A7F3D0', cardCount: 5 },
  { id: 'lazer', name: 'Lazer', emoji: '🎉', bgColor: '#F3E8FF', textColor: '#6B21A8', borderColor: '#E9D5FF', cardCount: 5 },
  { id: 'respostas', name: 'Respostas', emoji: '💬', bgColor: '#D1FAE5', textColor: '#065F46', borderColor: '#A7F3D0', cardCount: 4 },
];

export const quickAnswers = [
  { id: 'qa-sim', text: 'Sim', emoji: '✅', color: '#065F46', bg: '#D1FAE5' },
  { id: 'qa-nao', text: 'Não', emoji: '🚫', color: '#991B1B', bg: '#FEE2E2' },
  { id: 'qa-talvez', text: 'Talvez', emoji: '🤔', color: '#92400E', bg: '#FEF3C7' },
  { id: 'qa-ajuda', text: 'Quero ajuda', emoji: '🆘', color: '#9F1239', bg: '#FFE4E6' },
  { id: 'qa-dor', text: 'Estou com dor', emoji: '😣', color: '#991B1B', bg: '#FEE2E2' },
  { id: 'qa-bem', text: 'Estou bem', emoji: '😊', color: '#065F46', bg: '#D1FAE5' },
  { id: 'qa-repetir', text: 'Pode repetir?', emoji: '🔁', color: '#164E63', bg: '#CFFAFE' },
  { id: 'qa-obrigado', text: 'Obrigado', emoji: '🤝', color: '#6B21A8', bg: '#F3E8FF' },
];

export const sampleHistory = [
  { id: 'h1', phrase: 'Eu quero água.', time: '09:32', date: 'Hoje', isFavorited: true },
  { id: 'h2', phrase: 'Estou com fome.', time: '08:15', date: 'Hoje', isFavorited: false },
  { id: 'h3', phrase: 'Quero ir ao banheiro.', time: '07:45', date: 'Hoje', isFavorited: false },
  { id: 'h4', phrase: 'Eu estou bem.', time: '18:20', date: 'Ontem', isFavorited: true },
  { id: 'h5', phrase: 'Quero dormir.', time: '16:10', date: 'Ontem', isFavorited: false },
  { id: 'h6', phrase: 'Estou com dor na cabeça.', time: '14:00', date: 'Ontem', isFavorited: false },
];

export const sampleFavorites = [
  { id: 'f1', phrase: 'Eu quero água', emoji: '💧' },
  { id: 'f2', phrase: 'Eu estou bem', emoji: '😊' },
  { id: 'f3', phrase: 'Quero falar com minha mãe', emoji: '📞' },
  { id: 'f4', phrase: 'Estou com fome', emoji: '🍽️' },
  { id: 'f5', phrase: 'Preciso de ajuda', emoji: '🆘' },
];
