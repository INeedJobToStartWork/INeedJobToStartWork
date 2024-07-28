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

// export default [];
