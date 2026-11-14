# Patryk Jaseniuk

**Full Stack TypeScript Developer**

React · Next.js · Astro · PostgreSQL/Supabase · testing & CI/CD

Wrocław, Poland · remote or hybrid
patryk.jaseniuk@gmail.com
[github.com/PatrykJaseniuk](https://github.com/PatrykJaseniuk)

## Profile

Full Stack TypeScript Developer: React, Next.js, Astro and PostgreSQL/Supabase. Favourite paradigm: functional programming — immutability, function composition and controlled side effects. Since 2022 I have been building end-to-end applications with tests and CI/CD; with LLM agents, I work spec-driven and verify changes through typing and tests.

## Experience

### Frontend Developer (Astro / TypeScript) — commercial gym website and price list

*2026* · Astro 5 · TypeScript · Tailwind CSS 4 · Pages CMS · GitHub Actions · [Live](https://parys.nysa.pl) · [Code](https://github.com/PatrykJaseniuk/parys-web)

- Working directly with the owner, I designed and shipped a static gym website and an A4 price list in PDF and HTML, deployed to GitHub Pages on a custom domain.
- Defined a structured business model as the single source of truth: training zones, memberships, classes, trainers and services are described once, with both the website and print assets generated from the same model.
- Git/JSON CMS with no database, backend or related operating costs; CI validation. Lighthouse: 100/100/100/100.

## Personal projects

### ts-fullstack-template — React + Supabase application template

*2026* · React 18 · TypeScript · TanStack Router/Query · PostgreSQL RLS · Vitest · Playwright · [Live](https://patrykjaseniuk.github.io/ts-fullstack-template/) · [Code](https://github.com/PatrykJaseniuk/ts-fullstack-template)

- Typed Supabase/PostgREST API: `createClient<Database>`, schema-generated table, view, Insert/Update and enum types. RBAC with 30 RLS policies, admin/landlord/tenant roles and a JWT claim; 10 `security_invoker` views, including running balances from SQL window functions.
- `AGENTS.md` rules for LLM agents are enforced by ESLint and strict TS: `functional/*`, import boundaries, `no-floating-promises` and `noUncheckedIndexedAccess`. Architecture and functional style are checked automatically.
- DRY: generic list/CRUD types and hooks for filtering (300 ms debounce), sorting and pagination through PostgREST. TanStack Query cache: 30-second stale time, previous data during transitions and mutation invalidation; fixed ordering for financial ledgers.
- 200+ Vitest tests, 8 E2E tests, 12 pgTAP files and 15 Storybook/a11y files; 7 CI jobs on main.

### pkg-builder — software-building system driven entirely by an LLM agent

*2026* · AGENTS.md · LLM agents · spec-driven development · DAG · [AGENTS.md](https://github.com/PatrykJaseniuk/pkg-builder/blob/main/AGENTS.md)

- Designed `AGENTS.md` as a self-sufficient contract: from an empty directory, an LLM agent recreates the workspace, generates the scripts and independently takes software from source code to a working application.
- **Iterative dependency-hell resolution:** the agent diagnoses missing requirements, recursively selects system dependencies or builds them from source, and repeats the process until compilation and launch both succeed.

### sailing-sim — physics engine and 2D sailing simulator

*2022–2024* · TypeScript · Next.js · Three.js · Jest · [Code](https://github.com/PatrykJaseniuk/sailing-sim) · [Live](https://patrykjaseniuk.github.io/StatkiTSDocs/)

- Implemented a custom soft-body dynamics model: springs, aerodynamic and hydrodynamic forces, rotational motion and a fixed integration step. Built the view with Three.js and collision detection with detect-collisions/SAT.
- The model is separated from the view; 13 Jest suites and 13 chapters of technical documentation.

## Skills

**Frontend:** React 18, Next.js, Astro 5, TanStack Router and Query, Tailwind CSS, HTML/CSS, Three.js, Storybook

**Backend & data:** Node.js, PostgreSQL, Supabase, REST API, PostgREST, RLS, views, triggers, pgTAP

**Testing & CI/CD:** Vitest, Jest, React Testing Library, Playwright, Storybook a11y, GitHub Actions, Lighthouse

**LLM agents:** spec-driven development, AGENTS.md, MCP, SKILL.md, human-in-the-loop, verification through tests and CI

**Languages & tools:** TypeScript, JavaScript (ES2022+), SQL, Bash, Python · Git, Docker, Vite, ESLint, Linux, Make

**Languages:** Polish — native · English — B2 (comfortable with technical documentation)

## Education

**Computer Science — University of Applied Sciences in Nysa (PANS)** · *2019–2023*
