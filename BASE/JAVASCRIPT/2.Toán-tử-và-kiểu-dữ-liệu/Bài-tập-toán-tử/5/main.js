let arr = [1, "hello", true, 2, false, "world", 42, null];

let countNum = 0;
let countString = 0;
let countBoolean = 0;

for (let value of arr) {
  if (typeof value === "number") {
    countNum++;
  } else if (typeof value === "string") {
    countString++;
  } else {
    countBoolean++;
  }
}

console.log(countNum, countString, countBoolean);
