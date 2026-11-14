# AGENTS.md — zasady utrzymania CV

Ten plik opisuje, jak aktualizować CV w tym repozytorium. Czytaj go przed każdą
zmianą treści.

## Model pracy

```
cv.md       (PL)  ─┐
                   ├─ źródło prawdy o treści
cv.en.md    (EN)  ─┘

index.html  (PL)  ─┐
                   ├─ ręczna transkrypcja przez agenta (bez skryptu)
en.html     (EN)  ─┘

style.css          wygląd: ekran + @media print
pdf.sh             wydruk PDF z HTML (Chrome), nie jest generatorem treści
```

**Nie ma generatora Markdown → HTML.** HTML jest przepisywany ręcznie, żeby
zachować swobodę układu (chipsy technologii, tabela umiejętności, kompozycja
nagłówka), której czysty Markdown nie wyraża.

## Kolejność zmian

1. Zmień treść w `cv.md` i `cv.en.md` (oba języki w tym samym commicie).
2. Przepisz zmiany do `index.html` i `en.html` — ręcznie, zachowując istniejący układ.
3. `./pdf.sh` i sprawdź, że oba PDF-y mają nadal **jedną stronę A4**.
4. Commit + push. GitHub Actions publikuje stronę i drukuje PDF-y.

## Twarde zasady

- **Fakty tylko z Markdowna.** HTML nie może wprowadzać nowych faktów (liczb,
  dat, technologii, linków), których nie ma w `cv.md` / `cv.en.md`.
  Jeśli HTML i Markdown się różnią — popraw HTML, nie Markdown.
- **Nie dodawaj generatora.** Żadnego `build.mjs`, `md → html`, szablonów ani
  zależności npm. To świadoma decyzja: elastyczność układu > automatyzacja.
- **Liczby muszą zgadzać się co do znaku** w obu miejscach: 30 polityk RLS,
  10 widoków `security_invoker`, 200+ testów, 8 E2E, 12 pgTAP, 15 Storybook,
  7 zadań CI, 13 zestawów Jest, 13 rozdziałów dokumentacji, Lighthouse
  100/100/100/100.
- **Linki** w HTML prowadzą do tych samych adresów co w Markdownie i działają
  (Parys, ts-fullstack-template, pkg-builder AGENTS.md, sailing-sim + docs).
- **Bez telefonu i bez LinkedIna** — świadoma decyzja właściciela CV.
- **PDF-y nie są commitowane.** `_site/` jest w `.gitignore`; PDF powstaje
  w CI i lokalnie z `./pdf.sh`.

## Mapowanie Markdown → HTML

| Markdown | HTML |
|---|---|
| `# Imię Nazwisko` | `h1` w `.identity` |
| akapit `**Rola**` | `p.role` |
| linia specjalizacji | `p.specialization` |
| kontakt (3 linie) | `.contact p` |
| `## Sekcja` | `h2` |
| `### Wpis` | `h3` |
| `*rok* · technologia · [link]` | `p.project-meta` |
| lista `-` | `ul > li` |
| `**Etykieta:** treść` w Umiejętnościach | `dl.skills div.row` (dt/dd) |
| Edukacja | `.education` |
| `*kursywa*` | `em` |

## Checklista przed commitem

- [ ] `cv.md` i `cv.en.md` opisują ten sam stan faktyczny
- [ ] `index.html` i `en.html` przepisane z Markdowna
- [ ] `./pdf.sh` daje 1 stronę A4 w PL i EN
- [ ] linki klikalne i poprawne
- [ ] brak telefonu i LinkedIna
