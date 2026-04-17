import { useNavigate } from 'react-router-dom';
import { epochs } from '@/data/epochs';
import { BookOpen, ArrowRight, Lock } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function EpochsPage() {
  const navigate = useNavigate();
  const { user } = useApp();

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#EEF1F7] rounded-full px-3 py-1 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#2F5D9F]" />
            <span className="text-xs font-medium text-[#2F5D9F] font-ui uppercase tracking-wide">18 Epochs</span>
          </div>
          <h1 className="font-display text-5xl font-bold text-[#2A2A2A] mb-3">Russian History Epochs</h1>
          <p className="text-[#7A8499] font-ui text-lg">
            1,200 years of history organized into 18 thematic epochs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {epochs.map((epoch, i) => {
            const completedCount = user?.completedTopics.filter(t =>
              epoch.topics.some(ep => ep.id === t)
            ).length || 0;
            const progress = (completedCount / epoch.topicCount) * 100;

            return (
              <div
                key={epoch.id}
                onClick={() => navigate(`/epochs/${epoch.id}`)}
                className="bg-white rounded-2xl overflow-hidden cursor-pointer card-hover border border-[#EEF1F7] shadow-sm group"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Cover Image */}
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${epoch.coverImage})` }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(180deg, transparent 40%, ${epoch.color}DD 100%)` }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-mono-accent text-white/80 text-xs">{epoch.period}</span>
                    <h3 className="font-display text-xl font-bold text-white mt-0.5">{epoch.title}</h3>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-mono-accent font-bold rounded-lg px-2.5 py-1">
                    {epoch.topicCount} topics
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  <p className="text-[#7A8499] text-xs font-ui italic mb-3">{epoch.titleRu}</p>
                  <p className="text-[#2A2A2A] text-sm font-ui line-clamp-2 mb-4">{epoch.description}</p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-[#7A8499] font-ui mb-1.5">
                      <span>{completedCount}/{epoch.topicCount} topics</span>
                      <span className="font-medium">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1.5 bg-[#EEF1F7] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${progress}%`, backgroundColor: epoch.color }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {epoch.topics.slice(0, 3).map((t, ti) => (
                        <div
                          key={ti}
                          className={`w-6 h-6 rounded-full border-2 border-white overflow-hidden ${
                            user?.completedTopics.includes(t.id) ? 'ring-2 ring-green-400' : 'opacity-50'
                          }`}
                          style={{ backgroundImage: `url(${t.image})`, backgroundSize: 'cover', marginLeft: ti > 0 ? '-8px' : '0' }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[#2F5D9F] text-sm font-medium font-ui opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </div>
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
