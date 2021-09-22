import { checkSame } from "./27";
import { checkAnagram } from "./28";
import { sumZero } from "./30";

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

testSumZero();
