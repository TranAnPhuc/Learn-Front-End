// Bài 1: Viết hàm chào người dùng
// Yêu cầu: Viết một hàm tên là sayHello nhận vào một tham số là tên người dùng và in ra câu:
// 👉 Xin chào, <tên>!
console.log("Bài 1: Viết hàm chào người dùng");
function sayHello(userName) {
  console.log("Xin chào, ", userName);
}

sayHello("Trần An Phúc");

// Bài 2: Tính tổng hai số
// Yêu cầu: Viết một hàm tên sum nhận vào 2 số và trả về tổng của chúng.
console.log("Bài 2: Tính tổng hai số");
function sum(numA, numB) {
  return numA + numB;
}

var result = sum(20, 10);

console.log(result);

// Bài 3: Kiểm tra số chẵn hay lẻ
// Yêu cầu: Viết hàm isEven nhận một số và trả về:
// "Chẵn" nếu là số chẵn
// "Lẻ" nếu là số lẻ
console.log("Bài 3: Kiểm tra số chẵn hay lẻ");
function isEven(number) {
  if (number % 2 === 0) {
    return console.log(number, " là số chẵn");
  } else {
    return console.log(number, " là số lẻ");
  }
}

isEven(20);

// Bài 4: Tính chu vi hình tròn
// Yêu cầu: Viết hàm circlePerimeter(radius) nhận vào bán kính hình tròn và trả về chu vi (C = 2 * π * r)
console.log("Bài 4: Tính chu vi hình tròn");
function circlePerimeter(radius) {
  var pi = 3.14;
  var C = 2 * pi * radius;
  return console.log("Chu vi hình tròn C = 2 * π *", radius, " = ", C);
}

circlePerimeter(10);
