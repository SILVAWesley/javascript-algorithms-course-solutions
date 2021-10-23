export function radixSort(array: number[]) {
  let tempArray = array;

  for (let i = 0; i < mostDigits(array); i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let item of tempArray) {
      const digit = getDigit(item, i);
      buckets[digit].push(item);
    }

    tempArray = [].concat(...buckets);
  }

  array = tempArray;
  return array;
}

export function getDigit(num: number, place: number) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

export function digitCount(num: number) {
  return num.toString().length;
}

export function mostDigits(array: number[]) {
  return digitCount(Math.max(...array));
}
