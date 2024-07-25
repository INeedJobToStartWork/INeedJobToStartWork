/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// @ts-expect-error: No type declaration for module
import EslintStorybook from "eslint-plugin-storybook";

export default [
	{
		files: ["**/*.stories.@(js|jsx|mjs|ts|tsx)"],
		name: "Storybook",
		plugins: { "@EslintStorybook": EslintStorybook },
		rules: {
			"@EslintStorybook/default-exports": "error",
			"@EslintStorybook/await-interactions": "error",
			"@EslintStorybook/context-in-play-function": "error",
			"@EslintStorybook/csf-component": "error",
			"@EslintStorybook/hierarchy-separator": "error",
			"@EslintStorybook/meta-inline-properties": "error", // Maybe off
			"@EslintStorybook/no-redundant-story-name": "error",
			"@EslintStorybook/no-stories-of": "error",
			"@EslintStorybook/no-title-property-in-meta": "warn",
			"@EslintStorybook/no-uninstalled-addons": "error",
			"@EslintStorybook/prefer-pascal-case": "error",
			"@EslintStorybook/story-exports": "error",
			"@EslintStorybook/use-storybook-expect": "error",
			"@EslintStorybook/use-storybook-testing-library": "error"
		}
	}
];
