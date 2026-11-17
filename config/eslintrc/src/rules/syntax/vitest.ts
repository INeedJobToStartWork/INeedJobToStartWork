import type { IFlatConfig } from "../../types";
import EslintVitest from "@vitest/eslint-plugin";
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

export default defineFlatConfig<IFlatConfig>({
	name: "VitestJS",
	files: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"],
	languageOptions: languageOptions,
	plugins: { vitest: EslintVitest },
	// plugins: { "@EslintVitest": EslintVitest as any },
	rules: {
		...EslintVitest.configs.recommended.rules
	}
});
