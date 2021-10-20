export function capitalizeFirst(array: string[]) {
  capitalizeFirstHelper(array, 0);
  return array;
}

function capitalizeFirstHelper(array: string[], index: number) {
  if (index >= array.length) {
    return;
  }

  array[index] = array[index][0].toUpperCase() + array[index].substr(1);
  capitalizeFirstHelper(array, index + 1);
}
