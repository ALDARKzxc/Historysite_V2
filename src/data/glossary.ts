import type { LocalizedText } from './epochs';

export interface Term {
  term: string; // the Russian word (kept in Russian for language learners)
  pronunciation: string;
  meaning: LocalizedText;
}

// Reusable pool of key terms. Topics reference these by id (see topicTerms),
// so a term is written once and shared — easy to extend as full articles arrive.
export const GLOSSARY: Record<string, Term> = {
  knyaz: { term: 'Князь', pronunciation: 'KNYAZ', meaning: { en: 'A prince — ruler of a principality in old Rus.', ru: 'Правитель княжества в Древней Руси.', ar: 'أمير — حاكم إمارة في روس القديمة.', zh: '王公——古罗斯公国的统治者。' } },
  veche: { term: 'Вече', pronunciation: 'VYE-che', meaning: { en: 'A popular assembly of free townsmen in old Rus.', ru: 'Народное собрание свободных горожан в Древней Руси.', ar: 'مجلس شعبي لأحرار المدينة في روس القديمة.', zh: '古罗斯城市自由民的民众大会。' } },
  druzhina: { term: 'Дружина', pronunciation: 'dru-ZHI-na', meaning: { en: "A prince's armed retinue of professional warriors.", ru: 'Вооружённая дружина — войско при князе.', ar: 'حاشية الأمير المسلّحة من المحاربين المحترفين.', zh: '王公的武装亲兵队。' } },
  varangians: { term: 'Варяги', pronunciation: 'va-RYA-gi', meaning: { en: 'Norse warriors and traders who came to the Rus lands.', ru: 'Норманнские воины и купцы, пришедшие на земли Руси.', ar: 'محاربون وتجار إسكندنافيون قدِموا إلى أراضي روس.', zh: '来到罗斯土地的北欧武士与商人。' } },
  letopis: { term: 'Летопись', pronunciation: 'LYE-to-pis', meaning: { en: 'A chronicle — a year-by-year record of events.', ru: 'Погодная запись событий — хроника.', ar: 'سجل تاريخي يدوّن الأحداث سنة بسنة.', zh: '编年史——逐年记录事件。' } },
  kreshchenie: { term: 'Крещение', pronunciation: 'kre-SHCHE-ni-ye', meaning: { en: 'Baptism; the adoption of Christianity.', ru: 'Принятие христианства; обряд крещения.', ar: 'التعميد؛ اعتناق المسيحية.', zh: '受洗；皈依基督教。' } },
  mitropolit: { term: 'Митрополит', pronunciation: 'mi-tro-po-LIT', meaning: { en: 'The senior bishop heading the Church in Rus.', ru: 'Старший епископ, глава Церкви на Руси.', ar: 'كبير الأساقفة على رأس الكنيسة في روس.', zh: '主持罗斯教会的都主教。' } },
  boyar: { term: 'Боярин', pronunciation: 'bo-YA-rin', meaning: { en: 'A member of the old high aristocracy.', ru: 'Представитель старой знатной аристократии.', ar: 'أحد كبار النبلاء القدامى.', zh: '旧时高级贵族成员。' } },
  khan: { term: 'Хан', pronunciation: 'KHAN', meaning: { en: 'A Mongol or Turkic sovereign ruler.', ru: 'Монгольский или тюркский верховный правитель.', ar: 'حاكم مغولي أو تركي أعلى.', zh: '蒙古或突厥的最高统治者。' } },
  orda: { term: 'Орда', pronunciation: 'or-DA', meaning: { en: 'The Horde — the Mongol state and army.', ru: 'Орда — монгольское государство и войско.', ar: 'القبيلة — دولة المغول وجيشهم.', zh: '汗国——蒙古的国家与军队。' } },
  yarlyk: { term: 'Ярлык', pronunciation: 'yar-LYK', meaning: { en: "The khan's patent granting a prince the right to rule.", ru: 'Грамота хана на право княжить.', ar: 'مرسوم الخان يمنح الأمير حق الحكم.', zh: '可汗颁发、授予王公统治权的诏书。' } },
  igo: { term: 'Иго', pronunciation: 'I-go', meaning: { en: 'The "yoke" — Mongol domination over the Rus lands.', ru: 'Иго — господство монголов над русскими землями.', ar: 'النير — هيمنة المغول على أراضي روس.', zh: '「枷锁」——蒙古对罗斯的统治。' } },
  dan: { term: 'Дань', pronunciation: 'DAN', meaning: { en: 'Tribute — payment exacted by the Horde.', ru: 'Дань — выплаты, которые требовала Орда.', ar: 'الجزية — مدفوعات تفرضها القبيلة.', zh: '贡赋——汗国索取的款项。' } },
  tsar: { term: 'Царь', pronunciation: 'TSAR', meaning: { en: 'The sovereign of Russia (from "Caesar").', ru: 'Государь России (от слова «цезарь»).', ar: 'حاكم روسيا (من كلمة «قيصر»).', zh: '俄罗斯君主（源自「凯撒」）。' } },
  oprichnina: { term: 'Опричнина', pronunciation: 'op-RICH-ni-na', meaning: { en: "Ivan IV's separate realm and reign of terror.", ru: 'Особый удел Ивана IV и эпоха террора.', ar: 'إقطاع إيفان الرابع المنفصل وعهد الرعب.', zh: '伊凡四世的特辖领地与恐怖统治。' } },
  senat: { term: 'Сенат', pronunciation: 'se-NAT', meaning: { en: "Peter I's highest governing body.", ru: 'Высший орган управления при Петре I.', ar: 'أعلى هيئة حكم في عهد بطرس الأول.', zh: '彼得一世设立的最高治理机构。' } },
  smuta: { term: 'Смута', pronunciation: 'SMU-ta', meaning: { en: 'The Time of Troubles — crisis and anarchy.', ru: 'Смутное время — кризис и безвластие.', ar: 'زمن الاضطرابات — أزمة وفوضى.', zh: '混乱时期——危机与无政府状态。' } },
  samozvanets: { term: 'Самозванец', pronunciation: 'sa-mo-ZVA-nets', meaning: { en: 'A pretender claiming to be a rightful ruler.', ru: 'Человек, выдающий себя за законного правителя.', ar: 'مدّعٍ يزعم أنه الحاكم الشرعي.', zh: '冒充合法统治者的人。' } },
  opolchenie: { term: 'Ополчение', pronunciation: 'o-pol-CHE-ni-ye', meaning: { en: "A people's volunteer army.", ru: 'Народное добровольческое войско.', ar: 'جيش شعبي من المتطوعين.', zh: '民众自愿组成的民兵。' } },
  imperator: { term: 'Император', pronunciation: 'im-pe-RA-tor', meaning: { en: 'Emperor — title taken by Peter I in 1721.', ru: 'Император — титул, принятый Петром I в 1721.', ar: 'إمبراطور — لقب اتخذه بطرس الأول عام 1721.', zh: '皇帝——彼得一世于1721年采用的称号。' } },
  reforma: { term: 'Реформа', pronunciation: 're-FOR-ma', meaning: { en: 'A reform — a planned change of the state or society.', ru: 'Реформа — преобразование государства или общества.', ar: 'إصلاح — تغيير مخطط للدولة أو المجتمع.', zh: '改革——对国家或社会的有计划变革。' } },
  krepostnoe: { term: 'Крепостное право', pronunciation: 'kre-post-NO-ye PRA-vo', meaning: { en: 'Serfdom — peasants bound to the land and their lord.', ru: 'Крепостничество — прикрепление крестьян к земле и господину.', ar: 'القنانة — تقييد الفلاحين بالأرض وسيدهم.', zh: '农奴制——农民被束缚于土地与领主。' } },
  zemstvo: { term: 'Земство', pronunciation: 'ZEM-stvo', meaning: { en: 'Elected local self-government (from 1864).', ru: 'Выборное местное самоуправление (с 1864).', ar: 'حكم محلي منتخب (منذ 1864).', zh: '民选的地方自治机构（1864年起）。' } },
  duma: { term: 'Дума', pronunciation: 'DU-ma', meaning: { en: 'A council or elected assembly (parliament).', ru: 'Совет или выборное собрание (парламент).', ar: 'مجلس أو جمعية منتخبة (برلمان).', zh: '议事会或民选议会（杜马）。' } },
  revolyutsiya: { term: 'Революция', pronunciation: 're-vo-LYU-tsi-ya', meaning: { en: 'Revolution — a radical change of power.', ru: 'Революция — коренная смена власти.', ar: 'ثورة — تغيير جذري للسلطة.', zh: '革命——政权的根本性更替。' } },
  sovety: { term: 'Советы', pronunciation: 'so-VYE-ty', meaning: { en: 'Soviets — councils of workers and soldiers.', ru: 'Советы — органы рабочих и солдат.', ar: 'السوفييتات — مجالس العمال والجنود.', zh: '苏维埃——工人和士兵的委员会。' } },
  bolsheviki: { term: 'Большевики', pronunciation: 'bol-she-vi-KI', meaning: { en: "Lenin's radical Marxist party.", ru: 'Радикальная марксистская партия Ленина.', ar: 'حزب لينين الماركسي الراديكالي.', zh: '列宁领导的激进马克思主义政党。' } },
  kollektivizatsiya: { term: 'Коллективизация', pronunciation: 'kol-lek-ti-vi-ZA-tsi-ya', meaning: { en: 'Forced merging of farms into collective kolkhozes.', ru: 'Принудительное объединение хозяйств в колхозы.', ar: 'الدمج القسري للمزارع في كولخوزات جماعية.', zh: '强制将农场并入集体农庄。' } },
  pyatiletka: { term: 'Пятилетка', pronunciation: 'pya-ti-LET-ka', meaning: { en: 'A Five-Year economic plan of the USSR.', ru: 'Пятилетний план развития экономики СССР.', ar: 'خطة اقتصادية خمسية للاتحاد السوفيتي.', zh: '苏联的五年经济计划。' } },
  repressii: { term: 'Репрессии', pronunciation: 're-PRES-si-i', meaning: { en: 'Political repressions — mass purges and persecution.', ru: 'Политические репрессии — массовые чистки и преследования.', ar: 'القمع السياسي — تطهيرات واضطهاد جماعي.', zh: '政治镇压——大规模清洗与迫害。' } },
  blokada: { term: 'Блокада', pronunciation: 'blo-KA-da', meaning: { en: 'A blockade or siege cutting off a city.', ru: 'Блокада — окружение и осада города.', ar: 'حصار يعزل المدينة.', zh: '封锁或围困一座城市。' } },
  pobeda: { term: 'Победа', pronunciation: 'po-BE-da', meaning: { en: 'Victory.', ru: 'Победа.', ar: 'النصر.', zh: '胜利。' } },
  kapitulyatsiya: { term: 'Капитуляция', pronunciation: 'ka-pi-tu-LYA-tsi-ya', meaning: { en: 'Surrender — laying down arms.', ru: 'Капитуляция — сдача, прекращение сопротивления.', ar: 'الاستسلام — إلقاء السلاح.', zh: '投降——放下武器。' } },
  kosmos: { term: 'Космос', pronunciation: 'KOS-mos', meaning: { en: 'Outer space.', ru: 'Космическое пространство.', ar: 'الفضاء الخارجي.', zh: '外层空间。' } },
  kosmonavt: { term: 'Космонавт', pronunciation: 'kos-mo-NAVT', meaning: { en: 'A cosmonaut — a space traveller.', ru: 'Космонавт — покоритель космоса.', ar: 'رائد فضاء.', zh: '宇航员——太空旅行者。' } },
  gonka: { term: 'Гонка вооружений', pronunciation: 'GON-ka vo-o-ru-ZHE-niy', meaning: { en: 'The arms race between the superpowers.', ru: 'Гонка вооружений между сверхдержавами.', ar: 'سباق التسلّح بين القوى العظمى.', zh: '超级大国之间的军备竞赛。' } },
  perestroika: { term: 'Перестройка', pronunciation: 'pe-re-STROY-ka', meaning: { en: "Gorbachev's policy of restructuring the USSR.", ru: 'Политика перестройки СССР при Горбачёве.', ar: 'سياسة إعادة هيكلة الاتحاد السوفيتي لدى غورباتشوف.', zh: '戈尔巴乔夫重建苏联的政策。' } },
  glasnost: { term: 'Гласность', pronunciation: 'GLAS-nost', meaning: { en: 'Openness — freer speech and press under Gorbachev.', ru: 'Гласность — свобода слова и печати при Горбачёве.', ar: 'العلنية — حرية أكبر للتعبير والصحافة.', zh: '公开性——戈尔巴乔夫时期更自由的言论与新闻。' } },
  privatizatsiya: { term: 'Приватизация', pronunciation: 'pri-va-ti-ZA-tsi-ya', meaning: { en: 'Transfer of state property into private hands.', ru: 'Передача государственной собственности в частные руки.', ar: 'نقل ملكية الدولة إلى أيدٍ خاصة.', zh: '将国有财产转入私人手中。' } },
  konstitutsiya: { term: 'Конституция', pronunciation: 'kon-sti-TU-tsi-ya', meaning: { en: 'The constitution — the basic law of the state.', ru: 'Конституция — основной закон государства.', ar: 'الدستور — القانون الأساسي للدولة.', zh: '宪法——国家的根本大法。' } },
  oligarkh: { term: 'Олигарх', pronunciation: 'o-li-GARKH', meaning: { en: 'An oligarch — a tycoon with political influence.', ru: 'Олигарх — магнат с политическим влиянием.', ar: 'أوليغارشي — قطب ذو نفوذ سياسي.', zh: '寡头——具有政治影响力的大亨。' } },
};

export const topicTerms: Record<string, string[]> = {
  varangians: ['varangians', 'knyaz', 'druzhina'],
  rurik: ['knyaz', 'varangians', 'druzhina'],
  'oleg-prophetic': ['knyaz', 'druzhina', 'dan'],
  'kievan-rus': ['knyaz', 'veche', 'letopis'],
  'baptism-rus': ['kreshchenie', 'mitropolit', 'letopis'],
  'yaroslav-wise': ['letopis', 'knyaz', 'mitropolit'],

  'genghis-khan': ['khan', 'orda', 'dan'],
  'mongol-invasion-rus': ['orda', 'khan', 'dan'],
  'golden-horde': ['orda', 'yarlyk', 'igo', 'dan'],
  'alexander-nevsky': ['knyaz', 'yarlyk', 'druzhina'],

  'ivan-kalita': ['yarlyk', 'dan', 'knyaz'],
  kulikovo: ['orda', 'igo', 'druzhina'],
  'ivan-iii': ['igo', 'tsar', 'knyaz'],

  'ivan-terrible': ['tsar', 'oprichnina', 'boyar'],
  oprichnina: ['oprichnina', 'boyar', 'tsar'],
  'siberia-yermak': ['tsar', 'druzhina'],

  'false-dmitry': ['smuta', 'samozvanets', 'tsar'],
  'minin-pozharsky': ['smuta', 'opolchenie', 'tsar'],

  'peter-reforms': ['imperator', 'reforma', 'senat'],
  'saint-petersburg': ['imperator', 'reforma'],
  'battle-poltava': ['imperator', 'pobeda'],
  'northern-war': ['imperator', 'reforma'],

  'enlightened-absolutism': ['imperator', 'reforma', 'boyar'],
  pugachev: ['krepostnoe', 'opolchenie', 'imperator'],
  'crimea-annexation': ['imperator', 'reforma'],

  'patriotic-war': ['opolchenie', 'imperator', 'pobeda'],
  borodino: ['opolchenie', 'imperator'],
  decembrists: ['revolyutsiya', 'reforma', 'imperator'],

  'abolition-serfdom': ['krepostnoe', 'reforma', 'zemstvo'],
  'trans-siberian': ['reforma', 'imperator'],

  'nicholas-ii': ['imperator', 'revolyutsiya', 'duma'],
  'bloody-sunday': ['revolyutsiya', 'duma'],
  'october-revolution': ['revolyutsiya', 'bolsheviki', 'sovety'],
  rasputin: ['imperator', 'tsar'],

  'civil-war-russia': ['revolyutsiya', 'bolsheviki', 'sovety'],
  'romanov-execution': ['revolyutsiya', 'bolsheviki', 'tsar'],
  'ussr-formation': ['sovety', 'bolsheviki', 'revolyutsiya'],

  collectivization: ['kollektivizatsiya', 'pyatiletka', 'repressii'],
  'great-terror': ['repressii', 'sovety'],
  gulag: ['repressii', 'kollektivizatsiya'],

  'operation-barbarossa': ['blokada', 'pobeda', 'kapitulyatsiya'],
  'battle-stalingrad': ['pobeda', 'kapitulyatsiya', 'blokada'],
  'siege-leningrad': ['blokada', 'pobeda'],
  'victory-day': ['pobeda', 'kapitulyatsiya'],

  sputnik: ['kosmos', 'kosmonavt', 'gonka'],
  gagarin: ['kosmonavt', 'kosmos'],
  'cuban-crisis': ['gonka', 'sovety'],
  'khrushchev-thaw': ['repressii', 'reforma'],

  'perestroika-topic': ['perestroika', 'glasnost'],
  chernobyl: ['perestroika', 'glasnost'],
  'ussr-dissolution': ['perestroika', 'glasnost', 'konstitutsiya'],

  yeltsin: ['reforma', 'konstitutsiya', 'privatizatsiya'],
  'russia-1990s': ['privatizatsiya', 'oligarkh', 'reforma'],
};

export function getTopicTerms(topicId: string | undefined): Term[] {
  if (!topicId) return [];
  const ids = topicTerms[topicId] ?? [];
  return ids.map(id => GLOSSARY[id]).filter(Boolean);
}
