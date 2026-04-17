import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "ru" | "en" | "ar" | "zh";

export interface Translations {
  // Navigation
  nav_home: string;
  nav_timeline: string;
  nav_topics: string;
  nav_about: string;
  nav_login: string;
  nav_register: string;
  nav_profile: string;
  nav_logout: string;

  // Hero
  hero_title: string;
  hero_subtitle: string;
  hero_btn_start: string;
  hero_btn_timeline: string;

  // Epochs / Sections
  epoch_ancient: string;
  epoch_kievan: string;
  epoch_mongol: string;
  epoch_moscow: string;
  epoch_empire: string;
  epoch_revolution: string;
  epoch_ussr: string;
  epoch_modern: string;

  // Topics page
  topics_title: string;
  topics_subtitle: string;
  topics_search: string;
  topics_filter_all: string;
  topics_read_more: string;
  topics_articles: string;
  topics_tests: string;

  // Article page
  article_key_dates: string;
  article_key_figures: string;
  article_related: string;
  article_take_test: string;
  article_back: string;
  article_reading_time: string;
  article_min: string;
  article_russian_subtitle_hint: string;

  // Quiz / Tests
  quiz_title: string;
  quiz_start: string;
  quiz_next: string;
  quiz_finish: string;
  quiz_result: string;
  quiz_correct: string;
  quiz_wrong: string;
  quiz_score: string;
  quiz_try_again: string;

  // Progress / Gamification
  progress_xp: string;
  progress_level: string;
  progress_streak: string;
  progress_days: string;
  progress_achievements: string;
  progress_leaderboard: string;

  // Achievements
  achievement_first_step: string;
  achievement_first_step_desc: string;
  achievement_ancient_expert: string;
  achievement_ancient_expert_desc: string;
  achievement_history_master: string;
  achievement_history_master_desc: string;

  // Auth
  auth_email: string;
  auth_password: string;
  auth_name: string;
  auth_login_title: string;
  auth_register_title: string;
  auth_login_btn: string;
  auth_register_btn: string;
  auth_no_account: string;
  auth_has_account: string;
  auth_forgot_password: string;

  // About page
  about_title: string;
  about_subtitle: string;
  about_project_title: string;
  about_project_desc: string;
  about_team_title: string;
  about_university: string;
  about_group: string;
  about_mission_title: string;
  about_mission_desc: string;
  about_tech_title: string;

  // Timeline
  timeline_title: string;
  timeline_subtitle: string;
  timeline_explore: string;
  timeline_century: string;
  timeline_bce: string;
  timeline_ce: string;

  // General UI
  ui_loading: string;
  ui_error: string;
  ui_search: string;
  ui_close: string;
  ui_save: string;
  ui_cancel: string;
  ui_continue: string;
  ui_completed: string;
  ui_locked: string;
  ui_free: string;
  ui_premium: string;
  ui_share: string;
  ui_copied: string;
  ui_language: string;
  ui_dark_mode: string;
  ui_settings: string;
  ui_back_to_top: string;
  ui_show_more: string;
  ui_show_less: string;
  ui_all: string;
  ui_beginner: string;
  ui_intermediate: string;
  ui_advanced: string;
  ui_topics_count: string;
  ui_articles_count: string;

  // Footer
  footer_desc: string;
  footer_links: string;
  footer_privacy: string;
  footer_terms: string;
  footer_contact: string;
  footer_rights: string;

  // Language names
  lang_ru: string;
  lang_en: string;
  lang_ar: string;
  lang_zh: string;
}

const translations: Record<Language, Translations> = {
  ru: {
    nav_home: "Главная",
    nav_timeline: "Хронология",
    nav_topics: "Темы",
    nav_about: "О нас",
    nav_login: "Войти",
    nav_register: "Регистрация",
    nav_profile: "Профиль",
    nav_logout: "Выйти",

    hero_title: "История России",
    hero_subtitle:
      "Интерактивная платформа для изучения истории и культуры России. Погрузитесь в тысячелетнее наследие великой страны.",
    hero_btn_start: "Начать обучение",
    hero_btn_timeline: "Открыть хронологию",

    epoch_ancient: "Древняя Русь",
    epoch_kievan: "Киевская Русь",
    epoch_mongol: "Монгольское нашествие",
    epoch_moscow: "Московское государство",
    epoch_empire: "Российская империя",
    epoch_revolution: "Революция и гражданская война",
    epoch_ussr: "Советский Союз",
    epoch_modern: "Современная Россия",

    topics_title: "Все темы",
    topics_subtitle: "Более 220 тем по истории России",
    topics_search: "Поиск тем...",
    topics_filter_all: "Все эпохи",
    topics_read_more: "Читать статью",
    topics_articles: "статей",
    topics_tests: "тестов",

    article_key_dates: "Ключевые даты",
    article_key_figures: "Ключевые личности",
    article_related: "Связанные темы",
    article_take_test: "Пройти тест",
    article_back: "Назад к темам",
    article_reading_time: "Время чтения",
    article_min: "мин",
    article_russian_subtitle_hint: "Текст на русском языке",

    quiz_title: "Проверь знания",
    quiz_start: "Начать тест",
    quiz_next: "Следующий вопрос",
    quiz_finish: "Завершить",
    quiz_result: "Результат",
    quiz_correct: "Верно!",
    quiz_wrong: "Неверно",
    quiz_score: "Ваш результат",
    quiz_try_again: "Попробовать снова",

    progress_xp: "Опыт",
    progress_level: "Уровень",
    progress_streak: "Серия",
    progress_days: "дней",
    progress_achievements: "Достижения",
    progress_leaderboard: "Таблица лидеров",

    achievement_first_step: "Первый шаг",
    achievement_first_step_desc: "Прочитать первую статью",
    achievement_ancient_expert: "Знаток Руси",
    achievement_ancient_expert_desc: "Пройти эпоху Древней Руси",
    achievement_history_master: "Мастер истории",
    achievement_history_master_desc: "Пройти весь курс",

    auth_email: "Электронная почта",
    auth_password: "Пароль",
    auth_name: "Имя",
    auth_login_title: "Вход в аккаунт",
    auth_register_title: "Создать аккаунт",
    auth_login_btn: "Войти",
    auth_register_btn: "Зарегистрироваться",
    auth_no_account: "Нет аккаунта? Зарегистрируйтесь",
    auth_has_account: "Уже есть аккаунт? Войдите",
    auth_forgot_password: "Забыли пароль?",

    about_title: "О проекте",
    about_subtitle:
      "Образовательная платформа по истории России, созданная студентами МАДИ",
    about_project_title: "О платформе",
    about_project_desc:
      "Наша платформа создана для того, чтобы сделать изучение истории России доступным, интересным и интерактивным для иностранных студентов и всех, кто хочет глубже познакомиться с культурой и историей России.",
    about_team_title: "Команда",
    about_university: "МАДИ (Московский автомобильно-дорожный государственный технический университет)",
    about_group: "Группа",
    about_mission_title: "Наша миссия",
    about_mission_desc:
      "Мы стремимся создать лучший образовательный ресурс по истории России, сочетающий академическую достоверность с современными технологиями обучения.",
    about_tech_title: "Технологии",

    timeline_title: "Хронология истории России",
    timeline_subtitle: "От Древней Руси до современности",
    timeline_explore: "Изучить эпоху",
    timeline_century: "век",
    timeline_bce: "до н.э.",
    timeline_ce: "н.э.",

    ui_loading: "Загрузка...",
    ui_error: "Произошла ошибка",
    ui_search: "Поиск",
    ui_close: "Закрыть",
    ui_save: "Сохранить",
    ui_cancel: "Отмена",
    ui_continue: "Продолжить",
    ui_completed: "Завершено",
    ui_locked: "Заблокировано",
    ui_free: "Бесплатно",
    ui_premium: "Премиум",
    ui_share: "Поделиться",
    ui_copied: "Скопировано!",
    ui_language: "Язык",
    ui_dark_mode: "Тёмная тема",
    ui_settings: "Настройки",
    ui_back_to_top: "Наверх",
    ui_show_more: "Показать больше",
    ui_show_less: "Показать меньше",
    ui_all: "Все",
    ui_beginner: "Начинающий",
    ui_intermediate: "Средний",
    ui_advanced: "Продвинутый",
    ui_topics_count: "тем",
    ui_articles_count: "статей",

    footer_desc:
      "Образовательная платформа по истории России для иностранных студентов",
    footer_links: "Ссылки",
    footer_privacy: "Конфиденциальность",
    footer_terms: "Условия использования",
    footer_contact: "Контакты",
    footer_rights: "Все права защищены",

    lang_ru: "Русский",
    lang_en: "English",
    lang_ar: "العربية",
    lang_zh: "中文",
  },

  en: {
    nav_home: "Home",
    nav_timeline: "Timeline",
    nav_topics: "Topics",
    nav_about: "About",
    nav_login: "Sign In",
    nav_register: "Register",
    nav_profile: "Profile",
    nav_logout: "Sign Out",

    hero_title: "History of Russia",
    hero_subtitle:
      "An interactive platform for studying Russian history and culture. Immerse yourself in the thousand-year heritage of a great nation.",
    hero_btn_start: "Start Learning",
    hero_btn_timeline: "Explore Timeline",

    epoch_ancient: "Ancient Rus",
    epoch_kievan: "Kievan Rus",
    epoch_mongol: "Mongol Invasion",
    epoch_moscow: "Muscovite State",
    epoch_empire: "Russian Empire",
    epoch_revolution: "Revolution & Civil War",
    epoch_ussr: "Soviet Union",
    epoch_modern: "Modern Russia",

    topics_title: "All Topics",
    topics_subtitle: "Over 220 topics on Russian history",
    topics_search: "Search topics...",
    topics_filter_all: "All Epochs",
    topics_read_more: "Read Article",
    topics_articles: "articles",
    topics_tests: "tests",

    article_key_dates: "Key Dates",
    article_key_figures: "Key Figures",
    article_related: "Related Topics",
    article_take_test: "Take the Test",
    article_back: "Back to Topics",
    article_reading_time: "Reading time",
    article_min: "min",
    article_russian_subtitle_hint: "Text in Russian",

    quiz_title: "Test Your Knowledge",
    quiz_start: "Start Quiz",
    quiz_next: "Next Question",
    quiz_finish: "Finish",
    quiz_result: "Result",
    quiz_correct: "Correct!",
    quiz_wrong: "Incorrect",
    quiz_score: "Your Score",
    quiz_try_again: "Try Again",

    progress_xp: "Experience",
    progress_level: "Level",
    progress_streak: "Streak",
    progress_days: "days",
    progress_achievements: "Achievements",
    progress_leaderboard: "Leaderboard",

    achievement_first_step: "First Step",
    achievement_first_step_desc: "Read your first article",
    achievement_ancient_expert: "Rus Expert",
    achievement_ancient_expert_desc: "Complete the Ancient Rus epoch",
    achievement_history_master: "History Master",
    achievement_history_master_desc: "Complete the entire course",

    auth_email: "Email",
    auth_password: "Password",
    auth_name: "Name",
    auth_login_title: "Sign In",
    auth_register_title: "Create Account",
    auth_login_btn: "Sign In",
    auth_register_btn: "Register",
    auth_no_account: "No account? Register",
    auth_has_account: "Already have an account? Sign in",
    auth_forgot_password: "Forgot password?",

    about_title: "About the Project",
    about_subtitle:
      "An educational platform on Russian history, created by MADI students",
    about_project_title: "About the Platform",
    about_project_desc:
      "Our platform is designed to make studying Russian history accessible, engaging, and interactive for foreign students and anyone who wants to learn more about Russia's culture and history.",
    about_team_title: "Our Team",
    about_university:
      "MADI (Moscow Automobile and Road Construction State Technical University)",
    about_group: "Group",
    about_mission_title: "Our Mission",
    about_mission_desc:
      "We strive to create the best educational resource on Russian history, combining academic accuracy with modern learning technologies.",
    about_tech_title: "Technologies",

    timeline_title: "Timeline of Russian History",
    timeline_subtitle: "From Ancient Rus to the present day",
    timeline_explore: "Explore Epoch",
    timeline_century: "century",
    timeline_bce: "BCE",
    timeline_ce: "CE",

    ui_loading: "Loading...",
    ui_error: "An error occurred",
    ui_search: "Search",
    ui_close: "Close",
    ui_save: "Save",
    ui_cancel: "Cancel",
    ui_continue: "Continue",
    ui_completed: "Completed",
    ui_locked: "Locked",
    ui_free: "Free",
    ui_premium: "Premium",
    ui_share: "Share",
    ui_copied: "Copied!",
    ui_language: "Language",
    ui_dark_mode: "Dark Mode",
    ui_settings: "Settings",
    ui_back_to_top: "Back to top",
    ui_show_more: "Show more",
    ui_show_less: "Show less",
    ui_all: "All",
    ui_beginner: "Beginner",
    ui_intermediate: "Intermediate",
    ui_advanced: "Advanced",
    ui_topics_count: "topics",
    ui_articles_count: "articles",

    footer_desc:
      "An educational platform on Russian history for foreign students",
    footer_links: "Links",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use",
    footer_contact: "Contact",
    footer_rights: "All rights reserved",

    lang_ru: "Русский",
    lang_en: "English",
    lang_ar: "العربية",
    lang_zh: "中文",
  },

  ar: {
    nav_home: "الرئيسية",
    nav_timeline: "الجدول الزمني",
    nav_topics: "المواضيع",
    nav_about: "حول",
    nav_login: "تسجيل الدخول",
    nav_register: "التسجيل",
    nav_profile: "الملف الشخصي",
    nav_logout: "تسجيل الخروج",

    hero_title: "تاريخ روسيا",
    hero_subtitle:
      "منصة تفاعلية لدراسة تاريخ روسيا وثقافتها. انغمس في الإرث الألفي لأمة عظيمة.",
    hero_btn_start: "ابدأ التعلم",
    hero_btn_timeline: "استكشف الجدول الزمني",

    epoch_ancient: "روس القديمة",
    epoch_kievan: "روس كييف",
    epoch_mongol: "الغزو المغولي",
    epoch_moscow: "دولة موسكو",
    epoch_empire: "الإمبراطورية الروسية",
    epoch_revolution: "الثورة والحرب الأهلية",
    epoch_ussr: "الاتحاد السوفيتي",
    epoch_modern: "روسيا الحديثة",

    topics_title: "جميع المواضيع",
    topics_subtitle: "أكثر من 220 موضوع في تاريخ روسيا",
    topics_search: "البحث في المواضيع...",
    topics_filter_all: "جميع العصور",
    topics_read_more: "قراءة المقال",
    topics_articles: "مقالات",
    topics_tests: "اختبارات",

    article_key_dates: "التواريخ الرئيسية",
    article_key_figures: "الشخصيات الرئيسية",
    article_related: "مواضيع ذات صلة",
    article_take_test: "أداء الاختبار",
    article_back: "العودة إلى المواضيع",
    article_reading_time: "وقت القراءة",
    article_min: "دقيقة",
    article_russian_subtitle_hint: "النص باللغة الروسية",

    quiz_title: "اختبر معلوماتك",
    quiz_start: "ابدأ الاختبار",
    quiz_next: "السؤال التالي",
    quiz_finish: "إنهاء",
    quiz_result: "النتيجة",
    quiz_correct: "صحيح!",
    quiz_wrong: "خطأ",
    quiz_score: "نتيجتك",
    quiz_try_again: "حاول مرة أخرى",

    progress_xp: "الخبرة",
    progress_level: "المستوى",
    progress_streak: "السلسلة",
    progress_days: "أيام",
    progress_achievements: "الإنجازات",
    progress_leaderboard: "لوحة المتصدرين",

    achievement_first_step: "الخطوة الأولى",
    achievement_first_step_desc: "اقرأ مقالك الأول",
    achievement_ancient_expert: "خبير روسيا",
    achievement_ancient_expert_desc: "أكمل عصر روس القديمة",
    achievement_history_master: "سيد التاريخ",
    achievement_history_master_desc: "أكمل الدورة بأكملها",

    auth_email: "البريد الإلكتروني",
    auth_password: "كلمة المرور",
    auth_name: "الاسم",
    auth_login_title: "تسجيل الدخول",
    auth_register_title: "إنشاء حساب",
    auth_login_btn: "دخول",
    auth_register_btn: "تسجيل",
    auth_no_account: "ليس لديك حساب؟ سجّل",
    auth_has_account: "لديك حساب بالفعل؟ سجّل الدخول",
    auth_forgot_password: "نسيت كلمة المرور؟",

    about_title: "حول المشروع",
    about_subtitle: "منصة تعليمية لتاريخ روسيا، أنشأها طلاب MADI",
    about_project_title: "حول المنصة",
    about_project_desc:
      "تم تصميم منصتنا لجعل دراسة تاريخ روسيا في متناول الجميع وجذابة وتفاعلية للطلاب الأجانب وكل من يريد التعرف أكثر على ثقافة روسيا وتاريخها.",
    about_team_title: "فريقنا",
    about_university:
      "MADI (الجامعة الحكومية التقنية لبناء السيارات والطرق في موسكو)",
    about_group: "المجموعة",
    about_mission_title: "مهمتنا",
    about_mission_desc:
      "نسعى إلى إنشاء أفضل مورد تعليمي لتاريخ روسيا، يجمع بين الدقة الأكاديمية وتقنيات التعلم الحديثة.",
    about_tech_title: "التقنيات",

    timeline_title: "الجدول الزمني لتاريخ روسيا",
    timeline_subtitle: "من روس القديمة حتى يومنا هذا",
    timeline_explore: "استكشاف العصر",
    timeline_century: "قرن",
    timeline_bce: "قبل الميلاد",
    timeline_ce: "بعد الميلاد",

    ui_loading: "جارٍ التحميل...",
    ui_error: "حدث خطأ",
    ui_search: "بحث",
    ui_close: "إغلاق",
    ui_save: "حفظ",
    ui_cancel: "إلغاء",
    ui_continue: "متابعة",
    ui_completed: "مكتمل",
    ui_locked: "مقفل",
    ui_free: "مجاني",
    ui_premium: "مميز",
    ui_share: "مشاركة",
    ui_copied: "تم النسخ!",
    ui_language: "اللغة",
    ui_dark_mode: "الوضع الداكن",
    ui_settings: "الإعدادات",
    ui_back_to_top: "العودة إلى الأعلى",
    ui_show_more: "عرض المزيد",
    ui_show_less: "عرض أقل",
    ui_all: "الكل",
    ui_beginner: "مبتدئ",
    ui_intermediate: "متوسط",
    ui_advanced: "متقدم",
    ui_topics_count: "موضوعات",
    ui_articles_count: "مقالات",

    footer_desc: "منصة تعليمية لتاريخ روسيا للطلاب الأجانب",
    footer_links: "روابط",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الاستخدام",
    footer_contact: "التواصل",
    footer_rights: "جميع الحقوق محفوظة",

    lang_ru: "Русский",
    lang_en: "English",
    lang_ar: "العربية",
    lang_zh: "中文",
  },

  zh: {
    nav_home: "首页",
    nav_timeline: "时间线",
    nav_topics: "主题",
    nav_about: "关于我们",
    nav_login: "登录",
    nav_register: "注册",
    nav_profile: "个人资料",
    nav_logout: "退出",

    hero_title: "俄罗斯历史",
    hero_subtitle:
      "学习俄罗斯历史和文化的互动平台。沉浸在这个伟大国家千年的历史遗产中。",
    hero_btn_start: "开始学习",
    hero_btn_timeline: "探索时间线",

    epoch_ancient: "古代罗斯",
    epoch_kievan: "基辅罗斯",
    epoch_mongol: "蒙古入侵",
    epoch_moscow: "莫斯科公国",
    epoch_empire: "俄罗斯帝国",
    epoch_revolution: "革命与内战",
    epoch_ussr: "苏维埃联盟",
    epoch_modern: "现代俄罗斯",

    topics_title: "所有主题",
    topics_subtitle: "超过220个俄罗斯历史主题",
    topics_search: "搜索主题...",
    topics_filter_all: "所有时代",
    topics_read_more: "阅读文章",
    topics_articles: "篇文章",
    topics_tests: "个测试",

    article_key_dates: "关键日期",
    article_key_figures: "关键人物",
    article_related: "相关主题",
    article_take_test: "参加测试",
    article_back: "返回主题",
    article_reading_time: "阅读时间",
    article_min: "分钟",
    article_russian_subtitle_hint: "俄语原文",

    quiz_title: "测试你的知识",
    quiz_start: "开始测试",
    quiz_next: "下一题",
    quiz_finish: "完成",
    quiz_result: "结果",
    quiz_correct: "正确！",
    quiz_wrong: "错误",
    quiz_score: "你的得分",
    quiz_try_again: "再试一次",

    progress_xp: "经验值",
    progress_level: "等级",
    progress_streak: "连续",
    progress_days: "天",
    progress_achievements: "成就",
    progress_leaderboard: "排行榜",

    achievement_first_step: "第一步",
    achievement_first_step_desc: "阅读第一篇文章",
    achievement_ancient_expert: "罗斯专家",
    achievement_ancient_expert_desc: "完成古代罗斯时代",
    achievement_history_master: "历史大师",
    achievement_history_master_desc: "完成全部课程",

    auth_email: "电子邮件",
    auth_password: "密码",
    auth_name: "姓名",
    auth_login_title: "登录",
    auth_register_title: "创建账户",
    auth_login_btn: "登录",
    auth_register_btn: "注册",
    auth_no_account: "没有账户？注册",
    auth_has_account: "已有账户？登录",
    auth_forgot_password: "忘记密码？",

    about_title: "关于项目",
    about_subtitle: "由MADI学生创建的俄罗斯历史教育平台",
    about_project_title: "关于平台",
    about_project_desc:
      "我们的平台旨在让外国学生和所有想更深入了解俄罗斯文化和历史的人能够轻松、有趣、互动地学习俄罗斯历史。",
    about_team_title: "我们的团队",
    about_university: "MADI（莫斯科汽车公路国立技术大学）",
    about_group: "班级",
    about_mission_title: "我们的使命",
    about_mission_desc:
      "我们致力于创建最好的俄罗斯历史教育资源，将学术严谨性与现代学习技术相结合。",
    about_tech_title: "技术栈",

    timeline_title: "俄罗斯历史时间线",
    timeline_subtitle: "从古代罗斯到现代",
    timeline_explore: "探索时代",
    timeline_century: "世纪",
    timeline_bce: "公元前",
    timeline_ce: "公元",

    ui_loading: "加载中...",
    ui_error: "发生错误",
    ui_search: "搜索",
    ui_close: "关闭",
    ui_save: "保存",
    ui_cancel: "取消",
    ui_continue: "继续",
    ui_completed: "已完成",
    ui_locked: "已锁定",
    ui_free: "免费",
    ui_premium: "高级",
    ui_share: "分享",
    ui_copied: "已复制！",
    ui_language: "语言",
    ui_dark_mode: "深色模式",
    ui_settings: "设置",
    ui_back_to_top: "返回顶部",
    ui_show_more: "显示更多",
    ui_show_less: "显示更少",
    ui_all: "全部",
    ui_beginner: "初级",
    ui_intermediate: "中级",
    ui_advanced: "高级",
    ui_topics_count: "个主题",
    ui_articles_count: "篇文章",

    footer_desc: "面向外国学生的俄罗斯历史教育平台",
    footer_links: "链接",
    footer_privacy: "隐私政策",
    footer_terms: "使用条款",
    footer_contact: "联系我们",
    footer_rights: "版权所有",

    lang_ru: "Русский",
    lang_en: "English",
    lang_ar: "العربية",
    lang_zh: "中文",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
  isRTL: boolean;
  showRussianSubtitles: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("app_language");
    return (saved as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app_language", lang);
    // Set direction for RTL languages
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  const t = (key: keyof Translations): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  const isRTL = language === "ar";
  const showRussianSubtitles = language !== "ru";

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, isRTL, showRussianSubtitles }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { translations };
export default LanguageContext;
