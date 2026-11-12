# Patryk Jaseniuk

**Fullstack (Full Stack) TypeScript Developer**

React · Node · agenci LLM · programowanie funkcyjne

Wrocław, Polska (praca zdalna lub hybrydowa) · patryk.jaseniuk@gmail.com · [linkedin.com/in/patryk-jaseniuk](https://www.linkedin.com/in/patryk-jaseniuk-929136161/) · [github.com/PatrykJaseniuk](https://github.com/PatrykJaseniuk)

Polski — ojczysty · Angielski — B2 (swobodna praca z dokumentacją techniczną)

## Profil

Fullstack developer specjalizujący się w TypeScript: React, Next.js i Astro na froncie, Node.js i PostgreSQL/Supabase w warstwie danych, testy i CI/CD wokół całości. Piszę funkcyjnie — niemutowalne dane, funkcje wyższego rzędu. Od 2025 roku rozwijam oprogramowanie z agentami LLM: piszę kontrakty, które agent może wykonać, i bramki, których nie może obejść. Silnik fizyki w sailing-sim napisałem ręcznie, bez agenta.

**W skrócie:** 25 pakietów w pipeline agenta · 200+ testów w szablonie fullstack · ~12 tys. linii TS na parys.nysa.pl

## Doświadczenie

### Programista Fullstack / Frontend — projekty własne i zlecenia
*2022 – obecnie*

- Projektuję i wdrażam aplikacje webowe end-to-end: model danych, API i warstwa dostępu, UI, testy, CI/CD, publikacja.
- Utrzymuję je po wdrożeniu — migracje bazy, aktualizacje zależności, audyty Lighthouse, poprawki dostępności.
- Pracuję bezpośrednio z właścicielem produktu: zbieram wymagania, ustalam zakres i samodzielnie dowożę release.
- Rozwijam projekty z agentami LLM: kontrakty w `AGENTS.md`, MCP, skille i weryfikacja przez testy oraz CI.

## Projekty

### ts-fullstack-template — szablon aplikacji fullstack na React + Supabase

*2026* · `React 18` · `TypeScript` · `Vite` · `TanStack Router/Query` · `Supabase` · `PostgreSQL RLS` · `Vitest` · `Playwright` · `pgTAP` · [Kod](https://github.com/PatrykJaseniuk/ts-fullstack-template)

Szablon aplikacji pełnostackowej bez własnego serwera: przeglądarka rozmawia bezpośrednio z Supabase, a jedyną warstwą autoryzacji jest PostgreSQL Row Level Security.

- Zaprojektowałem i napisałem backend: 7 tabel, 30 polityk RLS, 10 widoków `security_invoker`, triggery i funkcje pomocnicze; rola użytkownika trafia do nieedytowalnego claimu JWT przez `custom_access_token_hook`.
- Rozdzieliłem frontend na warstwy `pages` → `masterComponents` → `slaveComponents` → `generic` i wymusiłem reguły importów w ESLintcie; styl funkcyjny (bez mutacji, `fp-ts`, `zod`, `ts-pattern`) egzekwuje `eslint-plugin-functional`.
- Zbudowałem piramidę testów (ponad 200 przypadków Vitest, 15 stories z a11y, Playwright, 14 plików pgTAP) i CI w GitHub Actions: 7 zadań od lintu po publikację na Pages.

### pkg-builder — warsztat budowania pakietów ze źródeł, prowadzony przez agenta LLM

*2026* · `Bash` · `AGENTS.md` · `DSH` · `Linux` · `XDG` · [Kod](https://github.com/PatrykJaseniuk/pkg-builder)

Projekt, w którym agent LLM sam doprowadza oprogramowanie od repozytorium do działającej aplikacji: 25 pakietów doprowadzonych do działających launcherów (m.in. Blender, GIMP, Unreal Engine, Wine/DXVK, PostgreSQL, ffmpeg) — od kompilacji ze źródeł po przypięte binaria.

- Napisałem kontrakt `AGENTS.md` jako samowystarczalny seed: pusty katalog + ten plik wystarczą, żeby agent odtworzył cały workspace, wygenerował skrypty i przeprowadził health check.
- Zaprojektowałem model funkcyjny zamiast listy kroków: DAG wartości (`repo → source → build`) i funkcji, które je produkują; wartości są niemutowalne, generatory atomowe i idempotentne, a poprawka to nowa wartość, nigdy edycja w miejscu.
- Wymusiłem audytowalność: 55 skryptów z obowiązującymi nagłówkami kontraktu (`produces`, `consumes`, `deps`, `pinned`), 62 raporty jako pamięć procesu, lint spójności, pinowanie tagów i sum SHA oraz brak eskalacji uprawnień.
- Efekt: 8 natywnych launcherów (`bin/` + menu XDG) — w tym samo DSH zbudowane tym warsztatem.

### parys-web — strona i typowany model danych dla Sport Studio Parys

*2026* · `Astro 5` · `TypeScript` · `Tailwind CSS 4` · `Pages CMS` · `GitHub Actions` · [Kod](https://github.com/PatrykJaseniuk/parys-web) · [Wdrożenie](https://parys.nysa.pl)

Witryna siłowni (karnety, strefy, zajęcia, trenerzy, kontakt) zbudowana wokół jednego typowanego modelu danych — ok. 12 tys. linii TypeScript i Astro.

- Zaprojektowałem architekturę warstwową, w której numer katalogu wyznacza dozwolony kierunek importów; rdzeń modelu nie ma zależności zewnętrznych i jest konsumowany przez stronę oraz cennik A4 (PDF + HTML).
- Zbudowałem CMS: pliki JSON edytowane w Pages CMS przechodzą walidację i generację do typowanych modułów, a workflow GitHub Actions commituje model i wykrywa rozjazd w CI.
- Dodałem bramkę jakości przy każdym buildzie (spójność powiązań encji z plikami, istnienie assetów, zgodność wersji, blokada publikacji) oraz audyt Lighthouse; wdrożenie na GitHub Pages z własną domeną.

### sailing-sim — silnik fizyki i symulator żaglowca 2D

*2022 – 2024* · `TypeScript` · `Next.js` · `Three.js` · `Jest` · `GitHub Actions` · [Kod](https://github.com/PatrykJaseniuk/sailing-sim) · [Dokumentacja](https://patrykjaseniuk.github.io/StatkiTSDocs/)

**Projekt napisany w całości ręcznie — bez agenta LLM.** Symulator czasu rzeczywistego: gracz steruje żaglami i sterem, a statek porusza się pod wpływem sił generowanych przez wiatr i wodę.

- Zbudowałem własny silnik fizyki w czystym TypeScript (bez gotowej biblioteki fizycznej): kadłub i żagle jako bryły z trójkątów połączonych sprężynami (soft-body), siły aerodynamiczne i hydrodynamiczne, tarcie, kolizje oraz ruch obrotowy.
- Zaprojektowałem pętlę symulacji ze stałym krokiem całkowania i separacją elementów świata od warstwy widoku; rendering oparty na Three.js.
- Pokryłem silnik 55 testami jednostkowymi w 13 zestawach (Jest) i opisałem model w 13 rozdziałach dokumentacji technicznej.

## Agenci LLM

- **Spec-driven development:** w ts-fullstack-template i parys-web utrzymuję `AGENTS.md` jako jedyne źródło zasad dla ludzi i agentów (700 linii); w pkg-builderze to samowystarczalny seed całego workspace. Typy, lint i CI egzekwują te zasady niezależnie od tego, kto pisze kod.
- **Pętla agenta:** plan → generacja → weryfikacja → raport. Wymuszam atomowość i idempotencję, pinowanie wejść i audyt każdej operacji — agent ma powtarzalny, sprawdzalny proces, a nie serię improwizacji.
- **Architektura agenta-redaktora treści** (specyfikacja w parys-web): LLM + Telegram Bot API edytuje repozytorium przez allow-listę plików, na gałęzi i przez PR, z bramkami `astro check` i buildem, akceptacją człowieka w czacie i kontenerem per repo.
- **Narzędzia:** konfiguruję MCP (Storybook `addon-mcp`, Supabase MCP, serwery MCP w edytorze) i korzystam ze skilli agentowych (`SKILL.md`) jako nośnika wiedzy domenowej.
- **Weryfikacja zamiast zaufania:** zmianę od agenta sprawdzam testami, typami i CI; agent nie publikuje bez zielonych bramek — to warunek bezpiecznej autonomii.
- **Preferowany stack agentowy:** DSH (mój ulubiony harness), DeepSeek v4.1-Flash, lokalnie Qwen 3.8.

## Umiejętności

**Języki:** TypeScript, JavaScript (ES2022+), SQL, Python, Bash, C/C++, Java, C#

**Paradygmat:** programowanie funkcyjne — niemutowalne dane, funkcje wyższego rzędu, kompozycja, unikanie efektów ubocznych; `fp-ts`, `zod`, `ts-pattern`, `eslint-plugin-functional`

**Frontend:** React 18, Next.js, Astro 5, TanStack Router i Query, Tailwind CSS, HTML/CSS, Three.js, Pixi.js, Storybook

**Backend i dane:** Node.js, Supabase, PostgreSQL (RLS, widoki, triggery, pgTAP), PostgREST, REST API, Prisma

**Agenci LLM:** spec-driven development, `AGENTS.md`, MCP, skille agentowe, DSH, DeepSeek v4.1-Flash, Qwen 3.8 (lokalnie), projektowanie pętli agenta i guardraili, human-in-the-loop, weryfikacja przez testy i CI

**Testy i jakość:** Vitest, Jest, React Testing Library, Playwright, Storybook a11y, Lighthouse, TDD

**Narzędzia:** Git, GitHub Actions, Vite, Docker, Make, ESLint, Pages CMS

## Edukacja

**Informatyka — Państwowa Akademia Nauk Stosowanych w Nysie (PANS)**
*2019 – 2023*

Algorytmy i struktury danych · programowanie obiektowe · bazy danych i SQL · sieci komputerowe · inżynieria oprogramowania.

*Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji, zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).*
