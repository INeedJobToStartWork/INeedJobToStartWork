import tsParserOptions from "./tsParser";
import isTs from "./isTs";

export const languageOptionsTS = (userLanguageOptions: object = {}) => ({
	...userLanguageOptions,
	...(isTs ? tsParserOptions : {})
});
export const filesTS = (userFiles: string[] = []): string[] => [
	...userFiles,
	...(isTs ? ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.ets"] : [])
];
