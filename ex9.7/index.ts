export function capitalizeWords(array: string[]) {
  if (array.length === 0) {
    return [];
  }

  let currentWord = array[0].toUpperCase();

  let newArray = [currentWord].concat(capitalizeWords(array.splice(1)));

  return newArray;
}
