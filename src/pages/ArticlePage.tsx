import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Languages, Zap, BookOpen, CheckCircle, Lock } from 'lucide-react';
import { useApp, MAX_QUIZ_ATTEMPTS } from '@/context/AppContext';
import { useLanguage } from '@/LanguageContext';
import { epochs } from '@/data/epochs';
import { getArticleData } from '@/data/articles';
import { getTopicDetail } from '@/data/topicDetails';
import QuizModule from '@/components/QuizModule';
import ImageFill from '@/components/ImageFill';
import TopicGlossary from '@/components/TopicGlossary';
import ArticleReader from '@/components/ArticleReader';

// XP granted once, only after passing the quiz 3/3: reading + test.
const READING_XP = 10;
const TEST_XP = 25;
const TOPIC_REWARD = READING_XP + TEST_XP;

export default function ArticlePage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { passQuiz, failQuiz, user, bilingualMode, setBilingualMode, setShowAuthModal, setAuthMode } = useApp();
  const { t, localize, showRussianSubtitles } = useLanguage();
  const [showQuiz, setShowQuiz] = useState(false);

  // Earning points requires an account; guests are prompted to sign in / register.
  const startTest = () => {
    if (!user) {
      setAuthMode('register');
      setShowAuthModal(true);
      return;
    }
    setShowQuiz(true);
  };

  // Find topic
  let topic: any = null;
  let epoch: any = null;
  for (const ep of epochs) {
    const found = ep.topics.find(t => t.id === topicId);
    if (found) {
      topic = found;
      epoch = ep;
      break;
    }
  }

  const article = topic ? getArticleData(topicId!, topic) : null;
  const detail = getTopicDetail(topicId);
  const keyDates = detail?.keyDates ?? article?.keyDates ?? [];
  const isCompleted = !!(topicId && user?.completedTopics.includes(topicId));
  const attemptsUsed = (topicId && user?.quizAttempts?.[topicId]) || 0;
  const attemptsLeft = Math.max(0, MAX_QUIZ_ATTEMPTS - attemptsUsed);
  const canTakeTest = !isCompleted && attemptsLeft > 0;

  if (!topic || !article) {
    return (
      <main className="min-h-screen bg-[#F5F7FA] pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#7A8499] font-ui text-lg">{t('article_not_found')}</p>
          <button onClick={() => navigate('/epochs')} className="mt-4 text-[#2F5D9F] font-ui hover:underline">
            {t('back_to_epochs')}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-16">
      {/* Hero — clean banner in the epoch colour (full title lives in the card below) */}
      <div
        className="relative h-44 md:h-56 overflow-hidden"
        style={{ backgroundColor: epoch.color }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 82% 18%, rgba(255,255,255,0.18) 0%, transparent 50%), linear-gradient(180deg, rgba(0,0,0,0.25) 0%, #F5F7FA 100%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 relative -mt-12">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            {/* Card Header */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#EEF1F7] p-6 md:p-8 mb-6">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-[#7A8499] font-ui mb-4 flex-wrap">
                <button onClick={() => navigate('/')} className="hover:text-[#2F5D9F] transition-colors">{t('breadcrumb_home')}</button>
                <span>/</span>
                <button onClick={() => navigate('/epochs')} className="hover:text-[#2F5D9F] transition-colors">{t('breadcrumb_epochs')}</button>
                <span>/</span>
                <button onClick={() => navigate(`/epochs/${epoch.id}`)} className="hover:text-[#2F5D9F] transition-colors">{localize(epoch.title)}</button>
                <span>/</span>
                <span className="text-[#2A2A2A]">{localize(article.title)}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl md:text-4xl font-black text-[#2A2A2A] leading-tight mb-2">
                {localize(article.title)}
              </h1>
              {showRussianSubtitles && (
                <p className="text-russian text-base mb-4">{article.title.ru}</p>
              )}

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium font-ui text-white"
                  style={{ backgroundColor: epoch.color }}
                >
                  <BookOpen className="w-3 h-3" />
                  {localize(epoch.title)}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EEF1F7] rounded-full text-xs font-medium text-[#2F5D9F] font-ui">
                  <Zap className="w-3 h-3" />
                  {t('xp_on_completion')}
                </span>
                {isCompleted && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 rounded-full text-xs font-medium text-green-700 font-ui">
                    <CheckCircle className="w-3 h-3" />
                    {t('ui_completed')}
                  </span>
                )}
              </div>

              {/* Bilingual Toggle */}
              {showRussianSubtitles && (
                <button
                  onClick={() => setBilingualMode(!bilingualMode)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium font-ui transition-all btn-press ${
                    bilingualMode
                      ? 'bg-[#2F5D9F] text-white shadow-md'
                      : 'bg-[#EEF1F7] text-[#7A8499] hover:text-[#2A2A2A]'
                  }`}
                >
                  <Languages className="w-4 h-4" />
                  {t('bilingual_mode')} {bilingualMode ? t('toggle_on') : t('toggle_off')}
                </button>
              )}
            </div>

            {/* AI Summary */}
            <div className="bg-gradient-to-r from-[#2F5D9F]/10 to-[#2F5D9F]/5 border border-[#2F5D9F]/20 rounded-2xl p-5 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#2F5D9F] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                <div>
                  <div className="text-xs font-medium text-[#2F5D9F] font-ui mb-1 uppercase tracking-wide">{t('ai_summary')}</div>
                  <p className="text-sm text-[#2A2A2A] font-ui leading-relaxed">{localize(article.summary)}</p>
                </div>
              </div>
            </div>

            {/* Paged article reader */}
            <ArticleReader
              leadParagraph={article.leadParagraph}
              sections={article.sections}
              bilingualMode={bilingualMode}
              accentColor={epoch.color}
            />

            {/* Quiz / completion panel */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#EEF1F7] p-6 md:p-8 mb-6">
              {/* Completed state — earned once */}
              {isCompleted && !showQuiz && (
                <div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-green-800 font-ui">{t('article_completed')}</div>
                      <div className="text-xs text-green-600 font-ui">+{TOPIC_REWARD} XP</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Take the test — XP only on a perfect 3/3 result */}
              {!isCompleted && !showQuiz && canTakeTest && (
                <div>
                  <p className="text-sm text-[#7A8499] font-ui mb-3 text-center">{t('quiz_pass_hint')}</p>
                  <button
                    onClick={startTest}
                    className="w-full py-3.5 bg-[#C94B4B] text-white rounded-xl font-medium font-ui hover:bg-[#b03d3d] transition-all btn-press shadow-lg shadow-[#C94B4B]/20 flex items-center justify-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    {t('quiz_take_test')} (+{TOPIC_REWARD} XP)
                  </button>
                  {user ? (
                    <p className="text-xs text-[#9AA3B2] font-ui mt-2 text-center">
                      {t('quiz_attempt')} {attemptsUsed + 1}/{MAX_QUIZ_ATTEMPTS}
                    </p>
                  ) : (
                    <p className="text-xs text-[#9AA3B2] font-ui mt-2 text-center">{t('quiz_signin_hint')}</p>
                  )}
                </div>
              )}

              {/* Locked — all attempts used without passing */}
              {!isCompleted && !showQuiz && !canTakeTest && (
                <div>
                  <div className="bg-[#F5F7FA] border border-[#EEF1F7] rounded-xl p-4 flex items-center gap-3">
                    <Lock className="w-5 h-5 text-[#7A8499] flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-[#2A2A2A] font-ui">{t('quiz_no_attempts_title')}</div>
                      <div className="text-xs text-[#7A8499] font-ui">{t('quiz_no_attempts_msg')}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quiz Module */}
            {showQuiz && (
              <QuizModule
                topicId={topicId!}
                articleTitle={localize(article.title)}
                attemptsUsed={attemptsUsed}
                maxAttempts={MAX_QUIZ_ATTEMPTS}
                rewardXP={TOPIC_REWARD}
                onPass={() => passQuiz(topicId!, TOPIC_REWARD)}
                onFail={() => failQuiz(topicId!)}
                onClose={() => setShowQuiz(false)}
              />
            )}

            {/* Related Topics */}
            <RelatedTopics topicIds={article.relatedTopics} />
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-24 self-start space-y-5">
            {/* Key Dates */}
            {keyDates.length > 0 && (
              <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-5">
                <h3 className="font-display text-base font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C94B4B] rounded-full" />
                  {t('article_key_dates')}
                </h3>
                <div className="space-y-3">
                  {keyDates.map((date, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="font-mono-accent text-xs font-bold text-[#2F5D9F] w-16 flex-shrink-0 pt-0.5">{date.year}</div>
                      <div className="text-sm text-[#7A8499] font-ui leading-snug">{localize(date.event)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interactive glossary — "Words of the Era" */}
            <TopicGlossary topicId={topicId} color={epoch.color} />

            {/* Progress */}
            <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-5">
              <h3 className="font-display text-base font-bold text-[#2A2A2A] mb-3">{t('your_progress')}</h3>
              <div className="text-sm text-[#7A8499] font-ui mb-2">
                {localize(epoch.title)}
              </div>
              <div className="h-2 bg-[#EEF1F7] rounded-full overflow-hidden mb-2">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${((user?.completedTopics.filter((t: string) => epoch.topics.some((ep: any) => ep.id === t)).length || 0) / epoch.topicCount) * 100}%`,
                    backgroundColor: epoch.color,
                  }}
                />
              </div>
              <div className="text-xs text-[#7A8499] font-ui">
                {user?.completedTopics.filter((tp: string) => epoch.topics.some((ep: any) => ep.id === tp)).length || 0} / {epoch.topicCount} {t('ui_topics')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function RelatedTopics({ topicIds }: { topicIds: string[] }) {
  const navigate = useNavigate();
  const { t, localize, showRussianSubtitles } = useLanguage();
  const allTopics: any[] = [];
  epochs.forEach(ep => ep.topics.forEach(tp => allTopics.push({ ...tp, epochColor: ep.color })));
  const related = topicIds.map(id => allTopics.find(tp => tp.id === id)).filter(Boolean);

  if (related.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-6 mb-8">
      <h3 className="font-display text-xl font-bold text-[#2A2A2A] mb-4">{t('article_related')}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map(topic => (
          <div
            key={topic.id}
            onClick={() => navigate(`/article/${topic.id}`)}
            className="rounded-xl overflow-hidden cursor-pointer card-hover border border-[#EEF1F7] group"
          >
            <div className="relative h-24 overflow-hidden">
              <ImageFill
                src={topic.image}
                imgClassName="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold text-[#2A2A2A] font-ui line-clamp-2">{localize(topic.title)}</p>
              {showRussianSubtitles && (
                <p className="text-xs text-[#7A8499] font-ui italic mt-0.5">{topic.title.ru}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
