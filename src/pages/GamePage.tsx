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

// Weighted shuffle of centuries — sample without replacement where the
// probability of each century is proportional to its event count. This way
// the 20th century (≈37 events) is picked far more often than the 9th
// (≈3 events), so cards naturally skew towards modern history instead of
// every century getting the same airtime.
function weightedCenturyShuffle(): number[] {
  const remaining = [...gameCenturies];
  const weights = remaining.map(c => gameEventsByCentury.get(c)!.length);
  const out: number[] = [];
  while (remaining.length) {
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    let i = 0;
    for (; i < remaining.length - 1; i++) {
      r -= weights[i];
      if (r <= 0) break;
    }
    out.push(remaining[i]);
    remaining.splice(i, 1);
    weights.splice(i, 1);
  }
  return out;
}

// Pick a fresh pair: both events from the SAME century, never repeating a key
// the player has already seen this session, never reusing an event that was on
// screen the previous round, and preferring a different century from the
// previous round so consecutive rounds feel like distinct eras.
// When the seen-set is exhausted, it clears and the cycle restarts.
function pickPair(
  seen: Set<string>,
  prev?: [EventCard, EventCard],
): [EventCard, EventCard] {
  // Identity of an event = "year|english-title" (year alone collides on 1917).
  const evKey = (e: { year: number; title: LocalizedText }) => `${e.year}|${e.title.en}`;
  const prevEvKeys = new Set<string>();
  if (prev) {
    prevEvKeys.add(evKey(prev[0]));
    prevEvKeys.add(evKey(prev[1]));
  }
  const prevCentury = prev ? Math.ceil(prev[0].year / 100) : undefined;

  // Weighted shuffle by event count — denser centuries (XIX/XX/etc.) get
  // first crack at producing a pair. If we know the previous century, push
  // it to the end of the order so consecutive rounds prefer a different era.
  const order = weightedCenturyShuffle();
  if (prevCentury !== undefined) {
    const i = order.indexOf(prevCentury);
    if (i >= 0) {
      order.splice(i, 1);
      order.push(prevCentury);
    }
  }

  for (const century of order) {
    // Drop events that were on screen last round; still need at least 2 left
    // in this century to form a pair.
    const list = gameEventsByCentury.get(century)!.filter(e => !prevEvKeys.has(evKey(e)));
    if (list.length < 2) continue;

    const maxPairs = (list.length * (list.length - 1)) / 2;
    const budget = Math.max(8, maxPairs * 4);
    for (let i = 0; i < budget; i++) {
      const ai = Math.floor(Math.random() * list.length);
      let bi = Math.floor(Math.random() * list.length);
      if (bi === ai) bi = (bi + 1) % list.length;
      if (list[ai].year === list[bi].year) continue;
      const key = pairKey(list[ai], list[bi]);
      if (seen.has(key)) continue;
      seen.add(key);
      const flip = Math.random() < 0.5;
      const [left, right] = flip ? [list[ai], list[bi]] : [list[bi], list[ai]];
      return [eventToCard(left), eventToCard(right)];
    }
  }
  // Exhausted — clear seen and recurse without prev to guarantee a valid pair
  // (passing prev again could let us loop forever if every remaining pair
  // shares an event with prev).
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
    setPair(prevPair => pickPair(seenRef.current, prevPair));
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
        // Keying by the image URL forces React to fully replace the <img>
        // element when the event changes between rounds — without this the
        // browser keeps showing the *previous* photo until the new one
        // finishes downloading, which made consecutive rounds look identical.
        key={`${side}-${card.image}`}
        onClick={() => pick(card)}
        disabled={answered}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={!answered ? { scale: 1.03, y: -4 } : undefined}
        whileTap={!answered ? { scale: 0.98 } : undefined}
        transition={{ opacity: { duration: 0.25, ease: EASE }, ...spring }}
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
