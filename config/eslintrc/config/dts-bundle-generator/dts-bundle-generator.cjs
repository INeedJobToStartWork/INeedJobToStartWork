// @ts-check

// If won't use `@ts-check` - just remove that comments (with `@type` JSDoc below).

/** @type import('dts-bundle-generator/config-schema').OutputOptions */
const commonOutputParams = {
	inlineDeclareGlobals: false,
	sortNodes: true,
	exportReferencedTypes: false
};

/** @type import('dts-bundle-generator/config-schema').BundlerConfig */
const config = {
	compilationOptions: {
		preferredConfigPath: "../../tsconfig.json"
	},
	entries: [
		{
			filePath: "../../src/index.ts",
			outFile: "../../dist/index.d.ts",

            
			libraries: {
				inlinedLibraries: [],
				importedLibraries: [],
				allowedTypesLibraries: [],
				
			},

			output: commonOutputParams
		}
	]
};

module.exports = config;