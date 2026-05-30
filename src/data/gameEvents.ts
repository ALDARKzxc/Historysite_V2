import type { LocalizedText } from './epochs';
import gameImages from './gameImages.json';

// Larger pool of dated events for the "Which came first?" mini-game.
// Kept separate from timelineEvents (which is used by the Timeline page)
// so we can pack the game pool densely without cluttering the headline timeline.
//
// Game uses a per-century bucketing: every pair shown is from the SAME century,
// so the distance between the two events is at most ~100 years — much harder
// than the wide-open mix of centuries in the old version.
//
// Each event also has a stable `id` (year-slug) that keys into gameImages.json,
// produced by scripts/fetch-game-images.mjs — that gives every card its own
// distinct Wikipedia thumbnail instead of falling back to the shared epoch
// cover, so two events from the same epoch never look identical.

export interface GameEvent {
  /** Stable slug; key into gameImages.json. Format: "<year>-<topic>". */
  id: string;
  year: number;
  title: LocalizedText;
  /** Used for color and as a last-resort image fallback. */
  epochId: string;
}

export const gameEvents: GameEvent[] = [
  // IX век
  { id: '862-varangians', year: 862, title: { en: 'Calling of the Varangians', ru: 'Призвание варягов', ar: 'دعوة الفارانغيين', zh: '瓦良格人的召唤' }, epochId: 'ancient-rus' },
  { id: '879-rurik-death', year: 879, title: { en: 'Death of Rurik', ru: 'Смерть Рюрика', ar: 'وفاة روريك', zh: '留里克逝世' }, epochId: 'ancient-rus' },
  { id: '882-oleg-unites', year: 882, title: { en: 'Oleg unites Kiev and Novgorod', ru: 'Олег объединяет Киев и Новгород', ar: 'أوليغ يوحّد كييف ونوفغورود', zh: '奥列格统一基辅与诺夫哥罗德' }, epochId: 'ancient-rus' },

  // X век
  { id: '907-tsargrad', year: 907, title: { en: "Oleg's campaign against Constantinople", ru: 'Поход Олега на Царьград', ar: 'حملة أوليغ على القسطنطينية', zh: '奥列格远征君士坦丁堡' }, epochId: 'ancient-rus' },
  { id: '945-igor-death', year: 945, title: { en: 'Death of Prince Igor', ru: 'Гибель князя Игоря', ar: 'مقتل الأمير إيغور', zh: '伊戈尔大公遇害' }, epochId: 'ancient-rus' },
  { id: '957-olga-baptism', year: 957, title: { en: "Princess Olga's baptism", ru: 'Крещение княгини Ольги', ar: 'تعميد الأميرة أولغا', zh: '奥尔加公主受洗' }, epochId: 'ancient-rus' },
  { id: '965-khazars', year: 965, title: { en: 'Svyatoslav defeats the Khazars', ru: 'Святослав разгромил хазар', ar: 'سفياتوسلاف يهزم الخزر', zh: '斯维亚托斯拉夫击败可萨人' }, epochId: 'ancient-rus' },
  { id: '988-baptism', year: 988, title: { en: 'Baptism of Rus', ru: 'Крещение Руси', ar: 'تعميد روس', zh: '罗斯受洗' }, epochId: 'ancient-rus' },

  // XI век
  { id: '1019-yaroslav-rule', year: 1019, title: { en: 'Reign of Yaroslav the Wise begins', ru: 'Начало княжения Ярослава Мудрого', ar: 'بداية حكم ياروسلاف الحكيم', zh: '智者雅罗斯拉夫开始统治' }, epochId: 'ancient-rus' },
  { id: '1037-sophia-kyiv', year: 1037, title: { en: 'Saint Sophia Cathedral in Kiev completed', ru: 'Завершение Софийского собора в Киеве', ar: 'اكتمال كاتدرائية القديسة صوفيا في كييف', zh: '基辅圣索菲亚大教堂建成' }, epochId: 'ancient-rus' },
  { id: '1054-yaroslav-death', year: 1054, title: { en: 'Death of Yaroslav the Wise', ru: 'Смерть Ярослава Мудрого', ar: 'وفاة ياروسلاف الحكيم', zh: '智者雅罗斯拉夫逝世' }, epochId: 'ancient-rus' },
  { id: '1097-lyubech', year: 1097, title: { en: 'Lyubech Congress of Princes', ru: 'Любечский съезд князей', ar: 'مؤتمر ليوبيتش للأمراء', zh: '柳别奇王公大会' }, epochId: 'ancient-rus' },

  // XII век
  { id: '1113-monomakh-rule', year: 1113, title: { en: 'Reign of Vladimir Monomakh begins', ru: 'Начало княжения Владимира Мономаха', ar: 'بداية حكم فلاديمير مونوماخ', zh: '弗拉基米尔·莫诺马赫开始统治' }, epochId: 'ancient-rus' },
  { id: '1125-monomakh-death', year: 1125, title: { en: 'Death of Vladimir Monomakh', ru: 'Смерть Владимира Мономаха', ar: 'وفاة فلاديمير مونوماخ', zh: '弗拉基米尔·莫诺马赫逝世' }, epochId: 'ancient-rus' },
  { id: '1147-moscow-founded', year: 1147, title: { en: 'First mention of Moscow in the chronicles', ru: 'Первое упоминание Москвы в летописи', ar: 'أول ذكر لموسكو في الحوليات', zh: '编年史首次提及莫斯科' }, epochId: 'ancient-rus' },
  { id: '1169-bogolyubsky-kyiv', year: 1169, title: { en: 'Andrey Bogolyubsky sacks Kiev', ru: 'Андрей Боголюбский берёт Киев', ar: 'أندريه بوغوليوبسكي ينهب كييف', zh: '安德烈·博戈柳布斯基攻取基辅' }, epochId: 'ancient-rus' },
  { id: '1185-igor-polovtsy', year: 1185, title: { en: "Prince Igor's campaign against the Polovtsy", ru: 'Поход князя Игоря на половцев', ar: 'حملة الأمير إيغور على البولوفتسي', zh: '伊戈尔大公征讨波洛韦茨人' }, epochId: 'ancient-rus' },

  // XIII век
  { id: '1223-kalka', year: 1223, title: { en: 'Battle of the Kalka River', ru: 'Битва на Калке', ar: 'معركة نهر كالكا', zh: '卡尔卡河战役' }, epochId: 'mongol-invasion' },
  { id: '1237-batu', year: 1237, title: { en: "Batu's invasion of Rus begins", ru: 'Начало Батыева нашествия', ar: 'بداية غزو باطو لروس', zh: '拔都入侵罗斯开始' }, epochId: 'mongol-invasion' },
  { id: '1240-neva', year: 1240, title: { en: 'Battle of the Neva', ru: 'Невская битва', ar: 'معركة نهر نيفا', zh: '涅瓦河战役' }, epochId: 'mongol-invasion' },
  { id: '1242-ice', year: 1242, title: { en: 'Battle on the Ice (Lake Peipus)', ru: 'Ледовое побоище', ar: 'معركة الجليد على بحيرة بيبوس', zh: '楚德湖冰上之战' }, epochId: 'mongol-invasion' },
  { id: '1257-mongol-census', year: 1257, title: { en: 'Mongol census of Rus', ru: 'Ордынская перепись Руси', ar: 'إحصاء القبيلة الذهبية لروس', zh: '蒙古对罗斯的人口普查' }, epochId: 'mongol-invasion' },
  { id: '1263-nevsky-death', year: 1263, title: { en: 'Death of Alexander Nevsky', ru: 'Смерть Александра Невского', ar: 'وفاة ألكسندر نيفسكي', zh: '亚历山大·涅夫斯基逝世' }, epochId: 'mongol-invasion' },

  // XIV век
  { id: '1325-kalita-rule', year: 1325, title: { en: 'Reign of Ivan Kalita begins', ru: 'Начало княжения Ивана Калиты', ar: 'بداية حكم إيفان كاليتا', zh: '伊凡·卡利塔开始统治' }, epochId: 'rise-of-moscow' },
  { id: '1359-donskoy-rule', year: 1359, title: { en: 'Reign of Dmitry Donskoy begins', ru: 'Начало княжения Дмитрия Донского', ar: 'بداية حكم دميتري دونسكوي', zh: '德米特里·顿斯科伊开始统治' }, epochId: 'rise-of-moscow' },
  { id: '1367-kremlin-stone', year: 1367, title: { en: "Moscow's white-stone Kremlin built", ru: 'Постройка белокаменного Кремля Москвы', ar: 'بناء كرملين موسكو الأبيض', zh: '莫斯科白石克里姆林建成' }, epochId: 'rise-of-moscow' },
  { id: '1378-vozha', year: 1378, title: { en: 'Battle of the Vozha — first victory over the Horde', ru: 'Битва на Воже — первая победа над Ордой', ar: 'معركة فوجا — أول انتصار على القبيلة الذهبية', zh: '沃扎河之战——首次战胜金帐汗国' }, epochId: 'rise-of-moscow' },
  { id: '1380-kulikovo', year: 1380, title: { en: 'Battle of Kulikovo', ru: 'Куликовская битва', ar: 'معركة كوليكوفو', zh: '库利科沃战役' }, epochId: 'rise-of-moscow' },
  { id: '1382-tokhtamysh', year: 1382, title: { en: "Tokhtamysh's sack of Moscow", ru: 'Разорение Москвы Тохтамышем', ar: 'نهب موسكو على يد توقتمش', zh: '脱脱迷失劫掠莫斯科' }, epochId: 'rise-of-moscow' },

  // XV век
  { id: '1462-ivan3-rule', year: 1462, title: { en: 'Reign of Ivan III begins', ru: 'Начало правления Ивана III', ar: 'بداية حكم إيفان الثالث', zh: '伊凡三世开始统治' }, epochId: 'rise-of-moscow' },
  { id: '1471-shelon', year: 1471, title: { en: "Moscow defeats Novgorod at the Shelon", ru: 'Победа Москвы над Новгородом на Шелони', ar: 'انتصار موسكو على نوفغورود عند نهر شيلون', zh: '莫斯科在舍隆河击败诺夫哥罗德' }, epochId: 'rise-of-moscow' },
  { id: '1478-novgorod-annexed', year: 1478, title: { en: 'Novgorod annexed by Moscow', ru: 'Присоединение Новгорода к Москве', ar: 'ضمّ نوفغورود إلى موسكو', zh: '诺夫哥罗德被莫斯科兼并' }, epochId: 'rise-of-moscow' },
  { id: '1480-ugra', year: 1480, title: { en: 'Great Stand on the Ugra — end of the Yoke', ru: 'Стояние на Угре — конец ига', ar: 'الوقفة الكبرى على نهر أوغرا — نهاية النير', zh: '乌格拉河对峙——枷锁的终结' }, epochId: 'rise-of-moscow' },
  { id: '1497-sudebnik', year: 1497, title: { en: "Sudebnik of Ivan III (first all-Russian law code)", ru: 'Судебник Ивана III', ar: 'سوديبنيك إيفان الثالث', zh: '伊凡三世《法律汇典》' }, epochId: 'rise-of-moscow' },

  // XVI век
  { id: '1505-ivan3-death', year: 1505, title: { en: 'Death of Ivan III', ru: 'Смерть Ивана III', ar: 'وفاة إيفان الثالث', zh: '伊凡三世逝世' }, epochId: 'muscovite-state' },
  { id: '1533-ivan4-three', year: 1533, title: { en: 'Ivan IV inherits the throne aged three', ru: 'Иван IV наследует престол в три года', ar: 'إيفان الرابع يرث العرش في الثالثة من عمره', zh: '三岁的伊凡四世继承王位' }, epochId: 'muscovite-state' },
  { id: '1547-coronation', year: 1547, title: { en: 'Coronation of Ivan IV as Tsar', ru: 'Венчание Ивана IV на царство', ar: 'تتويج إيفان الرابع قيصرًا', zh: '伊凡四世加冕为沙皇' }, epochId: 'muscovite-state' },
  { id: '1550-sudebnik-ivan4', year: 1550, title: { en: 'Sudebnik of Ivan IV', ru: 'Судебник Ивана IV', ar: 'سوديبنيك إيفان الرابع', zh: '伊凡四世《法律汇典》' }, epochId: 'muscovite-state' },
  { id: '1552-kazan', year: 1552, title: { en: 'Conquest of Kazan', ru: 'Взятие Казани', ar: 'فتح قازان', zh: '攻占喀山' }, epochId: 'muscovite-state' },
  { id: '1556-astrakhan', year: 1556, title: { en: 'Astrakhan annexed', ru: 'Присоединение Астрахани', ar: 'ضمّ أستراخان', zh: '阿斯特拉罕被并入' }, epochId: 'muscovite-state' },
  { id: '1565-oprichnina', year: 1565, title: { en: 'Oprichnina established', ru: 'Учреждение опричнины', ar: 'إنشاء الأوبريتشنينا', zh: '特辖区建立' }, epochId: 'muscovite-state' },
  { id: '1581-yermak-cross', year: 1581, title: { en: "Yermak's Cossacks cross the Urals", ru: 'Начало похода Ермака в Сибирь', ar: 'بدء حملة يرماك إلى سيبيريا', zh: '叶尔马克哥萨克翻越乌拉尔' }, epochId: 'muscovite-state' },
  { id: '1584-grozny-death', year: 1584, title: { en: 'Death of Ivan the Terrible', ru: 'Смерть Ивана Грозного', ar: 'وفاة إيفان الرهيب', zh: '伊凡雷帝逝世' }, epochId: 'muscovite-state' },
  { id: '1589-patriarchate', year: 1589, title: { en: 'Patriarchate of Moscow established', ru: 'Учреждение патриаршества в Москве', ar: 'إنشاء بطريركية موسكو', zh: '莫斯科牧首区设立' }, epochId: 'muscovite-state' },

  // XVII век
  { id: '1605-falsedmitry', year: 1605, title: { en: 'False Dmitry I enters Moscow', ru: 'Лжедмитрий I в Москве', ar: 'دميتري الكاذب الأول يدخل موسكو', zh: '伪德米特里一世入主莫斯科' }, epochId: 'time-of-troubles' },
  { id: '1610-poles-moscow', year: 1610, title: { en: 'Polish troops occupy Moscow', ru: 'Польские войска занимают Москву', ar: 'القوات البولندية تحتلّ موسكو', zh: '波兰军队占领莫斯科' }, epochId: 'time-of-troubles' },
  { id: '1612-minin-pozharsky', year: 1612, title: { en: 'Minin and Pozharsky liberate Moscow', ru: 'Минин и Пожарский освобождают Москву', ar: 'مينين وبوجارسكي يحرّران موسكو', zh: '米宁与波扎尔斯基解放莫斯科' }, epochId: 'time-of-troubles' },
  { id: '1613-mikhail', year: 1613, title: { en: 'Mikhail Romanov elected tsar', ru: 'Избрание Михаила Романова на царство', ar: 'انتخاب ميخائيل رومانوف قيصرًا', zh: '米哈伊尔·罗曼诺夫被选为沙皇' }, epochId: 'time-of-troubles' },
  { id: '1649-ulozhenie', year: 1649, title: { en: "Sobornoye Ulozhenie law code", ru: 'Соборное уложение', ar: 'مدوّنة قانون «سوبورنويه»', zh: '《会议法典》颁布' }, epochId: 'time-of-troubles' },
  { id: '1654-pereyaslav', year: 1654, title: { en: 'Pereyaslav Council — Ukraine joins Russia', ru: 'Переяславская рада — Украина с Россией', ar: 'مجلس بيرياسلاف — أوكرانيا تنضم إلى روسيا', zh: '佩列亚斯拉夫会议——乌克兰加入俄罗斯' }, epochId: 'time-of-troubles' },
  { id: '1666-raskol', year: 1666, title: { en: 'Great Schism of the Russian Church', ru: 'Церковный раскол', ar: 'الانشقاق الكبير في الكنيسة الروسية', zh: '俄罗斯教会大分裂' }, epochId: 'time-of-troubles' },
  { id: '1670-razin', year: 1670, title: { en: "Stepan Razin's revolt", ru: 'Восстание Степана Разина', ar: 'انتفاضة ستيبان رازين', zh: '斯捷潘·拉辛起义' }, epochId: 'time-of-troubles' },
  { id: '1682-streltsy-uprising', year: 1682, title: { en: 'Streltsy uprising; Peter I co-tsar', ru: 'Стрелецкий бунт; Пётр I — соправитель', ar: 'تمرّد الستريلتسي؛ بطرس الأول قيصر مشارك', zh: '射击军兵变；彼得一世成为共治沙皇' }, epochId: 'time-of-troubles' },
  { id: '1689-peter-rule', year: 1689, title: { en: 'Peter I takes sole power', ru: 'Пётр I приходит к единовластию', ar: 'بطرس الأول يستحوذ على السلطة منفردًا', zh: '彼得一世独揽大权' }, epochId: 'peter-the-great' },

  // XVIII век
  { id: '1700-northern-war', year: 1700, title: { en: 'Great Northern War begins', ru: 'Начало Северной войны', ar: 'بدء حرب الشمال الكبرى', zh: '大北方战争开始' }, epochId: 'peter-the-great' },
  { id: '1703-petersburg', year: 1703, title: { en: 'Saint Petersburg founded', ru: 'Основание Санкт-Петербурга', ar: 'تأسيس سانت بطرسبرغ', zh: '圣彼得堡建城' }, epochId: 'peter-the-great' },
  { id: '1709-poltava', year: 1709, title: { en: 'Battle of Poltava', ru: 'Полтавская битва', ar: 'معركة بولتافا', zh: '波尔塔瓦战役' }, epochId: 'peter-the-great' },
  { id: '1721-empire', year: 1721, title: { en: 'Russian Empire proclaimed', ru: 'Провозглашение Российской империи', ar: 'إعلان الإمبراطورية الروسية', zh: '俄罗斯帝国宣告成立' }, epochId: 'peter-the-great' },
  { id: '1725-peter-death', year: 1725, title: { en: 'Death of Peter the Great', ru: 'Смерть Петра Великого', ar: 'وفاة بطرس الأكبر', zh: '彼得大帝逝世' }, epochId: 'peter-the-great' },
  { id: '1741-elizabeth', year: 1741, title: { en: 'Elizabeth ascends the throne', ru: 'Восшествие Елизаветы Петровны', ar: 'اعتلاء إليزابيتا العرش', zh: '伊丽莎白登基' }, epochId: 'catherine-great' },
  { id: '1762-catherine2', year: 1762, title: { en: 'Catherine II takes the throne', ru: 'Воцарение Екатерины II', ar: 'تولّي كاترين الثانية العرش', zh: '叶卡捷琳娜二世登基' }, epochId: 'catherine-great' },
  { id: '1773-pugachev', year: 1773, title: { en: "Pugachev's rebellion begins", ru: 'Начало восстания Пугачёва', ar: 'بدء انتفاضة بوغاتشيف', zh: '普加乔夫起义爆发' }, epochId: 'catherine-great' },
  { id: '1783-crimea', year: 1783, title: { en: 'Annexation of Crimea', ru: 'Присоединение Крыма', ar: 'ضمّ شبه جزيرة القرم', zh: '克里米亚被并入' }, epochId: 'catherine-great' },
  { id: '1796-catherine-death', year: 1796, title: { en: 'Death of Catherine II', ru: 'Смерть Екатерины II', ar: 'وفاة كاترين الثانية', zh: '叶卡捷琳娜二世逝世' }, epochId: 'catherine-great' },

  // XIX век
  { id: '1801-alexander1', year: 1801, title: { en: 'Alexander I ascends the throne', ru: 'Воцарение Александра I', ar: 'اعتلاء ألكسندر الأول العرش', zh: '亚历山大一世登基' }, epochId: 'napoleon' },
  { id: '1807-tilsit', year: 1807, title: { en: 'Treaty of Tilsit', ru: 'Тильзитский мир', ar: 'معاهدة تيلسيت', zh: '提尔西特和约' }, epochId: 'napoleon' },
  { id: '1812-borodino', year: 1812, title: { en: 'Battle of Borodino', ru: 'Бородинская битва', ar: 'معركة بورودينو', zh: '博罗季诺战役' }, epochId: 'napoleon' },
  { id: '1814-paris', year: 1814, title: { en: 'Russian troops enter Paris', ru: 'Русские войска входят в Париж', ar: 'القوات الروسية تدخل باريس', zh: '俄军进入巴黎' }, epochId: 'napoleon' },
  { id: '1825-decembrists', year: 1825, title: { en: 'Decembrist uprising', ru: 'Восстание декабристов', ar: 'انتفاضة الديسمبريين', zh: '十二月党人起义' }, epochId: 'napoleon' },
  { id: '1853-crimean-war', year: 1853, title: { en: 'Crimean War begins', ru: 'Начало Крымской войны', ar: 'بدء حرب القرم', zh: '克里米亚战争爆发' }, epochId: 'great-reforms' },
  { id: '1861-emancipation', year: 1861, title: { en: 'Abolition of serfdom', ru: 'Отмена крепостного права', ar: 'إلغاء القنانة', zh: '废除农奴制' }, epochId: 'great-reforms' },
  { id: '1864-zemstvo', year: 1864, title: { en: 'Zemstvo and judicial reforms', ru: 'Земская и судебная реформы', ar: 'إصلاح الزيمستفو والقضاء', zh: '地方自治与司法改革' }, epochId: 'great-reforms' },
  { id: '1881-alexander2-death', year: 1881, title: { en: 'Assassination of Alexander II', ru: 'Убийство Александра II', ar: 'اغتيال ألكسندر الثاني', zh: '亚历山大二世遇刺' }, epochId: 'great-reforms' },
  { id: '1891-transsib', year: 1891, title: { en: 'Trans-Siberian Railway begun', ru: 'Начало строительства Транссиба', ar: 'بدء بناء سكة حديد سيبيريا العابرة', zh: '西伯利亚大铁路开工' }, epochId: 'great-reforms' },
  { id: '1894-nicholas2', year: 1894, title: { en: 'Nicholas II ascends the throne', ru: 'Воцарение Николая II', ar: 'اعتلاء نيقولا الثاني العرش', zh: '尼古拉二世登基' }, epochId: 'late-empire' },

  // XX век
  { id: '1904-russojapanese', year: 1904, title: { en: 'Russo-Japanese War begins', ru: 'Начало Русско-японской войны', ar: 'بدء الحرب الروسية-اليابانية', zh: '日俄战争爆发' }, epochId: 'late-empire' },
  { id: '1905-bloody-sunday', year: 1905, title: { en: 'Bloody Sunday', ru: 'Кровавое воскресенье', ar: 'الأحد الدامي', zh: '血腥星期日' }, epochId: 'late-empire' },
  { id: '1906-duma', year: 1906, title: { en: 'First State Duma convenes', ru: 'Открытие Первой Государственной думы', ar: 'انعقاد دوما الدولة الأولى', zh: '第一届国家杜马召开' }, epochId: 'late-empire' },
  { id: '1914-ww1', year: 1914, title: { en: 'Russia enters World War I', ru: 'Россия вступает в Первую мировую', ar: 'روسيا تدخل الحرب العالمية الأولى', zh: '俄罗斯加入第一次世界大战' }, epochId: 'late-empire' },
  { id: '1917-feb', year: 1917, title: { en: 'February Revolution', ru: 'Февральская революция', ar: 'ثورة فبراير', zh: '二月革命' }, epochId: 'late-empire' },
  { id: '1917-oct', year: 1917, title: { en: 'October Revolution', ru: 'Октябрьская революция', ar: 'ثورة أكتوبر', zh: '十月革命' }, epochId: 'late-empire' },
  { id: '1918-romanovs', year: 1918, title: { en: 'Execution of the Romanov family', ru: 'Расстрел царской семьи', ar: 'إعدام عائلة رومانوف', zh: '罗曼诺夫家族被处决' }, epochId: 'civil-war' },
  { id: '1922-ussr-founded', year: 1922, title: { en: 'USSR founded', ru: 'Образование СССР', ar: 'تأسيس الاتحاد السوفيتي', zh: '苏联成立' }, epochId: 'civil-war' },
  { id: '1924-lenin-death', year: 1924, title: { en: 'Death of Lenin', ru: 'Смерть Ленина', ar: 'وفاة لينين', zh: '列宁逝世' }, epochId: 'civil-war' },
  { id: '1929-collectivization', year: 1929, title: { en: 'Collectivisation begins', ru: 'Начало коллективизации', ar: 'بدء التجميع الزراعي', zh: '集体化开始' }, epochId: 'stalins-ussr' },
  { id: '1937-terror', year: 1937, title: { en: 'Height of the Great Terror', ru: 'Пик Большого террора', ar: 'ذروة الإرهاب الكبير', zh: '大恐怖的高峰' }, epochId: 'stalins-ussr' },
  { id: '1939-molotov', year: 1939, title: { en: 'Molotov–Ribbentrop Pact', ru: 'Пакт Молотова–Риббентропа', ar: 'حلف مولوتوف-ريبنتروب', zh: '《苏德互不侵犯条约》签订' }, epochId: 'stalins-ussr' },
  { id: '1941-barbarossa', year: 1941, title: { en: 'Operation Barbarossa', ru: 'Операция «Барбаросса»', ar: 'عملية بربروسا', zh: '巴巴罗萨行动' }, epochId: 'great-patriotic-war' },
  { id: '1942-stalingrad', year: 1942, title: { en: 'Battle of Stalingrad begins', ru: 'Начало Сталинградской битвы', ar: 'بدء معركة ستالينغراد', zh: '斯大林格勒战役开始' }, epochId: 'great-patriotic-war' },
  { id: '1943-kursk', year: 1943, title: { en: 'Battle of Kursk', ru: 'Курская битва', ar: 'معركة كورسك', zh: '库尔斯克战役' }, epochId: 'great-patriotic-war' },
  { id: '1944-leningrad-lifted', year: 1944, title: { en: 'Leningrad blockade fully lifted', ru: 'Полное снятие блокады Ленинграда', ar: 'الرفع التام لحصار لينينغراد', zh: '列宁格勒封锁完全解除' }, epochId: 'great-patriotic-war' },
  { id: '1945-victory', year: 1945, title: { en: 'Victory Day', ru: 'День Победы', ar: 'يوم النصر', zh: '胜利日' }, epochId: 'great-patriotic-war' },
  { id: '1953-stalin-death', year: 1953, title: { en: 'Death of Stalin', ru: 'Смерть Сталина', ar: 'وفاة ستالين', zh: '斯大林逝世' }, epochId: 'cold-war' },
  { id: '1956-20congress', year: 1956, title: { en: '20th Party Congress — secret speech', ru: 'XX съезд КПСС — «секретный доклад»', ar: 'المؤتمر العشرون للحزب — «الخطاب السري»', zh: '苏共二十大——「秘密报告」' }, epochId: 'cold-war' },
  { id: '1957-sputnik', year: 1957, title: { en: 'Sputnik 1 launched', ru: 'Запуск «Спутника-1»', ar: 'إطلاق «سبوتنيك-1»', zh: '斯普特尼克1号发射' }, epochId: 'cold-war' },
  { id: '1961-gagarin', year: 1961, title: { en: "Gagarin's spaceflight", ru: 'Полёт Гагарина', ar: 'رحلة غاغارين الفضائية', zh: '加加林飞向太空' }, epochId: 'cold-war' },
  { id: '1962-cuban', year: 1962, title: { en: 'Cuban Missile Crisis', ru: 'Карибский кризис', ar: 'أزمة الصواريخ الكوبية', zh: '古巴导弹危机' }, epochId: 'cold-war' },
  { id: '1979-afghan', year: 1979, title: { en: 'Soviet invasion of Afghanistan', ru: 'Ввод войск в Афганистан', ar: 'الغزو السوفيتي لأفغانستان', zh: '苏联入侵阿富汗' }, epochId: 'cold-war' },
  { id: '1985-perestroika', year: 1985, title: { en: 'Perestroika begins', ru: 'Начало перестройки', ar: 'بدء البيريسترويكا', zh: '改革重组开始' }, epochId: 'perestroika' },
  { id: '1986-chernobyl', year: 1986, title: { en: 'Chernobyl disaster', ru: 'Чернобыльская катастрофа', ar: 'كارثة تشيرنوبيل', zh: '切尔诺贝利灾难' }, epochId: 'perestroika' },
  { id: '1989-afghan-withdrawal', year: 1989, title: { en: 'Soviet withdrawal from Afghanistan', ru: 'Вывод войск из Афганистана', ar: 'الانسحاب السوفيتي من أفغانستان', zh: '苏联从阿富汗撤军' }, epochId: 'perestroika' },
  { id: '1991-ussr-collapse', year: 1991, title: { en: 'August coup; dissolution of the USSR', ru: 'Августовский путч; распад СССР', ar: 'انقلاب أغسطس وانحلال الاتحاد السوفيتي', zh: '八月政变；苏联解体' }, epochId: 'perestroika' },
];

// Compute century for an event year. Year 862 → 9th century, 1380 → 14th, etc.
// We use the AD convention: 1-100 = 1st century, 101-200 = 2nd century, …
export function centuryOf(year: number): number {
  return Math.ceil(year / 100);
}

// Pre-bucket the pool by century once at module load.
// Centuries with fewer than 2 events are dropped — no valid pair can be drawn from them.
export const gameEventsByCentury: Map<number, GameEvent[]> = (() => {
  const m = new Map<number, GameEvent[]>();
  for (const ev of gameEvents) {
    const c = centuryOf(ev.year);
    if (!m.has(c)) m.set(c, []);
    m.get(c)!.push(ev);
  }
  for (const [c, list] of m) {
    if (list.length < 2) m.delete(c);
  }
  return m;
})();

export const gameCenturies: number[] = [...gameEventsByCentury.keys()].sort((a, b) => a - b);

/**
 * Returns the per-event Wikipedia image URL when fetch-game-images.mjs
 * has produced one; otherwise `null`. GamePage falls back to the epoch
 * cover image in that case so cards never end up image-less.
 */
export function imageForEvent(ev: GameEvent): string | null {
  const map = gameImages as Record<string, string | null>;
  return map[ev.id] ?? null;
}
