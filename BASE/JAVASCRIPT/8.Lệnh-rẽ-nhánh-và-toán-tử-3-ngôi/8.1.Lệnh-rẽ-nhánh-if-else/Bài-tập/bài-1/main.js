/**
Khai báo số x có giá trị bất kỳ

Nếu x < 0 thì in ra x là số âm

Nếu x = 0 thì in ra x = 0

Nếu x > 0, và x là số nguyên thì in ra x là số nguyên dương

Nếu x > 0 và x là số thập phân thì in ra x là số thập phân dương
 */

const x = 0.3;

if (x < 0) {
  console.log("x là số âm");
} else if (x === 0) {
  console.log("x = 0");
} else if (x > 0 && x % 2 === 0) {
  console.log("x là số nguyên dương");
} else if (x > 0 && x % 2 !== 0) {
  console.log("x là số thập phân dương");
}
