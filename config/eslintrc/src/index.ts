// @ts-nocheck
import { JSON, perfectionistSorters, stylistic, stylisticJSX, stylisticTS } from "./rules/formatters";
import { base, jsx, next, node, react, storybook, tailwindcss, toml, typescript, yaml } from "./rules/syntax";

interface IinputConfig {
	formatters?: {
		json?: boolean;
		stylistic?: boolean;
		stylisticJSX?: boolean;
		stylisticTS?: boolean;
		perfectionistSorters?: boolean;
	};
	syntax?: {
		eslint?: boolean;
		jsx?: boolean;
		next?: boolean;
		node?: boolean;
		react?: boolean;
		storybook?: boolean;
		tailwindcss?: boolean;
		typescript?: boolean;
		toml?: boolean;
		yaml?: boolean;
	};
}

/**
 * Generates the final configuration based on the provided inputConfig.
 *
 * @param {IinputConfig} inputConfig - Input configuration containing formatting and syntax options.
 */
const ineedj = (inputConfig: IinputConfig) => {
	const finalConfig = [];

	if (inputConfig.formatters?.json) finalConfig.push(...JSON);
	if (inputConfig.formatters?.stylistic) finalConfig.push(...stylistic);
	if (inputConfig.formatters?.stylisticJSX) finalConfig.push(...stylisticJSX);
	if (inputConfig.formatters?.stylisticTS) finalConfig.push(...stylisticTS);
	if (inputConfig.formatters?.perfectionistSorters) finalConfig.push(...perfectionistSorters);

	if (inputConfig.syntax?.eslint) finalConfig.push(...base);
	if (inputConfig.syntax?.jsx) finalConfig.push(...jsx);
	if (inputConfig.syntax?.next) finalConfig.push(...next);
	if (inputConfig.syntax?.node) finalConfig.push(...node);
	if (inputConfig.syntax?.react) finalConfig.push(...react);
	if (inputConfig.syntax?.storybook) finalConfig.push(...storybook);
	if (inputConfig.syntax?.tailwindcss) finalConfig.push(...tailwindcss);
	if (inputConfig.syntax?.typescript) finalConfig.push(...typescript);
	if (inputConfig.syntax?.toml) finalConfig.push(...toml);
	if (inputConfig.syntax?.yaml) finalConfig.push(...yaml);

	return finalConfig;
};

export default ineedj;
