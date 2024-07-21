import tsParserOptions from "./tsParser";
import isTS from "./isTS";

export const languageOptionsTS = (userLanguageOptions: object = {}) => ({
	...userLanguageOptions,
	...(isTS ? tsParserOptions : {})
});
export const filesTS = (userFiles: string[] = []) => [
	...userFiles,
	...(isTS ? ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.ets"] : [])
];
