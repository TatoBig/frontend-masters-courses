type Address = [
  streetNumber: number,
  city: string,
  state: string,
  postal: number,
];

function printAddress(...address: Address) {}

printAddress(122, 'San Francisco', 'CA', 94107);