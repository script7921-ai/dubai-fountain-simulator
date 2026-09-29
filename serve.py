#!/usr/bin/env python3
"""Статический сервер с но-кешированием заголовков.

Обычный `python -m http.server` отдаёт 200 для index.html без ETag/Last-Modified,
поэтому WebView Chrome/Android агрессивно кэширует его и продолжает подгружать
старый (битый) JS-бандл даже после обновления релиза. Этот сервер добавляет
Cache-Control: no-store, чтобы браузер всегда забирал свежие файлы.
"""
import functools
import http.server
import os
import sys


class NoStoreHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


def main():
    port = int(os.environ.get("PORT", sys.argv[1] if len(sys.argv) > 1 else "8080"))
    root = os.path.dirname(os.path.abspath(__file__))
    handler = functools.partial(NoStoreHandler, directory=root)
    with http.server.ThreadingHTTPServer(("0.0.0.0", port), handler) as srv:
        print(f"Serving {root} at http://localhost:{port} (no-store headers)")
        try:
            srv.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
