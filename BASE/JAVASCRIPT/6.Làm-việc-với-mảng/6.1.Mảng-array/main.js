/*
Mảng trong Javascript - Array 

1. Tạo mảng
    - Cách tạo
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra data type?
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/

// 1. Tạo mảng: có 2 cách
var languages = [
  "Javascript",
  "PHP",
  "Golang",
  null,
  undefined,
  function () {},
  {},
];

console.log(typeof languages);

var languages2 = new Array(
  "Javascript",
  "PHP",
  "Golang",
  null,
  undefined,
  function () {},
  {}
);

console.log(languages2);

// Kiểm tra xem có phải Array không
console.log(Array.isArray(languages));

// 2. Truy xuất mảng
// Kiểm tra độ dài mảng
console.log(languages.length);

// Lấy phần tử theo index
console.log(languages[0]);
