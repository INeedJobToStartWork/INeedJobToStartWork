import type { IFlatConfig } from "../../types";
import { defineFlatConfig } from "eslint-flat-config-utils";
import EslintPerfectionist from "eslint-plugin-perfectionist";

export default defineFlatConfig<IFlatConfig>({
	files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ejs", "**/*.ts", "**/*.tsx", "**/*.mts", "**/*.ets"],
	name: "Perfectionist Sorter",

	plugins: { "@EslintPerfectionist": EslintPerfectionist },
	rules: {
		"@EslintPerfectionist/sort-array-includes": [
			"error",
			{
				type: "line-length",
				order: "asc"
			}
		],
		"@EslintPerfectionist/sort-classes": "off",
		"@EslintPerfectionist/sort-enums": "off", // On when block sort enums by order incrementation (?)
		"@EslintPerfectionist/sort-exports": [
			"error",
			{
				type: "natural",
				order: "asc"
			}
		],
		"@EslintPerfectionist/sort-imports": [
			"error",
			{
				type: "natural",
				order: "asc"
			}
		],

		// "@EslintPerfectionist/sort-named-imports":[
		//   'error',
		//   {
		//     type: 'natural',
		//     order: 'asc',
		//     groups: [
		//       'type',
		//       'react',
		//       'nanostores',
		//       ['builtin', 'external'],
		//       'internal-type',
		//       'internal',
		//       ['parent-type', 'sibling-type', 'index-type'],
		//       ['parent', 'sibling', 'index'],
		//       'side-effect',
		//       'style',
		//       'object',
		//       'unknown',
		//     ],
		//     'custom-groups': {
		//       value: {
		//         react: ['react', 'react-*'],
		//         nanostores: '@nanostores/**',
		//       },
		//       type: {
		//         react: 'react',
		//       },
		//     },
		//     'newlines-between': 'always',
		//     'internal-pattern': [
		//         '@/pages/**',
		//         '@/lib/**',
		//       '@/components/**',
		//       '@/stores/**',
		//     ],
		//   },
		// ],
		"@EslintPerfectionist/sort-interfaces": [
			"error",
			{
				type: "natural",
				order: "asc"
			}
		],
		"@EslintPerfectionist/sort-jsx-props": "off", // not sure how to configure that
		"@EslintPerfectionist/sort-maps": [
			"error",
			{
				type: "alphabetical",
				order: "asc"
			}
		],
		"@EslintPerfectionist/sort-named-exports": [
			"error",
			{
				type: "natural",
				order: "asc"
			}
		],
		"@EslintPerfectionist/sort-object-types": [
			"error",
			{
				type: "natural",
				order: "asc"
			}
		],
		"@EslintPerfectionist/sort-objects": "off",
		"@EslintPerfectionist/sort-intersection-types": [
			"error",
			{
				type: "natural",
				order: "asc"
			}
		],
		"@EslintPerfectionist/sort-union-types": [
			"error",
			{
				type: "natural",
				order: "asc"
			}
		]
		// sort-astro/svelte/vue-attributes removed in perfectionist v5
	}
});
