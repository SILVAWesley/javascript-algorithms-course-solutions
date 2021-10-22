export function binarySearch(array: number[], value: number) {
  let higherIndex = array.length - 1;
  let lowerIndex = 0;

  while (lowerIndex <= higherIndex) {
    const middleIndex = Math.floor((higherIndex + lowerIndex) / 2);

    if (array[middleIndex] === value) {
      return middleIndex;
    } else if (array[middleIndex] > value) {
      higherIndex = middleIndex - 1;
    } else if (array[middleIndex] < value) {
      lowerIndex = middleIndex + 1;
    }
  }

  return -1;
}
