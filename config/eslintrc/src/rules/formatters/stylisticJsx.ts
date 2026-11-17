import type { IFlatConfig } from "../../types";
import stylistic from "@stylistic/eslint-plugin";
import { defineFlatConfig } from "eslint-flat-config-utils";

export default defineFlatConfig<IFlatConfig>({
	files: ["**/*.jsx", "**/*.tsx"],
	name: "Stylistic - Strong Typing",
	plugins: { "@stylistic/jsx": stylistic },
	rules: {
		// "@stylistic/jsx/jsx-child-element-spacing": [1, { selfClosing: "line-aligned", nonEmpty: "after-props" }], TODO
		"@stylistic/jsx/jsx-closing-bracket-location": "error",
		"@stylistic/jsx/jsx-closing-tag-location": "error",
		"@stylistic/jsx/jsx-curly-brace-presence": [
			"error",
			{
				props: "always",
				children: "always",
				propElementValues: "always"
			}
		],
		"@stylistic/jsx/jsx-curly-newline": [
			"warn",
			{
				multiline: "forbid",
				singleline: "forbid"
			}
		],
		"@stylistic/jsx/jsx-curly-spacing": [
			"error",
			{
				when: "always",
				children: true
			}
		],
		"@stylistic/jsx/jsx-equals-spacing": ["error", "never"],
		"@stylistic/jsx/jsx-first-prop-new-line": ["error", "never"],
		"@stylistic/jsx/jsx-function-call-newline": ["error", "multiline"],
		"@stylistic/jsx/jsx-indent-props": ["error", "tab"],
		"@stylistic/jsx/jsx-max-props-per-line": [
			"error",
			{
				maximum: 6,
				when: "multiline"
			}
		],
		"@stylistic/jsx/jsx-newline": ["error", { prevent: true }],
		"@stylistic/jsx/jsx-one-expression-per-line": "error",
		"@stylistic/jsx/jsx-pascal-case": "off", // same but in other lang
		"@stylistic/jsx/jsx-self-closing-comp": [
			"error",
			{
				component: true,
				html: true
			}
		],
		// jsx-indent, jsx-sort-props, jsx-props-no-multi-spaces removed in stylistic v5 (covered by indent / no-multi-spaces)
		"@stylistic/jsx/jsx-tag-spacing": [
			"error",
			{
				closingSlash: "never",
				beforeSelfClosing: "never",
				afterOpening: "never",
				beforeClosing: "always"
			}
		]
	}
});
