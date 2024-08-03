/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import EslintNode from "eslint-plugin-n";
import globals from "globals";

import tsParserOptions from "../helpers/tsParser";
import { filesTS, isTS, languageOptionsTS } from "../helpers";
import { defineFlatConfig } from "eslint-flat-config-utils";

const files = (() => filesTS(["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ejs"]))();

const languageOptions = (() =>
	languageOptionsTS({
		ecmaVersion: "latest",
		sourceType: "module",
		globals: { ...globals.node },
		...(isTS ? tsParserOptions : {})
	}))();

export default defineFlatConfig({
	name: "NodeJS",
	files: files,
	languageOptions: languageOptions,
	plugins: { "@EslintNode": EslintNode as any },
	rules: {
		"@EslintNode/callback-return": "error",
		"@EslintNode/exports-style": "error", // maybe problems cuz we only esm
		"@EslintNode/file-extension-in-import": "off", // idk how to config that cuz  there can be many cases buged
		"@EslintNode/global-require": "error", // There will be cases to off this for suer
		"@EslintNode/handle-callback-err": "error", // Errors
		"@EslintNode/no-callback-literal": "error",
		"@EslintNode/no-deprecated-api": "off", // used in other
		"@EslintNode/no-extraneous-import": "off",
		"@EslintNode/hashbang": "error",
		"@EslintNode/prefer-node-protocol": "error", // used in other plug too
		"@EslintNode/process-exit-as-throw": "off",
		// "@EslintNode/prefer-promises/fs": "warn", // Maybe Turn off
		// "@EslintNode/prefer-promises/dns": "warn",
		// "@EslintNode/prefer-global/url": "error",
		// "@EslintNode/prefer-global/url-search-params": "error",
		// "@EslintNode/prefer-global/text-encoder": "error",
		// "@EslintNode/prefer-global/text-decoder": "error",
		// "@EslintNode/prefer-global/process": "error",
		// "@EslintNode/prefer-global/console": "error",
		// "@EslintNode/prefer-global/buffer": "error",
		// "@EslintNode/no-unsupported-features/node-builtins": "error",
		// "@EslintNode/no-unsupported-features/es-syntax": "error",
		// "@EslintNode/no-unsupported-features/es-builtins": "error",
		"@EslintNode/no-unpublished-require": "warn", // Maybe problems with bundlers
		"@EslintNode/no-unpublished-import": "warn", // Maybe problems with bundlers
		"@EslintNode/no-unpublished-bin": "error",
		"@EslintNode/no-sync": "off",
		"@EslintNode/no-restricted-require": "off", // Manually config
		"@EslintNode/no-restricted-import": "off", // Manually config
		"@EslintNode/no-process-exit": "warn", // In future put on error
		"@EslintNode/no-process-env": "warn", // Maybe off
		"@EslintNode/no-new-require": "off", //  Silly and only esm
		"@EslintNode/no-path-concat": "error",
		"@EslintNode/no-mixed-requires": "error",
		// "@EslintNode/no-missing-require": "error", // Wrong Errors - To imports use other plugin `eslint-plugin-import`
		// "@EslintNode/no-missing-import": "error", // Wrong Errors - To imports use other plugin `eslint-plugin-import`
		"@EslintNode/no-extraneous-require": "error",
		"@EslintNode/no-exports-assign": "error"
	}
});
