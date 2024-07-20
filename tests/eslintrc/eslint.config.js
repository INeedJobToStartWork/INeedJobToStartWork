import ineedj from "../../config/eslintrc/dist/index.js";

export default ineedj({
  formatters: {
    json: false,
    stylistic: false,
    stylisticJSX: false,
    stylisticTS: false,
    perfectionistSorters: false,
  },
  syntax: {
    eslint: false,
    jsx: false,
    next: false,
    node: false,
    react: false,
    storybook: false,
    tailwindcss: false,
    typescript: false,
    toml: false,
    yaml: false,
  },
});

// export default [];
