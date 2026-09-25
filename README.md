# Dubai Fountain Digital Twin

Инженерный 3D-тренажер (Vite + TypeScript + Three.js): подводная пневмопушка ExtremeShooter и поворотный серво-модуль Oarsmen.

## Запуск
```bash
npm install
npm run dev   # http://localhost:5173
```

Управление: Space/FIRE — выстрел, C — CAD-разрез, B — Bloom, A — авто-шоу, R — сброс, стрелки — азимут/возвышение.

## Запуск на Android через Termux

Внутри Termux (репозиторий приватный — подставьте свой PAT):

```bash
pkg install -y curl jq git
curl -H "Authorization: Bearer ghp_ВАШ_ТОКЕН" \
  "https://api.github.com/repos/script7921-ai/dubai-fountain-simulator/contents/termux-setup.sh" \
  | jq -r .content | base64 -d > termux-setup.sh
GITHUB_TOKEN=ghp_ВАШ_ТОКЕН bash termux-setup.sh
```

Скрипт идемпотентен: ставит nodejs/esbuild через pkg, получает проект в `~/dubai-fountain-simulator` (git clone или докачка через GitHub API), выполняет `npm install` и запускает dev-сервер на `http://localhost:5173` (доступен и по Wi-Fi). Повторный запуск после перезагрузки телефона:

```bash
cd ~/dubai-fountain-simulator && npm run dev
```
