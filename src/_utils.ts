export const wait = (ms = 0) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const expensiveOperation = async () => {
  await wait(1000);
};

// blerg blerg
export { expensiveOperation };
