import { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useLanguage } from '@/LanguageContext';

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal, authMode, setAuthMode, signIn, signUp } = useApp();
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  if (!showAuthModal) return null;

  const close = () => {
    setShowAuthModal(false);
    setError(null);
    setInfo(null);
  };

  const switchMode = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setError(null);
    setInfo(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);
    const result =
      authMode === 'login'
        ? await signIn(email, password)
        : await signUp(email, password, username);
    setLoading(false);

    if (!result.ok) {
      setError(result.error || t('auth_error_generic'));
      return;
    }
    if (result.needsConfirmation) {
      setInfo(t('auth_check_email'));
      return;
    }
    close();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={close}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-br from-[#2F5D9F] to-[#1a3d6e] flex items-end px-6 pb-4">
          <div className="absolute inset-0 opacity-20"
            style={{backgroundImage: 'url(https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}
          />
          <div className="relative z-10">
            <h2 className="font-display text-2xl font-bold text-white">
              {authMode === 'login' ? t('auth_welcome_back') : t('auth_join')}
            </h2>
            <p className="text-white/70 text-sm font-ui mt-0.5">
              {authMode === 'login' ? t('auth_login_sub') : t('auth_register_sub')}
            </p>
          </div>
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          {/* Tab Switch */}
          <div className="flex bg-[#F5F7FA] rounded-lg p-1 mb-6">
            {(['login', 'register'] as const).map(mode => (
              <button
                key={mode}
                onClick={() => switchMode(mode)}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  authMode === mode
                    ? 'bg-white text-[#2F5D9F] shadow-sm'
                    : 'text-[#7A8499] hover:text-[#2A2A2A]'
                }`}
              >
                {mode === 'login' ? t('auth_signin') : t('auth_register_tab')}
              </button>
            ))}
          </div>

          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700 font-ui">
              {error}
            </div>
          )}
          {info && (
            <div className="mb-4 px-4 py-3 rounded-xl bg-green-50 border border-green-200 text-sm text-green-700 font-ui">
              {info}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {authMode === 'register' && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8499]" />
                <input
                  type="text"
                  placeholder={t('auth_username')}
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#F5F7FA] border border-[#EEF1F7] rounded-xl text-sm font-ui focus:outline-none focus:border-[#2F5D9F] focus:ring-2 focus:ring-[#2F5D9F]/20 transition-all"
                  required
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8499]" />
              <input
                type="email"
                placeholder={t('auth_email_ph')}
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#F5F7FA] border border-[#EEF1F7] rounded-xl text-sm font-ui focus:outline-none focus:border-[#2F5D9F] focus:ring-2 focus:ring-[#2F5D9F]/20 transition-all"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8499]" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder={t('auth_password_ph')}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-[#F5F7FA] border border-[#EEF1F7] rounded-xl text-sm font-ui focus:outline-none focus:border-[#2F5D9F] focus:ring-2 focus:ring-[#2F5D9F]/20 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A8499] hover:text-[#2A2A2A]"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#2F5D9F] text-white rounded-xl font-medium text-sm hover:bg-[#264d8a] transition-all btn-press disabled:opacity-60 shadow-md shadow-[#2F5D9F]/30 mt-2"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  <span>{t('auth_processing')}</span>
                </div>
              ) : (
                authMode === 'login' ? t('auth_signin') : t('auth_create_account')
              )}
            </button>
          </form>

          {authMode === 'login' && (
            <p className="text-center text-sm text-[#7A8499] mt-4 font-ui">
              {t('auth_new_here')}{' '}
              <button
                onClick={() => switchMode('register')}
                className="text-[#2F5D9F] font-medium hover:underline"
              >
                {t('auth_create_link')}
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
