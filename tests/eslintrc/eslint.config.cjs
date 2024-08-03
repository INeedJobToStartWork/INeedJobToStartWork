const ineedj = require("@ineedj/eslintrc");
const jsdocs = require("@ineedj/eslintrc/index.d.cts");
// /**
//  * @param {import("@ineedj/eslintrc/index.d.ts").TinputConfig}
//  */
module.exports = ineedj({
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

// import ineedj from "../../config/eslintrc/dist/index.cjs";
// import ineedj from "@ineedj/eslintrc";

// export default ineedj({
//   formatters: {
//     json: false,
//     stylistic: false,
//     stylisticJSX: false,
//     stylisticTS: false,
//     perfectionistSorters: false,
//   },
//   modifiers: {
//     only: "warn",
//   },
//   syntax: {
//     eslint: true,
//     jsx: false,
//     next: false,
//     node: true,
//     react: false,
//     storybook: false,
//     tailwindcss: false,
//     typescript: true,
//     toml: false,
//     yaml: false,
//     turbo: true,
//   },
// });

// export default [];
