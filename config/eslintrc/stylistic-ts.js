import stylisticTs from "@stylistic/eslint-plugin-ts";

export default [
	{
		ignores: ["**/*.js", "**/*.cjs", "**/*.mjs"],
		name: "Stylistic - Strong Typing",
		plugins: {
			"@stylistic/ts": stylisticTs,
		},
		rules: {
			"@stylistic/ts/block-spacing":["error", "always"],
			"@stylistic/ts/brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
			"@stylistic/ts/comma-dangle": ["error", "never"],
			"@stylistic/ts/comma-spacing": ["error", { "before": false, "after": true }],
			"@stylistic/ts/function-call-spacing": ["error", "never"],
			"@stylistic/ts/indent": ["error", "tab"],
			"@stylistic/ts/key-spacing": ["error", { "beforeColon": false }],
			"@stylistic/ts/keyword-spacing": ["error", { "after": true }],
			"@stylistic/ts/lines-around-comment": ["error", { "beforeLineComment": true }],
			"@stylistic/ts/lines-between-class-members": ["error", "always", { "exceptAfterOverload": true }],
			"@stylistic/ts/member-delimiter-style": "error",
			"@stylistic/ts/no-extra-parens": "error",
			"@stylistic/ts/no-extra-semi": "error",
			"@stylistic/ts/object-curly-newline": ["error", { "multiline": true }],
			"@stylistic/ts/object-curly-spacing": ["error", "always"],
			"@stylistic/ts/object-property-newline": "off",
			"@stylistic/ts/quote-props": ["error", "as-needed"],
			"@stylistic/ts/quotes": ["error", "double"],
			"@stylistic/ts/semi": ["error", "always"],
			"@stylistic/ts/space-before-blocks": "error",
			"@stylistic/ts/space-before-function-paren": ["error", "never"],
			"@stylistic/ts/space-infix-ops": "error",
			"@stylistic/ts/type-annotation-spacing": ["error", { "before": false, "after": true, "overrides": { "arrow": { "before": true, "after": true } } }]
		}
	}
];
