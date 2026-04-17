import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Languages, Zap, BookOpen, CheckCircle, Volume2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { epochs } from '@/data/epochs';
import { getArticleData } from '@/data/articles';
import QuizModule from '@/components/QuizModule';

export default function ArticlePage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { language, bilingualMode, setBilingualMode, addXP, completeTopics, user } = useApp();
  const [articleRead, setArticleRead] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(false);

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
  const isCompleted = user?.completedTopics.includes(topicId || '');

  useEffect(() => {
    if (!articleRead) return;
    if (!xpAwarded) {
      addXP(10);
      setXpAwarded(true);
      if (topicId) completeTopics(topicId);
    }
  }, [articleRead]);

  if (!topic || !article) {
    return (
      <main className="min-h-screen bg-[#F5F7FA] pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#7A8499] font-ui text-lg">Article not found</p>
          <button onClick={() => navigate('/epochs')} className="mt-4 text-[#2F5D9F] font-ui hover:underline">
            Back to Epochs
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-16">
      {/* Hero Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F7FA] via-black/20 to-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 relative -mt-12">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            {/* Card Header */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#EEF1F7] p-6 md:p-8 mb-6">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-[#7A8499] font-ui mb-4 flex-wrap">
                <button onClick={() => navigate('/')} className="hover:text-[#2F5D9F] transition-colors">Home</button>
                <span>/</span>
                <button onClick={() => navigate('/epochs')} className="hover:text-[#2F5D9F] transition-colors">Epochs</button>
                <span>/</span>
                <button onClick={() => navigate(`/epochs/${epoch.id}`)} className="hover:text-[#2F5D9F] transition-colors">{epoch.title}</button>
                <span>/</span>
                <span className="text-[#2A2A2A]">{article.title}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl md:text-4xl font-black text-[#2A2A2A] leading-tight mb-2">
                {article.title}
              </h1>
              <p className="text-russian text-base mb-4">{article.titleRu}</p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium font-ui text-white"
                  style={{ backgroundColor: epoch.color }}
                >
                  <BookOpen className="w-3 h-3" />
                  {epoch.title}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EEF1F7] rounded-full text-xs font-medium text-[#2F5D9F] font-ui">
                  <Zap className="w-3 h-3" />
                  +10 XP on completion
                </span>
                {isCompleted && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 rounded-full text-xs font-medium text-green-700 font-ui">
                    <CheckCircle className="w-3 h-3" />
                    Completed
                  </span>
                )}
              </div>

              {/* Bilingual Toggle */}
              {language !== 'RU' && (
                <button
                  onClick={() => setBilingualMode(!bilingualMode)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium font-ui transition-all btn-press ${
                    bilingualMode
                      ? 'bg-[#2F5D9F] text-white shadow-md'
                      : 'bg-[#EEF1F7] text-[#7A8499] hover:text-[#2A2A2A]'
                  }`}
                >
                  <Languages className="w-4 h-4" />
                  Bilingual Mode {bilingualMode ? 'ON' : 'OFF'}
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
                  <div className="text-xs font-medium text-[#2F5D9F] font-ui mb-1 uppercase tracking-wide">AI Summary</div>
                  <p className="text-sm text-[#2A2A2A] font-ui leading-relaxed">{article.summary}</p>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#EEF1F7] p-6 md:p-8 mb-6">
              {/* Lead Paragraph */}
              <p className="text-lg font-ui text-[#2A2A2A] leading-relaxed mb-6 font-medium border-l-4 border-[#2F5D9F] pl-4">
                {article.leadParagraph}
              </p>

              {/* Sections */}
              {article.sections.map((section, i) => (
                <div key={i} className="mb-8">
                  <h2 className="font-display text-xl md:text-2xl font-bold text-[#2A2A2A] mb-4">
                    {section.heading}
                  </h2>
                  <div className={bilingualMode && language !== 'RU' ? 'space-y-3' : ''}>
                    <p className="text-[#2A2A2A] font-ui leading-relaxed text-base">
                      {section.content}
                    </p>
                    {bilingualMode && language !== 'RU' && section.contentRu && (
                      <p className="text-russian pl-4 border-l-2 border-[#EEF1F7]">
                        {section.contentRu}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Article Complete Button */}
              {!articleRead && !isCompleted && (
                <div className="mt-8 pt-6 border-t border-[#EEF1F7]">
                  <button
                    onClick={() => setArticleRead(true)}
                    className="w-full py-3.5 bg-[#2F5D9F] text-white rounded-xl font-medium font-ui hover:bg-[#264d8a] transition-all btn-press shadow-lg shadow-[#2F5D9F]/20 flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Mark as Read (+10 XP)
                  </button>
                </div>
              )}

              {(articleRead || isCompleted) && !showQuiz && (
                <div className="mt-8 pt-6 border-t border-[#EEF1F7]">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-green-800 font-ui">Article completed!</div>
                      <div className="text-xs text-green-600 font-ui">+10 XP earned</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowQuiz(true)}
                    className="w-full py-3.5 bg-[#C94B4B] text-white rounded-xl font-medium font-ui hover:bg-[#b03d3d] transition-all btn-press shadow-lg shadow-[#C94B4B]/20 flex items-center justify-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    Test Your Knowledge (+25 XP)
                  </button>
                </div>
              )}
            </div>

            {/* Quiz Module */}
            {showQuiz && (
              <QuizModule topicId={topicId!} articleTitle={article.title} onComplete={() => setShowQuiz(false)} />
            )}

            {/* Related Topics */}
            <RelatedTopics topicIds={article.relatedTopics} />
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-24 self-start space-y-5">
            {/* Key Dates */}
            <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-5">
              <h3 className="font-display text-base font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C94B4B] rounded-full" />
                Key Dates
              </h3>
              <div className="space-y-3">
                {article.keyDates.map((date, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="font-mono-accent text-xs font-bold text-[#2F5D9F] w-20 flex-shrink-0 pt-0.5">{date.year}</div>
                    <div className="text-sm text-[#7A8499] font-ui leading-snug">{date.event}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vocabulary Box */}
            <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-5">
              <h3 className="font-display text-base font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#4A7C59] rounded-full" />
                Russian Vocabulary
              </h3>
              <div className="space-y-3">
                {article.vocabulary.map((word, i) => (
                  <div key={i} className="bg-[#F5F7FA] rounded-xl p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display text-base font-bold text-[#2A2A2A]">{word.word}</span>
                      <button className="text-[#7A8499] hover:text-[#2F5D9F] transition-colors">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-xs text-[#7A8499] font-ui">{word.translation}</div>
                    <div className="text-xs font-mono-accent text-[#9AA3B2] mt-0.5">/{word.pronunciation}/</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-5">
              <h3 className="font-display text-base font-bold text-[#2A2A2A] mb-3">Your Progress</h3>
              <div className="text-sm text-[#7A8499] font-ui mb-2">
                {epoch.title}
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
                {user?.completedTopics.filter((t: string) => epoch.topics.some((ep: any) => ep.id === t)).length || 0} / {epoch.topicCount} topics
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
  const allTopics: any[] = [];
  epochs.forEach(ep => ep.topics.forEach(t => allTopics.push({ ...t, epochColor: ep.color })));
  const related = topicIds.map(id => allTopics.find(t => t.id === id)).filter(Boolean);

  if (related.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-6 mb-8">
      <h3 className="font-display text-xl font-bold text-[#2A2A2A] mb-4">Related Topics</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map(topic => (
          <div
            key={topic.id}
            onClick={() => navigate(`/article/${topic.id}`)}
            className="rounded-xl overflow-hidden cursor-pointer card-hover border border-[#EEF1F7] group"
          >
            <div className="relative h-24 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${topic.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold text-[#2A2A2A] font-ui line-clamp-2">{topic.title}</p>
              <p className="text-xs text-[#7A8499] font-ui italic mt-0.5">{topic.titleRu}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
