import type { Linter } from "eslint";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TODO = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TODOP = Promise<any>;

export type eslintConfig = Linter.BaseConfig;

export type Prettify<T> = NonNullable<unknown> & {
	[K in keyof T]: T[K];
};
export type NonEmptyArray<T> = [T, ...T[]];
