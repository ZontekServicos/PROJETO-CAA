export type Screen = 'splash' | 'onboarding' | 'login' | 'app';
export type Tab = 'communication' | 'categories' | 'favorites' | 'history' | 'profile';

export interface CAACard {
  id: string;
  emoji: string;
  word: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  cardCount: number;
}

export interface HistoryEntry {
  id: string;
  phrase: string;
  time: string;
  date: string;
  isFavorited: boolean;
}

export interface FavoritePhrase {
  id: string;
  phrase: string;
  emoji: string;
}
