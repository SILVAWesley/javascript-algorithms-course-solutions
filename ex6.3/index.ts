/*
 * Write a function called sameFrequency. Given two positive integers, find
 * out if the two
 */
export function averagePair(numbers: number[], average: number) {
  let i = 0;
  let j = numbers.length - 1;

  const target = average * 2;

  while (i < j) {
    const pairSum = numbers[i] + numbers[j];

    if (pairSum === target) {
      return true;
    } else if (pairSum > target) {
      j--;
    } else if (pairSum < target) {
      i++;
    }
  }

  return false;
}
