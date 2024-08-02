import type { NonEmptyArray, Prettify } from "@/types";

export type levels = "error" | "warn" | 1 | 2;
export type Theaders_arr = NonEmptyArray<string | { pattern?: string; template: "string" }>;
export type Theaders =
	| [levels, "block" | "line", Prettify<Theaders_arr>, number | { lineEndings?: "unix" | "windows" }]
	| [levels, "block" | "line", Prettify<Theaders_arr>]
	| [levels, string];

export type TBan = [levels, ...Array<{ message: string; name: string }>];
