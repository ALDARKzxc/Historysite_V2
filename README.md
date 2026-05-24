# RusHistory (Historysite_V2)

Образовательный сайт по истории России для иностранных и русских студентов:
темы по эпохам, геймификация (XP, уровни, лидерборд) и мультиязычность
(en / ru / ar / zh). Учебный проект МАДИ.

## Запуск

```bash
npm install
npm run dev      # дев-сервер (Vite) на http://localhost:5173
npm run build    # tsc + прод-сборка
npm run preview  # предпросмотр прод-сборки
npm run lint     # eslint
```

## Бэкенд (Supabase) — авторизация, прогресс, лидерборд

Сайт работает **без бэкенда** (на локальных mock-данных) — удобно для офлайн-демо.
Чтобы включить настоящие аккаунты, сохранение прогресса и реальный лидерборд:

1. **Создай проект** на [supabase.com](https://supabase.com) (бесплатно).
2. **Создай таблицы.** В проекте: `SQL Editor → New query`, вставь содержимое
   [`supabase/schema.sql`](supabase/schema.sql) и нажми `Run`. Это создаёт таблицу
   `profiles`, политики доступа (RLS) и авто-создание профиля при регистрации.
3. **Ключи.** Скопируй `.env.example` в `.env.local` и впиши значения из
   `Settings → API`:
   ```
   VITE_SUPABASE_URL=https://<твой-проект>.supabase.co
   VITE_SUPABASE_ANON_KEY=<anon public key>
   ```
4. **Перезапусти** `npm run dev`.

После этого:
- Регистрация/вход работают через Supabase Auth, сессия запоминается.
- XP, пройденные темы и попытки тестов сохраняются в `profiles` и переживают
  перезагрузку.
- Страница «Рейтинг» показывает реальных пользователей по XP.

**Подтверждение email.** По умолчанию Supabase требует подтверждения почты при
регистрации. Для быстрого демо это можно отключить:
`Authentication → Providers → Email → Confirm email = off`.

> Если ключей нет — приложение автоматически откатывается на mock-режим
> (пользователь-заглушка, прогресс только в памяти). Это поведение задано в
> [`src/lib/supabase.ts`](src/lib/supabase.ts) (`isSupabaseConfigured`).

## Стек

Vite 7 + React 18 + TypeScript, Tailwind 3.4 + shadcn/ui (Radix),
react-router-dom 6, framer-motion, recharts, Supabase. Подробнее — в
[`CLAUDE.md`](CLAUDE.md).
