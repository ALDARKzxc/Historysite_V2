import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import type { ProfileRow } from '@/types/supabase';
import {
  type LocalAccount,
  findByEmail,
  findById,
  createAccount,
  updateAccount,
  getSessionId,
  setSessionId,
} from '@/lib/localAccounts';

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

function accountToUser(a: LocalAccount): User {
  return {
    id: a.id,
    username: a.username,
    email: a.email,
    xp: a.xp,
    level: getLevelFromXP(a.xp),
    streak: a.streak,
    completedTopics: a.completedTopics ?? [],
    completedEpochs: [],
    achievements: [],
    languagesUsed: [],
    quizAttempts: a.quizAttempts ?? {},
  };
}

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

// Restore the locally logged-in user (mock mode) from the saved session.
function loadLocalSessionUser(): User | null {
  const id = getSessionId();
  if (!id) return null;
  const acc = findById(id);
  return acc ? accountToUser(acc) : null;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() =>
    isSupabaseConfigured ? null : loadLocalSessionUser(),
  );
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
      const userId = session.user.id;
      const fallbackUsername =
        (session.user.user_metadata?.username as string | undefined) ||
        email.split('@')[0] ||
        'Explorer';

      const { data, error } = await supabase!
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
      if (error) {
        console.error('[supabase] profile fetch failed:', error);
      }
      if (!active) return;

      if (data) {
        skipSync.current = true;
        setUser(profileToUser(data as ProfileRow, email));
        return;
      }

      // No row found. Upsert so we don't conflict with the signup trigger,
      // then re-fetch to read the canonical row (it may already have progress
      // from another session that we missed on the first SELECT).
      const { error: upsertError } = await supabase!
        .from('profiles')
        .upsert(
          { id: userId, username: fallbackUsername },
          { onConflict: 'id', ignoreDuplicates: true },
        );
      if (upsertError) {
        console.error('[supabase] profile upsert failed:', upsertError);
      }
      if (!active) return;

      const { data: refetched, error: refetchError } = await supabase!
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
      if (refetchError) {
        console.error('[supabase] profile re-fetch failed:', refetchError);
      }
      if (!active) return;

      if (refetched) {
        skipSync.current = true;
        setUser(profileToUser(refetched as ProfileRow, email));
        return;
      }

      // Truly nothing in the DB — last-resort default.
      skipSync.current = true;
      setUser({
        id: userId,
        username: fallbackUsername,
        email,
        xp: 0,
        level: 0,
        streak: 0,
        completedTopics: [],
        completedEpochs: [],
        achievements: [],
        languagesUsed: [],
        quizAttempts: {},
      });
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

  // ---- Persist progress to Supabase (immediate write).
  // Writing immediately (no debounce) so the leaderboard and other devices
  // see the new XP within a second instead of after a stale 600ms window.
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase || !user) return;
    if (skipSync.current) {
      skipSync.current = false;
      return;
    }
    void supabase!
      .from('profiles')
      .update({
        username: user.username,
        xp: user.xp,
        streak: user.streak,
        completed_topics: user.completedTopics,
        quiz_attempts: user.quizAttempts,
      })
      .eq('id', user.id)
      .then(({ error }) => {
        if (error) console.error('[supabase] profile update failed:', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.xp, user?.streak, user?.completedTopics, user?.quizAttempts, user?.username]);

  // ---- Live sync of the user's own profile across devices.
  // Subscribes to UPDATE events on this row so progress made on another
  // device shows up here without a page reload. The monotonic XP guard
  // prevents a slow realtime echo from reverting fresher local progress.
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase || !user?.id) return;
    const userId = user.id;
    const channel = supabase
      .channel(`profile-${userId}`)
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'profiles', filter: `id=eq.${userId}` },
        payload => {
          const fresh = payload.new as ProfileRow;
          setUser(prev => {
            if (!prev || prev.id !== userId) return prev;
            if ((fresh.xp ?? 0) < prev.xp) return prev;
            skipSync.current = true;
            return profileToUser(fresh, prev.email);
          });
        },
      )
      .subscribe();
    return () => {
      void supabase!.removeChannel(channel);
    };
  }, [user?.id]);

  // ---- Refresh profile when the tab becomes visible again.
  // Belt-and-braces in case the realtime channel missed a beat while the
  // tab was backgrounded.
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase || !user?.id) return;
    const userId = user.id;
    const refresh = async () => {
      if (document.visibilityState !== 'visible') return;
      const { data } = await supabase!
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
      if (!data) return;
      const fresh = data as ProfileRow;
      setUser(prev => {
        if (!prev || prev.id !== userId) return prev;
        if ((fresh.xp ?? 0) < prev.xp) return prev;
        skipSync.current = true;
        return profileToUser(fresh, prev.email);
      });
    };
    document.addEventListener('visibilitychange', refresh);
    return () => document.removeEventListener('visibilitychange', refresh);
  }, [user?.id]);

  // ---- Persist progress to the local account store (mock mode) ----
  useEffect(() => {
    if (isSupabaseConfigured || !user) return;
    updateAccount(user.id, {
      username: user.username,
      xp: user.xp,
      streak: user.streak,
      completedTopics: user.completedTopics,
      quizAttempts: user.quizAttempts,
    });
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
      const acc = findByEmail(email);
      if (!acc || acc.password !== password) {
        return { ok: false, error: 'invalid_credentials' };
      }
      setSessionId(acc.id);
      setUser(accountToUser(acc));
      return { ok: true };
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  };

  const signUp = async (email: string, password: string, username: string): Promise<AuthResult> => {
    if (!isSupabaseConfigured || !supabase) {
      if (findByEmail(email)) {
        return { ok: false, error: 'email_taken' };
      }
      const acc = createAccount({
        username: username || email.split('@')[0] || 'Explorer',
        email: email.trim(),
        password,
        xp: 0,
        streak: 0,
        completedTopics: [],
        quizAttempts: {},
      });
      setSessionId(acc.id);
      setUser(accountToUser(acc));
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
    } else {
      setSessionId(null);
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
