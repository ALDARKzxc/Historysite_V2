import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "ru" | "en" | "ar" | "zh";

export type Translations = Record<string, string>;

/** A piece of content available in every supported language. */
export type Localized = Partial<Record<Language, string>>;

const en: Translations = {
  // Navigation
  nav_home: "Home",
  nav_timeline: "Timeline",
  nav_epochs: "Epochs",
  nav_language_lab: "Language Lab",
  nav_leaderboard: "Leaderboard",
  nav_about: "About",
  nav_login: "Sign In",
  nav_register: "Register",
  nav_logout: "Sign Out",

  // Hero
  hero_eyebrow: "220+ Historical Topics · 18 Epochs · 4 Languages",
  hero_title_pre: "Discover",
  hero_title_highlight: "Russia's",
  hero_title_post: "Epic History",
  hero_subtitle:
    "An immersive educational journey through 1,200 years of Russian history — with language learning built in.",
  hero_btn_start: "Start Learning",
  hero_btn_timeline: "Explore Timeline",
  hero_scroll: "Explore",

  // Stats
  stat_topics: "Historical Topics",
  stat_epochs: "Epochs",
  stat_epochs_covered: "Epochs Covered",
  stat_years: "Years of History",
  stat_languages: "Languages",

  // Epoch grid (home)
  home_epochs_badge: "18 Epochs",
  home_epochs_title: "Explore Russian History",
  home_epochs_subtitle:
    "From the founding of Kievan Rus to modern Russia — 1,200 years of civilization, conflict, and culture.",
  home_view_all_epochs: "View All 18 Epochs",
  ui_explore: "Explore",
  ui_topics: "topics",

  // Featured topics (home)
  featured_badge: "Featured",
  featured_title: "Popular Topics",
  featured_subtitle: "Dive into the most compelling moments in Russian history",

  // Timeline (home)
  timeline_badge: "Interactive",
  timeline_home_title: "History Timeline",
  timeline_home_subtitle: "862 AD to Present — 1,200 years of Russian history",

  // Gamification (home)
  gamification_badge: "Gamification",
  gamification_title: "Learn Like Never Before",
  gamification_subtitle:
    "RusHistory turns serious historical scholarship into an engaging adventure",
  gamification_cta: "Start Your Journey",
  level_system_title: "Level System",
  level_system_subtitle: "Rise through the ranks of Russian history",

  feat_xp_title: "Earn XP",
  feat_xp_desc:
    "Read articles and complete quizzes to earn experience points. Level up from Novice to Legend.",
  feat_streak_title: "Daily Streaks",
  feat_streak_desc:
    "Keep your learning streak going. Log in daily and complete activities to maintain your flame.",
  feat_achievements_title: "Achievements",
  feat_achievements_desc:
    '20+ unique badges to unlock. From "First Step" to "Master of History" — collect them all.',
  feat_bilingual_title: "Bilingual Mode",
  feat_bilingual_desc:
    "Read articles in English, Arabic, or Chinese with Russian text below each paragraph.",
  feat_langlab_title: "History Mini-Games",
  feat_langlab_desc:
    "Test your sense of history — guess which of two events came first and build a streak.",
  feat_quizzes_title: "Knowledge Quizzes",
  feat_quizzes_desc:
    "Test your understanding after each article with multiple-choice and matching questions.",

  // Levels
  level_novice: "Novice",
  level_boyar: "Boyar",
  level_voivode: "Voivode",
  level_knyaz: "Knyaz",
  level_tsar: "Tsar",
  level_emperor: "Emperor",
  level_legend: "Legend",

  // HUD
  hud_streak: "streak",
  hud_total_xp: "total XP",
  hud_day_streak: "day streak",
  hud_topics_done: "topics done",
  hud_lv: "Lv.",
  hud_in: "in",

  // Level up
  levelup_title: "Level Up!",
  levelup_subtitle: "You are now a",

  // Epochs page
  epochs_page_title: "Russian History Epochs",
  epochs_page_subtitle: "1,200 years of history organized into 18 thematic epochs",

  // Epoch detail
  epoch_not_found: "Epoch not found",
  all_epochs: "All Epochs",
  total_topics: "Total Topics",
  ui_completed: "Completed",
  max_xp: "Max XP",
  about_epoch: "About this Epoch",
  topics_label: "Topics",
  available: "available",
  read_article: "Read article",

  // Article page
  breadcrumb_home: "Home",
  breadcrumb_epochs: "Epochs",
  xp_on_completion: "+10 XP on completion",
  bilingual_mode: "Bilingual Mode",
  toggle_on: "ON",
  toggle_off: "OFF",
  ai_summary: "AI Summary",
  mark_as_read: "Mark as Read (+10 XP)",
  article_completed: "Article completed!",
  xp_earned_10: "+10 XP earned",
  test_knowledge: "Test Your Knowledge (+25 XP)",
  article_key_dates: "Key Dates",
  russian_vocabulary: "Russian Vocabulary",
  your_progress: "Your Progress",
  article_related: "Related Topics",
  article_not_found: "Article not found",
  back_to_epochs: "Back to Epochs",
  reader_intro: "Introduction",
  reader_section: "Chapter",
  reader_contents: "Contents",
  reader_prev: "Previous",
  reader_next: "Next",

  // Quiz
  quiz_time: "Quiz Time",
  quiz_questions: "questions",
  quiz_perfect: "Perfect Score!",
  quiz_complete: "Quiz Complete!",
  quiz_correct_answers: "correct answers",
  quiz_continue: "Continue Learning",
  quiz_correct_fb: "Correct! Well done.",
  quiz_wrong_fb: "The correct answer was:",
  quiz_next: "Next",
  quiz_finish: "Finish",
  quiz_take_test: "Take the Test",
  quiz_pass_hint: "Answer all 3 questions correctly to complete the topic and earn XP.",
  quiz_attempt: "Attempt",
  quiz_attempts_left: "attempts left",
  quiz_try_again: "Try Again",
  quiz_almost: "Almost there!",
  quiz_need_perfect: "You need all 3 correct to complete the topic.",
  quiz_no_attempts_title: "No attempts left",
  quiz_no_attempts_msg: "You have used all 3 attempts for this test.",
  quiz_close: "Close",
  quiz_signin_hint: "Sign in to take the test and earn XP.",

  // Auth
  auth_welcome_back: "Welcome Back",
  auth_join: "Join RusHistory",
  auth_login_sub: "Continue your history journey",
  auth_register_sub: "Begin your journey through Russian history",
  auth_signin: "Sign In",
  auth_register_tab: "Register",
  auth_username: "Username",
  auth_email_ph: "Email address",
  auth_password_ph: "Password",
  auth_processing: "Processing...",
  auth_create_account: "Create Account",
  auth_new_here: "New to RusHistory?",
  auth_create_link: "Create an account",
  auth_error_generic: "Something went wrong. Please try again.",
  auth_check_email: "Account created! Check your email to confirm, then sign in.",
  auth_err_invalid_credentials: "Wrong email or password.",
  auth_err_email_taken: "This email is already registered. Try signing in.",

  // Timeline page
  timeline_page_title: "Russian History Timeline",
  timeline_page_subtitle:
    "862 AD to Present — Drag to explore 1,200 years of history",
  timeline_epochs: "Epochs",

  // Leaderboard
  lb_title: "Leaderboard",
  lb_subtitle: "Top history learners from around the world",
  lb_weekly: "This Week",
  lb_alltime: "All Time",
  lb_you: "You",
  lb_empty: "No learners yet — be the first to earn XP!",

  // About page
  about_hero_title: "About",
  about_hero_sub:
    "Making 1,200 years of Russian history accessible to learners around the world",
  about_mission_title: "Our Mission",
  about_mission_p1:
    "RusHistory was created with a simple but ambitious goal: to make Russian history come alive for international learners. We believe that history is best understood through immersive storytelling, visual richness, and active engagement — not through dry textbooks.",
  about_mission_p2:
    "By combining the depth of academic scholarship with the engagement of modern ed-tech design, we've built a platform where a 16-year-old in Cairo or Shanghai can feel genuinely excited to learn about the Battle of Kulikovo, the Siege of Leningrad, or Yuri Gagarin's historic flight.",
  about_team_title: "Our Team",
  about_team_sub: "Students of MADI · Group 1bIVTn2",
  about_sources_title: "Academic Sources",
  about_sources_intro:
    "All historical content is based on verified Russian academic scholarship:",
  about_made_with: "Made with",
  about_for_lovers: "for history lovers worldwide · MADI University · 2026",
  about_university: "MADI",
  about_group: "Group 1bIVTn2",

  role_lead_dev: "Lead Developer & Architecture",
  role_lead_dev_desc:
    "Responsible for the technical architecture, backend systems, and overall platform development.",
  role_frontend: "Frontend Development & UI Design",
  role_frontend_desc:
    "Crafted the visual identity, user interface design, and interactive frontend components.",
  role_content: "Content Research & Historical Verification",
  role_content_desc:
    "Researched and verified all historical content using primary Russian academic sources. Also led the linguistic work and the translation of the articles, in particular into English.",

  source_orlov: "History of Russia from Ancient Times to the Present (textbook)",
  source_karamzin: "History of the Russian State",
  source_solovyov: "History of Russia from Ancient Times",
  source_klyuchevsky: "Course of Russian History",
  source_kostomarov: "Russian History in Biographies of Its Chief Figures",

  // Language Lab
  ll_badge: "Language Lab",
  ll_title: "Russian Language Practice",
  ll_subtitle: "Master Russian vocabulary from historical context",
  ll_total_words: "Total Words",
  ll_correct: "Correct",
  ll_xp_earned: "XP Earned",
  ll_flashcards: "Flashcards",
  ll_quiz: "Quiz",
  ll_card: "Card",
  ll_of: "of",
  ll_translation: "Translation",
  ll_click_reveal: "Click to reveal translation",
  ll_prev: "Previous",
  ll_next: "Next",
  ll_what_means: "What does this word mean?",
  ll_correct_xp: "Correct! +5 XP",
  ll_answer_was: "The answer was:",

  // History mini-game ("Which came first?")
  nav_game: "Time Game",
  game_badge: "Mini-game",
  game_title: "Which Came First?",
  game_subtitle: "Tap the event that happened earlier in history",
  game_which_first: "Which came first?",
  game_score: "Score",
  game_streak: "Streak",
  game_best: "Best",
  game_correct: "Correct!",
  game_wrong: "Not quite!",
  game_next: "Next round",
  game_play: "Play",
  game_signin_hint: "Sign in to earn XP for your answers.",
  topic_timeline_title: "On the timeline",
  glossary_title: "Words of the Era",
  glossary_hint: "tap to flip",

  // Difficulty
  difficulty_beginner: "Beginner",
  difficulty_intermediate: "Intermediate",
  difficulty_advanced: "Advanced",

  // Generic UI
  ui_loading: "Loading...",
  ui_language: "Language",

  // Language names
  lang_ru: "Русский",
  lang_en: "English",
  lang_ar: "العربية",
  lang_zh: "中文",
};

const ru: Translations = {
  nav_home: "Главная",
  nav_timeline: "Хронология",
  nav_epochs: "Эпохи",
  nav_language_lab: "Языковая лаборатория",
  nav_leaderboard: "Рейтинг",
  nav_about: "О нас",
  nav_login: "Войти",
  nav_register: "Регистрация",
  nav_logout: "Выйти",

  hero_eyebrow: "220+ исторических тем · 18 эпох · 4 языка",
  hero_title_pre: "Откройте",
  hero_title_highlight: "великую",
  hero_title_post: "историю России",
  hero_subtitle:
    "Захватывающее образовательное путешествие сквозь 1200 лет истории России — со встроенным изучением языка.",
  hero_btn_start: "Начать обучение",
  hero_btn_timeline: "Открыть хронологию",
  hero_scroll: "Листайте",

  stat_topics: "Исторических тем",
  stat_epochs: "Эпох",
  stat_epochs_covered: "Охваченных эпох",
  stat_years: "Лет истории",
  stat_languages: "Языка",

  home_epochs_badge: "18 эпох",
  home_epochs_title: "Исследуйте историю России",
  home_epochs_subtitle:
    "От основания Киевской Руси до современной России — 1200 лет цивилизации, конфликтов и культуры.",
  home_view_all_epochs: "Все 18 эпох",
  ui_explore: "Подробнее",
  ui_topics: "тем",

  featured_badge: "Избранное",
  featured_title: "Популярные темы",
  featured_subtitle:
    "Погрузитесь в самые яркие моменты истории России",

  timeline_badge: "Интерактив",
  timeline_home_title: "Лента времени",
  timeline_home_subtitle: "С 862 года до наших дней — 1200 лет истории России",

  gamification_badge: "Геймификация",
  gamification_title: "Учитесь как никогда раньше",
  gamification_subtitle:
    "RusHistory превращает серьёзную историческую науку в увлекательное приключение",
  gamification_cta: "Начать путешествие",
  level_system_title: "Система уровней",
  level_system_subtitle: "Поднимайтесь по рангам истории России",

  feat_xp_title: "Зарабатывайте опыт",
  feat_xp_desc:
    "Читайте статьи и проходите тесты, чтобы получать очки опыта. Растите от Новичка до Легенды.",
  feat_streak_title: "Ежедневные серии",
  feat_streak_desc:
    "Поддерживайте серию обучения. Заходите каждый день и выполняйте задания, чтобы сохранить огонёк.",
  feat_achievements_title: "Достижения",
  feat_achievements_desc:
    'Более 20 уникальных значков. От «Первого шага» до «Мастера истории» — соберите их все.',
  feat_bilingual_title: "Двуязычный режим",
  feat_bilingual_desc:
    "Читайте статьи на английском, арабском или китайском с русским текстом под каждым абзацем.",
  feat_langlab_title: "Исторические мини-игры",
  feat_langlab_desc:
    "Проверьте чувство истории — угадайте, какое из двух событий произошло раньше, и набирайте серию.",
  feat_quizzes_title: "Тесты на знания",
  feat_quizzes_desc:
    "Проверяйте понимание после каждой статьи вопросами с выбором ответа и на сопоставление.",

  level_novice: "Новичок",
  level_boyar: "Боярин",
  level_voivode: "Воевода",
  level_knyaz: "Князь",
  level_tsar: "Царь",
  level_emperor: "Император",
  level_legend: "Легенда",

  hud_streak: "серия",
  hud_total_xp: "всего опыта",
  hud_day_streak: "дней подряд",
  hud_topics_done: "тем пройдено",
  hud_lv: "Ур.",
  hud_in: "через",

  levelup_title: "Новый уровень!",
  levelup_subtitle: "Теперь вы",

  epochs_page_title: "Эпохи истории России",
  epochs_page_subtitle: "1200 лет истории, разделённые на 18 тематических эпох",

  epoch_not_found: "Эпоха не найдена",
  all_epochs: "Все эпохи",
  total_topics: "Всего тем",
  ui_completed: "Завершено",
  max_xp: "Макс. опыт",
  about_epoch: "Об этой эпохе",
  topics_label: "Темы",
  available: "доступно",
  read_article: "Читать статью",

  breadcrumb_home: "Главная",
  breadcrumb_epochs: "Эпохи",
  xp_on_completion: "+10 опыта за прохождение",
  bilingual_mode: "Двуязычный режим",
  toggle_on: "ВКЛ",
  toggle_off: "ВЫКЛ",
  ai_summary: "ИИ-резюме",
  mark_as_read: "Отметить прочитанным (+10 опыта)",
  article_completed: "Статья завершена!",
  xp_earned_10: "+10 опыта получено",
  test_knowledge: "Проверьте знания (+25 опыта)",
  article_key_dates: "Ключевые даты",
  russian_vocabulary: "Русская лексика",
  your_progress: "Ваш прогресс",
  article_related: "Связанные темы",
  article_not_found: "Статья не найдена",
  back_to_epochs: "Назад к эпохам",
  reader_intro: "Введение",
  reader_section: "Глава",
  reader_contents: "Содержание",
  reader_prev: "Назад",
  reader_next: "Далее",

  quiz_time: "Время теста",
  quiz_questions: "вопросов",
  quiz_perfect: "Идеальный результат!",
  quiz_complete: "Тест завершён!",
  quiz_correct_answers: "правильных ответов",
  quiz_continue: "Продолжить обучение",
  quiz_correct_fb: "Верно! Отлично.",
  quiz_wrong_fb: "Правильный ответ:",
  quiz_next: "Далее",
  quiz_finish: "Завершить",
  quiz_take_test: "Пройти тест",
  quiz_pass_hint: "Ответьте верно на все 3 вопроса, чтобы пройти тему и получить опыт.",
  quiz_attempt: "Попытка",
  quiz_attempts_left: "попыток осталось",
  quiz_try_again: "Попробовать снова",
  quiz_almost: "Почти получилось!",
  quiz_need_perfect: "Чтобы пройти тему, нужно ответить верно на все 3 вопроса.",
  quiz_no_attempts_title: "Попытки закончились",
  quiz_no_attempts_msg: "Вы использовали все 3 попытки для этого теста.",
  quiz_close: "Закрыть",
  quiz_signin_hint: "Войдите, чтобы пройти тест и получать очки.",

  auth_welcome_back: "С возвращением",
  auth_join: "Присоединиться к RusHistory",
  auth_login_sub: "Продолжите своё историческое путешествие",
  auth_register_sub: "Начните своё путешествие по истории России",
  auth_signin: "Войти",
  auth_register_tab: "Регистрация",
  auth_username: "Имя пользователя",
  auth_email_ph: "Электронная почта",
  auth_password_ph: "Пароль",
  auth_processing: "Обработка...",
  auth_create_account: "Создать аккаунт",
  auth_new_here: "Впервые в RusHistory?",
  auth_create_link: "Создать аккаунт",
  auth_error_generic: "Что-то пошло не так. Попробуйте ещё раз.",
  auth_check_email: "Аккаунт создан! Подтвердите почту по ссылке из письма, затем войдите.",
  auth_err_invalid_credentials: "Неверная почта или пароль.",
  auth_err_email_taken: "Эта почта уже зарегистрирована. Попробуйте войти.",

  timeline_page_title: "Хронология истории России",
  timeline_page_subtitle:
    "С 862 года до наших дней — перетаскивайте, чтобы исследовать 1200 лет истории",
  timeline_epochs: "Эпохи",

  lb_title: "Рейтинг",
  lb_subtitle: "Лучшие знатоки истории со всего мира",
  lb_weekly: "За неделю",
  lb_alltime: "За всё время",
  lb_you: "Вы",
  lb_empty: "Пока никого — станьте первым, кто заработает опыт!",

  about_hero_title: "О проекте",
  about_hero_sub:
    "Делаем 1200 лет истории России доступными для учащихся по всему миру",
  about_mission_title: "Наша миссия",
  about_mission_p1:
    "RusHistory создан с простой, но амбициозной целью: оживить историю России для учащихся всего мира. Мы верим, что историю лучше всего понимать через захватывающие истории, визуальное богатство и активное вовлечение — а не через сухие учебники.",
  about_mission_p2:
    "Сочетая глубину академической науки с увлекательностью современного образовательного дизайна, мы создали платформу, где 16-летний подросток в Каире или Шанхае может искренне увлечься Куликовской битвой, блокадой Ленинграда или историческим полётом Юрия Гагарина.",
  about_team_title: "Наша команда",
  about_team_sub: "Студенты МАДИ · Группа 1бИВТн2",
  about_sources_title: "Академические источники",
  about_sources_intro:
    "Весь исторический контент основан на проверенной российской академической науке:",
  about_made_with: "Сделано с",
  about_for_lovers: "для любителей истории по всему миру · Университет МАДИ · 2026",
  about_university: "МАДИ",
  about_group: "Группа 1бИВТн2",

  role_lead_dev: "Ведущий разработчик и архитектура",
  role_lead_dev_desc:
    "Отвечает за техническую архитектуру, серверные системы и общую разработку платформы.",
  role_frontend: "Фронтенд-разработка и UI-дизайн",
  role_frontend_desc:
    "Создал визуальный стиль, дизайн интерфейса и интерактивные компоненты фронтенда.",
  role_content: "Исследование контента и историческая проверка",
  role_content_desc:
    "Исследовал и проверял весь исторический контент по первичным российским академическим источникам. Также занимался лингвистической частью и переводом статей, в частности на английский язык.",

  source_orlov: "История России с древнейших времён до наших дней (учебник)",
  source_karamzin: "История государства Российского",
  source_solovyov: "История России с древнейших времён",
  source_klyuchevsky: "Курс русской истории",
  source_kostomarov: "Русская история в жизнеописаниях её главнейших деятелей",

  ll_badge: "Языковая лаборатория",
  ll_title: "Практика русского языка",
  ll_subtitle: "Осваивайте русскую лексику в историческом контексте",
  ll_total_words: "Всего слов",
  ll_correct: "Верно",
  ll_xp_earned: "Опыта получено",
  ll_flashcards: "Карточки",
  ll_quiz: "Тест",
  ll_card: "Карточка",
  ll_of: "из",
  ll_translation: "Перевод",
  ll_click_reveal: "Нажмите, чтобы увидеть перевод",
  ll_prev: "Назад",
  ll_next: "Далее",
  ll_what_means: "Что означает это слово?",
  ll_correct_xp: "Верно! +5 опыта",
  ll_answer_was: "Правильный ответ:",

  // History mini-game ("Which came first?")
  nav_game: "Игра",
  game_badge: "Мини-игра",
  game_title: "Что было раньше?",
  game_subtitle: "Выберите событие, которое произошло раньше",
  game_which_first: "Что произошло раньше?",
  game_score: "Счёт",
  game_streak: "Серия",
  game_best: "Рекорд",
  game_correct: "Верно!",
  game_wrong: "Мимо!",
  game_next: "Следующий раунд",
  game_play: "Играть",
  game_signin_hint: "Войдите, чтобы получать очки за ответы.",
  topic_timeline_title: "Тема на ленте времени",
  glossary_title: "Слова эпохи",
  glossary_hint: "нажмите, чтобы перевернуть",

  difficulty_beginner: "Начальный",
  difficulty_intermediate: "Средний",
  difficulty_advanced: "Продвинутый",

  ui_loading: "Загрузка...",
  ui_language: "Язык",

  lang_ru: "Русский",
  lang_en: "English",
  lang_ar: "العربية",
  lang_zh: "中文",
};

const ar: Translations = {
  nav_home: "الرئيسية",
  nav_timeline: "الجدول الزمني",
  nav_epochs: "العصور",
  nav_language_lab: "مختبر اللغة",
  nav_leaderboard: "المتصدرون",
  nav_about: "حول",
  nav_login: "تسجيل الدخول",
  nav_register: "التسجيل",
  nav_logout: "تسجيل الخروج",

  hero_eyebrow: "أكثر من 220 موضوعًا تاريخيًا · 18 عصرًا · 4 لغات",
  hero_title_pre: "اكتشف",
  hero_title_highlight: "تاريخ روسيا",
  hero_title_post: "العظيم",
  hero_subtitle:
    "رحلة تعليمية غامرة عبر 1200 عام من تاريخ روسيا — مع تعلّم اللغة المدمج.",
  hero_btn_start: "ابدأ التعلم",
  hero_btn_timeline: "استكشف الجدول الزمني",
  hero_scroll: "استكشف",

  stat_topics: "موضوع تاريخي",
  stat_epochs: "عصور",
  stat_epochs_covered: "العصور المغطاة",
  stat_years: "عام من التاريخ",
  stat_languages: "لغات",

  home_epochs_badge: "18 عصرًا",
  home_epochs_title: "استكشف تاريخ روسيا",
  home_epochs_subtitle:
    "من تأسيس روس كييف إلى روسيا الحديثة — 1200 عام من الحضارة والصراع والثقافة.",
  home_view_all_epochs: "عرض كل العصور الـ18",
  ui_explore: "استكشف",
  ui_topics: "مواضيع",

  featured_badge: "مميز",
  featured_title: "المواضيع الشائعة",
  featured_subtitle: "انغمس في أكثر اللحظات إثارة في تاريخ روسيا",

  timeline_badge: "تفاعلي",
  timeline_home_title: "الجدول الزمني للتاريخ",
  timeline_home_subtitle: "من عام 862 ميلادي حتى اليوم — 1200 عام من تاريخ روسيا",

  gamification_badge: "التلعيب",
  gamification_title: "تعلّم كما لم يحدث من قبل",
  gamification_subtitle:
    "يحوّل RusHistory الدراسة التاريخية الجادة إلى مغامرة شيقة",
  gamification_cta: "ابدأ رحلتك",
  level_system_title: "نظام المستويات",
  level_system_subtitle: "ارتقِ في رتب تاريخ روسيا",

  feat_xp_title: "اكسب نقاط الخبرة",
  feat_xp_desc:
    "اقرأ المقالات وأكمل الاختبارات لكسب نقاط الخبرة. ارتقِ من مبتدئ إلى أسطورة.",
  feat_streak_title: "السلاسل اليومية",
  feat_streak_desc:
    "حافظ على سلسلة تعلّمك. سجّل الدخول يوميًا وأكمل الأنشطة للحفاظ على شعلتك.",
  feat_achievements_title: "الإنجازات",
  feat_achievements_desc:
    'أكثر من 20 شارة فريدة لفتحها. من "الخطوة الأولى" إلى "سيد التاريخ" — اجمعها كلها.',
  feat_bilingual_title: "الوضع ثنائي اللغة",
  feat_bilingual_desc:
    "اقرأ المقالات بالإنجليزية أو العربية أو الصينية مع نص روسي أسفل كل فقرة.",
  feat_langlab_title: "ألعاب تاريخية مصغّرة",
  feat_langlab_desc:
    "اختبر حسّك التاريخي — خمّن أيّ الحدثين وقع أولًا واصنع سلسلة انتصارات.",
  feat_quizzes_title: "اختبارات المعرفة",
  feat_quizzes_desc:
    "اختبر فهمك بعد كل مقال بأسئلة الاختيار من متعدد والمطابقة.",

  level_novice: "مبتدئ",
  level_boyar: "بويار",
  level_voivode: "قائد",
  level_knyaz: "أمير",
  level_tsar: "قيصر",
  level_emperor: "إمبراطور",
  level_legend: "أسطورة",

  hud_streak: "سلسلة",
  hud_total_xp: "إجمالي الخبرة",
  hud_day_streak: "أيام متتالية",
  hud_topics_done: "مواضيع مكتملة",
  hud_lv: "م.",
  hud_in: "بعد",

  levelup_title: "ترقية المستوى!",
  levelup_subtitle: "أنت الآن",

  epochs_page_title: "عصور تاريخ روسيا",
  epochs_page_subtitle: "1200 عام من التاريخ منظمة في 18 عصرًا موضوعيًا",

  epoch_not_found: "العصر غير موجود",
  all_epochs: "كل العصور",
  total_topics: "إجمالي المواضيع",
  ui_completed: "مكتمل",
  max_xp: "أقصى خبرة",
  about_epoch: "حول هذا العصر",
  topics_label: "المواضيع",
  available: "متاح",
  read_article: "اقرأ المقال",

  breadcrumb_home: "الرئيسية",
  breadcrumb_epochs: "العصور",
  xp_on_completion: "+10 خبرة عند الإكمال",
  bilingual_mode: "الوضع ثنائي اللغة",
  toggle_on: "تشغيل",
  toggle_off: "إيقاف",
  ai_summary: "ملخص الذكاء الاصطناعي",
  mark_as_read: "وضع علامة كمقروء (+10 خبرة)",
  article_completed: "اكتمل المقال!",
  xp_earned_10: "+10 خبرة مكتسبة",
  test_knowledge: "اختبر معلوماتك (+25 خبرة)",
  article_key_dates: "التواريخ الرئيسية",
  russian_vocabulary: "المفردات الروسية",
  your_progress: "تقدّمك",
  article_related: "مواضيع ذات صلة",
  article_not_found: "المقال غير موجود",
  back_to_epochs: "العودة إلى العصور",
  reader_intro: "مقدمة",
  reader_section: "فصل",
  reader_contents: "المحتويات",
  reader_prev: "السابق",
  reader_next: "التالي",

  quiz_time: "وقت الاختبار",
  quiz_questions: "أسئلة",
  quiz_perfect: "نتيجة مثالية!",
  quiz_complete: "اكتمل الاختبار!",
  quiz_correct_answers: "إجابات صحيحة",
  quiz_continue: "متابعة التعلم",
  quiz_correct_fb: "صحيح! أحسنت.",
  quiz_wrong_fb: "الإجابة الصحيحة كانت:",
  quiz_next: "التالي",
  quiz_finish: "إنهاء",
  quiz_take_test: "ابدأ الاختبار",
  quiz_pass_hint: "أجب عن الأسئلة الثلاثة بشكل صحيح لإكمال الموضوع وكسب الخبرة.",
  quiz_attempt: "محاولة",
  quiz_attempts_left: "محاولات متبقية",
  quiz_try_again: "حاول مرة أخرى",
  quiz_almost: "اقتربت!",
  quiz_need_perfect: "تحتاج إلى الإجابات الثلاث صحيحة لإكمال الموضوع.",
  quiz_no_attempts_title: "لا محاولات متبقية",
  quiz_no_attempts_msg: "لقد استخدمت كل المحاولات الثلاث لهذا الاختبار.",
  quiz_close: "إغلاق",
  quiz_signin_hint: "سجّل الدخول لأداء الاختبار وكسب الخبرة.",

  auth_welcome_back: "مرحبًا بعودتك",
  auth_join: "انضم إلى RusHistory",
  auth_login_sub: "واصل رحلتك التاريخية",
  auth_register_sub: "ابدأ رحلتك عبر تاريخ روسيا",
  auth_signin: "تسجيل الدخول",
  auth_register_tab: "التسجيل",
  auth_username: "اسم المستخدم",
  auth_email_ph: "البريد الإلكتروني",
  auth_password_ph: "كلمة المرور",
  auth_processing: "جارٍ المعالجة...",
  auth_create_account: "إنشاء حساب",
  auth_new_here: "جديد في RusHistory؟",
  auth_create_link: "أنشئ حسابًا",
  auth_error_generic: "حدث خطأ ما. حاول مرة أخرى.",
  auth_check_email: "تم إنشاء الحساب! تحقق من بريدك لتأكيد الحساب، ثم سجّل الدخول.",
  auth_err_invalid_credentials: "بريد إلكتروني أو كلمة مرور غير صحيحة.",
  auth_err_email_taken: "هذا البريد مسجّل بالفعل. حاول تسجيل الدخول.",

  timeline_page_title: "الجدول الزمني لتاريخ روسيا",
  timeline_page_subtitle:
    "من عام 862 ميلادي حتى اليوم — اسحب لاستكشاف 1200 عام من التاريخ",
  timeline_epochs: "العصور",

  lb_title: "المتصدرون",
  lb_subtitle: "أفضل متعلمي التاريخ من جميع أنحاء العالم",
  lb_weekly: "هذا الأسبوع",
  lb_alltime: "كل الأوقات",
  lb_you: "أنت",
  lb_empty: "لا متعلمين بعد — كن أول من يكسب الخبرة!",

  about_hero_title: "حول المشروع",
  about_hero_sub:
    "نجعل 1200 عام من تاريخ روسيا في متناول المتعلمين حول العالم",
  about_mission_title: "مهمتنا",
  about_mission_p1:
    "أُنشئ RusHistory بهدف بسيط لكنه طموح: إحياء تاريخ روسيا للمتعلمين الدوليين. نؤمن بأن التاريخ يُفهم على أفضل وجه من خلال السرد الغامر والثراء البصري والمشاركة الفعّالة — لا من خلال الكتب المدرسية الجافة.",
  about_mission_p2:
    "من خلال الجمع بين عمق البحث الأكاديمي وجاذبية تصميم التعليم الحديث، بنينا منصة يمكن فيها لمراهق في السادسة عشرة في القاهرة أو شنغهاي أن يشعر بحماس حقيقي للتعرف على معركة كوليكوفو أو حصار لينينغراد أو رحلة يوري غاغارين التاريخية.",
  about_team_title: "فريقنا",
  about_team_sub: "طلاب MADI · المجموعة 1bIVTn2",
  about_sources_title: "المصادر الأكاديمية",
  about_sources_intro:
    "يستند كل المحتوى التاريخي إلى بحث أكاديمي روسي موثّق:",
  about_made_with: "صُنع بـ",
  about_for_lovers: "لمحبي التاريخ حول العالم · جامعة MADI · 2026",
  about_university: "MADI",
  about_group: "المجموعة 1bIVTn2",

  role_lead_dev: "المطوّر الرئيسي والبنية المعمارية",
  role_lead_dev_desc:
    "مسؤول عن البنية التقنية وأنظمة الخادم وتطوير المنصة بشكل عام.",
  role_frontend: "تطوير الواجهة الأمامية وتصميم الواجهة",
  role_frontend_desc:
    "صمّم الهوية البصرية وتصميم واجهة المستخدم ومكونات الواجهة التفاعلية.",
  role_content: "بحث المحتوى والتحقق التاريخي",
  role_content_desc:
    "بحث وتحقق من كل المحتوى التاريخي باستخدام مصادر أكاديمية روسية أولية. كما تولّى الجانب اللغوي وترجمة المقالات، وخصوصًا إلى اللغة الإنجليزية.",

  source_orlov: "تاريخ روسيا من العصور القديمة حتى اليوم (كتاب مدرسي)",
  source_karamzin: "تاريخ الدولة الروسية",
  source_solovyov: "تاريخ روسيا منذ العصور القديمة",
  source_klyuchevsky: "دورة في التاريخ الروسي",
  source_kostomarov: "التاريخ الروسي في سير أبرز شخصياته",

  ll_badge: "مختبر اللغة",
  ll_title: "ممارسة اللغة الروسية",
  ll_subtitle: "أتقن المفردات الروسية من السياق التاريخي",
  ll_total_words: "إجمالي الكلمات",
  ll_correct: "صحيح",
  ll_xp_earned: "الخبرة المكتسبة",
  ll_flashcards: "البطاقات",
  ll_quiz: "اختبار",
  ll_card: "بطاقة",
  ll_of: "من",
  ll_translation: "الترجمة",
  ll_click_reveal: "انقر لكشف الترجمة",
  ll_prev: "السابق",
  ll_next: "التالي",
  ll_what_means: "ماذا تعني هذه الكلمة؟",
  ll_correct_xp: "صحيح! +5 خبرة",
  ll_answer_was: "الإجابة كانت:",

  // History mini-game ("Which came first?")
  nav_game: "لعبة",
  game_badge: "لعبة مصغّرة",
  game_title: "أيّهما حدث أولًا؟",
  game_subtitle: "اختر الحدث الذي وقع أولًا في التاريخ",
  game_which_first: "أيّهما حدث أولًا؟",
  game_score: "النتيجة",
  game_streak: "السلسلة",
  game_best: "الأفضل",
  game_correct: "صحيح!",
  game_wrong: "ليس تمامًا!",
  game_next: "الجولة التالية",
  game_play: "العب",
  game_signin_hint: "سجّل الدخول لتكسب الخبرة على إجاباتك.",
  topic_timeline_title: "على الخط الزمني",
  glossary_title: "كلمات العصر",
  glossary_hint: "انقر للقلب",

  difficulty_beginner: "مبتدئ",
  difficulty_intermediate: "متوسط",
  difficulty_advanced: "متقدم",

  ui_loading: "جارٍ التحميل...",
  ui_language: "اللغة",

  lang_ru: "Русский",
  lang_en: "English",
  lang_ar: "العربية",
  lang_zh: "中文",
};

const zh: Translations = {
  nav_home: "首页",
  nav_timeline: "时间线",
  nav_epochs: "历史时代",
  nav_language_lab: "语言实验室",
  nav_leaderboard: "排行榜",
  nav_about: "关于我们",
  nav_login: "登录",
  nav_register: "注册",
  nav_logout: "退出登录",

  hero_eyebrow: "220+ 历史主题 · 18 个时代 · 4 种语言",
  hero_title_pre: "探索",
  hero_title_highlight: "俄罗斯",
  hero_title_post: "的壮阔历史",
  hero_subtitle:
    "穿越俄罗斯 1200 年历史的沉浸式教育之旅——内置语言学习功能。",
  hero_btn_start: "开始学习",
  hero_btn_timeline: "探索时间线",
  hero_scroll: "向下探索",

  stat_topics: "历史主题",
  stat_epochs: "个时代",
  stat_epochs_covered: "涵盖时代",
  stat_years: "年历史",
  stat_languages: "种语言",

  home_epochs_badge: "18 个时代",
  home_epochs_title: "探索俄罗斯历史",
  home_epochs_subtitle:
    "从基辅罗斯的建立到现代俄罗斯——1200 年的文明、冲突与文化。",
  home_view_all_epochs: "查看全部 18 个时代",
  ui_explore: "探索",
  ui_topics: "个主题",

  featured_badge: "精选",
  featured_title: "热门主题",
  featured_subtitle: "深入了解俄罗斯历史中最引人入胜的时刻",

  timeline_badge: "互动",
  timeline_home_title: "历史时间线",
  timeline_home_subtitle: "从公元 862 年至今——1200 年俄罗斯历史",

  gamification_badge: "游戏化",
  gamification_title: "前所未有的学习方式",
  gamification_subtitle: "RusHistory 将严肃的历史学术变成引人入胜的冒险",
  gamification_cta: "开启你的旅程",
  level_system_title: "等级系统",
  level_system_subtitle: "在俄罗斯历史的等级中不断攀升",

  feat_xp_title: "赚取经验值",
  feat_xp_desc:
    "阅读文章并完成测验以赚取经验值。从新手升级到传奇。",
  feat_streak_title: "每日连续打卡",
  feat_streak_desc:
    "保持你的学习连续记录。每天登录并完成活动以维持你的火焰。",
  feat_achievements_title: "成就",
  feat_achievements_desc:
    '20+ 个独特徽章等待解锁。从"第一步"到"历史大师"——全部收集。',
  feat_bilingual_title: "双语模式",
  feat_bilingual_desc:
    "用英语、阿拉伯语或中文阅读文章，每段下方附有俄语原文。",
  feat_langlab_title: "历史小游戏",
  feat_langlab_desc:
    "考验你的历史感——猜猜两件事中哪件更早发生，并积累连胜。",
  feat_quizzes_title: "知识测验",
  feat_quizzes_desc:
    "每篇文章后通过选择题和配对题测试你的理解。",

  level_novice: "新手",
  level_boyar: "贵族",
  level_voivode: "军政官",
  level_knyaz: "公爵",
  level_tsar: "沙皇",
  level_emperor: "皇帝",
  level_legend: "传奇",

  hud_streak: "连续",
  hud_total_xp: "总经验",
  hud_day_streak: "天连续",
  hud_topics_done: "已完成主题",
  hud_lv: "等级",
  hud_in: "还差",

  levelup_title: "升级！",
  levelup_subtitle: "你现在是",

  epochs_page_title: "俄罗斯历史时代",
  epochs_page_subtitle: "1200 年历史，划分为 18 个主题时代",

  epoch_not_found: "未找到该时代",
  all_epochs: "所有时代",
  total_topics: "主题总数",
  ui_completed: "已完成",
  max_xp: "最高经验",
  about_epoch: "关于这个时代",
  topics_label: "主题",
  available: "可用",
  read_article: "阅读文章",

  breadcrumb_home: "首页",
  breadcrumb_epochs: "时代",
  xp_on_completion: "完成可得 +10 经验",
  bilingual_mode: "双语模式",
  toggle_on: "开",
  toggle_off: "关",
  ai_summary: "AI 摘要",
  mark_as_read: "标记为已读 (+10 经验)",
  article_completed: "文章已完成！",
  xp_earned_10: "获得 +10 经验",
  test_knowledge: "测试你的知识 (+25 经验)",
  article_key_dates: "关键日期",
  russian_vocabulary: "俄语词汇",
  your_progress: "你的进度",
  article_related: "相关主题",
  article_not_found: "未找到文章",
  back_to_epochs: "返回时代",
  reader_intro: "导言",
  reader_section: "章节",
  reader_contents: "目录",
  reader_prev: "上一章",
  reader_next: "下一章",

  quiz_time: "测验时间",
  quiz_questions: "道题",
  quiz_perfect: "满分！",
  quiz_complete: "测验完成！",
  quiz_correct_answers: "道答对",
  quiz_continue: "继续学习",
  quiz_correct_fb: "正确！做得好。",
  quiz_wrong_fb: "正确答案是：",
  quiz_next: "下一题",
  quiz_finish: "完成",
  quiz_take_test: "开始测验",
  quiz_pass_hint: "三道题全部答对才能完成该主题并获得经验值。",
  quiz_attempt: "尝试",
  quiz_attempts_left: "次机会剩余",
  quiz_try_again: "再试一次",
  quiz_almost: "差一点！",
  quiz_need_perfect: "需要三题全部答对才能完成该主题。",
  quiz_no_attempts_title: "没有剩余机会",
  quiz_no_attempts_msg: "你已用完本测验的全部 3 次机会。",
  quiz_close: "关闭",
  quiz_signin_hint: "登录后即可参加测验并赚取经验值。",

  auth_welcome_back: "欢迎回来",
  auth_join: "加入 RusHistory",
  auth_login_sub: "继续你的历史之旅",
  auth_register_sub: "开启你的俄罗斯历史之旅",
  auth_signin: "登录",
  auth_register_tab: "注册",
  auth_username: "用户名",
  auth_email_ph: "电子邮件地址",
  auth_password_ph: "密码",
  auth_processing: "处理中...",
  auth_create_account: "创建账户",
  auth_new_here: "初次使用 RusHistory？",
  auth_create_link: "创建账户",
  auth_error_generic: "出错了，请重试。",
  auth_check_email: "账户已创建！请查收邮件确认后再登录。",
  auth_err_invalid_credentials: "邮箱或密码错误。",
  auth_err_email_taken: "该邮箱已注册，请尝试登录。",

  timeline_page_title: "俄罗斯历史时间线",
  timeline_page_subtitle: "从公元 862 年至今——拖动以探索 1200 年历史",
  timeline_epochs: "时代",

  lb_title: "排行榜",
  lb_subtitle: "来自世界各地的顶尖历史学习者",
  lb_weekly: "本周",
  lb_alltime: "总榜",
  lb_you: "你",
  lb_empty: "还没有学习者——成为第一个赚取经验的人吧！",

  about_hero_title: "关于",
  about_hero_sub: "让全世界的学习者都能了解俄罗斯 1200 年的历史",
  about_mission_title: "我们的使命",
  about_mission_p1:
    "RusHistory 的创建有一个简单而宏大的目标：让俄罗斯历史在国际学习者面前鲜活起来。我们相信，历史最好通过沉浸式叙事、丰富的视觉和主动参与来理解，而不是枯燥的教科书。",
  about_mission_p2:
    "通过将学术研究的深度与现代教育科技设计的吸引力相结合，我们打造了一个平台，让开罗或上海的 16 岁少年也能真正兴致勃勃地了解库利科沃战役、列宁格勒围城战或尤里·加加林的历史性飞行。",
  about_team_title: "我们的团队",
  about_team_sub: "MADI 学生 · 1bIVTn2 班",
  about_sources_title: "学术来源",
  about_sources_intro: "所有历史内容均基于经过验证的俄罗斯学术研究：",
  about_made_with: "用",
  about_for_lovers: "为全世界的历史爱好者打造 · MADI 大学 · 2026",
  about_university: "MADI",
  about_group: "1bIVTn2 班",

  role_lead_dev: "首席开发与架构",
  role_lead_dev_desc: "负责技术架构、后端系统和整体平台开发。",
  role_frontend: "前端开发与 UI 设计",
  role_frontend_desc: "打造视觉形象、用户界面设计和交互式前端组件。",
  role_content: "内容研究与历史核实",
  role_content_desc: "使用俄罗斯第一手学术来源研究并核实所有历史内容。同时负责语言方面的工作以及文章的翻译，尤其是英文翻译。",

  source_orlov: "从古至今的俄罗斯历史(教科书)",
  source_karamzin: "俄罗斯国家史",
  source_solovyov: "古代以来的俄罗斯史",
  source_klyuchevsky: "俄罗斯历史教程",
  source_kostomarov: "以主要人物传记呈现的俄罗斯历史",

  ll_badge: "语言实验室",
  ll_title: "俄语练习",
  ll_subtitle: "在历史语境中掌握俄语词汇",
  ll_total_words: "单词总数",
  ll_correct: "正确",
  ll_xp_earned: "已获经验",
  ll_flashcards: "抽认卡",
  ll_quiz: "测验",
  ll_card: "卡片",
  ll_of: "/",
  ll_translation: "翻译",
  ll_click_reveal: "点击显示翻译",
  ll_prev: "上一个",
  ll_next: "下一个",
  ll_what_means: "这个词是什么意思？",
  ll_correct_xp: "正确！+5 经验",
  ll_answer_was: "答案是：",

  // History mini-game ("Which came first?")
  nav_game: "小游戏",
  game_badge: "小游戏",
  game_title: "哪个更早？",
  game_subtitle: "选择在历史上更早发生的事件",
  game_which_first: "哪个先发生？",
  game_score: "得分",
  game_streak: "连胜",
  game_best: "最佳",
  game_correct: "正确！",
  game_wrong: "差一点！",
  game_next: "下一轮",
  game_play: "开始游戏",
  game_signin_hint: "登录后即可为你的答案赚取经验值。",
  topic_timeline_title: "在时间线上",
  glossary_title: "时代词汇",
  glossary_hint: "点击翻转",

  difficulty_beginner: "初级",
  difficulty_intermediate: "中级",
  difficulty_advanced: "高级",

  ui_loading: "加载中...",
  ui_language: "语言",

  lang_ru: "Русский",
  lang_en: "English",
  lang_ar: "العربية",
  lang_zh: "中文",
};

const translations: Record<Language, Translations> = { en, ru, ar, zh };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  /** Pick the right string from a localized content object. */
  localize: (obj: Localized | undefined) => string;
  isRTL: boolean;
  showRussianSubtitles: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function applyDir(lang: Language) {
  if (typeof document === "undefined") return;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("app_language")
        : null;
    const initial = (saved as Language) || "en";
    applyDir(initial);
    return initial;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("app_language", lang);
    }
    applyDir(lang);
  };

  const t = (key: string): string =>
    translations[language][key] ?? translations.en[key] ?? key;

  const localize = (obj: Localized | undefined): string => {
    if (!obj) return "";
    return obj[language] ?? obj.en ?? obj.ru ?? "";
  };

  const isRTL = language === "ar";
  const showRussianSubtitles = language !== "ru";

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, localize, isRTL, showRussianSubtitles }}
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
