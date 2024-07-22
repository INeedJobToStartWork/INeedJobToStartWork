import gitIgnore from "eslint-config-flat-gitignore";

/*
 * Gen JSDocs
 */
export interface IignoreGlobalFiles {
	gitIgnore?: boolean;
	basicIgnores?: boolean;
	ignoreFiles?: string[];
}

/*
 * Gen JSDocs
 */

export const ignoreGlobalFiles = (
	properties: IignoreGlobalFiles = { gitIgnore: true, basicIgnores: true }
): Object[] => [
	{
		ignores: properties.ignoreFiles ?? []
	},
	{
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
	},
	properties.gitIgnore ? gitIgnore() : []
];

export default ignoreGlobalFiles;
