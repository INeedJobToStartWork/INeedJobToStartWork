// import { parse } from "node:url";

type TODO = any;
const yoda: TODO = true;
if (yoda == true) {
  console.log("Yoda here");
}

export type Prettify<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

// const url = parse("/foo"); // ❌ 'parse' is deprecated. Use the WHATWG URL API instead. eslint(deprecation/deprecation)

const stringExample = "Example";
const testPrefArrFunc = [...stringExample];
