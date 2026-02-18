# AGENTS.md

Operational guide for coding agents working in this repository.

## 1) Stack And Workspace

- Package manager: `bun` (`packageManager: bun@1.1.17`)
- Monorepo runner: `turbo`
- Required Node: `>=22` (use `.nvmrc`, currently `lts/*`)
- Apps:
  - `apps/web`: Next.js main app
  - `apps/docs`: Next.js docs app
  - `apps/storybook`: Storybook v10 (`@storybook/nextjs-vite`)
- Packages:
  - `packages/ui`: shared shadcn/tailwind UI components
  - `packages/utils`: utility library (tsup build)
  - `packages/types`: shared types

## 2) Install And Setup

- Install deps: `bun install`
- Ensure Node version: `nvm use`
- Prepare hooks runs via postinstall/prepare (`lefthook install`)

## 3) Build Commands

- Full monorepo build: `bun run build`
- Build only Storybook app: `bun run build:storybook`
- Build a single package/app via turbo filter:
  - `bunx turbo build --filter=@repo/web`
  - `bunx turbo build --filter=@repo/ui`
- Build `packages/utils` directly: `bun run --cwd packages/utils build`

## 4) Dev Commands

- All workspaces in dev mode: `bun run dev`
- Web app: `bun run --cwd apps/web dev`
- Docs app: `bun run --cwd apps/docs dev`
- Storybook app: `bun run --cwd apps/storybook dev`
- Storybook via root turbo shortcut: `bun run storybook`

## 5) Lint And Format Commands

- Monorepo lint: `bun run lint`
- Monorepo lint + auto-fix: `bun run lint:fix`
- App/package scoped lint:
  - `bun run --cwd apps/web lint`
  - `bun run --cwd apps/storybook lint`
  - `bun run --cwd packages/ui lint`
- Format/fix staged files happens in pre-commit hook:
  - Biome check/apply for JS/TS/JSON
  - Taplo format for Markdown/MDX

## 6) Test Commands

- Full test pipeline from root: `bun run test`
- Unit tests only: `bun run --cwd apps/web test`
- Unit coverage: `bun run --cwd apps/web test:cov`
- Unit coverage UI: `bun run --cwd apps/web test:cov:ui`
- E2E tests: `bun run --cwd apps/web test:e2e`

### Run A Single Test (Important)

- Single Vitest file:
  - `bun run --cwd apps/web test -- tests/unit/path/to/file.spec.ts`
- Vitest by test name:
  - `bun run --cwd apps/web test -- -t "renders welcome card"`
- Single Playwright spec:
  - `bun run --cwd apps/web test:e2e -- tests/e2e/path/to/spec.spec.ts`
- Playwright by title grep:
  - `bun run --cwd apps/web test:e2e -- --grep "checkout flow"`
- Storybook validation:
  - `bun run --cwd apps/storybook doctor`
  - `bun run --cwd apps/storybook build`

## 7) TypeScript And Paths

- TypeScript is strict (`strict: true`) and no-emit in apps.
- Module resolution is `bundler` in app tsconfigs.
- Common aliases:
  - App-local: `@/*`
  - UI package source alias in apps: `@ui/*`
  - Workspace package imports: `@repo/ui/...`, `@repo/utils`, `@repo/types`

## 8) Code Style (Biome + Existing Patterns)

- Formatter/linter source of truth: root `biome.json`.
- Use spaces with width 2.
- Use single quotes in JavaScript/TypeScript.
- Keep imports organized (Biome organizeImports is enabled).
- Prefer explicit, descriptive names over abbreviations.
- Keep functions small and single-purpose.
- Prefer guard clauses over deep nested conditionals.
- Avoid mutating shared state when a copy/spread is clearer.

## 9) React/Next/UI Conventions

- Use functional components and typed props interfaces/types.
- Use `Readonly<Props>` where suitable for component props.
- Keep UI components presentational; move side effects to hooks/services.
- For shadcn-based components in `packages/ui`:
  - keep `cva` variant patterns consistent,
  - keep class merging through shared utility (`cn`).
- In Storybook stories:
  - prefer CSF3 object stories,
  - include `tags: ['autodocs']` where appropriate,
  - keep controls/actions explicit in `argTypes`.

## 10) Error Handling Guidelines

- Fail fast with clear error messages.
- Validate external inputs (env, request payloads) with schema-first approach (zod patterns already present).
- Do not swallow errors silently.
- In server code, return actionable and safe error responses.
- In UI code, handle empty/loading/error states explicitly.

## 11) Testing Guidelines

- Add/modify tests for behavior changes.
- Prefer focused unit tests for logic and deterministic rendering.
- Use Playwright for end-to-end user flows in `apps/web/tests/e2e`.
- Keep test names descriptive and behavior-oriented.
- Avoid flaky async tests; use stable waits/assertions.

## 12) Agent Workflow Expectations

- Before finishing: run relevant lint/tests for touched scope.
- Minimum for most TS/React changes:
  - `bun run --cwd <affected-workspace> lint`
  - relevant single test(s)
- For Storybook-related changes:
  - `bun run --cwd apps/storybook build`
- Respect existing architecture and avoid unrelated refactors.

## 13) Git And Change Hygiene

- Do not revert user changes outside task scope.
- Keep diffs focused and minimal.
- Update docs when introducing new commands/conventions.
- If command fails, report exact command and actionable next step.

## 14) Cursor/Copilot Rule Files

- `.cursorrules`: not found.
- `.cursor/rules/`: not found.
- `.github/copilot-instructions.md`: not found.
- If added later, treat them as additional mandatory guidance.

## 15) Quick Command Reference

- Install: `bun install`
- Dev all: `bun run dev`
- Build all: `bun run build`
- Lint all: `bun run lint`
- Test all: `bun run test`
- Web unit tests: `bun run --cwd apps/web test`
- Web single unit test: `bun run --cwd apps/web test -- tests/unit/foo.spec.ts`
- Web E2E single spec: `bun run --cwd apps/web test:e2e -- tests/e2e/foo.spec.ts`
- Storybook dev: `bun run --cwd apps/storybook dev`
- Storybook build: `bun run --cwd apps/storybook build`
