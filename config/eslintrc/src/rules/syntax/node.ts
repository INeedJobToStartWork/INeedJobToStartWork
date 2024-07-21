// @ts-expect-error: No type declaration for module
import EslintNode from "eslint-plugin-node";
import globals from "globals";

import tsParserOptions from "../helpers/tsParser";
import { filesTS, isTS, languageOptionsTS } from "../helpers";

const files = (() => filesTS(["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ejs"]))();

const languageOptions = (() =>
	languageOptionsTS({
		ecmaVersion: "latest",
		sourceType: "module",
		globals: { ...globals.node },
		...(isTS ? tsParserOptions : {})
	}))();

export default [
	{
		name: "NodeJS",
		files: files,
		languageOptions: languageOptions,
		plugins: { "@EslintNode": EslintNode },
		rules: {
			"@EslintNode/callback-return": "error",

			// "@EslintNode/exports-style": "error", // maybe problems cuz we only esm
			"@EslintNode/file-extension-in-import": "off", // idk how to config that cuz  there can be many cases buged
			// "@EslintNode/global-require": "error", // There will be cases to off this for suer
			"@EslintNode/handle-callback-err": "error", // Errors
			"@EslintNode/no-callback-literal": "error",
			"@EslintNode/no-deprecated-api": "off" // used in other
		}
	}
];
