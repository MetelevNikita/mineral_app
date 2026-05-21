# Документация для передачи проекта на деплой

Документ предназначен для разработчиков и DevOps-инженеров, которые принимают проект `mineral_app` для разворачивания на сервере.

## 1. Кратко о проекте

`mineral_app` — веб-приложение на Next.js 15 с App Router. В проекте есть клиентская часть, серверные API-роуты, PWA-ресурсы, админ-панель, авторизация, работа с PostgreSQL через Prisma, загрузка изображений и видео в локальную файловую систему приложения.

Основные технологии:

- Node.js / npm
- Next.js 15
- React 19
- Prisma 6
- PostgreSQL
- Docker / Docker Compose
- Nodemailer / Resend для почты
- VK API / VK ID
- Яндекс.Метрика

## 2. Структура проекта

```text
src/app/                 Страницы Next.js, layouts и API routes
src/app/api/             Серверные API-роуты
src/components/          UI-компоненты
src/functions/           Клиентские и серверные функции для API/Redux
src/Redux/               Redux store, provider и slices
src/utils/               Утилиты, включая загрузку/удаление файлов
prisma/schema.prisma     Prisma schema
prisma/migrations/       SQL-миграции базы данных
generated/prisma/        Сгенерированный Prisma Client
public/                  Статические файлы, PWA-ресурсы, иконки
Dockerfile               Сборка production-контейнера приложения
docker-compose.yaml      Локальный запуск приложения и PostgreSQL
```

## 3. Требования к окружению

Для локального запуска и сборки без Docker:

- Node.js 18.20.2 или новее в рамках Node 18 LTS
- npm
- PostgreSQL 14+

Для запуска через Docker:

- Docker
- Docker Compose v2

Важно: Dockerfile сейчас основан на `node:18.20.2-alpine`. Если production-сервер использует другую архитектуру, например `linux/amd64`, образ нужно собирать под эту платформу.

## 4. Переменные окружения

Создайте `.env` на сервере или настройте переменные в панели хостинга/CI. Секретные значения не должны попадать в Git.

| Переменная | Обязательна | Назначение |
| --- | --- | --- |
| `DATABASE_URL` | Да | Подключение Prisma к PostgreSQL. Пример: `postgresql://user:password@host:5432/db?schema=public` |
| `POSTGRES_USER` | Да для Docker Compose | Пользователь PostgreSQL в `docker-compose.yaml` |
| `POSTGRES_PASSWORD` | Да для Docker Compose | Пароль PostgreSQL в `docker-compose.yaml` |
| `POSTGRES_DB` | Да для Docker Compose | Имя базы PostgreSQL в `docker-compose.yaml` |
| `SECRET_KEY` | Да | Секрет для JWT-токенов авторизации и сброса пароля |
| `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` | Рекомендуется | Ключ шифрования Next.js Server Actions |
| `EMAIL` | Если используется почта | Логин SMTP-аккаунта для Nodemailer |
| `PASS` | Если используется почта | Пароль SMTP-аккаунта или app password |
| `RESEND_API_KEY` | Если используется Resend | API-ключ Resend |
| `VK_APP_ID` | Если используется VK auth | Server-side ID приложения VK |
| `REDIRECT_URL` | Если используется VK auth | Server-side redirect URI для VK |
| `NEXT_PUBLIC_VK_APP_ID` | Если используется VK share/auth | Public ID приложения VK для клиента |
| `NEXT_PUBLIC_VK_REDIRECT_URI` | Если используется VK share/auth | Public redirect URI для клиента |
| `NEXT_PUBLIC_YM_ID` | Нет | ID счетчика Яндекс.Метрики |
| `URL` | Да для сброса пароля | Публичный URL сайта, используется при генерации ссылок |
| `NEXT_PUBLIC_HOST` | Если используется revalidate action | Базовый URL для server action в `src/app/actions.ts` |
| `REVALIDATION_SECRET` | Если используется revalidate action | Секрет для revalidate-запроса |

Минимальный пример для Docker Compose:

```env
POSTGRES_USER=mineral
POSTGRES_PASSWORD=change_me
POSTGRES_DB=mineral
DATABASE_URL=postgresql://mineral:change_me@db:5432/mineral?schema=public
SECRET_KEY=change_me_long_random_secret
URL=https://example.com
```

Для production генерируйте длинные случайные значения для `SECRET_KEY` и `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY`.

## 5. Локальный запуск без Docker

1. Установить зависимости:

```bash
npm install
```

2. Создать `.env` и заполнить переменные окружения.

3. Поднять PostgreSQL и применить миграции:

```bash
npm run prisma:deploy
npm run prisma:generate
```

4. Запустить dev-сервер:

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:3000`.

## 6. Production-сборка без Docker

```bash
npm install
npm run prisma:generate
npm run build
npm run prisma:deploy
npm run start
```

Порядок можно адаптировать под CI/CD, но перед запуском production-приложения должны быть выполнены:

- установка зависимостей;
- генерация Prisma Client;
- сборка Next.js;
- применение миграций к production-базе.

## 7. Запуск через Docker Compose

В репозитории есть `docker-compose.yaml` с двумя сервисами:

- `db` — PostgreSQL 14.1 Alpine;
- `app` — Next.js-приложение на порту `3000`.

Команда запуска:

```bash
docker compose up --build
```

После запуска приложение доступно на `http://localhost:3000`.

Применение миграций внутри Docker:

```bash
docker compose exec app npm run prisma:deploy
```

Если контейнер приложения еще не запущен, можно выполнить одноразовый запуск:

```bash
docker compose run --rm app npm run prisma:deploy
```

Важно: текущий `Dockerfile` не выполняет миграции автоматически при старте. Это правильнее держать отдельным шагом деплоя, чтобы миграции не запускались бесконтрольно при каждом рестарте контейнера.

## 8. Сборка Docker-образа для production

Обычная сборка:

```bash
docker build -t mineral_app .
```

Сборка под `linux/amd64`, если сервер отличается от локальной машины:

```bash
docker build --platform=linux/amd64 -t mineral_app .
```

Пример публикации в registry:

```bash
docker tag mineral_app registry.example.com/mineral_app:latest
docker push registry.example.com/mineral_app:latest
```

На сервере после обновления образа:

```bash
docker pull registry.example.com/mineral_app:latest
docker compose up -d
docker compose exec app npm run prisma:deploy
```

## 9. База данных и Prisma

Схема базы находится в `prisma/schema.prisma`, миграции — в `prisma/migrations`.

Команды:

```bash
npm run prisma:generate   # сгенерировать Prisma Client
npm run prisma:deploy     # применить миграции в production/staging
npm run prisma:migrate    # создать и применить миграцию в dev-окружении
```

В проекте Prisma Client генерируется в `generated/prisma`, а не в стандартный `node_modules/@prisma/client`. Это задано в `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
}
```

Не меняйте путь генерации без проверки импортов в `src/app/api/**`.

## 10. Загрузка файлов и постоянное хранилище

Приложение сохраняет загруженные файлы в локальную директорию:

```text
src/app/uploads
```

Файлы доступны через API-роуты вида:

```text
/api/uploads/{folder}/{filename}
/api/uploads/mineral/{folder}/{filename}
```

Для production важно обеспечить постоянное хранилище для этой директории. Если приложение запускается в Docker-контейнере без volume, загруженные пользователями файлы могут быть потеряны при пересборке или пересоздании контейнера.

Рекомендуемый вариант для Docker Compose:

```yaml
services:
  app:
    volumes:
      - uploads:/app/src/app/uploads

volumes:
  uploads: {}
```

Если приложение деплоится на managed-платформу без постоянного диска, нужно вынести загрузки в объектное хранилище, например S3-compatible storage, и доработать код загрузки/чтения файлов.

## 11. PWA и статические файлы

В `public/` лежат:

- `manifest.json`;
- `offline.html`;
- изображения, иконки, SVG;
- медиа и статические ассеты для интерфейса.

В `next.config.ts` настроены заголовки кеширования для статических файлов и специальные заголовки для `sw.js`.

После production-деплоя проверьте:

- открывается ли `manifest.json`;
- работает ли offline-страница;
- нет ли ошибок service worker в браузере;
- корректно ли загружаются изображения и видео.

## 12. Особенности текущей конфигурации

Перед production-деплоем принимающей команде нужно обратить внимание на несколько мест:

1. В `next.config.ts` включены:

```ts
eslint: { ignoreDuringBuilds: true }
typescript: { ignoreBuildErrors: true }
```

Это значит, что production-сборка может пройти даже при ошибках линтинга или TypeScript. Для долгосрочной поддержки лучше отдельно прогонять проверки в CI.

2. В `package.json` есть команда:

```json
"seed": "tsx prisma/seed.ts"
```

Но файла `prisma/seed.ts` в текущем репозитории нет. Если проекту нужны стартовые данные, seed-файл нужно восстановить или удалить команду.

3. В `docker-compose.yaml` для сервиса `app` сейчас передается только `DATABASE_URL`. Остальные переменные (`SECRET_KEY`, почта, VK, URL и т.д.) нужно передать в production-окружение отдельно.

4. В `Dockerfile` используется `npm install`. Для воспроизводимой CI/CD-сборки лучше использовать `npm ci`, если `package-lock.json` актуален.

## 13. Чек-лист деплоя

Перед первым production-запуском:

- [ ] Создать production-базу PostgreSQL.
- [ ] Заполнить все обязательные переменные окружения.
- [ ] Сгенерировать Prisma Client.
- [ ] Применить миграции `npm run prisma:deploy`.
- [ ] Собрать приложение `npm run build`.
- [ ] Настроить постоянное хранилище для `src/app/uploads`.
- [ ] Настроить HTTPS и публичный домен.
- [ ] Проверить значение `URL`, чтобы ссылки сброса пароля вели на production-домен.
- [ ] Проверить SMTP/Resend-отправку писем.
- [ ] Проверить VK redirect URI в настройках VK-приложения.
- [ ] Проверить админ-авторизацию.
- [ ] Проверить загрузку изображений и видео.
- [ ] Проверить страницы PWA и service worker.

После каждого релиза:

- [ ] Обновить код/образ приложения.
- [ ] Применить новые миграции.
- [ ] Перезапустить приложение.
- [ ] Проверить главную страницу, авторизацию, админ-панель и основные API.
- [ ] Проверить логи приложения и базы.

## 14. Доступ к админ-панели

Админ-панель production-сайта:

```text
https://geokviz.ru/admin
```

Порядок входа важен:

1. Сначала авторизоваться на основном сайте `https://geokviz.ru`.
2. После этого перейти в админ-панель `https://geokviz.ru/admin`.
3. Авторизоваться в админ-панели под администраторским аккаунтом.

Администраторский email для передачи:

```text
Kyle.B@mail.ru
```

Пароль передается принимающей стороне отдельно как временный секрет. После передачи проекта пароль нужно сменить.

Не сохраняйте реальные пароли в Git, README, issue tracker, CI-логи или публичные каналы связи.

## 15. Быстрая диагностика

Проверить сборку:

```bash
npm run build
```

Проверить подключение к базе через Prisma:

```bash
npm run prisma:deploy
```

Посмотреть логи Docker Compose:

```bash
docker compose logs -f app
docker compose logs -f db
```

Перезапустить приложение:

```bash
docker compose restart app
```

Полностью пересобрать приложение:

```bash
docker compose up --build -d
```

## 16. Что передать вместе с проектом

При передаче проекта принимающей стороне нужно передать отдельно от Git:

- production `.env` или список переменных окружения без публикации в репозитории;
- доступы к PostgreSQL;
- доступ к SMTP/Resend;
- настройки VK-приложения;
- ID Яндекс.Метрики;
- дамп production-базы, если нужен перенос данных;
- архив или volume с `src/app/uploads`, если нужно сохранить загруженные файлы;
- инструкцию по доступу к серверу/registry/CI.
- временный пароль от админ-панели с требованием сменить его после приемки.
