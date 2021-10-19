type TRecursiveArray = Array<TRecursiveArray | number>;

//[[1], [2], [3]]
export function flatten(array: TRecursiveArray) {
  if (array.length === 1 && typeof array[0] === "number") {
    return array;
  } else if (array.length === 1) {
    return flatten(array[0] as TRecursiveArray);
  } else if (array.length === 0) {
    return [];
  }

  let currentElement = array[0];

  if (typeof currentElement !== "number") {
    return flatten(currentElement).concat(flatten(array.slice(1)));
  }

  const flattenedArray = [currentElement].concat(flatten(array.slice(1)));

  return flattenedArray;
}
