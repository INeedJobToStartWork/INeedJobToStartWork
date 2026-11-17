# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A pnpm + Turborepo monorepo holding INEEDJ's shared, npm-published tooling configs (`@ineedj/*`), plus non-code reference material. Node version comes from `.nvmrc` (24.x; ESLint 10 / `eslint-flat-config-utils` need `Object.groupBy`, i.e. Node >= 21); package manager is `pnpm@9.4.0`.

Workspaces (`pnpm-workspace.yaml` also lists `website/*`, `packages/*`, `tests/*`, which do not currently exist):

- `config/eslintrc` → `@ineedj/eslintrc`: the only package with real source code and a build step (TypeScript, bundled with tsup).
- `config/prettierrc` → `@ineedj/prettierrc`: plain JS config published as-is (`prettierrc.js` CJS, `prettierrc.mjs` ESM re-export).
- `config/tsconfig` → `@ineedj/tsconfig`: `base.json`, published as-is.
- `config/tsuprc` → `@ineedj/tsuprc`: tsup base/dev/prod presets, published as-is.
- `config/myplop`, `config/testwebapi`: private scratch/playground packages.

Non-workspace directories:
- `config/cursor/*.code-profile`, `config/terminal/settings.json`: personal editor/terminal profiles.
- `other/`: copy-paste templates for other projects (`other/startup/` = GitHub issue templates, CI workflows, LICENSE, etc.; `other/contribute/CONTRIBUTING.md` = the general contribution guide). The root `.github/` mirrors `other/startup/.github/`.
- `messages/`: markdown explanations; `messages/other/<name>.md` documents each `other/<name>` directory.

## Commands

Run from the repo root (Turbo fans out to every workspace that defines the script):

```bash
pnpm install
pnpm lint            # turbo lint
pnpm lint:fix
pnpm format          # prettier --write then --check
pnpm build:npm       # what CI runs (after lint + format)
pnpm dev             # tsup watch build (eslintrc → lib/)
```

Target one package with a filter, e.g. `pnpm --filter @ineedj/eslintrc lint` or `pnpm turbo build:npm --filter=@ineedj/eslintrc`.

In `config/eslintrc`:
- `pnpm build` → production bundle into `dist/` (ESM + CJS, minified, `.d.ts`).
- `pnpm start` → `@eslint/config-inspector` to browse the resulting rule set.
- **`eslint.config.js` imports `./dist/index`**, i.e. the package lints itself with its own built output. Build before running `lint` there, or lint will fail/use stale rules.

There is no test suite in the repo (no test files or vitest config), even though root `test*` scripts exist.

## `@ineedj/eslintrc` architecture

- `src/index.ts` exports `ineedj(options)`, returning a `FlatConfigComposer` (from `eslint-flat-config-utils`), so consumers can chain `.removeRules(...)`, `.override(...)`, etc. Each option toggles one flat-config block via `configLoader` (disabled blocks become `null`).
- Option groups map 1:1 to `src/rules/` subdirectories:
  - `formatters/`: json, perfectionist sorters, stylistic (js/jsx/ts).
  - `syntax/`: per-language/framework blocks (base "eslint", typescript, react, next, node, vitest, storybook, tailwindcss, toml, yaml, turbo, website, `ignoreGlobalFiles`). `mdx.ts` exists but is commented out of the options.
  - `modifiers/`: ban, header, `only` ("error"/"warn" severity override via eslint-plugin-only-*), eslint-plugin-command.
  - `helpers/`: shared `files`/`languageOptions` builders (`filesTS`, `languageOptionsTS`, TS parser settings).
- **Plugins are registered under renamed namespaces** (e.g. `@EslintUnicorn`, `@EslintSonar`, `@EslintSecurity`, `@EslintTSDocs`, `@ModifierBan`), except `@typescript-eslint`. Rule IDs in configs and in `eslint-disable` comments must use these prefixes (e.g. `// eslint-disable-next-line @EslintUnicorn/no-null`). Check the `plugins` object in the relevant `src/rules/**` file for the exact name.
- Many plugins lack typings; the convention is `// @ts-expect-error: No type declaration for module` on the import plus `as any` in the `plugins` map.
- Adding a new toggle means: create the block in `src/rules/<group>/`, export it from that group's `index.ts`, add the option to `IConfigInput` (and its JSDoc) in `src/index.ts`, wire it with `configLoader`, and update the options table in both `README.md` and `README.npm.md`.
- Build/publish: tsup configs live in `config/eslintrc/config/tsuprc/` (a local copy, not the `@ineedj/tsuprc` package). The prod build copies `package.json`, `.npmrc`, `.npmignore` and `README.npm.md` (renamed to `README.md`) into `dist/`, and `publishConfig.directory` is `dist`. `build:npm` wraps the build in `clean-package` (strips devDependencies etc. per `clean-package.config.json`) and restores `package.json` afterwards. Don't leave `package.json` in the cleaned state.

## Conventions

- Formatting (`@ineedj/prettierrc`): tabs, `printWidth` 120, no trailing commas, `arrowParens: "avoid"`, `bracketSameLine`, `proseWrap: "always"`.
- Source files use `//---...` comment-block separators for sections (Imports / Types / Helpers / Exports).
- Root `package.json` scripts are grouped with `"-----...SECTION...-----": ""` separator keys; keep new scripts in the right section.
- Commits use commitsmile's format: `<emoji> <Type>(<scope>): <message>` with the workspace/area as scope and `!` for breaking changes (e.g. `🐛 Fix(eslintrc): ...`, `⚙️  Chore(prettierrc): ...`, `🎉 Feat(eslintrc)!: ...`). Interactive helper: `pnpm commitsmile`.
- The husky pre-commit hook runs `git add . && lint-staged`, so it **stages every working-tree change** at commit time. Make sure unrelated changes aren't present before committing.
- Versioning/publishing is done with Changesets: add a changeset (`pnpm changeset`) for changes to published `@ineedj/*` packages. On push to `main`, `.github/workflows/publish.yml` opens a "version packages" PR or publishes to npm. CI (`ci.yml`) runs `pnpm lint`, `pnpm format`, `pnpm build:npm`.
