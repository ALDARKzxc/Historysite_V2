import { useState } from 'react';
import { CheckCircle, XCircle, ChevronRight, Zap } from 'lucide-react';
import { useApp } from '@/context/AppContext';

interface Question {
  id: string;
  question: string;
  options: string[];
  correct: number;
}

const QUIZ_QUESTIONS: Record<string, Question[]> = {
  'default': [
    {
      id: 'q1',
      question: 'In what year was the Baptism of Rus?',
      options: ['882', '988', '1054', '1240'],
      correct: 1,
    },
    {
      id: 'q2',
      question: 'Which prince ordered the mass baptism of Kiev?',
      options: ['Rurik', 'Oleg the Prophetic', 'Vladimir the Great', 'Yaroslav the Wise'],
      correct: 2,
    },
    {
      id: 'q3',
      question: 'What religion did Kievan Rus adopt in 988?',
      options: ['Roman Catholicism', 'Islam', 'Orthodox Christianity', 'Judaism'],
      correct: 2,
    },
  ],
  'battle-stalingrad': [
    {
      id: 'q1',
      question: 'What was the name of the Soviet operation that encircled the German 6th Army?',
      options: ['Operation Bagration', 'Operation Uranus', 'Operation Citadel', 'Operation Mars'],
      correct: 1,
    },
    {
      id: 'q2',
      question: 'When did Field Marshal Paulus surrender at Stalingrad?',
      options: ['November 19, 1942', 'January 10, 1943', 'February 2, 1943', 'March 5, 1943'],
      correct: 2,
    },
    {
      id: 'q3',
      question: 'How many men were in the encircled German 6th Army?',
      options: ['130,000', '200,000', '330,000', '500,000'],
      correct: 2,
    },
  ],
  'gagarin': [
    {
      id: 'q1',
      question: 'What was Yuri Gagarin\'s famous word at launch?',
      options: ['Поехали! (Let\'s go!)', 'Вперёд! (Forward!)', 'Готов! (Ready!)', 'Старт! (Start!)'],
      correct: 0,
    },
    {
      id: 'q2',
      question: 'How long was Gagarin\'s space flight?',
      options: ['48 minutes', '72 minutes', '108 minutes', '180 minutes'],
      correct: 2,
    },
    {
      id: 'q3',
      question: 'From which cosmodrome did Vostok 1 launch?',
      options: ['Plesetsk', 'Baikonur', 'Kapustin Yar', 'Vostochny'],
      correct: 1,
    },
  ],
};

function getQuestions(topicId: string): Question[] {
  return QUIZ_QUESTIONS[topicId] || QUIZ_QUESTIONS['default'];
}

interface Props {
  topicId: string;
  articleTitle: string;
  onComplete: () => void;
}

export default function QuizModule({ topicId, articleTitle, onComplete }: Props) {
  const { addXP } = useApp();
  const questions = getQuestions(topicId);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [shakeIdx, setShakeIdx] = useState<number | null>(null);

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

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      const perfect = score + (isCorrect ? 1 : 0) === questions.length;
      addXP(perfect ? 40 : 25);
      setDone(true);
    }
  };

  const finalScore = score + (answered && isCorrect ? 1 : 0);

  if (done) {
    const perfect = finalScore === questions.length;
    return (
      <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-lg p-8 mb-6 text-center">
        <div className="text-5xl mb-4">{perfect ? '🏆' : '✨'}</div>
        <h3 className="font-display text-2xl font-bold text-[#2A2A2A] mb-2">
          {perfect ? 'Perfect Score!' : 'Quiz Complete!'}
        </h3>
        <p className="text-[#7A8499] font-ui mb-6">
          {finalScore}/{questions.length} correct answers
        </p>
        <div className="inline-flex items-center gap-2 bg-[#EEF1F7] rounded-xl px-5 py-3 mb-6">
          <Zap className="w-5 h-5 text-[#2F5D9F]" />
          <span className="font-mono-accent font-bold text-[#2F5D9F] text-lg">+{perfect ? 40 : 25} XP</span>
        </div>
        <div>
          <button
            onClick={onComplete}
            className="px-6 py-3 bg-[#2F5D9F] text-white rounded-xl font-medium font-ui hover:bg-[#264d8a] transition-all btn-press"
          >
            Continue Learning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-lg p-6 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-xs text-[#7A8499] font-ui uppercase tracking-wide mb-1">Quiz Time</div>
          <h3 className="font-display text-lg font-bold text-[#2A2A2A]">{articleTitle}</h3>
        </div>
        <div className="text-right">
          <div className="font-mono-accent text-sm font-bold text-[#2F5D9F]">{current + 1}/{questions.length}</div>
          <div className="text-xs text-[#7A8499] font-ui">questions</div>
        </div>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-[#EEF1F7] rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-[#2F5D9F] rounded-full transition-all duration-300"
          style={{ width: `${((current) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-6">
        <p className="text-lg font-display font-bold text-[#2A2A2A] leading-snug">{q.question}</p>
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
                <span>{opt}</span>
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
              <><CheckCircle className="w-4 h-4" /> Correct! Well done.</>
            ) : (
              <><XCircle className="w-4 h-4" /> The correct answer was: {q.options[q.correct]}</>
            )}
          </div>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#2F5D9F] text-white rounded-xl text-sm font-medium font-ui hover:bg-[#264d8a] transition-all btn-press"
          >
            {current < questions.length - 1 ? 'Next' : 'Finish'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
