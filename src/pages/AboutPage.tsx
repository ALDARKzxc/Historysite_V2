import { BookOpen, Heart } from 'lucide-react';
import { useLanguage } from '@/LanguageContext';

const TEAM = [
  {
    name: 'Gazaev Alikhan Abdullakhovich',
    nameRu: 'Газаев Алихан Абдуллахович',
    roleKey: 'role_lead_dev',
    descKey: 'role_lead_dev_desc',
    initials: 'GA',
    color: '#2F5D9F',
  },
  {
    name: 'Murzin Matvey Vladimirovich',
    nameRu: 'Мурзин Матвей Владимирович',
    roleKey: 'role_frontend',
    descKey: 'role_frontend_desc',
    initials: 'MM',
    color: '#C94B4B',
  },
  {
    name: 'Yakimenko Alexey Sergeevich',
    nameRu: 'Якименко Алексей Сергеевич',
    roleKey: 'role_content',
    descKey: 'role_content_desc',
    initials: 'YA',
    color: '#4A7C59',
  },
];

const SOURCES = [
  { author: 'N.M. Karamzin', workKey: 'source_karamzin' },
  { author: 'S.M. Solovyov', workKey: 'source_solovyov' },
  { author: 'V.O. Klyuchevsky', workKey: 'source_klyuchevsky' },
  { author: 'N.I. Kostomarov', workKey: 'source_kostomarov' },
];

export default function AboutPage() {
  const { t } = useLanguage();

  const STATS = [
    { value: '220+', label: t('stat_topics') },
    { value: '18', label: t('stat_epochs_covered') },
    { value: '4', label: t('stat_languages') },
    { value: '1,200', label: t('stat_years') },
  ];

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2F5D9F] rounded-2xl shadow-xl mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-[#2A2A2A] mb-4">
            {t('about_hero_title')} <span className="text-[#C94B4B]">RusHistory</span>
          </h1>
          <p className="text-[#7A8499] font-ui text-xl max-w-2xl mx-auto leading-relaxed">
            {t('about_hero_sub')}
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-8 md:p-12 mb-12">
          <div className="flex gap-4 mb-6">
            <div className="w-1 bg-[#2F5D9F] rounded-full flex-shrink-0" />
            <div>
              <h2 className="font-display text-3xl font-bold text-[#2A2A2A] mb-4">{t('about_mission_title')}</h2>
              <p className="text-[#2A2A2A] font-ui text-lg leading-relaxed mb-4">
                {t('about_mission_p1')}
              </p>
              <p className="text-[#7A8499] font-ui leading-relaxed">
                {t('about_mission_p2')}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#EEF1F7]">
            {STATS.map(stat => (
              <div key={stat.label} className="text-center bg-[#F5F7FA] rounded-xl p-4">
                <div className="font-mono-accent text-2xl font-bold text-[#2F5D9F]">{stat.value}</div>
                <div className="text-xs text-[#7A8499] font-ui mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-[#2A2A2A] mb-2">{t('about_team_title')}</h2>
            <p className="text-[#7A8499] font-ui">{t('about_team_sub')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map(member => (
              <div key={member.name} className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-6 card-hover">
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-md"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>

                {/* Info */}
                <h3 className="font-display text-lg font-bold text-[#2A2A2A] leading-tight mb-0.5">
                  {member.name}
                </h3>
                <p className="text-[#9AA3B2] text-xs font-ui italic mb-2">{member.nameRu}</p>

                {/* Role badge */}
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium font-ui text-white mb-3"
                  style={{ backgroundColor: member.color + 'CC' }}
                >
                  {t(member.roleKey)}
                </div>

                <p className="text-[#7A8499] text-sm font-ui leading-relaxed">{t(member.descKey)}</p>

                {/* University */}
                <div className="mt-4 pt-4 border-t border-[#EEF1F7] flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#EEF1F7] rounded-md flex items-center justify-center">
                    <BookOpen className="w-3 h-3 text-[#7A8499]" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#2A2A2A] font-ui">{t('about_university')}</div>
                    <div className="text-[10px] text-[#7A8499] font-ui">{t('about_group')}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Sources */}
        <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-8 mb-8">
          <h2 className="font-display text-2xl font-bold text-[#2A2A2A] mb-6">{t('about_sources_title')}</h2>
          <p className="text-[#7A8499] font-ui mb-6">
            {t('about_sources_intro')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOURCES.map(source => (
              <div key={source.author} className="flex items-start gap-3 bg-[#F5F7FA] rounded-xl p-4">
                <div className="w-8 h-8 bg-[#2F5D9F] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2A2A2A] font-ui">{source.author}</div>
                  <div className="text-xs text-[#7A8499] font-ui italic">{t(source.workKey)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center text-[#7A8499] font-ui text-sm flex items-center justify-center gap-2">
          <span>{t('about_made_with')}</span>
          <Heart className="w-4 h-4 text-[#C94B4B]" />
          <span>{t('about_for_lovers')}</span>
        </div>
      </div>
    </main>
  );
}
