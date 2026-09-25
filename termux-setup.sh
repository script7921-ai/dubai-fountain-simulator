#!/data/data/com.termux/files/usr/bin/bash
# ============================================================================
#  Dubai Fountain Digital Twin — установка и запуск в Termux (Android)
# ----------------------------------------------------------------------------
#  Использование (на телефоне, внутри Termux):
#
#    pkg install -y curl git && \
#    bash <(curl -fsSL https://raw.githubusercontent.com/script7921-ai/dubai-fountain-simulator/main/termux-setup.sh)
#
#  Скрипт идемпотентен: повторный запуск просто перезапустит dev-сервер.
#  Все данные складываются в ~/dubai-fountain-simulator
# ============================================================================
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/script7921-ai/dubai-fountain-simulator.git}"
PROJECT_DIR="${PROJECT_DIR:-$HOME/dubai-fountain-simulator}"
PORT="${PORT:-5173}"

info() { printf '\033[1;36m[setup]\033[0m %s\n' "$*"; }
warn() { printf '\033[1;33m[warn ]\033[0m %s\n' "$*"; }
die()  { printf '\033[1;31m[error]\033[0m %s\n' "$*" >&2; exit 1; }

# ---------------------------------------------------------------------------
# 1. Пакеты Termux
# ---------------------------------------------------------------------------
if ! command -v pkg >/dev/null 2>&1; then
  die "Запускайте скрипт внутри Termux (pkg не найден)."
fi

info "Обновляем список пакетов и ставим зависимости (nodejs, git, curl, proot-distro)..."
export DEBIAN_FRONTEND=noninteractive
yes | pkg update -o Acquire::AllowInsecureRepositories=true || pkg update -y || true
yes | pkg upgrade -y || true
yes | pkg install -y nodejs git curl tar wget proot-distro openssh || \
  die "Не удалось установить пакеты. Проверьте интернет и повторите запуск."

NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]' 2>/dev/null || echo 0)"
if [ "$NODE_MAJOR" -lt 18 ]; then
  die "Требуется Node.js >= 18 (Vite 5). Установлено: $(node -v)"
fi
info "Node.js: $(node -v), npm: $(npm -v)"

# ---------------------------------------------------------------------------
# 2. Клонирование / обновление репозитория
# ---------------------------------------------------------------------------
if [ -d "$PROJECT_DIR/.git" ]; then
  info "Репозиторий уже клонирован — обновляем до последней версии..."
  cd "$PROJECT_DIR"
  git fetch origin main
  # выбрасываем локальные правки, если они мешают fast-forward
  git checkout -f main
  git reset --hard origin/main
elif [ -d "$PROJECT_DIR" ]; then
  warn "$PROJECT_DIR существует, но это не git-репозиторий. Переименовываю в ${PROJECT_DIR}.bak"
  mv "$PROJECT_DIR" "${PROJECT_DIR}.bak"
  git clone "$REPO_URL" "$PROJECT_DIR"
  cd "$PROJECT_DIR"
else
  info "Клонируем $REPO_URL ..."
  git clone "$REPO_URL" "$PROJECT_DIR"
  cd "$PROJECT_DIR"
fi

# Если git clone не дал кода (например, репозиторий приватный) —
# пробуем скачать дерево файлов через GitHub API напрямую.
if [ ! -f src/main.ts ]; then
  warn "src/main.ts отсутствует после clone — пробуем выгрузку через GitHub API..."
  OWNER_REPO="${GH_OWNER_REPO:-script7921-ai/dubai-fountain-simulator}"
  REF="${GH_REF:-main}"
  AUTH_HEADER=""
  if [ -n "${GITHUB_TOKEN:-}" ]; then
    AUTH_HEADER="Authorization: Bearer $GITHUB_TOKEN"
  fi
  TREE_JSON="$(curl -fsSL ${AUTH_HEADER:+-H "$AUTH_HEADER"} \
    "https://api.github.com/repos/$OWNER_REPO/git/trees/$REF?recursive=1")" || TREE_JSON=""
  if [ -z "$TREE_JSON" ]; then
    die "Не удалось получить список файлов ни через clone, ни через API.
     Варианты:
       1) сделайте репозиторий публичным;
       2) запустите со своим PAT:
          GITHUB_TOKEN=ghp_xxx bash termux-setup.sh"
  fi
  # качаем все текстовые файлы проекта (кроме node_modules/dist/.git)
  echo "$TREE_JSON" | node -e '
    let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{
      const t=JSON.parse(s);
      for(const e of t.tree||[])
        if(e.type==="blob" && !/^(node_modules|dist|\.git)/.test(e.path)) console.log(e.path);
    });' | while IFS= read -r F; do
      mkdir -p "$(dirname "$F")"
      curl -fsSL ${AUTH_HEADER:+-H "$AUTH_HEADER"} -o "$F" \
        "https://raw.githubusercontent.com/$OWNER_REPO/$REF/$F" || warn "пропуск $F"
    done
fi

if [ ! -f src/main.ts ]; then
  die "В репозитории так и не найден src/main.ts. Проверьте содержимое ветки main
     на github.com или передайте GITHUB_TOKEN для приватного доступа."
fi

# ---------------------------------------------------------------------------
# 3. Настройка под Termux
#    (esbuild из npm в Termux не работает — ставим системный pkg esbuild)
# ---------------------------------------------------------------------------
if command -v esbuild >/dev/null 2>&1; then
  info "Системный esbuild найден: $(esbuild --version)"
  export ESBUILD_BINARY_PATH="$(command -v esbuild)"
else
  info "Ставим системный esbuild через pkg (совместим с Android/bionic)..."
  yes | pkg install -y esbuild || warn "pkg esbuild недоступен — vite будет пробовать npm-версию"
  if command -v esbuild >/dev/null 2>&1; then
    export ESBUILD_BINARY_PATH="$(command -v esbuild)"
  fi
fi

# Persist ESBUILD_BINARY_PATH в ~/.bashrc, чтобы `npm run dev` работал и в новых сессиях
if [ -n "${ESBUILD_BINARY_PATH:-}" ] && ! grep -q ESBUILD_BINARY_PATH "$HOME/.bashrc" 2>/dev/null; then
  echo "export ESBUILD_BINARY_PATH=$ESBUILD_BINARY_PATH" >> "$HOME/.bashrc"
  info "ESBUILD_BINARY_PATH записан в ~/.bashrc"
fi

info "Обновляем vite.config.ts (host, PORT, allowedHosts)..."
cat > vite.config.ts <<'EOF'
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: Number(process.env.PORT ?? 5173),
    host: true,          // доступ по Wi-Fi с других устройств
    strictPort: false,
    allowedHosts: true,  // разрешаем tunnel-домены (loca.lt и т.п.)
  },
  build: {
    target: 'es2020',
    sourcemap: true,
  },
});
EOF

# ---------------------------------------------------------------------------
# 4. npm install
# ---------------------------------------------------------------------------
info "npm install (на телефоне может занять несколько минут)..."
cd "$PROJECT_DIR"
npm config set fund false optional false || true
# sharp/rollup нативные опции нам не нужны; three/chart.js/vite/tailwind — чистый JS+WASM
npm install --no-audit --no-fund || {
  warn "Первая попытка npm install упала, повторяем с --force..."
  npm install --force --no-audit --no-fund
}

# ---------------------------------------------------------------------------
# 5. Запуск dev-сервера
# ---------------------------------------------------------------------------
cat <<BANNER

  ============================================================
   Dubai Fountain Digital Twin готов к запуску!
  ============================================================

  Локально на телефоне:   http://localhost:${PORT}
  По Wi-Fi (с ПК):        http://$(ip -4 addr show wlan0 2>/dev/null | awk '/inet /{print $2}' | cut -d/ -f1 || hostname -I 2>/dev/null | awk '{print $1}'):${PORT}
  (если IP пустой — наберите ifconfig wlan0)

  Команды:
    cd ~/dubai-fountain-simulator
    npm run dev        # dev-сервер (HMR)
    npm run build      # прод-сборка в dist/
    npm run preview    # раздать собранную версию

  Управление симулятором: Space/FIRE — выстрел, C — CAD-разрез,
  B — Bloom, A — авто-шоу, R — сброс камеры.

  Не забудьте: Termux держит экран активным командой
    termux-wake-lock
  и возвращайтесь сюда же после сна телефона через
    cd ~/dubai-fountain-simulator && npm run dev
  ============================================================

BANNER

read -r -p "Запустить dev-сервер прямо сейчас? [Y/n] " ANSWER || ANSWER=Y
case "${ANSWER:-Y}" in
  [Yy]*) exec npx vite --host --port "$PORT" ;;
  *)     info "Запуск позже: cd $PROJECT_DIR && npm run dev" ;;
esac
