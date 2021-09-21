import { checkSame } from "./27";
import { checkAnagram } from "./28";

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

testCheckAnagram();
