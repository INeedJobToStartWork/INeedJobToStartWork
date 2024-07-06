import stylisticJs from "@stylistic/eslint-plugin-js";
import stylisticPlus from "@stylistic/eslint-plugin-plus";
import globals from "globals";

export default [{
	files: ["**/*.js",
		"**/*.jsx",
		"**/*.mjs",
		"**/*.ejs",
		"**/*.ts",
		"**/*.tsx",
		"**/*.mts",
		"**/*.ets"],
	languageOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		globals: { ...globals.node }
	},
	name: "stylistic_js",
	plugins: {
		"@stylistic/plus": stylisticPlus,
		"@stylistic/js": stylisticJs
	},
	rules: {
		"@stylistic/plus/type-generic-spacing": ["error"],
		"@stylistic/plus/type-named-tuple-spacing": ["error"],
		"@stylistic/plus/indent-binary-ops": ["error", 2],
		"@stylistic/js/array-bracket-newline": ["error", "never"],
		"@stylistic/js/array-bracket-spacing": ["error",
			"never",
			{
				arraysInArrays: false, singleValue: false
			}],
		"@stylistic/js/array-element-newline": ["error",
			{
				multiline: true, minItems: 5
			}],
		"@stylistic/js/indent": ["error", "tab"],
		"@stylistic/js/arrow-parens": [2, "as-needed", { requireForBlockBody: true }],
		"@stylistic/js/arrow-spacing": "error",
		"@stylistic/js/block-spacing": ["error", "always"],
		"@stylistic/js/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
		"@stylistic/js/comma-dangle": ["error", "never"],
		"@stylistic/js/comma-spacing": ["error",
			{
				before: false, after: true
			}],
		"@stylistic/js/comma-style": ["error", "last"],
		"@stylistic/js/computed-property-spacing": ["error", "never"],
		"@stylistic/js/eol-last": ["error", "always"],
		"@stylistic/js/dot-location": ["error", "property"],
		"@stylistic/js/function-call-argument-newline": ["error", "never"],
		"@stylistic/js/function-call-spacing": ["error", "never"],
		"@stylistic/js/function-paren-newline": ["error", "never"],
		"@stylistic/js/implicit-arrow-linebreak": ["error", "beside"],
		"@stylistic/js/key-spacing": ["error", { beforeColon: false }],
		"@stylistic/js/keyword-spacing": ["error", { after: true }],
		"@stylistic/js/linebreak-style": ["error", "windows"],
		"@stylistic/js/lines-around-comment": ["error", { beforeLineComment: true }],
		"@stylistic/js/max-len": ["error",
			{
				code: 120,
				tabWidth: 4,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true
			}],
		"@stylistic/js/max-statements-per-line": ["error", { max: 4 }],
		"@stylistic/js/new-parens": ["error", "never"],
		"@stylistic/js/newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
		"@stylistic/js/no-confusing-arrow": ["error", { allowParens: false }],
		"@stylistic/js/no-extra-parens": "error",
		"@stylistic/js/no-extra-semi": "error",
		"@stylistic/js/no-floating-decimal": "off",
		"@stylistic/js/no-mixed-operators": "error",
		"@stylistic/js/no-mixed-spaces-and-tabs": "error",
		"@stylistic/js/no-multi-spaces": ["error", { exceptions: { BinaryExpression: true } }],
		"@stylistic/js/no-multiple-empty-lines": ["error", { max: 2 }],
		"@stylistic/js/no-tabs": ["off"],
		"@stylistic/js/no-trailing-spaces": ["error", { ignoreComments: true }],
		"@stylistic/js/no-whitespace-before-property": "error",
		"@stylistic/js/nonblock-statement-body-position": ["error", "beside"],
		"@stylistic/js/object-curly-newline": ["error",
			{
				multiline: true, minProperties: 2
			}],
		"@stylistic/js/object-curly-spacing": ["error", "always"],
		"@stylistic/js/object-property-newline": "off",
		"@stylistic/js/operator-linebreak": ["off"],
		"@stylistic/js/padded-blocks": ["error", "never"],
		"@stylistic/js/quote-props": ["error", "as-needed"],
		"@stylistic/js/quotes": ["error", "double"],
		"@stylistic/js/rest-spread-spacing": ["error", "never"],
		"@stylistic/js/semi": ["error", "always"],
		"@stylistic/js/semi-spacing": "error",
		"@stylistic/js/semi-style": ["error", "last"],
		"@stylistic/js/space-before-blocks": "error",
		"@stylistic/js/space-before-function-paren": ["error", "never"],
		"@stylistic/js/space-in-parens": ["error", "never"],
		"@stylistic/js/space-infix-ops": "error",
		"@stylistic/js/space-unary-ops": "error",
		"@stylistic/js/spaced-comment": ["error", "always"],
		"@stylistic/js/switch-colon-spacing": ["error",
			{
				after: true, before: false
			}],
		"@stylistic/js/template-curly-spacing": "error",
		"@stylistic/js/wrap-iife": ["error", "outside"],
		"@stylistic/js/wrap-regex": "error",
		"@stylistic/js/yield-star-spacing": ["error", "after"],
		"@stylistic/js/jsx-quotes": ["error", "prefer-double"]
	}
}];
