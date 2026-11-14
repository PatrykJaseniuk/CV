# CV — Patryk Jaseniuk

**Źródłem prawdy o treści jest Markdown:** `cv.md` (PL) i `cv.en.md` (EN).
Strony HTML są **ręczną transkrypcją** tych plików — przepisuje je agent, nie
skrypt. Dzięki temu układ może być bogatszy niż Markdown (chipsy technologii,
tabela umiejętności, kompozycja nagłówka), a treść pozostaje w jednym miejscu.

```
cv.md         źródło prawdy (PL)
cv.en.md      źródło prawdy (EN)
index.html    CV PL — transkrypcja cv.md
en.html       CV EN — transkrypcja cv.en.md
style.css     wygląd: ekran + @media print
pdf.sh        wydruk PDF z HTML (Chrome)
AGENTS.md     zasady aktualizacji (przeczytaj przed zmianą treści)
```

Strona: https://patrykjaseniuk.github.io/CV/

## Edycja

1. Zmień treść w `cv.md` i `cv.en.md` (oba języki razem).
2. Przepisz zmiany do `index.html` i `en.html`, zachowując układ.
3. `./pdf.sh` — sprawdź, że oba PDF-y to nadal jedna strona A4.
4. Commit + push; CI publikuje stronę i drukuje PDF-y.

Zasady i mapowanie Markdown → HTML: [AGENTS.md](AGENTS.md).

## PDF

PDF-y nie są trzymane w repo — powstają przez wydruk HTML-a w headless Chrome:

```bash
./pdf.sh        # _site/Patryk_Jaseniuk_CV_PL.pdf + _site/Patryk_Jaseniuk_CV_EN.pdf
```

Ręcznie, bez skryptu:

```bash
google-chrome --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf="$PWD/_site/Patryk_Jaseniuk_CV_PL.pdf" "file://$PWD/_site/index.html"

google-chrome --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf="$PWD/_site/Patryk_Jaseniuk_CV_EN.pdf" "file://$PWD/_site/en.html"
```

## CI

`.github/workflows/build.yml`: kopiuje `index.html`, `en.html`, `style.css` do
`_site/`, drukuje dwa PDF-y i publikuje `_site/` na GitHub Pages.
