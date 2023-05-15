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