/*
 * Given two strings, write a function to determine
 * if the second string is ana anagram of the first.
 * An anagram is a word, phrase, or name formed by
 *  rearranging the letters of another, such as cinema
 * formed from iceman.
 */
export function checkAnagram(word1: string, word2: string) {
  const letterCounter1 = {};

  for (let letter of word1) {
    if (!letterCounter1[letter]) {
      letterCounter1[letter] = 0;
    }

    letterCounter1[letter] += 1;
  }

  for (let letter of word2) {
    if (!letterCounter1[letter]) {
      return false;
    } else {
      letterCounter1[letter] -= 1;

      if (letterCounter1[letter] < 0) {
        return false;
      }
    }
  }

  for (let letter of Object.keys(letterCounter1)) {
    if (letterCounter1[letter] !== 0) {
      return false;
    }
  }

  return true;
}
