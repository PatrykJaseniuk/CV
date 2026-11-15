# Patryk Jaseniuk

**Fullstack TypeScript Developer**

React · Next.js · Astro · PostgreSQL/Supabase · testy i CI/CD

Wrocław, Polska · praca zdalna lub hybrydowa
patryk.jaseniuk@gmail.com
[github.com/PatrykJaseniuk](https://github.com/PatrykJaseniuk)

## Profil

Fullstack TypeScript Developer: React, Next.js, Astro oraz PostgreSQL/Supabase. Ulubiony paradygmat programowania: funkcyjny — niemutowalność, kompozycja funkcji i kontrolowane efekty uboczne. Od 2022 roku buduję aplikacje end-to-end z testami i CI/CD; z agentami LLM pracuję spec-driven, weryfikując zmiany typowaniem i testami.

## Wybrane projekty własne

### parys — strona web i materiały drukowane dla siłowni generowane z jednego źródła

*2026* · Projekt komercyjny · Astro 5 · TypeScript · Tailwind CSS 4 · Pages CMS · GitHub Actions · [Wdrożenie](https://parys.nysa.pl) · [Kod](https://github.com/PatrykJaseniuk/parys-web)

- Zdefiniowano ustrukturyzowany model biznesowy jako jedyne źródło prawdy: strefy, karnety, zajęcia, trenerzy i usługi zapisane w JSON; strona i materiały drukowane generowane z tego modelu.
- Edycja danych przez Pages CMS — CMS oparty na gicie i GitHub Actions.
- Bez serwera: w pełni statyczna, lekka i szybka strona; zerowe koszty utrzymania; walidacja w CI. Lighthouse: 100/100/100/100.

### ts-fullstack-template — aplikacja fullstack w domenie biznesowej: zarządzanie najmem nieruchomości

*2026* · React 18 · TypeScript · TanStack Router/Query · PostgreSQL RLS · Vitest · Playwright · [Wdrożenie](https://patrykjaseniuk.github.io/ts-fullstack-template/) · [Kod](https://github.com/PatrykJaseniuk/ts-fullstack-template)

- CI/CD: GitHub Actions na push i PR do `main`, 7 zadań (lint, typy, `tsc`, Vitest, deploy) — frontend na GitHub Pages, backend na Supabase; lokalny cykl przez `Makefile`.
- Backend: Supabase (Postgres + PostgREST): 7 tabel, 12 kluczy obcych, 7 typów ENUM, 12 ograniczeń CHECK/UNIQUE, 13 funkcji, 15 triggerów, 30 polityk RLS. Claim `user_role` z `custom_access_token_hook`; role admin/landlord/tenant; 10 widoków `security_invoker` (salda i wyciągi na funkcjach okna); typowane API `createClient<Database>`.
- Frontend: React 18 + Vite, TanStack Router (hash history) i Query; warstwy pages → masterComponents → slaveComponents z bezdomenowym `generic/`. Hooki list/CRUD: debounce 300 ms, sortowanie, paginacja PostgREST (`.range()`, 20 wierszy); cache `staleTime` 30 s, invalidacja po mutacjach.
- LLM: reguły z `AGENTS.md` egzekwowane przez ESLint (`functional/*`, zakaz `if`/`switch`/`enum`/`let`/`throw`, granice importów, `no-floating-promises`) i strict TS (`noUncheckedIndexedAccess`).
- 245 testów Vitest (29 plików), 8 E2E, 13 pgTAP, 15 Storybook (21 `play`, a11y).

### pkg-builder — system budowania oprogramowania z kodu źródłowego oparty na agencie LLM

*2026* · AGENTS.md · agenci LLM · spec-driven development · DAG · [AGENTS.md](https://github.com/PatrykJaseniuk/pkg-builder/blob/main/AGENTS.md)

- Agent zdefiniowany w całości w `AGENTS.md`; pisze wyłącznie w `functions/`, a artefakty pakietu (`values/`) są tylko do odczytu.
- Warstwy 0-repogit → 1-source → 2-build generują artefakty, a 3-launch uruchamia proces.
- Budowa rekurencyjna: brakująca zależność → instalacja → kolejne warstwy, aż do właściwej konfiguracji i kompletu zależności.

### sailing-sim — silnik fizyki i symulator żaglowca 2D

*2022–2024* · matematyka · fizyka · TypeScript · Next.js · Three.js · Jest · [Kod](https://github.com/PatrykJaseniuk/sailing-sim) · [Wdrożenie](https://patrykjaseniuk.github.io/StatkiTSDocs/)

- Zaimplementowałem własny model dynamiki soft-body: sprężyny, siły aerodynamiczne i hydrodynamiczne, ruch obrotowy oraz stały krok całkowania. Widok oparłem na Three.js, a detekcję kolizji na detect-collisions/SAT.
- Model jest oddzielony od widoku; 13 zestawów Jest i 13 rozdziałów dokumentacji technicznej.

## Umiejętności

**Frontend:** React 18, Next.js, Astro 5, TanStack Router i Query, Tailwind CSS, HTML/CSS, Three.js, Storybook

**Backend i dane:** Node.js, PostgreSQL, Supabase, REST API, PostgREST, RLS, widoki, triggery, pgTAP

**Testy i CI/CD:** Vitest, Jest, React Testing Library, Playwright, Storybook a11y, GitHub Actions, Lighthouse

**Agenci LLM:** spec-driven development, AGENTS.md, MCP, SKILL.md, human-in-the-loop, weryfikacja przez testy i CI

**Języki i narzędzia:** TypeScript, JavaScript (ES2022+), SQL, Bash, Python · Git, Docker, Vite, ESLint, Linux, Make

**Języki obce:** polski — ojczysty · angielski — B2 (swobodna praca z dokumentacją techniczną)

## Edukacja

**Informatyka — Państwowa Akademia Nauk Stosowanych w Nysie (PANS)** · *2019–2023*
