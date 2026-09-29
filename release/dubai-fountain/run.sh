#!/data/data/com.termux/files/usr/bin/bash
# Запуск Dubai Fountain Digital Twin в Termux (без установки Node.js)
set -e
cd "$(dirname "$0")"
PORT="${PORT:-8080}"
if command -v python >/dev/null 2>&1; then
  SERVER="python -m http.server $PORT --bind 0.0.0.0"
elif command -v busybox >/dev/null 2>&1; then
  SERVER="busybox httpd -f -p $PORT -h ."
else
  echo "Не найден python или busybox. Установите: pkg install -y python"
  exit 1
fi
echo "============================================================"
echo " Dubai Fountain Digital Twin запущен"
echo " Откройте в браузере телефона: http://localhost:$PORT"
echo " (или http://$(hostname -I 2>/dev/null | awk '{print $1}' || echo 127.0.0.1):$PORT с других устройств)"
echo " Остановка: Ctrl+C"
echo "============================================================"
exec $SERVER
