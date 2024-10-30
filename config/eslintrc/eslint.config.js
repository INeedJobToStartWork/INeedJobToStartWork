import ineedj from "@ineedj/eslintrc";

export default ineedj({
	formatters: {
		json: false,
		stylistic: false,
		stylisticJSX: false,
		stylisticTS: false,
		perfectionistSorters: false
	},
	syntax: {
		website: false,

		vitest: false,
		eslint: true,
		jsx: false,
		next: false,
		node: true,
		react: false,
		storybook: false,
		tailwindcss: false,
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
	"@typescript-eslint/explicit-module-boundary-types"
);

// export default [];
