// @ts-expect-error: No type declaration for module 
import EslintNext from "@next/eslint-plugin-next";

export default [{
	files: ["**/*.js",
		"**/*.jsx",
		"**/*.mjs",
		"**/*.ejs",
		"**/*.ts",
		"**/*.tsx",
		"**/*.mts",
		"**/*.ets"],
	name: "NextJS",
	plugins: { "@EslintNext": EslintNext },
	rules: {
		"@EslintNext/google-font-display": "error",
		"@EslintNext/google-font-preconnect": "error",
		"@EslintNext/inline-script-id": "error",
		"@EslintNext/next-script-for-ga": "error",
		"@EslintNext/no-assign-module-variable": "error",
		"@EslintNext/no-async-client-component": "error",
		"@EslintNext/no-before-interactive-script-outside-document": "error",
		"@EslintNext/no-css-tags": "error",
		"@EslintNext/no-document-import-in-page": "error",
		"@EslintNext/no-duplicate-head": "error",
		"@EslintNext/no-head-element": "error",
		"@EslintNext/no-head-import-in-document": "error",
		"@EslintNext/no-html-link-for-pages": "error",
		"@EslintNext/no-img-element": "error",
		"@EslintNext/no-page-custom-font": "error",
		"@EslintNext/no-script-component-in-head": "error",
		"@EslintNext/no-styled-jsx-in-document": "error",
		"@EslintNext/no-sync-scripts": "error",
		"@EslintNext/no-title-in-document-head": "error",
		"@EslintNext/no-typos": "error",
		"@EslintNext/no-unwanted-polyfillio": "error"
	}
}];
