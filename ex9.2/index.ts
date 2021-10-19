export function reverse(str: string) {
  if (str.length === 1) {
    return str;
  }

  const newStr = str[str.length - 1] + reverse(str.slice(0, str.length - 1));
  return newStr;
}
