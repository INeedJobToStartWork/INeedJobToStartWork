import type { Linter } from "eslint";

export type TODO = any;
export type TODOP = Promise<any>;

export type eslintConfig = Linter.BaseConfig;

export type Prettify<T> = NonNullable<unknown> & {
	[K in keyof T]: T[K];
};
export type NonEmptyArray<T> = [T, ...T[]];

/**
 * Flat config item used by every rule block.
 *
 * Declared as an `interface` (not a `type`) on purpose - `Linter.Config` points into `@eslint/core`,
 * which `.d.ts` emit can't reference (TS2883). Interfaces are always emitted by name.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
export interface IFlatConfig extends Linter.Config {}
