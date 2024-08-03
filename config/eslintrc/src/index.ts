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
 * Interfejs dla konfiguracji wejściowej.
 *
 * @interface IConfigInput
 * @property {Object} [formatters] - Opcje formatowania.
 * @property {boolean} [formatters.json] - Włącza/wyłącza formatowanie JSON.
 * @property {boolean} [formatters.perfectionistSorters] - Włącza/wyłącza sortowanie perfekcjonistyczne.
 * @property {boolean} [formatters.stylistic] - Włącza/wyłącza formatowanie stylistyczne.
 * @property {boolean} [formatters.stylisticJSX] - Włącza/wyłącza formatowanie stylistyczne dla JSX.
 * @property {boolean} [formatters.stylisticTS] - Włącza/wyłącza formatowanie stylistyczne dla TypeScript.
 * @property {Prettify<ImodifiercsConfig>} [modifiers] - Opcje modyfikatorów.
 * @property {Object} [syntax] - Opcje składni.
 * @property {boolean} [syntax.eslint] - Włącza/wyłącza składnię ESLint.
 * @property {Prettify<IignoreGlobalFiles>} [syntax.ignoreGlobalFiles] - Opcje ignorowania globalnych plików.
 * @property {boolean} [syntax.jsx] - Włącza/wyłącza składnię JSX.
 * @property {boolean} [syntax.next] - Włącza/wyłącza składnię Next.js.
 * @property {boolean} [syntax.node] - Włącza/wyłącza składnię Node.js.
 * @property {boolean} [syntax.react] - Włącza/wyłącza składnię React.
 * @property {boolean} [syntax.storybook] - Włącza/wyłącza składnię Storybook.
 * @property {boolean} [syntax.tailwindcss] - Włącza/wyłącza składnię Tailwind CSS.
 * @property {boolean} [syntax.toml] - Włącza/wyłącza składnię TOML.
 * @property {boolean} [syntax.turbo] - Włącza/wyłącza składnię Turbo.
 * @property {boolean} [syntax.typescript] - Włącza/wyłącza składnię TypeScript.
 * @property {boolean} [syntax.vitest] - Włącza/wyłącza składnię Vitest.
 * @property {boolean} [syntax.website] - Włącza/wyłącza składnię dla stron internetowych.
 * @property {boolean} [syntax.yaml] - Włącza/wyłącza składnię YAML.
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
