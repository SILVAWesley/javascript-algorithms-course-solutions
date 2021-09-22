/*
 * Write a function called maxSubarraySum which accepts
 * an array of integers and a number called n. The function
 * should calculate the maximum sum of n consecutive elements
 * in the array.
 *
 */
export function maxSubarraySum(arr: number[], elements: number) {
  let maxSum = -Infinity;

  let windowStart = 0;

  if (arr.length === 0) {
    return null;
  }

  while (windowStart + elements - 1 < arr.length) {
    let parcialSum = 0;

    for (let i = 0; i < elements; i++) {
      parcialSum += arr[windowStart + i];
    }

    if (parcialSum > maxSum) {
      maxSum = parcialSum;
    }

    windowStart += 1;
  }

  return maxSum;
}
