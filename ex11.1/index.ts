export function bubbleSort(array: number[]) {
  let limit = array.length - 1;
  while (limit > 0) {
    let swaped = false;

    for (let i = 1; i <= limit; i++) {
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i);
        swaped = true;
      }
    }

    if (!swaped) {
      return array;
    }

    limit--;
  }

  return array;
}

function swap(array: number[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
