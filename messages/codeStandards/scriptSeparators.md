# Script Separators (package.json)

Visual Scripts separators implemented as scripts (unusable, only visually) **to improve DX**

**Benefits (DX):**

- 📖 **Readability** - Clear visual hierarchy and script categorization
- 🗂️ **Organization** - Logical grouping by functionality and purpose
- 🧩 **Maintenance** - Easier to locate and update related scripts
- 👶 **Onboarding** - Better onboarding for new developers
- 🤖 **Consistency** - Unified pattern across all projects

## Before

```ts
	"scripts": {
		"prepare": "",
		"lint": "eslint .",
		"lint:fix": "eslint . --fix",
		"format": "pnpm prettier . --write && pnpm prettier . --check",
		"build:dev": "pnpm tsup --config ./config/tsuprc/tsup.dev.ts",
		"build:prod": "pnpm tsup --config ./config/tsuprc/tsup.prod.ts",
		"commands:dev": "node lib/scripts/registerCommands.js",
		"commands:prod": "node dist/scripts/registerCommands.js",
		"start:prod": "set NODE_ENV=production && nodemon --watch dist ./dist/index.js",
		"start:dev": "set NODE_ENV=development && nodemon --watch lib ./lib/index.js",
		"test": "echo \"Error: no test specified\""
	},
```

## After

```ts
	"scripts": {
		"------------------------INSTALLATION--------------------------------------": "",
		"prepare": "",
		"------------------------UTILS---------------------------------------------": "",
		"lint": "eslint .",
		"lint:fix": "eslint . --fix",
		"format": "pnpm prettier . --write && pnpm prettier . --check",
		"------------------------BUILDS--------------------------------------------": "",
		"build:dev": "pnpm tsup --config ./config/tsuprc/tsup.dev.ts",
		"build:prod": "pnpm tsup --config ./config/tsuprc/tsup.prod.ts",
		"------------------------DEPLOYS-------------------------------------------": "",
		"commands:dev": "node lib/scripts/registerCommands.js",
		"commands:prod": "node dist/scripts/registerCommands.js",
		"start:prod": "set NODE_ENV=production && nodemon --watch dist ./dist/index.js",
		"start:dev": "set NODE_ENV=development && nodemon --watch lib ./lib/index.js",
		"------------------------TESTS---------------------------------------------": "",
		"test": "echo \"Error: no test specified\""
	},
```

## Examples

```json
"------------------------INSTALLATION-----------------": "", // For setup and preparation commands (e.g., prepare, postinstall)
"------------------------UTILS------------------------": "", // For utility scripts (e.g., linting, formatting)
"------------------------BUILDS-----------------------": "", // For build-related scripts (e.g., dev/prod builds)
"------------------------DEPLOYS----------------------": "", // For deployment and runtime scripts (e.g., start commands)
"------------------------TESTS------------------------": "", // For testing-related scripts (e.g., test, coverage)
"------------------------OTHER------------------------": "",
```
