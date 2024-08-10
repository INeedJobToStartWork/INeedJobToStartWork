// eslint-disable-next-line @typescript-eslint/ban-types
export const hasOwn = <T extends Object>(o: T, v: keyof T | (string & {})): boolean =>
	// if (v == void 0) throw new TypeError("It cannot be undefined or null!");
	v in o;
export default hasOwn;
