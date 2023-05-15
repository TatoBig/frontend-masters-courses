const testMap1: Pick<Window, "document"> = {
  document: {} as Document,
};

const testMap2: Partial<Window> = {
  document: {} as Document,
  caches: {} as CacheStorage,
};

// Need all properties
// const testMap3: Required<Window> = {
//   document: {} as Document,
// };

// Need all readonly properties
// const testMap4: Readonly<Window> = {
//   history: {} as History,
// }

type NotReadonly<T> = {
  -readonly [P in keyof T]: T[P];
}

// const testMap5: NotReadonly<Window> = {
//   blur: () => {},
// }