/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// @ts-expect-error: No type declaration for module
import EslintTurbo from "eslint-plugin-turbo";
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
		name: "Turbo",
		files: files,
		languageOptions: languageOptions,
		plugins: { "@EslintTurbo": EslintTurbo },
		rules: {
			"@EslintTurbo/no-undeclared-env-vars": "error"
		}
	}
];
