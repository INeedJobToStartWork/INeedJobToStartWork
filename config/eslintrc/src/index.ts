import { FlatConfigComposer } from "eslint-flat-config-utils";
import type { Prettify } from "./types";
import type { IignoreGlobalFiles } from "./rules/syntax";
import { modifiersConfig } from "./rules/modifiers";

import type { ImodifiercsConfig } from "./rules/modifiers";
import { JSON, perfectionistSorters, stylistic, stylisticJSX, stylisticTS } from "./rules/formatters";
import {
	base,
	ignoreGlobalFiles,
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
	node
} from "./rules/syntax";

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

const configLoader = <T extends Object | Object[]>(
	ObjectValue: boolean | object | undefined,
	value: T
): T extends Object[] ? null[] | T : T | null =>
	Array.isArray(value) ? (ObjectValue ? value : [null]) : (ObjectValue ? value : null);

const ineedj = async (inputConfig: IConfigInput): Promise<FlatConfigComposer> =>
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
		...configLoader(inputConfig.syntax?.ignoreGlobalFiles, ignoreGlobalFiles(inputConfig.syntax?.ignoreGlobalFiles)), // error?
		configLoader(inputConfig.syntax?.jsx, jsx),
		// configLoader(inputConfig.syntax?.mdx, mdx),
		// ...(await configLoader(inputConfig.syntax?.mdx, mdx)),
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
