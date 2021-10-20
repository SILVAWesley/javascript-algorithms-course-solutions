export function nestedEvenSum(obj: Object) {
  let sum = 0;

  for (let property of Object.keys(obj)) {
    const value = obj[property];

    if (typeof value === "object") {
      sum = nestedEvenSum(value) + sum;
    } else if (typeof value === "number" && value % 2 === 0) {
      sum += value;
    }
  }

  return sum;
}
