![EslintrcMin](https://github.com/INeedJobToStartWork/INeedJobToStartWork/assets/97305201/1d123fd4-6474-439f-a790-d7e8f3180a72)

<h1 align="center">@ineedj/eslintrc</h1>
<p align="center"><b>My eslint config</b></p>

<hr/>

## Little Config

| Option                                  | Input Type                   | Description                                                                                      |
| --------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| `formatters.json`                       | boolean                      | Enables JSON formatting.                                                                         |
| `formatters.perfectionistSorters`       | boolean                      | Enables perfectionist sorting.                                                                   |
| `formatters.stylistic`                  | boolean                      | Enables stylistic formatting.                                                                    |
| `formatters.stylisticJSX`               | boolean                      | Enables stylistic formatting for JSX.                                                            |
| `formatters.stylisticTS`                | boolean                      | Enables stylistic formatting for TypeScript.                                                     |
| `modifiers.ban`                         | TBan                         | Allows blocking of specific elements.                                                            |
| `modifiers.headers`                     | Theaders                     | Allows defining headers.                                                                         |
| `modifiers.only`                        | "error" or "warn"            | Change level Severity for all plugins.                                                           |
| `modifiers.renamePlugins`               | boolean                      | If true, `renamePlugins` in options will override this.                                          |
| `modifiers.commands`                    | boolean                      | If true, [`eslint-plugin-command`](https://github.com/antfu/eslint-plugin-command) will turn on. |
| `syntax.eslint`                         | boolean                      | Enables support for ESLint.                                                                      |
| `syntax.ignoreGlobalFiles`              | Prettify<IignoreGlobalFiles> | Enables global file ignoring.                                                                    |
| `syntax.ignoreGlobalFiles.basicIgnores` | boolean                      | Allows basic file ignoring.                                                                      |
| `syntax.ignoreGlobalFiles.gitIgnore`    | boolean                      | Allows ignoring files according to .gitignore.                                                   |
| `syntax.ignoreGlobalFiles.ignoreFiles`  | string[]                     | List of files to ignore.                                                                         |
| `syntax.jsx`                            | boolean                      | Enables support for JSX.                                                                         |
| `syntax.next`                           | boolean                      | Enables support for Next.js.                                                                     |
| `syntax.node`                           | boolean                      | Enables support for Node.js.                                                                     |
| `syntax.react`                          | boolean                      | Enables support for React.                                                                       |
| `syntax.storybook`                      | boolean                      | Enables support for Storybook.                                                                   |
| `syntax.tailwindcss`                    | boolean                      | Enables support for Tailwind CSS.                                                                |
| `syntax.toml`                           | boolean                      | Enables support for TOML.                                                                        |
| `syntax.turbo`                          | boolean                      | Enables support for Turbo.                                                                       |
| `syntax.typescript`                     | boolean                      | Enables support for TypeScript.                                                                  |
| `syntax.vitest`                         | boolean                      | Enables support for Vitest.                                                                      |
| `syntax.website`                        | boolean                      | Enables support for websites.                                                                    |
| `syntax.yaml`                           | boolean                      | Enables support for YAML.                                                                        |

More about rules setup with `@eslint/config-inspector`

## Install

Ni

```bash copy
ni -D "@ineedj/eslintrc"
```

NPM

```bash copy
npm install -D "@ineedj/eslintrc"
```

PNPM

```bash copy
pnpm add -D "@ineedj/eslintrc"
```

Yarn

```bash copy
yarn add -D "@ineedj/eslintrc"
```

## Usage

`.env`

```env
ESLINT_USE_FLAT_CONFIG = true
```

`eslint.config.js`

```ts
import ineedj from "@ineedj/eslintrc";

export default ineedj({ syntax: { eslint: true, typescript: true } });
```
