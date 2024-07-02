import EslintStorybook from "eslint-plugin-storybook";

export default [{
	files: ["**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	name: "Storybook",
	plugins: { "@EslintStorybook": EslintStorybook },
	rules: {}
}];
