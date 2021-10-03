/*
 * Write a function called sameFrequency. Given two positive integers, find
 * out if the two
 */
export function minSubArrayLen(array: number[], num: number) {
  let sum = 0;
  let i = 0;
  let windowSize = 0;

  while (sum < num) {
    sum += array[i];
    i++;
    windowSize++;
  }

  let minWindowSize = windowSize;

  while (i < array.length) {
    if (windowSize < 1) {
      return 0;
    }
    // Diminui janela
    while (sum >= num) {
      if (windowSize === 1) {
        return 1;
      }

      sum -= array[i - windowSize];
      minWindowSize = windowSize;
      windowSize--;
    }

    // Move janela
    sum -= array[i - windowSize];
    sum += array[i];
    i++;
  }

  return minWindowSize;
}
