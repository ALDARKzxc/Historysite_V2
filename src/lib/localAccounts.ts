// Local, offline account store used when Supabase is NOT configured.
// Accounts and the current session are persisted in localStorage so that
// register → log out → log in returns the SAME account with its progress.
// (Plaintext storage — this is only a no-backend demo fallback, not real security.)

export interface LocalAccount {
  id: string;
  username: string;
  email: string;
  password: string;
  xp: number;
  streak: number;
  completedTopics: string[];
  quizAttempts: Record<string, number>;
}

const ACCOUNTS_KEY = 'rh_accounts';
const SESSION_KEY = 'rh_session';

function read(): LocalAccount[] {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    return raw ? (JSON.parse(raw) as LocalAccount[]) : [];
  } catch {
    return [];
  }
}

function write(list: LocalAccount[]): void {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(list));
}

function genId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return 'acc_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function listAccounts(): LocalAccount[] {
  return read();
}

export function findByEmail(email: string): LocalAccount | undefined {
  const e = email.trim().toLowerCase();
  return read().find(a => a.email.toLowerCase() === e);
}

export function findById(id: string): LocalAccount | undefined {
  return read().find(a => a.id === id);
}

export function createAccount(data: Omit<LocalAccount, 'id'>): LocalAccount {
  const list = read();
  const account: LocalAccount = { ...data, id: genId() };
  list.push(account);
  write(list);
  return account;
}

export function updateAccount(
  id: string,
  patch: Partial<Pick<LocalAccount, 'username' | 'xp' | 'streak' | 'completedTopics' | 'quizAttempts'>>,
): void {
  const list = read();
  const idx = list.findIndex(a => a.id === id);
  if (idx === -1) return;
  list[idx] = { ...list[idx], ...patch };
  write(list);
}

export function getSessionId(): string | null {
  return localStorage.getItem(SESSION_KEY);
}

export function setSessionId(id: string | null): void {
  if (id) localStorage.setItem(SESSION_KEY, id);
  else localStorage.removeItem(SESSION_KEY);
}
