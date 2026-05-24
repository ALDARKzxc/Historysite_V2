import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { epochs } from '@/data/epochs';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/LanguageContext';
import ImageFill from '@/components/ImageFill';
import { popIn, staggerGrid, fadeUp, cardHover, cardTap, inView } from '@/lib/animations';

export default function EpochGrid() {
  const navigate = useNavigate();
  const { t, localize, showRussianSubtitles } = useLanguage();

  return (
    <section id="epochs" className="py-20 bg-[#F5F7FA] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 mb-4 shadow-sm border border-[#EEF1F7]">
            <BookOpen className="w-3.5 h-3.5 text-[#2F5D9F]" />
            <span className="text-xs font-medium text-[#2F5D9F] font-ui tracking-wide uppercase">{t('home_epochs_badge')}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2A2A2A] mb-4">
            {t('home_epochs_title')}
          </h2>
          <p className="text-[#7A8499] font-ui text-lg max-w-2xl mx-auto">
            {t('home_epochs_subtitle')}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={staggerGrid}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          {epochs.map((epoch, i) => {
            // Bento layout: first two are large
            const isLarge = i < 2;
            const isMedium = i < 6 && i >= 2;

            return (
              <motion.div
                key={epoch.id}
                onClick={() => navigate(`/epochs/${epoch.id}`)}
                variants={popIn}
                whileHover={cardHover}
                whileTap={cardTap}
                className={`relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-shadow group ${
                  isLarge ? 'col-span-2 md:col-span-2' : ''
                } ${isLarge ? 'row-span-1 aspect-[2/1.1]' : 'aspect-square'}`}
              >
                {/* Background Image */}
                <ImageFill
                  src={epoch.coverImage}
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, ${epoch.color}22 0%, ${epoch.color}EE 100%)`,
                  }}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-4">
                  {/* Period badge */}
                  <div className="mb-2">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] font-mono-accent font-medium rounded-full px-2.5 py-0.5">
                      {epoch.period}
                    </span>
                  </div>

                  <h3 className={`font-display font-bold text-white leading-tight mb-1 ${isLarge ? 'text-2xl' : 'text-base'}`}>
                    {localize(epoch.title)}
                  </h3>
                  {showRussianSubtitles && (
                    <p className="text-white/60 text-[10px] font-ui italic mb-2">{epoch.title.ru}</p>
                  )}

                  {!isLarge && (
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-xs font-ui">{epoch.topicCount} {t('ui_topics')}</span>
                    </div>
                  )}

                  {isLarge && (
                    <>
                      <p className="text-white/80 text-sm font-ui mb-3 line-clamp-2">{localize(epoch.description)}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-xs font-ui">{epoch.topicCount} {t('ui_topics')}</span>
                        <div className="flex items-center gap-1 text-white text-xs font-medium font-ui opacity-0 group-hover:opacity-100 transition-opacity">
                          {t('ui_explore')} <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Progress bar */}
                  {epoch.progress > 0 && (
                    <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-500"
                        style={{ width: `${epoch.progress}%` }}
                      />
                    </div>
                  )}
                </div>

                {/* Topic count badge */}
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-[10px] font-mono-accent font-bold rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {epoch.topicCount} {t('ui_topics')}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          <motion.button
            onClick={() => navigate('/epochs')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2F5D9F] text-white rounded-xl font-medium font-ui hover:bg-[#264d8a] transition-colors shadow-lg shadow-[#2F5D9F]/20"
          >
            {t('home_view_all_epochs')}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
