import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, List } from 'lucide-react';
import { useLanguage } from '@/LanguageContext';
import type { ArticleSection } from '@/data/articles';
import type { LocalizedText } from '@/data/epochs';

interface ArticleReaderProps {
  leadParagraph: LocalizedText;
  sections: ArticleSection[];
  bilingualMode: boolean;
  accentColor: string;
}

type Page =
  | { kind: 'lead'; content: LocalizedText }
  | { kind: 'section'; heading: LocalizedText; content: LocalizedText; index: number };

export default function ArticleReader({
  leadParagraph,
  sections,
  bilingualMode,
  accentColor,
}: ArticleReaderProps) {
  const { t, localize, showRussianSubtitles } = useLanguage();

  const pages: Page[] = useMemo(
    () => [
      { kind: 'lead' as const, content: leadParagraph },
      ...sections.map((s, i) => ({
        kind: 'section' as const,
        heading: s.heading,
        content: s.content,
        index: i,
      })),
    ],
    [leadParagraph, sections],
  );

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [tocOpen, setTocOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const pageBodyRef = useRef<HTMLDivElement>(null);

  // Enable swipe-drag only on touch devices — otherwise it eats text selection on desktop
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(pointer: coarse)');
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const goTo = (next: number) => {
    if (next < 0 || next > pages.length - 1 || next === page) return;
    setDirection(next > page ? 1 : -1);
    setPage(next);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target && (e.target as HTMLElement).closest('input, textarea, [contenteditable="true"]')) return;
      if (e.key === 'ArrowRight') goTo(page + 1);
      if (e.key === 'ArrowLeft') goTo(page - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [page, pages.length]);

  // Scroll body to top on page change
  useEffect(() => {
    pageBodyRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const current = pages[page];
  const progress = ((page + 1) / pages.length) * 100;
  const canPrev = page > 0;
  const canNext = page < pages.length - 1;

  return (
    <div className="relative bg-white rounded-2xl shadow-sm border border-[#EEF1F7] mb-6 overflow-hidden">
      {/* Progress bar */}
      <div className="h-1 bg-[#EEF1F7] relative">
        <motion.div
          className="h-full rounded-r-full"
          style={{ backgroundColor: accentColor }}
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 180, damping: 28 }}
        />
      </div>

      {/* Top chrome: TOC button + chapter pill + page count */}
      <div className="flex items-center justify-between px-5 md:px-7 pt-4 pb-2 gap-3">
        <button
          onClick={() => setTocOpen(v => !v)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F7FA] hover:bg-[#EEF1F7] text-[#7A8499] hover:text-[#2A2A2A] transition-colors text-xs font-ui font-medium"
          aria-label={t('reader_contents')}
        >
          <List className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t('reader_contents')}</span>
        </button>

        <div className="flex-1 text-center">
          <span
            className="inline-block px-3 py-1 rounded-full text-[11px] font-ui font-semibold tracking-wide uppercase"
            style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
          >
            {current.kind === 'lead'
              ? t('reader_intro')
              : `${t('reader_section')} ${current.index + 1}`}
          </span>
        </div>

        <div className="font-mono-accent text-xs text-[#7A8499] tabular-nums whitespace-nowrap">
          {page + 1} / {pages.length}
        </div>
      </div>

      {/* Page area */}
      <div className="relative">
        {/* Side arrows (desktop) */}
        <button
          onClick={() => goTo(page - 1)}
          disabled={!canPrev}
          aria-label={t('reader_prev')}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#EEF1F7] shadow-md items-center justify-center text-[#7A8499] hover:text-[#2A2A2A] hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => goTo(page + 1)}
          disabled={!canNext}
          aria-label={t('reader_next')}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#EEF1F7] shadow-md items-center justify-center text-[#7A8499] hover:text-[#2A2A2A] hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide stage */}
        <div
          ref={pageBodyRef}
          className="relative overflow-x-hidden overflow-y-auto"
          style={{ minHeight: '520px', maxHeight: '70vh' }}
        >
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 240, damping: 30 },
                opacity: { duration: 0.25 },
                filter: { duration: 0.3 },
                scale: { duration: 0.35 },
              }}
              drag={isTouch ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                const threshold = 80;
                if (info.offset.x < -threshold && canNext) goTo(page + 1);
                else if (info.offset.x > threshold && canPrev) goTo(page - 1);
              }}
              className={`px-5 md:px-16 py-8 select-text ${isTouch ? 'cursor-grab active:cursor-grabbing' : ''}`}
            >
              {current.kind === 'lead' ? (
                <LeadPage
                  content={current.content}
                  bilingualMode={bilingualMode}
                  showRussianSubtitles={showRussianSubtitles}
                  localize={localize}
                  accentColor={accentColor}
                />
              ) : (
                <SectionPage
                  heading={current.heading}
                  content={current.content}
                  bilingualMode={bilingualMode}
                  showRussianSubtitles={showRussianSubtitles}
                  localize={localize}
                  accentColor={accentColor}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Soft side fades to suggest "edges of pages" */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* Bottom dots + mobile prev/next */}
      <div className="flex items-center justify-between gap-3 px-5 md:px-7 pt-3 pb-5 border-t border-[#EEF1F7] mt-2">
        <button
          onClick={() => goTo(page - 1)}
          disabled={!canPrev}
          className="md:hidden flex items-center gap-1 px-3 py-1.5 text-xs font-ui text-[#7A8499] disabled:opacity-30"
          aria-label={t('reader_prev')}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex-1 flex items-center justify-center gap-1.5 flex-wrap">
          {pages.map((_, i) => {
            const active = i === page;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`${t('reader_section')} ${i}`}
                className="group p-1"
              >
                <span
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: active ? 22 : 6,
                    height: 6,
                    backgroundColor: active ? accentColor : '#D7DEEA',
                  }}
                />
              </button>
            );
          })}
        </div>

        <button
          onClick={() => goTo(page + 1)}
          disabled={!canNext}
          className="md:hidden flex items-center gap-1 px-3 py-1.5 text-xs font-ui text-[#7A8499] disabled:opacity-30"
          aria-label={t('reader_next')}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* TOC drawer */}
      <AnimatePresence>
        {tocOpen && (
          <>
            <motion.div
              className="absolute inset-0 bg-black/30 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setTocOpen(false)}
            />
            <motion.aside
              className="absolute top-0 bottom-0 left-0 w-72 max-w-[80%] bg-white shadow-2xl z-30 flex flex-col"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 32 }}
            >
              <div className="px-5 py-4 border-b border-[#EEF1F7] flex items-center justify-between">
                <h4 className="font-display text-sm font-bold text-[#2A2A2A]">{t('reader_contents')}</h4>
                <span className="text-[11px] text-[#7A8499] font-mono-accent tabular-nums">
                  {page + 1} / {pages.length}
                </span>
              </div>
              <nav className="flex-1 overflow-y-auto py-2">
                {pages.map((p, i) => {
                  const active = i === page;
                  const label =
                    p.kind === 'lead' ? t('reader_intro') : localize(p.heading);
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        goTo(i);
                        setTocOpen(false);
                      }}
                      className={`w-full text-left px-5 py-2.5 flex items-start gap-3 transition-colors text-sm font-ui leading-snug ${
                        active
                          ? 'bg-[#F5F7FA] text-[#2A2A2A] font-semibold'
                          : 'text-[#7A8499] hover:bg-[#F5F7FA] hover:text-[#2A2A2A]'
                      }`}
                    >
                      <span
                        className="font-mono-accent text-[10px] mt-1 w-6 flex-shrink-0 tabular-nums"
                        style={{ color: active ? accentColor : '#9AA3B2' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1">{label}</span>
                    </button>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.97,
    filter: 'blur(6px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.98,
    filter: 'blur(4px)',
  }),
};

interface LeadPageProps {
  content: LocalizedText;
  bilingualMode: boolean;
  showRussianSubtitles: boolean;
  localize: (t: LocalizedText) => string;
  accentColor: string;
}

// Split content into paragraphs by blank-line separator (\n\n). Trim and drop empties.
function splitParas(text: string): string[] {
  return text.split(/\n{2,}/).map(s => s.trim()).filter(Boolean);
}

function LeadPage({ content, bilingualMode, showRussianSubtitles, localize, accentColor }: LeadPageProps) {
  const foreignText = localize(content);
  const showBilingual = !!(bilingualMode && showRussianSubtitles && content.ru);
  const foreignParas = splitParas(foreignText);
  const ruParas = splitParas(content.ru || '');
  // Pair paragraphs only when both languages line up; otherwise fall back to block-on-block.
  const aligned = showBilingual && foreignParas.length > 0 && foreignParas.length === ruParas.length;

  if (aligned) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.4 }}
          className="space-y-4"
        >
          {foreignParas.map((p, i) => (
            <div key={i}>
              <p
                className="text-lg md:text-xl font-ui text-[#2A2A2A] leading-relaxed font-medium border-l-4 pl-5"
                style={{ borderColor: accentColor }}
              >
                {p}
              </p>
              <p className="text-russian pl-5 border-l-2 border-[#EEF1F7] mt-2">{ruParas[i]}</p>
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.p
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.08, duration: 0.4 }}
        className="text-lg md:text-xl font-ui text-[#2A2A2A] leading-relaxed font-medium border-l-4 pl-5 whitespace-pre-line"
        style={{ borderColor: accentColor }}
      >
        {foreignText}
      </motion.p>
      {showBilingual && (
        <motion.p
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.18, duration: 0.4 }}
          className="text-russian pl-5 border-l-2 border-[#EEF1F7] mt-4 whitespace-pre-line"
        >
          {content.ru}
        </motion.p>
      )}
    </div>
  );
}

interface SectionPageProps {
  heading: LocalizedText;
  content: LocalizedText;
  bilingualMode: boolean;
  showRussianSubtitles: boolean;
  localize: (t: LocalizedText) => string;
  accentColor: string;
}

function SectionPage({
  heading,
  content,
  bilingualMode,
  showRussianSubtitles,
  localize,
  accentColor,
}: SectionPageProps) {
  const foreignText = localize(content);
  const showBilingual = !!(bilingualMode && showRussianSubtitles && content.ru);
  const foreignParas = splitParas(foreignText);
  const ruParas = splitParas(content.ru || '');
  const aligned = showBilingual && foreignParas.length > 0 && foreignParas.length === ruParas.length;

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.4 }}
        className="flex items-center gap-3 mb-5"
      >
        <span
          className="block w-8 h-[2px] rounded-full"
          style={{ backgroundColor: accentColor }}
        />
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2A2A2A] leading-tight">
          {localize(heading)}
        </h2>
      </motion.div>

      {aligned ? (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.14, duration: 0.45 }}
          className="space-y-5"
        >
          {foreignParas.map((p, i) => (
            <div key={i}>
              <p className="text-[#2A2A2A] font-ui leading-relaxed text-base md:text-[17px]">{p}</p>
              <p className="text-russian pl-4 border-l-2 border-[#EEF1F7] mt-2">{ruParas[i]}</p>
            </div>
          ))}
        </motion.div>
      ) : (
        <>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.14, duration: 0.45 }}
            className="text-[#2A2A2A] font-ui leading-relaxed text-base md:text-[17px] whitespace-pre-line"
          >
            {foreignText}
          </motion.p>
          {showBilingual && (
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.22, duration: 0.45 }}
              className="text-russian pl-4 border-l-2 border-[#EEF1F7] mt-4 whitespace-pre-line"
            >
              {content.ru}
            </motion.p>
          )}
        </>
      )}
    </div>
  );
}
