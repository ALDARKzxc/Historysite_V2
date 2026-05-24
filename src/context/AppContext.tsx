import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import type { ProfileRow } from '@/types/supabase';

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

export type AuthResult = { ok: boolean; error?: string; needsConfirmation?: boolean };

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  /** True while the initial session is being restored. */
  authLoading: boolean;
  /** Whether real Supabase auth is active (vs. local mock fallback). */
  authEnabled: boolean;
  signIn: (email: string, password: string) => Promise<AuthResult>;
  signUp: (email: string, password: string, username: string) => Promise<AuthResult>;
  signOut: () => Promise<void>;
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

// Local demo user, used only when Supabase is NOT configured.
const MOCK_USER: User = {
  id: 'local',
  username: 'HistoryExplorer',
  email: 'explorer@rushistory.ru',
  xp: 125,
  level: 0,
  streak: 3,
  completedTopics: [],
  completedEpochs: [],
  achievements: [],
  languagesUsed: ['en'],
  quizAttempts: {},
};

function profileToUser(p: ProfileRow, email: string): User {
  return {
    id: p.id,
    username: p.username || email.split('@')[0] || 'Explorer',
    email,
    xp: p.xp ?? 0,
    level: getLevelFromXP(p.xp ?? 0),
    streak: p.streak ?? 0,
    completedTopics: p.completed_topics ?? [],
    completedEpochs: [],
    achievements: [],
    languagesUsed: [],
    quizAttempts: p.quiz_attempts ?? {},
  };
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(isSupabaseConfigured ? null : MOCK_USER);
  const [authLoading, setAuthLoading] = useState<boolean>(isSupabaseConfigured);
  const [bilingualMode, setBilingualMode] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [levelUpAnimation, setLevelUpAnimation] = useState(false);

  // Skips persisting the profile right after it was just loaded from the DB.
  const skipSync = useRef(false);

  // ---- Auth session lifecycle (only when Supabase is configured) ----
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;

    let active = true;

    const loadProfile = async (session: Session) => {
      const email = session.user.email ?? '';
      const { data, error } = await supabase!
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .maybeSingle();

      if (!active) return;

      if (data) {
        skipSync.current = true;
        setUser(profileToUser(data as ProfileRow, email));
      } else {
        // No profile row yet (e.g. trigger missing) — create a default one.
        const username =
          (session.user.user_metadata?.username as string | undefined) ||
          email.split('@')[0] ||
          'Explorer';
        await supabase!.from('profiles').insert({ id: session.user.id, username });
        if (!active) return;
        skipSync.current = true;
        setUser({
          ...MOCK_USER,
          id: session.user.id,
          username,
          email,
          xp: 0,
          streak: 0,
          completedTopics: [],
          quizAttempts: {},
          level: 0,
        });
      }
      if (error && !data) {
        // swallow — handled by creating a default profile above
      }
    };

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      if (data.session) {
        loadProfile(data.session).finally(() => active && setAuthLoading(false));
      } else {
        setAuthLoading(false);
      }
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!active) return;
      if (session) {
        loadProfile(session);
      } else {
        setUser(null);
      }
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  // ---- Persist progress back to the DB (debounced) ----
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase || !user || user.id === 'local') return;
    if (skipSync.current) {
      skipSync.current = false;
      return;
    }
    const handle = setTimeout(() => {
      void supabase!
        .from('profiles')
        .update({
          username: user.username,
          xp: user.xp,
          streak: user.streak,
          completed_topics: user.completedTopics,
          quiz_attempts: user.quizAttempts,
        })
        .eq('id', user.id);
    }, 600);
    return () => clearTimeout(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.xp, user?.streak, user?.completedTopics, user?.quizAttempts, user?.username]);

  // ---- Level-up animation when the derived level increases ----
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

  // ---- Auth methods ----
  const signIn = async (email: string, password: string): Promise<AuthResult> => {
    if (!isSupabaseConfigured || !supabase) {
      setUser({ ...MOCK_USER, email, username: email.split('@')[0] || 'Explorer' });
      return { ok: true };
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  };

  const signUp = async (email: string, password: string, username: string): Promise<AuthResult> => {
    if (!isSupabaseConfigured || !supabase) {
      setUser({
        ...MOCK_USER,
        email,
        username: username || email.split('@')[0] || 'Explorer',
        xp: 0,
        streak: 0,
        completedTopics: [],
        quizAttempts: {},
        level: 0,
      });
      return { ok: true };
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username } },
    });
    if (error) return { ok: false, error: error.message };
    if (!data.session) return { ok: true, needsConfirmation: true };
    return { ok: true };
  };

  const signOut = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
  };

  // ---- Gamification ----
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
      user, setUser, authLoading, authEnabled: isSupabaseConfigured,
      signIn, signUp, signOut,
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
