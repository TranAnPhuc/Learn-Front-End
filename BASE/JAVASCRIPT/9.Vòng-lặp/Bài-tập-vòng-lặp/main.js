// Bài 1: In các số từ 1 đến 10
console.log("Bài 1: In các số từ 1 đến 10");
for (var i = 1; i <= 10; ++i) {
  console.log(i);
}

// Bài 2: In các số chẵn từ 2 đến 20
console.log("Bài 2: In các số chẵn từ 2 đến 20");
for (var i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Bài 3: Tính tổng các số từ 1 đến 100
console.log("Bài 3: Tính tổng các số từ 1 đến 100");
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}

console.log("Tổng của các số từ 1 đến 100:", sum);

// Bài 4: In bảng cửu chương của số 5
console.log("Bài 4: In bảng cửu chương của số 5");
for (var i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// Bài 5: Đếm ngược từ 10 về 1
console.log("Bài 5: Đếm ngược từ 10 về 1");
for (var i = 10; i >= 1; i--) {
  console.log(i);
}

// Bài 6: Tính giai thừa của một số
console.log("Bài 6: Tính giai thừa của một số");
var n = 5;
var result = 1;
for (var i = 1; i <= n; i++) {
  result *= i;
}
console.log("Giai thừa của 5 là: ", result);

// Bài 7: Vẽ tam giác sao
var m = 5;
for (var i = 1; i <= n; i++) {
  var line = "";
  for (var j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

// Bài 8: In ra tất cả các thuộc tính của một đối tượng
console.log("Bài 8: In ra tất cả các thuộc tính của một đối tượng");
var student = {
  name: "Minh",
  age: 20,
  gender: "male",
};

for (var key in student) {
  console.log(key, ":", student[key]);
}

//  Bài 9: Đếm số lượng thuộc tính trong một đối tượng
console.log("Bài 9: Đếm số lượng thuộc tính trong một đối tượng");
var car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "black",
};

var carCount = 0;
for (var key in car) {
  carCount++;
}

console.log(carCount);

// Bài 10: Kiểm tra nếu giá trị là chuỗi
console.log("Bài 10: Kiểm tra nếu giá trị là chuỗi");
var profile = {
  username: "user123",
  password: "abc123",
  age: 25,
  isAdmin: false,
};

for (var key in profile) {
  if (typeof profile[key] === "string") {
    console.log(key);
  }
}

//  Bài 11: Tạo một bản sao đối tượng
console.log("Bài 11: Tạo một bản sao đối tượng");
var book = {
  title: "Learn JavaScript",
  pages: 300,
  author: "John Doe",
};

var copyBook = {};

for (var key in book) {
  copyBook[key] = book[key];
}

console.log(copyBook);

//  Bài 12: Biến đổi giá trị trong đối tượng
console.log("Bài 12: Biến đổi giá trị trong đối tượng");
const prices = {
  apple: 10000,
  banana: 8000,
  orange: 12000,
};

for (var key in prices) {
  if (key === "apple" || "banana" || "orange") {
    prices[key] *= 1.1;
  }
}

console.log(prices);
