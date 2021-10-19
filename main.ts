import { checkSame } from "./27";
import { checkAnagram } from "./28";
import { sumZero } from "./30";
import { countUniqueValues } from "./31";
import { maxSubarraySum } from "./33";
import { minSubArrayLen } from "./ex6.6";
import { power } from "./ex8.1";
import { factorial } from "./ex8.2";
import { productOfArray } from "./ex8.3";
import { recursiveRange } from "./ex8.4";
import { fib } from "./ex8.5";
import { isPalindrome } from "./ex9.1";
import { reverse } from "./ex9.2";
import { someRecursive } from "./ex9.3";
import { flatten } from "./ex9.4";

function testCheckSame() {
  console.log(checkSame([1, 2, 3], [4, 1, 9]));
  console.log(checkSame([1, 2, 3], [1, 9]));
  console.log(checkSame([1, 2, 1], [4, 4, 1]));
}

function testCheckAnagram() {
  console.log(checkAnagram("", ""));
  console.log(checkAnagram("aaz", "zza"));
  console.log(checkAnagram("anagram", "nagaram"));
  console.log(checkAnagram("rat", "car"));
  console.log(checkAnagram("awesome", "awesom"));
  console.log(checkAnagram("qwerty", "qeywrt"));
  console.log(checkAnagram("texttwisttime", "timetwisttext"));
}

function testSumZero() {
  console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
  console.log(sumZero([-2, 0, 1, 3]));
  console.log(sumZero([1, 2, 3]));
  console.log(sumZero([]));
}

function testCountUniqueValues() {
  console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
  console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
  console.log(countUniqueValues([]));
  console.log(countUniqueValues([-2, -1, -1, 0, 1]));
}

function testMaxSubarraySum() {
  console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
  console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
  console.log(maxSubarraySum([4, 2, 1, 6], 1));
  console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
  console.log(maxSubarraySum([], 4));
}

function testMinSubArrayLen() {
  console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
  console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
  console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
  console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
}

function testPower() {
  console.log(power(2, 0));
  console.log(power(2, 2));
  console.log(power(2, 4));
}

function testFactorial() {
  console.log(factorial(1));
  console.log(factorial(2));
  console.log(factorial(4));
  console.log(factorial(7));
}

function testProductOfArray() {
  console.log(productOfArray([1, 2, 3]));
  console.log(productOfArray([1, 2, 3, 10]));
}

function testRecursiveRange() {
  console.log(recursiveRange(6));
  console.log(recursiveRange(10));
}

function testFib() {
  console.log(fib(4));
  console.log(fib(10));
  console.log(fib(28));
  console.log(fib(35));
}

function testReverse() {
  console.log(reverse("rithmschool"));
}

function testIsPalindrome() {
  console.log(isPalindrome("awesome"));
  console.log(isPalindrome("foobar"));
  console.log(isPalindrome("tacocat"));
  console.log(isPalindrome("amanaplanacanalpanama"));
  console.log(isPalindrome("amanaplanacanalpandemonium"));
}

function testSomeRecursive() {
  console.log(someRecursive([1, 2, 3, 4], (val: number) => val % 2 !== 0));
}

function testFlatten() {
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
  console.log(flatten([1, [2, [3, 4], [[5]]]]));
  console.log(flatten([1, 2, 3, [4, 5]]));
  console.log(flatten([[1], [2], [3]]));
  //console.log([1, 2, 3, 4].concat([5, 6]));
}

testFlatten();
