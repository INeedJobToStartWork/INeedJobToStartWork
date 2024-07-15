// @ts-expect-error: No type declaration for module
import EslintNode from "eslint-plugin-node";

export default [
  {
    files: [
      "**/*.js",
      "**/*.jsx",
      "**/*.mjs",
      "**/*.ejs",
      "**/*.ts",
      "**/*.tsx",
      "**/*.mts",
      "**/*.ets",
    ],
    name: "NodeJS",

    plugins: { "@EslintNode": EslintNode },
    rules: {
      "@EslintNode/callback-return": "error",

      // "@EslintNode/exports-style":"error", // maybe problems cuz we only esm
      "@EslintNode/file-extension-in-import": "off", // idk how to config that cuz  there can be many cases buged
      // "@EslintNode/global-require":"error", // There will be cases to off this for suer
      // "@EslintNode/handle-callback-err": "error", // Errors
      "@EslintNode/no-callback-literal": "error",
      "@EslintNode/no-deprecated-api": "off", // used in other
    },
  },
];
