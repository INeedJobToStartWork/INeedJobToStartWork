import tsParser from "@typescript-eslint/parser";

export const tsParserOptions = {
	parser: tsParser,

	parserOptions: {
		parser: true,
		tsconfigRootDir: process.cwd(),
		project: "./tsconfig.json",

		projectService: true,
		// extraFileExtensions: ['.ts'],

		allowAutomaticSingleRunInference: false,
		disallowAutomaticSingleRunInference: true
	}
};

export default tsParserOptions;
