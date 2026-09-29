DUBAI FOUNTAIN DIGITAL TWIN — релиз для Termux (Android)
=========================================================

СПОСОБ 1 (рекомендуется, не требует Node.js):
  1. pkg install -y python unzip
  2. cd ~/downloads && unzip dubai-fountain-release.zip
     (или куда скачали — затем: cd dubai-fountain)
  3. bash run.sh
  4. Откройте в браузере телефона: http://localhost:8080

СПОСОБ 2 (через termux-setup.sh, полная dev-среда с hot-reload):
  pkg install -y curl git && \
  bash <(curl -fsSL https://raw.githubusercontent.com/script7921-ai/dubai-fountain-simulator/main/termux-setup.sh)

Если WebGL-сцена тормозит, в настройках симуляции уменьшите качество
(низкое число частиц / разрешение рендера).

Остановка сервера: Ctrl+C. Порт меняется так: PORT=9000 bash run.sh
