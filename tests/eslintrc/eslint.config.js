import ineedj from "@ineedj/eslintrc";

// typedef {import("@ineedj/eslintrc/index.js").IConfigInput}
export default await ineedj({
  modifiers: {
    only: "warn",
  },
  formatters: {
    json: false,
    stylistic: false,
    stylisticJSX: false,
    stylisticTS: false,
    perfectionistSorters: false,
  },
  syntax: {
    eslint: true,
    jsx: false,
    next: false,
    node: true,
    react: false,
    storybook: false,
    tailwindcss: false,
    typescript: true,
    toml: false,
    yaml: false,
    turbo: true,
  },
});
