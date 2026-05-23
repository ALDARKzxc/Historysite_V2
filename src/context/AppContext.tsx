import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

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
  /** Finished quiz attempts per topic id (capped at MAX_QUIZ_ATTEMPTS in the UI). */
  quizAttempts: Record<string, number>;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  bilingualMode: boolean;
  setBilingualMode: (v: boolean) => void;
  addXP: (amount: number) => void;
  /** Record a finished, failed quiz attempt for a topic. */
  failQuiz: (topicId: string) => void;
  /** Record a passed quiz: counts the attempt, completes the topic and grants XP — once per topic. */
  passQuiz: (topicId: string, xp: number) => void;
  showAuthModal: boolean;
  setShowAuthModal: (v: boolean) => void;
  authMode: 'login' | 'register';
  setAuthMode: (v: 'login' | 'register') => void;
  levelUpAnimation: boolean;
  setLevelUpAnimation: (v: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const MAX_QUIZ_ATTEMPTS = 3;

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
  quizAttempts: {},
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(DEFAULT_USER);
  const [bilingualMode, setBilingualMode] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [levelUpAnimation, setLevelUpAnimation] = useState(false);

  // Trigger the level-up animation whenever the derived level increases.
  const prevLevel = useRef(getLevelFromXP(user?.xp ?? 0));
  useEffect(() => {
    const lvl = getLevelFromXP(user?.xp ?? 0);
    if (lvl > prevLevel.current) {
      setLevelUpAnimation(true);
      const timer = setTimeout(() => setLevelUpAnimation(false), 3000);
      prevLevel.current = lvl;
      return () => clearTimeout(timer);
    }
    prevLevel.current = lvl;
  }, [user?.xp]);

  const addXP = (amount: number) => {
    setUser(prev => (prev ? { ...prev, xp: prev.xp + amount, level: getLevelFromXP(prev.xp + amount) } : prev));
  };

  const failQuiz = (topicId: string) => {
    setUser(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        quizAttempts: { ...prev.quizAttempts, [topicId]: (prev.quizAttempts[topicId] ?? 0) + 1 },
      };
    });
  };

  const passQuiz = (topicId: string, xp: number) => {
    setUser(prev => {
      if (!prev) return prev;
      const attempts = { ...prev.quizAttempts, [topicId]: (prev.quizAttempts[topicId] ?? 0) + 1 };
      // Already completed: count the attempt but never grant XP twice.
      if (prev.completedTopics.includes(topicId)) {
        return { ...prev, quizAttempts: attempts };
      }
      const newXP = prev.xp + xp;
      return {
        ...prev,
        xp: newXP,
        level: getLevelFromXP(newXP),
        completedTopics: [...prev.completedTopics, topicId],
        quizAttempts: attempts,
      };
    });
  };

  return (
    <AppContext.Provider value={{
      user, setUser,
      bilingualMode, setBilingualMode, addXP, failQuiz, passQuiz,
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
