import { useEffect } from 'react';
import { useApp, getLevelFromXP } from '@/context/AppContext';
import { useLanguage } from '@/LanguageContext';

const LEVEL_KEYS = ['level_novice', 'level_boyar', 'level_voivode', 'level_knyaz', 'level_tsar', 'level_emperor', 'level_legend'];

function Confetti() {
  const pieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: ['#2F5D9F', '#C94B4B', '#FFD700', '#4A7C59', '#9B59B6'][Math.floor(Math.random() * 5)],
    delay: Math.random() * 1.5,
    duration: 1.5 + Math.random(),
    size: 6 + Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[200]">
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="absolute rounded-sm"
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            animation: `confetti-fall ${piece.duration}s ease-in ${piece.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
}

export default function LevelUpAnimation() {
  const { levelUpAnimation, setLevelUpAnimation, user } = useApp();
  const { t } = useLanguage();

  useEffect(() => {
    if (!levelUpAnimation) return;
    const timer = setTimeout(() => setLevelUpAnimation(false), 3000);
    return () => clearTimeout(timer);
  }, [levelUpAnimation]);

  if (!levelUpAnimation || !user) return null;

  const title = t(LEVEL_KEYS[getLevelFromXP(user.xp)] || 'level_novice');

  return (
    <>
      <Confetti />
      <div className="fixed inset-0 z-[150] flex items-center justify-center pointer-events-none">
        <div className="bg-white rounded-3xl shadow-2xl p-10 text-center animate-fade-in-up pointer-events-auto">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="font-display text-4xl font-black text-[#2A2A2A] mb-2">{t('levelup_title')}</h2>
          <p className="text-[#7A8499] font-ui text-lg mb-4">{t('levelup_subtitle')}</p>
          <div className="inline-block bg-[#2F5D9F] text-white px-6 py-3 rounded-2xl text-2xl font-display font-bold">
            {title}
          </div>
        </div>
      </div>
    </>
  );
}
