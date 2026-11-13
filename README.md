# CV — Patryk Jaseniuk

Źródłem prawdy jest **HTML + CSS**. Nie ma generatora treści ani Markdowna —
`index.html` i `en.html` to dokumenty CV, a `style.css` odpowiada za wygląd
ekranu i wydruku A4.

```
index.html    CV po polsku
en.html       CV po angielsku
style.css     wygląd: ekran + @media print
```

Strona: https://patrykjaseniuk.github.io/CV/

## Edycja

1. Zmień treść bezpośrednio w `index.html` (PL) i `en.html` (EN).
2. Układ i typografię zmieniasz w `style.css` — sekcja `@media print` rządzi PDF-em.
3. Commit + push. GitHub Actions publikuje stronę i drukuje PDF-y.

## PDF

PDF-y nie są trzymane w repo — powstają z tych samych stron przez wydruk w
headless Chrome. Lokalnie jednym poleceniem:

```bash
./pdf.sh        # _site/Patryk_Jaseniuk_CV_PL.pdf + _site/Patryk_Jaseniuk_CV_EN.pdf
```

To samo robi CI. Ręcznie, bez skryptu:

```bash
google-chrome --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf="$PWD/_site/Patryk_Jaseniuk_CV_PL.pdf" "file://$PWD/_site/index.html"

google-chrome --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf="$PWD/_site/Patryk_Jaseniuk_CV_EN.pdf" "file://$PWD/_site/en.html"
```

Podgląd: `_site/Patryk_Jaseniuk_CV_PL.pdf` i `..._EN.pdf` — każdy ma 1 stronę A4.

## CI

`.github/workflows/build.yml`: kopiuje `index.html`, `en.html`, `style.css` do
`_site/`, drukuje dwa PDF-y i publikuje `_site/` na GitHub Pages.

Strona i PDF korzystają z jednego `style.css`, więc nie ma dwóch źródeł prawdy
o wyglądzie.
