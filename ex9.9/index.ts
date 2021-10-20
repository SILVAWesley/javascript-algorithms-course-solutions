export function collectStrings(obj: object) {
  let array = [];

  for (let property of Object.keys(obj)) {
    const value = obj[property];

    if (typeof value === "object" && !Array.isArray(value)) {
      array = array.concat(collectStrings(value));
    } else if (typeof value === "string") {
      console.log(value);
      array.push(value);
    }
  }

  return array;
}
