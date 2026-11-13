#!/usr/bin/env bash
# Drukuje CV do PDF (A4) — dokładnie te same polecenia, których używa CI.
#
#   ./pdf.sh
#
# Wynik: _site/Patryk_Jaseniuk_CV_PL.pdf i _site/Patryk_Jaseniuk_CV_EN.pdf
# Wymaga Chrome/Chromium; można wskazać binarkę przez CHROME_BIN.

set -euo pipefail
cd "$(dirname "$0")"

CHROME="${CHROME_BIN:-}"
if [ -z "$CHROME" ]; then
  for candidate in google-chrome google-chrome-stable chromium chromium-browser; do
    if command -v "$candidate" >/dev/null 2>&1; then
      CHROME="$candidate"
      break
    fi
  done
fi
if [ -z "$CHROME" ]; then
  echo "Brak Chrome/Chromium — ustaw CHROME_BIN." >&2
  exit 1
fi

mkdir -p _site
cp index.html en.html style.css _site/

print() {
  "$CHROME" --headless=new --disable-gpu --no-sandbox \
    --no-pdf-header-footer --virtual-time-budget=3000 \
    --print-to-pdf="$PWD/_site/$1" "file://$PWD/_site/$2"
}

print Patryk_Jaseniuk_CV_PL.pdf index.html
print Patryk_Jaseniuk_CV_EN.pdf en.html

echo "Gotowe: _site/Patryk_Jaseniuk_CV_PL.pdf, _site/Patryk_Jaseniuk_CV_EN.pdf"
