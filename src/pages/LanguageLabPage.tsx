import { useState } from 'react';
import { Languages, Volume2, ChevronRight, Zap } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const VOCABULARY_POOL = [
  { word: 'История', translation: 'History', pronunciation: 'is-TO-ri-ya', example: 'История России очень богатая.' },
  { word: 'Война', translation: 'War', pronunciation: 'voy-NA', example: 'Отечественная война 1812 года.' },
  { word: 'Мир', translation: 'Peace / World', pronunciation: 'MIR', example: 'Декрет о мире.' },
  { word: 'Царь', translation: 'Tsar / Tsar', pronunciation: 'TSAR', example: 'Иван Грозный был первым царём.' },
  { word: 'Революция', translation: 'Revolution', pronunciation: 're-vo-LYU-tsi-ya', example: 'Октябрьская революция 1917 года.' },
  { word: 'Империя', translation: 'Empire', pronunciation: 'im-PE-ri-ya', example: 'Российская империя.' },
  { word: 'Народ', translation: 'People / Nation', pronunciation: 'na-ROD', example: 'Народ России.' },
  { word: 'Армия', translation: 'Army', pronunciation: 'AR-mi-ya', example: 'Красная армия.' },
  { word: 'Победа', translation: 'Victory', pronunciation: 'po-BE-da', example: 'День Победы — 9 мая.' },
  { word: 'Страна', translation: 'Country', pronunciation: 'stra-NA', example: 'Наша страна — Россия.' },
  { word: 'Земля', translation: 'Earth / Land', pronunciation: 'zem-LYA', example: 'Русская земля.' },
  { word: 'Государство', translation: 'State', pronunciation: 'go-su-DAR-stvo', example: 'Русское государство.' },
  { word: 'Князь', translation: 'Prince', pronunciation: 'KNYAZ', example: 'Князь Владимир.' },
  { word: 'Боярин', translation: 'Boyar (noble)', pronunciation: 'bo-YA-rin', example: 'Русские бояре.' },
  { word: 'Летопись', translation: 'Chronicle', pronunciation: 'LE-to-pis', example: 'Повесть временных лет.' },
];

type Mode = 'flashcard' | 'quiz';

export default function LanguageLabPage() {
  const { addXP } = useApp();
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
    return [...shuffled.map(w => w.translation), current.translation].sort(() => Math.random() - 0.5);
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
    setSelectedAnswer(answer);
    setQuizAnswered(true);
    if (answer === card.translation) {
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
            <span className="text-xs font-medium text-[#2F5D9F] font-ui uppercase tracking-wide">Language Lab</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-[#2A2A2A] mb-3">Russian Language Practice</h1>
          <p className="text-[#7A8499] font-ui">Master Russian vocabulary from historical context</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center border border-[#EEF1F7] shadow-sm">
            <div className="font-mono-accent text-xl font-bold text-[#2F5D9F]">{VOCABULARY_POOL.length}</div>
            <div className="text-xs text-[#7A8499] font-ui">Total Words</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-[#EEF1F7] shadow-sm">
            <div className="font-mono-accent text-xl font-bold text-green-600">{practiceScore}</div>
            <div className="text-xs text-[#7A8499] font-ui">Correct</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-[#EEF1F7] shadow-sm">
            <div className="font-mono-accent text-xl font-bold text-[#2F5D9F]">+{xpEarned}</div>
            <div className="text-xs text-[#7A8499] font-ui">XP Earned</div>
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
              {m === 'flashcard' ? '📇 Flashcards' : '❓ Quiz'}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#7A8499] font-ui mb-1.5">
            <span>Card {currentIdx + 1} of {VOCABULARY_POOL.length}</span>
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
                  <div className="mt-8 text-xs text-[#9AA3B2] font-ui">Click to reveal translation</div>
                </div>
              ) : (
                <div>
                  <div className="text-[#7A8499] text-xs font-ui mb-2 uppercase tracking-wide">Translation</div>
                  <div className="text-3xl font-display font-bold text-[#2F5D9F] mb-3">{card.translation}</div>
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
                ← Previous
              </button>
              <button
                onClick={nextCard}
                className="flex-1 py-3 bg-[#2F5D9F] text-white rounded-xl font-medium font-ui hover:bg-[#264d8a] transition-all btn-press flex items-center justify-center gap-2"
              >
                Next → <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Quiz Mode */
          <div>
            <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-lg p-8 mb-6">
              <div className="text-center mb-6">
                <div className="text-xs text-[#7A8499] font-ui mb-2 uppercase tracking-wide">What does this word mean?</div>
                <div className="text-5xl font-display font-bold text-[#2A2A2A] mb-2">{card.word}</div>
                <div className="font-mono-accent text-sm text-[#9AA3B2]">/{card.pronunciation}/</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {quizOptions.map((opt, i) => {
                  let cls = 'py-3 px-4 rounded-xl text-sm font-medium font-ui transition-all ';
                  if (!quizAnswered) {
                    cls += 'bg-[#F5F7FA] text-[#2A2A2A] hover:bg-[#EEF1F7] border-2 border-[#EEF1F7] cursor-pointer';
                  } else if (opt === card.translation) {
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
                  <div className={`text-sm font-medium font-ui ${selectedAnswer === card.translation ? 'text-green-700' : 'text-red-600'}`}>
                    {selectedAnswer === card.translation ? '✓ Correct! +5 XP' : `✗ The answer was: ${card.translation}`}
                  </div>
                  <button
                    onClick={nextCard}
                    className="flex items-center gap-2 px-4 py-2 bg-[#2F5D9F] text-white rounded-xl text-sm font-medium font-ui hover:bg-[#264d8a] transition-all btn-press"
                  >
                    Next <ChevronRight className="w-4 h-4" />
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
