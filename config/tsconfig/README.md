<img width="1280" alt="tsconfig" src="https://github.com/INeedJobToStartWork/INeedJobToStartWork/assets/97305201/ec9ff67c-aafb-418c-b38c-f3e72cbb23ca">
<h1 align="center">@ineedj/tsconfig</h1>
<p align="center"><b>My Typescript config</b></p>

<hr/>

## Install
Ni
```bash copy
ni -D "@ineedj/tsconfig"
```
NPM

```bash copy
npm install -D "@ineedj/tsconfig"
```

PNPM

```bash copy
pnpm add -D "@ineedj/tsconfig"
```

Yarn

```bash copy
yarn add -D "@ineedj/tsconfig"
```

## Usage
`tsconfig.json`
```
{
  "$schema": "http://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "outDir": "./dist",
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"]
    }
  },
  "include": ["src"],
  "extends": "@ineedj/tsconfig/base.json"
}

```
