import type { IFlatConfig } from "../../types";
import globals from "globals";
import { filesTS, languageOptionsTS } from "../helpers";

import EslintCompat from "eslint-plugin-compat";
import { defineFlatConfig } from "eslint-flat-config-utils";

const files = (() => filesTS(["**/*.html", "**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ejs"]))();
const languageOptions = (() =>
	languageOptionsTS({ ecmaVersion: "latest", sourceType: "module", globals: { ...globals.node } }))();

export default defineFlatConfig<IFlatConfig>({
	files: files,
	languageOptions: languageOptions,
	name: "Website",
	plugins: {
		"@EslintCompat": EslintCompat
	},
	rules: {
		"@EslintCompat/compat": "warn"
	}
});
