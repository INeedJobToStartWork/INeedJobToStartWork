import EslintYML from "eslint-plugin-yml";

export default [{
	files: ["**/*.yml", "**/*.yaml"],
	name: "Yaml",
	plugins: { "@EslintYML": EslintYML },
	rules: {}
}];
