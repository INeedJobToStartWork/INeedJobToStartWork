import gitIgnore from "eslint-config-flat-gitignore";
import { defineFlatConfig } from "eslint-flat-config-utils";

/*
 * Gen JSDocs
 */
export interface IignoreGlobalFiles {
	basicIgnores?: boolean;
	gitIgnore?: boolean;
	ignoreFiles?: string[];
}

/*
 * Gen JSDocs
 */

export const ignoreGlobalFiles = (
	properties: IignoreGlobalFiles = { gitIgnore: true, basicIgnores: true }
): object[] => [
	defineFlatConfig({
		// name: "Ignore Global - Custom", // ADD when it will be backported or ported to eslint 9
		ignores: properties.ignoreFiles ?? []
	}),
	defineFlatConfig({
		// name: "Ignore Global - Basic",
		ignores: properties.basicIgnores
			? [
					".npmrc",
					"*.config.@(js|mjs|cjs|ts|mts|cts)",
					"**/.vscode/**",
					"**/.next/**",
					"**/config/**",
					"**/node_modules/**",

					"**/dist/**",
					"**/lib/**",
					"**/*.d.ts",
					// "**/tsconfig.json",
					"**/theme.config.jsx",
					"**/templates/**",
					"**/*.json"
				]
			: []
	}),
	{
		// name: "Ignore Global - gitignore",
		...(properties.gitIgnore ? gitIgnore() : {})
	}
];

export default ignoreGlobalFiles;
