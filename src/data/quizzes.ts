import type { Localized } from '@/LanguageContext';

export interface QuizQuestion {
  question: Localized;
  options: Localized[];
  correct: number;
}

// Topic-specific quizzes. Every reachable topic has its own 3 questions,
// strictly about that topic, in all four supported languages.
export const topicQuizzes: Record<string, QuizQuestion[]> = {
  // ===== Ancient Rus =====
  'varangians': [
    {
      question: { en: 'In what year were the Varangians traditionally called to rule?', ru: 'В каком году, по преданию, были призваны варяги?', ar: 'في أي عام دُعي الفارانغيون للحكم وفقًا للتقليد؟', zh: '根据传说，瓦良格人是在哪一年被召来统治的？' },
      options: [
        { en: '882', ru: '882', ar: '882', zh: '882' },
        { en: '862', ru: '862', ar: '862', zh: '862' },
        { en: '988', ru: '988', ar: '988', zh: '988' },
        { en: '1147', ru: '1147', ar: '1147', zh: '1147' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Whom did the Slavic tribes invite to bring order to their lands?', ru: 'Кого славянские племена пригласили навести порядок на их землях?', ar: 'من دعت القبائل السلافية لإحلال النظام في أراضيها؟', zh: '斯拉夫部落邀请了谁来治理他们的土地？' },
      options: [
        { en: 'The Mongols', ru: 'Монголов', ar: 'المغول', zh: '蒙古人' },
        { en: 'The Byzantines', ru: 'Византийцев', ar: 'البيزنطيين', zh: '拜占庭人' },
        { en: 'The Varangians (Norse)', ru: 'Варягов (норманнов)', ar: 'الفارانغيين (الإسكندنافيين)', zh: '瓦良格人（北欧人）' },
        { en: 'The Khazars', ru: 'Хазар', ar: 'الخزر', zh: '可萨人' },
      ],
      correct: 2,
    },
    {
      question: { en: 'According to the chronicle, who led the called Varangians?', ru: 'Согласно летописи, кто возглавил призванных варягов?', ar: 'وفقًا للسجل، من قاد الفارانغيين المدعوين؟', zh: '据编年史记载，谁率领了被召来的瓦良格人？' },
      options: [
        { en: 'Rurik', ru: 'Рюрик', ar: 'روريك', zh: '留里克' },
        { en: 'Oleg', ru: 'Олег', ar: 'أوليغ', zh: '奥列格' },
        { en: 'Igor', ru: 'Игорь', ar: 'إيغور', zh: '伊戈尔' },
        { en: 'Sviatoslav', ru: 'Святослав', ar: 'سفياتوسلاف', zh: '斯维亚托斯拉夫' },
      ],
      correct: 0,
    },
  ],
  'rurik': [
    {
      question: { en: 'What did Rurik found?', ru: 'Что основал Рюрик?', ar: 'ماذا أسّس روريك؟', zh: '留里克建立了什么？' },
      options: [
        { en: "Russia's first ruling dynasty", ru: 'Первую правящую династию Руси', ar: 'أول سلالة حاكمة في روسيا', zh: '俄罗斯第一个统治王朝' },
        { en: 'The Orthodox Church', ru: 'Православную церковь', ar: 'الكنيسة الأرثوذكسية', zh: '东正教会' },
        { en: 'The city of Moscow', ru: 'Город Москву', ar: 'مدينة موسكو', zh: '莫斯科城' },
        { en: 'The Golden Horde', ru: 'Золотую Орду', ar: 'القبيلة الذهبية', zh: '金帐汗国' },
      ],
      correct: 0,
    },
    {
      question: { en: 'In which city did Rurik establish his rule?', ru: 'В каком городе Рюрик утвердил свою власть?', ar: 'في أي مدينة أرسى روريك حكمه؟', zh: '留里克在哪座城市确立了统治？' },
      options: [
        { en: 'Kiev', ru: 'Киев', ar: 'كييف', zh: '基辅' },
        { en: 'Novgorod', ru: 'Новгород', ar: 'نوفغورود', zh: '诺夫哥罗德' },
        { en: 'Moscow', ru: 'Москва', ar: 'موسكو', zh: '莫斯科' },
        { en: 'Vladimir', ru: 'Владимир', ar: 'فلاديمير', zh: '弗拉基米尔' },
      ],
      correct: 1,
    },
    {
      question: { en: 'What was Rurik’s origin?', ru: 'Какого происхождения был Рюрик?', ar: 'ما أصل روريك؟', zh: '留里克是什么出身？' },
      options: [
        { en: 'Mongol', ru: 'Монгольского', ar: 'مغولي', zh: '蒙古' },
        { en: 'Greek', ru: 'Греческого', ar: 'يوناني', zh: '希腊' },
        { en: 'Varangian (Norse)', ru: 'Варяжского (норманнского)', ar: 'فارانغي (إسكندنافي)', zh: '瓦良格（北欧）' },
        { en: 'Slavic', ru: 'Славянского', ar: 'سلافي', zh: '斯拉夫' },
      ],
      correct: 2,
    },
  ],
  'oleg-prophetic': [
    {
      question: { en: 'Which two cities did Oleg unite under one rule?', ru: 'Какие два города объединил Олег под единой властью?', ar: 'أي مدينتين وحّدهما أوليغ تحت حكم واحد؟', zh: '奥列格将哪两座城市统一于一统治之下？' },
      options: [
        { en: 'Novgorod and Kiev', ru: 'Новгород и Киев', ar: 'نوفغورود وكييف', zh: '诺夫哥罗德和基辅' },
        { en: 'Moscow and Tver', ru: 'Москву и Тверь', ar: 'موسكو وتفير', zh: '莫斯科和特维尔' },
        { en: 'Kiev and Constantinople', ru: 'Киев и Константинополь', ar: 'كييف والقسطنطينية', zh: '基辅和君士坦丁堡' },
        { en: 'Novgorod and Pskov', ru: 'Новгород и Псков', ar: 'نوفغورود وبسكوف', zh: '诺夫哥罗德和普斯科夫' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Which city did Oleg make the capital of Rus?', ru: 'Какой город Олег сделал столицей Руси?', ar: 'أي مدينة جعلها أوليغ عاصمة روس؟', zh: '奥列格把哪座城市定为罗斯的首都？' },
      options: [
        { en: 'Novgorod', ru: 'Новгород', ar: 'نوفغورود', zh: '诺夫哥罗德' },
        { en: 'Vladimir', ru: 'Владимир', ar: 'فلاديمير', zh: '弗拉基米尔' },
        { en: 'Kiev', ru: 'Киев', ar: 'كييف', zh: '基辅' },
        { en: 'Moscow', ru: 'Москва', ar: 'موسكو', zh: '莫斯科' },
      ],
      correct: 2,
    },
    {
      question: { en: 'Oleg is famous for a campaign against which city?', ru: 'Олег прославился походом на какой город?', ar: 'اشتهر أوليغ بحملة على أي مدينة؟', zh: '奥列格因征讨哪座城市而闻名？' },
      options: [
        { en: 'Constantinople (Tsargrad)', ru: 'Константинополь (Царьград)', ar: 'القسطنطينية (تسارغراد)', zh: '君士坦丁堡（沙皇格勒）' },
        { en: 'Rome', ru: 'Рим', ar: 'روما', zh: '罗马' },
        { en: 'Baghdad', ru: 'Багдад', ar: 'بغداد', zh: '巴格达' },
        { en: 'Paris', ru: 'Париж', ar: 'باريس', zh: '巴黎' },
      ],
      correct: 0,
    },
  ],
  'kievan-rus': [
    {
      question: { en: 'Kievan Rus was a federation of which tribes?', ru: 'Киевская Русь была федерацией каких племён?', ar: 'كانت روس كييف اتحادًا لأي قبائل؟', zh: '基辅罗斯是哪些部落的联盟？' },
      options: [
        { en: 'Germanic', ru: 'Германских', ar: 'الجرمانية', zh: '日耳曼' },
        { en: 'East Slavic', ru: 'Восточнославянских', ar: 'السلافية الشرقية', zh: '东斯拉夫' },
        { en: 'Turkic', ru: 'Тюркских', ar: 'التركية', zh: '突厥' },
        { en: 'Mongol', ru: 'Монгольских', ar: 'المغولية', zh: '蒙古' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Which city was the center of Kievan Rus?', ru: 'Какой город был центром Киевской Руси?', ar: 'أي مدينة كانت مركز روس كييف؟', zh: '哪座城市是基辅罗斯的中心？' },
      options: [
        { en: 'Kiev', ru: 'Киев', ar: 'كييف', zh: '基辅' },
        { en: 'Moscow', ru: 'Москва', ar: 'موسكو', zh: '莫斯科' },
        { en: 'Smolensk', ru: 'Смоленск', ar: 'سمولينسك', zh: '斯摩棱斯克' },
        { en: 'Novgorod', ru: 'Новгород', ar: 'نوفغورود', zh: '诺夫哥罗德' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Kievan Rus grew along which famous trade route?', ru: 'Киевская Русь росла вдоль какого знаменитого торгового пути?', ar: 'نمت روس كييف على طول أي طريق تجاري شهير؟', zh: '基辅罗斯沿着哪条著名的贸易路线发展？' },
      options: [
        { en: 'The Silk Road', ru: 'Шёлковый путь', ar: 'طريق الحرير', zh: '丝绸之路' },
        { en: 'The Amber Road', ru: 'Янтарный путь', ar: 'طريق الكهرمان', zh: '琥珀之路' },
        { en: '“From the Varangians to the Greeks”', ru: '«Из варяг в греки»', ar: '«من الفارانغيين إلى الإغريق»', zh: '「从瓦良格到希腊」之路' },
        { en: 'The Volga–Caspian route', ru: 'Волжско-Каспийский путь', ar: 'طريق الفولغا–بحر قزوين', zh: '伏尔加–里海路线' },
      ],
      correct: 2,
    },
  ],
  'baptism-rus': [
    {
      question: { en: 'In what year was the Baptism of Rus?', ru: 'В каком году произошло Крещение Руси?', ar: 'في أي عام جرى تعميد روس؟', zh: '罗斯受洗发生在哪一年？' },
      options: [
        { en: '882', ru: '882', ar: '882', zh: '882' },
        { en: '988', ru: '988', ar: '988', zh: '988' },
        { en: '1054', ru: '1054', ar: '1054', zh: '1054' },
        { en: '1240', ru: '1240', ar: '1240', zh: '1240' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Which prince ordered the mass baptism of Kiev?', ru: 'Какой князь приказал массовое крещение Киева?', ar: 'أي أمير أمر بالتعميد الجماعي لكييف؟', zh: '哪位王公下令对基辅进行大规模洗礼？' },
      options: [
        { en: 'Rurik', ru: 'Рюрик', ar: 'روريك', zh: '留里克' },
        { en: 'Oleg the Prophetic', ru: 'Олег Вещий', ar: 'أوليغ النبوي', zh: '先知奥列格' },
        { en: 'Vladimir the Great', ru: 'Владимир Великий', ar: 'فلاديمير العظيم', zh: '弗拉基米尔大帝' },
        { en: 'Yaroslav the Wise', ru: 'Ярослав Мудрый', ar: 'ياروسلاف الحكيم', zh: '智者雅罗斯拉夫' },
      ],
      correct: 2,
    },
    {
      question: { en: 'What religion did Kievan Rus adopt in 988?', ru: 'Какую религию приняла Киевская Русь в 988 году?', ar: 'أي دين اعتنقته روس كييف عام 988؟', zh: '基辅罗斯在988年皈依了哪种宗教？' },
      options: [
        { en: 'Roman Catholicism', ru: 'Католицизм', ar: 'الكاثوليكية', zh: '罗马天主教' },
        { en: 'Islam', ru: 'Ислам', ar: 'الإسلام', zh: '伊斯兰教' },
        { en: 'Orthodox Christianity', ru: 'Православие', ar: 'الأرثوذكسية', zh: '东正教' },
        { en: 'Judaism', ru: 'Иудаизм', ar: 'اليهودية', zh: '犹太教' },
      ],
      correct: 2,
    },
  ],
  'yaroslav-wise': [
    {
      question: { en: 'Yaroslav the Wise is associated with which legal code?', ru: 'С каким сводом законов связан Ярослав Мудрый?', ar: 'بأي مدونة قانونية يرتبط ياروسلاف الحكيم؟', zh: '智者雅罗斯拉夫与哪部法典相关？' },
      options: [
        { en: 'Russkaya Pravda (Russian Justice)', ru: '«Русская Правда»', ar: '«روسكايا برافدا» (العدل الروسي)', zh: '《罗斯法典》' },
        { en: 'The Table of Ranks', ru: 'Табель о рангах', ar: 'جدول الرتب', zh: '官秩表' },
        { en: 'The Sobornoye Ulozhenie', ru: 'Соборное уложение', ar: 'القانون المجمعي', zh: '会典法令' },
        { en: 'The Soviet Constitution', ru: 'Советская конституция', ar: 'الدستور السوفيتي', zh: '苏联宪法' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Under Yaroslav, Kievan Rus reached its...', ru: 'При Ярославе Киевская Русь достигла своего...', ar: 'في عهد ياروسلاف بلغت روس كييف...', zh: '在雅罗斯拉夫治下，基辅罗斯达到了它的……' },
      options: [
        { en: 'Final collapse', ru: 'Окончательного распада', ar: 'انهيارها النهائي', zh: '最终崩溃' },
        { en: 'Mongol subjugation', ru: 'Подчинения монголам', ar: 'خضوعها للمغول', zh: '被蒙古征服' },
        { en: 'Golden age', ru: 'Золотого века', ar: 'عصرها الذهبي', zh: '黄金时代' },
        { en: 'First baptism', ru: 'Первого крещения', ar: 'تعميدها الأول', zh: '首次受洗' },
      ],
      correct: 2,
    },
    {
      question: { en: 'Which cathedral did Yaroslav complete in Kiev?', ru: 'Какой собор завершил Ярослав в Киеве?', ar: 'أي كاتدرائية أكملها ياروسلاف في كييف؟', zh: '雅罗斯拉夫在基辅建成了哪座大教堂？' },
      options: [
        { en: "St. Basil's Cathedral", ru: 'Собор Василия Блаженного', ar: 'كاتدرائية القديس باسيليوس', zh: '圣瓦西里大教堂' },
        { en: 'St. Sophia Cathedral', ru: 'Софийский собор', ar: 'كاتدرائية القديسة صوفيا', zh: '圣索菲亚大教堂' },
        { en: 'Christ the Saviour Cathedral', ru: 'Храм Христа Спасителя', ar: 'كاتدرائية المسيح المخلّص', zh: '基督救世主大教堂' },
        { en: 'Dormition Cathedral', ru: 'Успенский собор', ar: 'كاتدرائية الرقاد', zh: '圣母安息大教堂' },
      ],
      correct: 1,
    },
  ],

  // ===== Mongol Invasion =====
  'genghis-khan': [
    {
      question: { en: 'Genghis Khan founded which empire?', ru: 'Какую империю основал Чингисхан?', ar: 'أي إمبراطورية أسّس جنكيز خان؟', zh: '成吉思汗建立了哪个帝国？' },
      options: [
        { en: 'The Ottoman Empire', ru: 'Османскую империю', ar: 'الإمبراطورية العثمانية', zh: '奥斯曼帝国' },
        { en: 'The Mongol Empire', ru: 'Монгольскую империю', ar: 'الإمبراطورية المغولية', zh: '蒙古帝国' },
        { en: 'The Byzantine Empire', ru: 'Византийскую империю', ar: 'الإمبراطورية البيزنطية', zh: '拜占庭帝国' },
        { en: 'The Russian Empire', ru: 'Российскую империю', ar: 'الإمبراطورية الروسية', zh: '俄罗斯帝国' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The Mongol Empire became the largest ... in history.', ru: 'Монгольская империя стала крупнейшей в истории...', ar: 'أصبحت الإمبراطورية المغولية الأكبر في التاريخ من حيث...', zh: '蒙古帝国成为历史上最大的……' },
      options: [
        { en: 'Contiguous land empire', ru: 'Сухопутной империей', ar: 'الإمبراطورية البرية المتصلة', zh: '连片陆地帝国' },
        { en: 'Maritime empire', ru: 'Морской империей', ar: 'الإمبراطورية البحرية', zh: '海上帝国' },
        { en: 'City-state', ru: 'Городом-государством', ar: 'دولة مدينة', zh: '城邦' },
        { en: 'Trade union', ru: 'Торговым союзом', ar: 'اتحاد تجاري', zh: '贸易联盟' },
      ],
      correct: 0,
    },
    {
      question: { en: "What was Genghis Khan's birth name?", ru: 'Как звали Чингисхана при рождении?', ar: 'ما اسم جنكيز خان عند الولادة؟', zh: '成吉思汗的本名是什么？' },
      options: [
        { en: 'Batu', ru: 'Батый', ar: 'باتو', zh: '拔都' },
        { en: 'Subutai', ru: 'Субэдэй', ar: 'سوبوتاي', zh: '速不台' },
        { en: 'Temüjin', ru: 'Тэмуджин', ar: 'تيموجين', zh: '铁木真' },
        { en: 'Ögedei', ru: 'Угэдэй', ar: 'أوغطاي', zh: '窝阔台' },
      ],
      correct: 2,
    },
  ],
  'mongol-invasion-rus': [
    {
      question: { en: 'Who led the Mongol invasion of Rus?', ru: 'Кто возглавил монгольское нашествие на Русь?', ar: 'من قاد الغزو المغولي لروس؟', zh: '谁率领了蒙古对罗斯的入侵？' },
      options: [
        { en: 'Batu Khan', ru: 'Хан Батый', ar: 'باتو خان', zh: '拔都汗' },
        { en: 'Genghis Khan', ru: 'Чингисхан', ar: 'جنكيز خان', zh: '成吉思汗' },
        { en: 'Tamerlane', ru: 'Тамерлан', ar: 'تيمورلنك', zh: '帖木儿' },
        { en: 'Mamai', ru: 'Мамай', ar: 'مماي', zh: '马麦' },
      ],
      correct: 0,
    },
    {
      question: { en: 'In which decade did the main Mongol invasion of Rus occur?', ru: 'В какое десятилетие произошло основное монгольское нашествие на Русь?', ar: 'في أي عقد وقع الغزو المغولي الرئيسي لروس؟', zh: '蒙古对罗斯的主要入侵发生在哪个年代？' },
      options: [
        { en: 'The 980s', ru: '980-е годы', ar: 'ثمانينيات القرن العاشر', zh: '980年代' },
        { en: 'The 1230s–1240s', ru: '1230–1240-е годы', ar: 'ثلاثينيات وأربعينيات القرن الثالث عشر', zh: '1230–1240年代' },
        { en: 'The 1320s', ru: '1320-е годы', ar: 'عشرينيات القرن الرابع عشر', zh: '1320年代' },
        { en: 'The 1140s', ru: '1140-е годы', ar: 'أربعينيات القرن الثاني عشر', zh: '1140年代' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Which great city fell to the Mongols in 1240?', ru: 'Какой великий город пал под натиском монголов в 1240 году?', ar: 'أي مدينة عظيمة سقطت بيد المغول عام 1240؟', zh: '哪座大城在1240年陷落于蒙古之手？' },
      options: [
        { en: 'Moscow', ru: 'Москва', ar: 'موسكو', zh: '莫斯科' },
        { en: 'Novgorod', ru: 'Новгород', ar: 'نوفغورود', zh: '诺夫哥罗德' },
        { en: 'Kiev', ru: 'Киев', ar: 'كييف', zh: '基辅' },
        { en: 'Smolensk', ru: 'Смоленск', ar: 'سمولينسك', zh: '斯摩棱斯克' },
      ],
      correct: 2,
    },
  ],
  'golden-horde': [
    {
      question: { en: 'For about how long did the Golden Horde dominate the Russian principalities?', ru: 'Около какого срока Золотая Орда господствовала над русскими княжествами?', ar: 'كم استمرت هيمنة القبيلة الذهبية على الإمارات الروسية تقريبًا؟', zh: '金帐汗国大约统治俄罗斯各公国多久？' },
      options: [
        { en: 'About 240 years', ru: 'Около 240 лет', ar: 'نحو 240 عامًا', zh: '约240年' },
        { en: 'About 50 years', ru: 'Около 50 лет', ar: 'نحو 50 عامًا', zh: '约50年' },
        { en: 'About 1000 years', ru: 'Около 1000 лет', ar: 'نحو 1000 عام', zh: '约1000年' },
        { en: 'About 10 years', ru: 'Около 10 лет', ar: 'نحو 10 أعوام', zh: '约10年' },
      ],
      correct: 0,
    },
    {
      question: { en: 'To rule, Russian princes had to receive a ... from the khan.', ru: 'Чтобы править, русские князья должны были получить от хана...', ar: 'لكي يحكم الأمراء الروس كان عليهم الحصول من الخان على...', zh: '俄罗斯王公要统治，必须从可汗那里获得……' },
      options: [
        { en: 'A crown from the Pope', ru: 'Корону от Папы', ar: 'تاجًا من البابا', zh: '教皇赐予的王冠' },
        { en: 'A yarlyk (patent)', ru: 'Ярлык (грамоту)', ar: 'يارليك (مرسوم تفويض)', zh: '册封诏书（亚里克）' },
        { en: 'A charter from Byzantium', ru: 'Грамоту из Византии', ar: 'ميثاقًا من بيزنطة', zh: '拜占庭的特许状' },
        { en: 'A public vote', ru: 'Народное голосование', ar: 'تصويتًا شعبيًا', zh: '公众投票' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The Golden Horde was a successor state of which empire?', ru: 'Золотая Орда была государством-преемником какой империи?', ar: 'كانت القبيلة الذهبية دولة خلفًا لأي إمبراطورية؟', zh: '金帐汗国是哪个帝国的继承国？' },
      options: [
        { en: 'The Roman Empire', ru: 'Римской империи', ar: 'الإمبراطورية الرومانية', zh: '罗马帝国' },
        { en: 'Kievan Rus', ru: 'Киевской Руси', ar: 'روس كييف', zh: '基辅罗斯' },
        { en: 'The Mongol Empire', ru: 'Монгольской империи', ar: 'الإمبراطورية المغولية', zh: '蒙古帝国' },
        { en: 'The Ottoman Empire', ru: 'Османской империи', ar: 'الإمبراطورية العثمانية', zh: '奥斯曼帝国' },
      ],
      correct: 2,
    },
  ],
  'alexander-nevsky': [
    {
      question: { en: 'Alexander Nevsky defeated the Swedes at the Battle of the...', ru: 'Александр Невский разбил шведов в битве на...', ar: 'هزم ألكسندر نيفسكي السويديين في معركة...', zh: '亚历山大·涅夫斯基在哪场战役中击败了瑞典人？' },
      options: [
        { en: 'Neva River', ru: 'Реке Неве', ar: 'نهر نيفا', zh: '涅瓦河' },
        { en: 'Kalka River', ru: 'Реке Калке', ar: 'نهر كالكا', zh: '卡尔卡河' },
        { en: 'Kulikovo Field', ru: 'Куликовом поле', ar: 'حقل كوليكوفو', zh: '库利科沃原野' },
        { en: 'Borodino', ru: 'Бородине', ar: 'بورودينو', zh: '博罗季诺' },
      ],
      correct: 0,
    },
    {
      question: { en: 'He defeated the Teutonic Knights at the Battle on the...', ru: 'Он разбил тевтонских рыцарей в битве на...', ar: 'هزم فرسان التيوتون في معركة على...', zh: '他在哪场战役中击败了条顿骑士？' },
      options: [
        { en: 'Volga', ru: 'Волге', ar: 'الفولغا', zh: '伏尔加河' },
        { en: 'Ice (Lake Peipus)', ru: 'Льду (Чудское озеро)', ar: 'الجليد (بحيرة بيبوس)', zh: '冰上（楚德湖）' },
        { en: 'Don', ru: 'Дону', ar: 'الدون', zh: '顿河' },
        { en: 'Dnieper', ru: 'Днепре', ar: 'دنيبر', zh: '第聂伯河' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Toward the Mongols, Nevsky chose to...', ru: 'По отношению к монголам Невский выбрал...', ar: 'تجاه المغول، اختار نيفسكي أن...', zh: '对于蒙古人，涅夫斯基选择了……' },
      options: [
        { en: 'Wage open war', ru: 'Открытую войну', ar: 'يشنّ حربًا مفتوحة', zh: '公开作战' },
        { en: 'Flee to Europe', ru: 'Бегство в Европу', ar: 'يفرّ إلى أوروبا', zh: '逃往欧洲' },
        { en: 'Submit and negotiate', ru: 'Покорность и переговоры', ar: 'يخضع ويفاوض', zh: '臣服并谈判' },
        { en: 'Convert them', ru: 'Обратить их в веру', ar: 'يحوّلهم دينيًا', zh: '使他们皈依' },
      ],
      correct: 2,
    },
  ],

  // ===== Rise of Moscow =====
  'ivan-kalita': [
    {
      question: { en: 'Ivan Kalita’s nickname “Kalita” means:', ru: 'Прозвище Ивана Калиты «Калита» означает:', ar: 'لقب إيفان كاليتا «كاليتا» يعني:', zh: '伊凡·卡利塔的绰号「卡利塔」意为：' },
      options: [
        { en: 'Moneybag', ru: 'Денежный мешок (кошель)', ar: 'كيس المال', zh: '钱袋' },
        { en: 'The Terrible', ru: 'Грозный', ar: 'الرهيب', zh: '雷帝' },
        { en: 'The Wise', ru: 'Мудрый', ar: 'الحكيم', zh: '智者' },
        { en: 'The Great', ru: 'Великий', ar: 'العظيم', zh: '大帝' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Which city did Ivan Kalita strengthen?', ru: 'Какой город усилил Иван Калита?', ar: 'أي مدينة قوّاها إيفان كاليتا؟', zh: '伊凡·卡利塔增强了哪座城市的实力？' },
      options: [
        { en: 'Tver', ru: 'Тверь', ar: 'تفير', zh: '特维尔' },
        { en: 'Moscow', ru: 'Москву', ar: 'موسكو', zh: '莫斯科' },
        { en: 'Novgorod', ru: 'Новгород', ar: 'نوفغورود', zh: '诺夫哥罗德' },
        { en: 'Kiev', ru: 'Киев', ar: 'كييف', zh: '基辅' },
      ],
      correct: 1,
    },
    {
      question: { en: 'He gained the right to collect ... for the Mongols.', ru: 'Он получил право собирать для монголов...', ar: 'حصل على حق جمع... للمغول.', zh: '他获得了为蒙古人征收……的权利。' },
      options: [
        { en: 'Soldiers', ru: 'Солдат', ar: 'الجنود', zh: '士兵' },
        { en: 'Icons', ru: 'Иконы', ar: 'الأيقونات', zh: '圣像' },
        { en: 'Tribute (taxes)', ru: 'Дань (налоги)', ar: 'الجزية (الضرائب)', zh: '贡赋（税款）' },
        { en: 'Grain only', ru: 'Только зерно', ar: 'الحبوب فقط', zh: '只有粮食' },
      ],
      correct: 2,
    },
  ],
  'kulikovo': [
    {
      question: { en: 'In what year was the Battle of Kulikovo?', ru: 'В каком году произошла Куликовская битва?', ar: 'في أي عام جرت معركة كوليكوفو؟', zh: '库利科沃战役发生在哪一年？' },
      options: [
        { en: '1380', ru: '1380', ar: '1380', zh: '1380' },
        { en: '1240', ru: '1240', ar: '1240', zh: '1240' },
        { en: '1480', ru: '1480', ar: '1480', zh: '1480' },
        { en: '1147', ru: '1147', ar: '1147', zh: '1147' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Which Moscow prince won at Kulikovo?', ru: 'Какой московский князь победил на Куликовом поле?', ar: 'أي أمير موسكوفي انتصر في كوليكوفو؟', zh: '哪位莫斯科王公在库利科沃取得胜利？' },
      options: [
        { en: 'Ivan Kalita', ru: 'Иван Калита', ar: 'إيفان كاليتا', zh: '伊凡·卡利塔' },
        { en: 'Dmitry Donskoy', ru: 'Дмитрий Донской', ar: 'دميتري دونسكوي', zh: '德米特里·顿斯科伊' },
        { en: 'Ivan III', ru: 'Иван III', ar: 'إيفان الثالث', zh: '伊凡三世' },
        { en: 'Alexander Nevsky', ru: 'Александр Невский', ar: 'ألكسندر نيفسكي', zh: '亚历山大·涅夫斯基' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Kulikovo was a victory over which force?', ru: 'Куликовская битва была победой над какой силой?', ar: 'كانت كوليكوفو انتصارًا على أي قوة؟', zh: '库利科沃是对哪一方的胜利？' },
      options: [
        { en: 'The Swedes', ru: 'Шведами', ar: 'السويديين', zh: '瑞典人' },
        { en: 'The Teutonic Knights', ru: 'Тевтонскими рыцарями', ar: 'فرسان التيوتون', zh: '条顿骑士' },
        { en: 'The Golden Horde (Mamai)', ru: 'Золотой Ордой (Мамаем)', ar: 'القبيلة الذهبية (مماي)', zh: '金帐汗国（马麦）' },
        { en: 'Poland', ru: 'Польшей', ar: 'بولندا', zh: '波兰' },
      ],
      correct: 2,
    },
  ],
  'ivan-iii': [
    {
      question: { en: 'In what year did Ivan III end the Mongol Yoke?', ru: 'В каком году Иван III покончил с монгольским игом?', ar: 'في أي عام أنهى إيفان الثالث النير المغولي؟', zh: '伊凡三世在哪一年结束了蒙古枷锁？' },
      options: [
        { en: '1480', ru: '1480', ar: '1480', zh: '1480' },
        { en: '1380', ru: '1380', ar: '1380', zh: '1380' },
        { en: '1240', ru: '1240', ar: '1240', zh: '1240' },
        { en: '1547', ru: '1547', ar: '1547', zh: '1547' },
      ],
      correct: 0,
    },
    {
      question: { en: 'The end of the yoke is linked to the “Stand on the river...”', ru: 'Конец ига связан со «Стоянием на реке...»', ar: 'يرتبط نهاية النير بـ«الوقوف على نهر...»', zh: '枷锁的终结与「在……河上的对峙」相关。' },
      options: [
        { en: 'Don', ru: 'Дон', ar: 'الدون', zh: '顿河' },
        { en: 'Ugra', ru: 'Угра', ar: 'أوغرا', zh: '乌格拉河' },
        { en: 'Neva', ru: 'Нева', ar: 'نيفا', zh: '涅瓦河' },
        { en: 'Volga', ru: 'Волга', ar: 'الفولغا', zh: '伏尔加河' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Ivan III adopted which symbol as the state emblem?', ru: 'Какой символ Иван III принял в качестве государственного герба?', ar: 'أي رمز اتخذه إيفان الثالث شعارًا للدولة؟', zh: '伊凡三世采用了哪种符号作为国徽？' },
      options: [
        { en: 'The bear', ru: 'Медведя', ar: 'الدب', zh: '熊' },
        { en: 'The lion', ru: 'Льва', ar: 'الأسد', zh: '狮子' },
        { en: 'The double-headed eagle', ru: 'Двуглавого орла', ar: 'النسر ذو الرأسين', zh: '双头鹰' },
        { en: 'The hammer and sickle', ru: 'Серп и молот', ar: 'المنجل والمطرقة', zh: '锤子与镰刀' },
      ],
      correct: 2,
    },
  ],

  // ===== Muscovite State =====
  'ivan-terrible': [
    {
      question: { en: 'Ivan IV was the first Russian ruler crowned as...', ru: 'Иван IV стал первым русским правителем, венчанным на...', ar: 'كان إيفان الرابع أول حاكم روسي يُتوّج بلقب...', zh: '伊凡四世是第一位被加冕为……的俄罗斯统治者。' },
      options: [
        { en: 'Tsar', ru: 'Царство (царём)', ar: 'قيصر', zh: '沙皇' },
        { en: 'Emperor', ru: 'Императора', ar: 'إمبراطور', zh: '皇帝' },
        { en: 'King', ru: 'Короля', ar: 'ملك', zh: '国王' },
        { en: 'Khan', ru: 'Хана', ar: 'خان', zh: '可汗' },
      ],
      correct: 0,
    },
    {
      question: { en: 'In what year was Ivan IV crowned Tsar?', ru: 'В каком году Иван IV венчался на царство?', ar: 'في أي عام تُوّج إيفان الرابع قيصرًا؟', zh: '伊凡四世在哪一年加冕为沙皇？' },
      options: [
        { en: '1480', ru: '1480', ar: '1480', zh: '1480' },
        { en: '1547', ru: '1547', ar: '1547', zh: '1547' },
        { en: '1613', ru: '1613', ar: '1613', zh: '1613' },
        { en: '1721', ru: '1721', ar: '1721', zh: '1721' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Ivan IV is remembered as both a reformer and a...', ru: 'Иван IV запомнился как реформатор и одновременно...', ar: 'يُذكر إيفان الرابع بأنه مصلح وفي الوقت نفسه...', zh: '伊凡四世既被记为改革者，也被记为……' },
      options: [
        { en: 'Peaceful monk', ru: 'Мирный монах', ar: 'راهب مسالم', zh: '平和的修士' },
        { en: 'Foreign king', ru: 'Иностранный король', ar: 'ملك أجنبي', zh: '外国国王' },
        { en: 'Brutal tyrant', ru: 'Жестокий тиран', ar: 'طاغية وحشي', zh: '残暴的暴君' },
        { en: 'Famous explorer', ru: 'Знаменитый первооткрыватель', ar: 'مستكشف شهير', zh: '著名探险家' },
      ],
      correct: 2,
    },
  ],
  'oprichnina': [
    {
      question: { en: 'The Oprichnina was Ivan IV’s policy of...', ru: 'Опричнина была политикой Ивана IV, означавшей...', ar: 'كانت الأوبريتشنينا سياسة إيفان الرابع المتمثلة في...', zh: '特辖制是伊凡四世推行的什么政策？' },
      options: [
        { en: 'Terror and a state within the state', ru: 'Террор и государство в государстве', ar: 'الإرهاب ودولة داخل الدولة', zh: '恐怖统治与国中之国' },
        { en: 'Religious tolerance', ru: 'Религиозную терпимость', ar: 'التسامح الديني', zh: '宗教宽容' },
        { en: 'Land reform for peasants', ru: 'Земельную реформу для крестьян', ar: 'إصلاح أراضي الفلاحين', zh: '农民土地改革' },
        { en: 'Free foreign trade', ru: 'Свободную внешнюю торговлю', ar: 'التجارة الخارجية الحرة', zh: '自由对外贸易' },
      ],
      correct: 0,
    },
    {
      question: { en: 'The oprichniki are associated with which symbol?', ru: 'С каким символом связаны опричники?', ar: 'بأي رمز يرتبط الأوبريتشنيون؟', zh: '特辖军与哪种象征物相关？' },
      options: [
        { en: 'A cross', ru: 'Крест', ar: 'صليب', zh: '十字架' },
        { en: 'A dog’s head and a broom', ru: 'Собачья голова и метла', ar: 'رأس كلب ومكنسة', zh: '狗头与扫帚' },
        { en: 'An eagle', ru: 'Орёл', ar: 'نسر', zh: '鹰' },
        { en: 'A sword and shield', ru: 'Меч и щит', ar: 'سيف ودرع', zh: '剑与盾' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The Oprichnina mainly targeted the...', ru: 'Опричнина была направлена прежде всего против...', ar: 'استهدفت الأوبريتشنينا بشكل رئيسي...', zh: '特辖制主要针对的是……' },
      options: [
        { en: 'Peasants', ru: 'Крестьян', ar: 'الفلاحين', zh: '农民' },
        { en: 'Merchants', ru: 'Купцов', ar: 'التجار', zh: '商人' },
        { en: 'Boyars (nobility)', ru: 'Бояр (знать)', ar: 'البويار (النبلاء)', zh: '波雅尔（贵族）' },
        { en: 'The clergy only', ru: 'Только духовенство', ar: 'رجال الدين فقط', zh: '只有神职人员' },
      ],
      correct: 2,
    },
  ],
  'siberia-yermak': [
    {
      question: { en: 'Who was Yermak?', ru: 'Кем был Ермак?', ar: 'من كان يرماك؟', zh: '叶尔马克是谁？' },
      options: [
        { en: 'A Cossack ataman', ru: 'Казачий атаман', ar: 'أتامان قوزاقي', zh: '哥萨克首领' },
        { en: 'A tsar', ru: 'Царь', ar: 'قيصر', zh: '沙皇' },
        { en: 'A monk', ru: 'Монах', ar: 'راهب', zh: '修士' },
        { en: 'A Mongol khan', ru: 'Монгольский хан', ar: 'خان مغولي', zh: '蒙古可汗' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Which region did Yermak open for Russia?', ru: 'Какой край Ермак открыл для России?', ar: 'أي إقليم فتحه يرماك لروسيا؟', zh: '叶尔马克为俄罗斯打开了哪个地区？' },
      options: [
        { en: 'Crimea', ru: 'Крым', ar: 'القرم', zh: '克里米亚' },
        { en: 'Siberia', ru: 'Сибирь', ar: 'سيبيريا', zh: '西伯利亚' },
        { en: 'The Baltic', ru: 'Прибалтику', ar: 'البلطيق', zh: '波罗的海地区' },
        { en: 'The Caucasus', ru: 'Кавказ', ar: 'القوقاز', zh: '高加索' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Yermak’s campaign was against the Khanate of...', ru: 'Поход Ермака был направлен против ханства...', ar: 'كانت حملة يرماك ضد خانية...', zh: '叶尔马克的远征针对的是哪个汗国？' },
      options: [
        { en: 'Kazan', ru: 'Казанского', ar: 'قازان', zh: '喀山' },
        { en: 'Crimea', ru: 'Крымского', ar: 'القرم', zh: '克里米亚' },
        { en: 'Sibir', ru: 'Сибирского', ar: 'سيبير', zh: '失必儿' },
        { en: 'Astrakhan', ru: 'Астраханского', ar: 'أستراخان', zh: '阿斯特拉罕' },
      ],
      correct: 2,
    },
  ],

  // ===== Time of Troubles =====
  'false-dmitry': [
    {
      question: { en: 'False Dmitry I claimed to be the son of...', ru: 'Лжедмитрий I выдавал себя за сына...', ar: 'ادّعى ديمتري المزيف الأول أنه ابن...', zh: '伪德米特里一世自称是谁的儿子？' },
      options: [
        { en: 'Ivan the Terrible', ru: 'Ивана Грозного', ar: 'إيفان الرهيب', zh: '伊凡雷帝' },
        { en: 'Peter the Great', ru: 'Петра Великого', ar: 'بطرس الأكبر', zh: '彼得大帝' },
        { en: 'Rurik', ru: 'Рюрика', ar: 'روريك', zh: '留里克' },
        { en: 'Boris Godunov', ru: 'Бориса Годунова', ar: 'بوريس غودونوف', zh: '鲍里斯·戈东诺夫' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Which country backed False Dmitry I?', ru: 'Какая страна поддержала Лжедмитрия I?', ar: 'أي دولة دعمت ديمتري المزيف الأول؟', zh: '哪个国家支持伪德米特里一世？' },
      options: [
        { en: 'Sweden', ru: 'Швеция', ar: 'السويد', zh: '瑞典' },
        { en: 'Poland (the Commonwealth)', ru: 'Польша (Речь Посполитая)', ar: 'بولندا (الكومنولث)', zh: '波兰（联邦）' },
        { en: 'England', ru: 'Англия', ar: 'إنجلترا', zh: '英格兰' },
        { en: 'The Ottoman Empire', ru: 'Османская империя', ar: 'الإمبراطورية العثمانية', zh: '奥斯曼帝国' },
      ],
      correct: 1,
    },
    {
      question: { en: 'False Dmitry I briefly seized the...', ru: 'Лжедмитрий I ненадолго захватил...', ar: 'استولى ديمتري المزيف الأول لفترة وجيزة على...', zh: '伪德米特里一世短暂夺取了……' },
      options: [
        { en: 'The Polish crown', ru: 'Польскую корону', ar: 'التاج البولندي', zh: '波兰王位' },
        { en: 'The patriarchate', ru: 'Патриаршество', ar: 'منصب البطريرك', zh: '牧首之位' },
        { en: 'The Russian throne', ru: 'Русский престол', ar: 'العرش الروسي', zh: '俄罗斯王位' },
        { en: 'The Novgorod republic', ru: 'Новгородскую республику', ar: 'جمهورية نوفغورود', zh: '诺夫哥罗德共和国' },
      ],
      correct: 2,
    },
  ],
  'minin-pozharsky': [
    {
      question: { en: 'Minin and Pozharsky led a militia against which occupiers?', ru: 'Минин и Пожарский возглавили ополчение против каких захватчиков?', ar: 'قاد مينين وبوجارسكي ميليشيا ضد أي محتلين؟', zh: '米宁和波扎尔斯基率领民兵反抗哪些占领者？' },
      options: [
        { en: 'Polish forces', ru: 'Польских войск', ar: 'القوات البولندية', zh: '波兰军队' },
        { en: 'The Mongols', ru: 'Монголов', ar: 'المغول', zh: '蒙古人' },
        { en: 'The Teutonic Knights', ru: 'Тевтонских рыцарей', ar: 'فرسان التيوتون', zh: '条顿骑士' },
        { en: 'The French', ru: 'Французов', ar: 'الفرنسيين', zh: '法国人' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Kuzma Minin was a...', ru: 'Кузьма Минин был...', ar: 'كان كوزما مينين...', zh: '库兹马·米宁是一位……' },
      options: [
        { en: 'Prince', ru: 'Князем', ar: 'أميرًا', zh: '王公' },
        { en: 'Merchant', ru: 'Купцом', ar: 'تاجرًا', zh: '商人' },
        { en: 'Tsar', ru: 'Царём', ar: 'قيصرًا', zh: '沙皇' },
        { en: 'Patriarch', ru: 'Патриархом', ar: 'بطريركًا', zh: '牧首' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Their 1612 victory helped end the...', ru: 'Их победа 1612 года помогла завершить...', ar: 'ساعد انتصارهما عام 1612 على إنهاء...', zh: '他们1612年的胜利帮助结束了……' },
      options: [
        { en: 'Mongol Yoke', ru: 'Монгольское иго', ar: 'النير المغولي', zh: '蒙古枷锁' },
        { en: 'Northern War', ru: 'Северную войну', ar: 'الحرب الشمالية', zh: '大北方战争' },
        { en: 'Time of Troubles', ru: 'Смутное время', ar: 'زمن الاضطرابات', zh: '混乱时期' },
        { en: 'Civil War', ru: 'Гражданскую войну', ar: 'الحرب الأهلية', zh: '内战' },
      ],
      correct: 2,
    },
  ],
  // ===== Peter the Great =====
  'peter-reforms': [
    {
      question: { en: 'Peter I’s reforms aimed to make Russia more...', ru: 'Реформы Петра I стремились сделать Россию более...', ar: 'هدفت إصلاحات بطرس الأول إلى جعل روسيا أكثر...', zh: '彼得一世的改革旨在使俄罗斯更加……' },
      options: [
        { en: 'European (Western)', ru: 'Европейской (западной)', ar: 'أوروبية (غربية)', zh: '欧洲化（西方化）' },
        { en: 'Isolationist', ru: 'Изоляционистской', ar: 'انعزالية', zh: '闭关自守' },
        { en: 'Purely agrarian', ru: 'Чисто аграрной', ar: 'زراعية بحتة', zh: '纯农业化' },
        { en: 'Asian', ru: 'Азиатской', ar: 'آسيوية', zh: '亚洲化' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Peter introduced a famous tax on...', ru: 'Пётр ввёл знаменитый налог на...', ar: 'فرض بطرس ضريبة شهيرة على...', zh: '彼得开征了一项著名的……税。' },
      options: [
        { en: 'Windows', ru: 'Окна', ar: 'النوافذ', zh: '窗户' },
        { en: 'Beards', ru: 'Бороды', ar: 'اللحى', zh: '胡须' },
        { en: 'Salt', ru: 'Соль', ar: 'الملح', zh: '盐' },
        { en: 'Icons', ru: 'Иконы', ar: 'الأيقونات', zh: '圣像' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Peter I created the Russian...', ru: 'Пётр I создал русский...', ar: 'أنشأ بطرس الأول... الروسي.', zh: '彼得一世建立了俄罗斯的……' },
      options: [
        { en: 'Parliament (Duma)', ru: 'Парламент (Думу)', ar: 'البرلمان (الدوما)', zh: '议会（杜马）' },
        { en: 'Republic', ru: 'Республику', ar: 'الجمهورية', zh: '共和国' },
        { en: 'Navy', ru: 'Флот', ar: 'الأسطول البحري', zh: '海军' },
        { en: 'Independent church', ru: 'Независимую церковь', ar: 'كنيسة مستقلة', zh: '独立教会' },
      ],
      correct: 2,
    },
  ],
  'saint-petersburg': [
    {
      question: { en: 'In what year was Saint Petersburg founded?', ru: 'В каком году был основан Санкт-Петербург?', ar: 'في أي عام تأسست سانت بطرسبرغ؟', zh: '圣彼得堡建于哪一年？' },
      options: [
        { en: '1703', ru: '1703', ar: '1703', zh: '1703' },
        { en: '1612', ru: '1612', ar: '1612', zh: '1612' },
        { en: '1812', ru: '1812', ar: '1812', zh: '1812' },
        { en: '1547', ru: '1547', ar: '1547', zh: '1547' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Peter called the new city his “Window to...”', ru: 'Пётр называл новый город своим «Окном в...»', ar: 'سمّى بطرس المدينة الجديدة «نافذته على...»', zh: '彼得称这座新城为他的「通往……之窗」。' },
      options: [
        { en: 'Asia', ru: 'Азию', ar: 'آسيا', zh: '亚洲' },
        { en: 'Europe', ru: 'Европу', ar: 'أوروبا', zh: '欧洲' },
        { en: 'The East', ru: 'Восток', ar: 'الشرق', zh: '东方' },
        { en: 'Heaven', ru: 'Небеса', ar: 'السماء', zh: '天堂' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The city was built on the marshes of which river?', ru: 'Город был построен на болотах какой реки?', ar: 'بُنيت المدينة على مستنقعات أي نهر؟', zh: '这座城市建在哪条河的沼泽上？' },
      options: [
        { en: 'Volga', ru: 'Волги', ar: 'الفولغا', zh: '伏尔加河' },
        { en: 'Don', ru: 'Дона', ar: 'الدون', zh: '顿河' },
        { en: 'Neva', ru: 'Невы', ar: 'نيفا', zh: '涅瓦河' },
        { en: 'Moskva', ru: 'Москвы-реки', ar: 'موسكفا', zh: '莫斯科河' },
      ],
      correct: 2,
    },
  ],
  'battle-poltava': [
    {
      question: { en: 'At Poltava (1709) Russia defeated which country?', ru: 'Под Полтавой (1709) Россия разбила какую страну?', ar: 'في بولتافا (1709) هزمت روسيا أي دولة؟', zh: '在波尔塔瓦（1709），俄罗斯击败了哪个国家？' },
      options: [
        { en: 'Sweden', ru: 'Швецию', ar: 'السويد', zh: '瑞典' },
        { en: 'France', ru: 'Францию', ar: 'فرنسا', zh: '法国' },
        { en: 'Poland', ru: 'Польшу', ar: 'بولندا', zh: '波兰' },
        { en: 'The Ottoman Empire', ru: 'Османскую империю', ar: 'الإمبراطورية العثمانية', zh: '奥斯曼帝国' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Poltava was a decisive battle of the...', ru: 'Полтава стала решающей битвой...', ar: 'كانت بولتافا معركة حاسمة في...', zh: '波尔塔瓦是哪场战争的决定性战役？' },
      options: [
        { en: 'Crimean War', ru: 'Крымской войны', ar: 'حرب القرم', zh: '克里米亚战争' },
        { en: 'Great Northern War', ru: 'Северной войны', ar: 'الحرب الشمالية الكبرى', zh: '大北方战争' },
        { en: 'Patriotic War of 1812', ru: 'Отечественной войны 1812 года', ar: 'الحرب الوطنية عام 1812', zh: '1812年卫国战争' },
        { en: 'World War I', ru: 'Первой мировой войны', ar: 'الحرب العالمية الأولى', zh: '第一次世界大战' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Which Swedish king was defeated at Poltava?', ru: 'Какой шведский король был разбит под Полтавой?', ar: 'أي ملك سويدي هُزم في بولتافا؟', zh: '哪位瑞典国王在波尔塔瓦战败？' },
      options: [
        { en: 'Gustavus Adolphus', ru: 'Густав II Адольф', ar: 'غوستاف أدولف', zh: '古斯塔夫·阿道夫' },
        { en: 'Frederick the Great', ru: 'Фридрих Великий', ar: 'فريدريك العظيم', zh: '腓特烈大帝' },
        { en: 'Charles XII', ru: 'Карл XII', ar: 'تشارلز الثاني عشر', zh: '查理十二世' },
        { en: 'Napoleon', ru: 'Наполеон', ar: 'نابليون', zh: '拿破仑' },
      ],
      correct: 2,
    },
  ],
  'northern-war': [
    {
      question: { en: 'The Great Northern War was fought mainly between Russia and...', ru: 'Северная война велась в основном между Россией и...', ar: 'دارت الحرب الشمالية الكبرى أساسًا بين روسيا و...', zh: '大北方战争主要在俄罗斯与谁之间进行？' },
      options: [
        { en: 'Sweden', ru: 'Швецией', ar: 'السويد', zh: '瑞典' },
        { en: 'France', ru: 'Францией', ar: 'فرنسا', zh: '法国' },
        { en: 'Turkey', ru: 'Турцией', ar: 'تركيا', zh: '土耳其' },
        { en: 'China', ru: 'Китаем', ar: 'الصين', zh: '中国' },
      ],
      correct: 0,
    },
    {
      question: { en: 'About how long did the Northern War last?', ru: 'Около скольких лет длилась Северная война?', ar: 'كم استمرت الحرب الشمالية تقريبًا؟', zh: '大北方战争大约持续了多久？' },
      options: [
        { en: '5 years', ru: '5 лет', ar: '5 سنوات', zh: '5年' },
        { en: '21 years', ru: '21 год', ar: '21 عامًا', zh: '21年' },
        { en: '100 years', ru: '100 лет', ar: '100 عام', zh: '100年' },
        { en: '7 years', ru: '7 лет', ar: '7 سنوات', zh: '7年' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Its outcome made Russia the dominant power in the...', ru: 'Её итог сделал Россию господствующей державой на...', ar: 'جعلت نتيجتها روسيا القوة المهيمنة في...', zh: '其结果使俄罗斯成为哪一海域的主导强国？' },
      options: [
        { en: 'Pacific', ru: 'Тихом океане', ar: 'المحيط الهادئ', zh: '太平洋' },
        { en: 'Mediterranean', ru: 'Средиземном море', ar: 'البحر المتوسط', zh: '地中海' },
        { en: 'Baltic', ru: 'Балтике', ar: 'بحر البلطيق', zh: '波罗的海' },
        { en: 'Black Sea', ru: 'Чёрном море', ar: 'البحر الأسود', zh: '黑海' },
      ],
      correct: 2,
    },
  ],

  // ===== Catherine the Great =====
  'enlightened-absolutism': [
    {
      question: { en: 'Enlightened absolutism tried to combine autocracy with...', ru: 'Просвещённый абсолютизм пытался сочетать самодержавие с...', ar: 'حاول الاستبداد المستنير الجمع بين الحكم المطلق و...', zh: '开明专制试图把专制与什么结合起来？' },
      options: [
        { en: 'Enlightenment ideas', ru: 'Идеями Просвещения', ar: 'أفكار التنوير', zh: '启蒙思想' },
        { en: 'Feudal anarchy', ru: 'Феодальной анархией', ar: 'الفوضى الإقطاعية', zh: '封建无政府状态' },
        { en: 'Theocracy', ru: 'Теократией', ar: 'الثيوقراطية', zh: '神权统治' },
        { en: 'Direct democracy', ru: 'Прямой демократией', ar: 'الديمقراطية المباشرة', zh: '直接民主' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Which empress is associated with enlightened absolutism in Russia?', ru: 'С какой императрицей связан просвещённый абсолютизм в России?', ar: 'بأي إمبراطورة يرتبط الاستبداد المستنير في روسيا؟', zh: '俄罗斯的开明专制与哪位女皇相关？' },
      options: [
        { en: 'Empress Anna', ru: 'Императрицей Анной', ar: 'الإمبراطورة آنا', zh: '安娜女皇' },
        { en: 'Catherine II', ru: 'Екатериной II', ar: 'كاترين الثانية', zh: '叶卡捷琳娜二世' },
        { en: 'Empress Elizabeth', ru: 'Императрицей Елизаветой', ar: 'الإمبراطورة إليزابيث', zh: '伊丽莎白女皇' },
        { en: 'Regent Sophia', ru: 'Царевной Софьей', ar: 'الوصية صوفيا', zh: '摄政索菲娅' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Catherine corresponded with which Enlightenment thinkers?', ru: 'С какими мыслителями Просвещения переписывалась Екатерина?', ar: 'مع أي مفكري التنوير تراسلت كاترين؟', zh: '叶卡捷琳娜与哪些启蒙思想家通信？' },
      options: [
        { en: 'Marx and Engels', ru: 'Марксом и Энгельсом', ar: 'ماركس وإنجلز', zh: '马克思和恩格斯' },
        { en: 'Plato and Aristotle', ru: 'Платоном и Аристотелем', ar: 'أفلاطون وأرسطو', zh: '柏拉图和亚里士多德' },
        { en: 'Voltaire and Diderot', ru: 'Вольтером и Дидро', ar: 'فولتير وديدرو', zh: '伏尔泰和狄德罗' },
        { en: 'Locke and Hobbes', ru: 'Локком и Гоббсом', ar: 'لوك وهوبز', zh: '洛克和霍布斯' },
      ],
      correct: 2,
    },
  ],
  'pugachev': [
    {
      question: { en: 'The Pugachev uprising was mainly a...', ru: 'Восстание Пугачёва было в основном...', ar: 'كانت انتفاضة بوغاتشوف بشكل رئيسي...', zh: '普加乔夫起义主要是一场……' },
      options: [
        { en: 'Peasant and Cossack rebellion', ru: 'Крестьянско-казачьим восстанием', ar: 'تمرّد فلاحين وقوزاق', zh: '农民与哥萨克起义' },
        { en: 'Palace coup', ru: 'Дворцовым переворотом', ar: 'انقلاب قصر', zh: '宫廷政变' },
        { en: 'Foreign invasion', ru: 'Иностранным вторжением', ar: 'غزو أجنبي', zh: '外国入侵' },
        { en: 'Religious schism', ru: 'Религиозным расколом', ar: 'انشقاق ديني', zh: '宗教分裂' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Pugachev claimed to be the late Tsar...', ru: 'Пугачёв выдавал себя за покойного царя...', ar: 'ادّعى بوغاتشوف أنه القيصر الراحل...', zh: '普加乔夫自称是已故的沙皇……' },
      options: [
        { en: 'Ivan IV', ru: 'Ивана IV', ar: 'إيفان الرابع', zh: '伊凡四世' },
        { en: 'Peter III', ru: 'Петра III', ar: 'بطرس الثالث', zh: '彼得三世' },
        { en: 'Alexander I', ru: 'Александра I', ar: 'ألكسندر الأول', zh: '亚历山大一世' },
        { en: 'Paul I', ru: 'Павла I', ar: 'بولس الأول', zh: '保罗一世' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The uprising occurred during the reign of...', ru: 'Восстание произошло в правление...', ar: 'وقعت الانتفاضة في عهد...', zh: '这场起义发生在谁的统治时期？' },
      options: [
        { en: 'Peter I', ru: 'Петра I', ar: 'بطرس الأول', zh: '彼得一世' },
        { en: 'Nicholas II', ru: 'Николая II', ar: 'نيقولا الثاني', zh: '尼古拉二世' },
        { en: 'Catherine II', ru: 'Екатерины II', ar: 'كاترين الثانية', zh: '叶卡捷琳娜二世' },
        { en: 'Alexander II', ru: 'Александра II', ar: 'ألكسندر الثاني', zh: '亚历山大二世' },
      ],
      correct: 2,
    },
  ],
  'crimea-annexation': [
    {
      question: { en: 'In what year did Russia annex Crimea under Catherine II?', ru: 'В каком году Россия присоединила Крым при Екатерине II?', ar: 'في أي عام ضمّت روسيا القرم في عهد كاترين الثانية؟', zh: '俄罗斯在叶卡捷琳娜二世时期于哪一年吞并克里米亚？' },
      options: [
        { en: '1783', ru: '1783', ar: '1783', zh: '1783' },
        { en: '1654', ru: '1654', ar: '1654', zh: '1654' },
        { en: '1812', ru: '1812', ar: '1812', zh: '1812' },
        { en: '1991', ru: '1991', ar: '1991', zh: '1991' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Crimea gave Russia access to which sea?', ru: 'Крым дал России выход к какому морю?', ar: 'منحت القرم روسيا منفذًا إلى أي بحر؟', zh: '克里米亚使俄罗斯获得了通往哪个海的出海口？' },
      options: [
        { en: 'Baltic Sea', ru: 'Балтийскому морю', ar: 'بحر البلطيق', zh: '波罗的海' },
        { en: 'Black Sea', ru: 'Чёрному морю', ar: 'البحر الأسود', zh: '黑海' },
        { en: 'Caspian Sea', ru: 'Каспийскому морю', ar: 'بحر قزوين', zh: '里海' },
        { en: 'White Sea', ru: 'Белому морю', ar: 'البحر الأبيض', zh: '白海' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Under which ruler was Crimea annexed?', ru: 'При каком правителе был присоединён Крым?', ar: 'في عهد أي حاكم ضُمّت القرم؟', zh: '克里米亚是在哪位统治者治下被吞并的？' },
      options: [
        { en: 'Peter I', ru: 'Петре I', ar: 'بطرس الأول', zh: '彼得一世' },
        { en: 'Ivan IV', ru: 'Иване IV', ar: 'إيفان الرابع', zh: '伊凡四世' },
        { en: 'Catherine II', ru: 'Екатерине II', ar: 'كاترين الثانية', zh: '叶卡捷琳娜二世' },
        { en: 'Alexander I', ru: 'Александре I', ar: 'ألكسندر الأول', zh: '亚历山大一世' },
      ],
      correct: 2,
    },
  ],

  // ===== Napoleon & 1812 =====
  'patriotic-war': [
    {
      question: { en: 'In what year did Napoleon invade Russia?', ru: 'В каком году Наполеон вторгся в Россию?', ar: 'في أي عام غزا نابليون روسيا؟', zh: '拿破仑在哪一年入侵俄罗斯？' },
      options: [
        { en: '1812', ru: '1812', ar: '1812', zh: '1812' },
        { en: '1709', ru: '1709', ar: '1709', zh: '1709' },
        { en: '1853', ru: '1853', ar: '1853', zh: '1853' },
        { en: '1914', ru: '1914', ar: '1914', zh: '1914' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Napoleon’s army was known as the...', ru: 'Армия Наполеона была известна как...', ar: 'عُرف جيش نابليون باسم...', zh: '拿破仑的军队被称为……' },
      options: [
        { en: 'Red Army', ru: 'Красная армия', ar: 'الجيش الأحمر', zh: '红军' },
        { en: 'Grande Armée', ru: 'Великая армия', ar: 'الجيش الكبير', zh: '大军团' },
        { en: 'Golden Horde', ru: 'Золотая Орда', ar: 'القبيلة الذهبية', zh: '金帐汗国' },
        { en: 'Wehrmacht', ru: 'Вермахт', ar: 'الفيرماخت', zh: '国防军' },
      ],
      correct: 1,
    },
    {
      question: { en: 'A key Russian strategy in 1812 was...', ru: 'Ключевой стратегией России в 1812 году была...', ar: 'كانت إحدى استراتيجيات روسيا الرئيسية عام 1812...', zh: '俄罗斯1812年的关键策略是……' },
      options: [
        { en: 'A naval blockade', ru: 'Морская блокада', ar: 'حصار بحري', zh: '海上封锁' },
        { en: 'An invasion of France', ru: 'Вторжение во Францию', ar: 'غزو فرنسا', zh: '入侵法国' },
        { en: 'Retreat and scorched earth', ru: 'Отступление и тактика выжженной земли', ar: 'الانسحاب وسياسة الأرض المحروقة', zh: '撤退与焦土战术' },
        { en: 'Building a wall', ru: 'Строительство стены', ar: 'بناء جدار', zh: '修建长墙' },
      ],
      correct: 2,
    },
  ],
  'borodino': [
    {
      question: { en: 'The Battle of Borodino was fought near which city?', ru: 'Бородинское сражение произошло близ какого города?', ar: 'دارت معركة بورودينو بالقرب من أي مدينة؟', zh: '博罗季诺战役在哪座城市附近爆发？' },
      options: [
        { en: 'Moscow', ru: 'Москвы', ar: 'موسكو', zh: '莫斯科' },
        { en: 'St. Petersburg', ru: 'Санкт-Петербурга', ar: 'سانت بطرسبرغ', zh: '圣彼得堡' },
        { en: 'Kiev', ru: 'Киева', ar: 'كييف', zh: '基辅' },
        { en: 'Smolensk', ru: 'Смоленска', ar: 'سمولينسك', zh: '斯摩棱斯克' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Who commanded the Russian army at Borodino?', ru: 'Кто командовал русской армией при Бородине?', ar: 'من قاد الجيش الروسي في بورودينو؟', zh: '谁指挥了博罗季诺战役中的俄军？' },
      options: [
        { en: 'Alexander Suvorov', ru: 'Александр Суворов', ar: 'ألكسندر سوفوروف', zh: '亚历山大·苏沃洛夫' },
        { en: 'Mikhail Kutuzov', ru: 'Михаил Кутузов', ar: 'ميخائيل كوتوزوف', zh: '米哈伊尔·库图佐夫' },
        { en: 'Georgy Zhukov', ru: 'Георгий Жуков', ar: 'غيورغي جوكوف', zh: '格奥尔基·朱可夫' },
        { en: 'Pyotr Bagration', ru: 'Пётр Багратион', ar: 'بيوتر باغراتيون', zh: '彼得·巴格拉季昂' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Borodino is remembered as one of the ... of the Napoleonic Wars.', ru: 'Бородино запомнилось как один из ... Наполеоновских войн.', ar: 'يُذكر بورودينو كأحد ... في الحروب النابليونية.', zh: '博罗季诺被铭记为拿破仑战争中……之一。' },
      options: [
        { en: 'Most peaceful days', ru: 'Самых мирных дней', ar: 'أكثر الأيام سلامًا', zh: '最和平的日子' },
        { en: 'Least important battles', ru: 'Наименее важных битв', ar: 'أقل المعارك أهمية', zh: '最不重要的战役' },
        { en: 'Bloodiest single days', ru: 'Самых кровопролитных дней', ar: 'أكثر الأيام دموية', zh: '最血腥的一天' },
        { en: 'Shortest sieges', ru: 'Самых коротких осад', ar: 'أقصر الحصارات', zh: '最短的围城' },
      ],
      correct: 2,
    },
  ],
  'decembrists': [
    {
      question: { en: 'The Decembrists demanded a...', ru: 'Декабристы требовали...', ar: 'طالب الديسمبريون بـ...', zh: '十二月党人要求……' },
      options: [
        { en: 'Constitution', ru: 'Конституции', ar: 'دستور', zh: '宪法' },
        { en: 'War with France', ru: 'Войны с Францией', ar: 'حرب مع فرنسا', zh: '与法国开战' },
        { en: 'Return of serfdom', ru: 'Возврата крепостного права', ar: 'إعادة القنانة', zh: '恢复农奴制' },
        { en: 'A new capital', ru: 'Новой столицы', ar: 'عاصمة جديدة', zh: '新首都' },
      ],
      correct: 0,
    },
    {
      question: { en: 'In what year was the Decembrist uprising?', ru: 'В каком году было восстание декабристов?', ar: 'في أي عام وقعت انتفاضة الديسمبريين؟', zh: '十二月党人起义发生在哪一年？' },
      options: [
        { en: '1812', ru: '1812', ar: '1812', zh: '1812' },
        { en: '1825', ru: '1825', ar: '1825', zh: '1825' },
        { en: '1905', ru: '1905', ar: '1905', zh: '1905' },
        { en: '1917', ru: '1917', ar: '1917', zh: '1917' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The Decembrists were mostly...', ru: 'Декабристы были в основном...', ar: 'كان الديسمبريون في معظمهم...', zh: '十二月党人大多是……' },
      options: [
        { en: 'Peasants', ru: 'Крестьянами', ar: 'فلاحين', zh: '农民' },
        { en: 'Merchants', ru: 'Купцами', ar: 'تجارًا', zh: '商人' },
        { en: 'Noble army officers', ru: 'Дворянскими офицерами', ar: 'ضباط جيش نبلاء', zh: '贵族军官' },
        { en: 'Clergy', ru: 'Духовенством', ar: 'رجال دين', zh: '神职人员' },
      ],
      correct: 2,
    },
  ],

  // ===== Great Reforms =====
  'abolition-serfdom': [
    {
      question: { en: 'In what year was serfdom abolished in Russia?', ru: 'В каком году в России отменили крепостное право?', ar: 'في أي عام أُلغيت القنانة في روسيا؟', zh: '俄罗斯在哪一年废除了农奴制？' },
      options: [
        { en: '1861', ru: '1861', ar: '1861', zh: '1861' },
        { en: '1812', ru: '1812', ar: '1812', zh: '1812' },
        { en: '1905', ru: '1905', ar: '1905', zh: '1905' },
        { en: '1917', ru: '1917', ar: '1917', zh: '1917' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Which tsar abolished serfdom?', ru: 'Какой царь отменил крепостное право?', ar: 'أي قيصر ألغى القنانة؟', zh: '哪位沙皇废除了农奴制？' },
      options: [
        { en: 'Nicholas I', ru: 'Николай I', ar: 'نيقولا الأول', zh: '尼古拉一世' },
        { en: 'Alexander II', ru: 'Александр II', ar: 'ألكسندر الثاني', zh: '亚历山大二世' },
        { en: 'Peter I', ru: 'Пётр I', ar: 'بطرس الأول', zh: '彼得一世' },
        { en: 'Alexander III', ru: 'Александр III', ar: 'ألكسندر الثالث', zh: '亚历山大三世' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Roughly how many serfs were freed?', ru: 'Примерно сколько крепостных было освобождено?', ar: 'كم عدد الأقنان الذين حُرّروا تقريبًا؟', zh: '大约有多少农奴获得了解放？' },
      options: [
        { en: 'About 200', ru: 'Около 200', ar: 'نحو 200', zh: '约200人' },
        { en: 'About 1 thousand', ru: 'Около 1 тысячи', ar: 'نحو ألف', zh: '约1千人' },
        { en: 'About 23 million', ru: 'Около 23 миллионов', ar: 'نحو 23 مليونًا', zh: '约2300万人' },
        { en: 'About 500 million', ru: 'Около 500 миллионов', ar: 'نحو 500 مليون', zh: '约5亿人' },
      ],
      correct: 2,
    },
  ],
  'trans-siberian': [
    {
      question: { en: 'The Trans-Siberian Railway connected European Russia to the...', ru: 'Транссибирская магистраль соединила европейскую Россию с...', ar: 'ربطت سكة حديد سيبيريا العابرة روسيا الأوروبية بـ...', zh: '西伯利亚大铁路将欧洲俄罗斯与……相连。' },
      options: [
        { en: 'Pacific Ocean', ru: 'Тихим океаном', ar: 'المحيط الهادئ', zh: '太平洋' },
        { en: 'Atlantic Ocean', ru: 'Атлантическим океаном', ar: 'المحيط الأطلسي', zh: '大西洋' },
        { en: 'Black Sea only', ru: 'Только Чёрным морем', ar: 'البحر الأسود فقط', zh: '仅黑海' },
        { en: 'Arctic only', ru: 'Только Арктикой', ar: 'القطب الشمالي فقط', zh: '仅北极' },
      ],
      correct: 0,
    },
    {
      question: { en: 'The railway is famous as a great ... feat.', ru: 'Магистраль знаменита как великое ... достижение.', ar: 'تشتهر السكة كإنجاز ... عظيم.', zh: '这条铁路以伟大的……壮举而闻名。' },
      options: [
        { en: 'Military', ru: 'Военное', ar: 'عسكري', zh: '军事' },
        { en: 'Engineering', ru: 'Инженерное', ar: 'هندسي', zh: '工程' },
        { en: 'Artistic', ru: 'Художественное', ar: 'فني', zh: '艺术' },
        { en: 'Religious', ru: 'Религиозное', ar: 'ديني', zh: '宗教' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Under which tsar was construction begun?', ru: 'При каком царе началось строительство?', ar: 'في عهد أي قيصر بدأ البناء؟', zh: '建设是在哪位沙皇治下开始的？' },
      options: [
        { en: 'Peter I', ru: 'Петре I', ar: 'بطرس الأول', zh: '彼得一世' },
        { en: 'Ivan IV', ru: 'Иване IV', ar: 'إيفان الرابع', zh: '伊凡四世' },
        { en: 'Alexander III', ru: 'Александре III', ar: 'ألكسندر الثالث', zh: '亚历山大三世' },
        { en: 'Lenin', ru: 'Ленине', ar: 'لينين', zh: '列宁' },
      ],
      correct: 2,
    },
  ],

  // ===== Late Empire & Revolution =====
  'nicholas-ii': [
    {
      question: { en: 'Nicholas II was the last emperor of which dynasty?', ru: 'Николай II был последним императором какой династии?', ar: 'كان نيقولا الثاني آخر إمبراطور من أي سلالة؟', zh: '尼古拉二世是哪个王朝的末代皇帝？' },
      options: [
        { en: 'Romanov', ru: 'Романовых', ar: 'رومانوف', zh: '罗曼诺夫' },
        { en: 'Rurik', ru: 'Рюриковичей', ar: 'روريك', zh: '留里克' },
        { en: 'Godunov', ru: 'Годуновых', ar: 'غودونوف', zh: '戈东诺夫' },
        { en: 'Soviet', ru: 'Советской', ar: 'السوفيتية', zh: '苏维埃' },
      ],
      correct: 0,
    },
    {
      question: { en: 'In what year did Nicholas II abdicate?', ru: 'В каком году Николай II отрёкся от престола?', ar: 'في أي عام تنازل نيقولا الثاني عن العرش؟', zh: '尼古拉二世在哪一年退位？' },
      options: [
        { en: '1881', ru: '1881', ar: '1881', zh: '1881' },
        { en: '1917', ru: '1917', ar: '1917', zh: '1917' },
        { en: '1905', ru: '1905', ar: '1905', zh: '1905' },
        { en: '1924', ru: '1924', ar: '1924', zh: '1924' },
      ],
      correct: 1,
    },
    {
      question: { en: 'His reign ended with the...', ru: 'Его правление завершилось...', ar: 'انتهى حكمه بـ...', zh: '他的统治以……告终。' },
      options: [
        { en: 'Victory in WWI', ru: 'Победой в Первой мировой', ar: 'النصر في الحرب العالمية الأولى', zh: '一战胜利' },
        { en: 'Annexation of Crimea', ru: 'Присоединением Крыма', ar: 'ضمّ القرم', zh: '吞并克里米亚' },
        { en: 'Fall of the monarchy', ru: 'Падением монархии', ar: 'سقوط الملكية', zh: '君主制的覆灭' },
        { en: 'The Great Reforms', ru: 'Великими реформами', ar: 'الإصلاحات الكبرى', zh: '大改革' },
      ],
      correct: 2,
    },
  ],
  'bloody-sunday': [
    {
      question: { en: 'Bloody Sunday (1905) was the shooting of...', ru: 'Кровавое воскресенье (1905) — это расстрел...', ar: 'كان الأحد الدامي (1905) إطلاق نار على...', zh: '流血星期日（1905）是对……的开枪。' },
      options: [
        { en: 'Peaceful protesters', ru: 'Мирных демонстрантов', ar: 'متظاهرين سلميين', zh: '和平抗议者' },
        { en: 'Enemy soldiers', ru: 'Вражеских солдат', ar: 'جنود أعداء', zh: '敌军士兵' },
        { en: 'Rebels in Siberia', ru: 'Мятежников в Сибири', ar: 'متمردين في سيبيريا', zh: '西伯利亚的叛军' },
        { en: 'Sailors at sea', ru: 'Моряков в море', ar: 'بحّارة في البحر', zh: '海上的水兵' },
      ],
      correct: 0,
    },
    {
      question: { en: 'In which city did Bloody Sunday take place?', ru: 'В каком городе произошло Кровавое воскресенье?', ar: 'في أي مدينة وقع الأحد الدامي؟', zh: '流血星期日发生在哪座城市？' },
      options: [
        { en: 'Moscow', ru: 'Москва', ar: 'موسكو', zh: '莫斯科' },
        { en: 'St. Petersburg', ru: 'Санкт-Петербург', ar: 'سانت بطرسبرغ', zh: '圣彼得堡' },
        { en: 'Kiev', ru: 'Киев', ar: 'كييف', zh: '基辅' },
        { en: 'Yekaterinburg', ru: 'Екатеринбург', ar: 'يكاترينبورغ', zh: '叶卡捷琳堡' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Bloody Sunday helped spark the Revolution of...', ru: 'Кровавое воскресенье способствовало революции...', ar: 'ساعد الأحد الدامي على إشعال ثورة...', zh: '流血星期日助推了哪一年的革命？' },
      options: [
        { en: '1612', ru: '1612 года', ar: '1612', zh: '1612年' },
        { en: '1812', ru: '1812 года', ar: '1812', zh: '1812年' },
        { en: '1905', ru: '1905 года', ar: '1905', zh: '1905年' },
        { en: '1991', ru: '1991 года', ar: '1991', zh: '1991年' },
      ],
      correct: 2,
    },
  ],
  'october-revolution': [
    {
      question: { en: 'The October Revolution (1917) brought which party to power?', ru: 'Октябрьская революция (1917) привела к власти какую партию?', ar: 'أوصلت ثورة أكتوبر (1917) أي حزب إلى السلطة؟', zh: '十月革命（1917）使哪个政党上台？' },
      options: [
        { en: 'The Bolsheviks', ru: 'Большевиков', ar: 'البلاشفة', zh: '布尔什维克' },
        { en: 'The Cadets', ru: 'Кадетов', ar: 'الكاديت', zh: '立宪民主党' },
        { en: 'The Mensheviks', ru: 'Меньшевиков', ar: 'المناشفة', zh: '孟什维克' },
        { en: 'The Monarchists', ru: 'Монархистов', ar: 'الملكيين', zh: '保皇党' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Who led the Bolsheviks?', ru: 'Кто возглавлял большевиков?', ar: 'من قاد البلاشفة؟', zh: '谁领导了布尔什维克？' },
      options: [
        { en: 'Kerensky', ru: 'Керенский', ar: 'كيرينسكي', zh: '克伦斯基' },
        { en: 'Lenin', ru: 'Ленин', ar: 'لينين', zh: '列宁' },
        { en: 'Nicholas II', ru: 'Николай II', ar: 'نيقولا الثاني', zh: '尼古拉二世' },
        { en: 'Stolypin', ru: 'Столыпин', ar: 'ستوليبين', zh: '斯托雷平' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The October Revolution overthrew the...', ru: 'Октябрьская революция свергла...', ar: 'أطاحت ثورة أكتوبر بـ...', zh: '十月革命推翻了……' },
      options: [
        { en: 'Mongol khans', ru: 'Монгольских ханов', ar: 'الخانات المغول', zh: '蒙古可汗' },
        { en: 'The Golden Horde', ru: 'Золотую Орду', ar: 'القبيلة الذهبية', zh: '金帐汗国' },
        { en: 'The Provisional Government', ru: 'Временное правительство', ar: 'الحكومة المؤقتة', zh: '临时政府' },
        { en: 'The Soviet Union', ru: 'Советский Союз', ar: 'الاتحاد السوفيتي', zh: '苏联' },
      ],
      correct: 2,
    },
  ],
  'rasputin': [
    {
      question: { en: 'Rasputin had great influence over the family of...', ru: 'Распутин имел большое влияние на семью...', ar: 'كان لراسبوتين نفوذ كبير على عائلة...', zh: '拉斯普京对谁的家族有巨大影响？' },
      options: [
        { en: 'Nicholas II (the Romanovs)', ru: 'Николая II (Романовых)', ar: 'نيقولا الثاني (آل رومانوف)', zh: '尼古拉二世（罗曼诺夫家族）' },
        { en: 'Peter I', ru: 'Петра I', ar: 'بطرس الأول', zh: '彼得一世' },
        { en: 'Ivan IV', ru: 'Ивана IV', ar: 'إيفان الرابع', zh: '伊凡四世' },
        { en: 'Lenin', ru: 'Ленина', ar: 'لينين', zh: '列宁' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Rasputin was known as a...', ru: 'Распутин был известен как...', ar: 'عُرف راسبوتين بأنه...', zh: '拉斯普京以什么身份著称？' },
      options: [
        { en: 'General', ru: 'Генерал', ar: 'جنرال', zh: '将军' },
        { en: 'Mystic / holy man', ru: 'Мистик / «святой старец»', ar: 'متصوّف / رجل دين', zh: '神秘主义者／圣人' },
        { en: 'Scientist', ru: 'Учёный', ar: 'عالِم', zh: '科学家' },
        { en: 'Poet', ru: 'Поэт', ar: 'شاعر', zh: '诗人' },
      ],
      correct: 1,
    },
    {
      question: { en: 'He gained influence partly by treating the heir’s...', ru: 'Он приобрёл влияние отчасти благодаря лечению у наследника...', ar: 'اكتسب نفوذه جزئيًا بمعالجة وريث العرش من...', zh: '他部分通过治疗皇储的……而获得影响力。' },
      options: [
        { en: 'Poor eyesight', ru: 'Плохого зрения', ar: 'ضعف البصر', zh: '视力差' },
        { en: 'Broken leg', ru: 'Сломанной ноги', ar: 'ساق مكسورة', zh: '断腿' },
        { en: 'Haemophilia (illness)', ru: 'Гемофилии (болезни)', ar: 'الناعور (مرض)', zh: '血友病（疾病）' },
        { en: 'Shyness', ru: 'Застенчивости', ar: 'الخجل', zh: '害羞' },
      ],
      correct: 2,
    },
  ],
  // ===== Civil War & Early USSR =====
  'civil-war-russia': [
    {
      question: { en: 'The Russian Civil War was fought between the Reds and the...', ru: 'Гражданская война в России шла между красными и...', ar: 'دارت الحرب الأهلية الروسية بين الحمر و...', zh: '俄国内战是在红军与……之间进行的。' },
      options: [
        { en: 'Whites', ru: 'Белыми', ar: 'البيض', zh: '白军' },
        { en: 'Mongols', ru: 'Монголами', ar: 'المغول', zh: '蒙古人' },
        { en: 'Swedes', ru: 'Шведами', ar: 'السويديين', zh: '瑞典人' },
        { en: 'Greens only', ru: 'Только зелёными', ar: 'الخضر فقط', zh: '仅绿军' },
      ],
      correct: 0,
    },
    {
      question: { en: 'The Reds were led by the...', ru: 'Красных возглавляли...', ar: 'كان يقود الحمر...', zh: '红军由谁领导？' },
      options: [
        { en: 'Tsarists', ru: 'Монархисты', ar: 'الملكيون', zh: '保皇派' },
        { en: 'Bolsheviks', ru: 'Большевики', ar: 'البلاشفة', zh: '布尔什维克' },
        { en: 'Cossacks', ru: 'Казаки', ar: 'القوزاق', zh: '哥萨克' },
        { en: 'Poles', ru: 'Поляки', ar: 'البولنديون', zh: '波兰人' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The war broke out after which event?', ru: 'Война вспыхнула после какого события?', ar: 'اندلعت الحرب بعد أي حدث؟', zh: '内战在哪一事件之后爆发？' },
      options: [
        { en: 'The 1812 war', ru: 'Войны 1812 года', ar: 'حرب 1812', zh: '1812年战争' },
        { en: 'The Great Reforms', ru: 'Великих реформ', ar: 'الإصلاحات الكبرى', zh: '大改革' },
        { en: 'The 1917 revolution', ru: 'Революции 1917 года', ar: 'ثورة 1917', zh: '1917年革命' },
        { en: 'The fall of the USSR', ru: 'Распада СССР', ar: 'انهيار الاتحاد السوفيتي', zh: '苏联解体' },
      ],
      correct: 2,
    },
  ],
  'romanov-execution': [
    {
      question: { en: 'In what year was the Romanov family executed?', ru: 'В каком году была расстреляна семья Романовых?', ar: 'في أي عام أُعدمت عائلة رومانوف؟', zh: '罗曼诺夫家族在哪一年被处决？' },
      options: [
        { en: '1918', ru: '1918', ar: '1918', zh: '1918' },
        { en: '1905', ru: '1905', ar: '1905', zh: '1905' },
        { en: '1881', ru: '1881', ar: '1881', zh: '1881' },
        { en: '1991', ru: '1991', ar: '1991', zh: '1991' },
      ],
      correct: 0,
    },
    {
      question: { en: 'In which city were they shot?', ru: 'В каком городе их расстреляли?', ar: 'في أي مدينة أُطلق عليهم الرصاص؟', zh: '他们在哪座城市被枪决？' },
      options: [
        { en: 'Moscow', ru: 'Москва', ar: 'موسكو', zh: '莫斯科' },
        { en: 'Yekaterinburg', ru: 'Екатеринбург', ar: 'يكاترينبورغ', zh: '叶卡捷琳堡' },
        { en: 'St. Petersburg', ru: 'Санкт-Петербург', ar: 'سانت بطرسبرغ', zh: '圣彼得堡' },
        { en: 'Kiev', ru: 'Киев', ar: 'كييف', zh: '基辅' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Their execution ended a dynasty of about...', ru: 'Их казнь завершила династию, длившуюся около...', ar: 'أنهى إعدامهم سلالة دامت نحو...', zh: '他们的处决终结了一个延续约……的王朝。' },
      options: [
        { en: '50 years', ru: '50 лет', ar: '50 عامًا', zh: '50年' },
        { en: '70 years', ru: '70 лет', ar: '70 عامًا', zh: '70年' },
        { en: '300 years', ru: '300 лет', ar: '300 عام', zh: '300年' },
        { en: '1000 years', ru: '1000 лет', ar: '1000 عام', zh: '1000年' },
      ],
      correct: 2,
    },
  ],
  'ussr-formation': [
    {
      question: { en: 'In what year was the USSR formed?', ru: 'В каком году был образован СССР?', ar: 'في أي عام تأسس الاتحاد السوفيتي؟', zh: '苏联在哪一年成立？' },
      options: [
        { en: '1922', ru: '1922', ar: '1922', zh: '1922' },
        { en: '1917', ru: '1917', ar: '1917', zh: '1917' },
        { en: '1945', ru: '1945', ar: '1945', zh: '1945' },
        { en: '1991', ru: '1991', ar: '1991', zh: '1991' },
      ],
      correct: 0,
    },
    {
      question: { en: 'USSR stands for the Union of Soviet...', ru: 'СССР расшифровывается как Союз Советских...', ar: 'يرمز الاتحاد السوفيتي إلى اتحاد الجمهوريات السوفيتية...', zh: '苏联是「苏维埃……共和国联盟」的简称。' },
      options: [
        { en: 'Slavic Regions', ru: 'Славянских областей', ar: 'المناطق السلافية', zh: '斯拉夫地区' },
        { en: 'Socialist Republics', ru: 'Социалистических Республик', ar: 'الاشتراكية', zh: '社会主义' },
        { en: 'Sovereign States', ru: 'Суверенных Государств', ar: 'الدول ذات السيادة', zh: '主权国家' },
        { en: 'Soldier Republics', ru: 'Солдатских Республик', ar: 'جمهوريات الجنود', zh: '士兵共和国' },
      ],
      correct: 1,
    },
    {
      question: { en: 'It was created from the ruins of the...', ru: 'Он был создан на руинах...', ar: 'أُنشئ من أنقاض...', zh: '它建立在……的废墟之上。' },
      options: [
        { en: 'Ottoman Empire', ru: 'Османской империи', ar: 'الإمبراطورية العثمانية', zh: '奥斯曼帝国' },
        { en: 'Mongol Empire', ru: 'Монгольской империи', ar: 'الإمبراطورية المغولية', zh: '蒙古帝国' },
        { en: 'Russian Empire', ru: 'Российской империи', ar: 'الإمبراطورية الروسية', zh: '俄罗斯帝国' },
        { en: 'Byzantine Empire', ru: 'Византийской империи', ar: 'الإمبراطورية البيزنطية', zh: '拜占庭帝国' },
      ],
      correct: 2,
    },
  ],

  // ===== Stalin's USSR =====
  'collectivization': [
    {
      question: { en: 'Collectivization forced peasants into...', ru: 'Коллективизация загоняла крестьян в...', ar: 'أجبرت التجميع الزراعي الفلاحين على الانضمام إلى...', zh: '集体化迫使农民加入……' },
      options: [
        { en: 'Collective farms (kolkhozes)', ru: 'Колхозы', ar: 'المزارع الجماعية (الكولخوزات)', zh: '集体农庄（kolkhoz）' },
        { en: 'Private estates', ru: 'Частные поместья', ar: 'العقارات الخاصة', zh: '私人庄园' },
        { en: 'City factories only', ru: 'Только городские заводы', ar: 'مصانع المدن فقط', zh: '只有城市工厂' },
        { en: 'Monasteries', ru: 'Монастыри', ar: 'الأديرة', zh: '修道院' },
      ],
      correct: 0,
    },
    {
      question: { en: 'A tragic result of collectivization was...', ru: 'Трагическим итогом коллективизации стал...', ar: 'كانت إحدى النتائج المأساوية للتجميع الزراعي...', zh: '集体化的一个悲剧性后果是……' },
      options: [
        { en: 'Rapid wealth', ru: 'Быстрое обогащение', ar: 'الثراء السريع', zh: '迅速致富' },
        { en: 'Mass famine', ru: 'Массовый голод', ar: 'مجاعة جماعية', zh: '大饥荒' },
        { en: 'Religious revival', ru: 'Религиозное возрождение', ar: 'إحياء ديني', zh: '宗教复兴' },
        { en: 'Free elections', ru: 'Свободные выборы', ar: 'انتخابات حرة', zh: '自由选举' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Collectivization was carried out under...', ru: 'Коллективизация проводилась при...', ar: 'نُفّذ التجميع الزراعي في عهد...', zh: '集体化是在谁的领导下进行的？' },
      options: [
        { en: 'Lenin', ru: 'Ленине', ar: 'لينين', zh: '列宁' },
        { en: 'Khrushchev', ru: 'Хрущёве', ar: 'خروتشوف', zh: '赫鲁晓夫' },
        { en: 'Stalin', ru: 'Сталине', ar: 'ستالين', zh: '斯大林' },
        { en: 'Gorbachev', ru: 'Горбачёве', ar: 'غورباتشوف', zh: '戈尔巴乔夫' },
      ],
      correct: 2,
    },
  ],
  'great-terror': [
    {
      question: { en: 'The Great Terror (purges) occurred mainly in:', ru: 'Большой террор (репрессии) пришёлся в основном на:', ar: 'وقع الإرهاب الكبير (التطهيرات) أساسًا في:', zh: '大清洗（肃反）主要发生在：' },
      options: [
        { en: '1936–1938', ru: '1936–1938 годы', ar: '1936–1938', zh: '1936–1938年' },
        { en: '1812', ru: '1812 год', ar: '1812', zh: '1812年' },
        { en: '1905', ru: '1905 год', ar: '1905', zh: '1905年' },
        { en: '1991', ru: '1991 год', ar: '1991', zh: '1991年' },
      ],
      correct: 0,
    },
    {
      question: { en: 'The Great Terror was directed by...', ru: 'Большой террор направлялся...', ar: 'كان يوجّه الإرهاب الكبير...', zh: '大清洗由谁主导？' },
      options: [
        { en: 'Trotsky', ru: 'Троцким', ar: 'تروتسكي', zh: '托洛茨基' },
        { en: 'Stalin', ru: 'Сталиным', ar: 'ستالين', zh: '斯大林' },
        { en: 'Lenin', ru: 'Лениным', ar: 'لينين', zh: '列宁' },
        { en: 'Nicholas II', ru: 'Николаем II', ar: 'نيقولا الثاني', zh: '尼古拉二世' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The purges eliminated...', ru: 'Репрессии уничтожали...', ar: 'قضت التطهيرات على...', zh: '清洗铲除的是……' },
      options: [
        { en: 'Foreign armies', ru: 'Иностранные армии', ar: 'الجيوش الأجنبية', zh: '外国军队' },
        { en: 'Serfs', ru: 'Крепостных', ar: 'الأقنان', zh: '农奴' },
        { en: 'Real and imagined political opponents', ru: 'Реальных и мнимых политических противников', ar: 'المعارضين السياسيين الحقيقيين والمتوهَّمين', zh: '真实和臆想的政治对手' },
        { en: 'Merchants', ru: 'Купцов', ar: 'التجار', zh: '商人' },
      ],
      correct: 2,
    },
  ],
  'gulag': [
    {
      question: { en: 'The GULAG was a system of...', ru: 'ГУЛАГ был системой...', ar: 'كان الغولاغ نظامًا من...', zh: '古拉格是一个……系统。' },
      options: [
        { en: 'Forced-labor camps', ru: 'Лагерей принудительного труда', ar: 'معسكرات العمل القسري', zh: '强制劳改营' },
        { en: 'Universities', ru: 'Университетов', ar: 'الجامعات', zh: '大学' },
        { en: 'Churches', ru: 'Церквей', ar: 'الكنائس', zh: '教堂' },
        { en: 'Trade ports', ru: 'Торговых портов', ar: 'الموانئ التجارية', zh: '贸易港口' },
      ],
      correct: 0,
    },
    {
      question: { en: 'The GULAG is most associated with the era of...', ru: 'ГУЛАГ больше всего связан с эпохой...', ar: 'يرتبط الغولاغ أكثر بعصر...', zh: '古拉格与哪个时代最相关？' },
      options: [
        { en: 'Peter I', ru: 'Петра I', ar: 'بطرس الأول', zh: '彼得一世' },
        { en: 'Stalin', ru: 'Сталина', ar: 'ستالين', zh: '斯大林' },
        { en: 'Catherine II', ru: 'Екатерины II', ar: 'كاترين الثانية', zh: '叶卡捷琳娜二世' },
        { en: 'Yeltsin', ru: 'Ельцина', ar: 'يلتسين', zh: '叶利钦' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The GULAG held...', ru: 'В ГУЛАГе содержались...', ar: 'احتجز الغولاغ...', zh: '古拉格关押了……' },
      options: [
        { en: 'Only foreigners', ru: 'Только иностранцев', ar: 'الأجانب فقط', zh: '只有外国人' },
        { en: 'A few hundred people', ru: 'Несколько сотен человек', ar: 'بضع مئات', zh: '几百人' },
        { en: 'Millions of prisoners', ru: 'Миллионы заключённых', ar: 'ملايين السجناء', zh: '数百万囚犯' },
        { en: 'No one', ru: 'Никого', ar: 'لا أحد', zh: '无人' },
      ],
      correct: 2,
    },
  ],

  // ===== Great Patriotic War =====
  'operation-barbarossa': [
    {
      question: { en: 'Operation Barbarossa (1941) was the invasion of the USSR by...', ru: 'Операция «Барбаросса» (1941) — вторжение в СССР со стороны...', ar: 'كانت عملية بربروسا (1941) غزو الاتحاد السوفيتي من قبل...', zh: '巴巴罗萨行动（1941）是谁对苏联的入侵？' },
      options: [
        { en: 'Nazi Germany', ru: 'Нацистской Германии', ar: 'ألمانيا النازية', zh: '纳粹德国' },
        { en: 'Japan', ru: 'Японии', ar: 'اليابان', zh: '日本' },
        { en: 'Poland', ru: 'Польши', ar: 'بولندا', zh: '波兰' },
        { en: 'Finland', ru: 'Финляндии', ar: 'فنلندا', zh: '芬兰' },
      ],
      correct: 0,
    },
    {
      question: { en: 'In what year did Operation Barbarossa begin?', ru: 'В каком году началась операция «Барбаросса»?', ar: 'في أي عام بدأت عملية بربروسا؟', zh: '巴巴罗萨行动在哪一年开始？' },
      options: [
        { en: '1914', ru: '1914', ar: '1914', zh: '1914' },
        { en: '1941', ru: '1941', ar: '1941', zh: '1941' },
        { en: '1945', ru: '1945', ar: '1945', zh: '1945' },
        { en: '1939', ru: '1939', ar: '1939', zh: '1939' },
      ],
      correct: 1,
    },
    {
      question: { en: 'At the start, the Soviet Union was caught...', ru: 'В начале вторжения Советский Союз оказался...', ar: 'في البداية كان الاتحاد السوفيتي...', zh: '入侵之初，苏联……' },
      options: [
        { en: 'Fully ready', ru: 'Полностью готов', ar: 'مستعدًا تمامًا', zh: '完全做好准备' },
        { en: 'Already victorious', ru: 'Уже победившим', ar: 'منتصرًا بالفعل', zh: '已然获胜' },
        { en: 'Catastrophically unprepared', ru: 'Катастрофически неподготовленным', ar: 'غير مستعد بشكل كارثي', zh: '猝不及防、毫无准备' },
        { en: 'Neutral', ru: 'Нейтральным', ar: 'محايدًا', zh: '保持中立' },
      ],
      correct: 2,
    },
  ],
  'battle-stalingrad': [
    {
      question: { en: 'What was the name of the Soviet operation that encircled the German 6th Army?', ru: 'Как называлась советская операция, окружившая 6-ю немецкую армию?', ar: 'ما اسم العملية السوفيتية التي طوّقت الجيش الألماني السادس؟', zh: '包围德国第六集团军的苏联行动叫什么名字？' },
      options: [
        { en: 'Operation Bagration', ru: 'Операция «Багратион»', ar: 'عملية باغراتيون', zh: '巴格拉季昂行动' },
        { en: 'Operation Uranus', ru: 'Операция «Уран»', ar: 'عملية أورانوس', zh: '天王星行动' },
        { en: 'Operation Citadel', ru: 'Операция «Цитадель»', ar: 'عملية القلعة', zh: '堡垒行动' },
        { en: 'Operation Mars', ru: 'Операция «Марс»', ar: 'عملية المريخ', zh: '火星行动' },
      ],
      correct: 1,
    },
    {
      question: { en: 'When did Field Marshal Paulus surrender at Stalingrad?', ru: 'Когда фельдмаршал Паулюс капитулировал под Сталинградом?', ar: 'متى استسلم المشير باولوس في ستالينغراد؟', zh: '保卢斯元帅何时在斯大林格勒投降？' },
      options: [
        { en: 'November 19, 1942', ru: '19 ноября 1942', ar: '19 نوفمبر 1942', zh: '1942年11月19日' },
        { en: 'January 10, 1943', ru: '10 января 1943', ar: '10 يناير 1943', zh: '1943年1月10日' },
        { en: 'February 2, 1943', ru: '2 февраля 1943', ar: '2 فبراير 1943', zh: '1943年2月2日' },
        { en: 'March 5, 1943', ru: '5 марта 1943', ar: '5 مارس 1943', zh: '1943年3月5日' },
      ],
      correct: 2,
    },
    {
      question: { en: 'How many men were in the encircled German 6th Army?', ru: 'Сколько человек было в окружённой 6-й немецкой армии?', ar: 'كم عدد الرجال في الجيش الألماني السادس المحاصر؟', zh: '被围困的德国第六集团军有多少人？' },
      options: [
        { en: '130,000', ru: '130 000', ar: '130,000', zh: '13万' },
        { en: '200,000', ru: '200 000', ar: '200,000', zh: '20万' },
        { en: '330,000', ru: '330 000', ar: '330,000', zh: '33万' },
        { en: '500,000', ru: '500 000', ar: '500,000', zh: '50万' },
      ],
      correct: 2,
    },
  ],
  'siege-leningrad': [
    {
      question: { en: 'About how long did the Siege of Leningrad last?', ru: 'Около скольких дней длилась блокада Ленинграда?', ar: 'كم استمر حصار لينينغراد تقريبًا؟', zh: '列宁格勒围城战大约持续了多久？' },
      options: [
        { en: 'About 872 days', ru: 'Около 872 дней', ar: 'نحو 872 يومًا', zh: '约872天' },
        { en: 'About 30 days', ru: 'Около 30 дней', ar: 'نحو 30 يومًا', zh: '约30天' },
        { en: 'About 10 years', ru: 'Около 10 лет', ar: 'نحو 10 سنوات', zh: '约10年' },
        { en: 'About 100 days', ru: 'Около 100 дней', ar: 'نحو 100 يوم', zh: '约100天' },
      ],
      correct: 0,
    },
    {
      question: { en: 'The main cause of civilian death during the siege was...', ru: 'Главной причиной гибели мирных жителей во время блокады был...', ar: 'كان السبب الرئيسي لوفاة المدنيين خلال الحصار...', zh: '围城期间平民死亡的主要原因是……' },
      options: [
        { en: 'Earthquakes', ru: 'Землетрясения', ar: 'الزلازل', zh: '地震' },
        { en: 'Starvation', ru: 'Голод', ar: 'المجاعة', zh: '饥饿' },
        { en: 'Floods', ru: 'Наводнения', ar: 'الفيضانات', zh: '洪水' },
        { en: 'Disease only', ru: 'Только болезни', ar: 'الأمراض فقط', zh: '仅疾病' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The besieging army was...', ru: 'Осаждавшая армия была...', ar: 'كان الجيش المُحاصِر...', zh: '围城的军队是……' },
      options: [
        { en: 'Swedish', ru: 'Шведской', ar: 'سويديًا', zh: '瑞典军队' },
        { en: 'Mongol', ru: 'Монгольской', ar: 'مغوليًا', zh: '蒙古军队' },
        { en: 'German (Nazi)', ru: 'Немецкой (нацистской)', ar: 'ألمانيًا (نازيًا)', zh: '德国（纳粹）军队' },
        { en: 'Polish', ru: 'Польской', ar: 'بولنديًا', zh: '波兰军队' },
      ],
      correct: 2,
    },
  ],
  'victory-day': [
    {
      question: { en: 'On what date is Victory Day celebrated?', ru: 'Когда празднуется День Победы?', ar: 'في أي تاريخ يُحتفل بيوم النصر؟', zh: '胜利日在哪一天庆祝？' },
      options: [
        { en: 'May 9', ru: '9 мая', ar: '9 مايو', zh: '5月9日' },
        { en: 'June 22', ru: '22 июня', ar: '22 يونيو', zh: '6月22日' },
        { en: 'November 7', ru: '7 ноября', ar: '7 نوفمبر', zh: '11月7日' },
        { en: 'December 25', ru: '25 декабря', ar: '25 ديسمبر', zh: '12月25日' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Victory Day marks the victory over...', ru: 'День Победы знаменует победу над...', ar: 'يحيي يوم النصر الانتصار على...', zh: '胜利日纪念战胜……' },
      options: [
        { en: 'Napoleon', ru: 'Наполеоном', ar: 'نابليون', zh: '拿破仑' },
        { en: 'Nazi Germany', ru: 'Нацистской Германией', ar: 'ألمانيا النازية', zh: '纳粹德国' },
        { en: 'Sweden', ru: 'Швецией', ar: 'السويد', zh: '瑞典' },
        { en: 'The Golden Horde', ru: 'Золотой Ордой', ar: 'القبيلة الذهبية', zh: '金帐汗国' },
      ],
      correct: 1,
    },
    {
      question: { en: 'For the USSR, Victory Day marks the end of the...', ru: 'Для СССР День Победы знаменует конец...', ar: 'بالنسبة للاتحاد السوفيتي، يمثّل يوم النصر نهاية...', zh: '对苏联而言，胜利日标志着……的结束。' },
      options: [
        { en: 'Civil War', ru: 'Гражданской войны', ar: 'الحرب الأهلية', zh: '内战' },
        { en: 'Cold War', ru: 'Холодной войны', ar: 'الحرب الباردة', zh: '冷战' },
        { en: 'Great Patriotic War', ru: 'Великой Отечественной войны', ar: 'الحرب الوطنية العظمى', zh: '伟大卫国战争' },
        { en: 'Time of Troubles', ru: 'Смутного времени', ar: 'زمن الاضطرابات', zh: '混乱时期' },
      ],
      correct: 2,
    },
  ],

  // ===== Cold War & Space Race =====
  'sputnik': [
    {
      question: { en: 'Sputnik (1957) was the first artificial...', ru: 'Спутник (1957) был первым искусственным...', ar: 'كان سبوتنيك (1957) أول... صناعي.', zh: '斯普特尼克（1957）是第一颗人造……' },
      options: [
        { en: 'Satellite', ru: 'Спутником', ar: 'قمر صناعي', zh: '卫星' },
        { en: 'Human in space', ru: 'Человеком в космосе', ar: 'إنسان في الفضاء', zh: '进入太空的人' },
        { en: 'Moon landing', ru: 'Высадкой на Луну', ar: 'هبوط على القمر', zh: '登月' },
        { en: 'Space station', ru: 'Космической станцией', ar: 'محطة فضائية', zh: '空间站' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Sputnik launched the start of the...', ru: 'Спутник положил начало...', ar: 'أطلق سبوتنيك بداية...', zh: '斯普特尼克开启了……的开端。' },
      options: [
        { en: 'Industrial Revolution', ru: 'Промышленной революции', ar: 'الثورة الصناعية', zh: '工业革命' },
        { en: 'Space Age', ru: 'Космической эры', ar: 'عصر الفضاء', zh: '太空时代' },
        { en: 'Renaissance', ru: 'Эпохи Возрождения', ar: 'عصر النهضة', zh: '文艺复兴' },
        { en: 'Industrial age', ru: 'Века пара', ar: 'عصر البخار', zh: '蒸汽时代' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Which country launched Sputnik?', ru: 'Какая страна запустила Спутник?', ar: 'أي دولة أطلقت سبوتنيك؟', zh: '哪个国家发射了斯普特尼克？' },
      options: [
        { en: 'The USA', ru: 'США', ar: 'الولايات المتحدة', zh: '美国' },
        { en: 'Germany', ru: 'Германия', ar: 'ألمانيا', zh: '德国' },
        { en: 'The USSR', ru: 'СССР', ar: 'الاتحاد السوفيتي', zh: '苏联' },
        { en: 'China', ru: 'Китай', ar: 'الصين', zh: '中国' },
      ],
      correct: 2,
    },
  ],
  'gagarin': [
    {
      question: { en: "What was Yuri Gagarin's famous word at launch?", ru: 'Какое знаменитое слово сказал Юрий Гагарин на старте?', ar: 'ما الكلمة الشهيرة التي قالها يوري غاغارين عند الإطلاق؟', zh: '尤里·加加林在发射时说的名言是什么？' },
      options: [
        { en: "Поехали! (Let's go!)", ru: 'Поехали!', ar: 'بايخالي! (لننطلق!)', zh: 'Поехали！（我们出发！）' },
        { en: 'Вперёд! (Forward!)', ru: 'Вперёд!', ar: 'إلى الأمام!', zh: '前进！' },
        { en: 'Готов! (Ready!)', ru: 'Готов!', ar: 'جاهز!', zh: '准备好了！' },
        { en: 'Старт! (Start!)', ru: 'Старт!', ar: 'انطلاق!', zh: '起飞！' },
      ],
      correct: 0,
    },
    {
      question: { en: "How long was Gagarin's space flight?", ru: 'Сколько длился космический полёт Гагарина?', ar: 'كم استغرقت رحلة غاغارين الفضائية؟', zh: '加加林的太空飞行持续了多久？' },
      options: [
        { en: '48 minutes', ru: '48 минут', ar: '48 دقيقة', zh: '48分钟' },
        { en: '72 minutes', ru: '72 минуты', ar: '72 دقيقة', zh: '72分钟' },
        { en: '108 minutes', ru: '108 минут', ar: '108 دقيقة', zh: '108分钟' },
        { en: '180 minutes', ru: '180 минут', ar: '180 دقيقة', zh: '180分钟' },
      ],
      correct: 2,
    },
    {
      question: { en: 'From which cosmodrome did Vostok 1 launch?', ru: 'С какого космодрома стартовал «Восток-1»?', ar: 'من أي قاعدة فضائية أُطلق فوستوك 1؟', zh: '东方1号从哪个航天发射场发射？' },
      options: [
        { en: 'Plesetsk', ru: 'Плесецк', ar: 'بليسيتسك', zh: '普列谢茨克' },
        { en: 'Baikonur', ru: 'Байконур', ar: 'بايكونور', zh: '拜科努尔' },
        { en: 'Kapustin Yar', ru: 'Капустин Яр', ar: 'كابوستين يار', zh: '卡普斯京亚尔' },
        { en: 'Vostochny', ru: 'Восточный', ar: 'فوستوتشني', zh: '沃斯托奇内' },
      ],
      correct: 1,
    },
  ],
  'cuban-crisis': [
    {
      question: { en: 'In what year did the Cuban Missile Crisis occur?', ru: 'В каком году произошёл Карибский кризис?', ar: 'في أي عام وقعت أزمة الصواريخ الكوبية؟', zh: '古巴导弹危机发生在哪一年？' },
      options: [
        { en: '1962', ru: '1962', ar: '1962', zh: '1962' },
        { en: '1945', ru: '1945', ar: '1945', zh: '1945' },
        { en: '1939', ru: '1939', ar: '1939', zh: '1939' },
        { en: '1991', ru: '1991', ar: '1991', zh: '1991' },
      ],
      correct: 0,
    },
    {
      question: { en: 'It was a confrontation between the USSR and the...', ru: 'Это было противостояние СССР и...', ar: 'كانت مواجهة بين الاتحاد السوفيتي و...', zh: '这是苏联与谁之间的对峙？' },
      options: [
        { en: 'UK', ru: 'Великобритании', ar: 'المملكة المتحدة', zh: '英国' },
        { en: 'USA', ru: 'США', ar: 'الولايات المتحدة', zh: '美国' },
        { en: 'China', ru: 'Китая', ar: 'الصين', zh: '中国' },
        { en: 'France', ru: 'Франции', ar: 'فرنسا', zh: '法国' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The crisis brought the world close to...', ru: 'Кризис поставил мир на грань...', ar: 'دفعت الأزمة العالم إلى حافة...', zh: '这场危机使世界濒临……' },
      options: [
        { en: 'A moon landing', ru: 'Высадки на Луну', ar: 'هبوط على القمر', zh: '登月' },
        { en: 'A trade deal', ru: 'Торговой сделки', ar: 'صفقة تجارية', zh: '贸易协定' },
        { en: 'Nuclear war', ru: 'Ядерной войны', ar: 'حرب نووية', zh: '核战争' },
        { en: 'World peace', ru: 'Всеобщего мира', ar: 'السلام العالمي', zh: '世界和平' },
      ],
      correct: 2,
    },
  ],
  'khrushchev-thaw': [
    {
      question: { en: 'The "Thaw" followed the death of...', ru: '«Оттепель» началась после смерти...', ar: 'جاء «الذوبان» بعد وفاة...', zh: '「解冻」是在谁去世后开始的？' },
      options: [
        { en: 'Stalin', ru: 'Сталина', ar: 'ستالين', zh: '斯大林' },
        { en: 'Lenin', ru: 'Ленина', ar: 'لينين', zh: '列宁' },
        { en: 'Brezhnev', ru: 'Брежнева', ar: 'بريجنيف', zh: '勃列日涅夫' },
        { en: 'Peter I', ru: 'Петра I', ar: 'بطرس الأول', zh: '彼得一世' },
      ],
      correct: 0,
    },
    {
      question: { en: 'The Thaw was a period of relative...', ru: '«Оттепель» была периодом относительной...', ar: 'كان «الذوبان» فترة من... النسبي.', zh: '解冻是一个相对……的时期。' },
      options: [
        { en: 'Repression', ru: 'Репрессий', ar: 'القمع', zh: '镇压' },
        { en: 'Liberalization', ru: 'Либерализации', ar: 'الانفتاح', zh: '自由化' },
        { en: 'War', ru: 'Войны', ar: 'الحرب', zh: '战争' },
        { en: 'Famine', ru: 'Голода', ar: 'المجاعة', zh: '饥荒' },
      ],
      correct: 1,
    },
    {
      question: { en: 'It is named after Soviet leader...', ru: 'Она названа в честь советского лидера...', ar: 'سُمّي على اسم الزعيم السوفيتي...', zh: '它以哪位苏联领导人命名？' },
      options: [
        { en: 'Andropov', ru: 'Андропова', ar: 'أندروبوف', zh: '安德罗波夫' },
        { en: 'Yeltsin', ru: 'Ельцина', ar: 'يلتسين', zh: '叶利钦' },
        { en: 'Khrushchev', ru: 'Хрущёва', ar: 'خروتشوف', zh: '赫鲁晓夫' },
        { en: 'Gorbachev', ru: 'Горбачёва', ar: 'غورباتشوف', zh: '戈尔巴乔夫' },
      ],
      correct: 2,
    },
  ],

  // ===== Perestroika & Collapse =====
  'perestroika-topic': [
    {
      question: { en: 'Perestroika ("restructuring") was a policy of...', ru: 'Перестройка («перестройка») была политикой...', ar: 'كانت البيريسترويكا («إعادة الهيكلة») سياسة...', zh: '改革重建（perestroika）是谁的政策？' },
      options: [
        { en: 'Gorbachev', ru: 'Горбачёва', ar: 'غورباتشوف', zh: '戈尔巴乔夫' },
        { en: 'Stalin', ru: 'Сталина', ar: 'ستالين', zh: '斯大林' },
        { en: 'Lenin', ru: 'Ленина', ar: 'لينين', zh: '列宁' },
        { en: 'Brezhnev', ru: 'Брежнева', ar: 'بريجنيف', zh: '勃列日涅夫' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Along with perestroika came a policy of openness called...', ru: 'Вместе с перестройкой пришла политика открытости —...', ar: 'رافق البيريسترويكا سياسة انفتاح تُسمّى...', zh: '伴随改革重建而来的开放政策称为……' },
      options: [
        { en: 'Oprichnina', ru: 'Опричнина', ar: 'الأوبريتشنينا', zh: '特辖制' },
        { en: 'Glasnost', ru: 'Гласность', ar: 'الغلاسنوست (العلنية)', zh: '公开性（glasnost）' },
        { en: 'Collectivization', ru: 'Коллективизация', ar: 'التجميع الزراعي', zh: '集体化' },
        { en: 'Détente', ru: 'Разрядка', ar: 'الانفراج', zh: '缓和' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Perestroika ultimately contributed to the...', ru: 'Перестройка в итоге способствовала...', ar: 'ساهمت البيريسترويكا في النهاية في...', zh: '改革重建最终促成了……' },
      options: [
        { en: 'Founding of the USSR', ru: 'Образованию СССР', ar: 'تأسيس الاتحاد السوفيتي', zh: '苏联的成立' },
        { en: 'Victory in WWII', ru: 'Победе во Второй мировой', ar: 'النصر في الحرب العالمية الثانية', zh: '二战胜利' },
        { en: 'Collapse of the USSR', ru: 'Распаду СССР', ar: 'انهيار الاتحاد السوفيتي', zh: '苏联的解体' },
        { en: 'The Great Terror', ru: 'Большому террору', ar: 'الإرهاب الكبير', zh: '大清洗' },
      ],
      correct: 2,
    },
  ],
  'chernobyl': [
    {
      question: { en: 'The Chernobyl disaster (1986) was a...', ru: 'Чернобыльская катастрофа (1986) была...', ar: 'كانت كارثة تشيرنوبيل (1986)...', zh: '切尔诺贝利灾难（1986）是一场……' },
      options: [
        { en: 'Nuclear accident', ru: 'Ядерной аварией', ar: 'حادثًا نوويًا', zh: '核事故' },
        { en: 'Earthquake', ru: 'Землетрясением', ar: 'زلزالًا', zh: '地震' },
        { en: 'Flood', ru: 'Наводнением', ar: 'فيضانًا', zh: '洪水' },
        { en: 'Plane crash', ru: 'Авиакатастрофой', ar: 'تحطّم طائرة', zh: '空难' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Chernobyl is located in...', ru: 'Чернобыль находится в...', ar: 'تقع تشيرنوبيل في...', zh: '切尔诺贝利位于……' },
      options: [
        { en: 'Siberia', ru: 'Сибири', ar: 'سيبيريا', zh: '西伯利亚' },
        { en: 'Ukraine (then the USSR)', ru: 'Украине (тогда СССР)', ar: 'أوكرانيا (آنذاك ضمن الاتحاد السوفيتي)', zh: '乌克兰（当时属苏联）' },
        { en: 'The Baltic', ru: 'Прибалтике', ar: 'البلطيق', zh: '波罗的海地区' },
        { en: 'The Caucasus', ru: 'Кавказе', ar: 'القوقاز', zh: '高加索' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The disaster exposed flaws in the...', ru: 'Катастрофа обнажила недостатки...', ar: 'كشفت الكارثة عيوب...', zh: '这场灾难暴露了……的缺陷。' },
      options: [
        { en: 'Tsarist army', ru: 'Царской армии', ar: 'الجيش القيصري', zh: '沙皇军队' },
        { en: 'Mongol rule', ru: 'Монгольского владычества', ar: 'الحكم المغولي', zh: '蒙古统治' },
        { en: 'Soviet system', ru: 'Советской системы', ar: 'النظام السوفيتي', zh: '苏联体制' },
        { en: 'NATO', ru: 'НАТО', ar: 'الناتو', zh: '北约' },
      ],
      correct: 2,
    },
  ],
  'ussr-dissolution': [
    {
      question: { en: 'In what year was the USSR dissolved?', ru: 'В каком году распался СССР?', ar: 'في أي عام تفكّك الاتحاد السوفيتي؟', zh: '苏联在哪一年解体？' },
      options: [
        { en: '1991', ru: '1991', ar: '1991', zh: '1991' },
        { en: '1945', ru: '1945', ar: '1945', zh: '1945' },
        { en: '1922', ru: '1922', ar: '1922', zh: '1922' },
        { en: '2000', ru: '2000', ar: '2000', zh: '2000' },
      ],
      correct: 0,
    },
    {
      question: { en: 'On Dec 25, 1991, the Soviet flag was lowered over the...', ru: '25 декабря 1991 года советский флаг спустили над...', ar: 'في 25 ديسمبر 1991 أُنزل العلم السوفيتي فوق...', zh: '1991年12月25日，苏联国旗在……上降下。' },
      options: [
        { en: 'Winter Palace', ru: 'Зимним дворцом', ar: 'القصر الشتوي', zh: '冬宫' },
        { en: 'Kremlin', ru: 'Кремлём', ar: 'الكرملين', zh: '克里姆林宫' },
        { en: 'Reichstag', ru: 'Рейхстагом', ar: 'الرايخستاغ', zh: '国会大厦' },
        { en: 'White House', ru: 'Белым домом', ar: 'البيت الأبيض', zh: '白宫' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Who was the last Soviet leader?', ru: 'Кто был последним советским лидером?', ar: 'من كان آخر زعيم سوفيتي؟', zh: '谁是最后一位苏联领导人？' },
      options: [
        { en: 'Brezhnev', ru: 'Брежнев', ar: 'بريجنيف', zh: '勃列日涅夫' },
        { en: 'Stalin', ru: 'Сталин', ar: 'ستالين', zh: '斯大林' },
        { en: 'Gorbachev', ru: 'Горбачёв', ar: 'غورباتشوف', zh: '戈尔巴乔夫' },
        { en: 'Yeltsin', ru: 'Ельцин', ar: 'يلتسين', zh: '叶利钦' },
      ],
      correct: 2,
    },
  ],

  // ===== Modern Russia =====
  'yeltsin': [
    {
      question: { en: 'Boris Yeltsin was the first president of the...', ru: 'Борис Ельцин был первым президентом...', ar: 'كان بوريس يلتسين أول رئيس لـ...', zh: '鲍里斯·叶利钦是……的首任总统。' },
      options: [
        { en: 'Russian Federation', ru: 'Российской Федерации', ar: 'الاتحاد الروسي', zh: '俄罗斯联邦' },
        { en: 'The USSR', ru: 'СССР', ar: 'الاتحاد السوفيتي', zh: '苏联' },
        { en: 'Soviet Ukraine', ru: 'Советской Украины', ar: 'أوكرانيا السوفيتية', zh: '苏维埃乌克兰' },
        { en: 'The Duma', ru: 'Думы', ar: 'الدوما', zh: '杜马' },
      ],
      correct: 0,
    },
    {
      question: { en: 'Yeltsin led Russia mainly during the...', ru: 'Ельцин руководил Россией в основном в...', ar: 'قاد يلتسين روسيا أساسًا خلال...', zh: '叶利钦主要在哪个年代领导俄罗斯？' },
      options: [
        { en: 'The 1860s', ru: '1860-е годы', ar: 'ستينيات القرن التاسع عشر', zh: '1860年代' },
        { en: 'The 1990s', ru: '1990-е годы', ar: 'التسعينيات', zh: '1990年代' },
        { en: 'The 1940s', ru: '1940-е годы', ar: 'الأربعينيات', zh: '1940年代' },
        { en: 'The 2010s', ru: '2010-е годы', ar: 'العقد 2010', zh: '2010年代' },
      ],
      correct: 1,
    },
    {
      question: { en: "Yeltsin's presidency followed the era of which Soviet leader?", ru: 'Президентство Ельцина последовало за эпохой какого советского лидера?', ar: 'جاءت رئاسة يلتسين بعد عصر أي زعيم سوفيتي؟', zh: '叶利钦的总统任期紧接哪位苏联领导人的时代之后？' },
      options: [
        { en: 'Stalin', ru: 'Сталина', ar: 'ستالين', zh: '斯大林' },
        { en: 'Lenin', ru: 'Ленина', ar: 'لينين', zh: '列宁' },
        { en: 'Gorbachev', ru: 'Горбачёва', ar: 'غورباتشوف', zh: '戈尔巴乔夫' },
        { en: 'Brezhnev', ru: 'Брежнева', ar: 'بريجنيف', zh: '勃列日涅夫' },
      ],
      correct: 2,
    },
  ],
  'russia-1990s': [
    {
      question: { en: 'The 1990s in Russia featured economic "shock..."', ru: '1990-е в России отметились экономической «шоковой...»', ar: 'تميّزت التسعينيات في روسيا بـ«العلاج بالصدمة...» الاقتصادي', zh: '1990年代的俄罗斯经历了经济上的「休克……」' },
      options: [
        { en: 'Therapy', ru: 'Терапией', ar: 'العلاجي', zh: '疗法' },
        { en: 'Absorption', ru: 'Поглощением', ar: 'الامتصاص', zh: '吸收' },
        { en: 'Isolation', ru: 'Изоляцией', ar: 'العزل', zh: '孤立' },
        { en: 'Collectivization', ru: 'Коллективизацией', ar: 'التجميع', zh: '集体化' },
      ],
      correct: 0,
    },
    {
      question: { en: 'A new class of wealthy businessmen were called...', ru: 'Новый класс богатых дельцов называли...', ar: 'سُمّيت طبقة جديدة من رجال الأعمال الأثرياء...', zh: '一个新兴的富有商人阶层被称为……' },
      options: [
        { en: 'Boyars', ru: 'Боярами', ar: 'البويار', zh: '波雅尔' },
        { en: 'Oligarchs', ru: 'Олигархами', ar: 'الأوليغارش', zh: '寡头' },
        { en: 'Cosmonauts', ru: 'Космонавтами', ar: 'رواد الفضاء', zh: '宇航员' },
        { en: 'Streltsy', ru: 'Стрельцами', ar: 'الستريلتسي', zh: '射击军' },
      ],
      correct: 1,
    },
    {
      question: { en: 'The 1990s saw the painful birth of Russian...', ru: '1990-е стали временем болезненного рождения российского...', ar: 'شهدت التسعينيات الولادة المؤلمة لـ... الروسية.', zh: '1990年代见证了俄罗斯……的痛苦诞生。' },
      options: [
        { en: 'Feudalism', ru: 'Феодализма', ar: 'الإقطاع', zh: '封建主义' },
        { en: 'Monarchy', ru: 'Монархии', ar: 'الملكية', zh: '君主制' },
        { en: 'Capitalism', ru: 'Капитализма', ar: 'الرأسمالية', zh: '资本主义' },
        { en: 'Communism', ru: 'Коммунизма', ar: 'الشيوعية', zh: '共产主义' },
      ],
      correct: 2,
    },
  ],
  // ===END_QUIZZES===
};

export function getTopicQuiz(topicId: string): QuizQuestion[] | null {
  return topicQuizzes[topicId] ?? null;
}
