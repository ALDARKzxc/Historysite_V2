import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookA, ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import { useLanguage } from '@/LanguageContext';
import { getTopicTerms } from '@/data/glossary';
import { spring } from '@/lib/animations';

interface Props {
  topicId: string | undefined;
  color: string;
}

export default function TopicGlossary({ topicId, color }: Props) {
  const { t, localize } = useLanguage();
  const terms = getTopicTerms(topicId);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (terms.length === 0) return null;
  const term = terms[index % terms.length];

  const go = (dir: number) => {
    setFlipped(false);
    setIndex(i => (i + dir + terms.length) % terms.length);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-5">
      <h3 className="font-display text-base font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
        <BookA className="w-4 h-4" style={{ color }} />
        {t('glossary_title')}
      </h3>

      {/* Flip card */}
      <div style={{ perspective: 1000 }} className="mb-3">
        <motion.div
          className="relative w-full h-40 cursor-pointer"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setFlipped(f => !f)}
        >
          {/* Front — the Russian term */}
          <div
            className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center text-center px-4"
            style={{ backfaceVisibility: 'hidden', background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}
          >
            <div className="text-white font-display text-2xl font-bold leading-tight">{term.term}</div>
            {term.pronunciation && (
              <div className="text-white/70 font-mono-accent text-xs mt-1">/{term.pronunciation}/</div>
            )}
            <div className="text-white/60 text-[11px] font-ui mt-4 flex items-center gap-1">
              <RotateCw className="w-3 h-3" /> {t('glossary_hint')}
            </div>
          </div>

          {/* Back — the meaning */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#F5F7FA] border border-[#EEF1F7] flex flex-col justify-center px-4"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="text-[10px] uppercase tracking-wide font-ui mb-1" style={{ color }}>
              {term.term}
            </div>
            <p className="text-sm text-[#2A2A2A] font-ui leading-snug">{localize(term.meaning)}</p>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <motion.button
          onClick={() => go(-1)}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 rounded-lg bg-[#F5F7FA] hover:bg-[#EEF1F7] flex items-center justify-center text-[#7A8499]"
          aria-label="prev"
        >
          <ChevronLeft className="w-4 h-4" />
        </motion.button>

        <div className="flex items-center gap-1.5">
          {terms.map((_, i) => (
            <button
              key={i}
              onClick={() => { setFlipped(false); setIndex(i); }}
              className="w-1.5 h-1.5 rounded-full transition-colors"
              style={{ backgroundColor: i === index ? color : '#E5E9F2' }}
              aria-label={`term ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          onClick={() => go(1)}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 rounded-lg bg-[#F5F7FA] hover:bg-[#EEF1F7] flex items-center justify-center text-[#7A8499]"
          aria-label="next"
        >
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}
