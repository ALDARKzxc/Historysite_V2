import { BookOpen, Github, Heart } from 'lucide-react';

const TEAM = [
  {
    name: 'Gazaev Alikhan Abdullakhovich',
    nameRu: 'Газаев Алихан Абдуллахович',
    role: 'Lead Developer & Architecture',
    description: 'Responsible for the technical architecture, backend systems, and overall platform development.',
    initials: 'GA',
    color: '#2F5D9F',
  },
  {
    name: 'Murzin Matvey Vladimirovich',
    nameRu: 'Мурзин Матвей Владимирович',
    role: 'Frontend Development & UI Design',
    description: 'Crafted the visual identity, user interface design, and interactive frontend components.',
    initials: 'MM',
    color: '#C94B4B',
  },
  {
    name: 'Yakimenko Alexey Sergeevich',
    nameRu: 'Якименко Алексей Сергеевич',
    role: 'Content Research & Historical Verification',
    description: 'Researched and verified all historical content using primary Russian academic sources.',
    initials: 'YA',
    color: '#4A7C59',
  },
];

const SOURCES = [
  { author: 'N.M. Karamzin', work: 'History of the Russian State' },
  { author: 'S.M. Solovyov', work: 'History of Russia from Ancient Times' },
  { author: 'V.O. Klyuchevsky', work: 'Course of Russian History' },
  { author: 'N.I. Kostomarov', work: 'Russian History in Biographies of Its Chief Figures' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2F5D9F] rounded-2xl shadow-xl mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-[#2A2A2A] mb-4">
            About <span className="text-[#C94B4B]">RusHistory</span>
          </h1>
          <p className="text-[#7A8499] font-ui text-xl max-w-2xl mx-auto leading-relaxed">
            Making 1,200 years of Russian history accessible to learners around the world
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-8 md:p-12 mb-12">
          <div className="flex gap-4 mb-6">
            <div className="w-1 bg-[#2F5D9F] rounded-full flex-shrink-0" />
            <div>
              <h2 className="font-display text-3xl font-bold text-[#2A2A2A] mb-4">Our Mission</h2>
              <p className="text-[#2A2A2A] font-ui text-lg leading-relaxed mb-4">
                RusHistory was created with a simple but ambitious goal: to make Russian history come alive for international learners. We believe that history is best understood through immersive storytelling, visual richness, and active engagement — not through dry textbooks.
              </p>
              <p className="text-[#7A8499] font-ui leading-relaxed">
                By combining the depth of academic scholarship with the engagement of modern ed-tech design, we've built a platform where a 16-year-old in Cairo or Shanghai can feel genuinely excited to learn about the Battle of Kulikovo, the Siege of Leningrad, or Yuri Gagarin's historic flight.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#EEF1F7]">
            {[
              { value: '220+', label: 'Historical Topics' },
              { value: '18', label: 'Epochs Covered' },
              { value: '4', label: 'Languages' },
              { value: '1,200', label: 'Years of History' },
            ].map(stat => (
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
            <h2 className="font-display text-3xl font-bold text-[#2A2A2A] mb-2">Our Team</h2>
            <p className="text-[#7A8499] font-ui">Students of MADI · Group 1bIVTn2</p>
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
                  {member.role}
                </div>

                <p className="text-[#7A8499] text-sm font-ui leading-relaxed">{member.description}</p>

                {/* University */}
                <div className="mt-4 pt-4 border-t border-[#EEF1F7] flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#EEF1F7] rounded-md flex items-center justify-center">
                    <BookOpen className="w-3 h-3 text-[#7A8499]" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#2A2A2A] font-ui">MADI</div>
                    <div className="text-[10px] text-[#7A8499] font-ui">Group 1bIVTn2</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Sources */}
        <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-8 mb-8">
          <h2 className="font-display text-2xl font-bold text-[#2A2A2A] mb-6">Academic Sources</h2>
          <p className="text-[#7A8499] font-ui mb-6">
            All historical content is based on verified Russian academic scholarship:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOURCES.map(source => (
              <div key={source.author} className="flex items-start gap-3 bg-[#F5F7FA] rounded-xl p-4">
                <div className="w-8 h-8 bg-[#2F5D9F] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2A2A2A] font-ui">{source.author}</div>
                  <div className="text-xs text-[#7A8499] font-ui italic">{source.work}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center text-[#7A8499] font-ui text-sm flex items-center justify-center gap-2">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-[#C94B4B]" />
          <span>for history lovers worldwide · MADI University · 2024</span>
        </div>
      </div>
    </main>
  );
}
