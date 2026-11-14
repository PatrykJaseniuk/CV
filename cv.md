# Patryk Jaseniuk

**Fullstack TypeScript Developer**

React · Next.js · Astro · PostgreSQL/Supabase · testy i CI/CD

Wrocław, Polska · praca zdalna lub hybrydowa
patryk.jaseniuk@gmail.com
[github.com/PatrykJaseniuk](https://github.com/PatrykJaseniuk)

## Profil

Fullstack TypeScript Developer: React, Next.js, Astro oraz PostgreSQL/Supabase. Ulubiony paradygmat programowania: funkcyjny — niemutowalność, kompozycja funkcji i kontrolowane efekty uboczne. Od 2022 roku buduję aplikacje end-to-end z testami i CI/CD; z agentami LLM pracuję spec-driven, weryfikując zmiany typowaniem i testami.

## Doświadczenie

### Frontend Developer (Astro / TypeScript) — komercyjna strona i cennik dla siłowni

*2026* · Astro 5 · TypeScript · Tailwind CSS 4 · Pages CMS · GitHub Actions · [Wdrożenie](https://parys.nysa.pl) · [Kod](https://github.com/PatrykJaseniuk/parys-web)

- We współpracy z właścicielem zaprojektowałem i wdrożyłem statyczną stronę siłowni oraz cennik A4 w PDF i HTML. Publikacja na GitHub Pages pod własną domeną.
- Zdefiniowałem ustrukturyzowany model biznesowy jako jedyne źródło prawdy: strefy, karnety, zajęcia, trenerzy i usługi są opisane raz, a strona i materiały drukowane powstają z tego samego modelu.
- CMS Git/JSON bez bazy, backendu i kosztów ich utrzymania; walidacja w CI. Lighthouse: 100/100/100/100.

## Projekty własne

### ts-fullstack-template — szablon aplikacji React + Supabase

*2026* · React 18 · TypeScript · TanStack Router/Query · PostgreSQL RLS · Vitest · Playwright · [Wdrożenie](https://patrykjaseniuk.github.io/ts-fullstack-template/) · [Kod](https://github.com/PatrykJaseniuk/ts-fullstack-template)

- Typowane API Supabase/PostgREST: `createClient<Database>`, generowane typy tabel, widoków, Insert/Update i ENUMów. RBAC: 30 polityk RLS, role admin/landlord/tenant i claim JWT; 10 widoków `security_invoker`, m.in. salda na funkcjach okna.
- Zasady dla agentów LLM z `AGENTS.md` są egzekwowane przez ESLint i strict TS: `functional/*`, granice importów, `no-floating-promises` i `noUncheckedIndexedAccess`. Architektura i styl funkcyjny są kontrolowane automatycznie.
- DRY: generyczne typy i hooki list/CRUD dla filtrowania (debounce 300 ms), sortowania i paginacji po stronie PostgREST. Cache TanStack Query: staleTime 30 s, poprzednie dane przy zmianach i invalidacja po mutacjach; stały porządek rejestrów finansowych.
- Ponad 200 testów Vitest, 8 E2E, 12 plików pgTAP i 15 plików Storybook/a11y; 7 zadań CI na main.

### pkg-builder — system budowania oprogramowania oparty na agencie LLM

*2026* · AGENTS.md · agenci LLM · spec-driven development · DAG · [AGENTS.md](https://github.com/PatrykJaseniuk/pkg-builder/blob/main/AGENTS.md)

- Opracowałem `AGENTS.md` jako samowystarczalny kontrakt: agent LLM od pustego katalogu odtwarza środowisko, generuje skrypty i samodzielnie prowadzi oprogramowanie od źródeł do działającego programu.
- **Iteracyjne rozwiązywanie dependency hell:** agent diagnozuje braki, rekurencyjnie dobiera zależności systemowe lub buduje je ze źródeł i powtarza proces aż do pomyślnej kompilacji i uruchomienia.

### sailing-sim — silnik fizyki i symulator żaglowca 2D

*2022–2024* · TypeScript · Next.js · Three.js · Jest · [Kod](https://github.com/PatrykJaseniuk/sailing-sim) · [Wdrożenie](https://patrykjaseniuk.github.io/StatkiTSDocs/)

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
