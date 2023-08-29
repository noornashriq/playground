import memoize from "p-memoize";

export const getCustomer = memoize(async (msisdn: string) => {
  return new Promise((resolve) =>
    // Simulate network latency
    setTimeout(() => {
      resolve(`GetCustomer: ${msisdn}`);
    }, 3000)
  );
});
