import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'EN' | 'RU' | 'AR' | 'ZH';

interface User {
  id: string;
  username: string;
  email: string;
  xp: number;
  level: number;
  streak: number;
  completedTopics: string[];
  completedEpochs: string[];
  achievements: string[];
  languagesUsed: string[];
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  bilingualMode: boolean;
  setBilingualMode: (v: boolean) => void;
  addXP: (amount: number) => void;
  completeTopics: (topicId: string) => void;
  showAuthModal: boolean;
  setShowAuthModal: (v: boolean) => void;
  authMode: 'login' | 'register';
  setAuthMode: (v: 'login' | 'register') => void;
  levelUpAnimation: boolean;
  setLevelUpAnimation: (v: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

const LEVEL_TITLES = ['Novice', 'Boyar', 'Voivode', 'Knyaz', 'Tsar', 'Emperor', 'Legend'];

function getLevelFromXP(xp: number): number {
  return Math.min(Math.floor(xp / 500), LEVEL_TITLES.length - 1);
}

const DEFAULT_USER: User = {
  id: '1',
  username: 'HistoryExplorer',
  email: 'explorer@rushistory.ru',
  xp: 125,
  level: 0,
  streak: 3,
  completedTopics: [],
  completedEpochs: [],
  achievements: [],
  languagesUsed: ['EN'],
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(DEFAULT_USER);
  const [language, setLanguage] = useState<Language>('EN');
  const [bilingualMode, setBilingualMode] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [levelUpAnimation, setLevelUpAnimation] = useState(false);

  const addXP = (amount: number) => {
    if (!user) return;
    const prevLevel = getLevelFromXP(user.xp);
    const newXP = user.xp + amount;
    const newLevel = getLevelFromXP(newXP);
    setUser({ ...user, xp: newXP, level: newLevel });
    if (newLevel > prevLevel) {
      setLevelUpAnimation(true);
      setTimeout(() => setLevelUpAnimation(false), 3000);
    }
  };

  const completeTopics = (topicId: string) => {
    if (!user || user.completedTopics.includes(topicId)) return;
    setUser({ ...user, completedTopics: [...user.completedTopics, topicId] });
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (user && !user.languagesUsed.includes(lang)) {
      const newLangs = [...user.languagesUsed, lang];
      setUser({ ...user, languagesUsed: newLangs });
    }
  };

  return (
    <AppContext.Provider value={{
      user, setUser, language, setLanguage: handleSetLanguage,
      bilingualMode, setBilingualMode, addXP, completeTopics,
      showAuthModal, setShowAuthModal, authMode, setAuthMode,
      levelUpAnimation, setLevelUpAnimation,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

export { LEVEL_TITLES, getLevelFromXP };
