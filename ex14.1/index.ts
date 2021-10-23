export function mergeSort(array: number[]) {
  if (array.length <= 1) return array;
  let middle = Math.floor(array.length / 2);

  const leftArray = mergeSort(array.slice(0, middle));
  const rightArray = mergeSort(array.slice(middle, array.length));

  return merge(leftArray, rightArray);
}

export function merge(arr1: number[], arr2: number[]) {
  let results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j++;
    } else {
      results.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}
