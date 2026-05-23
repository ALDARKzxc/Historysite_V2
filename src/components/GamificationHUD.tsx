import { Flame, Zap, Trophy, Star } from 'lucide-react';
import { useApp, getLevelFromXP } from '@/context/AppContext';
import { useLanguage } from '@/LanguageContext';

const LEVEL_KEYS = ['level_novice', 'level_boyar', 'level_voivode', 'level_knyaz', 'level_tsar', 'level_emperor', 'level_legend'];

export default function GamificationHUD() {
  const { user } = useApp();
  const { t } = useLanguage();
  if (!user) return null;

  const level = getLevelFromXP(user.xp);
  const title = t(LEVEL_KEYS[level] || 'level_novice');
  const xpInLevel = user.xp % 500;
  const progress = (xpInLevel / 500) * 100;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#EEF1F7] px-6 py-3 flex items-center gap-5">
        {/* Streak */}
        <div className="flex items-center gap-1.5">
          <Flame className="w-5 h-5 text-orange-500 animate-flame" />
          <div>
            <div className="font-mono-accent text-sm font-bold text-[#2A2A2A]">{user.streak}</div>
            <div className="text-[10px] text-[#7A8499] font-ui">{t('hud_streak')}</div>
          </div>
        </div>

        <div className="w-px h-8 bg-[#EEF1F7]" />

        {/* XP */}
        <div className="flex items-center gap-1.5">
          <Zap className="w-5 h-5 text-[#2F5D9F]" />
          <div>
            <div className="font-mono-accent text-sm font-bold text-[#2F5D9F]">{user.xp}</div>
            <div className="text-[10px] text-[#7A8499] font-ui">{t('hud_total_xp')}</div>
          </div>
        </div>

        <div className="w-px h-8 bg-[#EEF1F7]" />

        {/* Level */}
        <div className="flex items-center gap-1.5">
          <Star className="w-5 h-5 text-yellow-500" />
          <div>
            <div className="text-sm font-bold text-[#2A2A2A] font-ui">{title}</div>
            <div className="text-[10px] text-[#7A8499] font-ui">{t('hud_lv')}{level + 1}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GamificationSidebar() {
  const { user } = useApp();
  const { t } = useLanguage();
  if (!user) return null;

  const level = getLevelFromXP(user.xp);
  const title = t(LEVEL_KEYS[level] || 'level_novice');
  const xpInLevel = user.xp % 500;
  const progress = (xpInLevel / 500) * 100;

  return (
    <div className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 z-30">
      <div className="bg-white rounded-2xl shadow-xl border border-[#EEF1F7] p-5 w-52">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#2F5D9F] flex items-center justify-center text-white font-bold text-sm">
            {user.username.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-semibold text-[#2A2A2A] font-ui">{user.username}</div>
            <div className="text-xs text-[#7A8499] font-ui">{title}</div>
          </div>
        </div>

        {/* XP Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-[#7A8499] font-ui mb-1.5">
            <span className="font-mono-accent font-medium text-[#2F5D9F]">{user.xp} XP</span>
            <span>{t('hud_lv')}{level + 2} {t('hud_in')} {500 - xpInLevel}</span>
          </div>
          <div className="h-2 bg-[#EEF1F7] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#2F5D9F] to-[#4A7EC7] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#F5F7FA] rounded-xl p-3 text-center">
            <Flame className="w-5 h-5 text-orange-500 mx-auto mb-1 animate-flame" />
            <div className="font-mono-accent text-base font-bold text-[#2A2A2A]">{user.streak}</div>
            <div className="text-[10px] text-[#7A8499] font-ui">{t('hud_day_streak')}</div>
          </div>
          <div className="bg-[#F5F7FA] rounded-xl p-3 text-center">
            <Trophy className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
            <div className="font-mono-accent text-base font-bold text-[#2A2A2A]">{user.completedTopics.length}</div>
            <div className="text-[10px] text-[#7A8499] font-ui">{t('hud_topics_done')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
