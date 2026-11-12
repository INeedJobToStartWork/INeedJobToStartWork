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
    "preinstall": "husky init",
    "prepare": "husky",
    "pre": "turbo pre",
    "pre:husky": "git add . && lint-staged",
    "lint": "turbo lint",
    "lint:fix": "turbo lint:fix",
    "lint:next": "turbo lint:next",
    "lint:test": "turbo lint:test",
    "format": "turbo format",
    "clean:cache": "rimraf --glob \"**/.turbo\"",
    "clean:builds": "rimraf --glob \"**/dist\" \"**/build\" \"**/lib\"",
    "clean:node_modules": "rimraf --glob \"**/node_modules\"",
    "link-cli": "turbo link-cli",
    "link-cli:dev": "turbo link-cli",
    "unlink-cli:dev": "turbo link-cli",
    "dev": "turbo dev",
    "build": "turbo build",
    "build:dev": "turbo build:dev",
    "build:prod": "turbo build:prod",
    "build:npm": "turbo build:npm",
    "start:dev": "turbo start:dev",
    "start:prod": "turbo start:prod",
    "npm:prepack": "turbo npm:prepack",
    "npm:postpack": "turbo npm:postpack",
    "npm:version": "changeset version",
    "npm:publish": "changeset publish",
    "test": "turbo test",
    "test:watch": "turbo test:watch",
    "test:coverage": "turbo test:coverage",
    "bench": "turbo bench"
	},
```

## After

```ts
	"scripts": {
    "------------------------INSTALLATION-------------------": "",
    "preinstall": "husky init",
    "prepare": "husky",
    "pre": "turbo pre",
    "pre:husky": "git add . && lint-staged",
    "------------------------UTILS--------------------------": "",
    "lint": "turbo lint",
    "lint:fix": "turbo lint:fix",
    "lint:next": "turbo lint:next",
    "lint:test": "turbo lint:test",
    "format": "turbo format",
    "clean:cache": "rimraf --glob \"**/.turbo\"",
    "clean:builds": "rimraf --glob \"**/dist\" \"**/build\" \"**/lib\"",
    "clean:node_modules": "rimraf --glob \"**/node_modules\"",
    "link-cli": "turbo link-cli",
    "link-cli:dev": "turbo link-cli",
    "unlink-cli:dev": "turbo link-cli",
    "------------------------BUILDS-------------------------": "",
    "dev": "turbo dev",
    "build": "turbo build",
    "build:dev": "turbo build:dev",
    "build:prod": "turbo build:prod",
    "build:npm": "turbo build:npm",
    "------------------------DEPLOYS------------------------": "",
    "start:dev": "turbo start:dev",
    "start:prod": "turbo start:prod",
    "npm:prepack": "turbo npm:prepack",
    "npm:postpack": "turbo npm:postpack",
    "npm:version": "changeset version",
    "npm:publish": "changeset publish",
    "------------------------TESTS--------------------------": "",
    "test": "turbo test",
    "test:watch": "turbo test:watch",
    "test:coverage": "turbo test:coverage",
    "bench": "turbo bench"
	},
```

## Examples

```json
"------------------------INSTALLATION-----------------": "", // For setup and preparation commands (e.g., prepare, postinstall)
"------------------------UTILS------------------------": "", // For utility scripts (e.g., linting, formatting)
"------------------------BUILDS-----------------------": "", // For build-related scripts (e.g., dev/prod builds)
"------------------------DEPLOYS----------------------": "", // For deployment and runtime scripts (e.g., start commands)
"------------------------TESTS------------------------": "", // For testing-related scripts (e.g., test, coverage)
"------------------------OTHER------------------------": "", // Last section for ungrouped scripts, which are not fit to any other section
```

## AI Suggestions

Use the examples from the Examples section first. When the OTHER section accumulates a group of scripts that fit a new separator, propose creating a new separator with its own name.
Order matters, so you should follow the order of the examples. If you would like to create a new separator like mentioned above, add it before the OTHER section. OTHER section should be the last section.
