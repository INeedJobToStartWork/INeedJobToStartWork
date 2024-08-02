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
): Object[] => [
	defineFlatConfig({
		name: "Ignore Global - Custom",
		ignores: properties.ignoreFiles ?? []
	}),
	defineFlatConfig({
		name: "Ignore Global - Basic",
		ignores: properties.basicIgnores
			? [
					"**/.vscode/**",
					"**/.next/**",
					"**/config/**",
					"**/node_modules/**",
					"**/dist/**",
					"**/lib/**",
					"**/*.d.ts",
					"**/tsconfig.json",
					"**/theme.config.jsx",
					"**/templates/**"
				]
			: []
	}),
	{
		name: "Ignore Global - gitignore",
		...(properties.gitIgnore ? gitIgnore() : {})
	}
];

export default ignoreGlobalFiles;
