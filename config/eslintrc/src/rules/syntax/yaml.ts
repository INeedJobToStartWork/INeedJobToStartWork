import { defineFlatConfig } from "eslint-flat-config-utils";
import EslintYML from "eslint-plugin-yml";

export default defineFlatConfig({
	files: ["**/*.yml", "**/*.yaml"],
	name: "Yaml",
	plugins: { "@EslintYML": EslintYML as any },
	rules: {
		"@EslintYML/block-mapping-colon-indicator-newline": ["error", "always"],
		"@EslintYML/block-mapping-question-indicator-newline": ["error", "always"],
		"@EslintYML/block-mapping": ["error", "always"],
		"@EslintYML/block-sequence-hyphen-indicator-newline": ["error", "always"],
		"@EslintYML/block-sequence": ["error", "always"],
		"@EslintYML/file-extension": "off", // Do what do you want
		"@EslintYML/flow-mapping-curly-newline": ["error", "always"],
		"@EslintYML/flow-mapping-curly-spacing": ["error", "always"],
		"@EslintYML/flow-sequence-bracket-newline": ["error", "always"],
		"@EslintYML/indent": ["error", 2, { indicatorValueIndent: 2 }],
		"@EslintYML/key-name-casing": "error",
		"@EslintYML/key-spacing": "error",
		"@EslintYML/no-empty-document": "error",
		"@EslintYML/no-empty-key": "error",
		"@EslintYML/no-empty-mapping-value": "error",
		"@EslintYML/no-empty-sequence-entry": "error",
		"@EslintYML/no-irregular-whitespace": "error",
		"@EslintYML/no-multiple-empty-lines": "error",
		"@EslintYML/no-tab-indent": "error",
		"@EslintYML/no-trailing-zeros": "off", // Maybe someone gonna need this
		"@EslintYML/plain-scalar": "error",
		"@EslintYML/quotes": "error",
		"@EslintYML/require-string-key": "error",
		"@EslintYML/sort-keys": "warn", // Maybe someone need to off it cuz iteration
		"@EslintYML/sort-sequence-values": ["error", { pathPattern: ".*", order: { type: "asc" } }], // Maybe someone gonna off it
		"@EslintYML/spaced-comment": ["error", "always"],
		"@EslintYML/vue-custom-block/no-parsing-error": "off", // Only react
		"@EslintYML/flow-sequence-bracket-spacing": "off"
	}
});
