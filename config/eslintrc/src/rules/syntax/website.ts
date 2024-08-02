/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import globals from "globals";
import { filesTS, languageOptionsTS } from "../helpers";

import EslintCompat from "eslint-plugin-compat";
import { defineFlatConfig } from "eslint-flat-config-utils";

const files = (() => filesTS(["**/*.html", "**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ejs"]))();
const languageOptions = (() =>
	languageOptionsTS({ ecmaVersion: "latest", sourceType: "module", globals: { ...globals.node } }))();

export default defineFlatConfig({
	files: files,
	languageOptions: languageOptions,
	name: "Website",
	plugin: {
		"@EslintCompat": EslintCompat
	},
	rule: {
		"@EslintCompat/compat": "warn"
	}
});
