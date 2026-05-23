export type LocalizedText = { en: string; ru: string; ar: string; zh: string };

export interface Topic {
  id: string;
  title: LocalizedText;
  teaser: LocalizedText;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xp: number;
  image: string;
  epochId: string;
}

export interface Epoch {
  id: string;
  title: LocalizedText;
  period: string;
  topicCount: number;
  progress: number;
  coverImage: string;
  color: string;
  description: LocalizedText;
  topics: Topic[];
}

export const epochs: Epoch[] = [
  {
    id: 'ancient-rus',
    title: { en: 'Ancient Rus', ru: 'Древняя Русь', ar: 'روس القديمة', zh: '古代罗斯' },
    period: '862–1240',
    topicCount: 20,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: '#2F5D9F',
    description: {
      en: 'The founding of the first East Slavic state and the rise of Kievan civilization.',
      ru: 'Основание первого восточнославянского государства и расцвет киевской цивилизации.',
      ar: 'تأسيس أول دولة سلافية شرقية وصعود حضارة كييف.',
      zh: '第一个东斯拉夫国家的建立与基辅文明的兴起。',
    },
    topics: [
      {
        id: 'varangians',
        title: { en: 'The Calling of the Varangians', ru: 'Призвание варягов', ar: 'دعوة الفارانغيين', zh: '瓦良格人的召唤' },
        teaser: {
          en: 'Slavic tribes invite Norse warriors to bring order to their lands.',
          ru: 'Славянские племена приглашают норманнских воинов навести порядок на их землях.',
          ar: 'قبائل سلافية تدعو محاربين إسكندنافيين لإحلال النظام في أراضيها.',
          zh: '斯拉夫部落邀请北欧武士来治理他们的土地。',
        },
        difficulty: 'Beginner', xp: 10, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', epochId: 'ancient-rus',
      },
      {
        id: 'rurik',
        title: { en: 'Rurik — Founder of the Dynasty', ru: 'Рюрик', ar: 'روريك — مؤسس السلالة', zh: '留里克——王朝的奠基人' },
        teaser: {
          en: "The legendary Varangian prince who founded Russia's first ruling dynasty.",
          ru: 'Легендарный варяжский князь, основавший первую правящую династию Руси.',
          ar: 'الأمير الفارانغي الأسطوري الذي أسس أول سلالة حاكمة في روسيا.',
          zh: '传奇的瓦良格王公，建立了俄罗斯第一个统治王朝。',
        },
        difficulty: 'Beginner', xp: 10, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', epochId: 'ancient-rus',
      },
      {
        id: 'oleg-prophetic',
        title: { en: 'Oleg the Prophetic', ru: 'Олег Вещий', ar: 'أوليغ النبوي', zh: '先知奥列格' },
        teaser: {
          en: 'The regent who united Novgorod and Kiev under one rule.',
          ru: 'Регент, объединивший Новгород и Киев под единой властью.',
          ar: 'الوصي الذي وحّد نوفغورود وكييف تحت حكم واحد.',
          zh: '将诺夫哥罗德和基辅统一于一统治之下的摄政王。',
        },
        difficulty: 'Beginner', xp: 10, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80', epochId: 'ancient-rus',
      },
      {
        id: 'kievan-rus',
        title: { en: 'Formation of Kievan Rus', ru: 'Образование Киевской Руси', ar: 'تشكّل روس كييف', zh: '基辅罗斯的形成' },
        teaser: {
          en: 'How the sprawling federation of East Slavic tribes became a unified state.',
          ru: 'Как обширная федерация восточнославянских племён стала единым государством.',
          ar: 'كيف تحوّل اتحاد القبائل السلافية الشرقية المترامي إلى دولة موحّدة.',
          zh: '东斯拉夫部落松散的联盟如何成为统一的国家。',
        },
        difficulty: 'Beginner', xp: 10, image: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=800&q=80', epochId: 'ancient-rus',
      },
      {
        id: 'baptism-rus',
        title: { en: 'Baptism of Rus', ru: 'Крещение Руси', ar: 'تعميد روس', zh: '罗斯受洗' },
        teaser: {
          en: 'Vladimir the Great converts Kievan Rus to Orthodox Christianity in 988.',
          ru: 'Владимир Великий обращает Киевскую Русь в православие в 988 году.',
          ar: 'فلاديمير العظيم يحوّل روس كييف إلى المسيحية الأرثوذكسية عام 988.',
          zh: '弗拉基米尔大帝于988年使基辅罗斯皈依东正教。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800&q=80', epochId: 'ancient-rus',
      },
      {
        id: 'yaroslav-wise',
        title: { en: 'Yaroslav the Wise', ru: 'Ярослав Мудрый', ar: 'ياروسلاف الحكيم', zh: '智者雅罗斯拉夫' },
        teaser: {
          en: 'The golden age of Kievan Rus under its most enlightened ruler.',
          ru: 'Золотой век Киевской Руси при её самом просвещённом правителе.',
          ar: 'العصر الذهبي لروس كييف في عهد أكثر حكامها استنارة.',
          zh: '基辅罗斯在其最开明统治者治下的黄金时代。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', epochId: 'ancient-rus',
      },
    ],
  },
  {
    id: 'mongol-invasion',
    title: { en: 'Mongol Invasion', ru: 'Монгольское нашествие', ar: 'الغزو المغولي', zh: '蒙古入侵' },
    period: '1223–1480',
    topicCount: 12,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
    color: '#7B3F00',
    description: {
      en: 'The devastating Mongol conquest and the long shadow of the Golden Horde.',
      ru: 'Разрушительное монгольское завоевание и долгая тень Золотой Орды.',
      ar: 'الغزو المغولي المدمّر والظل الطويل للقبيلة الذهبية.',
      zh: '毁灭性的蒙古征服与金帐汗国的长久阴影。',
    },
    topics: [
      {
        id: 'genghis-khan',
        title: { en: 'Genghis Khan and the Mongol Empire', ru: 'Чингисхан', ar: 'جنكيز خان والإمبراطورية المغولية', zh: '成吉思汗与蒙古帝国' },
        teaser: {
          en: 'The conqueror who built the largest contiguous land empire in history.',
          ru: 'Завоеватель, создавший крупнейшую сухопутную империю в истории.',
          ar: 'الفاتح الذي بنى أكبر إمبراطورية برية متصلة في التاريخ.',
          zh: '建立了历史上最大连片陆地帝国的征服者。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', epochId: 'mongol-invasion',
      },
      {
        id: 'mongol-invasion-rus',
        title: { en: 'Mongol Invasion of Rus', ru: 'Монгольское нашествие на Русь', ar: 'الغزو المغولي لروس', zh: '蒙古入侵罗斯' },
        teaser: {
          en: "Batu Khan's campaign that shattered Kievan civilization forever.",
          ru: 'Поход Батыя, навсегда разрушивший киевскую цивилизацию.',
          ar: 'حملة باتو خان التي حطّمت حضارة كييف إلى الأبد.',
          zh: '拔都汗的征战永远摧毁了基辅文明。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', epochId: 'mongol-invasion',
      },
      {
        id: 'golden-horde',
        title: { en: 'The Golden Horde', ru: 'Золотая Орда', ar: 'القبيلة الذهبية', zh: '金帐汗国' },
        teaser: {
          en: 'The Mongol successor state that dominated Russian principalities for 240 years.',
          ru: 'Монгольское государство-преемник, господствовавшее над русскими княжествами 240 лет.',
          ar: 'الدولة المغولية الخلف التي هيمنت على الإمارات الروسية لمدة 240 عامًا.',
          zh: '统治俄罗斯各公国达240年的蒙古继承国。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1569731032055-31e63c5c0e6e?w=800&q=80', epochId: 'mongol-invasion',
      },
      {
        id: 'alexander-nevsky',
        title: { en: 'Alexander Nevsky', ru: 'Александр Невский', ar: 'ألكسندر نيفسكي', zh: '亚历山大·涅夫斯基' },
        teaser: {
          en: 'The prince who defeated Swedish and Teutonic invaders while submitting to the Mongols.',
          ru: 'Князь, разбивший шведских и тевтонских захватчиков, но покорившийся монголам.',
          ar: 'الأمير الذي هزم الغزاة السويديين والتيوتون بينما خضع للمغول.',
          zh: '击败瑞典与条顿入侵者、却臣服于蒙古的王公。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', epochId: 'mongol-invasion',
      },
    ],
  },
  {
    id: 'rise-of-moscow',
    title: { en: 'Rise of Moscow', ru: 'Возвышение Москвы', ar: 'صعود موسكو', zh: '莫斯科的崛起' },
    period: '1283–1533',
    topicCount: 14,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80',
    color: '#4A7C59',
    description: {
      en: "Moscow's rise from a minor principality to the center of a unified Russian state.",
      ru: 'Возвышение Москвы от незначительного княжества до центра единого Русского государства.',
      ar: 'صعود موسكو من إمارة صغيرة إلى مركز دولة روسية موحّدة.',
      zh: '莫斯科从一个小公国崛起为统一俄罗斯国家的中心。',
    },
    topics: [
      {
        id: 'ivan-kalita',
        title: { en: 'Ivan Kalita', ru: 'Иван Калита', ar: 'إيفان كاليتا', zh: '伊凡·卡利塔' },
        teaser: {
          en: 'The "Moneybag" prince who laid foundations for Moscow\'s supremacy.',
          ru: 'Князь «Калита», заложивший основы господства Москвы.',
          ar: 'الأمير «كيس المال» الذي أرسى أسس سيادة موسكو.',
          zh: '为莫斯科霸权奠定基础的「钱袋」王公。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80', epochId: 'rise-of-moscow',
      },
      {
        id: 'kulikovo',
        title: { en: 'Battle of Kulikovo', ru: 'Куликовская битва', ar: 'معركة كوليكوفو', zh: '库利科沃战役' },
        teaser: {
          en: "Dmitry Donskoy's decisive 1380 victory that began the end of Mongol dominance.",
          ru: 'Решающая победа Дмитрия Донского в 1380 году, положившая начало концу монгольского господства.',
          ar: 'انتصار دميتري دونسكوي الحاسم عام 1380 الذي بدأ نهاية الهيمنة المغولية.',
          zh: '德米特里·顿斯科伊1380年的决定性胜利，开启了蒙古统治的终结。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', epochId: 'rise-of-moscow',
      },
      {
        id: 'ivan-iii',
        title: { en: 'Ivan III — The Great', ru: 'Иван III', ar: 'إيفان الثالث — العظيم', zh: '伊凡三世——大帝' },
        teaser: {
          en: "The ruler who ended the Mongol Yoke and declared the Russian state's independence.",
          ru: 'Правитель, покончивший с монгольским игом и провозгласивший независимость Русского государства.',
          ar: 'الحاكم الذي أنهى النير المغولي وأعلن استقلال الدولة الروسية.',
          zh: '结束蒙古枷锁、宣告俄罗斯国家独立的统治者。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', epochId: 'rise-of-moscow',
      },
    ],
  },
  {
    id: 'muscovite-state',
    title: { en: 'Muscovite State', ru: 'Московское государство', ar: 'الدولة الموسكوفية', zh: '莫斯科公国' },
    period: '1533–1584',
    topicCount: 12,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1547830961-0d4f88c5fa83?w=800&q=80',
    color: '#8B1A1A',
    description: {
      en: 'The reign of Ivan the Terrible and the birth of the Russian autocracy.',
      ru: 'Правление Ивана Грозного и рождение русского самодержавия.',
      ar: 'حكم إيفان الرهيب وولادة الحكم المطلق الروسي.',
      zh: '伊凡雷帝的统治与俄罗斯专制制度的诞生。',
    },
    topics: [
      {
        id: 'ivan-terrible',
        title: { en: 'Ivan IV — The Terrible', ru: 'Иван IV Грозный', ar: 'إيفان الرابع — الرهيب', zh: '伊凡四世——雷帝' },
        teaser: {
          en: "Russia's first Tsar — brilliant reformer and brutal tyrant.",
          ru: 'Первый царь России — блестящий реформатор и жестокий тиран.',
          ar: 'أول قيصر لروسيا — مصلح لامع وطاغية وحشي.',
          zh: '俄罗斯第一位沙皇——杰出的改革者，也是残暴的暴君。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1547830961-0d4f88c5fa83?w=800&q=80', epochId: 'muscovite-state',
      },
      {
        id: 'oprichnina',
        title: { en: 'The Oprichnina', ru: 'Опричнина', ar: 'الأوبريتشنينا', zh: '特辖制' },
        teaser: {
          en: "Ivan's reign of terror: a separate state within the state.",
          ru: 'Эпоха террора Ивана: отдельное государство внутри государства.',
          ar: 'عهد الرعب لدى إيفان: دولة منفصلة داخل الدولة.',
          zh: '伊凡的恐怖统治：国中之国。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1512799906445-8591ddd96a86?w=800&q=80', epochId: 'muscovite-state',
      },
      {
        id: 'siberia-yermak',
        title: { en: 'Conquest of Siberia by Yermak', ru: 'Завоевание Сибири Ермаком', ar: 'غزو يرماك لسيبيريا', zh: '叶尔马克征服西伯利亚' },
        teaser: {
          en: 'The Cossack adventurer who opened the vast eastern frontier for Russia.',
          ru: 'Казачий атаман, открывший для России обширные восточные земли.',
          ar: 'المغامر القوزاقي الذي فتح الحدود الشرقية الشاسعة لروسيا.',
          zh: '为俄罗斯打开广阔东部边疆的哥萨克冒险家。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80', epochId: 'muscovite-state',
      },
    ],
  },
  {
    id: 'time-of-troubles',
    title: { en: 'Time of Troubles', ru: 'Смутное время', ar: 'زمن الاضطرابات', zh: '混乱时期' },
    period: '1598–1613',
    topicCount: 13,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80',
    color: '#5C4033',
    description: {
      en: 'Dynastic crisis, foreign intervention, and the near-collapse of the Russian state.',
      ru: 'Династический кризис, иностранная интервенция и почти полный крах Русского государства.',
      ar: 'أزمة سلالية وتدخّل أجنبي وانهيار شبه كامل للدولة الروسية.',
      zh: '王朝危机、外国干涉，以及俄罗斯国家几近崩溃。',
    },
    topics: [
      {
        id: 'false-dmitry',
        title: { en: 'False Dmitry I', ru: 'Лжедмитрий I', ar: 'ديمتري المزيف الأول', zh: '伪德米特里一世' },
        teaser: {
          en: 'The mysterious pretender who briefly seized the Russian throne.',
          ru: 'Загадочный самозванец, ненадолго захвативший русский престол.',
          ar: 'المدّعي الغامض الذي استولى لفترة وجيزة على العرش الروسي.',
          zh: '短暂夺取俄罗斯王位的神秘冒名者。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80', epochId: 'time-of-troubles',
      },
      {
        id: 'minin-pozharsky',
        title: { en: 'Minin and Pozharsky', ru: 'Минин и Пожарский', ar: 'مينين وبوجارسكي', zh: '米宁与波扎尔斯基' },
        teaser: {
          en: 'The merchant and prince who rallied Russia against Polish occupation.',
          ru: 'Купец и князь, поднявшие Россию против польской оккупации.',
          ar: 'التاجر والأمير اللذان حشدا روسيا ضد الاحتلال البولندي.',
          zh: '号召俄罗斯反抗波兰占领的商人与王公。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80', epochId: 'time-of-troubles',
      },
    ],
  },
  {
    id: 'peter-the-great',
    title: { en: 'Peter the Great', ru: 'Пётр I', ar: 'بطرس الأكبر', zh: '彼得大帝' },
    period: '1682–1725',
    topicCount: 12,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    color: '#1A4A7A',
    description: {
      en: 'The revolutionary Tsar who transformed Russia into a European empire.',
      ru: 'Революционный царь, превративший Россию в европейскую империю.',
      ar: 'القيصر الثوري الذي حوّل روسيا إلى إمبراطورية أوروبية.',
      zh: '将俄罗斯转变为欧洲帝国的革命性沙皇。',
    },
    topics: [
      {
        id: 'peter-reforms',
        title: { en: 'Reforms of Peter I', ru: 'Реформы Петра I', ar: 'إصلاحات بطرس الأول', zh: '彼得一世的改革' },
        teaser: {
          en: 'How Peter forced Russia to adopt Western culture, military, and bureaucracy.',
          ru: 'Как Пётр заставил Россию перенять западную культуру, армию и бюрократию.',
          ar: 'كيف أجبر بطرس روسيا على تبنّي الثقافة والجيش والبيروقراطية الغربية.',
          zh: '彼得如何迫使俄罗斯采纳西方的文化、军事与官僚体制。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', epochId: 'peter-the-great',
      },
      {
        id: 'saint-petersburg',
        title: { en: 'Founding of Saint Petersburg', ru: 'Основание Санкт-Петербурга', ar: 'تأسيس سانت بطرسبرغ', zh: '圣彼得堡的建立' },
        teaser: {
          en: 'Peter\'s "Window to Europe" built on the Neva marshes by thousands of serfs.',
          ru: '«Окно в Европу» Петра, построенное на невских болотах тысячами крепостных.',
          ar: '«نافذة بطرس على أوروبا» التي بناها آلاف الأقنان على مستنقعات نهر نيفا.',
          zh: '彼得的「通往欧洲之窗」，由数千农奴在涅瓦河沼泽上建成。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800&q=80', epochId: 'peter-the-great',
      },
      {
        id: 'battle-poltava',
        title: { en: 'Battle of Poltava', ru: 'Полтавская битва', ar: 'معركة بولتافا', zh: '波尔塔瓦战役' },
        teaser: {
          en: "Russia's crushing 1709 victory over Sweden that confirmed its great power status.",
          ru: 'Сокрушительная победа России над Швецией в 1709 году, утвердившая её статус великой державы.',
          ar: 'انتصار روسيا الساحق على السويد عام 1709 الذي أكّد مكانتها كقوة عظمى.',
          zh: '俄罗斯1709年对瑞典的决定性胜利，确立了其大国地位。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', epochId: 'peter-the-great',
      },
      {
        id: 'northern-war',
        title: { en: 'Northern War', ru: 'Северная война', ar: 'الحرب الشمالية', zh: '大北方战争' },
        teaser: {
          en: '21 years of war that made Russia the dominant Baltic power.',
          ru: '21 год войны, сделавший Россию господствующей державой на Балтике.',
          ar: '21 عامًا من الحرب جعلت روسيا القوة المهيمنة في بحر البلطيق.',
          zh: '持续21年的战争使俄罗斯成为波罗的海主导强国。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', epochId: 'peter-the-great',
      },
    ],
  },
  {
    id: 'catherine-great',
    title: { en: 'Catherine the Great', ru: 'Екатерина II', ar: 'كاترين العظمى', zh: '叶卡捷琳娜大帝' },
    period: '1762–1796',
    topicCount: 11,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=800&q=80',
    color: '#6B4C9A',
    description: {
      en: "The Enlightened Empress who expanded Russia's borders and culture.",
      ru: 'Просвещённая императрица, расширившая границы и культуру России.',
      ar: 'الإمبراطورة المستنيرة التي وسّعت حدود روسيا وثقافتها.',
      zh: '扩展了俄罗斯疆域与文化的开明女皇。',
    },
    topics: [
      {
        id: 'enlightened-absolutism',
        title: { en: 'Enlightened Absolutism', ru: 'Просвещённый абсолютизм', ar: 'الاستبداد المستنير', zh: '开明专制' },
        teaser: {
          en: "Catherine's attempt to reconcile autocracy with Enlightenment philosophy.",
          ru: 'Попытка Екатерины примирить самодержавие с философией Просвещения.',
          ar: 'محاولة كاترين التوفيق بين الحكم المطلق وفلسفة التنوير.',
          zh: '叶卡捷琳娜调和专制与启蒙哲学的尝试。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=800&q=80', epochId: 'catherine-great',
      },
      {
        id: 'pugachev',
        title: { en: 'Pugachev Uprising', ru: 'Восстание Пугачёва', ar: 'انتفاضة بوغاتشوف', zh: '普加乔夫起义' },
        teaser: {
          en: 'The massive serf rebellion that shook the foundations of Imperial Russia.',
          ru: 'Масштабное крестьянское восстание, потрясшее основы Российской империи.',
          ar: 'تمرّد الأقنان الضخم الذي هزّ أسس روسيا الإمبراطورية.',
          zh: '撼动俄罗斯帝国根基的大规模农奴起义。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', epochId: 'catherine-great',
      },
      {
        id: 'crimea-annexation',
        title: { en: 'Annexation of Crimea', ru: 'Присоединение Крыма', ar: 'ضمّ شبه جزيرة القرم', zh: '吞并克里米亚' },
        teaser: {
          en: 'How Russia secured the strategic Black Sea peninsula in 1783.',
          ru: 'Как Россия закрепила за собой стратегический черноморский полуостров в 1783 году.',
          ar: 'كيف أمّنت روسيا شبه جزيرة البحر الأسود الاستراتيجية عام 1783.',
          zh: '俄罗斯如何在1783年获得战略性的黑海半岛。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=800&q=80', epochId: 'catherine-great',
      },
    ],
  },
  {
    id: 'napoleon',
    title: { en: 'Napoleon & 1812', ru: 'Война 1812 года', ar: 'نابليون و1812', zh: '拿破仑与1812' },
    period: '1801–1825',
    topicCount: 12,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800&q=80',
    color: '#2F5D9F',
    description: {
      en: "The Patriotic War of 1812 and Russia's triumph over Napoleon.",
      ru: 'Отечественная война 1812 года и триумф России над Наполеоном.',
      ar: 'الحرب الوطنية عام 1812 وانتصار روسيا على نابليون.',
      zh: '1812年卫国战争与俄罗斯战胜拿破仑。',
    },
    topics: [
      {
        id: 'patriotic-war',
        title: { en: 'Patriotic War of 1812', ru: 'Отечественная война 1812 года', ar: 'الحرب الوطنية عام 1812', zh: '1812年卫国战争' },
        teaser: {
          en: "Napoleon's catastrophic invasion of Russia and his Grande Armée's destruction.",
          ru: 'Катастрофическое вторжение Наполеона в Россию и гибель его Великой армии.',
          ar: 'غزو نابليون الكارثي لروسيا وتدمير جيشه الكبير.',
          zh: '拿破仑灾难性地入侵俄罗斯及其大军的覆灭。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800&q=80', epochId: 'napoleon',
      },
      {
        id: 'borodino',
        title: { en: 'Battle of Borodino', ru: 'Бородинское сражение', ar: 'معركة بورودينو', zh: '博罗季诺战役' },
        teaser: {
          en: 'The bloodiest single day of the Napoleonic Wars fought near Moscow.',
          ru: 'Самый кровопролитный день Наполеоновских войн под Москвой.',
          ar: 'أكثر أيام الحروب النابليونية دموية بالقرب من موسكو.',
          zh: '拿破仑战争中最血腥的一天，于莫斯科附近爆发。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', epochId: 'napoleon',
      },
      {
        id: 'decembrists',
        title: { en: 'Decembrist Uprising', ru: 'Восстание декабристов', ar: 'انتفاضة الديسمبريين', zh: '十二月党人起义' },
        teaser: {
          en: 'Noble officers who demanded a constitution — and paid with exile or death.',
          ru: 'Дворянские офицеры, потребовавшие конституцию — и поплатившиеся ссылкой или смертью.',
          ar: 'ضباط نبلاء طالبوا بدستور — فدفعوا الثمن نفيًا أو موتًا.',
          zh: '要求宪法的贵族军官——以流放或死亡为代价。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80', epochId: 'napoleon',
      },
    ],
  },
  {
    id: 'great-reforms',
    title: { en: 'Great Reforms', ru: 'Великие реформы', ar: 'الإصلاحات الكبرى', zh: '大改革' },
    period: '1855–1894',
    topicCount: 13,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80',
    color: '#4A7C59',
    description: {
      en: "Alexander II's liberation of the serfs and Russia's transformation.",
      ru: 'Освобождение крестьян Александром II и преобразование России.',
      ar: 'تحرير ألكسندر الثاني للأقنان وتحوّل روسيا.',
      zh: '亚历山大二世解放农奴与俄罗斯的转型。',
    },
    topics: [
      {
        id: 'abolition-serfdom',
        title: { en: 'Abolition of Serfdom 1861', ru: 'Отмена крепостного права', ar: 'إلغاء القنانة عام 1861', zh: '1861年废除农奴制' },
        teaser: {
          en: "The Great Emancipation that freed 23 million serfs — Russia's most important 19th-century reform.",
          ru: 'Великая реформа, освободившая 23 миллиона крепостных — важнейшая реформа России XIX века.',
          ar: 'التحرير العظيم الذي حرّر 23 مليون قنّ — أهم إصلاح روسي في القرن التاسع عشر.',
          zh: '解放2300万农奴的大解放——俄罗斯19世纪最重要的改革。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80', epochId: 'great-reforms',
      },
      {
        id: 'trans-siberian',
        title: { en: 'Trans-Siberian Railway', ru: 'Транссибирская магистраль', ar: 'سكة حديد سيبيريا العابرة', zh: '西伯利亚大铁路' },
        teaser: {
          en: 'The engineering marvel that connected European Russia to the Pacific.',
          ru: 'Инженерное чудо, соединившее европейскую Россию с Тихим океаном.',
          ar: 'الأعجوبة الهندسية التي ربطت روسيا الأوروبية بالمحيط الهادئ.',
          zh: '将欧洲俄罗斯与太平洋相连的工程奇迹。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80', epochId: 'great-reforms',
      },
    ],
  },
  {
    id: 'late-empire',
    title: { en: 'Late Empire & Revolution', ru: 'Поздняя империя', ar: 'الإمبراطورية المتأخرة والثورة', zh: '晚期帝国与革命' },
    period: '1894–1917',
    topicCount: 14,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80',
    color: '#8B1A1A',
    description: {
      en: 'Nicholas II, WWI, and the collapse of the Romanov dynasty.',
      ru: 'Николай II, Первая мировая война и крах династии Романовых.',
      ar: 'نيقولا الثاني والحرب العالمية الأولى وانهيار سلالة رومانوف.',
      zh: '尼古拉二世、第一次世界大战与罗曼诺夫王朝的崩溃。',
    },
    topics: [
      {
        id: 'nicholas-ii',
        title: { en: 'Nicholas II — Last Tsar', ru: 'Николай II', ar: 'نيقولا الثاني — آخر قيصر', zh: '尼古拉二世——末代沙皇' },
        teaser: {
          en: 'The last Romanov emperor: a loving father but tragically ineffective ruler.',
          ru: 'Последний император из династии Романовых: любящий отец, но трагически слабый правитель.',
          ar: 'آخر إمبراطور من آل رومانوف: أب محبّ لكنه حاكم ضعيف على نحو مأساوي.',
          zh: '末代罗曼诺夫皇帝：慈爱的父亲，却是悲剧性无能的统治者。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', epochId: 'late-empire',
      },
      {
        id: 'bloody-sunday',
        title: { en: 'Bloody Sunday', ru: 'Кровавое воскресенье', ar: 'الأحد الدامي', zh: '流血星期日' },
        teaser: {
          en: 'The 1905 massacre of peaceful protesters that shattered trust in the Tsar.',
          ru: 'Расстрел мирных демонстрантов в 1905 году, подорвавший доверие к царю.',
          ar: 'مجزرة المتظاهرين السلميين عام 1905 التي حطّمت الثقة بالقيصر.',
          zh: '1905年对和平抗议者的屠杀，粉碎了人们对沙皇的信任。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1547830961-0d4f88c5fa83?w=800&q=80', epochId: 'late-empire',
      },
      {
        id: 'october-revolution',
        title: { en: 'October Revolution 1917', ru: 'Октябрьская революция', ar: 'ثورة أكتوبر 1917', zh: '1917年十月革命' },
        teaser: {
          en: 'The Bolshevik seizure of power that changed world history forever.',
          ru: 'Захват власти большевиками, навсегда изменивший мировую историю.',
          ar: 'استيلاء البلاشفة على السلطة الذي غيّر تاريخ العالم إلى الأبد.',
          zh: '布尔什维克夺取政权，永远改变了世界历史。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80', epochId: 'late-empire',
      },
      {
        id: 'rasputin',
        title: { en: 'Rasputin', ru: 'Распутин', ar: 'راسبوتين', zh: '拉斯普京' },
        teaser: {
          en: "The mysterious mystic whose influence over the Romanovs helped seal the dynasty's fate.",
          ru: 'Загадочный мистик, чьё влияние на Романовых помогло решить судьбу династии.',
          ar: 'المتصوّف الغامض الذي ساعد نفوذه على آل رومانوف في ختم مصير السلالة.',
          zh: '神秘的术士，他对罗曼诺夫家族的影响加速了王朝的覆灭。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', epochId: 'late-empire',
      },
    ],
  },
  {
    id: 'civil-war',
    title: { en: 'Civil War & Early USSR', ru: 'Гражданская война', ar: 'الحرب الأهلية والاتحاد السوفيتي المبكر', zh: '内战与早期苏联' },
    period: '1917–1924',
    topicCount: 10,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1569731032055-31e63c5c0e6e?w=800&q=80',
    color: '#C94B4B',
    description: {
      en: 'The brutal civil war between Reds and Whites and the birth of the Soviet state.',
      ru: 'Жестокая гражданская война между красными и белыми и рождение советского государства.',
      ar: 'الحرب الأهلية الوحشية بين الحمر والبيض وولادة الدولة السوفيتية.',
      zh: '红军与白军之间残酷的内战与苏维埃国家的诞生。',
    },
    topics: [
      {
        id: 'civil-war-russia',
        title: { en: 'Russian Civil War', ru: 'Гражданская война', ar: 'الحرب الأهلية الروسية', zh: '俄国内战' },
        teaser: {
          en: 'Three years of devastating conflict that claimed more lives than WWI in Russia.',
          ru: 'Три года разрушительного конфликта, унёсшего в России больше жизней, чем Первая мировая.',
          ar: 'ثلاث سنوات من الصراع المدمّر الذي حصد أرواحًا في روسيا أكثر من الحرب العالمية الأولى.',
          zh: '三年毁灭性冲突，在俄罗斯夺去的生命比一战还多。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1569731032055-31e63c5c0e6e?w=800&q=80', epochId: 'civil-war',
      },
      {
        id: 'romanov-execution',
        title: { en: 'Execution of the Romanovs', ru: 'Расстрел Романовых', ar: 'إعدام آل رومانوف', zh: '罗曼诺夫家族的处决' },
        teaser: {
          en: "The tragic end of Russia's 300-year dynasty in a Yekaterinburg basement.",
          ru: 'Трагический конец 300-летней династии России в подвале Екатеринбурга.',
          ar: 'النهاية المأساوية لسلالة روسيا التي دامت 300 عام في قبو يكاترينبورغ.',
          zh: '俄罗斯300年王朝在叶卡捷琳堡地下室的悲惨终结。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1512799906445-8591ddd96a86?w=800&q=80', epochId: 'civil-war',
      },
      {
        id: 'ussr-formation',
        title: { en: 'Formation of the USSR', ru: 'Образование СССР', ar: 'تأسيس الاتحاد السوفيتي', zh: '苏联的成立' },
        teaser: {
          en: 'How the Soviet Union was created from the ruins of the Russian Empire.',
          ru: 'Как из руин Российской империи был создан Советский Союз.',
          ar: 'كيف أُنشئ الاتحاد السوفيتي من أنقاض الإمبراطورية الروسية.',
          zh: '苏联如何在俄罗斯帝国的废墟上建立。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1547830961-0d4f88c5fa83?w=800&q=80', epochId: 'civil-war',
      },
    ],
  },
  {
    id: 'stalins-ussr',
    title: { en: "Stalin's USSR", ru: 'Сталинский СССР', ar: 'الاتحاد السوفيتي في عهد ستالين', zh: '斯大林的苏联' },
    period: '1924–1941',
    topicCount: 9,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    color: '#5C4033',
    description: {
      en: "Stalin's industrialization, collectivization, and the Great Terror.",
      ru: 'Сталинская индустриализация, коллективизация и Большой террор.',
      ar: 'تصنيع ستالين والتجميع الزراعي والإرهاب الكبير.',
      zh: '斯大林的工业化、集体化与大清洗。',
    },
    topics: [
      {
        id: 'collectivization',
        title: { en: 'Collectivization', ru: 'Коллективизация', ar: 'التجميع الزراعي', zh: '农业集体化' },
        teaser: {
          en: 'The forced merging of peasant farms that caused mass famine and millions of deaths.',
          ru: 'Принудительное объединение крестьянских хозяйств, вызвавшее массовый голод и миллионы смертей.',
          ar: 'الدمج القسري لمزارع الفلاحين الذي تسبّب في مجاعة جماعية وملايين الوفيات.',
          zh: '强制合并农民农场，造成大饥荒和数百万人死亡。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', epochId: 'stalins-ussr',
      },
      {
        id: 'great-terror',
        title: { en: 'Great Terror', ru: 'Большой террор', ar: 'الإرهاب الكبير', zh: '大清洗' },
        teaser: {
          en: "Stalin's purges of 1936-38 that eliminated real and imagined political opponents.",
          ru: 'Сталинские чистки 1936–38 годов, уничтожившие реальных и мнимых политических противников.',
          ar: 'تطهيرات ستالين بين 1936-38 التي قضت على المعارضين السياسيين الحقيقيين والمتوهَّمين.',
          zh: '斯大林1936-38年的清洗，铲除了真实和臆想的政治对手。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1512799906445-8591ddd96a86?w=800&q=80', epochId: 'stalins-ussr',
      },
      {
        id: 'gulag',
        title: { en: 'GULAG System', ru: 'ГУЛАГ', ar: 'نظام الغولاغ', zh: '古拉格体系' },
        teaser: {
          en: 'The vast network of labor camps that swallowed millions of Soviet citizens.',
          ru: 'Обширная сеть трудовых лагерей, поглотившая миллионы советских граждан.',
          ar: 'الشبكة الواسعة من معسكرات العمل التي ابتلعت ملايين المواطنين السوفييت.',
          zh: '吞噬数百万苏联公民的庞大劳改营网络。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', epochId: 'stalins-ussr',
      },
    ],
  },
  {
    id: 'great-patriotic-war',
    title: { en: 'Great Patriotic War', ru: 'Великая Отечественная война', ar: 'الحرب الوطنية العظمى', zh: '伟大卫国战争' },
    period: '1941–1945',
    topicCount: 12,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&q=80',
    color: '#1A4A7A',
    description: {
      en: 'The Soviet struggle against Nazi Germany — the most devastating war in human history.',
      ru: 'Борьба СССР против нацистской Германии — самая разрушительная война в истории человечества.',
      ar: 'كفاح السوفييت ضد ألمانيا النازية — أكثر الحروب تدميرًا في تاريخ البشرية.',
      zh: '苏联对抗纳粹德国的斗争——人类历史上最具毁灭性的战争。',
    },
    topics: [
      {
        id: 'operation-barbarossa',
        title: { en: 'Operation Barbarossa', ru: 'Операция Барбаросса', ar: 'عملية بربروسا', zh: '巴巴罗萨行动' },
        teaser: {
          en: "Hitler's massive 1941 invasion that caught the Soviet Union catastrophically unprepared.",
          ru: 'Масштабное вторжение Гитлера в 1941 году, застигшее СССР катастрофически неподготовленным.',
          ar: 'غزو هتلر الضخم عام 1941 الذي فاجأ الاتحاد السوفيتي غير مستعد بشكل كارثي.',
          zh: '希特勒1941年的大规模入侵，使苏联猝不及防、损失惨重。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&q=80', epochId: 'great-patriotic-war',
      },
      {
        id: 'battle-stalingrad',
        title: { en: 'Battle of Stalingrad', ru: 'Сталинградская битва', ar: 'معركة ستالينغراد', zh: '斯大林格勒战役' },
        teaser: {
          en: 'The turning point of WWII: 200 days of savage urban combat that destroyed the German 6th Army.',
          ru: 'Переломный момент Второй мировой: 200 дней жестоких городских боёв, уничтоживших 6-ю немецкую армию.',
          ar: 'نقطة تحوّل الحرب العالمية الثانية: 200 يوم من القتال الحضري الشرس دمّر الجيش الألماني السادس.',
          zh: '二战的转折点：200天残酷的城市战摧毁了德国第六集团军。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', epochId: 'great-patriotic-war',
      },
      {
        id: 'siege-leningrad',
        title: { en: 'Siege of Leningrad', ru: 'Блокада Ленинграда', ar: 'حصار لينينغراد', zh: '列宁格勒围城战' },
        teaser: {
          en: '872 days of siege that killed over a million civilians through starvation and bombardment.',
          ru: '872 дня блокады, унёсшие жизни более миллиона мирных жителей от голода и бомбёжек.',
          ar: '872 يومًا من الحصار قتلت أكثر من مليون مدني جوعًا وقصفًا.',
          zh: '872天的围困，因饥饿和轰炸夺去了超过一百万平民的生命。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', epochId: 'great-patriotic-war',
      },
      {
        id: 'victory-day',
        title: { en: 'Victory Day — May 9, 1945', ru: 'День Победы', ar: 'يوم النصر — 9 مايو 1945', zh: '胜利日——1945年5月9日' },
        teaser: {
          en: 'The Soviet triumph over Nazi Germany and the most sacred holiday in Russian memory.',
          ru: 'Триумф СССР над нацистской Германией и самый священный праздник в памяти России.',
          ar: 'انتصار السوفييت على ألمانيا النازية وأقدس عطلة في الذاكرة الروسية.',
          zh: '苏联战胜纳粹德国，是俄罗斯记忆中最神圣的节日。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', epochId: 'great-patriotic-war',
      },
    ],
  },
  {
    id: 'cold-war',
    title: { en: 'Cold War & Space Race', ru: 'Холодная война', ar: 'الحرب الباردة وسباق الفضاء', zh: '冷战与太空竞赛' },
    period: '1945–1985',
    topicCount: 12,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
    color: '#2F5D9F',
    description: {
      en: 'The ideological struggle with the West and the triumphant Soviet space program.',
      ru: 'Идеологическая борьба с Западом и триумфальная советская космическая программа.',
      ar: 'الصراع الأيديولوجي مع الغرب وبرنامج الفضاء السوفيتي الظافر.',
      zh: '与西方的意识形态斗争和苏联辉煌的太空计划。',
    },
    topics: [
      {
        id: 'sputnik',
        title: { en: 'Sputnik — First Satellite', ru: 'Спутник', ar: 'سبوتنيك — أول قمر صناعي', zh: '斯普特尼克——第一颗卫星' },
        teaser: {
          en: 'The beeping metal sphere that launched the Space Age and shocked the West.',
          ru: 'Пищащий металлический шар, открывший космическую эру и потрясший Запад.',
          ar: 'الكرة المعدنية التي أطلقت عصر الفضاء وصدمت الغرب.',
          zh: '发出哔哔声的金属球，开启了太空时代并震惊西方。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80', epochId: 'cold-war',
      },
      {
        id: 'gagarin',
        title: { en: 'Yuri Gagarin — First in Space', ru: 'Юрий Гагарин', ar: 'يوري غاغارين — أول إنسان في الفضاء', zh: '尤里·加加林——首位进入太空者' },
        teaser: {
          en: 'On April 12, 1961, a Soviet cosmonaut became the first human to orbit the Earth.',
          ru: '12 апреля 1961 года советский космонавт стал первым человеком на орбите Земли.',
          ar: 'في 12 أبريل 1961، أصبح رائد فضاء سوفيتي أول إنسان يدور حول الأرض.',
          zh: '1961年4月12日，一名苏联宇航员成为首位环绕地球的人类。',
        },
        difficulty: 'Beginner', xp: 10, image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&q=80', epochId: 'cold-war',
      },
      {
        id: 'cuban-crisis',
        title: { en: 'Cuban Missile Crisis', ru: 'Карибский кризис', ar: 'أزمة الصواريخ الكوبية', zh: '古巴导弹危机' },
        teaser: {
          en: 'The 13 days in 1962 when nuclear war seemed inevitable.',
          ru: '13 дней 1962 года, когда ядерная война казалась неизбежной.',
          ar: 'الأيام الـ13 عام 1962 عندما بدت الحرب النووية حتمية.',
          zh: '1962年那13天，核战争似乎不可避免。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1512799906445-8591ddd96a86?w=800&q=80', epochId: 'cold-war',
      },
      {
        id: 'khrushchev-thaw',
        title: { en: "Khrushchev's Thaw", ru: 'Хрущёвская оттепель', ar: 'ذوبان خروتشوف', zh: '赫鲁晓夫解冻' },
        teaser: {
          en: "The brief liberalization after Stalin's death that allowed dissent to surface.",
          ru: 'Краткая либерализация после смерти Сталина, позволившая проявиться инакомыслию.',
          ar: 'التحرّر القصير بعد وفاة ستالين الذي سمح للمعارضة بالظهور.',
          zh: '斯大林死后短暂的自由化，让异见得以浮现。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', epochId: 'cold-war',
      },
    ],
  },
  {
    id: 'perestroika',
    title: { en: 'Perestroika & Collapse', ru: 'Перестройка', ar: 'البيريسترويكا والانهيار', zh: '改革与解体' },
    period: '1985–1991',
    topicCount: 11,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=800&q=80',
    color: '#C94B4B',
    description: {
      en: "Gorbachev's reforms and the spectacular dissolution of the Soviet Union.",
      ru: 'Реформы Горбачёва и впечатляющий распад Советского Союза.',
      ar: 'إصلاحات غورباتشوف والتفكّك المذهل للاتحاد السوفيتي.',
      zh: '戈尔巴乔夫的改革与苏联惊人的解体。',
    },
    topics: [
      {
        id: 'perestroika-topic',
        title: { en: 'Perestroika', ru: 'Перестройка', ar: 'البيريسترويكا', zh: '改革重建' },
        teaser: {
          en: "Gorbachev's policy of restructuring that unleashed forces he could not control.",
          ru: 'Политика перестройки Горбачёва, высвободившая силы, которые он не смог контролировать.',
          ar: 'سياسة إعادة الهيكلة لغورباتشوف التي أطلقت قوى لم يستطع السيطرة عليها.',
          zh: '戈尔巴乔夫的改革政策，释放出他无法控制的力量。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=800&q=80', epochId: 'perestroika',
      },
      {
        id: 'chernobyl',
        title: { en: 'Chernobyl Disaster', ru: 'Чернобыльская катастрофа', ar: 'كارثة تشيرنوبيل', zh: '切尔诺贝利灾难' },
        teaser: {
          en: "The 1986 nuclear explosion that exposed the Soviet system's fatal flaws.",
          ru: 'Ядерный взрыв 1986 года, обнаживший фатальные недостатки советской системы.',
          ar: 'الانفجار النووي عام 1986 الذي كشف عيوب النظام السوفيتي القاتلة.',
          zh: '1986年的核爆炸，暴露了苏联体制的致命缺陷。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', epochId: 'perestroika',
      },
      {
        id: 'ussr-dissolution',
        title: { en: 'Dissolution of the USSR', ru: 'Распад СССР', ar: 'تفكّك الاتحاد السوفيتي', zh: '苏联解体' },
        teaser: {
          en: 'On December 25, 1991, the Soviet flag was lowered over the Kremlin for the last time.',
          ru: '25 декабря 1991 года советский флаг в последний раз спустили над Кремлём.',
          ar: 'في 25 ديسمبر 1991، أُنزل العلم السوفيتي فوق الكرملين للمرة الأخيرة.',
          zh: '1991年12月25日，苏联国旗最后一次从克里姆林宫降下。',
        },
        difficulty: 'Advanced', xp: 20, image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80', epochId: 'perestroika',
      },
    ],
  },
  {
    id: 'modern-russia',
    title: { en: 'Modern Russia', ru: 'Современная Россия', ar: 'روسيا الحديثة', zh: '现代俄罗斯' },
    period: '1991–Present',
    topicCount: 8,
    progress: 0,
    coverImage: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&q=80',
    color: '#2F5D9F',
    description: {
      en: "From the chaos of the 1990s to Russia's role in the 21st century.",
      ru: 'От хаоса 1990-х до роли России в XXI веке.',
      ar: 'من فوضى التسعينيات إلى دور روسيا في القرن الحادي والعشرين.',
      zh: '从1990年代的混乱到俄罗斯在21世纪的角色。',
    },
    topics: [
      {
        id: 'yeltsin',
        title: { en: 'Boris Yeltsin', ru: 'Борис Ельцин', ar: 'بوريس يلتسين', zh: '鲍里斯·叶利钦' },
        teaser: {
          en: 'The first president of the Russian Federation who navigated the turbulent 1990s.',
          ru: 'Первый президент Российской Федерации, проведший страну через бурные 1990-е.',
          ar: 'أول رئيس للاتحاد الروسي الذي قاد البلاد عبر تسعينيات مضطربة.',
          zh: '俄罗斯联邦首任总统，引领国家度过动荡的1990年代。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&q=80', epochId: 'modern-russia',
      },
      {
        id: 'russia-1990s',
        title: { en: 'Russia in the 1990s', ru: 'Россия в 1990-е годы', ar: 'روسيا في التسعينيات', zh: '1990年代的俄罗斯' },
        teaser: {
          en: 'Economic shock therapy, oligarchs, and the painful birth of Russian capitalism.',
          ru: 'Экономическая шоковая терапия, олигархи и болезненное рождение российского капитализма.',
          ar: 'العلاج بالصدمة الاقتصادية، والأوليغارش، والولادة المؤلمة للرأسمالية الروسية.',
          zh: '经济休克疗法、寡头，以及俄罗斯资本主义的痛苦诞生。',
        },
        difficulty: 'Intermediate', xp: 15, image: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?w=800&q=80', epochId: 'modern-russia',
      },
    ],
  },
];

export const timelineEvents: { year: number; title: LocalizedText; epochId: string }[] = [
  { year: 862, title: { en: 'Calling of the Varangians', ru: 'Призвание варягов', ar: 'دعوة الفارانغيين', zh: '瓦良格人的召唤' }, epochId: 'ancient-rus' },
  { year: 988, title: { en: 'Baptism of Rus', ru: 'Крещение Руси', ar: 'تعميد روس', zh: '罗斯受洗' }, epochId: 'ancient-rus' },
  { year: 1237, title: { en: 'Mongol Invasion Begins', ru: 'Начало монгольского нашествия', ar: 'بداية الغزو المغولي', zh: '蒙古入侵开始' }, epochId: 'mongol-invasion' },
  { year: 1380, title: { en: 'Battle of Kulikovo', ru: 'Куликовская битва', ar: 'معركة كوليكوفو', zh: '库利科沃战役' }, epochId: 'rise-of-moscow' },
  { year: 1480, title: { en: 'End of Mongol Yoke', ru: 'Конец монгольского ига', ar: 'نهاية النير المغولي', zh: '蒙古枷锁的终结' }, epochId: 'rise-of-moscow' },
  { year: 1547, title: { en: 'Ivan the Terrible Crowned Tsar', ru: 'Иван Грозный венчан на царство', ar: 'تتويج إيفان الرهيب قيصرًا', zh: '伊凡雷帝加冕为沙皇' }, epochId: 'muscovite-state' },
  { year: 1613, title: { en: 'Romanov Dynasty Begins', ru: 'Начало династии Романовых', ar: 'بداية سلالة رومانوف', zh: '罗曼诺夫王朝开始' }, epochId: 'time-of-troubles' },
  { year: 1703, title: { en: 'St. Petersburg Founded', ru: 'Основание Санкт-Петербурга', ar: 'تأسيس سانت بطرسبرغ', zh: '圣彼得堡建立' }, epochId: 'peter-the-great' },
  { year: 1721, title: { en: 'Russian Empire Proclaimed', ru: 'Провозглашение Российской империи', ar: 'إعلان الإمبراطورية الروسية', zh: '俄罗斯帝国宣告成立' }, epochId: 'peter-the-great' },
  { year: 1762, title: { en: 'Catherine the Great Rises', ru: 'Восшествие Екатерины Великой', ar: 'صعود كاترين العظمى', zh: '叶卡捷琳娜大帝登基' }, epochId: 'catherine-great' },
  { year: 1812, title: { en: 'Napoleon Invades Russia', ru: 'Наполеон вторгается в Россию', ar: 'نابليون يغزو روسيا', zh: '拿破仑入侵俄罗斯' }, epochId: 'napoleon' },
  { year: 1861, title: { en: 'Serfs Emancipated', ru: 'Отмена крепостного права', ar: 'تحرير الأقنان', zh: '农奴获得解放' }, epochId: 'great-reforms' },
  { year: 1917, title: { en: 'October Revolution', ru: 'Октябрьская революция', ar: 'ثورة أكتوبر', zh: '十月革命' }, epochId: 'late-empire' },
  { year: 1922, title: { en: 'USSR Founded', ru: 'Образование СССР', ar: 'تأسيس الاتحاد السوفيتي', zh: '苏联成立' }, epochId: 'civil-war' },
  { year: 1941, title: { en: 'Operation Barbarossa', ru: 'Операция Барбаросса', ar: 'عملية بربروسا', zh: '巴巴罗萨行动' }, epochId: 'great-patriotic-war' },
  { year: 1945, title: { en: 'Victory Day', ru: 'День Победы', ar: 'يوم النصر', zh: '胜利日' }, epochId: 'great-patriotic-war' },
  { year: 1961, title: { en: 'Gagarin in Space', ru: 'Гагарин в космосе', ar: 'غاغارين في الفضاء', zh: '加加林进入太空' }, epochId: 'cold-war' },
  { year: 1991, title: { en: 'USSR Dissolves', ru: 'Распад СССР', ar: 'تفكّك الاتحاد السوفيتي', zh: '苏联解体' }, epochId: 'perestroika' },
];
