export function quickSort(array: number[]) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(
  array: number[],
  lowerIndex: number,
  higherIndex: number
) {
  if (lowerIndex >= higherIndex) {
    return;
  }

  const pivotIndex = pivotHelper(array, lowerIndex, higherIndex);

  quickSortHelper(array, lowerIndex, pivotIndex - 1);
  quickSortHelper(array, pivotIndex + 1, higherIndex);
}

export function pivotHelper(
  array: number[],
  lowerIndex: number,
  higherIndex: number
) {
  const pivot = array[lowerIndex];
  let swapIndex = lowerIndex;

  for (let i = lowerIndex + 1; i <= higherIndex; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }

  swap(array, swapIndex, lowerIndex);

  return swapIndex;
}

function swap(array: number[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
