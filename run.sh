#!/usr/bin/env bash
# Запуск Dubai Fountain Digital Twin в Termux/Android.
# Использует serve.py (Cache-Control: no-store), чтобы WebView не держал
# старый кэшированный index.html и не подгружал устаревший JS-бандл.
set -e
cd "$(dirname "$0")"
PORT="${PORT:-8080}"

if command -v python >/dev/null 2>&1 && [ -f serve.py ]; then
  exec python serve.py "$PORT"
elif command -v python3 >/dev/null 2>&1 && [ -f serve.py ]; then
  exec python3 serve.py "$PORT"
elif command -v python >/dev/null 2>&1; then
  exec python -m http.server "$PORT" --bind 0.0.0.0
elif command -v busybox >/dev/null 2>&1; then
  exec busybox httpd -f -p "$PORT" -h .
else
  echo "Не найдены python/busybox для запуска HTTP-сервера." >&2
  exit 1
fi
