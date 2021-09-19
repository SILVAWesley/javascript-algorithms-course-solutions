export function checkSame(array1: number[], array2: number[]) {
  const frequency1 = {};

  if (array1.length != array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (!frequency1[Math.pow(array1[i], 2)]) {
      frequency1[Math.pow(array1[i], 2)] = 0;
    }

    frequency1[Math.pow(array1[i], 2)] += 1;
  }

  for (let i = 0; i < array2.length; i++) {
    if (!frequency1[array2[i]] || frequency1[array2[i]] <= 0) {
      return false;
    }

    frequency1[array2[i]]--;
  }

  return true;
}
