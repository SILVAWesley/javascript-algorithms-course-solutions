export function isPalindrome(str: string) {
  return isPalindromeHelper(str, 0, str.length - 1);
}

function isPalindromeHelper(str: string, lowIndex: number, highIndex: number) {
  if (str[lowIndex] !== str[highIndex]) {
    return false;
  }

  if (lowIndex >= highIndex) {
    return true;
  }

  return isPalindromeHelper(str, lowIndex + 1, highIndex - 1);
}
