export function stringifyNumbers(obj: object) {
  const newObj = {};

  for (let property of Object.keys(obj)) {
    const value = obj[property];

    if (typeof value === "object" && !Array.isArray(value)) {
      newObj[property] = stringifyNumbers(value);
    } else if (typeof value === "number") {
      newObj[property] = value + "";
    } else {
      newObj[property] = value;
    }
  }

  return newObj;
}
