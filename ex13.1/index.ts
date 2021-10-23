export function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];

    let j = i - 1;

    while (j >= 0 && array[j] > currentVal) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = currentVal;
  }

  return array;
}

function swap(array: number[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
