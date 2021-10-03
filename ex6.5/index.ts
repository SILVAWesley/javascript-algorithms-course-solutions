/*
 * Write a function called sameFrequency. Given two positive integers, find
 * out if the two
 */
export function maxSubarraySum(array: number[], elements: number) {
  if (array.length < elements) {
    return null;
  }
  let sum = 0;

  for (let i = 0; i < elements; i++) {
    sum += array[i];
  }

  let maxSum = sum;

  for (let i = elements; i < array.length; i++) {
    sum -= array[i - elements];
    sum += array[i];

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
}
