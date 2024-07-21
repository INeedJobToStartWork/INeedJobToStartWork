// @ts-expect-error: No type declaration for module
import EslintTailwindCSS from "eslint-plugin-tailwindcss";
import { languageOptionsTS } from "../helpers";

export default [
	{
		files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ejs", "**/*.ts", "**/*.tsx", "**/*.mts", "**/*.ets", "**/*.html"],
		name: "TailwindCSS",
		languageOptions: languageOptionsTS(),
		plugins: { "@EslintTailwindCSS": EslintTailwindCSS },
		rules: {
			"@EslintTailwindCSS/classnames-order": "error",
			"@EslintTailwindCSS/enforces-negative-arbitrary-values": "error",
			"@EslintTailwindCSS/enforces-shorthand": "error",
			"@EslintTailwindCSS/migration-from-tailwind-2": "error",
			"@EslintTailwindCSS/no-arbitrary-value": "off",
			"@EslintTailwindCSS/no-contradicting-classname": "error", // can have problems
			"@EslintTailwindCSS/no-custom-classname": "off",
			"@EslintTailwindCSS/no-unnecessary-arbitrary-value": "error"
		}
	}
];
