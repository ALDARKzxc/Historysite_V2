import { useState } from 'react';
import { Trophy, Flame, Zap, Globe } from 'lucide-react';

const LEADERBOARD_DATA = [
  { rank: 1, username: 'ИванГрозный', country: '🇷🇺', level: 'Emperor', levelNum: 5, xp: 2840, streak: 45, avatar: 'И' },
  { rank: 2, username: 'HistoryMaster', country: '🇬🇧', level: 'Tsar', levelNum: 4, xp: 2150, streak: 30, avatar: 'H' },
  { rank: 3, username: 'PeterFan88', country: '🇩🇪', level: 'Tsar', levelNum: 4, xp: 1980, streak: 22, avatar: 'P' },
  { rank: 4, username: 'RussiaNerd', country: '🇺🇸', level: 'Knyaz', levelNum: 3, xp: 1620, streak: 15, avatar: 'R' },
  { rank: 5, username: 'SovietScholar', country: '🇫🇷', level: 'Knyaz', levelNum: 3, xp: 1540, streak: 12, avatar: 'S' },
  { rank: 6, username: 'ВойнаиМир', country: '🇺🇦', level: 'Voivode', levelNum: 2, xp: 1120, streak: 8, avatar: 'В' },
  { rank: 7, username: 'HistoryExplorer', country: '🇺🇸', level: 'Boyar', levelNum: 1, xp: 125, streak: 3, avatar: 'H' },
  { rank: 8, username: 'SilkRoadTraveler', country: '🇨🇳', level: 'Boyar', levelNum: 1, xp: 980, streak: 5, avatar: 'S' },
  { rank: 9, username: 'МудрыйЯрослав', country: '🇧🇾', level: 'Voivode', levelNum: 2, xp: 1050, streak: 11, avatar: 'М' },
  { rank: 10, username: 'SteppeWarrior', country: '🇰🇿', level: 'Boyar', levelNum: 1, xp: 890, streak: 4, avatar: 'S' },
];

const MEDAL_COLORS = ['text-yellow-400', 'text-gray-400', 'text-amber-600'];

export default function LeaderboardPage() {
  const [period, setPeriod] = useState<'weekly' | 'alltime'>('weekly');

  const sorted = [...LEADERBOARD_DATA].sort((a, b) => b.xp - a.xp);

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-2xl shadow-lg mb-4">
            <Trophy className="w-8 h-8 text-yellow-900" />
          </div>
          <h1 className="font-display text-4xl font-bold text-[#2A2A2A] mb-2">Leaderboard</h1>
          <p className="text-[#7A8499] font-ui">Top history learners from around the world</p>
        </div>

        {/* Toggle */}
        <div className="flex bg-white rounded-xl p-1 mb-6 border border-[#EEF1F7] shadow-sm">
          {(['weekly', 'alltime'] as const).map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`flex-1 py-2 text-sm font-medium font-ui rounded-lg transition-all ${
                period === p
                  ? 'bg-[#2F5D9F] text-white shadow-md'
                  : 'text-[#7A8499] hover:text-[#2A2A2A]'
              }`}
            >
              {p === 'weekly' ? 'This Week' : 'All Time'}
            </button>
          ))}
        </div>

        {/* Top 3 Podium */}
        <div className="flex items-end justify-center gap-4 mb-8">
          {[sorted[1], sorted[0], sorted[2]].map((user, i) => {
            const isFirst = i === 1;
            const rankOrder = [2, 1, 3];
            return (
              <div key={user.rank} className={`flex flex-col items-center ${isFirst ? 'order-2' : i === 0 ? 'order-1' : 'order-3'}`}>
                <div className={`relative ${isFirst ? 'w-20 h-20' : 'w-16 h-16'} rounded-full bg-[#2F5D9F] flex items-center justify-center text-white font-bold shadow-lg mb-2 ${isFirst ? 'text-2xl ring-4 ring-yellow-400' : 'text-lg'}`}>
                  {user.avatar}
                  <div className="absolute -top-2 -right-1 text-lg">{rankOrder[i] === 1 ? '🥇' : rankOrder[i] === 2 ? '🥈' : '🥉'}</div>
                </div>
                <div className="text-center">
                  <div className={`font-ui font-semibold text-[#2A2A2A] ${isFirst ? 'text-sm' : 'text-xs'} max-w-[80px] truncate`}>{user.username}</div>
                  <div className="font-mono-accent text-xs font-bold text-[#2F5D9F]">{user.xp} XP</div>
                  <div className="text-xs text-[#7A8499]">{user.country}</div>
                </div>
                <div className={`rounded-t-lg ${isFirst ? 'h-20 w-20 bg-yellow-400' : i === 0 ? 'h-14 w-16 bg-gray-300' : 'h-10 w-16 bg-amber-500'} flex items-center justify-center mt-2`}>
                  <span className="font-mono-accent font-bold text-white text-lg">{rankOrder[i]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full List */}
        <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm overflow-hidden">
          {sorted.map((user, i) => {
            const isCurrentUser = user.username === 'HistoryExplorer';
            return (
              <div
                key={user.rank}
                className={`flex items-center gap-4 px-5 py-4 border-b border-[#F5F7FA] last:border-0 transition-colors ${
                  isCurrentUser ? 'bg-[#EEF1F7]' : 'hover:bg-[#F5F7FA]'
                }`}
              >
                {/* Rank */}
                <div className={`w-8 text-center font-mono-accent font-bold text-sm ${i < 3 ? MEDAL_COLORS[i] : 'text-[#7A8499]'}`}>
                  {i < 3 ? ['🥇', '🥈', '🥉'][i] : `#${i + 1}`}
                </div>

                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full bg-[#2F5D9F] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${isCurrentUser ? 'ring-2 ring-[#2F5D9F]' : ''}`}>
                  {user.avatar}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`font-ui font-semibold text-sm text-[#2A2A2A] truncate ${isCurrentUser ? 'text-[#2F5D9F]' : ''}`}>
                      {user.username}
                    </span>
                    {isCurrentUser && (
                      <span className="text-[10px] bg-[#2F5D9F] text-white rounded-full px-2 py-0.5 font-ui font-medium">You</span>
                    )}
                    <span>{user.country}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-xs text-[#7A8499] font-ui">{user.level}</span>
                    <div className="flex items-center gap-1">
                      <Flame className="w-3 h-3 text-orange-400" />
                      <span className="font-mono-accent text-xs text-[#7A8499]">{user.streak}</span>
                    </div>
                  </div>
                </div>

                {/* XP */}
                <div className="flex items-center gap-1 text-[#2F5D9F]">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="font-mono-accent text-sm font-bold">{user.xp}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
