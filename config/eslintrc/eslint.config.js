import ineedj from "./dist/index.js";

export default ineedj({
	formatters: {
		json: true,
		stylistic: false,
		stylisticJSX: false,
		stylisticTS: false,
		perfectionistSorters: false
	},
	modifiers: {
		only: "warn",
		commands: false
	},
	syntax: {
		mdx: true,
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
