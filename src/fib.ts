// util function that computes the Fibonacci numbers
export function fibonacci(n: number): number {
  if (n < 0) {
    return -1; // invalid input
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
