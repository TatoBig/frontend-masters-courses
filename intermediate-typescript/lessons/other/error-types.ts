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