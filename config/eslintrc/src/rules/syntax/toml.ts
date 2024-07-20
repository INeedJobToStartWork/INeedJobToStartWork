import EslintTOML from "eslint-plugin-toml";

export default [
	{
		files: ["**/*.toml"],
		name: "Toml",
		plugins: { "@EslintTOML": EslintTOML },
		rules: {}
	}
];
