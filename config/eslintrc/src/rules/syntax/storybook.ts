// @ts-expect-error: No type declaration for module
import EslintStorybook from "eslint-plugin-storybook";

export default [
	{
		files: ["**/*.stories.@(js|jsx|mjs|ts|tsx)"],
		name: "Storybook",
		plugins: { "@EslintStorybook": EslintStorybook },
		rules: {}
	}
];
