import { checkSame } from "./27";

function testCheckSame() {
  console.log(checkSame([1, 2, 3], [4, 1, 9]));
  console.log(checkSame([1, 2, 3], [1, 9]));
  console.log(checkSame([1, 2, 1], [4, 4, 1]));
}

testCheckSame();
