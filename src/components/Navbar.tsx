import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Globe, ChevronDown, BookOpen, Zap, Menu, X, LogOut } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useLanguage, Language } from '@/LanguageContext';

const NAV_LINKS = [
  { key: 'nav_timeline', path: '/timeline' },
  { key: 'nav_epochs', path: '/epochs' },
  { key: 'nav_language_lab', path: '/language-lab' },
  { key: 'nav_leaderboard', path: '/leaderboard' },
  { key: 'nav_about', path: '/about' },
];

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
];

export default function Navbar() {
  const { user, setShowAuthModal, setAuthMode, signOut } = useApp();
  const { language, setLanguage, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  const handleLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleSignOut = async () => {
    setUserOpen(false);
    await signOut();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#EEF1F7] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-[#2F5D9F] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display text-xl font-bold text-[#2A2A2A] tracking-tight">
                Rus<span className="text-[#C94B4B]">History</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium font-ui transition-all ${
                  location.pathname === link.path
                    ? 'bg-[#EEF1F7] text-[#2F5D9F]'
                    : 'text-[#7A8499] hover:text-[#2A2A2A] hover:bg-[#F5F7FA]'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[#7A8499] hover:text-[#2A2A2A] hover:bg-[#F5F7FA] transition-all"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{currentLang.flag} {currentLang.code.toUpperCase()}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-[#EEF1F7] py-1 w-44 z-50">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        language === lang.code
                          ? 'bg-[#EEF1F7] text-[#2F5D9F] font-medium'
                          : 'text-[#2A2A2A] hover:bg-[#F5F7FA]'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="font-ui">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Avatar + XP */}
            {user ? (
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 bg-[#F5F7FA] rounded-lg px-3 py-1.5">
                  <Flame className="w-4 h-4 text-orange-500 animate-flame" />
                  <span className="font-mono-accent text-sm font-medium text-[#2A2A2A]">{user.streak}</span>
                  <div className="w-px h-4 bg-[#EEF1F7]" />
                  <Zap className="w-4 h-4 text-[#2F5D9F]" />
                  <span className="font-mono-accent text-sm font-medium text-[#2F5D9F]">{user.xp} XP</span>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setUserOpen(o => !o)}
                    className="w-9 h-9 rounded-full bg-[#2F5D9F] flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:opacity-90 transition-opacity shadow-md uppercase"
                  >
                    {user.username.charAt(0)}
                  </button>
                  {userOpen && (
                    <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-[#EEF1F7] py-1 w-56 z-50">
                      <div className="px-4 py-2.5 border-b border-[#EEF1F7]">
                        <div className="text-sm font-semibold text-[#2A2A2A] font-ui truncate">{user.username}</div>
                        {user.email && (
                          <div className="text-xs text-[#7A8499] font-ui truncate">{user.email}</div>
                        )}
                      </div>
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-[#C94B4B] hover:bg-[#F5F7FA] transition-colors font-ui"
                      >
                        <LogOut className="w-4 h-4" />
                        {t('nav_logout')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#2F5D9F] text-white rounded-lg text-sm font-medium hover:bg-[#264d8a] transition-colors btn-press"
              >
                {t('nav_login')}
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-[#7A8499] hover:text-[#2A2A2A] hover:bg-[#F5F7FA]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#EEF1F7] py-4 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-[#EEF1F7] text-[#2F5D9F]'
                    : 'text-[#7A8499] hover:text-[#2A2A2A]'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
            {!user && (
              <button
                onClick={() => { handleLogin(); setMobileOpen(false); }}
                className="mt-2 px-4 py-2.5 bg-[#2F5D9F] text-white rounded-lg text-sm font-medium"
              >
                {t('nav_login')}
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
