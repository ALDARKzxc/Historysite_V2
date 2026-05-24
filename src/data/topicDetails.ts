import type { LocalizedText } from './epochs';

export interface TopicDetail {
  /** Representative year for the "on the timeline" marker. */
  year: number;
  keyDates: { year: string; event: LocalizedText }[];
}

// Accurate, topic-specific key dates (years only) for every topic, localized.
export const topicDetails: Record<string, TopicDetail> = {
  // ===== Ancient Rus =====
  'varangians': {
    year: 862,
    keyDates: [
      { year: '862', event: { en: 'Varangians invited; Rurik rules in Novgorod', ru: 'Призвание варягов; Рюрик княжит в Новгороде', ar: 'دعوة الفارانغيين؛ روريك يحكم نوفغورود', zh: '召请瓦良格人；留里克在诺夫哥罗德称王' } },
      { year: '879', event: { en: 'Death of Rurik; Oleg becomes regent', ru: 'Смерть Рюрика; Олег становится регентом', ar: 'وفاة روريك؛ أوليغ يصبح وصيًا', zh: '留里克去世；奥列格成为摄政' } },
    ],
  },
  'rurik': {
    year: 862,
    keyDates: [
      { year: '862', event: { en: 'Rurik becomes ruler of Novgorod', ru: 'Рюрик становится правителем Новгорода', ar: 'روريك يصبح حاكم نوفغورود', zh: '留里克成为诺夫哥罗德的统治者' } },
      { year: '879', event: { en: 'Death of Rurik, founder of the dynasty', ru: 'Смерть Рюрика, основателя династии', ar: 'وفاة روريك مؤسس السلالة', zh: '王朝奠基人留里克去世' } },
    ],
  },
  'oleg-prophetic': {
    year: 882,
    keyDates: [
      { year: '882', event: { en: 'Oleg seizes Kiev, unites it with Novgorod', ru: 'Олег захватывает Киев, объединяет с Новгородом', ar: 'أوليغ يستولي على كييف ويوحّدها مع نوفغورود', zh: '奥列格夺取基辅，与诺夫哥罗德统一' } },
      { year: '907', event: { en: 'Campaign against Constantinople', ru: 'Поход на Константинополь', ar: 'حملة على القسطنطينية', zh: '远征君士坦丁堡' } },
      { year: '911', event: { en: 'Trade treaty with Byzantium', ru: 'Торговый договор с Византией', ar: 'معاهدة تجارية مع بيزنطة', zh: '与拜占庭签订贸易条约' } },
    ],
  },
  'kievan-rus': {
    year: 882,
    keyDates: [
      { year: '882', event: { en: 'Kiev becomes the capital of the Rus', ru: 'Киев становится столицей Руси', ar: 'كييف تصبح عاصمة روس', zh: '基辅成为罗斯的首都' } },
      { year: '988', event: { en: 'Adoption of Orthodox Christianity', ru: 'Принятие православия', ar: 'اعتناق المسيحية الأرثوذكسية', zh: '皈依东正教' } },
      { year: '1054', event: { en: 'Death of Yaroslav; fragmentation begins', ru: 'Смерть Ярослава; начало раздробленности', ar: 'وفاة ياروسلاف؛ بداية التفكك', zh: '雅罗斯拉夫去世；分裂开始' } },
    ],
  },
  'baptism-rus': {
    year: 988,
    keyDates: [
      { year: '988', event: { en: 'Mass baptism of Kievans in the Dnieper', ru: 'Массовое крещение киевлян в Днепре', ar: 'التعميد الجماعي لأهل كييف في نهر دنيبر', zh: '基辅人在第聂伯河大规模受洗' } },
      { year: '996', event: { en: 'Church of the Tithes completed', ru: 'Завершение Десятинной церкви', ar: 'اكتمال كنيسة العشور', zh: '什一教堂建成' } },
      { year: '1037', event: { en: 'St. Sophia Cathedral begun in Kiev', ru: 'Заложен Софийский собор в Киеве', ar: 'البدء بكاتدرائية القديسة صوفيا في كييف', zh: '基辅圣索菲亚大教堂动工' } },
    ],
  },
  'yaroslav-wise': {
    year: 1019,
    keyDates: [
      { year: '1019', event: { en: 'Yaroslav becomes Grand Prince of Kiev', ru: 'Ярослав становится великим князем киевским', ar: 'ياروسلاف يصبح أمير كييف الأكبر', zh: '雅罗斯拉夫成为基辅大公' } },
      { year: '1037', event: { en: 'St. Sophia Cathedral founded', ru: 'Основание Софийского собора', ar: 'تأسيس كاتدرائية القديسة صوفيا', zh: '兴建圣索菲亚大教堂' } },
      { year: '1054', event: { en: 'Death of Yaroslav the Wise', ru: 'Смерть Ярослава Мудрого', ar: 'وفاة ياروسلاف الحكيم', zh: '智者雅罗斯拉夫去世' } },
    ],
  },

  // ===== Mongol Invasion =====
  'genghis-khan': {
    year: 1206,
    keyDates: [
      { year: '1206', event: { en: 'Temüjin proclaimed Genghis Khan', ru: 'Тэмуджин провозглашён Чингисханом', ar: 'تيموجين يُعلَن جنكيز خان', zh: '铁木真被尊为成吉思汗' } },
      { year: '1223', event: { en: 'Battle of the Kalka River', ru: 'Битва на реке Калке', ar: 'معركة نهر كالكا', zh: '迦勒迦河战役' } },
      { year: '1227', event: { en: 'Death of Genghis Khan', ru: 'Смерть Чингисхана', ar: 'وفاة جنكيز خان', zh: '成吉思汗去世' } },
    ],
  },
  'mongol-invasion-rus': {
    year: 1237,
    keyDates: [
      { year: '1223', event: { en: 'First clash at the Kalka River', ru: 'Первое столкновение на Калке', ar: 'أول اشتباك عند نهر كالكا', zh: '迦勒迦河首次交战' } },
      { year: '1237', event: { en: "Batu's invasion; Ryazan falls", ru: 'Нашествие Батыя; падение Рязани', ar: 'غزو باتو؛ سقوط ريازان', zh: '拔都入侵；梁赞陷落' } },
      { year: '1240', event: { en: 'Sack of Kiev', ru: 'Разорение Киева', ar: 'نهب كييف', zh: '基辅被洗劫' } },
    ],
  },
  'golden-horde': {
    year: 1242,
    keyDates: [
      { year: '1242', event: { en: 'Golden Horde established on the Volga', ru: 'Образование Золотой Орды на Волге', ar: 'تأسيس القبيلة الذهبية على نهر الفولغا', zh: '金帐汗国在伏尔加河畔建立' } },
      { year: '1380', event: { en: 'Defeat at Kulikovo weakens the Horde', ru: 'Поражение на Куликовом поле ослабляет Орду', ar: 'هزيمة كوليكوفو تُضعف القبيلة', zh: '库利科沃之败削弱了汗国' } },
      { year: '1480', event: { en: 'Great Stand on the Ugra ends the yoke', ru: 'Стояние на Угре кладёт конец игу', ar: 'الوقوف على نهر أوغرا ينهي النير', zh: '乌格拉河对峙结束枷锁' } },
    ],
  },
  'alexander-nevsky': {
    year: 1240,
    keyDates: [
      { year: '1240', event: { en: 'Battle of the Neva against Sweden', ru: 'Невская битва против Швеции', ar: 'معركة نيفا ضد السويد', zh: '对瑞典的涅瓦河战役' } },
      { year: '1242', event: { en: 'Battle on the Ice (Lake Peipus)', ru: 'Ледовое побоище (Чудское озеро)', ar: 'معركة الجليد (بحيرة بيبوس)', zh: '冰上之战（楚德湖）' } },
      { year: '1263', event: { en: 'Death of Alexander Nevsky', ru: 'Смерть Александра Невского', ar: 'وفاة ألكسندر نيفسكي', zh: '亚历山大·涅夫斯基去世' } },
    ],
  },

  // ===== Rise of Moscow =====
  'ivan-kalita': {
    year: 1325,
    keyDates: [
      { year: '1325', event: { en: 'Ivan Kalita becomes prince of Moscow', ru: 'Иван Калита становится князем московским', ar: 'إيفان كاليتا يصبح أمير موسكو', zh: '伊凡·卡利塔成为莫斯科王公' } },
      { year: '1328', event: { en: 'Gains the title of Grand Prince of Vladimir', ru: 'Получает ярлык на великое княжение владимирское', ar: 'ينال لقب أمير فلاديمير الأكبر', zh: '获弗拉基米尔大公称号' } },
      { year: '1340', event: { en: 'Death of Ivan Kalita', ru: 'Смерть Ивана Калиты', ar: 'وفاة إيفان كاليتا', zh: '伊凡·卡利塔去世' } },
    ],
  },
  'kulikovo': {
    year: 1380,
    keyDates: [
      { year: '1380', event: { en: 'Battle of Kulikovo; Mamai defeated', ru: 'Куликовская битва; разгром Мамая', ar: 'معركة كوليكوفو؛ هزيمة مماي', zh: '库利科沃战役；马麦战败' } },
      { year: '1382', event: { en: 'Tokhtamysh sacks Moscow in revenge', ru: 'Тохтамыш сжигает Москву в отместку', ar: 'توقتمش ينهب موسكو انتقامًا', zh: '脱脱迷失报复性洗劫莫斯科' } },
    ],
  },
  'ivan-iii': {
    year: 1462,
    keyDates: [
      { year: '1462', event: { en: 'Ivan III becomes Grand Prince', ru: 'Иван III становится великим князем', ar: 'إيفان الثالث يصبح الأمير الأكبر', zh: '伊凡三世成为大公' } },
      { year: '1478', event: { en: 'Annexation of Novgorod', ru: 'Присоединение Новгорода', ar: 'ضمّ نوفغورود', zh: '吞并诺夫哥罗德' } },
      { year: '1480', event: { en: 'Great Stand on the Ugra; yoke ends', ru: 'Стояние на Угре; конец ига', ar: 'الوقوف على أوغرا؛ نهاية النير', zh: '乌格拉河对峙；枷锁终结' } },
    ],
  },

  // ===== Muscovite State =====
  'ivan-terrible': {
    year: 1547,
    keyDates: [
      { year: '1533', event: { en: 'Becomes Grand Prince as a child', ru: 'Становится великим князем в детстве', ar: 'يصبح الأمير الأكبر وهو طفل', zh: '幼年即位为大公' } },
      { year: '1547', event: { en: 'Crowned the first Tsar of Russia', ru: 'Венчан на царство — первый царь России', ar: 'يُتوَّج أول قيصر لروسيا', zh: '加冕为俄罗斯首位沙皇' } },
      { year: '1584', event: { en: 'Death of Ivan the Terrible', ru: 'Смерть Ивана Грозного', ar: 'وفاة إيفان الرهيب', zh: '伊凡雷帝去世' } },
    ],
  },
  'oprichnina': {
    year: 1565,
    keyDates: [
      { year: '1565', event: { en: 'Oprichnina established', ru: 'Учреждение опричнины', ar: 'تأسيس الأوبريتشنينا', zh: '设立特辖制' } },
      { year: '1570', event: { en: 'Massacre of Novgorod', ru: 'Новгородский погром', ar: 'مذبحة نوفغورود', zh: '诺夫哥罗德大屠杀' } },
      { year: '1572', event: { en: 'Oprichnina abolished', ru: 'Отмена опричнины', ar: 'إلغاء الأوبريتشنينا', zh: '废除特辖制' } },
    ],
  },
  'siberia-yermak': {
    year: 1582,
    keyDates: [
      { year: '1581', event: { en: "Yermak's campaign into Siberia begins", ru: 'Начало похода Ермака в Сибирь', ar: 'بدء حملة يرماك إلى سيبيريا', zh: '叶尔马克远征西伯利亚开始' } },
      { year: '1582', event: { en: 'Capture of Qashliq, the Sibir capital', ru: 'Взятие Кашлыка, столицы Сибирского ханства', ar: 'الاستيلاء على قشليق عاصمة خانية سيبير', zh: '攻占失必儿汗国都城卡什雷克' } },
      { year: '1585', event: { en: 'Death of Yermak', ru: 'Гибель Ермака', ar: 'مقتل يرماك', zh: '叶尔马克之死' } },
    ],
  },
  // ===== Time of Troubles =====
  'false-dmitry': {
    year: 1605,
    keyDates: [
      { year: '1604', event: { en: 'Invades Russia with Polish backing', ru: 'Вторгается в Россию при поддержке Польши', ar: 'يغزو روسيا بدعم بولندي', zh: '在波兰支持下入侵俄罗斯' } },
      { year: '1605', event: { en: 'Enters Moscow and becomes tsar', ru: 'Входит в Москву и становится царём', ar: 'يدخل موسكو ويصبح قيصرًا', zh: '进入莫斯科并称沙皇' } },
      { year: '1606', event: { en: 'Overthrown and killed', ru: 'Свергнут и убит', ar: 'يُخلع ويُقتل', zh: '被推翻并杀死' } },
    ],
  },
  'minin-pozharsky': {
    year: 1612,
    keyDates: [
      { year: '1611', event: { en: 'Second volunteer army formed in Nizhny Novgorod', ru: 'Второе ополчение в Нижнем Новгороде', ar: 'تشكيل الجيش الشعبي الثاني في نيجني نوفغورود', zh: '在下诺夫哥罗德组建第二支民兵' } },
      { year: '1612', event: { en: 'Moscow liberated from Polish forces', ru: 'Освобождение Москвы от поляков', ar: 'تحرير موسكو من القوات البولندية', zh: '莫斯科从波兰军队手中解放' } },
      { year: '1613', event: { en: 'Mikhail Romanov elected tsar', ru: 'Избрание царём Михаила Романова', ar: 'انتخاب ميخائيل رومانوف قيصرًا', zh: '米哈伊尔·罗曼诺夫当选沙皇' } },
    ],
  },

  // ===== Peter the Great =====
  'peter-reforms': {
    year: 1682,
    keyDates: [
      { year: '1682', event: { en: 'Peter becomes co-tsar', ru: 'Пётр становится соправителем', ar: 'بطرس يصبح قيصرًا مشاركًا', zh: '彼得成为共治沙皇' } },
      { year: '1700', event: { en: 'Calendar reform; new institutions', ru: 'Календарная реформа; новые учреждения', ar: 'إصلاح التقويم؛ مؤسسات جديدة', zh: '历法改革；新设机构' } },
      { year: '1721', event: { en: 'Proclaimed Emperor of All Russia', ru: 'Провозглашён императором всероссийским', ar: 'يُعلَن إمبراطورًا لعموم روسيا', zh: '被尊为全俄罗斯皇帝' } },
    ],
  },
  'saint-petersburg': {
    year: 1703,
    keyDates: [
      { year: '1703', event: { en: 'Foundation of Saint Petersburg', ru: 'Основание Санкт-Петербурга', ar: 'تأسيس سانت بطرسبرغ', zh: '圣彼得堡奠基' } },
      { year: '1712', event: { en: 'Capital moved to St. Petersburg', ru: 'Перенос столицы в Санкт-Петербург', ar: 'نقل العاصمة إلى سانت بطرسبرغ', zh: '首都迁至圣彼得堡' } },
    ],
  },
  'battle-poltava': {
    year: 1709,
    keyDates: [
      { year: '1700', event: { en: 'Defeat at Narva', ru: 'Поражение под Нарвой', ar: 'الهزيمة في نارفا', zh: '纳尔瓦之败' } },
      { year: '1709', event: { en: 'Decisive victory at Poltava', ru: 'Решающая победа под Полтавой', ar: 'انتصار حاسم في بولتافا', zh: '波尔塔瓦决定性胜利' } },
      { year: '1721', event: { en: 'Treaty of Nystad', ru: 'Ништадтский мир', ar: 'معاهدة نيستاد', zh: '尼斯塔德条约' } },
    ],
  },
  'northern-war': {
    year: 1700,
    keyDates: [
      { year: '1700', event: { en: 'War with Sweden begins (Narva)', ru: 'Начало войны со Швецией (Нарва)', ar: 'بدء الحرب مع السويد (نارفا)', zh: '对瑞典战争开始（纳尔瓦）' } },
      { year: '1709', event: { en: 'Battle of Poltava', ru: 'Полтавская битва', ar: 'معركة بولتافا', zh: '波尔塔瓦战役' } },
      { year: '1721', event: { en: 'Treaty of Nystad ends the war', ru: 'Ништадтский мир завершает войну', ar: 'معاهدة نيستاد تنهي الحرب', zh: '尼斯塔德条约结束战争' } },
    ],
  },

  // ===== Catherine the Great =====
  'enlightened-absolutism': {
    year: 1762,
    keyDates: [
      { year: '1762', event: { en: 'Catherine II takes the throne', ru: 'Екатерина II восходит на престол', ar: 'كاترين الثانية تعتلي العرش', zh: '叶卡捷琳娜二世即位' } },
      { year: '1767', event: { en: 'Legislative Commission and the Nakaz', ru: 'Уложенная комиссия и «Наказ»', ar: 'اللجنة التشريعية و«الناكاز»', zh: '立法委员会与《训令》' } },
      { year: '1785', event: { en: 'Charter to the Nobility', ru: 'Жалованная грамота дворянству', ar: 'ميثاق النبلاء', zh: '贵族特许状' } },
    ],
  },
  'pugachev': {
    year: 1773,
    keyDates: [
      { year: '1773', event: { en: 'Pugachev uprising begins', ru: 'Начало восстания Пугачёва', ar: 'بدء انتفاضة بوغاتشوف', zh: '普加乔夫起义爆发' } },
      { year: '1774', event: { en: 'Rebellion defeated; Pugachev captured', ru: 'Подавление восстания; пленение Пугачёва', ar: 'هزيمة التمرد؛ أسر بوغاتشوف', zh: '起义被镇压；普加乔夫被俘' } },
      { year: '1775', event: { en: 'Execution of Pugachev', ru: 'Казнь Пугачёва', ar: 'إعدام بوغاتشوف', zh: '普加乔夫被处决' } },
    ],
  },
  'crimea-annexation': {
    year: 1783,
    keyDates: [
      { year: '1774', event: { en: 'Treaty of Küçük Kaynarca', ru: 'Кючук-Кайнарджийский мир', ar: 'معاهدة كوتشوك قينارجة', zh: '库楚克-凯纳尔吉条约' } },
      { year: '1783', event: { en: 'Annexation of Crimea', ru: 'Присоединение Крыма', ar: 'ضمّ شبه جزيرة القرم', zh: '吞并克里米亚' } },
      { year: '1787', event: { en: 'New Russo-Turkish War begins', ru: 'Начало новой русско-турецкой войны', ar: 'بدء حرب روسية عثمانية جديدة', zh: '新一轮俄土战争爆发' } },
    ],
  },

  // ===== Napoleon & 1812 =====
  'patriotic-war': {
    year: 1812,
    keyDates: [
      { year: '1812', event: { en: 'Napoleon invades Russia (June)', ru: 'Наполеон вторгается в Россию (июнь)', ar: 'نابليون يغزو روسيا (يونيو)', zh: '拿破仑入侵俄罗斯（6月）' } },
      { year: '1812', event: { en: 'Battle of Borodino (September)', ru: 'Бородинское сражение (сентябрь)', ar: 'معركة بورودينو (سبتمبر)', zh: '博罗季诺战役（9月）' } },
      { year: '1812', event: { en: 'Grande Armée destroyed in retreat (December)', ru: 'Гибель Великой армии при отступлении (декабрь)', ar: 'تدمير الجيش الكبير أثناء الانسحاب (ديسمبر)', zh: '大军在撤退中覆灭（12月）' } },
    ],
  },
  'borodino': {
    year: 1812,
    keyDates: [
      { year: '1812', event: { en: 'Battle of Borodino (Sep 7)', ru: 'Бородинское сражение (7 сентября)', ar: 'معركة بورودينو (7 سبتمبر)', zh: '博罗季诺战役（9月7日）' } },
      { year: '1812', event: { en: 'Napoleon enters Moscow (Sep 14)', ru: 'Наполеон вступает в Москву (14 сентября)', ar: 'نابليون يدخل موسكو (14 سبتمبر)', zh: '拿破仑进入莫斯科（9月14日）' } },
    ],
  },
  'decembrists': {
    year: 1825,
    keyDates: [
      { year: '1825', event: { en: 'Decembrist uprising in St. Petersburg (Dec 14)', ru: 'Восстание декабристов в Петербурге (14 декабря)', ar: 'انتفاضة الديسمبريين في بطرسبرغ (14 ديسمبر)', zh: '彼得堡十二月党人起义（12月14日）' } },
      { year: '1826', event: { en: 'Five leaders executed', ru: 'Казнь пяти руководителей', ar: 'إعدام القادة الخمسة', zh: '五位领袖被处决' } },
    ],
  },

  // ===== Great Reforms =====
  'abolition-serfdom': {
    year: 1861,
    keyDates: [
      { year: '1861', event: { en: 'Emancipation Manifesto frees the serfs', ru: 'Манифест об отмене крепостного права', ar: 'بيان تحرير الأقنان', zh: '解放宣言解放农奴' } },
      { year: '1864', event: { en: 'Zemstvo and judicial reforms', ru: 'Земская и судебная реформы', ar: 'إصلاحات الزيمستفو والقضاء', zh: '地方自治与司法改革' } },
    ],
  },
  'trans-siberian': {
    year: 1891,
    keyDates: [
      { year: '1891', event: { en: 'Construction of the railway begins', ru: 'Начало строительства магистрали', ar: 'بدء بناء السكة الحديدية', zh: '铁路开工建设' } },
      { year: '1904', event: { en: 'Main line completed', ru: 'Завершение основной линии', ar: 'اكتمال الخط الرئيسي', zh: '主线建成' } },
      { year: '1916', event: { en: 'Fully completed across the Amur', ru: 'Полное завершение (через Амур)', ar: 'الاكتمال الكامل عبر نهر آمور', zh: '经阿穆尔河全线竣工' } },
    ],
  },
  // ===== Late Empire & Revolution =====
  'nicholas-ii': {
    year: 1894,
    keyDates: [
      { year: '1894', event: { en: 'Nicholas II accedes to the throne', ru: 'Николай II восходит на престол', ar: 'نيقولا الثاني يعتلي العرش', zh: '尼古拉二世即位' } },
      { year: '1905', event: { en: 'First Russian Revolution', ru: 'Первая русская революция', ar: 'الثورة الروسية الأولى', zh: '第一次俄国革命' } },
      { year: '1917', event: { en: 'Abdication; fall of the monarchy', ru: 'Отречение; падение монархии', ar: 'التنازل؛ سقوط الملكية', zh: '退位；君主制覆灭' } },
    ],
  },
  'bloody-sunday': {
    year: 1905,
    keyDates: [
      { year: '1905', event: { en: 'Bloody Sunday in St. Petersburg (Jan)', ru: 'Кровавое воскресенье в Петербурге (январь)', ar: 'الأحد الدامي في بطرسبرغ (يناير)', zh: '彼得堡流血星期日（1月）' } },
      { year: '1905', event: { en: 'October Manifesto grants rights', ru: 'Октябрьский манифест дарует свободы', ar: 'بيان أكتوبر يمنح الحقوق', zh: '十月宣言赋予权利' } },
    ],
  },
  'october-revolution': {
    year: 1917,
    keyDates: [
      { year: '1917', event: { en: 'February Revolution; Tsar abdicates', ru: 'Февральская революция; отречение царя', ar: 'ثورة فبراير؛ تنازل القيصر', zh: '二月革命；沙皇退位' } },
      { year: '1917', event: { en: 'Bolsheviks seize power (October)', ru: 'Большевики берут власть (октябрь)', ar: 'البلاشفة يستولون على السلطة (أكتوبر)', zh: '布尔什维克夺权（十月）' } },
    ],
  },
  'rasputin': {
    year: 1916,
    keyDates: [
      { year: '1905', event: { en: 'Rasputin meets the royal family', ru: 'Распутин знакомится с царской семьёй', ar: 'راسبوتين يلتقي العائلة المالكة', zh: '拉斯普京结识皇室' } },
      { year: '1916', event: { en: 'Rasputin is murdered', ru: 'Убийство Распутина', ar: 'اغتيال راسبوتين', zh: '拉斯普京被谋杀' } },
    ],
  },

  // ===== Civil War & Early USSR =====
  'civil-war-russia': {
    year: 1918,
    keyDates: [
      { year: '1918', event: { en: 'Civil War breaks out (Reds vs Whites)', ru: 'Начало Гражданской войны (красные против белых)', ar: 'اندلاع الحرب الأهلية (الحمر ضد البيض)', zh: '内战爆发（红军对白军）' } },
      { year: '1920', event: { en: 'Reds defeat the main White armies', ru: 'Красные разбивают основные белые армии', ar: 'الحمر يهزمون الجيوش البيضاء الرئيسية', zh: '红军击败白军主力' } },
      { year: '1922', event: { en: 'War ends in Bolshevik victory', ru: 'Война заканчивается победой большевиков', ar: 'الحرب تنتهي بانتصار البلاشفة', zh: '战争以布尔什维克胜利告终' } },
    ],
  },
  'romanov-execution': {
    year: 1918,
    keyDates: [
      { year: '1917', event: { en: 'Nicholas II abdicates', ru: 'Отречение Николая II', ar: 'تنازل نيقولا الثاني', zh: '尼古拉二世退位' } },
      { year: '1918', event: { en: 'Romanov family executed in Yekaterinburg', ru: 'Расстрел семьи Романовых в Екатеринбурге', ar: 'إعدام عائلة رومانوف في يكاترينبورغ', zh: '罗曼诺夫家族在叶卡捷琳堡被处决' } },
    ],
  },
  'ussr-formation': {
    year: 1922,
    keyDates: [
      { year: '1922', event: { en: 'USSR established (December)', ru: 'Образование СССР (декабрь)', ar: 'تأسيس الاتحاد السوفيتي (ديسمبر)', zh: '苏联成立（12月）' } },
      { year: '1924', event: { en: 'First Soviet constitution adopted', ru: 'Принятие первой советской конституции', ar: 'إقرار أول دستور سوفيتي', zh: '通过首部苏联宪法' } },
    ],
  },

  // ===== Stalin's USSR =====
  'collectivization': {
    year: 1929,
    keyDates: [
      { year: '1928', event: { en: 'First Five-Year Plan launched', ru: 'Запуск первой пятилетки', ar: 'إطلاق الخطة الخمسية الأولى', zh: '第一个五年计划启动' } },
      { year: '1929', event: { en: 'Mass collectivization begins', ru: 'Начало массовой коллективизации', ar: 'بدء التجميع الزراعي الجماعي', zh: '大规模集体化开始' } },
      { year: '1932', event: { en: 'Famine devastates the countryside', ru: 'Массовый голод в деревне', ar: 'مجاعة تجتاح الريف', zh: '饥荒席卷乡村' } },
    ],
  },
  'great-terror': {
    year: 1937,
    keyDates: [
      { year: '1934', event: { en: 'Kirov assassinated — pretext for purges', ru: 'Убийство Кирова — повод для репрессий', ar: 'اغتيال كيروف — ذريعة للتطهير', zh: '基洛夫遇刺——清洗的借口' } },
      { year: '1936', event: { en: 'Moscow show trials begin', ru: 'Начало московских процессов', ar: 'بدء محاكمات موسكو الصورية', zh: '莫斯科公开审判开始' } },
      { year: '1937', event: { en: 'Peak of the Great Terror', ru: 'Пик Большого террора', ar: 'ذروة الإرهاب الكبير', zh: '大清洗的顶峰' } },
    ],
  },
  'gulag': {
    year: 1930,
    keyDates: [
      { year: '1930', event: { en: 'GULAG camp administration created', ru: 'Создание управления лагерей ГУЛАГ', ar: 'إنشاء إدارة معسكرات الغولاغ', zh: '设立古拉格劳改营管理总局' } },
      { year: '1953', event: { en: "After Stalin's death the system shrinks", ru: 'После смерти Сталина система сокращается', ar: 'بعد وفاة ستالين يتقلص النظام', zh: '斯大林死后体系收缩' } },
    ],
  },

  // ===== Great Patriotic War =====
  'operation-barbarossa': {
    year: 1941,
    keyDates: [
      { year: '1941', event: { en: 'Germany invades the USSR (Jun 22)', ru: 'Германия нападает на СССР (22 июня)', ar: 'ألمانيا تغزو الاتحاد السوفيتي (22 يونيو)', zh: '德国入侵苏联（6月22日）' } },
      { year: '1941', event: { en: 'Battle of Moscow halts the advance', ru: 'Битва за Москву останавливает наступление', ar: 'معركة موسكو توقف التقدّم', zh: '莫斯科战役遏制了进攻' } },
    ],
  },
  'battle-stalingrad': {
    year: 1942,
    keyDates: [
      { year: '1942', event: { en: 'German forces reach Stalingrad', ru: 'Немцы выходят к Сталинграду', ar: 'القوات الألمانية تصل ستالينغراد', zh: '德军抵达斯大林格勒' } },
      { year: '1942', event: { en: 'Operation Uranus encircles the 6th Army', ru: 'Операция «Уран» окружает 6-ю армию', ar: 'عملية أورانوس تطوّق الجيش السادس', zh: '天王星行动包围第六集团军' } },
      { year: '1943', event: { en: 'German surrender at Stalingrad', ru: 'Капитуляция немцев под Сталинградом', ar: 'استسلام الألمان في ستالينغراد', zh: '德军在斯大林格勒投降' } },
    ],
  },
  'siege-leningrad': {
    year: 1941,
    keyDates: [
      { year: '1941', event: { en: 'Siege of Leningrad begins (September)', ru: 'Начало блокады Ленинграда (сентябрь)', ar: 'بدء حصار لينينغراد (سبتمبر)', zh: '列宁格勒围城开始（9月）' } },
      { year: '1943', event: { en: 'Land corridor breaks the blockade', ru: 'Прорыв блокады (операция «Искра»)', ar: 'كسر الحصار بممر بري', zh: '陆上走廊打破封锁' } },
      { year: '1944', event: { en: 'Siege fully lifted', ru: 'Полное снятие блокады', ar: 'رفع الحصار بالكامل', zh: '围城彻底解除' } },
    ],
  },
  'victory-day': {
    year: 1945,
    keyDates: [
      { year: '1945', event: { en: 'Nazi Germany surrenders (May 8/9)', ru: 'Капитуляция нацистской Германии (8/9 мая)', ar: 'استسلام ألمانيا النازية (8/9 مايو)', zh: '纳粹德国投降（5月8/9日）' } },
      { year: '1945', event: { en: 'Victory Parade in Moscow (June 24)', ru: 'Парад Победы в Москве (24 июня)', ar: 'عرض النصر في موسكو (24 يونيو)', zh: '莫斯科胜利阅兵（6月24日）' } },
    ],
  },

  // ===== Cold War & Space Race =====
  'sputnik': {
    year: 1957,
    keyDates: [
      { year: '1957', event: { en: 'Sputnik 1 — first satellite (Oct 4)', ru: 'Спутник-1 — первый спутник (4 октября)', ar: 'سبوتنيك 1 — أول قمر صناعي (4 أكتوبر)', zh: '斯普特尼克1号——首颗卫星（10月4日）' } },
      { year: '1957', event: { en: 'Sputnik 2 carries the dog Laika', ru: 'Спутник-2 с собакой Лайкой', ar: 'سبوتنيك 2 يحمل الكلبة لايكا', zh: '斯普特尼克2号搭载小狗莱卡' } },
    ],
  },
  'gagarin': {
    year: 1961,
    keyDates: [
      { year: '1961', event: { en: 'Gagarin — first human in space (Apr 12)', ru: 'Гагарин — первый человек в космосе (12 апреля)', ar: 'غاغارين — أول إنسان في الفضاء (12 أبريل)', zh: '加加林——首位进入太空者（4月12日）' } },
      { year: '1968', event: { en: 'Gagarin dies in a jet crash', ru: 'Гибель Гагарина в авиакатастрофе', ar: 'مقتل غاغارين في تحطّم طائرة', zh: '加加林在飞机失事中遇难' } },
    ],
  },
  'cuban-crisis': {
    year: 1962,
    keyDates: [
      { year: '1962', event: { en: 'Thirteen days of nuclear standoff (October)', ru: 'Тринадцать дней ядерного противостояния (октябрь)', ar: 'ثلاثة عشر يومًا من المواجهة النووية (أكتوبر)', zh: '十三天核对峙（10月）' } },
      { year: '1962', event: { en: 'Crisis resolved by mutual withdrawal', ru: 'Кризис разрешён взаимным отводом ракет', ar: 'حلّ الأزمة بانسحاب متبادل', zh: '危机以双方撤回而化解' } },
    ],
  },
  'khrushchev-thaw': {
    year: 1956,
    keyDates: [
      { year: '1953', event: { en: 'Death of Stalin', ru: 'Смерть Сталина', ar: 'وفاة ستالين', zh: '斯大林去世' } },
      { year: '1956', event: { en: 'Secret Speech denounces Stalin', ru: 'Секретный доклад с осуждением Сталина', ar: 'الخطاب السري يدين ستالين', zh: '秘密报告批判斯大林' } },
      { year: '1964', event: { en: 'Khrushchev removed from power', ru: 'Хрущёв отстранён от власти', ar: 'إقالة خروتشوف من السلطة', zh: '赫鲁晓夫被罢黜' } },
    ],
  },

  // ===== Perestroika & Collapse =====
  'perestroika-topic': {
    year: 1985,
    keyDates: [
      { year: '1985', event: { en: 'Gorbachev comes to power', ru: 'Горбачёв приходит к власти', ar: 'غورباتشوف يصل إلى السلطة', zh: '戈尔巴乔夫上台' } },
      { year: '1986', event: { en: 'Policy of glasnost (openness)', ru: 'Политика гласности', ar: 'سياسة الغلاسنوست (العلنية)', zh: '公开性政策' } },
      { year: '1991', event: { en: 'Reforms end with the USSR collapse', ru: 'Реформы завершаются распадом СССР', ar: 'الإصلاحات تنتهي بانهيار الاتحاد السوفيتي', zh: '改革以苏联解体告终' } },
    ],
  },
  'chernobyl': {
    year: 1986,
    keyDates: [
      { year: '1986', event: { en: 'Reactor explosion at Chernobyl (Apr 26)', ru: 'Взрыв реактора в Чернобыле (26 апреля)', ar: 'انفجار المفاعل في تشيرنوبيل (26 أبريل)', zh: '切尔诺贝利反应堆爆炸（4月26日）' } },
      { year: '1986', event: { en: 'Exclusion zone established', ru: 'Создание зоны отчуждения', ar: 'إنشاء منطقة الحظر', zh: '设立隔离区' } },
    ],
  },
  'ussr-dissolution': {
    year: 1991,
    keyDates: [
      { year: '1991', event: { en: 'August coup attempt fails', ru: 'Провал августовского путча', ar: 'فشل انقلاب أغسطس', zh: '八月政变失败' } },
      { year: '1991', event: { en: 'Belovezha Accords dissolve the union (Dec)', ru: 'Беловежские соглашения (декабрь)', ar: 'اتفاقيات بيلوفيج تحلّ الاتحاد (ديسمبر)', zh: '别洛韦日协议解散联盟（12月）' } },
      { year: '1991', event: { en: 'Soviet flag lowered over the Kremlin (Dec 25)', ru: 'Спуск советского флага над Кремлём (25 декабря)', ar: 'إنزال العلم السوفيتي فوق الكرملين (25 ديسمبر)', zh: '苏联国旗从克里姆林宫降下（12月25日）' } },
    ],
  },

  // ===== Modern Russia =====
  'yeltsin': {
    year: 1991,
    keyDates: [
      { year: '1991', event: { en: 'First president of the Russian Federation', ru: 'Первый президент Российской Федерации', ar: 'أول رئيس للاتحاد الروسي', zh: '俄罗斯联邦首任总统' } },
      { year: '1993', event: { en: 'Constitutional crisis; new constitution', ru: 'Конституционный кризис; новая конституция', ar: 'أزمة دستورية؛ دستور جديد', zh: '宪政危机；新宪法' } },
      { year: '1999', event: { en: 'Yeltsin resigns', ru: 'Отставка Ельцина', ar: 'استقالة يلتسين', zh: '叶利钦辞职' } },
    ],
  },
  'russia-1990s': {
    year: 1992,
    keyDates: [
      { year: '1992', event: { en: 'Shock therapy; prices liberalized', ru: 'Шоковая терапия; либерализация цен', ar: 'العلاج بالصدمة؛ تحرير الأسعار', zh: '休克疗法；价格自由化' } },
      { year: '1993', event: { en: 'New constitution adopted', ru: 'Принятие новой конституции', ar: 'إقرار دستور جديد', zh: '通过新宪法' } },
      { year: '1998', event: { en: 'Financial default', ru: 'Финансовый дефолт', ar: 'التخلف المالي عن السداد', zh: '金融违约' } },
    ],
  },
  // ===END===
};

export function getTopicDetail(topicId: string | undefined): TopicDetail | undefined {
  return topicId ? topicDetails[topicId] : undefined;
}
