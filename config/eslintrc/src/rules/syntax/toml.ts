import { defineFlatConfig } from "eslint-flat-config-utils";
import EslintTOML from "eslint-plugin-toml";

export default defineFlatConfig({
	files: ["**/*.toml"],
	name: "Toml",
	plugins: { "@EslintTOML": EslintTOML },
	rules: {
		"@EslintTOML/array-bracket-newline": "error",
		"@EslintTOML/array-bracket-spacing": "error",
		"@EslintTOML/array-element-newline": "off",
		"@EslintTOML/comma-style": "error",
		"@EslintTOML/inline-table-curly-spacing": "error",
		"@EslintTOML/key-spacing": "error",
		"@EslintTOML/keys-order": "error",
		"@EslintTOML/no-mixed-type-in-array:": "off", // idk how to config
		"@EslintTOML/no-non-decimal-integer": "off",
		"@EslintTOML/no-space-dots": "error",
		"@EslintTOML/no-unreadable-number-separator": "error",
		"@EslintTOML/padding-line-between-pairs": "error",
		"@EslintTOML/padding-line-between-tables": "error",
		"@EslintTOML/precision-of-fractional-seconds": "error",
		"@EslintTOML/precision-of-integer": "error",
		"@EslintTOML/quoted-keys": "error",
		"@EslintTOML/spaced-comment": ["error", "always"],
		"@EslintTOML/table-bracket-spacing": ["error", "always"],
		"@EslintTOML/tables-order": "error",
		"@EslintTOML/vue-custom-block/no-parsing-error": "off" // React only
	}
});
