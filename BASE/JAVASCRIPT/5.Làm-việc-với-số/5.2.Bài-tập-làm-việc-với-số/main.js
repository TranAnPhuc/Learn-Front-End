// Bài 1: Kiểm tra số nguyên
// Yêu cầu: Viết hàm isInteger(n) nhận một số n và trả về true nếu đó là số nguyên, ngược lại trả về false.
console.log("Bài 1: Kiểm tra số nguyên");
function isInteger(n) {
  if (Number.isInteger(n)) {
    return true;
  } else {
    return false;
  }
}

console.log(isInteger("abc"));

// Bài 2: Kiểm tra số chia hết
// Yêu cầu: Viết hàm isDivisible(a, b) kiểm tra xem a có chia hết cho b không.
console.log("Bài 2: Kiểm tra số chia hết");
function isDivisible(a, b) {
  if (a % b === 0) {
    console.log("a chia hết cho b");
  } else {
    console.log("a không chia hết cho b");
  }
}

isDivisible(10, 2);

// Bài 3: Đếm số chữ số
// Yêu cầu: Viết hàm countDigits(n) nhận một số và trả về số lượng chữ số của nó.
console.log("Bài 3: Đếm số chữ số");
function countDigits(n) {
  if (typeof n === "number") {
    return console.log(n.toString().length);
  } else {
    return console.log("Đây không phải là số");
  }
}

countDigits(10300);

// Bài 5: Kiểm tra số dương / âm / bằng 0
// Yêu cầu: Viết hàm checkNumber(n) nhận một số và trả về:
// "Dương" nếu số lớn hơn 0
// "Âm" nếu nhỏ hơn 0
// "Bằng 0" nếu đúng bằng 0
console.log("Bài 5: Kiểm tra số dương / âm / bằng 0");
function checkNumber(n) {
  if (n > 0) {
    return console.log("Đây là số dương");
  } else if (n === 0) {
    return console.log("Đây là số bằng 0");
  } else {
    return console.log("Đây là số âm");
  }
}

checkNumber(0);
