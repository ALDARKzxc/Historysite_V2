export interface ArticleSection {
  heading: string;
  content: string;
  contentRu?: string;
}

export interface ArticleData {
  id: string;
  title: string;
  titleRu: string;
  epochId: string;
  epochTitle: string;
  heroImage: string;
  leadParagraph: string;
  summary: string;
  sections: ArticleSection[];
  keyDates: { year: string; event: string }[];
  vocabulary: { word: string; translation: string; pronunciation: string }[];
  relatedTopics: string[];
}

export const articles: Record<string, ArticleData> = {
  'baptism-rus': {
    id: 'baptism-rus',
    title: 'Baptism of Rus',
    titleRu: 'Крещение Руси',
    epochId: 'ancient-rus',
    epochTitle: 'Ancient Rus',
    heroImage: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=1600&q=80',
    leadParagraph: 'In 988 AD, Prince Vladimir of Kiev made one of the most consequential decisions in world history — he chose Orthodox Christianity as the state religion of Kievan Rus, forever shaping Russian civilization, culture, and identity.',
    summary: 'In 988, Prince Vladimir the Great converted Kievan Rus to Orthodox Christianity, ending centuries of paganism. This single act created the spiritual and cultural foundations that would define Russian civilization for over a millennium.',
    sections: [
      {
        heading: 'The Decision That Changed Everything',
        content: 'Prince Vladimir I of Kiev faced a pivotal choice. According to the Primary Chronicle, he sent envoys to study the major religions of his time: Islam from the Bulgars of the Volga, Judaism from the Khazars, Latin Christianity from the Germanic peoples, and Orthodox Christianity from Byzantium. The envoys were reportedly so overwhelmed by the beauty of the Hagia Sophia in Constantinople that they reported: "We knew not whether we were in heaven or on earth." This account, whether literally true or legendary, captures the cultural magnetism of Byzantine civilization on the Rus elite.',
        contentRu: 'Князь Владимир I Киевский стоял перед судьбоносным выбором. По «Повести временных лет», он отправил послов изучить основные религии своего времени: ислам от волжских булгар, иудаизм от хазар, латинское христианство от германских народов и православное христианство из Византии.',
      },
      {
        heading: 'The Mass Baptism of Kiev',
        content: 'Vladimir\'s decision was implemented swiftly and forcefully. In 988, the population of Kiev was ordered to appear at the Dnieper River. Priests from Constantinople performed a mass baptism while Byzantine clergy led the ceremonies. Pagan idols — including the great statue of Perun, the thunder god — were dragged through the streets, beaten, and thrown into the Dnieper. Churches were ordered built on the sites of former pagan shrines. The Desyatinnaya Church (Church of the Tithes), completed around 996, became the first stone church in Kievan Rus.',
        contentRu: 'Решение Владимира было осуществлено быстро и решительно. В 988 году население Киева было призвано явиться на берег Днепра. Священники из Константинополя провели массовое крещение, пока византийское духовенство руководило церемониями.',
      },
      {
        heading: 'The Legacy of 988',
        content: 'The consequences of the Baptism of Rus reverberated for centuries. Culturally, Kievan Rus received the Byzantine tradition of icon painting, church architecture, and religious literature. The Cyrillic alphabet, already developed by Saints Cyril and Methodius for the Slavic peoples, spread throughout Rus. Monasteries became centers of learning and manuscript production. Politically, the conversion strengthened ties with Byzantium, leading to dynastic marriages and alliances. The Orthodox Church also provided the institutional framework that helped preserve Russian culture during the later Mongol period.',
        contentRu: 'Последствия Крещения Руси отзывались столетиями. Культурно, Киевская Русь получила византийскую традицию иконописи, церковной архитектуры и религиозной литературы. Кириллица, уже разработанная святыми Кириллом и Мефодием, распространилась по всей Руси.',
      },
    ],
    keyDates: [
      { year: '988', event: 'Mass baptism of Kievans in the Dnieper' },
      { year: '989', event: 'Vladimir demolishes pagan temples' },
      { year: '996', event: 'Church of the Tithes completed in Kiev' },
      { year: '1037', event: 'St. Sophia Cathedral completed by Yaroslav the Wise' },
    ],
    vocabulary: [
      { word: 'Крещение', translation: 'Baptism / Christening', pronunciation: 'kresh-CHE-ni-ye' },
      { word: 'Православие', translation: 'Orthodox Christianity', pronunciation: 'pra-vo-SLA-vi-ye' },
      { word: 'Купель', translation: 'Baptismal font', pronunciation: 'ku-PEL' },
      { word: 'Язычество', translation: 'Paganism', pronunciation: 'ya-ZY-che-stvo' },
      { word: 'Монастырь', translation: 'Monastery', pronunciation: 'mo-na-STYR' },
      { word: 'Летопись', translation: 'Chronicle/Annals', pronunciation: 'LE-to-pis' },
    ],
    relatedTopics: ['yaroslav-wise', 'kievan-rus', 'rurik'],
  },
  'battle-stalingrad': {
    id: 'battle-stalingrad',
    title: 'Battle of Stalingrad',
    titleRu: 'Сталинградская битва',
    epochId: 'great-patriotic-war',
    epochTitle: 'Great Patriotic War',
    heroImage: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=1600&q=80',
    leadParagraph: 'From August 1942 to February 1943, the Battle of Stalingrad became the single deadliest military engagement in human history — and the turning point that would ultimately seal Nazi Germany\'s fate.',
    summary: 'The Battle of Stalingrad (1942-43) was the bloodiest battle in history, killing nearly two million soldiers and civilians. The Soviet encirclement of the German 6th Army marked the strategic turning point of World War II.',
    sections: [
      {
        heading: 'The City That Must Not Fall',
        content: 'Hitler\'s obsession with capturing Stalingrad went beyond its strategic value as an industrial city and key point on the Volga River. The city bore Stalin\'s name, making its capture a psychological blow to Soviet morale. For Stalin, the order was absolute: "Not one step back." NKVD units were placed behind Soviet lines to shoot any soldier who retreated without orders. Both dictators had staked their prestige on this city, turning it into a meat grinder of extraordinary proportions.',
        contentRu: 'Одержимость Гитлера взятием Сталинграда выходила за пределы его стратегического значения как промышленного города. Город носил имя Сталина, делая его захват психологическим ударом по советскому моральному духу. Для Сталина приказ был абсолютным: «Ни шагу назад».',
      },
      {
        heading: 'Hell in the Streets',
        content: 'The battle became infamous for its ferocious close-quarters combat. Soviet commander Vasily Chuikov developed the tactic of "hugging the enemy" — keeping Soviet forces so close to German lines that Luftwaffe bombers could not attack without hitting their own troops. Buildings changed hands multiple times in a single day. The Mamaev Kurgan hill, commanding the city, was so saturated with metal that after the battle, a metal detector found over 1,200 pieces of shrapnel per square meter. Sniper Vasily Zaitsev became a hero of the battle with 242 confirmed kills.',
        contentRu: 'Битва стала печально известной своими яростными рукопашными боями. Советский командующий Василий Чуйков разработал тактику «обнимания врага» — удерживая советские силы так близко к немецким позициям, что бомбардировщики люфтваффе не могли атаковать, не поразив своих.',
      },
      {
        heading: 'Operation Uranus',
        content: 'While fierce urban combat raged in the city, Soviet General Georgy Zhukov and General Alexander Vasilevsky secretly planned Operation Uranus — a massive double envelopment of the German forces. On November 19, 1942, Soviet forces attacked the weakly held Romanian flanks. Within four days, the trap was closed. The German 6th Army of 330,000 men was encircled. Hitler refused to allow a breakout, insisting the army hold its position. Field Marshal Friedrich Paulus surrendered on February 2, 1943, with only 91,000 survivors from his once-mighty army.',
        contentRu: 'Пока в городе шли ожесточённые уличные бои, советские генералы Жуков и Василевский тайно планировали операцию «Уран» — массовый двойной охват немецких войск. 19 ноября 1942 года советские войска атаковали слабо защищённые румынские фланги.',
      },
    ],
    keyDates: [
      { year: 'Aug 1942', event: 'German forces reach Stalingrad' },
      { year: 'Sep 1942', event: 'Street-by-street urban combat begins' },
      { year: 'Nov 19, 1942', event: 'Operation Uranus encircles German 6th Army' },
      { year: 'Jan 1943', event: 'Soviet forces tighten the encirclement' },
      { year: 'Feb 2, 1943', event: 'Paulus surrenders — German defeat complete' },
    ],
    vocabulary: [
      { word: 'Битва', translation: 'Battle', pronunciation: 'BI-tva' },
      { word: 'Окружение', translation: 'Encirclement/Encirclement', pronunciation: 'ok-ru-ZHE-ni-ye' },
      { word: 'Победа', translation: 'Victory', pronunciation: 'po-BE-da' },
      { word: 'Солдат', translation: 'Soldier', pronunciation: 'sol-DAT' },
      { word: 'Снайпер', translation: 'Sniper', pronunciation: 'SNAY-per' },
      { word: 'Капитуляция', translation: 'Surrender', pronunciation: 'ka-pi-tu-LYA-tsi-ya' },
    ],
    relatedTopics: ['operation-barbarossa', 'siege-leningrad', 'victory-day'],
  },
  'gagarin': {
    id: 'gagarin',
    title: 'Yuri Gagarin — First in Space',
    titleRu: 'Юрий Гагарин — первый в космосе',
    epochId: 'cold-war',
    epochTitle: 'Cold War & Space Race',
    heroImage: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1600&q=80',
    leadParagraph: 'On April 12, 1961, a 27-year-old Soviet Air Force pilot named Yuri Alekseyevich Gagarin became the first human being to travel into outer space, completing one orbit of Earth in 108 minutes and forever changing humanity\'s relationship with the cosmos.',
    summary: 'Yuri Gagarin\'s 108-minute flight on April 12, 1961 made him the first human in space. His mission aboard Vostok 1 was a triumph of Soviet engineering and became the defining moment of the Space Race.',
    sections: [
      {
        heading: 'The Man Chosen by the Stars',
        content: 'From 3,000 candidates, 20 were selected for the first Soviet cosmonaut program. Gagarin stood out not just for his piloting skills and physical fitness, but for his personality — his infectious smile, his ability to remain calm under pressure, and crucially, his ability to inspire confidence in others. He was the son of a carpenter and a dairy worker from a small village near Smolensk, and his working-class background made him the perfect Soviet hero. Chief designer Sergei Korolev reportedly said that Gagarin "combined the qualities needed for this mission better than anyone."',
        contentRu: 'Из 3000 кандидатов было отобрано 20 для первой советской программы космонавтов. Гагарин выделялся не только лётным мастерством и физической подготовкой, но и своим характером — заразительной улыбкой, умением сохранять спокойствие под давлением.',
      },
      {
        heading: 'Poyekhali! — Off We Go!',
        content: 'At 9:07 Moscow time on April 12, 1961, the Vostok 3KA spacecraft lifted off from the Baikonur Cosmodrome. Gagarin\'s legendary word at launch — "Poyekhali!" (Let\'s go!) — became one of the most famous utterances in history. During his 108-minute flight, Gagarin orbited Earth once at an altitude of about 327 km, experiencing weightlessness and becoming the first human to see the curvature of the Earth. His vital signs remained steady throughout. On re-entry, he ejected from the capsule at 7 km altitude and parachuted safely to a field in the Saratov region, where a local farmer and her daughter found him.',
        contentRu: 'В 9:07 по московскому времени 12 апреля 1961 года космический корабль «Восток 3КА» стартовал с космодрома Байконур. Легендарное слово Гагарина на старте — «Поехали!» — стало одним из самых знаменитых в истории.',
      },
      {
        heading: 'The World Reacts',
        content: 'The news spread instantly around the globe. Moscow erupted in spontaneous celebration — people poured into the streets waving flags and weeping with joy. In the United States, President Kennedy was informed while still in bed. NASA officials were shocked; they had planned their first crewed flight for May. Gagarin\'s flight had a profound philosophical impact: for the first time, a human had seen Earth from space — a pale blue marble suspended in the darkness. The image shaped the environmental movement and humanity\'s self-understanding. Gagarin toured the world as a Soviet celebrity, meeting world leaders and being mobbed by admirers everywhere he went.',
        contentRu: 'Новость мгновенно облетела весь мир. Москва взорвалась стихийными торжествами — люди высыпали на улицы с флагами и плакали от радости. В США президент Кеннеди был разбужен этим известием. Чиновники НАСА были потрясены.',
      },
    ],
    keyDates: [
      { year: 'Oct 4, 1957', event: 'Sputnik — first satellite in orbit' },
      { year: '1960', event: 'Gagarin selected as cosmonaut candidate' },
      { year: 'Apr 12, 1961', event: 'Vostok 1 launches — Gagarin orbits Earth' },
      { year: 'Apr 14, 1961', event: 'Gagarin receives Hero of Soviet Union medal' },
      { year: 'Mar 27, 1968', event: 'Gagarin dies in a training jet crash' },
    ],
    vocabulary: [
      { word: 'Космонавт', translation: 'Cosmonaut/Astronaut', pronunciation: 'kos-mo-NAVT' },
      { word: 'Космос', translation: 'Space/Cosmos', pronunciation: 'KOS-mos' },
      { word: 'Орбита', translation: 'Orbit', pronunciation: 'or-BI-ta' },
      { word: 'Поехали', translation: 'Let\'s go! (famous word)', pronunciation: 'po-YE-kha-li' },
      { word: 'Ракета', translation: 'Rocket', pronunciation: 'ra-KE-ta' },
      { word: 'Земля', translation: 'Earth/Ground', pronunciation: 'zem-LYA' },
    ],
    relatedTopics: ['sputnik', 'cuban-crisis', 'khrushchev-thaw'],
  },
};

// Generic article template for topics without specific content
export function getArticleData(topicId: string, topic: any): ArticleData {
  if (articles[topicId]) return articles[topicId];

  return {
    id: topicId,
    title: topic.title,
    titleRu: topic.titleRu,
    epochId: topic.epochId,
    epochTitle: 'Russian History',
    heroImage: topic.image,
    leadParagraph: topic.teaser,
    summary: `This article explores ${topic.title} — a pivotal moment in Russian history that shaped the course of civilization.`,
    sections: [
      {
        heading: 'Historical Context',
        content: `${topic.title} represents one of the most significant events in Russian history. Understanding this period requires examining the political, social, and cultural forces that converged to create this pivotal moment. Russian historians including Karamzin, Solovyov, and Klyuchevsky have all analyzed these events extensively, providing us with rich primary and secondary sources.`,
        contentRu: `${topic.titleRu} является одним из наиболее значимых событий в истории России. Для понимания этого периода необходимо рассмотреть политические, социальные и культурные силы, которые сошлись в этот переломный момент.`,
      },
      {
        heading: 'Key Events and Figures',
        content: `The events surrounding ${topic.title} involved key historical figures whose decisions changed the trajectory of Russian history. Military leaders, tsars, religious figures, and ordinary people all played their roles in this complex historical drama. The primary sources from this period paint a vivid picture of a society in transformation, grappling with both internal contradictions and external threats.`,
        contentRu: `События, связанные с ${topic.titleRu}, включали ключевых исторических деятелей, чьи решения изменили траекторию российской истории. Военные лидеры, цари, религиозные деятели и простые люди — все они сыграли свою роль в этой сложной исторической драме.`,
      },
      {
        heading: 'Legacy and Impact',
        content: `The long-term consequences of ${topic.title} continue to resonate in Russian culture, politics, and national identity. This event shaped subsequent generations and remains a touchstone in Russian historical memory. Its impact can be traced through the centuries, influencing everything from political institutions to cultural practices, from religious traditions to literary themes.`,
        contentRu: `Долгосрочные последствия события ${topic.titleRu} продолжают отзываться в российской культуре, политике и национальной идентичности. Это событие формировало последующие поколения и остаётся краеугольным камнем российской исторической памяти.`,
      },
    ],
    keyDates: [
      { year: '—', event: `Related to ${topic.title}` },
    ],
    vocabulary: [
      { word: 'История', translation: 'History', pronunciation: 'is-TO-ri-ya' },
      { word: 'Россия', translation: 'Russia', pronunciation: 'ros-SI-ya' },
      { word: 'Война', translation: 'War', pronunciation: 'voy-NA' },
      { word: 'Мир', translation: 'Peace / World', pronunciation: 'MIR' },
      { word: 'Народ', translation: 'People / Nation', pronunciation: 'na-ROD' },
    ],
    relatedTopics: [],
  };
}
