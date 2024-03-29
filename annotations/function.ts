const add = (a: number, b: number): number => {
  return a + b;
};

const logger = (message: string): void => {
  console.log(message);

  return undefined;
};

const throwError = (message: string): never => {
  throw new Error(message);
};
