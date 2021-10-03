/*
 * Write a function called sameFrequency. Given two positive integers, find
 * out if the two
 */
export function areThereDuplicates(...args: any[]) {
  const sortedArgs = args.sort();

  for (let i = 1; i < sortedArgs.length; i++) {
    if (sortedArgs[i] === sortedArgs[i - 1]) {
      return true;
    }
  }

  return false;
}
