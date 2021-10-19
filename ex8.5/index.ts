export function fib(num: number) {
  if (num === 1) {
    return 1;
  }

  if (num === 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
}
