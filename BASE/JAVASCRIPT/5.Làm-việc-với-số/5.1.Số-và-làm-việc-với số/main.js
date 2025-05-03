/*
Kiểu số (Number) trong Javascript

1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào? Tại sao?
    - Kiểm tra data type

2. Làm việc với Number
    - To String
    - To Fixed
*/

// 1. Tạo giá trị Number
var age = 20;
var PI = 3.14;

var otherNumber = new Number(20);

var result = 20 / "abc";

// isNaN (Kiểm tra có phải NaN không)
console.log(isNaN(result));

// 2. Làm việc với Number
// toString() (Chuyển đổi kiểu number sang kiểu String)
console.log(age.toString());

// toFixed() (Làm tròn số thập phân. Lưu ý: nếu số thập phân là xx.49 thì sẽ làm tròn dưới ngược lại làm tròn lên).
// Có thể truyền số muốn làm tròn vào trong ngoặc
var myNumber = 4000.5003423;

console.log(myNumber.toFixed(3));
