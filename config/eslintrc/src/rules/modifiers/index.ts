/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { defineFlatConfig } from "eslint-flat-config-utils";
// @ts-expect-error: No type declaration for module
import ban from "eslint-plugin-ban";
// @ts-expect-error: No type declaration for module
import header from "eslint-plugin-header";
// @ts-expect-error: No type declaration for module
import OnlyWarning from "eslint-plugin-only-warn";
// @ts-expect-error: No type declaration for module
import OnlyError from "eslint-plugin-only-error";
import type { TBan, Theaders } from "./types";
import commands from "eslint-plugin-command/config";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

export interface ImodifiercsConfig {
	ban?: TBan;
	commands?: boolean;
	headers?: Theaders;
	only?: "error" | "warn";
	renamePlugins?: boolean;
}

export const modifiersConfig = (props: ImodifiercsConfig | undefined = { commands: true }): object => [
	defineFlatConfig({
		name: "Modifiers",
		plugins: {
			"@ModifierBan": ban,
			"@ModifierHeader": header,
			...(Object.hasOwn(props, "only") && props.only === "warn"
				? { "@ModifierOnlyWarning": OnlyWarning }
				: { "@ModifierOnlyError": OnlyError }) // Sometimes bugging
		},
		rules: {
			"@ModifierHeader/header": Object.hasOwn(props, "headers") ? props.headers : "off",
			"@ModifierBan/ban": Object.hasOwn(props, "ban") ? props.ban : "off"
		}
	}),
	props.commands ? commands({ name: "eslint-plugin-command" }) : void 0
];

export default modifiersConfig;
export * from "./types";
