import { useParams, useNavigate } from 'react-router-dom';
import { epochs } from '@/data/epochs';
import { ChevronLeft, Star, Zap, CheckCircle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useLanguage } from '@/LanguageContext';

const DIFF_COLOR = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

const DIFF_KEYS = {
  Beginner: 'difficulty_beginner',
  Intermediate: 'difficulty_intermediate',
  Advanced: 'difficulty_advanced',
} as const;

export default function EpochDetailPage() {
  const { epochId } = useParams();
  const navigate = useNavigate();
  const { user } = useApp();
  const { t, localize, showRussianSubtitles } = useLanguage();

  const epoch = epochs.find(e => e.id === epochId);
  if (!epoch) return <div className="pt-20 text-center text-[#7A8499] font-ui">{t('epoch_not_found')}</div>;

  const completedCount = user?.completedTopics.filter(t => epoch.topics.some(ep => ep.id === t)).length || 0;

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-20">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${epoch.coverImage})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, ${epoch.color}44 0%, ${epoch.color}F0 100%)` }}
        />
        <div className="relative h-full flex flex-col justify-end px-4 sm:px-8 pb-8 max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/epochs')}
            className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-ui mb-4 transition-colors w-fit"
          >
            <ChevronLeft className="w-4 h-4" />
            {t('all_epochs')}
          </button>
          <div className="flex items-end gap-4">
            <div>
              <span className="font-mono-accent text-white/60 text-sm">{epoch.period}</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white">{localize(epoch.title)}</h1>
              {showRussianSubtitles && (
                <p className="text-white/60 font-ui italic mt-1">{epoch.title.ru}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Row */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm border border-[#EEF1F7]">
            <div className="w-8 h-8 bg-[#EEF1F7] rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-[#2F5D9F]" />
            </div>
            <div>
              <div className="font-mono-accent text-sm font-bold text-[#2A2A2A]">{epoch.topicCount}</div>
              <div className="text-[10px] text-[#7A8499] font-ui">{t('total_topics')}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm border border-[#EEF1F7]">
            <div className="w-8 h-8 bg-[#EEF1F7] rounded-lg flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <div className="font-mono-accent text-sm font-bold text-[#2A2A2A]">{completedCount}</div>
              <div className="text-[10px] text-[#7A8499] font-ui">{t('ui_completed')}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm border border-[#EEF1F7]">
            <div className="w-8 h-8 bg-[#EEF1F7] rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-yellow-500" />
            </div>
            <div>
              <div className="font-mono-accent text-sm font-bold text-[#2A2A2A]">+{epoch.topics.length * 10 + 100}</div>
              <div className="text-[10px] text-[#7A8499] font-ui">{t('max_xp')}</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-6 mb-8 border border-[#EEF1F7] shadow-sm">
          <h2 className="font-display text-xl font-bold text-[#2A2A2A] mb-2">{t('about_epoch')}</h2>
          <p className="text-[#7A8499] font-ui">{localize(epoch.description)}</p>
        </div>

        {/* Topics Grid */}
        <h2 className="font-display text-2xl font-bold text-[#2A2A2A] mb-6">
          {t('topics_label')} ({epoch.topics.length} {t('available')})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {epoch.topics.map((topic, i) => {
            const isCompleted = user?.completedTopics.includes(topic.id);
            return (
              <div
                key={topic.id}
                onClick={() => navigate(`/article/${topic.id}`)}
                className="bg-white rounded-2xl overflow-hidden cursor-pointer card-hover border border-[#EEF1F7] shadow-sm group relative"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {isCompleted && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}

                <div className="relative h-40 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${topic.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full font-ui ${DIFF_COLOR[topic.difficulty]}`}>
                      {t(DIFF_KEYS[topic.difficulty])}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-[#2A2A2A] mb-0.5 line-clamp-2 leading-snug">
                    {localize(topic.title)}
                  </h3>
                  {showRussianSubtitles && (
                    <p className="text-[#9AA3B2] text-xs font-ui italic mb-2">{topic.title.ru}</p>
                  )}
                  <p className="text-[#7A8499] text-sm font-ui line-clamp-2 mb-3">{localize(topic.teaser)}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#2F5D9F]">
                      <Zap className="w-3.5 h-3.5" />
                      <span className="font-mono-accent text-xs font-bold">+{topic.xp} XP</span>
                    </div>
                    <span className="text-[#7A8499] text-xs font-ui opacity-0 group-hover:opacity-100 transition-opacity">
                      {t('read_article')} →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
