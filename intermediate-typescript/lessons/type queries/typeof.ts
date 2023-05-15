async function main() {
  const apiResponse = await Promise.all([
    fetch("https://example.com"),
    Promise.resolve("Hello"),
  ]);

  type ApiResponseType = typeof apiResponse;
}
