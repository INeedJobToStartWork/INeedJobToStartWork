# Contribution Guide

Hey there! <br/>

We are really excited that **you** are interested in contributing. <br/>
This is a **general contribution guide** for most of [INEEDJ's projects](https://github.com/INeedJobToStartWork). Before submitting your contribution, please make sure to take a moment and read through the following guide:

## 📜 Table of Contents

- [Contribution Guide](#contribution-guide)
  - [📜 Table of Contents](#-table-of-contents)
  - [👨‍💻 Repository Setup](#-repository-setup)
    - [Requirements (To install before you start)](#requirements-to-install-before-you-start)
    - [Steps](#steps)
  - [🛠️ Tooling](#️-tooling)
    - [Node Version Manager](#node-version-manager)
      - [NVM](#nvm)
        - [Switching Version](#switching-version)
  - [📦 Package Manager](#-package-manager)
    - [Windows - fix alias](#windows---fix-alias)
      - [PowerShell 6.x](#powershell-6x)
        - [under Powershell 5.x](#under-powershell-5x)
    - [Linting](#linting)
    - [Formatting](#formatting)
    - [Monorepo](#monorepo)
    - [Changesets](#changesets)
      - [Changelog](#changelog)
      - [Release log](#release-log)
    - [Commiting](#commiting)

## 👨‍💻 Repository Setup

### Requirements (To install before you start)

<!-- Install [Node.js](https://nodejs.org/), using the [latest LTS](https://nodejs.org/en/about/releases/) -->

- Git
- Node with NPM and Activate Corepack
- PNPM
- Ni (optional)
- Node Version Manager

### Steps

| Step                                                                                                                                                                                                 | Command (windows powershell)                 | Command (Linux)                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| 1. Fork and clone it                                                                                                                                                                                 | -                                            | -                                            |
| 2. Switch node version                                                                                                                                                                               | `nvm use $(Get-Content .nvmrc).Trim()`       | `nvm use $(cat .nvmrc)`                      |
| 3. Install dependencies under the project root                                                                                                                                                       | `ni`                                         | `ni`                                         |
| 4. Create `.env` from every `.env.template` and fill it                                                                                                                                              | -                                            | -                                            |
| 5. Do Changes...                                                                                                                                                                                     | -                                            | -                                            |
| 6. Add Changelog (not always required)                                                                                                                                                               | `pnpm changeset` -> `pnpm changeset version` | `pnpm changeset` -> `pnpm changeset version` |
| 7. Commit using handler                                                                                                                                                                              | `git add .` + `pnpm commitsmile`             | `git add .` + `pnpm commitsmile`             |
| 8. Push! :D                                                                                                                                                                                          | `git push`                                   | `git push`                                   |
| 9. Add PR on Github [[How to]]([#](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)) | -                                            | -                                            |

<!-- ## 🧑‍🔧 Maintenance

This section is for maintainers with write access, or if you want to maintain your own forks.

### Update Dependencies

- -->

<!-- ### Releasing -->

<!-- <table><tr><td width="500px" valign="top">

#### Build Locally

For this type of setup, the building and publishing process is done on your local machine. Make sure you have your local [`npm` logged in](http://npm.github.io/installation-setup-docs/installing/logging-in-and-out.html) before doing that.

In `package.json`, we usually have:

```json
{
  "scripts": {
    "prepublishOnly": "nr build"
  }
}
```

So whenever you run `npm publish`, it will make sure you have the latest change in the distribution.

</td><td width="500px" valign="top"> -->
<!-- </td></tr></table> -->

<!-- #### Build on CI

> When maintaining your own fork, you might need to see `NPM_TOKEN` secret to your repository for it to publish the packages. -->

<!-- ## Enviroment Setup -->
<!-- In soon -->

## 🛠️ Tooling

| Functionality        | Name                                                                                                                                      | Why                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Node Version Manager | [`nvm`](https://github.com/nvm-sh/nvm) \| `other in soon`                                                                                 | To fast switching node versions between projects                                              |
| Package Manager      | [`pnpm`](https://pnpm.io/) \| [`ni`](https://github.com/antfu/ni#readme)                                                                  | `pnpm` For fast redownload cached libs and `ni` to don't care about package manager commands. |
| Linter               | [`eslint`](https://github.com/eslint/eslintrc#readme)                                                                                     | detecting and avoiding possibles bugs/bad practices in during development.                    |
| Linter Config        | [`@ineedj/eslintrc`](https://github.com/INeedJobToStartWork/INeedJobToStartWork/tree/main/config/eslintrc#readme)                         | `+1k` strict rules and high customizable with extensive support.                              |
| Formatter            | `prettier` \| [`eslint`](https://github.com/eslint/eslintrc#readme)                                                                       | Formatting code lines to avoid individual coder style and make one global                     |
| Formatter Config     | `@ineedj/prettierrc` \| [`@ineedj/eslintrc`](https://github.com/INeedJobToStartWork/INeedJobToStartWork/tree/main/config/eslintrc#readme) | -                                                                                             |
| Monorepo (optional)  | `turbo`                                                                                                                                   | Easier maintaining multi repos in one place                                                   |
| Changelog Handler    | `changesets`                                                                                                                              | Changelog, github releases and npm publish handler                                            |
| Commit Handler       | `commitsmile`                                                                                                                             | To make commit stage faster and more beauty                                                   |

### Node Version Manager

Node Version Managers are responsible for fast switching between node versions.

Currently in most of project we support **only [NVM](https://github.com/nvm-sh/nvm)**

| Name                       | Support |
| -------------------------- | ------- |
| Node Version Manager (NVM) | ✅      |
| N                          | ❌      |
| Fast Node Manager (FNM)    | ❌      |
| Volta                      | ❌      |
| PNPM                       | ❌      |

#### NVM

Probably most famous Node Version Manager.

##### Switching Version

<details>
  <summary><b>Windows</b></summary>

```powershell copy
  nvm use $(Get-Content .nvmrc).Trim()
```

</details>

<details>
  <summary><b>Linux</b></summary>

```powershell copy
  nvm use $(cat .nvmrc)
```

</details>

<!--
 #### N

**_Not Supported_**

#### Fast Node Manager (FNM)

**_Not Supported_**

#### Volta

**_Not Supported_**

#### PNPM

**_Not Supported_**

### Package Manager - PNPM

**_Not Supported_**
-->

## 📦 Package Manager

Package managers are responsible for installing and managing packages at project.

We use [`pnpm`](https://pnpm.io/) for most of the projects. <br/>
We highly recommend you to install [`ni`](https://github.com/antfu/ni#readme) so you don't need to worry about the package manager when switching across different projects.

We will use `ni`'s commands in the following code snippets. If you are not using it, you can do the conversion yourself: `ni = pnpm install`, `nr = pnpm run`.

### Windows - fix alias

After `ni` installation you can have problems with using it because at windows at `ni` is existing alias for `New-Item`.

To remove it you can use:

#### PowerShell 6.x

```powershell copy
  Remove-Alias -Name ni
```

##### under Powershell 5.x

```powershell copy
  Remove-Item -Force Alias:ni
```

### Linting

We use linters for detecting and avoiding possibles bugs/bad practises induring development.

For Linting we are using [`eslint`](https://github.com/eslint/eslintrc#readme) with [`@ineedj/eslintrc`](https://github.com/INeedJobToStartWork/INeedJobToStartWork/tree/main/config/eslintrc#readme) config which have `+1k` strict rules and is high customizable with extensive support.

Check it if you want to know more about config.

### Formatting

We are using `prettier` or `eslint` for formatting code lines to avoid individual coder style and make one global, you can check it easily, just check `lint` script.</br></br>
For both cases we are using `INEEDJ` configs, `@ineedj/prettierrc` and `@ineedj/eslintrc`

### Monorepo

Monorepo handlers help us to manage many repos in single repository.
To this we are using `turborepo`

### Changesets

To handle versioning and changelogs in our monorepo, we use `changesets`. <br/>This tool helps us create and manage changesets for each package, ensuring that updates are tracked and documented properly. <br/><br/>When you make changes to a package, you can create a changeset by running:

#### Changelog

```bash
pnpm changeset
```

#### Release log

```bash
pnpm changeset version
```

### Commiting

To make commiting stage faster and commit messages more beauty, we are using `commitsmile`

It's simple CLI commit handler.

```bash copy
pnpm commitsmile
```
