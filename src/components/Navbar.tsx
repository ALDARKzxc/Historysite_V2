import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Globe, ChevronDown, BookOpen, Zap, Menu, X, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { useLanguage, Language } from '@/LanguageContext';
import { spring, springSnappy, EASE } from '@/lib/animations';

const MotionLink = motion(Link);

// Smooth, non-bouncy dropdown reveal (no spring overshoot → no "shake").
const dropdown = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: EASE, staggerChildren: 0.05, delayChildren: 0.05 },
  },
  exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.14, ease: 'easeIn' } },
};
const dropItem = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE } },
};

const NAV_LINKS = [
  { key: 'nav_timeline', path: '/timeline' },
  { key: 'nav_epochs', path: '/epochs' },
  { key: 'nav_game', path: '/game' },
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

          {/* Desktop Nav Links — magic pill on active + lift & gradient underline on hover */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => {
              const active = location.pathname === link.path;
              return (
                <MotionLink
                  key={link.path}
                  to={link.path}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={spring}
                  className="group relative px-4 py-2 rounded-lg text-sm font-medium font-ui"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-[#EEF1F7]"
                      transition={springSnappy}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      active ? 'text-[#2F5D9F]' : 'text-[#7A8499] group-hover:text-[#2A2A2A]'
                    }`}
                  >
                    {t(link.key)}
                  </span>
                  {!active && (
                    <span className="absolute left-3 right-3 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-[#2F5D9F] to-[#C94B4B] origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  )}
                </MotionLink>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <motion.button
                onClick={() => setLangOpen(!langOpen)}
                whileTap={{ scale: 0.94 }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[#7A8499] hover:text-[#2A2A2A] hover:bg-[#F5F7FA] transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{currentLang.flag} {currentLang.code.toUpperCase()}</span>
                <motion.span animate={{ rotate: langOpen ? 180 : 0 }} transition={spring}>
                  <ChevronDown className="w-3 h-3" />
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    variants={dropdown}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ transformOrigin: 'top right' }}
                    className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-[#EEF1F7] py-1 w-44 z-50"
                  >
                    {LANGUAGES.map(lang => (
                      <motion.button
                        key={lang.code}
                        variants={dropItem}
                        whileHover={{ x: 4 }}
                        transition={spring}
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${
                          language === lang.code
                            ? 'bg-[#EEF1F7] text-[#2F5D9F] font-medium'
                            : 'text-[#2A2A2A] hover:bg-[#F5F7FA]'
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span className="font-ui">{lang.label}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
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
                  <motion.button
                    onClick={() => setUserOpen(o => !o)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    transition={spring}
                    className="w-9 h-9 rounded-full bg-[#2F5D9F] flex items-center justify-center text-white text-sm font-bold cursor-pointer shadow-md uppercase"
                  >
                    {user.username.charAt(0)}
                  </motion.button>
                  <AnimatePresence>
                    {userOpen && (
                      <motion.div
                        variants={dropdown}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        style={{ transformOrigin: 'top right' }}
                        className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-[#EEF1F7] py-1 w-56 z-50"
                      >
                        <motion.div variants={dropItem} className="px-4 py-2.5 border-b border-[#EEF1F7]">
                          <div className="text-sm font-semibold text-[#2A2A2A] font-ui truncate">{user.username}</div>
                          {user.email && (
                            <div className="text-xs text-[#7A8499] font-ui truncate">{user.email}</div>
                          )}
                        </motion.div>
                        <motion.button
                          variants={dropItem}
                          whileHover={{ x: 4 }}
                          transition={spring}
                          onClick={handleSignOut}
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-[#C94B4B] hover:bg-[#F5F7FA] transition-colors font-ui"
                        >
                          <LogOut className="w-4 h-4" />
                          {t('nav_logout')}
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              <motion.button
                onClick={handleLogin}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={spring}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#2F5D9F] text-white rounded-lg text-sm font-medium hover:bg-[#264d8a] transition-colors shadow-md shadow-[#2F5D9F]/30"
              >
                {t('nav_login')}
              </motion.button>
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
