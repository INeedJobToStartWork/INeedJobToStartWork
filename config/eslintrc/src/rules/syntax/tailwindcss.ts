// @ts-expect-error: No type declaration for module
import EslintTailwindCSS from "eslint-plugin-tailwindcss";
import EslintTailwindCSSReadable from "eslint-plugin-readable-tailwind";
import { languageOptionsTS } from "../helpers";
import { defineFlatConfig } from "eslint-flat-config-utils";

export default defineFlatConfig({
	files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ejs", "**/*.ts", "**/*.tsx", "**/*.mts", "**/*.ets", "**/*.html"],
	name: "TailwindCSS",
	languageOptions: languageOptionsTS(),
	plugins: { "@EslintTailwindCSS": EslintTailwindCSS, "@EslintTailwindCSSReadable": EslintTailwindCSSReadable },
	rules: {
		"@EslintTailwindCSS/classnames-order": "error",
		"@EslintTailwindCSS/enforces-negative-arbitrary-values": "error",
		"@EslintTailwindCSS/enforces-shorthand": "error",
		"@EslintTailwindCSS/migration-from-tailwind-2": "error",
		"@EslintTailwindCSS/no-arbitrary-value": "off",
		"@EslintTailwindCSS/no-contradicting-classname": "error", // can have problems
		"@EslintTailwindCSS/no-custom-classname": "off",
		"@EslintTailwindCSS/no-unnecessary-arbitrary-value": "error",
		// Formatter
		"@EslintTailwindCSSReadable/multiline": "warn",
		"@EslintTailwindCSSReadable/no-unnecessary-whitespace": "warn",
		"@EslintTailwindCSSReadable/sort-classes": "warn"
	}
});
