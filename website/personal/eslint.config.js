import ineedj from "@ineedj/eslintrc";

export default ineedj({
	formatters: {
		json: false,
		stylistic: false,
		stylisticJSX: false,
		stylisticTS: false,
		perfectionistSorters: false
	},
	modifiers: {
		commands: true
	},
	syntax: {
		website: false,
		mdx: true,
		vitest: false,
		eslint: true,
		jsx: true,
		next: true,
		node: true,
		// react: true,
		storybook: false,
		tailwindcss: true,
		typescript: true,
		toml: true,
		yaml: true,
		turbo: false,
		ignoreGlobalFiles: {
			gitIgnore: true,
			basicIgnores: true
		}
	}
}).removeRules(
	"@typescript-eslint/no-unsafe-assignment",
	"@typescript-eslint/no-explicit-any",
	"@EslintTSDocs/syntax",
	"@EslintTailwindCSSReadable/multiline",
	"@EslintUnicorn/filename-case",
	"@typescript-eslint/explicit-module-boundary-types",
	"@EslintUnicorn/no-keyword-prefix",
	"new-cap",
	"@EslintNode/no-process-env",
	"@EslintImports/no-unassigned-import"
);
// export default ineedj({
// 	formatters: {
// 		json: true,
// 		stylistic: false,
// 		stylisticJSX: false,
// 		stylisticTS: false,
// 		perfectionistSorters: false
// 	},
// 	modifiers: {
// 		commands: true
// 	},
// 	syntax: {
// 		website: true,
// 		mdx: true,
// 		vitest: false,
// 		eslint: true,
// 		jsx: true,
// 		next: true,
// 		node: true,
// 		react: true,
// 		storybook: false,
// 		tailwindcss: true,
// 		typescript: true,
// 		toml: true,
// 		yaml: true,
// 		turbo: true,
// 		ignoreGlobalFiles: {
// 			gitIgnore: true,
// 			basicIgnores: true
// 		}
// 	}
// }).removeRules(
// 	"@typescript-eslint/no-unsafe-assignment",
// 	"@typescript-eslint/no-explicit-any",
// 	"@EslintTSDocs/syntax",
// 	"@typescript-eslint/explicit-module-boundary-types"
// );

// export default [];
