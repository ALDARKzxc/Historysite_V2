import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swords, Flame, Trophy, Zap, Check, X, RotateCcw } from 'lucide-react';
import { epochs, type LocalizedText } from '@/data/epochs';
import { gameEventsByCentury, gameCenturies, imageForEvent, type GameEvent } from '@/data/gameEvents';
import { useApp } from '@/context/AppContext';
import { useLanguage } from '@/LanguageContext';
import ImageFill from '@/components/ImageFill';
import { spring, EASE } from '@/lib/animations';

interface EventCard {
  year: number;
  title: LocalizedText;
  image: string;
  color: string;
  epochTitle?: LocalizedText;
}

// Resolve image/color/title for a card. Each event has its own Wikipedia
// thumbnail (via imageForEvent → gameImages.json). If for some reason that
// returned null at fetch time, we fall back to the epoch cover image so the
// card is never blank.
function eventToCard(ev: GameEvent): EventCard {
  const ep = epochs.find(e => e.id === ev.epochId);
  return {
    year: ev.year,
    title: ev.title,
    image: imageForEvent(ev) ?? ep?.coverImage ?? '',
    color: ep?.color ?? '#2F5D9F',
    epochTitle: ep?.title,
  };
}

// Order-independent key for a pair: sorted "year-year".
function pairKey(a: GameEvent, b: GameEvent): string {
  const [lo, hi] = a.year < b.year ? [a.year, b.year] : [b.year, a.year];
  return `${lo}-${hi}`;
}

// Pick a fresh pair: both events from the SAME century, never repeating a key
// the player has already seen this session. When we run out, the seen set
// gets cleared and the cycle starts over.
function pickPair(seen: Set<string>): [EventCard, EventCard] {
  // 1) Try centuries in random order until we find one with an unseen pair.
  const shuffled = [...gameCenturies].sort(() => Math.random() - 0.5);
  for (const century of shuffled) {
    const list = gameEventsByCentury.get(century)!;
    // Maximum number of unique pairs in this century:
    // for n events, n*(n-1)/2 distinct unordered pairs.
    const maxPairs = (list.length * (list.length - 1)) / 2;
    // Try up to 4×maxPairs random draws inside this century before giving up.
    const budget = Math.max(8, maxPairs * 4);
    for (let i = 0; i < budget; i++) {
      const ai = Math.floor(Math.random() * list.length);
      let bi = Math.floor(Math.random() * list.length);
      if (bi === ai) bi = (bi + 1) % list.length;
      // Reject same-year pairs (would be ambiguous to the player).
      if (list[ai].year === list[bi].year) continue;
      const key = pairKey(list[ai], list[bi]);
      if (seen.has(key)) continue;
      seen.add(key);
      // Randomise left/right so the answer isn't always the same side.
      const flip = Math.random() < 0.5;
      const [left, right] = flip ? [list[ai], list[bi]] : [list[bi], list[ai]];
      return [eventToCard(left), eventToCard(right)];
    }
  }
  // 2) Cycle exhausted → clear seen and recurse once.
  seen.clear();
  return pickPair(seen);
}

const BEST_KEY = 'rh_game_best';

export default function GamePage() {
  const { user, addXP } = useApp();
  const { t, localize } = useLanguage();

  // Per-session set of "year-year" keys we've already shown — pickPair never
  // repeats one until every pair in every century has been used.
  const seenRef = useRef<Set<string>>(new Set());

  const [pair, setPair] = useState<[EventCard, EventCard]>(() => pickPair(seenRef.current));
  const [answered, setAnswered] = useState(false);
  const [pickedYear, setPickedYear] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [best, setBest] = useState<number>(() => {
    const v = typeof localStorage !== 'undefined' ? Number(localStorage.getItem(BEST_KEY)) : 0;
    return Number.isFinite(v) ? v : 0;
  });

  const earlierYear = Math.min(pair[0].year, pair[1].year);

  const pick = (card: EventCard) => {
    if (answered) return;
    const correct = card.year === earlierYear;
    setPickedYear(card.year);
    setAnswered(true);
    setLastCorrect(correct);
    if (correct) {
      setScore(s => s + 1);
      const ns = streak + 1;
      setStreak(ns);
      if (ns > best) {
        setBest(ns);
        if (typeof localStorage !== 'undefined') localStorage.setItem(BEST_KEY, String(ns));
      }
      if (user) addXP(3);
    } else {
      setStreak(0);
    }
  };

  const next = () => {
    setPair(pickPair(seenRef.current));
    setAnswered(false);
    setPickedYear(null);
  };

  const renderCard = (card: EventCard, side: 'left' | 'right') => {
    const isEarlier = card.year === earlierYear;
    const isPicked = pickedYear === card.year;
    let ring = 'border-transparent';
    if (answered) {
      if (isEarlier) ring = 'border-green-400';
      else if (isPicked) ring = 'border-red-400';
    }
    return (
      <motion.button
        key={side}
        onClick={() => pick(card)}
        disabled={answered}
        whileHover={!answered ? { scale: 1.03, y: -4 } : undefined}
        whileTap={!answered ? { scale: 0.98 } : undefined}
        transition={spring}
        className={`group relative flex-1 min-h-[280px] sm:min-h-[360px] rounded-3xl overflow-hidden border-4 ${ring} shadow-lg ${answered ? 'cursor-default' : 'cursor-pointer'} ${answered && !isEarlier && !isPicked ? 'opacity-70' : ''}`}
      >
        <ImageFill src={card.image} imgClassName="transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, ${card.color}E6 100%)` }} />

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-left">
          {card.epochTitle && (
            <div className="text-white/70 text-[11px] font-ui uppercase tracking-wide mb-1">{localize(card.epochTitle)}</div>
          )}
          <div className="text-white font-display text-xl font-bold leading-tight drop-shadow">{localize(card.title)}</div>
        </div>

        {/* Year reveal */}
        <AnimatePresence>
          {answered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={spring}
              className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/95 rounded-2xl px-4 py-2 shadow-xl"
            >
              <span className="font-mono-accent text-2xl font-bold text-[#2A2A2A]">{card.year}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Correct/Wrong marker */}
        <AnimatePresence>
          {answered && (isEarlier || isPicked) && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={spring}
              className={`absolute top-4 ${side === 'left' ? 'left-4' : 'right-4'} w-9 h-9 rounded-full flex items-center justify-center text-white shadow-lg ${isEarlier ? 'bg-green-500' : 'bg-red-500'}`}
            >
              {isEarlier ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    );
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="inline-flex items-center gap-2 bg-[#EEF1F7] rounded-full px-3 py-1 mb-4">
            <Swords className="w-3.5 h-3.5 text-[#2F5D9F]" />
            <span className="text-xs font-medium text-[#2F5D9F] font-ui uppercase tracking-wide">{t('game_badge')}</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-[#2A2A2A] mb-3">{t('game_title')}</h1>
          <p className="text-[#7A8499] font-ui">{t('game_subtitle')}</p>
        </motion.div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 border border-[#EEF1F7] shadow-sm">
            <Zap className="w-4 h-4 text-[#2F5D9F]" />
            <span className="font-mono-accent font-bold text-[#2A2A2A]">{score}</span>
            <span className="text-xs text-[#7A8499] font-ui">{t('game_score')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 border border-[#EEF1F7] shadow-sm">
            <Flame className={`w-4 h-4 ${streak > 0 ? 'text-orange-500' : 'text-[#9AA3B2]'}`} />
            <span className="font-mono-accent font-bold text-[#2A2A2A]">{streak}</span>
            <span className="text-xs text-[#7A8499] font-ui">{t('game_streak')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 border border-[#EEF1F7] shadow-sm">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="font-mono-accent font-bold text-[#2A2A2A]">{best}</span>
            <span className="text-xs text-[#7A8499] font-ui">{t('game_best')}</span>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-5">
          <span className="font-display text-lg font-bold text-[#2A2A2A]">{t('game_which_first')}</span>
        </div>

        {/* Cards */}
        <div className="relative flex flex-col sm:flex-row gap-4">
          {renderCard(pair[0], 'left')}
          <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-12 h-12 rounded-full bg-white shadow-xl border border-[#EEF1F7] flex items-center justify-center font-display font-black text-[#C94B4B]">
              VS
            </div>
          </div>
          {renderCard(pair[1], 'right')}
        </div>

        {/* Feedback + Next */}
        <AnimatePresence mode="wait">
          {answered && (
            <motion.div
              key="fb"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="mt-6 flex flex-col items-center gap-3"
            >
              <div className={`text-lg font-display font-bold ${lastCorrect ? 'text-green-600' : 'text-red-500'}`}>
                {lastCorrect ? `✓ ${t('game_correct')}` : `✗ ${t('game_wrong')}`}
                {lastCorrect && user && <span className="text-[#2F5D9F]"> +3 XP</span>}
              </div>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={spring}
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#2F5D9F] text-white rounded-xl font-medium font-ui shadow-lg shadow-[#2F5D9F]/20"
              >
                <RotateCcw className="w-4 h-4" />
                {t('game_next')}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {!user && (
          <p className="mt-6 text-center text-xs text-[#9AA3B2] font-ui">{t('game_signin_hint')}</p>
        )}
      </div>
    </main>
  );
}
