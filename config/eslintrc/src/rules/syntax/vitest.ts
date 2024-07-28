/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import EslintVitest from "eslint-plugin-vitest";
import globals from "globals";

import tsParserOptions from "../helpers/tsParser";
import { isTS, languageOptionsTS } from "../helpers";

const languageOptions = (() =>
	languageOptionsTS({
		ecmaVersion: "latest",
		sourceType: "module",
		globals: { ...globals.node },
		...(isTS ? tsParserOptions : {})
	}))();

export default [
	{
		name: "VitestJS",
		files: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"],
		languageOptions: languageOptions,
		plugins: { "@EslintVitest": EslintVitest },
		rules: {
			...EslintVitest.configs.recommended
		}
	}
];
