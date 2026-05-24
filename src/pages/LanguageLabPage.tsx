import { useState } from 'react';
import { Languages, Volume2, ChevronRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useLanguage, Localized } from '@/LanguageContext';

const VOCABULARY_POOL: { word: string; translation: Localized; pronunciation: string; example: string }[] = [
  { word: 'История', translation: { en: 'History', ru: 'История', ar: 'التاريخ', zh: '历史' }, pronunciation: 'is-TO-ri-ya', example: 'История России очень богатая.' },
  { word: 'Война', translation: { en: 'War', ru: 'Война', ar: 'حرب', zh: '战争' }, pronunciation: 'voy-NA', example: 'Отечественная война 1812 года.' },
  { word: 'Мир', translation: { en: 'Peace / World', ru: 'Мир', ar: 'سلام / عالم', zh: '和平 / 世界' }, pronunciation: 'MIR', example: 'Декрет о мире.' },
  { word: 'Царь', translation: { en: 'Tsar', ru: 'Царь', ar: 'قيصر', zh: '沙皇' }, pronunciation: 'TSAR', example: 'Иван Грозный был первым царём.' },
  { word: 'Революция', translation: { en: 'Revolution', ru: 'Революция', ar: 'ثورة', zh: '革命' }, pronunciation: 're-vo-LYU-tsi-ya', example: 'Октябрьская революция 1917 года.' },
  { word: 'Империя', translation: { en: 'Empire', ru: 'Империя', ar: 'إمبراطورية', zh: '帝国' }, pronunciation: 'im-PE-ri-ya', example: 'Российская империя.' },
  { word: 'Народ', translation: { en: 'People / Nation', ru: 'Народ', ar: 'شعب / أمة', zh: '人民 / 民族' }, pronunciation: 'na-ROD', example: 'Народ России.' },
  { word: 'Армия', translation: { en: 'Army', ru: 'Армия', ar: 'جيش', zh: '军队' }, pronunciation: 'AR-mi-ya', example: 'Красная армия.' },
  { word: 'Победа', translation: { en: 'Victory', ru: 'Победа', ar: 'نصر', zh: '胜利' }, pronunciation: 'po-BE-da', example: 'День Победы — 9 мая.' },
  { word: 'Страна', translation: { en: 'Country', ru: 'Страна', ar: 'بلد', zh: '国家' }, pronunciation: 'stra-NA', example: 'Наша страна — Россия.' },
  { word: 'Земля', translation: { en: 'Earth / Land', ru: 'Земля', ar: 'الأرض', zh: '土地 / 大地' }, pronunciation: 'zem-LYA', example: 'Русская земля.' },
  { word: 'Государство', translation: { en: 'State', ru: 'Государство', ar: 'دولة', zh: '国家政权' }, pronunciation: 'go-su-DAR-stvo', example: 'Русское государство.' },
  { word: 'Князь', translation: { en: 'Prince', ru: 'Князь', ar: 'أمير', zh: '公爵' }, pronunciation: 'KNYAZ', example: 'Князь Владимир.' },
  { word: 'Боярин', translation: { en: 'Boyar (noble)', ru: 'Боярин', ar: 'بويار (نبيل)', zh: '波雅尔（贵族）' }, pronunciation: 'bo-YA-rin', example: 'Русские бояре.' },
  { word: 'Летопись', translation: { en: 'Chronicle', ru: 'Летопись', ar: 'سجل تاريخي', zh: '编年史' }, pronunciation: 'LE-to-pis', example: 'Повесть временных лет.' },
];

type Mode = 'flashcard' | 'quiz';

export default function LanguageLabPage() {
  const { addXP, user, setShowAuthModal, setAuthMode } = useApp();
  const { t, localize } = useLanguage();
  const [mode, setMode] = useState<Mode>('flashcard');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [practiceScore, setPracticeScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [xpEarned, setXpEarned] = useState(0);

  const card = VOCABULARY_POOL[currentIdx];

  const getOptions = (idx: number) => {
    const current = VOCABULARY_POOL[idx];
    const others = VOCABULARY_POOL.filter((_, i) => i !== idx);
    const shuffled = [...others].sort(() => Math.random() - 0.5).slice(0, 3);
    return [...shuffled.map(w => localize(w.translation)), localize(current.translation)].sort(() => Math.random() - 0.5);
  };

  const [quizOptions, setQuizOptions] = useState(() => getOptions(0));

  const nextCard = () => {
    const nextIdx = (currentIdx + 1) % VOCABULARY_POOL.length;
    setCurrentIdx(nextIdx);
    setFlipped(false);
    setQuizAnswered(false);
    setSelectedAnswer(null);
    setQuizOptions(getOptions(nextIdx));
  };

  const handleAnswer = (answer: string) => {
    if (quizAnswered) return;
    // XP can only be earned by registered users — prompt guests to sign in.
    if (!user) {
      setAuthMode('register');
      setShowAuthModal(true);
      return;
    }
    setSelectedAnswer(answer);
    setQuizAnswered(true);
    if (answer === localize(card.translation)) {
      setPracticeScore(s => s + 1);
      addXP(5);
      setXpEarned(p => p + 5);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-[#EEF1F7] rounded-full px-3 py-1 mb-4">
            <Languages className="w-3.5 h-3.5 text-[#2F5D9F]" />
            <span className="text-xs font-medium text-[#2F5D9F] font-ui uppercase tracking-wide">{t('ll_badge')}</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-[#2A2A2A] mb-3">{t('ll_title')}</h1>
          <p className="text-[#7A8499] font-ui">{t('ll_subtitle')}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center border border-[#EEF1F7] shadow-sm">
            <div className="font-mono-accent text-xl font-bold text-[#2F5D9F]">{VOCABULARY_POOL.length}</div>
            <div className="text-xs text-[#7A8499] font-ui">{t('ll_total_words')}</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-[#EEF1F7] shadow-sm">
            <div className="font-mono-accent text-xl font-bold text-green-600">{practiceScore}</div>
            <div className="text-xs text-[#7A8499] font-ui">{t('ll_correct')}</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-[#EEF1F7] shadow-sm">
            <div className="font-mono-accent text-xl font-bold text-[#2F5D9F]">+{xpEarned}</div>
            <div className="text-xs text-[#7A8499] font-ui">{t('ll_xp_earned')}</div>
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="flex bg-white rounded-xl p-1 mb-6 border border-[#EEF1F7] shadow-sm">
          {(['flashcard', 'quiz'] as Mode[]).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 py-2 text-sm font-medium font-ui rounded-lg transition-all capitalize ${
                mode === m ? 'bg-[#2F5D9F] text-white shadow-md' : 'text-[#7A8499] hover:text-[#2A2A2A]'
              }`}
            >
              {m === 'flashcard' ? `📇 ${t('ll_flashcards')}` : `❓ ${t('ll_quiz')}`}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#7A8499] font-ui mb-1.5">
            <span>{t('ll_card')} {currentIdx + 1} {t('ll_of')} {VOCABULARY_POOL.length}</span>
          </div>
          <div className="h-1.5 bg-[#EEF1F7] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2F5D9F] rounded-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / VOCABULARY_POOL.length) * 100}%` }}
            />
          </div>
        </div>

        {mode === 'flashcard' ? (
          /* Flashcard Mode */
          <div>
            <div
              className="relative bg-white rounded-2xl border border-[#EEF1F7] shadow-lg p-10 mb-6 cursor-pointer min-h-[260px] flex flex-col items-center justify-center text-center transition-all"
              onClick={() => setFlipped(f => !f)}
              style={{ perspective: '1000px' }}
            >
              {!flipped ? (
                <div>
                  <div className="text-5xl font-display font-bold text-[#2A2A2A] mb-3">{card.word}</div>
                  <div className="font-mono-accent text-sm text-[#9AA3B2]">/{card.pronunciation}/</div>
                  <div className="mt-6 text-sm text-[#7A8499] font-ui italic">"{card.example}"</div>
                  <div className="mt-8 text-xs text-[#9AA3B2] font-ui">{t('ll_click_reveal')}</div>
                </div>
              ) : (
                <div>
                  <div className="text-[#7A8499] text-xs font-ui mb-2 uppercase tracking-wide">{t('ll_translation')}</div>
                  <div className="text-3xl font-display font-bold text-[#2F5D9F] mb-3">{localize(card.translation)}</div>
                  <div className="text-4xl font-display font-bold text-[#2A2A2A] mt-4">{card.word}</div>
                  <div className="font-mono-accent text-sm text-[#9AA3B2] mt-2">/{card.pronunciation}/</div>
                </div>
              )}

              <button
                className="absolute top-4 right-4 text-[#7A8499] hover:text-[#2A2A2A] transition-colors"
                onClick={(e) => { e.stopPropagation(); }}
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => { setCurrentIdx(i => (i - 1 + VOCABULARY_POOL.length) % VOCABULARY_POOL.length); setFlipped(false); }}
                className="flex-1 py-3 bg-[#EEF1F7] text-[#7A8499] rounded-xl font-medium font-ui hover:bg-[#E0E5F0] transition-all"
              >
                ← {t('ll_prev')}
              </button>
              <button
                onClick={nextCard}
                className="flex-1 py-3 bg-[#2F5D9F] text-white rounded-xl font-medium font-ui hover:bg-[#264d8a] transition-all btn-press flex items-center justify-center gap-2"
              >
                {t('ll_next')} → <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Quiz Mode */
          <div>
            <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-lg p-8 mb-6">
              <div className="text-center mb-6">
                <div className="text-xs text-[#7A8499] font-ui mb-2 uppercase tracking-wide">{t('ll_what_means')}</div>
                <div className="text-5xl font-display font-bold text-[#2A2A2A] mb-2">{card.word}</div>
                <div className="font-mono-accent text-sm text-[#9AA3B2]">/{card.pronunciation}/</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {quizOptions.map((opt, i) => {
                  let cls = 'py-3 px-4 rounded-xl text-sm font-medium font-ui transition-all ';
                  if (!quizAnswered) {
                    cls += 'bg-[#F5F7FA] text-[#2A2A2A] hover:bg-[#EEF1F7] border-2 border-[#EEF1F7] cursor-pointer';
                  } else if (opt === localize(card.translation)) {
                    cls += 'bg-green-100 text-green-800 border-2 border-green-400';
                  } else if (opt === selectedAnswer) {
                    cls += 'bg-red-100 text-red-800 border-2 border-red-400';
                  } else {
                    cls += 'bg-[#F5F7FA] text-[#9AA3B2] border-2 border-[#EEF1F7] opacity-60';
                  }
                  return (
                    <button key={i} className={cls} onClick={() => handleAnswer(opt)} disabled={quizAnswered}>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {quizAnswered && (
                <div className="mt-4 pt-4 border-t border-[#EEF1F7] flex items-center justify-between">
                  <div className={`text-sm font-medium font-ui ${selectedAnswer === localize(card.translation) ? 'text-green-700' : 'text-red-600'}`}>
                    {selectedAnswer === localize(card.translation) ? `✓ ${t('ll_correct_xp')}` : `✗ ${t('ll_answer_was')} ${localize(card.translation)}`}
                  </div>
                  <button
                    onClick={nextCard}
                    className="flex items-center gap-2 px-4 py-2 bg-[#2F5D9F] text-white rounded-xl text-sm font-medium font-ui hover:bg-[#264d8a] transition-all btn-press"
                  >
                    {t('ll_next')} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
