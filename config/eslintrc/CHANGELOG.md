# @ineedj/eslintrc

## 2.0.0

### Major Changes

- Support for ESLint 10 + all dependencies updated to latest.

  ### Breaking Changes
  - Requires ESLint `>=10.4` (flat config only) and Node.js `^20.19.0 || ^22.13.0 || >=24`.
  - `syntax.typescript` requires TypeScript `<6.1` (`typescript-eslint` supported range). Parser now uses only
    `projectService` (`project: "./tsconfig.json"` removed - both together are an error in `typescript-eslint` 8.x), so
    linted files must be included in a `tsconfig.json`.
  - `syntax.tailwindcss` requires Tailwind CSS v4 installed in the project (`eslint-plugin-tailwindcss` v4).
  - `formatters.json` now applies only to `.json`, `.jsonc` and `.json5` files.
  - Replaced plugins (plugin namespaces are kept):
    - `eslint-plugin-vitest` -> `@vitest/eslint-plugin`
    - `eslint-plugin-readable-tailwind` -> `eslint-plugin-better-tailwindcss` (`@EslintTailwindCSSReadable/multiline` ->
      `enforce-consistent-line-wrapping`, `@EslintTailwindCSSReadable/sort-classes` -> `enforce-consistent-class-order`)
    - `eslint-plugin-deprecation` -> `@typescript-eslint/no-deprecated`
    - `@stylistic/eslint-plugin-js|ts|jsx|plus` -> `@stylistic/eslint-plugin` (registered under the same
      `@stylistic/js|ts|jsx|plus` namespaces)
  - Renamed rules:
    - `@typescript-eslint/no-throw-literal` -> `@typescript-eslint/only-throw-error`
    - `@typescript-eslint/no-useless-template-literals` -> `@typescript-eslint/no-unnecessary-template-expression`
    - `@typescript-eslint/ban-types` -> `@typescript-eslint/no-restricted-types`, `no-empty-object-type`,
      `no-unsafe-function-type`, `no-wrapper-object-types`
    - `@EslintUnicorn/no-array-for-each` -> `@EslintUnicorn/no-for-each`
  - Removed rules/options (removed upstream): `@EslintSonar/no-one-iteration-loop`,
    `@EslintTailwindCSS/migration-from-tailwind-2`, `@stylistic/jsx/jsx-indent`, `@stylistic/jsx/jsx-sort-props`,
    `@stylistic/jsx/jsx-props-no-multi-spaces`,
    `@EslintPerfectionist/sort-astro-attributes|sort-svelte-attributes|sort-vue-attributes`, `spread-last` option of
    `@EslintPerfectionist/sort-array-includes`, `overrides.arrow` option of `@stylistic/ts/type-annotation-spacing`.

  ### Fixes
  - Legacy plugins (`import`, `react`, `jsx-a11y`, `pii`, `ssr-friendly`, `typescript-sort-keys`, ...) are wrapped with
    `@eslint/compat`, so they don't crash on ESLint 10.
  - `syntax.react`: `@EslintReactHooks` plugin was not registered (the whole preset crashed); fixed invalid options of
    `jsx-filename-extension`, `jsx-no-leaked-render` and `jsx-no-literals`.
  - `syntax.website`: `plugin`/`rule` typos - the preset was never applied.
  - `formatters.stylisticTS` / `formatters.stylisticJSX` were applied to every file except TS/JSX (`ignores` ->
    `files`).
  - `formatters.json`, `syntax.yaml`, `syntax.toml`: files were parsed as JavaScript, now use proper ESLint languages.
  - `syntax.ignoreGlobalFiles.gitIgnore` doesn't crash when the project has no `.gitignore`.
  - Typos in rule keys (`exports-last`, `default-param-last`, TOML `no-mixed-type-in-array`) and a stray `console.log`
    on config load.
  - Type declarations build fixed (`.d.ts`), fewer `as any` casts.
  - README: requirements section, removed obsolete `ESLINT_USE_FLAT_CONFIG`, `README.npm.md` synced.

## 1.2.4

### Patch Changes

- updated dependencies

## 1.2.3

### Patch Changes

- changed rules: "complexity" 10 -> 16, @EslintSecurity/detect-object-injection `"error"` -> `"off"`,
  @EslintSonar/no-duplicate-string `"error"` -> `"off"`

## 1.2.2

### Patch Changes

- Now support newer version of `eslint-plugin-command` (0.2.6)!

## 1.2.1

### Patch Changes

- fix vitest errors and general tsconfig error

## 1.2.0

### Minor Changes

- add new `eslint-plugin-command` support by `modifiers.commands` option!

## 1.1.7

### Patch Changes

- fix eslitn problem with .json files

## 1.1.6

### Patch Changes

- add json files to ignore for `eslint` and `typescript` config

## 1.1.5

### Patch Changes

- translate pl => en IConfigInput

## 1.1.4

### Patch Changes

- fix exports

## 1.1.3

### Patch Changes

- fix package deps

## 1.1.2

### Patch Changes

- move dependencies from `peerDependencies` => `dependencies` to avoid problems with versions at pnpm install etc

## 1.1.1

### Patch Changes

- remove `name` from globalIgnores to let them properly work.

## 1.1.0

### Minor Changes

- plugin `@EslintNoSecrets` removed, rule `@EslintNode/no-unpublished-import` set to `off` - throw wrong errors

## 1.0.2

### Patch Changes

- default export lost methods and types

## 1.0.1

### Patch Changes

- default return function is no more async

## 1.0.0

### Major Changes

- Add `.d.ts` support, fix `ignoreGlobalFiles` error and simple JSDocs!

## 0.23.0

### Minor Changes

- 4a9c9da: add new modifiers!

## 0.22.0

### Minor Changes

- remove `eslint-plugin-jsonc` and replace him on `eslint-plugin-jsonc` at json config!

## 0.21.0

### Minor Changes

- add css modules support for react from `eslint-plugin-css-modules`!

## 0.20.0

### Minor Changes

- add some rules to sort Typescript Sort Keys from `eslint-plugin-typescript-sort-keys`!

## 0.19.0

### Minor Changes

- add rule from `eslint-plugin-no-secrets` to find secrets in code.

## 0.18.0

### Minor Changes

- change `peerDependencies` versions install on patches only and add some rules from `eslint-plugin-array-func` to
  `base` config

## 0.17.0

### Minor Changes

- add new config for MDX!

## 0.16.0

### Minor Changes

- add rules (defaults) for Vitest!

## 0.15.0

### Minor Changes

- add rules for Yaml config!

## 0.14.0

### Minor Changes

- add new rules for TOML

## 0.13.0

### Minor Changes

- add some rules for turbo process.env!

## 0.12.0

### Minor Changes

- add rules about TailwindCSS formatter

## 0.11.0

### Minor Changes

- turn off 2 import rules from `eslint-plugin-n` which throws wrong errors.

## 0.10.1

### Patch Changes

- disable rules for node which throw error

## 0.10.0

### Minor Changes

- add some rules for storybook config!

## 0.9.0

### Minor Changes

- add some rules for Node Config

## 0.8.0

### Minor Changes

- add rules for imports/exports from `eslint-plugin-import`

## 0.7.0

### Minor Changes

- add ban types with `@typescript-eslint/ban-types`

## 0.6.0

### Minor Changes

- add new config option `website`!

## 0.5.2

### Patch Changes

- fix peerDependencies versions

## 0.5.1

### Patch Changes

- fix `ignoreGlobalFiles` implementation

## 0.5.0

### Minor Changes

- add new config `ignoreGlobalFiles`!

## 0.4.0

### Minor Changes

- `@EslintUnicorn/prevent-abbreviations` => `off`

## 0.3.6

### Patch Changes

- change some rules and dep versions

## 0.3.5

### Patch Changes

- downgrade eslint version to `8.57.0` and other deps to correct

## 0.3.4

### Patch Changes

- update eslint plugins versions

## 0.3.3

### Patch Changes

- fix Typescript support

## 0.3.2

### Patch Changes

- peerDependencies on same version or patched

## 0.3.1

### Patch Changes

- fix package exports

## 0.3.0

### Minor Changes

- remove rules which crash linter

## 0.2.0

### Minor Changes

- add `eslint-plugin-deprecation` rules

## 0.1.2

### Patch Changes

- remove unnecessary peerDependencies

## 0.1.1

### Patch Changes

- unnecessary peerDependencies

## 0.1.0

### Minor Changes

- publish package

## 0.0.1

### Patch Changes

- Updated dependencies
  - @ineedj/tsconfig@1.0.0
