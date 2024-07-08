![EslintrcMin](https://github.com/INeedJobToStartWork/INeedJobToStartWork/assets/97305201/1d123fd4-6474-439f-a790-d7e8f3180a72)
<h1 align="center">@ineedj/eslintrc</h1>
<p align="center"><b>My eslint config</b></p>

<hr/>

## Little Config 


| Option               | Type input       | Description                                                                 |
|----------------------|------------------|------------------------|
| `formatters.json`    | boolean                | Enables JSON formatting.                                                     |
| `formatters.stylistic` | boolean               | Enables stylistic formatting.                                                |
| `formatters.stylisticJSX` | boolean           | Enables stylistic formatting for JSX.                                        |
| `formatters.stylisticTS` |  boolean            | Enables stylistic formatting for TypeScript.                                 |
| `formatters.perfectionistSorters` |  boolean   | Enables perfectionist sorting.                                               |
| `syntax.eslint`      |  boolean                | Enables support for ESLint.                                                  |
| `syntax.jsx`         | boolean                | Enables support for JSX.                                                     |
| `syntax.next`        | boolean                | Enables support for Next.js.                                                 |
| `syntax.node`        | boolean                | Enables support for Node.js.                                                 |
| `syntax.react`       | boolean                | Enables support for React.                                                   |
| `syntax.storybook`   | boolean                | Enables support for Storybook.                                               |
| `syntax.tailwindcss` |  boolean                | Enables support for Tailwind CSS.                                            |
| `syntax.typescript`  | boolean                | Enables support for TypeScript.                                              |
| `syntax.toml`        | boolean                | Enables support for TOML.                                                    |
| `syntax.yaml`        | boolean                | Enables support for YAML.    |

About rules setup more with `@eslint/config-inspector`


## Install
NPM

```bash copy
npm install -g "@ineedj/eslintrc"
```

PNPM

```bash copy
pnpm add -g "@ineedj/eslintrc"
```

Yarn

```bash copy
yarn add -g "@ineedj/eslintrc"
```

## Usage
`.env`
```
ESLINT_USE_FLAT_CONFIG = true
```
`eslint.config.js`
```
import ineedj from '@ineedj/eslintrc';

export default ineedj({ syntax: { eslint: true, typescript: true } });
```
