import { useState } from 'react';
import { CheckCircle, XCircle, ChevronRight, Zap } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useLanguage, Localized } from '@/LanguageContext';

interface Question {
  id: string;
  question: Localized;
  options: Localized[];
  correct: number;
}

const QUIZ_QUESTIONS: Record<string, Question[]> = {
  default: [
    {
      id: 'q1',
      question: { en: 'In what year was the Baptism of Rus?', ru: 'В каком году произошло Крещение Руси?', ar: 'في أي عام جرى تعميد روس؟', zh: '罗斯受洗发生在哪一年？' },
      options: [
        { en: '882', ru: '882', ar: '882', zh: '882' },
        { en: '988', ru: '988', ar: '988', zh: '988' },
        { en: '1054', ru: '1054', ar: '1054', zh: '1054' },
        { en: '1240', ru: '1240', ar: '1240', zh: '1240' },
      ],
      correct: 1,
    },
    {
      id: 'q2',
      question: { en: 'Which prince ordered the mass baptism of Kiev?', ru: 'Какой князь приказал массовое крещение Киева?', ar: 'أي أمير أمر بالتعميد الجماعي لكييف؟', zh: '哪位王公下令对基辅进行大规模洗礼？' },
      options: [
        { en: 'Rurik', ru: 'Рюрик', ar: 'روريك', zh: '留里克' },
        { en: 'Oleg the Prophetic', ru: 'Олег Вещий', ar: 'أوليغ النبوي', zh: '先知奥列格' },
        { en: 'Vladimir the Great', ru: 'Владимир Великий', ar: 'فلاديمير العظيم', zh: '弗拉基米尔大帝' },
        { en: 'Yaroslav the Wise', ru: 'Ярослав Мудрый', ar: 'ياروسلاف الحكيم', zh: '智者雅罗斯拉夫' },
      ],
      correct: 2,
    },
    {
      id: 'q3',
      question: { en: 'What religion did Kievan Rus adopt in 988?', ru: 'Какую религию приняла Киевская Русь в 988 году?', ar: 'أي دين اعتنقته روس كييف عام 988؟', zh: '基辅罗斯在988年皈依了哪种宗教？' },
      options: [
        { en: 'Roman Catholicism', ru: 'Католицизм', ar: 'الكاثوليكية', zh: '罗马天主教' },
        { en: 'Islam', ru: 'Ислам', ar: 'الإسلام', zh: '伊斯兰教' },
        { en: 'Orthodox Christianity', ru: 'Православие', ar: 'الأرثوذكسية', zh: '东正教' },
        { en: 'Judaism', ru: 'Иудаизм', ar: 'اليهودية', zh: '犹太教' },
      ],
      correct: 2,
    },
  ],
  'battle-stalingrad': [
    {
      id: 'q1',
      question: { en: 'What was the name of the Soviet operation that encircled the German 6th Army?', ru: 'Как называлась советская операция, окружившая 6-ю немецкую армию?', ar: 'ما اسم العملية السوفيتية التي طوّقت الجيش الألماني السادس؟', zh: '包围德国第六集团军的苏联行动叫什么名字？' },
      options: [
        { en: 'Operation Bagration', ru: 'Операция «Багратион»', ar: 'عملية باغراتيون', zh: '巴格拉季昂行动' },
        { en: 'Operation Uranus', ru: 'Операция «Уран»', ar: 'عملية أورانوس', zh: '天王星行动' },
        { en: 'Operation Citadel', ru: 'Операция «Цитадель»', ar: 'عملية القلعة', zh: '堡垒行动' },
        { en: 'Operation Mars', ru: 'Операция «Марс»', ar: 'عملية المريخ', zh: '火星行动' },
      ],
      correct: 1,
    },
    {
      id: 'q2',
      question: { en: 'When did Field Marshal Paulus surrender at Stalingrad?', ru: 'Когда фельдмаршал Паулюс капитулировал под Сталинградом?', ar: 'متى استسلم المشير باولوس في ستالينغراد؟', zh: '保卢斯元帅何时在斯大林格勒投降？' },
      options: [
        { en: 'November 19, 1942', ru: '19 ноября 1942', ar: '19 نوفمبر 1942', zh: '1942年11月19日' },
        { en: 'January 10, 1943', ru: '10 января 1943', ar: '10 يناير 1943', zh: '1943年1月10日' },
        { en: 'February 2, 1943', ru: '2 февраля 1943', ar: '2 فبراير 1943', zh: '1943年2月2日' },
        { en: 'March 5, 1943', ru: '5 марта 1943', ar: '5 مارس 1943', zh: '1943年3月5日' },
      ],
      correct: 2,
    },
    {
      id: 'q3',
      question: { en: 'How many men were in the encircled German 6th Army?', ru: 'Сколько человек было в окружённой 6-й немецкой армии?', ar: 'كم عدد الرجال في الجيش الألماني السادس المحاصر؟', zh: '被围困的德国第六集团军有多少人？' },
      options: [
        { en: '130,000', ru: '130 000', ar: '130,000', zh: '13万' },
        { en: '200,000', ru: '200 000', ar: '200,000', zh: '20万' },
        { en: '330,000', ru: '330 000', ar: '330,000', zh: '33万' },
        { en: '500,000', ru: '500 000', ar: '500,000', zh: '50万' },
      ],
      correct: 2,
    },
  ],
  gagarin: [
    {
      id: 'q1',
      question: { en: "What was Yuri Gagarin's famous word at launch?", ru: 'Какое знаменитое слово сказал Юрий Гагарин на старте?', ar: 'ما الكلمة الشهيرة التي قالها يوري غاغارين عند الإطلاق؟', zh: '尤里·加加林在发射时说的名言是什么？' },
      options: [
        { en: "Поехали! (Let's go!)", ru: 'Поехали!', ar: 'بايخالي! (لننطلق!)', zh: 'Поехали！（我们出发！）' },
        { en: 'Вперёд! (Forward!)', ru: 'Вперёд!', ar: 'إلى الأمام!', zh: '前进！' },
        { en: 'Готов! (Ready!)', ru: 'Готов!', ar: 'جاهز!', zh: '准备好了！' },
        { en: 'Старт! (Start!)', ru: 'Старт!', ar: 'انطلاق!', zh: '起飞！' },
      ],
      correct: 0,
    },
    {
      id: 'q2',
      question: { en: "How long was Gagarin's space flight?", ru: 'Сколько длился космический полёт Гагарина?', ar: 'كم استغرقت رحلة غاغارين الفضائية؟', zh: '加加林的太空飞行持续了多久？' },
      options: [
        { en: '48 minutes', ru: '48 минут', ar: '48 دقيقة', zh: '48分钟' },
        { en: '72 minutes', ru: '72 минуты', ar: '72 دقيقة', zh: '72分钟' },
        { en: '108 minutes', ru: '108 минут', ar: '108 دقيقة', zh: '108分钟' },
        { en: '180 minutes', ru: '180 минут', ar: '180 دقيقة', zh: '180分钟' },
      ],
      correct: 2,
    },
    {
      id: 'q3',
      question: { en: 'From which cosmodrome did Vostok 1 launch?', ru: 'С какого космодрома стартовал «Восток-1»?', ar: 'من أي قاعدة فضائية أُطلق فوستوك 1؟', zh: '东方1号从哪个航天发射场发射？' },
      options: [
        { en: 'Plesetsk', ru: 'Плесецк', ar: 'بليسيتسك', zh: '普列谢茨克' },
        { en: 'Baikonur', ru: 'Байконур', ar: 'بايكونور', zh: '拜科努尔' },
        { en: 'Kapustin Yar', ru: 'Капустин Яр', ar: 'كابوستين يار', zh: '卡普斯京亚尔' },
        { en: 'Vostochny', ru: 'Восточный', ar: 'فوستوتشني', zh: '沃斯托奇内' },
      ],
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
  const { t, localize } = useLanguage();
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
          {perfect ? t('quiz_perfect') : t('quiz_complete')}
        </h3>
        <p className="text-[#7A8499] font-ui mb-6">
          {finalScore}/{questions.length} {t('quiz_correct_answers')}
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
            {t('quiz_continue')}
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
          <div className="text-xs text-[#7A8499] font-ui uppercase tracking-wide mb-1">{t('quiz_time')}</div>
          <h3 className="font-display text-lg font-bold text-[#2A2A2A]">{articleTitle}</h3>
        </div>
        <div className="text-right">
          <div className="font-mono-accent text-sm font-bold text-[#2F5D9F]">{current + 1}/{questions.length}</div>
          <div className="text-xs text-[#7A8499] font-ui">{t('quiz_questions')}</div>
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
            {current < questions.length - 1 ? t('quiz_next') : t('quiz_finish')}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
