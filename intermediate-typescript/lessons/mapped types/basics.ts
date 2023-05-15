type Fruit = {
  name: string;
  color: string;
  mass: number;
};

type Dict<T> = { [k: string]: T };

const fruitCatalog: Dict<Fruit> = {};
fruitCatalog.apple;

// Mapped type
type MappedType = { [FruitKey in "apple" | "cherry"]: Fruit };

function printFruitcatalog(fruitCatalog: MappedType) {
  fruitCatalog.apple;
  fruitCatalog.cherry;

  fruitCatalog.pineapple;
}

/* Signatures
  { [FruitKey in "apple" | "cherry"]: ... }
  { [nameDoesntMatter: string]: ... }
*/

// Improving mapped type

type MappedTypeImproved<KeyType extends string, ValueType> = {
  [Key in KeyType]: ValueType;
};

type User = {
  name: string
}

function test(tpy: Record<string, User>) {
  
}
