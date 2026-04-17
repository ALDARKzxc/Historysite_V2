import { useNavigate } from 'react-router-dom';
import { epochs } from '@/data/epochs';
import { Zap, Star } from 'lucide-react';

const DIFF_COLORS = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

const FEATURED = [
  { epochId: 'great-patriotic-war', topicId: 'battle-stalingrad' },
  { epochId: 'cold-war', topicId: 'gagarin' },
  { epochId: 'ancient-rus', topicId: 'baptism-rus' },
  { epochId: 'peter-the-great', topicId: 'saint-petersburg' },
  { epochId: 'late-empire', topicId: 'october-revolution' },
  { epochId: 'perestroika', topicId: 'chernobyl' },
];

export default function FeaturedTopics() {
  const navigate = useNavigate();

  const featuredTopics = FEATURED.map(f => {
    const epoch = epochs.find(e => e.id === f.epochId);
    const topic = epoch?.topics.find(t => t.id === f.topicId);
    return topic ? { ...topic, epochColor: epoch?.color, epochTitle: epoch?.title } : null;
  }).filter(Boolean) as any[];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EEF1F7] rounded-full px-3 py-1 mb-3">
              <Star className="w-3.5 h-3.5 text-yellow-500" />
              <span className="text-xs font-medium text-[#2F5D9F] font-ui tracking-wide uppercase">Featured</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-[#2A2A2A]">Popular Topics</h2>
            <p className="text-[#7A8499] font-ui mt-2">Dive into the most compelling moments in Russian history</p>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTopics.map((topic, i) => (
            <div
              key={topic.id}
              onClick={() => navigate(`/article/${topic.id}`)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#EEF1F7] shadow-sm card-hover animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${topic.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Epoch badge */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-white text-[10px] font-medium font-ui"
                  style={{ backgroundColor: topic.epochColor + 'CC' }}
                >
                  {topic.epochTitle}
                </div>

                {/* XP badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-lg px-2 py-1">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span className="font-mono-accent text-xs font-bold text-white">+{topic.xp} XP</span>
                </div>

                {/* Difficulty */}
                <div className="absolute bottom-3 left-3">
                  <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full font-ui ${DIFF_COLORS[topic.difficulty as keyof typeof DIFF_COLORS]}`}>
                    {topic.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-[#2A2A2A] mb-1 leading-tight line-clamp-2">
                  {topic.title}
                </h3>
                <p className="text-[#9AA3B2] text-xs font-ui italic mb-2">{topic.titleRu}</p>
                <p className="text-[#7A8499] text-sm font-ui line-clamp-2 leading-relaxed">
                  {topic.teaser}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
