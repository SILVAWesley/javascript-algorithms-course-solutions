export function someRecursive(array: number[], cb: (val: number) => boolean) {
  if (array.length === 0) {
    return false;
  }

  return someRecursive(array.slice(1), cb);
}
