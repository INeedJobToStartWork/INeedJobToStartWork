import type { IFlatConfig } from "../../types";
import EslintTailwindCSS from "eslint-plugin-tailwindcss";
import EslintBetterTailwindCSS from "eslint-plugin-better-tailwindcss";
import { languageOptionsTS } from "../helpers";
import { defineFlatConfig } from "eslint-flat-config-utils";

export default defineFlatConfig<IFlatConfig>({
	files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ejs", "**/*.ts", "**/*.tsx", "**/*.mts", "**/*.ets", "**/*.html"],
	name: "TailwindCSS",
	languageOptions: languageOptionsTS(),
	plugins: {
		"@EslintTailwindCSS": EslintTailwindCSS as any,
		"@EslintTailwindCSSReadable": EslintBetterTailwindCSS
	},
	rules: {
		"@EslintTailwindCSS/classnames-order": "error",
		"@EslintTailwindCSS/enforces-negative-arbitrary-values": "error",
		"@EslintTailwindCSS/enforces-shorthand": "error",
		// "migration-from-tailwind-2" removed in eslint-plugin-tailwindcss v4
		"@EslintTailwindCSS/no-arbitrary-value": "off",
		"@EslintTailwindCSS/no-contradicting-classname": "error", // can have problems
		"@EslintTailwindCSS/no-custom-classname": "off",
		"@EslintTailwindCSS/no-unnecessary-arbitrary-value": "error",
		// Formatter
		"@EslintTailwindCSSReadable/enforce-consistent-line-wrapping": "warn",
		"@EslintTailwindCSSReadable/no-unnecessary-whitespace": "warn",
		"@EslintTailwindCSSReadable/enforce-consistent-class-order": "warn",
		"@EslintTailwindCSSReadable/no-duplicate-classes": "error"
	}
});
