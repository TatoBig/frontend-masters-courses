type Bar = number & any;

// @ts-expect-error
const num1: Bar = 'hello';

// @ts-ignore
const num2: Bar = 'hello';