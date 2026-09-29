#!/data/data/com.termux/files/usr/bin/bash
# ============================================================================
#  Dubai Fountain Digital Twin — установка ОДНИМ скриптом в Termux (Android)
# ----------------------------------------------------------------------------
#  Использование на телефоне (в Termux):
#
#    pkg install -y curl git && \
#    bash <(curl -fsSL https://raw.githubusercontent.com/script7921-ai/dubai-fountain-simulator/main/install-termux.sh)
#
#  Или, если у вас уже есть скачанный dubai-fountain-release.zip:
#
#    bash install-termux.sh /storage/downloads/dubai-fountain-release.zip
#
#  Скрипт сам ставит зависимости (python, unzip), распаковывает релиз и
#  запускает локальный сервер. Node.js НЕ требуется.
#  Повторный запуск просто перезапускает сервер.
# ============================================================================
set -euo pipefail

OWNER="script7921-ai"
REPO="dubai-fountain-simulator"
BRANCH="${BRANCH:-main}"
PORT="${PORT:-8080}"
PROJECT_DIR="${PROJECT_DIR:-$HOME/dubai-fountain}"
ZIP_URL="https://github.com/${OWNER}/${REPO}/releases/latest/download/dubai-fountain-release.zip"
RAW_ZIP="https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/dubai-fountain-release.zip"

info() { printf '\033[1;36m[install]\033[0m %s\n' "$*"; }
warn() { printf '\033[1;33m[warn  ]\033[0m %s\n' "$*"; }
die()  { printf '\033[1;31m[error ]\033[0m %s\n' "$*" >&2; exit 1; }

# --- 1. Зависимости ----------------------------------------------------------
have_pkg() { command -v "$1" >/dev/null 2>&1; }

if have_pkg pkg; then
  info "Обновляем пакеты Termux..."
  pkg update -o Dpkg::Options::="--force-confnew" -y >/dev/null 2>&1 || true
  need_pkgs=()
  have_pkg python || have_pkg busybox || need_pkgs+=(python)
  have_pkg curl   || need_pkgs+=(curl)
  if ! have_pkg unzip && ! have_pkg python; then
    need_pkgs+=(unzip)
  fi
  if [ ${#need_pkgs[@]} -gt 0 ]; then
    info "Устанавливаем: ${need_pkgs[*]}"
    pkg install -y "${need_pkgs[@]}"
  fi
else
  warn "pkg не найден — предполагаем, что зависимости (python/unzip/curl) уже установлены."
fi

# --- 2. Получаем релиз -------------------------------------------------------
verify_zip() {
  if have_pkg unzip; then unzip -tq "$1" >/dev/null 2>&1
  elif have_pkg python; then python -c "import zipfile,sys; z=zipfile.ZipFile(sys.argv[1]); sys.exit(0 if z.testzip() is None else 1)" "$1" >/dev/null 2>&1
  else return 0; fi
}

TMP_ZIP="$(mktemp /tmp/df-release-XXXXXX.zip)"
cleanup() { rm -f "$TMP_ZIP"; }
trap cleanup EXIT

if [ $# -ge 1 ] && [ -f "$1" ]; then
  info "Используем локальный архив: $1"
  TMP_ZIP="$1"
  trap - EXIT
else
  info "Пробуем скачать релизный zip (GitHub Release)..."
  if ! curl -fsSL -L -o "$TMP_ZIP" "$ZIP_URL" 2>/dev/null || ! verify_zip "$TMP_ZIP"; then
    warn "Release-архив недоступен, пробуем файл из ветки ${BRANCH}..."
    curl -fsSL -L -o "$TMP_ZIP" "$RAW_ZIP" || die "Не удалось скачать dubai-fountain-release.zip. Скачайте его вручную и запустите: bash install-termux.sh путь/к/dubai-fountain-release.zip"
  fi
  verify_zip "$TMP_ZIP" || die "Скачанный файл повреждён или не является zip-архивом."
fi

# --- 3. Распаковка -----------------------------------------------------------
info "Распаковываем в $PROJECT_DIR ..."
rm -rf "$PROJECT_DIR"
mkdir -p "$(dirname "$PROJECT_DIR")"
if have_pkg unzip; then
  unzip -q "$TMP_ZIP" -d "$(dirname "$PROJECT_DIR")"
elif have_pkg python; then
  python -m zipfile -e "$TMP_ZIP" "$(dirname "$PROJECT_DIR")"
else
  die "Нет ни unzip, ни python для распаковки архива."
fi
[ -d "${PROJECT_DIR}" ] || mv "$(dirname "$PROJECT_DIR")/dubai-fountain" "$PROJECT_DIR" 2>/dev/null || die "В архиве нет каталога dubai-fountain/"
chmod +x "$PROJECT_DIR/run.sh" 2>/dev/null || true

# --- 4. Запуск ---------------------------------------------------------------
cd "$PROJECT_DIR"
if command -v python >/dev/null 2>&1; then
  SERVER=(python -m http.server "$PORT" --bind 0.0.0.0)
elif command -v busybox >/dev/null 2>&1; then
  SERVER=(busybox httpd -f -p "$PORT" -h .)
else
  die "Не найдены python/busybox для запуска HTTP-сервера."
fi

echo
echo "============================================================"
echo " Dubai Fountain Digital Twin установлен и запускается"
echo " Откройте в браузере телефона: http://localhost:${PORT}"
echo " Другое устройство в сети:     http://$(ip -4 addr show wlan0 2>/dev/null | awk '/inet /{print $2}' | cut -d/ -f1 || echo '<ip-телефона>'):${PORT}"
echo " Остановка сервера: Ctrl+C"
echo " Следующий запуск без переустановки:  bash ~/dubai-fountain/run.sh"
echo "============================================================"
echo
exec "${SERVER[@]}"
