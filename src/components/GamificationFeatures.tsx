import { Flame, Trophy, Languages, Zap, Star, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/LanguageContext';

const FEATURES = [
  { icon: <Zap className="w-6 h-6 text-[#2F5D9F]" />, titleKey: 'feat_xp_title', descKey: 'feat_xp_desc', color: '#2F5D9F', bg: '#EEF1F7' },
  { icon: <Flame className="w-6 h-6 text-orange-500" />, titleKey: 'feat_streak_title', descKey: 'feat_streak_desc', color: '#F97316', bg: '#FFF7ED' },
  { icon: <Trophy className="w-6 h-6 text-yellow-500" />, titleKey: 'feat_achievements_title', descKey: 'feat_achievements_desc', color: '#EAB308', bg: '#FEFCE8' },
  { icon: <Languages className="w-6 h-6 text-[#4A7C59]" />, titleKey: 'feat_bilingual_title', descKey: 'feat_bilingual_desc', color: '#4A7C59', bg: '#F0FDF4' },
  { icon: <Star className="w-6 h-6 text-purple-500" />, titleKey: 'feat_langlab_title', descKey: 'feat_langlab_desc', color: '#8B5CF6', bg: '#F5F3FF' },
  { icon: <CheckCircle className="w-6 h-6 text-[#C94B4B]" />, titleKey: 'feat_quizzes_title', descKey: 'feat_quizzes_desc', color: '#C94B4B', bg: '#FEF2F2' },
];

const LEVELS = [
  { titleKey: 'level_novice', xp: '0-499 XP', emoji: '📚' },
  { titleKey: 'level_boyar', xp: '500-999 XP', emoji: '📜' },
  { titleKey: 'level_voivode', xp: '1000-1499 XP', emoji: '⚔️' },
  { titleKey: 'level_knyaz', xp: '1500-1999 XP', emoji: '🏰' },
  { titleKey: 'level_tsar', xp: '2000-2499 XP', emoji: '👑' },
  { titleKey: 'level_emperor', xp: '2500-2999 XP', emoji: '🦅' },
  { titleKey: 'level_legend', xp: '3000+ XP', emoji: '⚡' },
];

export default function GamificationFeatures() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 mb-4 shadow-sm border border-[#EEF1F7]">
            <Trophy className="w-3.5 h-3.5 text-yellow-500" />
            <span className="text-xs font-medium text-[#2F5D9F] font-ui tracking-wide uppercase">{t('gamification_badge')}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2A2A2A] mb-4">
            {t('gamification_title')}
          </h2>
          <p className="text-[#7A8499] font-ui text-lg max-w-2xl mx-auto">
            {t('gamification_subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#EEF1F7] shadow-sm card-hover animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: feature.bg }}
              >
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-[#2A2A2A] mb-2">{t(feature.titleKey)}</h3>
              <p className="text-[#7A8499] text-sm font-ui leading-relaxed">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>

        {/* Level System */}
        <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-8">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-[#2A2A2A] mb-2">{t('level_system_title')}</h3>
            <p className="text-[#7A8499] font-ui">{t('level_system_subtitle')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {LEVELS.map((level, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm border-2 ${
                  i === 0 ? 'border-[#2F5D9F]/30 bg-[#EEF1F7]' : 'border-[#EEF1F7] bg-[#F5F7FA]'
                }`}>
                  {level.emoji}
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold text-[#2A2A2A] font-ui">{t(level.titleKey)}</div>
                  <div className="text-[10px] text-[#9AA3B2] font-mono-accent">{level.xp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/epochs')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C94B4B] text-white rounded-2xl font-medium font-ui hover:bg-[#b03d3d] transition-all btn-press shadow-xl shadow-[#C94B4B]/25 text-base"
          >
            <Zap className="w-5 h-5" />
            {t('gamification_cta')}
          </button>
        </div>
      </div>
    </section>
  );
}
