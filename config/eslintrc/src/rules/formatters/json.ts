import EslintJsonC from "eslint-plugin-jsonc";
import { filesTS } from "../helpers";
import { defineFlatConfig } from "eslint-flat-config-utils";

const files = filesTS(["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.jsx", "**/*.json"]);

export default defineFlatConfig({
	files: files,
	name: "JSON formatter",
	plugins: { "@EslintJsonC": EslintJsonC as object },

	rules: {
		"@EslintJsonC/array-bracket-newline": "error",
		"@EslintJsonC/array-bracket-spacing": ["error", "never"],
		"@EslintJsonC/array-element-newline": "off",
		"@EslintJsonC/auto": "error",
		"@EslintJsonC/comma-dangle": "error",
		"@EslintJsonC/comma-style": "error",
		"@EslintJsonC/indent": "error",
		"@EslintJsonC/key-name-casing": "error",
		"@EslintJsonC/key-spacing": "error",
		"@EslintJsonC/no-bigint-literals": "error",
		"@EslintJsonC/no-binary-expression": "off", // sometimes can be more readable
		"@EslintJsonC/no-binary-numeric-literals": "error",
		"@EslintJsonC/no-comments": "error",
		"@EslintJsonC/no-dupe-keys": "error",
		"@EslintJsonC/no-escape-sequence-in-identifier": "error",
		"@EslintJsonC/no-floating-decimal": "error",
		"@EslintJsonC/no-hexadecimal-numeric-literals": "error",
		"@EslintJsonC/no-infinity": "error",
		"@EslintJsonC/no-irregular-whitespace": "error",
		"@EslintJsonC/no-multi-str": "error",
		"@EslintJsonC/no-nan": "error",
		"@EslintJsonC/no-number-props": "error",
		"@EslintJsonC/no-numeric-separators": "off",
		"@EslintJsonC/no-octal-escape": "error",
		"@EslintJsonC/no-octal-numeric-literals": "off",
		"@EslintJsonC/no-octal": "off",
		"@EslintJsonC/no-parenthesized": "error",
		"@EslintJsonC/no-plus-sign": "error",
		"@EslintJsonC/no-regexp-literals": "warn",
		"@EslintJsonC/no-sparse-arrays": "warn",
		"@EslintJsonC/no-template-literals": "off",
		"@EslintJsonC/no-undefined-value": "error",
		"@EslintJsonC/no-unicode-codepoint-escapes": "error",
		"@EslintJsonC/no-useless-escape": "error",
		"@EslintJsonC/object-curly-newline": "error",
		"@EslintJsonC/sort-array-values": "off",
		"@EslintJsonC/sort-keys": "off",
		"@EslintJsonC/space-unary-ops": "error",
		"@EslintJsonC/valid-json-number": "error",
		"@EslintJsonC/vue-custom-block/no-parsing-error": "off" // Only React
	}
});
