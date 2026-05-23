import { useState } from 'react';
import { CheckCircle, XCircle, ChevronRight, Zap, RotateCcw, Lock } from 'lucide-react';
import { useLanguage } from '@/LanguageContext';
import { getTopicQuiz } from '@/data/quizzes';

interface Props {
  topicId: string;
  articleTitle: string;
  /** Finished attempts recorded for this topic before the current one. */
  attemptsUsed: number;
  maxAttempts: number;
  /** Total XP granted on a perfect (passing) result. */
  rewardXP: number;
  /** Called once when an attempt is finished with a perfect score. */
  onPass: () => void;
  /** Called once when an attempt is finished without a perfect score. */
  onFail: () => void;
  onClose: () => void;
}

export default function QuizModule({
  topicId,
  articleTitle,
  attemptsUsed,
  maxAttempts,
  rewardXP,
  onPass,
  onFail,
  onClose,
}: Props) {
  const { t, localize } = useLanguage();
  const questions = getTopicQuiz(topicId) ?? [];
  const total = questions.length;

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [shakeIdx, setShakeIdx] = useState<number | null>(null);
  /** Result of the just-finished attempt (null while still answering). */
  const [lastPassed, setLastPassed] = useState<boolean | null>(null);
  const [lastScore, setLastScore] = useState(0);

  if (total === 0) return null;

  const q = questions[current];
  const isCorrect = selected === q.correct;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correct) {
      setScore(s => s + 1);
    } else {
      setShakeIdx(idx);
      setTimeout(() => setShakeIdx(null), 600);
    }
  };

  const finishAttempt = () => {
    // score already includes the current (last) answer via handleSelect.
    const finalScore = score;
    const passed = finalScore === total;
    setLastScore(finalScore);
    setLastPassed(passed);
    setDone(true);
    if (passed) onPass();
    else onFail();
  };

  const handleNext = () => {
    if (current < total - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      finishAttempt();
    }
  };

  const retry = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setDone(false);
    setShakeIdx(null);
    setLastPassed(null);
    setLastScore(0);
  };

  // ---------- Result screen ----------
  if (done) {
    // attemptsUsed prop already reflects this finished attempt (parent incremented it).
    const attemptsLeft = Math.max(0, maxAttempts - attemptsUsed);

    if (lastPassed) {
      return (
        <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-lg p-8 mb-6 text-center">
          <div className="text-5xl mb-4">🏆</div>
          <h3 className="font-display text-2xl font-bold text-[#2A2A2A] mb-2">{t('quiz_perfect')}</h3>
          <p className="text-[#7A8499] font-ui mb-6">
            {lastScore}/{total} {t('quiz_correct_answers')}
          </p>
          <div className="inline-flex items-center gap-2 bg-[#EEF1F7] rounded-xl px-5 py-3 mb-6">
            <Zap className="w-5 h-5 text-[#2F5D9F]" />
            <span className="font-mono-accent font-bold text-[#2F5D9F] text-lg">+{rewardXP} XP</span>
          </div>
          <div>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-[#2F5D9F] text-white rounded-xl font-medium font-ui hover:bg-[#264d8a] transition-all btn-press"
            >
              {t('quiz_continue')}
            </button>
          </div>
        </div>
      );
    }

    // Failed attempt
    return (
      <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-lg p-8 mb-6 text-center">
        <div className="text-5xl mb-4">{attemptsLeft > 0 ? '✨' : '🔒'}</div>
        <h3 className="font-display text-2xl font-bold text-[#2A2A2A] mb-2">
          {attemptsLeft > 0 ? t('quiz_almost') : t('quiz_no_attempts_title')}
        </h3>
        <p className="text-[#7A8499] font-ui mb-2">
          {lastScore}/{total} {t('quiz_correct_answers')}
        </p>
        <p className="text-[#7A8499] font-ui text-sm mb-6">
          {attemptsLeft > 0 ? t('quiz_need_perfect') : t('quiz_no_attempts_msg')}
        </p>
        {attemptsLeft > 0 ? (
          <button
            onClick={retry}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C94B4B] text-white rounded-xl font-medium font-ui hover:bg-[#b03d3d] transition-all btn-press"
          >
            <RotateCcw className="w-4 h-4" />
            {t('quiz_try_again')} ({attemptsLeft} {t('quiz_attempts_left')})
          </button>
        ) : (
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7A8499] text-white rounded-xl font-medium font-ui hover:opacity-90 transition-all btn-press"
          >
            <Lock className="w-4 h-4" />
            {t('quiz_close')}
          </button>
        )}
      </div>
    );
  }

  // ---------- Question screen ----------
  return (
    <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-lg p-6 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-[#7A8499] font-ui uppercase tracking-wide mb-1">{t('quiz_time')}</div>
          <h3 className="font-display text-lg font-bold text-[#2A2A2A]">{articleTitle}</h3>
        </div>
        <div className="text-right">
          <div className="font-mono-accent text-sm font-bold text-[#2F5D9F]">{current + 1}/{total}</div>
          <div className="text-xs text-[#7A8499] font-ui">{t('quiz_questions')}</div>
        </div>
      </div>

      {/* Attempt indicator */}
      <div className="text-[11px] text-[#9AA3B2] font-ui mb-4">
        {t('quiz_attempt')} {attemptsUsed + 1}/{maxAttempts}
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-[#EEF1F7] rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-[#2F5D9F] rounded-full transition-all duration-300"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-6">
        <p className="text-lg font-display font-bold text-[#2A2A2A] leading-snug">{localize(q.question)}</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        {q.options.map((opt, idx) => {
          let cls = 'w-full text-left px-4 py-3.5 rounded-xl border-2 font-ui text-sm transition-all ';
          if (!answered) {
            cls += 'border-[#EEF1F7] bg-[#F5F7FA] text-[#2A2A2A] hover:border-[#2F5D9F] hover:bg-[#EEF1F7] cursor-pointer';
          } else if (idx === q.correct) {
            cls += 'border-green-400 bg-green-50 text-green-800 animate-green-pulse';
          } else if (idx === selected && selected !== q.correct) {
            cls += `border-red-300 bg-red-50 text-red-800 ${shakeIdx === idx ? 'animate-shake' : ''}`;
          } else {
            cls += 'border-[#EEF1F7] bg-[#F5F7FA] text-[#7A8499] opacity-60';
          }

          return (
            <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={answered}>
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-mono-accent font-bold
                  ${!answered ? 'border-[#EEF1F7] text-[#7A8499]' :
                    idx === q.correct ? 'border-green-400 bg-green-400 text-white' :
                    idx === selected ? 'border-red-400 bg-red-400 text-white' :
                    'border-[#EEF1F7] text-[#7A8499]'
                  }`}
                >
                  {answered && idx === q.correct ? <CheckCircle className="w-4 h-4" /> :
                   answered && idx === selected && selected !== q.correct ? <XCircle className="w-4 h-4" /> :
                   String.fromCharCode(65 + idx)}
                </div>
                <span>{localize(opt)}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Feedback + Next */}
      {answered && (
        <div className="flex items-center justify-between">
          <div className={`text-sm font-medium font-ui flex items-center gap-2 ${isCorrect ? 'text-green-700' : 'text-red-600'}`}>
            {isCorrect ? (
              <><CheckCircle className="w-4 h-4" /> {t('quiz_correct_fb')}</>
            ) : (
              <><XCircle className="w-4 h-4" /> {t('quiz_wrong_fb')} {localize(q.options[q.correct])}</>
            )}
          </div>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#2F5D9F] text-white rounded-xl text-sm font-medium font-ui hover:bg-[#264d8a] transition-all btn-press"
          >
            {current < total - 1 ? t('quiz_next') : t('quiz_finish')}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
