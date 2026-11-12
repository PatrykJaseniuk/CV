# CV — Patryk Jaseniuk

Źródłem prawdy jest **Markdown**. Strona i PDF-y są generowane w CI — nie ma tu
żadnego frameworka, zależności npm ani ręcznie edytowanego HTML-a.

```
cv.pl.md          CV po polsku          ─┐
cv.en.md          CV po angielsku        ├─▶ build.mjs ─▶ dist/
style.css         wygląd (web + druk)   ─┘
build.mjs         generator (bez zależności)
```

## Wynik (`dist/`)

| Plik | Co to |
|---|---|
| `index.html` | strona CV PL |
| `en.html` | strona CV EN |
| `Patryk_Jaseniuk_CV_PL.pdf` | CV PL do wysłania |
| `Patryk_Jaseniuk_CV_EN.pdf` | CV EN do wysłania |

Strona: https://patrykjaseniuk.github.io/CV/

## Edycja

1. Zmień `cv.pl.md` i/lub `cv.en.md`.
2. `node build.mjs --pdf` (albo sam `node build.mjs` dla HTML).
3. Commit + push — GitHub Actions robi build i publikuje `dist/` na Pages.

## Build

```bash
node build.mjs          # tylko HTML  → dist/
node build.mjs --pdf    # HTML + PDF  → dist/ (wymaga Chrome/Chromium)
```

Generator obsługuje podzbiór Markdowna, którego używa CV: `#`–`###`, listy `-`,
`**pogrubienie**`, `*kursywa*`, `` `kod` ``, `[link](https://…)` oraz `---`.
PDF powstaje przez wydruk tej samej strony w headless Chrome, więc układ zależy
wyłącznie od `style.css` (`@media print`).

`CHROME_BIN` pozwala wskazać przeglądarkę, jeśli `google-chrome` nie jest w PATH.

## CI

`.github/workflows/build.yml`: push na `main` → `node build.mjs --pdf` →
`dist/` jako artefakt Pages → deploy.
