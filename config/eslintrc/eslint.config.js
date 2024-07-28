import ineedj from "./dist/index.js";

export default ineedj({
	formatters: {
		json: false,
		stylistic: false,
		stylisticJSX: false,
		stylisticTS: false,
		perfectionistSorters: false
	},
	syntax: {
		vitest: true,
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
		turbo: true
	}
});

// export default [];
