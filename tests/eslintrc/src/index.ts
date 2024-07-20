const yoda = true;
if (true == yoda) {
  console.log("Yoda here");
}

export type Prettify<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};
