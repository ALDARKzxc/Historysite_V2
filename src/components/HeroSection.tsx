import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Map } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useLanguage, translations } from '@/LanguageContext';
import { spring } from '@/lib/animations';

export default function HeroSection() {
  const navigate = useNavigate();
  const { user, setShowAuthModal, setAuthMode } = useApp();
  const { t, showRussianSubtitles } = useLanguage();

  const handleStart = () => {
    if (!user) {
      setAuthMode('register');
      setShowAuthModal(true);
      return;
    }
    const el = document.getElementById('epochs');
    if (!el) {
      navigate('/epochs');
      return;
    }
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // pleasant blur-in as the section comes into view
    el.classList.remove('blur-in');
    void el.offsetWidth;
    el.classList.add('blur-in');
    window.setTimeout(() => el.classList.remove('blur-in'), 1000);
  };

  const STATS = [
    { value: '220+', label: t('stat_topics') },
    { value: '18', label: t('stat_epochs') },
    { value: '1,200', label: t('stat_years') },
    { value: '4', label: t('stat_languages') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Map collage background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2744] via-[#2F5D9F] to-[#1a3d6e]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(201,75,75,0.3) 0%, transparent 40%)`,
          }}
        />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#C94B4B]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-[#C94B4B] rounded-full animate-pulse" />
          <span className="text-white/80 text-sm font-ui font-medium tracking-wide">
            {t('hero_eyebrow')}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-6 animate-fade-in-up stagger-1">
          {t('hero_title_pre')}{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#C94B4B]">{t('hero_title_highlight')}</span>
            <span className="absolute inset-x-0 bottom-0 h-3 bg-[#C94B4B]/20 rounded" />
          </span>
          <br />
          {t('hero_title_post')}
        </h1>

        {/* Sub-headline with bilingual example */}
        <div className="mb-10 animate-fade-in-up stagger-2">
          <p className="text-white/80 text-lg md:text-xl font-ui font-light max-w-2xl mx-auto leading-relaxed">
            {t('hero_subtitle')}
          </p>
          {showRussianSubtitles && (
            <p className="text-white/40 text-sm font-ui italic mt-2">
              {translations.ru.hero_subtitle}
            </p>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up stagger-3">
          <motion.button
            onClick={handleStart}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={spring}
            className="group flex items-center gap-3 px-8 py-4 bg-[#C94B4B] text-white rounded-2xl font-medium text-base hover:bg-[#b03d3d] transition-colors shadow-xl shadow-[#C94B4B]/30 min-w-[200px] justify-center"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {t('hero_btn_start')}
          </motion.button>
          <motion.button
            onClick={() => navigate('/timeline')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={spring}
            className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-2xl font-medium text-base hover:bg-white/20 transition-colors min-w-[200px] justify-center"
          >
            <Map className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {t('hero_btn_timeline')}
          </motion.button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 justify-center animate-fade-in-up stagger-4">
          {STATS.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-mono-accent text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/50 text-xs font-ui">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs font-ui tracking-widest uppercase">{t('hero_scroll')}</span>
        <ChevronDown className="w-5 h-5 text-white/50" />
      </div>
    </section>
  );
}
