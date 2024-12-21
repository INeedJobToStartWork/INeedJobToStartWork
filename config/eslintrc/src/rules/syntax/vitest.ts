/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import EslintVitest from "eslint-plugin-vitest";
import globals from "globals";

import tsParserOptions from "../helpers/tsParser";
import { isTs, languageOptionsTS } from "../helpers";
import { defineFlatConfig } from "eslint-flat-config-utils";

const languageOptions = (() =>
	languageOptionsTS({
		ecmaVersion: "latest",
		sourceType: "module",
		globals: { ...globals.node },
		...(isTs ? tsParserOptions : {})
	}))();

export default defineFlatConfig({
	name: "VitestJS",
	files: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"],
	languageOptions: languageOptions,
	plugins: { vitest: EslintVitest as any },
	// plugins: { "@EslintVitest": EslintVitest as any },
	rules: {
		...EslintVitest.configs.recommended.rules
	}
});
