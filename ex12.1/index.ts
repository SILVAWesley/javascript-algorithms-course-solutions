export function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let smallestIndex = i;

    for (let j = i; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }

    swap(array, i, smallestIndex);
  }

  return array;
}

function swap(array: number[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
