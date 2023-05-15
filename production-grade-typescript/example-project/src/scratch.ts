const x: {
  user: {
    name: string;
    address?: {
      street: string;
      city: string;
    };
  };
} = undefined as any;

const y = x.user.address?.city;
console.log(x.user.address?.city);

// Private attributes
class Foo {
  #name;

  constructor(public rawName?: string) {
    this.#name = rawName ?? '(no name)';
  }

  log() {
    console.log(this.#name);
  }
}

const foo = new Foo();
foo.log();

type FooType<T extends any[]> = [boolean, ...T, boolean];

const testFooType: FooType<string[]> = [true, 'a', 'b', 'c', true];

type Address = [
  streetNumber: number,
  city: string,
  state: string,
  postal: number,
];

function printAddress(...address: Address) {}

printAddress(122, 'San Francisco', 'CA', 94107);

// Before

// type JSONValue =
//   | string
//   | number
//   | boolean
//   | null
//   | JSONArray
//   | JSONObject;
// interface JSONObject {
//   [k: string]: JSONValue;
// }
// interface JSONArray extends Array<JSONValue> {}

// const val: JSONValue = {
//   name: 'mike',
//   address: {
//     street: 'Spear St'
//   }
// }

// Now

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | {
      [k: string]: JSONValue;
    };

interface JSONArray extends Array<JSONValue> {}

const val: JSONValue = {
  name: 'mike',
  address: {
    street: 'Spear St',
  },
};

type Corner = `${Uppercase<'top' | 'bottom'>}-${'left' | 'right'}`;

type Bar = number & any;

// @ts-expect-error
const num1: Bar = 'hello';

// @ts-ignore
const num2: Bar = 'hello';

function somethingRisky() {}

// Method 1
// function isError(err: any): err is Error {
//   return err instanceof Error
// }

// try {
//   somethingRisky();
// } catch (err: unknown) {
//   if (isError(err)) {
//     console.log(err.stack); 
//   } else {
//     console.log(err); 
//   }
// }

// Method 2 - Test suite oriented
function assertIsError(err: any): asserts err is Error {
  if (!(err instanceof Error))
    throw new Error(`Not and error: ${err}`);
}

try {
  somethingRisky();
} catch (err: unknown) {
  assertIsError(err);
  console.log(err.stack)
}


