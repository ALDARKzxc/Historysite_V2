import type { LocalizedText, Topic } from './epochs';
import { kulikovoArticle } from './articles/kulikovo';
import { patrioticWarArticle } from './articles/patriotic-war';
import { abolitionSerfdomArticle } from './articles/abolition-serfdom';
import { octoberRevolutionArticle } from './articles/october-revolution';
import { peterReformsArticle } from './articles/peter-reforms';
import { operationBarbarossaArticle } from './articles/operation-barbarossa';

export interface ArticleSection {
  heading: LocalizedText;
  content: LocalizedText;
}

export interface ArticleData {
  id: string;
  title: LocalizedText;
  epochId: string;
  epochTitle: LocalizedText;
  heroImage: string;
  leadParagraph: LocalizedText;
  summary: LocalizedText;
  sections: ArticleSection[];
  keyDates: { year: string; event: LocalizedText }[];
  vocabulary: { word: string; translation: LocalizedText; pronunciation: string }[];
  relatedTopics: string[];
}

export const articles: Record<string, ArticleData> = {
  'baptism-rus': {
    id: 'baptism-rus',
    title: { en: 'Baptism of Rus', ru: 'Крещение Руси', ar: 'تعميد روس', zh: '罗斯受洗' },
    epochId: 'ancient-rus',
    epochTitle: { en: 'Ancient Rus', ru: 'Древняя Русь', ar: 'روس القديمة', zh: '古代罗斯' },
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lebedev_baptism.jpg/960px-Lebedev_baptism.jpg',
    leadParagraph: {
      en: 'In 988 AD, Prince Vladimir of Kiev made one of the most consequential decisions in world history — he chose Orthodox Christianity as the state religion of Kievan Rus, forever shaping Russian civilization, culture, and identity.',
      ru: 'В 988 году князь Владимир Киевский принял одно из самых судьбоносных решений в мировой истории — он выбрал православное христианство государственной религией Киевской Руси, навсегда определив русскую цивилизацию, культуру и самосознание.',
      ar: 'في عام 988 ميلادي، اتخذ الأمير فلاديمير الكييفي أحد أكثر القرارات تأثيرًا في تاريخ العالم — إذ اختار المسيحية الأرثوذكسية دينًا رسميًا لروس كييف، مشكّلًا إلى الأبد الحضارة الروسية وثقافتها وهويتها.',
      zh: '公元988年，基辅的弗拉基米尔大公作出了世界历史上影响最深远的决定之一——他选择东正教作为基辅罗斯的国教，永远塑造了俄罗斯的文明、文化与认同。',
    },
    summary: {
      en: 'In 988, Prince Vladimir the Great converted Kievan Rus to Orthodox Christianity, ending centuries of paganism. This single act created the spiritual and cultural foundations that would define Russian civilization for over a millennium.',
      ru: 'В 988 году князь Владимир Великий обратил Киевскую Русь в православие, положив конец векам язычества. Этот единственный поступок создал духовные и культурные основы, определившие русскую цивилизацию более чем на тысячелетие.',
      ar: 'في عام 988، حوّل الأمير فلاديمير العظيم روس كييف إلى المسيحية الأرثوذكسية، منهيًا قرونًا من الوثنية. خلق هذا الفعل الوحيد الأسس الروحية والثقافية التي ستحدّد الحضارة الروسية لأكثر من ألف عام.',
      zh: '988年，弗拉基米尔大帝使基辅罗斯皈依东正教，结束了数百年的异教信仰。这一举动奠定了此后一千多年俄罗斯文明的精神与文化基础。',
    },
    sections: [
      {
        heading: { en: 'The Decision That Changed Everything', ru: 'Решение, изменившее всё', ar: 'القرار الذي غيّر كل شيء', zh: '改变一切的决定' },
        content: {
          en: 'Prince Vladimir I of Kiev faced a pivotal choice. According to the Primary Chronicle, he sent envoys to study the major religions of his time: Islam from the Bulgars of the Volga, Judaism from the Khazars, Latin Christianity from the Germanic peoples, and Orthodox Christianity from Byzantium. The envoys were reportedly so overwhelmed by the beauty of the Hagia Sophia in Constantinople that they reported: "We knew not whether we were in heaven or on earth." This account, whether literally true or legendary, captures the cultural magnetism of Byzantine civilization on the Rus elite.',
          ru: 'Князь Владимир I Киевский стоял перед судьбоносным выбором. По «Повести временных лет», он отправил послов изучить основные религии своего времени: ислам от волжских булгар, иудаизм от хазар, латинское христианство от германских народов и православное христианство из Византии. По преданию, послы были настолько потрясены красотой Святой Софии в Константинополе, что сообщили: «Не знали мы, на небе мы были или на земле». Это предание, буквально правдивое или легендарное, передаёт культурную притягательность византийской цивилизации для русской знати.',
          ar: 'وقف الأمير فلاديمير الأول الكييفي أمام خيار مصيري. ووفقًا لـ«السجل الأولي»، أرسل مبعوثين لدراسة الأديان الكبرى في عصره: الإسلام من بلغار الفولغا، واليهودية من الخزر، والمسيحية اللاتينية من الشعوب الجرمانية، والمسيحية الأرثوذكسية من بيزنطة. ويُروى أن المبعوثين بُهروا بجمال آيا صوفيا في القسطنطينية لدرجة أنهم قالوا: «لم نعرف أكنّا في السماء أم على الأرض». وهذه الرواية، سواء كانت حقيقية حرفيًا أم أسطورية، تجسّد الجاذبية الثقافية للحضارة البيزنطية لدى نخبة روس.',
          zh: '基辅大公弗拉基米尔一世面临着关键的抉择。据《往年纪事》记载，他派遣使者去考察当时的主要宗教：来自伏尔加保加尔人的伊斯兰教、来自可萨人的犹太教、来自日耳曼民族的拉丁基督教，以及来自拜占庭的东正教。据说使者们被君士坦丁堡圣索菲亚大教堂的美所震撼，回报说：「我们不知身在天堂还是人间。」无论这段记载是真实还是传说，都体现了拜占庭文明对罗斯精英的文化吸引力。',
        },
      },
      {
        heading: { en: 'The Mass Baptism of Kiev', ru: 'Массовое крещение Киева', ar: 'التعميد الجماعي لكييف', zh: '基辅的大规模受洗' },
        content: {
          en: "Vladimir's decision was implemented swiftly and forcefully. In 988, the population of Kiev was ordered to appear at the Dnieper River. Priests from Constantinople performed a mass baptism while Byzantine clergy led the ceremonies. Pagan idols — including the great statue of Perun, the thunder god — were dragged through the streets, beaten, and thrown into the Dnieper. Churches were ordered built on the sites of former pagan shrines. The Desyatinnaya Church (Church of the Tithes), completed around 996, became the first stone church in Kievan Rus.",
          ru: 'Решение Владимира было осуществлено быстро и решительно. В 988 году населению Киева было велено явиться на берег Днепра. Священники из Константинополя провели массовое крещение, а византийское духовенство руководило церемониями. Языческих идолов — включая огромную статую Перуна, бога грома — протащили по улицам, избили и бросили в Днепр. На местах прежних языческих святилищ было велено строить церкви. Десятинная церковь, завершённая около 996 года, стала первым каменным храмом Киевской Руси.',
          ar: 'نُفّذ قرار فلاديمير بسرعة وحزم. ففي عام 988، أُمر سكان كييف بالحضور إلى نهر دنيبر. وقام كهنة من القسطنطينية بتعميد جماعي بينما قاد رجال الدين البيزنطيون المراسم. وجُرّت الأصنام الوثنية — بما فيها التمثال الكبير لبيرون، إله الرعد — في الشوارع وضُربت وأُلقيت في نهر دنيبر. وأُمر ببناء الكنائس في مواقع المعابد الوثنية السابقة. وأصبحت كنيسة العشور، التي اكتملت نحو عام 996، أول كنيسة حجرية في روس كييف.',
          zh: '弗拉基米尔的决定迅速而强力地付诸实施。988年，基辅居民被命令到第聂伯河边集合。来自君士坦丁堡的神父主持了大规模洗礼，拜占庭神职人员主持仪式。异教偶像——包括雷神佩伦的巨大雕像——被拖过街道、捶打，并投入第聂伯河。当局下令在原异教神庙的旧址上修建教堂。约996年建成的什一教堂成为基辅罗斯第一座石砌教堂。',
        },
      },
      {
        heading: { en: 'The Legacy of 988', ru: 'Наследие 988 года', ar: 'إرث عام 988', zh: '988年的遗产' },
        content: {
          en: 'The consequences of the Baptism of Rus reverberated for centuries. Culturally, Kievan Rus received the Byzantine tradition of icon painting, church architecture, and religious literature. The Cyrillic alphabet, already developed by Saints Cyril and Methodius for the Slavic peoples, spread throughout Rus. Monasteries became centers of learning and manuscript production. Politically, the conversion strengthened ties with Byzantium, leading to dynastic marriages and alliances. The Orthodox Church also provided the institutional framework that helped preserve Russian culture during the later Mongol period.',
          ru: 'Последствия Крещения Руси отзывались столетиями. В культурном плане Киевская Русь восприняла византийскую традицию иконописи, церковной архитектуры и религиозной литературы. Кириллица, уже созданная святыми Кириллом и Мефодием для славянских народов, распространилась по всей Руси. Монастыри стали центрами учёности и переписки книг. В политическом плане принятие христианства укрепило связи с Византией, приведя к династическим бракам и союзам. Православная церковь также дала институциональную основу, помогшую сохранить русскую культуру в период монгольского владычества.',
          ar: 'تردّدت أصداء عواقب تعميد روس على مدى قرون. ثقافيًا، تلقّت روس كييف التقليد البيزنطي في رسم الأيقونات وعمارة الكنائس والأدب الديني. وانتشرت الأبجدية السيريلية، التي طوّرها القديسان كيريل وميثوديوس للشعوب السلافية، في أنحاء روس. وأصبحت الأديرة مراكز للعلم وإنتاج المخطوطات. وسياسيًا، عزّز اعتناق المسيحية الروابط مع بيزنطة، مما أدى إلى زيجات وتحالفات سلالية. كما وفّرت الكنيسة الأرثوذكسية الإطار المؤسسي الذي ساعد في الحفاظ على الثقافة الروسية خلال الفترة المغولية اللاحقة.',
          zh: '罗斯受洗的影响延续了数百年。在文化上，基辅罗斯继承了拜占庭的圣像画、教堂建筑和宗教文学传统。由圣西里尔和美多德为斯拉夫民族创制的西里尔字母传遍罗斯各地。修道院成为学术与抄本制作的中心。在政治上，皈依加强了与拜占庭的联系，促成了王朝联姻与结盟。东正教会还提供了制度框架，帮助在后来的蒙古时期保存了俄罗斯文化。',
        },
      },
    ],
    keyDates: [
      { year: '988', event: { en: 'Mass baptism of Kievans in the Dnieper', ru: 'Массовое крещение киевлян в Днепре', ar: 'التعميد الجماعي لأهل كييف في نهر دنيبر', zh: '基辅人在第聂伯河大规模受洗' } },
      { year: '989', event: { en: 'Vladimir demolishes pagan temples', ru: 'Владимир разрушает языческие капища', ar: 'فلاديمير يهدم المعابد الوثنية', zh: '弗拉基米尔拆毁异教神庙' } },
      { year: '996', event: { en: 'Church of the Tithes completed in Kiev', ru: 'Завершение Десятинной церкви в Киеве', ar: 'اكتمال كنيسة العشور في كييف', zh: '什一教堂在基辅建成' } },
      { year: '1037', event: { en: 'St. Sophia Cathedral completed by Yaroslav the Wise', ru: 'Ярослав Мудрый завершает Софийский собор', ar: 'اكتمال كاتدرائية القديسة صوفيا على يد ياروسلاف الحكيم', zh: '智者雅罗斯拉夫建成圣索菲亚大教堂' } },
    ],
    vocabulary: [
      { word: 'Крещение', translation: { en: 'Baptism / Christening', ru: 'Крещение', ar: 'التعميد', zh: '受洗' }, pronunciation: 'kresh-CHE-ni-ye' },
      { word: 'Православие', translation: { en: 'Orthodox Christianity', ru: 'Православие', ar: 'الأرثوذكسية', zh: '东正教' }, pronunciation: 'pra-vo-SLA-vi-ye' },
      { word: 'Купель', translation: { en: 'Baptismal font', ru: 'Купель', ar: 'جرن المعمودية', zh: '洗礼盆' }, pronunciation: 'ku-PEL' },
      { word: 'Язычество', translation: { en: 'Paganism', ru: 'Язычество', ar: 'الوثنية', zh: '异教' }, pronunciation: 'ya-ZY-che-stvo' },
      { word: 'Монастырь', translation: { en: 'Monastery', ru: 'Монастырь', ar: 'الدير', zh: '修道院' }, pronunciation: 'mo-na-STYR' },
      { word: 'Летопись', translation: { en: 'Chronicle / Annals', ru: 'Летопись', ar: 'السجل / الحوليات', zh: '编年史' }, pronunciation: 'LE-to-pis' },
    ],
    relatedTopics: ['yaroslav-wise', 'kievan-rus', 'rurik'],
  },
  'battle-stalingrad': {
    id: 'battle-stalingrad',
    title: { en: 'Battle of Stalingrad', ru: 'Сталинградская битва', ar: 'معركة ستالينغراد', zh: '斯大林格勒战役' },
    epochId: 'great-patriotic-war',
    epochTitle: { en: 'Great Patriotic War', ru: 'Великая Отечественная война', ar: 'الحرب الوطنية العظمى', zh: '伟大卫国战争' },
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%D0%A0%D0%B0%D1%81%D1%87%D0%B5%D1%82_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%B9_76%2C2-%D0%BC%D0%BC_%D0%BF%D1%83%D1%88%D0%BA%D0%B8_%D0%97%D0%B8%D0%A1-3_%D0%B2%D0%B5%D0%B4%D0%B5%D1%82_%D0%BE%D0%B3%D0%BE%D0%BD%D1%8C_%D0%B2_%D0%A1%D1%82%D0%B0%D0%BB%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B5._%D0%9D%D0%BE%D1%8F%D0%B1%D1%80%D1%8C_1942_%D0%B3.jpg/960px-%D0%A0%D0%B0%D1%81%D1%87%D0%B5%D1%82_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%B9_76%2C2-%D0%BC%D0%BC_%D0%BF%D1%83%D1%88%D0%BA%D0%B8_%D0%97%D0%B8%D0%A1-3_%D0%B2%D0%B5%D0%B4%D0%B5%D1%82_%D0%BE%D0%B3%D0%BE%D0%BD%D1%8C_%D0%B2_%D0%A1%D1%82%D0%B0%D0%BB%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B5._%D0%9D%D0%BE%D1%8F%D0%B1%D1%80%D1%8C_1942_%D0%B3.jpg',
    leadParagraph: {
      en: "From August 1942 to February 1943, the Battle of Stalingrad became the single deadliest military engagement in human history — and the turning point that would ultimately seal Nazi Germany's fate.",
      ru: 'С августа 1942 по февраль 1943 года Сталинградская битва стала самым кровопролитным военным сражением в истории человечества — и переломным моментом, в конечном счёте решившим судьбу нацистской Германии.',
      ar: 'من أغسطس 1942 إلى فبراير 1943، أصبحت معركة ستالينغراد أشد المواجهات العسكرية فتكًا في تاريخ البشرية — ونقطة التحوّل التي ختمت في النهاية مصير ألمانيا النازية.',
      zh: '从1942年8月到1943年2月，斯大林格勒战役成为人类历史上最致命的一场军事交战——也是最终决定纳粹德国命运的转折点。',
    },
    summary: {
      en: 'The Battle of Stalingrad (1942-43) was the bloodiest battle in history, killing nearly two million soldiers and civilians. The Soviet encirclement of the German 6th Army marked the strategic turning point of World War II.',
      ru: 'Сталинградская битва (1942–43) стала самой кровопролитной в истории, унеся жизни почти двух миллионов солдат и мирных жителей. Окружение советскими войсками 6-й немецкой армии стало стратегическим переломом Второй мировой войны.',
      ar: 'كانت معركة ستالينغراد (1942-43) أكثر المعارك دموية في التاريخ، إذ قتلت نحو مليوني جندي ومدني. وشكّل تطويق السوفييت للجيش الألماني السادس نقطة التحوّل الاستراتيجية في الحرب العالمية الثانية.',
      zh: '斯大林格勒战役（1942-43）是历史上最血腥的战役，造成近两百万士兵和平民丧生。苏联对德国第六集团军的合围标志着第二次世界大战的战略转折点。',
    },
    sections: [
      {
        heading: { en: 'The City That Must Not Fall', ru: 'Город, который нельзя сдать', ar: 'المدينة التي يجب ألا تسقط', zh: '绝不能失守的城市' },
        content: {
          en: 'Hitler\'s obsession with capturing Stalingrad went beyond its strategic value as an industrial city and key point on the Volga River. The city bore Stalin\'s name, making its capture a psychological blow to Soviet morale. For Stalin, the order was absolute: "Not one step back." NKVD units were placed behind Soviet lines to shoot any soldier who retreated without orders. Both dictators had staked their prestige on this city, turning it into a meat grinder of extraordinary proportions.',
          ru: 'Одержимость Гитлера взятием Сталинграда выходила за пределы его стратегического значения как промышленного города и ключевого пункта на Волге. Город носил имя Сталина, что делало его захват психологическим ударом по советскому боевому духу. Для Сталина приказ был абсолютным: «Ни шагу назад». Заградотряды НКВД ставились позади советских позиций, чтобы расстреливать любого солдата, отступившего без приказа. Оба диктатора поставили на этот город свой престиж, превратив его в мясорубку чудовищных масштабов.',
          ar: 'تجاوز هوس هتلر بالاستيلاء على ستالينغراد قيمتها الاستراتيجية كمدينة صناعية ونقطة رئيسية على نهر الفولغا. فقد حملت المدينة اسم ستالين، مما جعل سقوطها ضربة نفسية للمعنويات السوفيتية. وبالنسبة لستالين كان الأمر قاطعًا: «ولا خطوة إلى الوراء». ووُضعت وحدات الـNKVD خلف الخطوط السوفيتية لإطلاق النار على أي جندي ينسحب دون أوامر. لقد راهن كلا الديكتاتورَين بمكانتهما على هذه المدينة، فحوّلاها إلى مفرمة لحم بأبعاد هائلة.',
          zh: '希特勒对攻占斯大林格勒的执念，超越了它作为工业城市和伏尔加河要冲的战略价值。这座城市以斯大林命名，攻占它将对苏联士气造成心理打击。对斯大林而言，命令是绝对的：「绝不后退一步。」内务人民委员部的部队被部署在苏军阵线之后，射杀任何未经命令擅自撤退的士兵。两位独裁者都把声望押在这座城市上，使其变成一台规模惊人的绞肉机。',
        },
      },
      {
        heading: { en: 'Hell in the Streets', ru: 'Ад на улицах', ar: 'الجحيم في الشوارع', zh: '街道上的地狱' },
        content: {
          en: 'The battle became infamous for its ferocious close-quarters combat. Soviet commander Vasily Chuikov developed the tactic of "hugging the enemy" — keeping Soviet forces so close to German lines that Luftwaffe bombers could not attack without hitting their own troops. Buildings changed hands multiple times in a single day. The Mamaev Kurgan hill, commanding the city, was so saturated with metal that after the battle, a metal detector found over 1,200 pieces of shrapnel per square meter. Sniper Vasily Zaitsev became a hero of the battle with 242 confirmed kills.',
          ru: 'Битва прославилась своими яростными ближними боями. Советский командующий Василий Чуйков разработал тактику «прижимания к врагу» — удержания советских войск так близко к немецким позициям, что бомбардировщики люфтваффе не могли атаковать, не задев своих. Здания по нескольку раз за день переходили из рук в руки. Мамаев курган, господствующий над городом, был так насыщен металлом, что после битвы металлоискатель находил более 1200 осколков на квадратный метр. Снайпер Василий Зайцев стал героем битвы с 242 подтверждёнными убийствами.',
          ar: 'اشتهرت المعركة بقتالها الضاري عن قرب. طوّر القائد السوفيتي فاسيلي تشويكوف تكتيك «احتضان العدو» — إبقاء القوات السوفيتية قريبة جدًا من الخطوط الألمانية بحيث لا تستطيع قاذفات اللوفتفافه الهجوم دون إصابة قواتها. تبدّلت السيطرة على المباني عدة مرات في اليوم الواحد. وكان تل مامايف كورغان المُشرف على المدينة مشبعًا بالمعدن لدرجة أن جهاز كشف المعادن وجد بعد المعركة أكثر من 1200 شظية في المتر المربع. وأصبح القناص فاسيلي زايتسيف بطلًا للمعركة بـ242 قتيلًا مؤكدًا.',
          zh: '这场战役以其凶猛的近距离作战而臭名昭著。苏联指挥官瓦西里·崔可夫发明了「抱住敌人」的战术——让苏军紧贴德军阵线，使德国空军的轰炸机无法在不误伤自己人的情况下发动攻击。建筑物在一天之内多次易手。俯瞰全城的马马耶夫岗布满金属，战后金属探测器在每平方米发现超过1200块弹片。狙击手瓦西里·扎伊采夫以242个确认击杀成为这场战役的英雄。',
        },
      },
      {
        heading: { en: 'Operation Uranus', ru: 'Операция «Уран»', ar: 'عملية أورانوس', zh: '天王星行动' },
        content: {
          en: 'While fierce urban combat raged in the city, Soviet General Georgy Zhukov and General Alexander Vasilevsky secretly planned Operation Uranus — a massive double envelopment of the German forces. On November 19, 1942, Soviet forces attacked the weakly held Romanian flanks. Within four days, the trap was closed. The German 6th Army of 330,000 men was encircled. Hitler refused to allow a breakout, insisting the army hold its position. Field Marshal Friedrich Paulus surrendered on February 2, 1943, with only 91,000 survivors from his once-mighty army.',
          ru: 'Пока в городе бушевали ожесточённые уличные бои, советские генералы Георгий Жуков и Александр Василевский тайно разрабатывали операцию «Уран» — масштабный двойной охват немецких войск. 19 ноября 1942 года советские войска ударили по слабо удерживаемым румынским флангам. За четыре дня ловушка захлопнулась. 6-я немецкая армия численностью 330 000 человек была окружена. Гитлер запретил прорыв, требуя удерживать позиции. Фельдмаршал Фридрих Паулюс капитулировал 2 февраля 1943 года, и от его некогда могучей армии осталось лишь 91 000 выживших.',
          ar: 'بينما كان القتال الحضري الشرس يحتدم في المدينة، خطّط الجنرالان السوفيتيان غيورغي جوكوف وألكسندر فاسيليفسكي سرًا لعملية أورانوس — تطويق مزدوج ضخم للقوات الألمانية. في 19 نوفمبر 1942، هاجمت القوات السوفيتية الأجنحة الرومانية الضعيفة. وخلال أربعة أيام أُغلق الفخ. وحوصر الجيش الألماني السادس المؤلف من 330,000 رجل. ورفض هتلر السماح باختراق الحصار، مصرًّا على أن يحافظ الجيش على موقعه. واستسلم المشير فريدريش باولوس في 2 فبراير 1943 ولم يبقَ من جيشه الجبار سوى 91,000 ناجٍ.',
          zh: '当激烈的城市战在城内肆虐时，苏联将领格奥尔基·朱可夫和亚历山大·华西列夫斯基秘密策划了天王星行动——对德军进行大规模的双重合围。1942年11月19日，苏军攻击了防守薄弱的罗马尼亚侧翼。四天之内，包围圈合拢。拥有33万人的德国第六集团军被围困。希特勒拒绝突围，坚持要军队固守阵地。1943年2月2日，陆军元帅弗里德里希·保卢斯投降，这支曾经强大的军队仅剩9.1万名幸存者。',
        },
      },
    ],
    keyDates: [
      { year: 'Aug 1942', event: { en: 'German forces reach Stalingrad', ru: 'Немецкие войска достигают Сталинграда', ar: 'القوات الألمانية تصل إلى ستالينغراد', zh: '德军抵达斯大林格勒' } },
      { year: 'Sep 1942', event: { en: 'Street-by-street urban combat begins', ru: 'Начинаются уличные бои', ar: 'بدء القتال الحضري من شارع إلى شارع', zh: '逐街的城市战开始' } },
      { year: 'Nov 19, 1942', event: { en: 'Operation Uranus encircles German 6th Army', ru: 'Операция «Уран» окружает 6-ю немецкую армию', ar: 'عملية أورانوس تطوّق الجيش الألماني السادس', zh: '天王星行动包围德国第六集团军' } },
      { year: 'Jan 1943', event: { en: 'Soviet forces tighten the encirclement', ru: 'Советские войска сжимают кольцо окружения', ar: 'القوات السوفيتية تُحكِم الحصار', zh: '苏军收紧包围圈' } },
      { year: 'Feb 2, 1943', event: { en: 'Paulus surrenders — German defeat complete', ru: 'Паулюс капитулирует — полный разгром немцев', ar: 'باولوس يستسلم — هزيمة ألمانية كاملة', zh: '保卢斯投降——德军彻底战败' } },
    ],
    vocabulary: [
      { word: 'Битва', translation: { en: 'Battle', ru: 'Битва', ar: 'معركة', zh: '战役' }, pronunciation: 'BI-tva' },
      { word: 'Окружение', translation: { en: 'Encirclement', ru: 'Окружение', ar: 'تطويق', zh: '合围' }, pronunciation: 'ok-ru-ZHE-ni-ye' },
      { word: 'Победа', translation: { en: 'Victory', ru: 'Победа', ar: 'نصر', zh: '胜利' }, pronunciation: 'po-BE-da' },
      { word: 'Солдат', translation: { en: 'Soldier', ru: 'Солдат', ar: 'جندي', zh: '士兵' }, pronunciation: 'sol-DAT' },
      { word: 'Снайпер', translation: { en: 'Sniper', ru: 'Снайпер', ar: 'قناص', zh: '狙击手' }, pronunciation: 'SNAY-per' },
      { word: 'Капитуляция', translation: { en: 'Surrender', ru: 'Капитуляция', ar: 'استسلام', zh: '投降' }, pronunciation: 'ka-pi-tu-LYA-tsi-ya' },
    ],
    relatedTopics: ['operation-barbarossa', 'siege-leningrad', 'victory-day'],
  },
  'gagarin': {
    id: 'gagarin',
    title: { en: 'Yuri Gagarin — First in Space', ru: 'Юрий Гагарин — первый в космосе', ar: 'يوري غاغارين — أول إنسان في الفضاء', zh: '尤里·加加林——首位进入太空者' },
    epochId: 'cold-war',
    epochTitle: { en: 'Cold War & Space Race', ru: 'Холодная война', ar: 'الحرب الباردة وسباق الفضاء', zh: '冷战与太空竞赛' },
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Yuri_Gagarin_with_awards_%28cropped%29_2.jpg/960px-Yuri_Gagarin_with_awards_%28cropped%29_2.jpg',
    leadParagraph: {
      en: "On April 12, 1961, a 27-year-old Soviet Air Force pilot named Yuri Alekseyevich Gagarin became the first human being to travel into outer space, completing one orbit of Earth in 108 minutes and forever changing humanity's relationship with the cosmos.",
      ru: '12 апреля 1961 года 27-летний лётчик советских ВВС Юрий Алексеевич Гагарин стал первым человеком, отправившимся в космос, совершив один виток вокруг Земли за 108 минут и навсегда изменив отношение человечества к космосу.',
      ar: 'في 12 أبريل 1961، أصبح طيّار سلاح الجو السوفيتي يوري ألكسيفيتش غاغارين البالغ من العمر 27 عامًا أول إنسان يسافر إلى الفضاء الخارجي، مكملًا دورة واحدة حول الأرض في 108 دقائق ومغيّرًا إلى الأبد علاقة البشرية بالكون.',
      zh: '1961年4月12日，27岁的苏联空军飞行员尤里·阿列克谢耶维奇·加加林成为第一个进入外层空间的人类，在108分钟内绕地球一圈，永远改变了人类与宇宙的关系。',
    },
    summary: {
      en: "Yuri Gagarin's 108-minute flight on April 12, 1961 made him the first human in space. His mission aboard Vostok 1 was a triumph of Soviet engineering and became the defining moment of the Space Race.",
      ru: '108-минутный полёт Юрия Гагарина 12 апреля 1961 года сделал его первым человеком в космосе. Его миссия на «Востоке-1» стала триумфом советской инженерии и определяющим моментом космической гонки.',
      ar: 'جعلت رحلة يوري غاغارين التي استمرت 108 دقائق في 12 أبريل 1961 منه أول إنسان في الفضاء. وكانت مهمته على متن فوستوك 1 انتصارًا للهندسة السوفيتية وأصبحت اللحظة الفاصلة في سباق الفضاء.',
      zh: '尤里·加加林1961年4月12日历时108分钟的飞行使他成为首位进入太空的人类。他乘坐东方1号的任务是苏联工程的胜利，成为太空竞赛的决定性时刻。',
    },
    sections: [
      {
        heading: { en: 'The Man Chosen by the Stars', ru: 'Человек, избранный звёздами', ar: 'الرجل الذي اختارته النجوم', zh: '被星辰选中的人' },
        content: {
          en: 'From 3,000 candidates, 20 were selected for the first Soviet cosmonaut program. Gagarin stood out not just for his piloting skills and physical fitness, but for his personality — his infectious smile, his ability to remain calm under pressure, and crucially, his ability to inspire confidence in others. He was the son of a carpenter and a dairy worker from a small village near Smolensk, and his working-class background made him the perfect Soviet hero. Chief designer Sergei Korolev reportedly said that Gagarin "combined the qualities needed for this mission better than anyone."',
          ru: 'Из 3000 кандидатов для первой советской программы космонавтов было отобрано 20. Гагарин выделялся не только лётным мастерством и физической подготовкой, но и характером — заразительной улыбкой, умением сохранять спокойствие под давлением и, что особенно важно, способностью внушать доверие окружающим. Он был сыном плотника и работницы молочной фермы из небольшой деревни под Смоленском, и его рабоче-крестьянское происхождение делало его идеальным советским героем. Главный конструктор Сергей Королёв, по преданию, говорил, что Гагарин «сочетал необходимые для этой миссии качества лучше, чем кто-либо».',
          ar: 'من بين 3000 مرشح، اختير 20 لأول برنامج سوفيتي لرواد الفضاء. وتميّز غاغارين ليس فقط بمهاراته في الطيران ولياقته البدنية، بل بشخصيته — ابتسامته المُعدية، وقدرته على البقاء هادئًا تحت الضغط، والأهم، قدرته على بثّ الثقة في الآخرين. كان ابنًا لنجّار وعاملة ألبان من قرية صغيرة قرب سمولينسك، وجعلته خلفيته من الطبقة العاملة البطل السوفيتي المثالي. ويُروى أن المصمم الرئيسي سيرغي كوروليوف قال إن غاغارين «جمع الصفات اللازمة لهذه المهمة أفضل من أي أحد».',
          zh: '从3000名候选人中，有20人入选首个苏联宇航员计划。加加林脱颖而出不仅因为他的飞行技能和身体素质，还因为他的个性——富有感染力的微笑、在压力下保持冷静的能力，以及最关键的，激发他人信心的能力。他是斯摩棱斯克附近一个小村庄里木匠和乳品工人的儿子，工人阶级出身使他成为完美的苏联英雄。据说总设计师谢尔盖·科罗廖夫曾说，加加林「比任何人都更好地兼具了这次任务所需的品质」。',
        },
      },
      {
        heading: { en: 'Poyekhali! — Off We Go!', ru: '«Поехали!»', ar: 'بايخالي! — لننطلق!', zh: '「我们出发！」' },
        content: {
          en: 'At 9:07 Moscow time on April 12, 1961, the Vostok 3KA spacecraft lifted off from the Baikonur Cosmodrome. Gagarin\'s legendary word at launch — "Poyekhali!" (Let\'s go!) — became one of the most famous utterances in history. During his 108-minute flight, Gagarin orbited Earth once at an altitude of about 327 km, experiencing weightlessness and becoming the first human to see the curvature of the Earth. His vital signs remained steady throughout. On re-entry, he ejected from the capsule at 7 km altitude and parachuted safely to a field in the Saratov region, where a local farmer and her daughter found him.',
          ru: 'В 9:07 по московскому времени 12 апреля 1961 года космический корабль «Восток-3КА» стартовал с космодрома Байконур. Легендарное слово Гагарина при старте — «Поехали!» — стало одним из самых знаменитых в истории. За 108 минут полёта Гагарин один раз облетел Землю на высоте около 327 км, испытал невесомость и стал первым человеком, увидевшим кривизну Земли. Его жизненные показатели оставались стабильными на протяжении всего полёта. При спуске он катапультировался из капсулы на высоте 7 км и благополучно приземлился на парашюте в поле в Саратовской области, где его нашли местная крестьянка с дочерью.',
          ar: 'في الساعة 9:07 بتوقيت موسكو في 12 أبريل 1961، انطلقت المركبة الفضائية فوستوك 3KA من قاعدة بايكونور الفضائية. وأصبحت كلمة غاغارين الأسطورية عند الإطلاق — «بايخالي!» (لننطلق!) — واحدة من أشهر العبارات في التاريخ. وخلال رحلته التي استمرت 108 دقائق، دار غاغارين حول الأرض مرة واحدة على ارتفاع نحو 327 كم، فاختبر انعدام الوزن وأصبح أول إنسان يرى انحناء الأرض. وظلّت علاماته الحيوية مستقرة طوال الرحلة. وعند العودة، قفز من الكبسولة على ارتفاع 7 كم وهبط بالمظلة بأمان في حقل بمنطقة ساراتوف، حيث وجدته فلاحة محلية وابنتها.',
          zh: '1961年4月12日莫斯科时间9点07分，东方3KA飞船从拜科努尔航天发射场升空。加加林发射时那句传奇的话——「我们出发！」——成为历史上最著名的话语之一。在108分钟的飞行中，加加林在约327公里的高度绕地球一圈，体验了失重，成为第一个看到地球曲率的人类。他的生命体征在整个过程中保持稳定。返回时，他在7公里高度弹出舱体，安全地用降落伞降落在萨拉托夫州的一片田野上，被当地一位农妇和她的女儿发现。',
        },
      },
      {
        heading: { en: 'The World Reacts', ru: 'Мир реагирует', ar: 'العالم يتفاعل', zh: '世界的反应' },
        content: {
          en: "The news spread instantly around the globe. Moscow erupted in spontaneous celebration — people poured into the streets waving flags and weeping with joy. In the United States, President Kennedy was informed while still in bed. NASA officials were shocked; they had planned their first crewed flight for May. Gagarin's flight had a profound philosophical impact: for the first time, a human had seen Earth from space — a pale blue marble suspended in the darkness. The image shaped the environmental movement and humanity's self-understanding. Gagarin toured the world as a Soviet celebrity, meeting world leaders and being mobbed by admirers everywhere he went.",
          ru: 'Новость мгновенно облетела весь мир. Москва взорвалась стихийным праздником — люди высыпали на улицы, размахивая флагами и плача от радости. В США президента Кеннеди известили, когда он ещё был в постели. Чиновники НАСА были потрясены: свой первый пилотируемый полёт они планировали на май. Полёт Гагарина оказал глубокое философское воздействие: впервые человек увидел Землю из космоса — бледно-голубой шар, подвешенный во тьме. Этот образ повлиял на экологическое движение и самопонимание человечества. Гагарин объездил весь мир как советская знаменитость, встречаясь с мировыми лидерами, и повсюду его окружали толпы поклонников.',
          ar: 'انتشر الخبر فورًا حول العالم. وعمّت موسكو احتفالات عفوية — تدفّق الناس إلى الشوارع يلوّحون بالأعلام ويبكون فرحًا. وفي الولايات المتحدة، أُبلغ الرئيس كينيدي وهو لا يزال في فراشه. وصُدم مسؤولو ناسا؛ فقد كانوا قد خطّطوا لأول رحلة مأهولة في مايو. وكان لرحلة غاغارين أثر فلسفي عميق: فلأول مرة رأى إنسان الأرض من الفضاء — كرة زرقاء شاحبة معلّقة في الظلام. وشكّلت هذه الصورة الحركة البيئية وفهم البشرية لذاتها. وجال غاغارين حول العالم كنجم سوفيتي، يلتقي قادة العالم ويُحاصره المعجبون أينما ذهب.',
          zh: '消息瞬间传遍全球。莫斯科爆发了自发的庆祝——人们涌上街头挥舞旗帜、喜极而泣。在美国，肯尼迪总统在床上被告知。美国航空航天局的官员震惊不已；他们原计划在五月进行首次载人飞行。加加林的飞行产生了深远的哲学影响：人类第一次从太空看到地球——一颗悬浮在黑暗中的淡蓝色弹珠。这一画面塑造了环保运动和人类的自我认知。加加林作为苏联名人周游世界，会见各国领导人，所到之处都被仰慕者簇拥。',
        },
      },
    ],
    keyDates: [
      { year: 'Oct 4, 1957', event: { en: 'Sputnik — first satellite in orbit', ru: 'Спутник — первый спутник на орбите', ar: 'سبوتنيك — أول قمر صناعي في المدار', zh: '斯普特尼克——第一颗进入轨道的卫星' } },
      { year: '1960', event: { en: 'Gagarin selected as cosmonaut candidate', ru: 'Гагарина отбирают в кандидаты в космонавты', ar: 'اختيار غاغارين مرشحًا لرائد فضاء', zh: '加加林入选宇航员候选人' } },
      { year: 'Apr 12, 1961', event: { en: 'Vostok 1 launches — Gagarin orbits Earth', ru: 'Старт «Востока-1» — Гагарин облетает Землю', ar: 'إطلاق فوستوك 1 — غاغارين يدور حول الأرض', zh: '东方1号发射——加加林环绕地球' } },
      { year: 'Apr 14, 1961', event: { en: 'Gagarin receives Hero of Soviet Union medal', ru: 'Гагарин получает звание Героя Советского Союза', ar: 'غاغارين يتلقى وسام بطل الاتحاد السوفيتي', zh: '加加林获苏联英雄勋章' } },
      { year: 'Mar 27, 1968', event: { en: 'Gagarin dies in a training jet crash', ru: 'Гагарин погибает в авиакатастрофе на учебном самолёте', ar: 'غاغارين يلقى حتفه في تحطّم طائرة تدريب', zh: '加加林在训练机坠毁中遇难' } },
    ],
    vocabulary: [
      { word: 'Космонавт', translation: { en: 'Cosmonaut / Astronaut', ru: 'Космонавт', ar: 'رائد فضاء', zh: '宇航员' }, pronunciation: 'kos-mo-NAVT' },
      { word: 'Космос', translation: { en: 'Space / Cosmos', ru: 'Космос', ar: 'الفضاء / الكون', zh: '太空 / 宇宙' }, pronunciation: 'KOS-mos' },
      { word: 'Орбита', translation: { en: 'Orbit', ru: 'Орбита', ar: 'مدار', zh: '轨道' }, pronunciation: 'or-BI-ta' },
      { word: 'Поехали', translation: { en: "Let's go! (famous word)", ru: 'Поехали', ar: 'لننطلق! (الكلمة الشهيرة)', zh: '出发！（名言）' }, pronunciation: 'po-YE-kha-li' },
      { word: 'Ракета', translation: { en: 'Rocket', ru: 'Ракета', ar: 'صاروخ', zh: '火箭' }, pronunciation: 'ra-KE-ta' },
      { word: 'Земля', translation: { en: 'Earth / Ground', ru: 'Земля', ar: 'الأرض', zh: '地球 / 大地' }, pronunciation: 'zem-LYA' },
    ],
    relatedTopics: ['sputnik', 'cuban-crisis', 'khrushchev-thaw'],
  },
  'kulikovo': kulikovoArticle,
  'patriotic-war': patrioticWarArticle,
  'abolition-serfdom': abolitionSerfdomArticle,
  'october-revolution': octoberRevolutionArticle,
  'peter-reforms': peterReformsArticle,
  'operation-barbarossa': operationBarbarossaArticle,
};

// Generic article template for topics without specific content
export function getArticleData(topicId: string, topic: Topic): ArticleData {
  if (articles[topicId]) return articles[topicId];

  const tt = topic.title;
  return {
    id: topicId,
    title: topic.title,
    epochId: topic.epochId,
    epochTitle: { en: 'Russian History', ru: 'История России', ar: 'التاريخ الروسي', zh: '俄罗斯历史' },
    heroImage: topic.image,
    leadParagraph: topic.teaser,
    summary: {
      en: `This article explores ${tt.en} — a pivotal moment in Russian history that shaped the course of civilization.`,
      ru: `Эта статья рассказывает о теме «${tt.ru}» — переломном моменте в истории России, определившем ход цивилизации.`,
      ar: `يستكشف هذا المقال «${tt.ar}» — لحظة محورية في تاريخ روسيا شكّلت مسار الحضارة.`,
      zh: `本文探讨「${tt.zh}」——俄罗斯历史上塑造文明进程的关键时刻。`,
    },
    sections: [
      {
        heading: { en: 'Historical Context', ru: 'Исторический контекст', ar: 'السياق التاريخي', zh: '历史背景' },
        content: {
          en: `${tt.en} represents one of the most significant events in Russian history. Understanding this period requires examining the political, social, and cultural forces that converged to create this pivotal moment. Russian historians including Karamzin, Solovyov, and Klyuchevsky have all analyzed these events extensively, providing us with rich primary and secondary sources.`,
          ru: `«${tt.ru}» — одно из важнейших событий в истории России. Понимание этого периода требует рассмотрения политических, социальных и культурных сил, сошедшихся в этот переломный момент. Русские историки, включая Карамзина, Соловьёва и Ключевского, подробно анализировали эти события, оставив нам богатые первичные и вторичные источники.`,
          ar: `يمثّل «${tt.ar}» أحد أهم الأحداث في تاريخ روسيا. ويتطلّب فهم هذه الحقبة دراسة القوى السياسية والاجتماعية والثقافية التي تضافرت لصنع هذه اللحظة المحورية. وقد حلّل المؤرخون الروس، ومنهم كارامزين وسولوفيوف وكليوتشيفسكي، هذه الأحداث باستفاضة، مزوّدين إيانا بمصادر أولية وثانوية غنية.`,
          zh: `「${tt.zh}」是俄罗斯历史上最重要的事件之一。理解这一时期需要考察汇聚成这一关键时刻的政治、社会与文化力量。包括卡拉姆津、索洛维约夫和克柳切夫斯基在内的俄罗斯历史学家都对这些事件作了广泛分析，为我们提供了丰富的第一手和第二手资料。`,
        },
      },
      {
        heading: { en: 'Key Events and Figures', ru: 'Ключевые события и личности', ar: 'الأحداث والشخصيات الرئيسية', zh: '关键事件与人物' },
        content: {
          en: `The events surrounding ${tt.en} involved key historical figures whose decisions changed the trajectory of Russian history. Military leaders, tsars, religious figures, and ordinary people all played their roles in this complex historical drama. The primary sources from this period paint a vivid picture of a society in transformation, grappling with both internal contradictions and external threats.`,
          ru: `События вокруг темы «${tt.ru}» вовлекли ключевых исторических деятелей, чьи решения изменили траекторию русской истории. Военачальники, цари, религиозные деятели и простые люди — все сыграли свою роль в этой сложной исторической драме. Первичные источники этого периода рисуют яркую картину преображающегося общества, борющегося как с внутренними противоречиями, так и с внешними угрозами.`,
          ar: `شملت الأحداث المحيطة بـ«${tt.ar}» شخصيات تاريخية رئيسية غيّرت قراراتها مسار التاريخ الروسي. فقد أدّى القادة العسكريون والقياصرة ورجال الدين والناس العاديون أدوارهم في هذه الدراما التاريخية المعقّدة. وترسم المصادر الأولية لهذه الفترة صورة حية لمجتمع في طور التحوّل، يصارع التناقضات الداخلية والتهديدات الخارجية معًا.`,
          zh: `围绕「${tt.zh}」的事件牵涉到诸多关键历史人物，他们的决定改变了俄罗斯历史的走向。军事领袖、沙皇、宗教人物和普通民众都在这场复杂的历史大戏中扮演了各自的角色。这一时期的第一手资料生动地描绘了一个处于转型中的社会，同时与内部矛盾和外部威胁搏斗。`,
        },
      },
      {
        heading: { en: 'Legacy and Impact', ru: 'Наследие и влияние', ar: 'الإرث والأثر', zh: '遗产与影响' },
        content: {
          en: `The long-term consequences of ${tt.en} continue to resonate in Russian culture, politics, and national identity. This event shaped subsequent generations and remains a touchstone in Russian historical memory. Its impact can be traced through the centuries, influencing everything from political institutions to cultural practices, from religious traditions to literary themes.`,
          ru: `Долгосрочные последствия темы «${tt.ru}» продолжают отзываться в русской культуре, политике и национальной идентичности. Это событие сформировало последующие поколения и остаётся краеугольным камнем русской исторической памяти. Его влияние прослеживается сквозь века, затрагивая всё — от политических институтов до культурных практик, от религиозных традиций до литературных тем.`,
          ar: `لا تزال العواقب بعيدة المدى لـ«${tt.ar}» تتردّد أصداؤها في الثقافة والسياسة والهوية الوطنية الروسية. فقد شكّل هذا الحدث الأجيال اللاحقة وما يزال محكًّا في الذاكرة التاريخية الروسية. ويمكن تتبّع أثره عبر القرون، إذ أثّر في كل شيء من المؤسسات السياسية إلى الممارسات الثقافية، ومن التقاليد الدينية إلى الموضوعات الأدبية.`,
          zh: `「${tt.zh}」的长期影响在俄罗斯文化、政治和民族认同中持续回响。这一事件塑造了后世几代人，至今仍是俄罗斯历史记忆中的试金石。它的影响可以追溯数百年，影响着从政治制度到文化实践、从宗教传统到文学主题的方方面面。`,
        },
      },
    ],
    keyDates: [
      { year: '—', event: { en: `Related to ${tt.en}`, ru: `Связано с темой «${tt.ru}»`, ar: `يتعلق بـ«${tt.ar}»`, zh: `与「${tt.zh}」相关` } },
    ],
    vocabulary: [
      { word: 'История', translation: { en: 'History', ru: 'История', ar: 'التاريخ', zh: '历史' }, pronunciation: 'is-TO-ri-ya' },
      { word: 'Россия', translation: { en: 'Russia', ru: 'Россия', ar: 'روسيا', zh: '俄罗斯' }, pronunciation: 'ros-SI-ya' },
      { word: 'Война', translation: { en: 'War', ru: 'Война', ar: 'حرب', zh: '战争' }, pronunciation: 'voy-NA' },
      { word: 'Мир', translation: { en: 'Peace / World', ru: 'Мир', ar: 'سلام / عالم', zh: '和平 / 世界' }, pronunciation: 'MIR' },
      { word: 'Народ', translation: { en: 'People / Nation', ru: 'Народ', ar: 'شعب / أمة', zh: '人民 / 民族' }, pronunciation: 'na-ROD' },
    ],
    relatedTopics: [],
  };
}
