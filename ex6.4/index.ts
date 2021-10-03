/*
 * Write a function called sameFrequency. Given two positive integers, find
 * out if the two
 */
export function isSubsequence(str1: string, str2: string) {
  if (str1.length > str2.length) {
    return false;
  }

  let str1I = 0;
  let str2I = 0;

  while (str2I < str2.length) {
    if (str2[str2I] === str1[str1I]) {
      str1I++;
    }

    if (str1I >= str1.length) {
      return true;
    }

    str2I++;
  }

  return false;
}
