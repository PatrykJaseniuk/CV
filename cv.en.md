# Patryk Jaseniuk

**Fullstack (Full Stack) TypeScript Developer**

React · Node · LLM agents · functional programming

Wrocław, Poland (remote or hybrid) · patryk.jaseniuk@gmail.com · [linkedin.com/in/patryk-jaseniuk](https://www.linkedin.com/in/patryk-jaseniuk-929136161/) · [github.com/PatrykJaseniuk](https://github.com/PatrykJaseniuk)

Polish — native · English — B2 (comfortable with technical documentation)

## Profile

Fullstack developer specialising in TypeScript: React, Next.js and Astro on the front end, Node.js and PostgreSQL/Supabase in the data layer, tests and CI/CD around all of it. I write functional code — immutable data, higher-order functions. Since 2025 I have been developing software with LLM agents: I write contracts an agent can execute and gates it cannot bypass. I wrote the physics engine in sailing-sim by hand, without an agent.

**At a glance:** **25** packages in an agent pipeline · **200+** tests in the fullstack template · **~12k** lines of TS at parys.nysa.pl

## Experience

### Fullstack / Frontend Developer — own projects and client work
*2022 – present*

- Design and ship web applications end to end: data model, API and access layer, UI, tests, CI/CD, release.
- Maintain them after launch — database migrations, dependency updates, Lighthouse audits, accessibility fixes.
- Work directly with the product owner: gather requirements, scope the work and deliver releases on my own.
- Develop projects with LLM agents: contracts in `AGENTS.md`, MCP, skills, verification through tests and CI.

## Projects

### ts-fullstack-template — fullstack application template on React + Supabase

*2026* · `React 18` · `TypeScript` · `Vite` · `TanStack Router/Query` · `Supabase` · `PostgreSQL RLS` · `Vitest` · `Playwright` · `pgTAP` · [Code](https://github.com/PatrykJaseniuk/ts-fullstack-template)

A fullstack template with no custom server: the browser talks to Supabase directly, and PostgreSQL Row Level Security is the only authorization layer.

- Designed and wrote the backend: 7 tables, 30 RLS policies, 10 `security_invoker` views, triggers and helper functions; the user role lands in a non-editable JWT claim via `custom_access_token_hook`.
- Split the frontend into `pages` → `masterComponents` → `slaveComponents` → `generic` layers and enforced import rules in ESLint; the functional style (no mutation, `fp-ts`, `zod`, `ts-pattern`) is enforced by `eslint-plugin-functional`.
- Built the test pyramid (200+ Vitest cases, 15 stories with a11y, Playwright, 14 pgTAP files) and CI in GitHub Actions: 7 jobs from lint to Pages deployment.

### pkg-builder — a package-building workspace driven by an LLM agent

*2026* · `Bash` · `AGENTS.md` · `DSH` · `Linux` · `XDG` · [Code](https://github.com/PatrykJaseniuk/pkg-builder)

A project where an LLM agent takes software from its repository all the way to a working application: 25 packages delivered as working launchers (Blender, GIMP, Unreal Engine, Wine/DXVK, PostgreSQL, ffmpeg, among others) — from source builds to pinned binaries.

- Wrote `AGENTS.md` as a self-sufficient seed: an empty directory plus that file is enough for the agent to recreate the whole workspace, generate the scripts and run a health check.
- Designed a functional model instead of a checklist: a DAG of values (`repo → source → build`) and the functions that produce them; values are immutable, generators atomic and idempotent, and a fix is a new value — never an in-place edit.
- Enforced auditability: 55 scripts with mandatory contract headers (`produces`, `consumes`, `deps`, `pinned`), 62 reports as process memory, a consistency lint, tag and SHA pinning, and no privilege escalation.
- Result: 8 native launchers (`bin/` + XDG menu) — including DSH itself, built with this very workspace.

### parys-web — website and typed data model for Sport Studio Parys

*2026* · `Astro 5` · `TypeScript` · `Tailwind CSS 4` · `Pages CMS` · `GitHub Actions` · [Code](https://github.com/PatrykJaseniuk/parys-web) · [Live](https://parys.nysa.pl)

A gym website (memberships, zones, classes, trainers, contact) built around a single typed data model — roughly 12k lines of TypeScript and Astro.

- Designed a layered architecture where the directory number defines the allowed import direction; the model core has no external dependencies and feeds two products: the website and an A4 price list (PDF + HTML).
- Built the CMS: JSON files edited in Pages CMS are validated and generated into typed modules, and a GitHub Actions workflow commits the model and detects drift in CI.
- Added a quality gate on every build (entity-to-file bindings, asset existence, version compatibility, publication lock) plus a Lighthouse audit; deployed to GitHub Pages on a custom domain.

### sailing-sim — physics engine and 2D sailing simulator

*2022 – 2024* · `TypeScript` · `Next.js` · `Three.js` · `Jest` · `GitHub Actions` · [Code](https://github.com/PatrykJaseniuk/sailing-sim) · [Docs](https://patrykjaseniuk.github.io/StatkiTSDocs/)

**Written entirely by hand — no LLM agent involved.** A real-time simulator: the player controls sails and rudder, and the ship moves under forces generated by wind and water.

- Built my own physics engine in plain TypeScript (no off-the-shelf physics library): hull and sails as triangle bodies connected by springs (soft body), aerodynamic and hydrodynamic forces, friction, collisions and rotational motion.
- Designed the simulation loop with a fixed integration step and a separation between world elements and the view layer; rendering based on Three.js.
- Covered the engine with 55 unit tests across 13 suites (Jest) and documented the model in 13 chapters of technical documentation.

## LLM agents

- **Spec-driven development:** in ts-fullstack-template and parys-web I keep `AGENTS.md` as the single source of rules for humans and agents (700 lines); in pkg-builder it is a self-sufficient seed of the whole workspace. Types, lint and CI enforce those rules regardless of who writes the code.
- **Agent loop:** plan → generation → verification → report. I enforce atomicity and idempotency, pinned inputs and an audit trail for every operation — the agent gets a repeatable, checkable process instead of a series of improvisations.
- **Content-editor agent architecture** (spec in parys-web): an LLM plus the Telegram Bot API edits the repository through a file allow-list, on a branch and through a PR, with `astro check` and build gates, human approval in chat and a container per repository.
- **Tooling:** I configure MCP (Storybook `addon-mcp`, Supabase MCP, editor MCP servers) and use agent skills (`SKILL.md`) as a carrier for domain knowledge.
- **Verification over trust:** I check every agent change with tests, types and CI; the agent does not publish without green gates — that is the condition for safe autonomy.
- **Preferred agent stack:** DSH (my favourite harness), DeepSeek v4.1-Flash, Qwen 3.8 locally.

## Skills

**Languages:** TypeScript, JavaScript (ES2022+), SQL, Python, Bash, C/C++, Java, C#

**Paradigm:** functional programming — immutable data, higher-order functions, composition, no side effects; `fp-ts`, `zod`, `ts-pattern`, `eslint-plugin-functional`

**Frontend:** React 18, Next.js, Astro 5, TanStack Router and Query, Tailwind CSS, HTML/CSS, Three.js, Pixi.js, Storybook

**Backend and data:** Node.js, Supabase, PostgreSQL (RLS, views, triggers, pgTAP), PostgREST, REST API, Prisma

**LLM agents:** spec-driven development, `AGENTS.md`, MCP, agent skills, DSH, DeepSeek v4.1-Flash, Qwen 3.8 (local), agent loop and guardrail design, human-in-the-loop, verification through tests and CI

**Testing and quality:** Vitest, Jest, React Testing Library, Playwright, Storybook a11y, Lighthouse, TDD

**Tooling:** Git, GitHub Actions, Vite, Docker, Make, ESLint, Pages CMS

## Education

**Computer Science — University of Applied Sciences in Nysa (PANS)**
*2019 – 2023*

Algorithms and data structures · object-oriented programming · databases and SQL · computer networks · software engineering.

*I agree to the processing of my personal data for the purposes of the recruitment process, in accordance with Regulation (EU) 2016/679 (GDPR).*
