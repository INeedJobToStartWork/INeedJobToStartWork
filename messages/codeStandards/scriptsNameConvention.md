# Naming Scripts convention (package.json)

## Benefits (DX)

- 📖 **Readability** - Clear visual hierarchy and script categorization
- 🗂️ **Organization** - Logical grouping by functionality and purpose
- 🧩 **Maintenance** - Easier to locate and update related scripts
- 🏗️ **Scalable** - Naturally grows with project complexity
- 🤖 **Consistency** - Unified pattern across all projects

## Naming Convention

- Use `kebab-case` for all script names
- Follow colon-separated syntax
- Structure is built by `Blocks`, any order is allowed but have own purposes

### Blocks

Script names follow a structured block pattern to clearly indicate their purpose and functionality. </br></br>
Each block represents a different aspect of the script's role:

[`action-name`,`group`,`modifier`] + [`namespace` (Only and optional with monorepo)]

`action-name` - The primary action / functionality of action (e.g., build, lint, test) </br>
`group` - Logical grouping/category/group of namespaces of target `action-name` (e.g., dev, prod, next,npm (as "tech")) </br>
`modifier` - Additional modifiers or variations to `action-name` </br>
`namespace` - Repo Target of `action-name` (should be avoided)</br>

## Use cases

| Structure              | Expect                                                                      | Example                                       |
| ---------------------- | --------------------------------------------------------------------------- | --------------------------------------------- |
| `action-name`          | Single Script/Basic version of script                                       | `lint`                                        |
| `action-name:modifier` | Script version with option/modifier                                         | `lint:fix` (`lint` script version with --fix) |
| `action-name:group`    | Single Script/Basic version of script for XYZ group                         | `build:dev`                                   |
| `group`                | Merge few scripts/running multiple scripts                                  | `dev` (runs `build:dev` + `start:dev`)`       |
| `group:action-name`    | We want to specific group of scripts to XYZ tech (avoid that most of times) | `npm:prepare`\|`docker:build`                 |

## Monorepo

In monorepo environments, it's important to distinguish between `group` and `namespace`:

- `group` represents a logical category of scripts (e.g., dev, prod)
- `namespace` refers to a specific package/repository in the monorepo

While `group` can encompass multiple `namespaces`, they serve different purposes. For single-package operations, leverage your monorepo tool's native filtering capabilities rather than namespacing scripts.

### Best Practices

- Prefer monorepo tool options (like `pnpm --filter` or `nx run-many`) over script namespacing
- Only use `namespace` in scripts when it provides clear DX benefits, such as:

  - Cross-package workflows that can't be expressed with tool filters
  - Frequently used multi-package operations
  - Complex dependency chains between packages
