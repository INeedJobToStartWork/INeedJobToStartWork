//-----------------------------------------
// Imports
//-----------------------------------------

import { FlatConfigComposer } from "eslint-flat-config-utils";
import type { Prettify } from "./types";
import type { IignoreGlobalFiles } from "./rules/syntax";
import { modifiersConfig } from "./rules/modifiers";
import type { ImodifiercsConfig } from "./rules/modifiers";
import { JSON, perfectionistSorters, stylistic, stylisticJSX, stylisticTS } from "./rules/formatters";
import {
	base,
	jsx,
	next,
	react,
	storybook,
	tailwindcss,
	toml,
	turbo,
	typescript,
	vitest,
	website,
	yaml,
	node,
	ignoreGlobalFiles
} from "./rules/syntax";

//-----------------------------------------
// Types
//-----------------------------------------

/**
 * Interface for input configuration.
 *
 * @interface IConfigInput
 * @property {Object} [formatters] - Formatting options.
 * @property {boolean} [formatters.json] - Enables/disables JSON formatting.
 * @property {boolean} [formatters.perfectionistSorters] - Enables/disables perfectionist sorting.
 * @property {boolean} [formatters.stylistic] - Enables/disables stylistic formatting.
 * @property {boolean} [formatters.stylisticJSX] - Enables/disables stylistic formatting for JSX.
 * @property {boolean} [formatters.stylisticTS] - Enables/disables stylistic formatting for TypeScript.
 * @property {Prettify<ImodifiercsConfig>} [modifiers] - Modifier options.
 * @property {Object} [syntax] - Syntax options.
 * @property {boolean} [syntax.eslint] - Enables/disables ESLint syntax.
 * @property {Prettify<IignoreGlobalFiles>} [syntax.ignoreGlobalFiles] - Options for ignoring global files.
 * @property {boolean} [syntax.jsx] - Enables/disables JSX syntax.
 * @property {boolean} [syntax.next] - Enables/disables Next.js syntax.
 * @property {boolean} [syntax.node] - Enables/disables Node.js syntax.
 * @property {boolean} [syntax.react] - Enables/disables React syntax.
 * @property {boolean} [syntax.storybook] - Enables/disables Storybook syntax.
 * @property {boolean} [syntax.tailwindcss] - Enables/disables Tailwind CSS syntax.
 * @property {boolean} [syntax.toml] - Enables/disables TOML syntax.
 * @property {boolean} [syntax.turbo] - Enables/disables Turbo syntax.
 * @property {boolean} [syntax.typescript] - Enables/disables TypeScript syntax.
 * @property {boolean} [syntax.vitest] - Enables/disables Vitest syntax.
 * @property {boolean} [syntax.website] - Enables/disables website syntax.
 * @property {boolean} [syntax.yaml] - Enables/disables YAML syntax.
 */
interface IConfigInput {
	formatters?: {
		json?: boolean;
		perfectionistSorters?: boolean;
		stylistic?: boolean;
		stylisticJSX?: boolean;
		stylisticTS?: boolean;
	};
	modifiers?: Prettify<ImodifiercsConfig>;
	syntax?: {
		eslint?: boolean;
		ignoreGlobalFiles?: Prettify<IignoreGlobalFiles>;
		jsx?: boolean;
		// mdx?: boolean;
		next?: boolean;
		node?: boolean;
		react?: boolean;
		storybook?: boolean;
		tailwindcss?: boolean;
		toml?: boolean;
		turbo?: boolean;
		typescript?: boolean;
		vitest?: boolean;
		website?: boolean;
		yaml?: boolean;
	};
}

//-----------------------------------------
// Helpers
//-----------------------------------------

/**
 * Load eslint config.
 *
 * @param {boolean} TruthyValue
 * @param {boolean} config
 * @returns Config if `TruthyValue` returns true.
 *
 * @internal Do not Export
 */

// const configLoader = <T extends Linter.Config<Linter.RulesRecord>>(
const configLoader = (TruthyValue: unknown, config: unknown[] | unknown) => {
	// eslint-disable-next-line @EslintUnicorn/no-null, @typescript-eslint/no-unsafe-return
	if (Array.isArray(config)) return TruthyValue ? config : [null];
	// eslint-disable-next-line @EslintUnicorn/no-null
	return TruthyValue ? config : null;
};

//-----------------------------------------
// Exports
//-----------------------------------------

/**
 * Configurator for eslint config.
 *
 * @example
 * ```ts
 * export default ineedj({ syntax: { eslint: true, typescript: true } })
 * ```
 * @param {IConfigInput} inputConfig - Input configuration for eslint.
 * @returns {FlatConfigComposer} Array of Eslint configs objects.
 */

// eslint-disable-next-line @typescript-eslint/promise-function-async
const ineedj = (inputConfig: IConfigInput) =>
	// eslint-disable-next-line @typescript-eslint/promise-function-async

	new FlatConfigComposer([
		// Modifiers
		configLoader(inputConfig.modifiers, modifiersConfig(inputConfig.modifiers)),

		// Formatters
		configLoader(inputConfig.formatters?.json, JSON),
		configLoader(inputConfig.formatters?.perfectionistSorters, perfectionistSorters),
		configLoader(inputConfig.formatters?.stylistic, stylistic),
		configLoader(inputConfig.formatters?.stylisticJSX, stylisticJSX),
		configLoader(inputConfig.formatters?.stylisticTS, stylisticTS),

		// Syntax
		configLoader(inputConfig.syntax?.eslint, base),
		...(configLoader(
			inputConfig.syntax?.ignoreGlobalFiles,
			ignoreGlobalFiles(inputConfig.syntax?.ignoreGlobalFiles)
		) as any), // error?
		configLoader(inputConfig.syntax?.jsx, jsx),
		configLoader(inputConfig.syntax?.next, next),
		configLoader(inputConfig.syntax?.node, node),
		configLoader(inputConfig.syntax?.react, react),
		configLoader(inputConfig.syntax?.storybook, storybook),
		configLoader(inputConfig.syntax?.tailwindcss, tailwindcss),
		configLoader(inputConfig.syntax?.toml, toml),
		configLoader(inputConfig.syntax?.turbo, turbo),
		configLoader(inputConfig.syntax?.typescript, typescript),
		configLoader(inputConfig.syntax?.vitest, vitest),
		configLoader(inputConfig.syntax?.website, website),
		configLoader(inputConfig.syntax?.yaml, yaml)
	]);

export default ineedj;
