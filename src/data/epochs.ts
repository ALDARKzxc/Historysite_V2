export interface Topic {
  id: string;
  title: string;
  titleRu: string;
  teaser: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xp: number;
  image: string;
  epochId: string;
}

export interface Epoch {
  id: string;
  title: string;
  titleRu: string;
  period: string;
  topicCount: number;
  progress: number;
  coverImage: string;
  color: string;
  description: string;
  topics: Topic[];
}

export const epochs: Epoch[] = [
  {
    id: 'ancient-rus',
    title: 'Ancient Rus',
    titleRu: 'Древняя Русь',
    period: '862–1240',
    topicCount: 20,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: '#2F5D9F',
    description: 'The founding of the first East Slavic state and the rise of Kievan civilization.',
    topics: [
      { id: 'varangians', title: 'The Calling of the Varangians', titleRu: 'Призвание варягов', teaser: 'Slavic tribes invite Norse warriors to bring order to their lands.', difficulty: 'Beginner', xp: 10, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', epochId: 'ancient-rus' },
      { id: 'rurik', title: 'Rurik — Founder of the Dynasty', titleRu: 'Рюрик', teaser: 'The legendary Varangian prince who founded Russia\'s first ruling dynasty.', difficulty: 'Beginner', xp: 10, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', epochId: 'ancient-rus' },
      { id: 'oleg-prophetic', title: 'Oleg the Prophetic', titleRu: 'Олег Вещий', teaser: 'The regent who united Novgorod and Kiev under one rule.', difficulty: 'Beginner', xp: 10, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80', epochId: 'ancient-rus' },
      { id: 'kievan-rus', title: 'Formation of Kievan Rus', titleRu: 'Образование Киевской Руси', teaser: 'How the sprawling federation of East Slavic tribes became a unified state.', difficulty: 'Beginner', xp: 10, image: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=800&q=80', epochId: 'ancient-rus' },
      { id: 'baptism-rus', title: 'Baptism of Rus', titleRu: 'Крещение Руси', teaser: 'Vladimir the Great converts Kievan Rus to Orthodox Christianity in 988.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800&q=80', epochId: 'ancient-rus' },
      { id: 'yaroslav-wise', title: 'Yaroslav the Wise', titleRu: 'Ярослав Мудрый', teaser: 'The golden age of Kievan Rus under its most enlightened ruler.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', epochId: 'ancient-rus' },
    ]
  },
  {
    id: 'mongol-invasion',
    title: 'Mongol Invasion',
    titleRu: 'Монгольское нашествие',
    period: '1223–1480',
    topicCount: 12,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
    color: '#7B3F00',
    description: 'The devastating Mongol conquest and the long shadow of the Golden Horde.',
    topics: [
      { id: 'genghis-khan', title: 'Genghis Khan and the Mongol Empire', titleRu: 'Чингисхан', teaser: 'The conqueror who built the largest contiguous land empire in history.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', epochId: 'mongol-invasion' },
      { id: 'mongol-invasion-rus', title: 'Mongol Invasion of Rus', titleRu: 'Монгольское нашествие на Русь', teaser: 'Batu Khan\'s campaign that shattered Kievan civilization forever.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', epochId: 'mongol-invasion' },
      { id: 'golden-horde', title: 'The Golden Horde', titleRu: 'Золотая Орда', teaser: 'The Mongol successor state that dominated Russian principalities for 240 years.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1569731032055-31e63c5c0e6e?w=800&q=80', epochId: 'mongol-invasion' },
      { id: 'alexander-nevsky', title: 'Alexander Nevsky', titleRu: 'Александр Невский', teaser: 'The prince who defeated Swedish and Teutonic invaders while submitting to the Mongols.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', epochId: 'mongol-invasion' },
    ]
  },
  {
    id: 'rise-of-moscow',
    title: 'Rise of Moscow',
    titleRu: 'Возвышение Москвы',
    period: '1283–1533',
    topicCount: 14,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80',
    color: '#4A7C59',
    description: 'Moscow\'s rise from a minor principality to the center of a unified Russian state.',
    topics: [
      { id: 'ivan-kalita', title: 'Ivan Kalita', titleRu: 'Иван Калита', teaser: 'The "Moneybag" prince who laid foundations for Moscow\'s supremacy.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80', epochId: 'rise-of-moscow' },
      { id: 'kulikovo', title: 'Battle of Kulikovo', titleRu: 'Куликовская битва', teaser: 'Dmitry Donskoy\'s decisive 1380 victory that began the end of Mongol dominance.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', epochId: 'rise-of-moscow' },
      { id: 'ivan-iii', title: 'Ivan III — The Great', titleRu: 'Иван III', teaser: 'The ruler who ended the Mongol Yoke and declared the Russian state\'s independence.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', epochId: 'rise-of-moscow' },
    ]
  },
  {
    id: 'muscovite-state',
    title: 'Muscovite State',
    titleRu: 'Московское государство',
    period: '1533–1584',
    topicCount: 12,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1547830961-0d4f88c5fa83?w=800&q=80',
    color: '#8B1A1A',
    description: 'The reign of Ivan the Terrible and the birth of the Russian autocracy.',
    topics: [
      { id: 'ivan-terrible', title: 'Ivan IV — The Terrible', titleRu: 'Иван IV Грозный', teaser: 'Russia\'s first Tsar — brilliant reformer and brutal tyrant.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1547830961-0d4f88c5fa83?w=800&q=80', epochId: 'muscovite-state' },
      { id: 'oprichnina', title: 'The Oprichnina', titleRu: 'Опричнина', teaser: 'Ivan\'s reign of terror: a separate state within the state.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1512799906445-8591ddd96a86?w=800&q=80', epochId: 'muscovite-state' },
      { id: 'siberia-yermak', title: 'Conquest of Siberia by Yermak', titleRu: 'Завоевание Сибири Ермаком', teaser: 'The Cossack adventurer who opened the vast eastern frontier for Russia.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80', epochId: 'muscovite-state' },
    ]
  },
  {
    id: 'time-of-troubles',
    title: 'Time of Troubles',
    titleRu: 'Смутное время',
    period: '1598–1613',
    topicCount: 13,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80',
    color: '#5C4033',
    description: 'Dynastic crisis, foreign intervention, and the near-collapse of the Russian state.',
    topics: [
      { id: 'false-dmitry', title: 'False Dmitry I', titleRu: 'Лжедмитрий I', teaser: 'The mysterious pretender who briefly seized the Russian throne.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80', epochId: 'time-of-troubles' },
      { id: 'minin-pozharsky', title: 'Minin and Pozharsky', titleRu: 'Минин и Пожарский', teaser: 'The merchant and prince who rallied Russia against Polish occupation.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80', epochId: 'time-of-troubles' },
    ]
  },
  {
    id: 'peter-the-great',
    title: 'Peter the Great',
    titleRu: 'Пётр I',
    period: '1682–1725',
    topicCount: 12,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    color: '#1A4A7A',
    description: 'The revolutionary Tsar who transformed Russia into a European empire.',
    topics: [
      { id: 'peter-reforms', title: 'Reforms of Peter I', titleRu: 'Реформы Петра I', teaser: 'How Peter forced Russia to adopt Western culture, military, and bureaucracy.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', epochId: 'peter-the-great' },
      { id: 'saint-petersburg', title: 'Founding of Saint Petersburg', titleRu: 'Основание Санкт-Петербурга', teaser: 'Peter\'s "Window to Europe" built on the Neva marshes by thousands of serfs.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800&q=80', epochId: 'peter-the-great' },
      { id: 'battle-poltava', title: 'Battle of Poltava', titleRu: 'Полтавская битва', teaser: 'Russia\'s crushing 1709 victory over Sweden that confirmed its great power status.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', epochId: 'peter-the-great' },
      { id: 'northern-war', title: 'Northern War', titleRu: 'Северная война', teaser: '21 years of war that made Russia the dominant Baltic power.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', epochId: 'peter-the-great' },
    ]
  },
  {
    id: 'catherine-great',
    title: 'Catherine the Great',
    titleRu: 'Екатерина II',
    period: '1762–1796',
    topicCount: 11,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=800&q=80',
    color: '#6B4C9A',
    description: 'The Enlightened Empress who expanded Russia\'s borders and culture.',
    topics: [
      { id: 'enlightened-absolutism', title: 'Enlightened Absolutism', titleRu: 'Просвещённый абсолютизм', teaser: 'Catherine\'s attempt to reconcile autocracy with Enlightenment philosophy.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=800&q=80', epochId: 'catherine-great' },
      { id: 'pugachev', title: 'Pugachev Uprising', titleRu: 'Восстание Пугачёва', teaser: 'The massive serf rebellion that shook the foundations of Imperial Russia.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', epochId: 'catherine-great' },
      { id: 'crimea-annexation', title: 'Annexation of Crimea', titleRu: 'Присоединение Крыма', teaser: 'How Russia secured the strategic Black Sea peninsula in 1783.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=800&q=80', epochId: 'catherine-great' },
    ]
  },
  {
    id: 'napoleon',
    title: 'Napoleon & 1812',
    titleRu: 'Война 1812 года',
    period: '1801–1825',
    topicCount: 12,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800&q=80',
    color: '#2F5D9F',
    description: 'The Patriotic War of 1812 and Russia\'s triumph over Napoleon.',
    topics: [
      { id: 'patriotic-war', title: 'Patriotic War of 1812', titleRu: 'Отечественная война 1812 года', teaser: 'Napoleon\'s catastrophic invasion of Russia and his Grande Armée\'s destruction.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800&q=80', epochId: 'napoleon' },
      { id: 'borodino', title: 'Battle of Borodino', titleRu: 'Бородинское сражение', teaser: 'The bloodiest single day of the Napoleonic Wars fought near Moscow.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', epochId: 'napoleon' },
      { id: 'decembrists', title: 'Decembrist Uprising', titleRu: 'Восстание декабристов', teaser: 'Noble officers who demanded a constitution — and paid with exile or death.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80', epochId: 'napoleon' },
    ]
  },
  {
    id: 'great-reforms',
    title: 'Great Reforms',
    titleRu: 'Великие реформы',
    period: '1855–1894',
    topicCount: 13,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80',
    color: '#4A7C59',
    description: 'Alexander II\'s liberation of the serfs and Russia\'s transformation.',
    topics: [
      { id: 'abolition-serfdom', title: 'Abolition of Serfdom 1861', titleRu: 'Отмена крепостного права', teaser: 'The Great Emancipation that freed 23 million serfs — Russia\'s most important 19th-century reform.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80', epochId: 'great-reforms' },
      { id: 'trans-siberian', title: 'Trans-Siberian Railway', titleRu: 'Транссибирская магистраль', teaser: 'The engineering marvel that connected European Russia to the Pacific.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80', epochId: 'great-reforms' },
    ]
  },
  {
    id: 'late-empire',
    title: 'Late Empire & Revolution',
    titleRu: 'Поздняя империя',
    period: '1894–1917',
    topicCount: 14,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80',
    color: '#8B1A1A',
    description: 'Nicholas II, WWI, and the collapse of the Romanov dynasty.',
    topics: [
      { id: 'nicholas-ii', title: 'Nicholas II — Last Tsar', titleRu: 'Николай II', teaser: 'The last Romanov emperor: a loving father but tragically ineffective ruler.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', epochId: 'late-empire' },
      { id: 'bloody-sunday', title: 'Bloody Sunday', titleRu: 'Кровавое воскресенье', teaser: 'The 1905 massacre of peaceful protesters that shattered trust in the Tsar.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1547830961-0d4f88c5fa83?w=800&q=80', epochId: 'late-empire' },
      { id: 'october-revolution', title: 'October Revolution 1917', titleRu: 'Октябрьская революция', teaser: 'The Bolshevik seizure of power that changed world history forever.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80', epochId: 'late-empire' },
      { id: 'rasputin', title: 'Rasputin', titleRu: 'Распутин', teaser: 'The mysterious mystic whose influence over the Romanovs helped seal the dynasty\'s fate.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', epochId: 'late-empire' },
    ]
  },
  {
    id: 'civil-war',
    title: 'Civil War & Early USSR',
    titleRu: 'Гражданская война',
    period: '1917–1924',
    topicCount: 10,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1569731032055-31e63c5c0e6e?w=800&q=80',
    color: '#C94B4B',
    description: 'The brutal civil war between Reds and Whites and the birth of the Soviet state.',
    topics: [
      { id: 'civil-war-russia', title: 'Russian Civil War', titleRu: 'Гражданская война', teaser: 'Three years of devastating conflict that claimed more lives than WWI in Russia.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1569731032055-31e63c5c0e6e?w=800&q=80', epochId: 'civil-war' },
      { id: 'romanov-execution', title: 'Execution of the Romanovs', titleRu: 'Расстрел Романовых', teaser: 'The tragic end of Russia\'s 300-year dynasty in a Yekaterinburg basement.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1512799906445-8591ddd96a86?w=800&q=80', epochId: 'civil-war' },
      { id: 'ussr-formation', title: 'Formation of the USSR', titleRu: 'Образование СССР', teaser: 'How the Soviet Union was created from the ruins of the Russian Empire.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1547830961-0d4f88c5fa83?w=800&q=80', epochId: 'civil-war' },
    ]
  },
  {
    id: 'stalins-ussr',
    title: "Stalin's USSR",
    titleRu: 'Сталинский СССР',
    period: '1924–1941',
    topicCount: 9,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    color: '#5C4033',
    description: "Stalin's industrialization, collectivization, and the Great Terror.",
    topics: [
      { id: 'collectivization', title: 'Collectivization', titleRu: 'Коллективизация', teaser: 'The forced merging of peasant farms that caused mass famine and millions of deaths.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', epochId: 'stalins-ussr' },
      { id: 'great-terror', title: 'Great Terror', titleRu: 'Большой террор', teaser: 'Stalin\'s purges of 1936-38 that eliminated real and imagined political opponents.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1512799906445-8591ddd96a86?w=800&q=80', epochId: 'stalins-ussr' },
      { id: 'gulag', title: 'GULAG System', titleRu: 'ГУЛАГ', teaser: 'The vast network of labor camps that swallowed millions of Soviet citizens.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', epochId: 'stalins-ussr' },
    ]
  },
  {
    id: 'great-patriotic-war',
    title: 'Great Patriotic War',
    titleRu: 'Великая Отечественная война',
    period: '1941–1945',
    topicCount: 12,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&q=80',
    color: '#1A4A7A',
    description: 'The Soviet struggle against Nazi Germany — the most devastating war in human history.',
    topics: [
      { id: 'operation-barbarossa', title: 'Operation Barbarossa', titleRu: 'Операция Барбаросса', teaser: 'Hitler\'s massive 1941 invasion that caught the Soviet Union catastrophically unprepared.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&q=80', epochId: 'great-patriotic-war' },
      { id: 'battle-stalingrad', title: 'Battle of Stalingrad', titleRu: 'Сталинградская битва', teaser: 'The turning point of WWII: 200 days of savage urban combat that destroyed the German 6th Army.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', epochId: 'great-patriotic-war' },
      { id: 'siege-leningrad', title: 'Siege of Leningrad', titleRu: 'Блокада Ленинграда', teaser: '872 days of siege that killed over a million civilians through starvation and bombardment.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', epochId: 'great-patriotic-war' },
      { id: 'victory-day', title: 'Victory Day — May 9, 1945', titleRu: 'День Победы', teaser: 'The Soviet triumph over Nazi Germany and the most sacred holiday in Russian memory.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', epochId: 'great-patriotic-war' },
    ]
  },
  {
    id: 'cold-war',
    title: 'Cold War & Space Race',
    titleRu: 'Холодная война',
    period: '1945–1985',
    topicCount: 12,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
    color: '#2F5D9F',
    description: 'The ideological struggle with the West and the triumphant Soviet space program.',
    topics: [
      { id: 'sputnik', title: 'Sputnik — First Satellite', titleRu: 'Спутник', teaser: 'The beeping metal sphere that launched the Space Age and shocked the West.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80', epochId: 'cold-war' },
      { id: 'gagarin', title: 'Yuri Gagarin — First in Space', titleRu: 'Юрий Гагарин', teaser: 'On April 12, 1961, a Soviet cosmonaut became the first human to orbit the Earth.', difficulty: 'Beginner', xp: 10, image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&q=80', epochId: 'cold-war' },
      { id: 'cuban-crisis', title: 'Cuban Missile Crisis', titleRu: 'Карибский кризис', teaser: 'The 13 days in 1962 when nuclear war seemed inevitable.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1512799906445-8591ddd96a86?w=800&q=80', epochId: 'cold-war' },
      { id: 'khrushchev-thaw', title: "Khrushchev's Thaw", titleRu: 'Хрущёвская оттепель', teaser: 'The brief liberalization after Stalin\'s death that allowed dissent to surface.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', epochId: 'cold-war' },
    ]
  },
  {
    id: 'perestroika',
    title: 'Perestroika & Collapse',
    titleRu: 'Перестройка',
    period: '1985–1991',
    topicCount: 11,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=800&q=80',
    color: '#C94B4B',
    description: "Gorbachev's reforms and the spectacular dissolution of the Soviet Union.",
    topics: [
      { id: 'perestroika-topic', title: 'Perestroika', titleRu: 'Перестройка', teaser: "Gorbachev's policy of restructuring that unleashed forces he could not control.", difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=800&q=80', epochId: 'perestroika' },
      { id: 'chernobyl', title: 'Chernobyl Disaster', titleRu: 'Чернобыльская катастрофа', teaser: 'The 1986 nuclear explosion that exposed the Soviet system\'s fatal flaws.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', epochId: 'perestroika' },
      { id: 'ussr-dissolution', title: 'Dissolution of the USSR', titleRu: 'Распад СССР', teaser: 'On December 25, 1991, the Soviet flag was lowered over the Kremlin for the last time.', difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80', epochId: 'perestroika' },
    ]
  },
  {
    id: 'modern-russia',
    title: 'Modern Russia',
    titleRu: 'Современная Россия',
    period: '1991–Present',
    topicCount: 8,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&q=80',
    color: '#2F5D9F',
    description: 'From the chaos of the 1990s to Russia\'s role in the 21st century.',
    topics: [
      { id: 'yeltsin', title: 'Boris Yeltsin', titleRu: 'Борис Ельцин', teaser: 'The first president of the Russian Federation who navigated the turbulent 1990s.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&q=80', epochId: 'modern-russia' },
      { id: 'russia-1990s', title: 'Russia in the 1990s', titleRu: 'Россия в 1990-е годы', teaser: 'Economic shock therapy, oligarchs, and the painful birth of Russian capitalism.', difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=800&q=80', epochId: 'modern-russia' },
    ]
  },
];

export const timelineEvents = [
  { year: 862, title: 'Calling of the Varangians', epochId: 'ancient-rus' },
  { year: 988, title: 'Baptism of Rus', epochId: 'ancient-rus' },
  { year: 1237, title: 'Mongol Invasion Begins', epochId: 'mongol-invasion' },
  { year: 1380, title: 'Battle of Kulikovo', epochId: 'rise-of-moscow' },
  { year: 1480, title: 'End of Mongol Yoke', epochId: 'rise-of-moscow' },
  { year: 1547, title: 'Ivan the Terrible Crowned Tsar', epochId: 'muscovite-state' },
  { year: 1613, title: 'Romanov Dynasty Begins', epochId: 'time-of-troubles' },
  { year: 1703, title: 'St. Petersburg Founded', epochId: 'peter-the-great' },
  { year: 1721, title: 'Russian Empire Proclaimed', epochId: 'peter-the-great' },
  { year: 1762, title: 'Catherine the Great Rises', epochId: 'catherine-great' },
  { year: 1812, title: 'Napoleon Invades Russia', epochId: 'napoleon' },
  { year: 1861, title: 'Serfs Emancipated', epochId: 'great-reforms' },
  { year: 1917, title: 'October Revolution', epochId: 'late-empire' },
  { year: 1922, title: 'USSR Founded', epochId: 'civil-war' },
  { year: 1941, title: 'Operation Barbarossa', epochId: 'great-patriotic-war' },
  { year: 1945, title: 'Victory Day', epochId: 'great-patriotic-war' },
  { year: 1961, title: 'Gagarin in Space', epochId: 'cold-war' },
  { year: 1991, title: 'USSR Dissolves', epochId: 'perestroika' },
];

export const achievements = [
  { id: 'first-step', title: 'First Step', icon: '📖', description: 'Read your first article', xp: 10, unlocked: false },
  { id: 'scholar', title: 'Scholar of Rus', icon: '🏛️', description: 'Complete the Ancient Rus epoch', xp: 50, unlocked: false },
  { id: 'conqueror', title: 'Conqueror of the Steppe', icon: '⚔️', description: 'Complete the Mongol Invasion epoch', xp: 50, unlocked: false },
  { id: 'reformer', title: 'Reformer', icon: '⚓', description: 'Complete the Peter the Great epoch', xp: 50, unlocked: false },
  { id: 'victory', title: 'Victory!', icon: '🎖️', description: 'Complete the Great Patriotic War epoch', xp: 75, unlocked: false },
  { id: 'master', title: 'Master of History', icon: '👑', description: 'Complete all epochs', xp: 500, unlocked: false },
  { id: 'polyglot', title: 'Polyglot', icon: '🌐', description: 'Use 3 different language modes', xp: 30, unlocked: false },
  { id: 'perfectionist', title: 'Perfectionist', icon: '💎', description: 'Get 5 perfect quiz scores in a row', xp: 100, unlocked: false },
  { id: 'explorer', title: 'Explorer', icon: '🗺️', description: 'Visit 50 topics', xp: 75, unlocked: false },
  { id: 'streak-7', title: 'Week Warrior', icon: '🔥', description: 'Maintain a 7-day streak', xp: 50, unlocked: false },
];
