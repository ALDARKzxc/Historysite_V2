# CLAUDE.md

Гайд для Claude Code при работе в этом репозитории. Держи этот файл тощим: это
карта, а не пересказ кода.

## Контекст проекта (второй мозг)

Полный контекст проекта — статус, принятые решения, открытые задачи, связи с
другими проектами — живёт во «втором мозге»:

`C:\Users\user\Documents\Dima Obsidian\projects\history-site.md`

Читай эту карточку в начале сессии, если нужен фон или история решений. После
значимых изменений в проекте — напоминай владельцу обновить карточку.

## Что это

Образовательный сайт по истории России для иностранных и русских студентов: 230+
тем по эпохам, геймификация (XP, уровни, лидерборд), мультиязычность. Сейчас —
учебный проект для университета (МАДИ), цель — вырасти в рабочий сайт на домене.

## Команды

```bash
npm run dev      # запуск дев-сервера (Vite)
npm run build    # tsc + vite build
npm run lint     # eslint по ts/tsx
npm run preview  # предпросмотр прод-сборки
```

## Стек

Vite 7 + React 18 + TypeScript 5.8, Tailwind 3.4 + shadcn/ui (Radix),
react-router-dom 6, framer-motion, recharts, react-hook-form + zod,
Supabase (auth/прогресс/лидерборд). Сборка оркестрируется через Tempo.

## Карта репозитория

- `src/main.tsx` — точка входа → `BrowserRouter` → `src/App.tsx` (роуты + провайдеры).
- `src/App.tsx` — все маршруты; провайдеры `LanguageProvider` (i18n) и `AppProvider`.
- `src/pages/` — страницы: HomePage, EpochsPage, EpochDetailPage, ArticlePage,
  TimelinePage, LeaderboardPage, AboutPage, LanguageLabPage.
- `src/components/` — прикладные компоненты: Navbar, HeroSection, Timeline,
  EpochGrid, FeaturedTopics, Gamification*, AuthModal, QuizModule.
- `src/data/` — **контент**:
  - `epochs.ts` — эпохи и темы (`Epoch`, `Topic`), локализация `{ en, ru, ar, zh }`.
  - `articles.ts` — полные статьи (`ArticleData`): sections, keyDates, vocabulary.
- `src/LanguageContext`, `src/context/AppContext` — i18n и состояние пользователя.
- `src/types/supabase.ts` — типы БД (пока пустой стаб).

## Не читать без явной нужды (экономия токенов)

- `node_modules/` — зависимости.
- `src/components/ui/` и `src/stories/` — сгенерированный shadcn/ui кит и Storybook.
- `src/data/articles.ts` — очень большой файл (полные тексты × 4 языка). Открывай
  точечно по нужной теме, не целиком.

## Конвенции

- Любой пользовательский текст — локализованный (`LocalizedText` на все 4 языка),
  не хардкодить строки на одном языке.
- UI — на компонентах из `src/components/ui/` (shadcn), не плодить аналоги.
