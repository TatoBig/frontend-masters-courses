type FooType<T extends any[]> = [boolean, ...T, boolean];

const testFooType: FooType<string[]> = [true, 'a', 'b', 'c', true];