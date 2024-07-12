// @ts-expect-error: No type declaration for module 
import EslintJsonFormatter from "eslint-plugin-json";


export default [{
	files: ["**/*.js",
		"**/*.cjs",
		"**/*.mjs",
		"**/*.ts",
		"**/*.cts",
		"**/*.mts",
		"**/*.jsx",
		"**/*.tsx",
		"**/*.json"],
	name: "JSON formatter",
	plugins: { "@EslintJsonFormatter": EslintJsonFormatter },

	// processor: "json/json",


	rules: {
		"@EslintJsonFormatter/*": ["error", "allowComments"],
		"@EslintJsonFormatter/json": "error",
		"@EslintJsonFormatter/unknown": "error",
		"@EslintJsonFormatter/comment-not-permitted": "error",
		"@EslintJsonFormatter/undefined": "error",
		"@EslintJsonFormatter/enum-value-mismatch": "error",
		"@EslintJsonFormatter/unexpected-end-of-comment": "error",
		"@EslintJsonFormatter/unexpected-end-of-string": "error",
		"@EslintJsonFormatter/unexpected-end-of-number": "error",
		"@EslintJsonFormatter/invalid-unicode": "error",
		"@EslintJsonFormatter/invalid-escape-character": "error",
		"@EslintJsonFormatter/invalid-character": "error",
		"@EslintJsonFormatter/property-expected": "error",
		"@EslintJsonFormatter/comma-expected": "error",
		"@EslintJsonFormatter/colon-expected": "error",
		"@EslintJsonFormatter/value-expected": "error",
		"@EslintJsonFormatter/comma-or-close-backet-expected": "error",
		"@EslintJsonFormatter/comma-or-close-brace-expected": "error",
		"@EslintJsonFormatter/trailing-comma": "error",
		"@EslintJsonFormatter/duplicate-key": "error",
		"@EslintJsonFormatter/schema-resolve-error": "error"
	}
}];
