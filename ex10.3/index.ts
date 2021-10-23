export function naiveStringSearch(bigStr: string, smallStr: string) {
  let sum = 0;

  let j = 0;

  for (let i = 0; i < bigStr.length; i++) {
    console.log(smallStr[j]);
    if (j === smallStr.length) {
      sum++;
      j = 0;
    }

    if (bigStr[i] !== smallStr[j]) {
      j = 0;
    } else if (bigStr[i] === smallStr[j]) {
      j++;
    }
  }

  return sum;
}
