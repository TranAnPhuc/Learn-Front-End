/*
Kiểu dữ liệu trong Javascript

1.Kiểu dữ liệu nguyên thuỷ - Primitive Data
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol

2.Dữ liệu phức tạp - Complex Data
        - Function
        - Object
*/

// Number type
var num1 = 1;
var num2 = 2;
var num3 = 1.5;

// Cách kiểm tra từng kiểu dữ liệu
console.log(typeof num1);

// String type
var fullName = "An Phúc";
console.log(fullName);
console.log(typeof fullName);

// Boolean type
var isSuccess = true;
console.log(typeof isSuccess);

// Undefined type
var age;
console.log(age);
console.log(typeof age);

// Null type (null ở đây là nothing - không có gì)
var isNull = null;
console.log(typeof isNull);

// Symbol type (Nó đại diện cho một giá trị duy nhất và ẩn danh)
var id = Symbol("id");
console.log(typeof id);

// Function type
var myFunction = function () {
  alert("Hi, xin chào các bạn");
};

myFunction();
console.log(typeof myFunction);

// Object type
var myObject = {
  name: "Phúc",
  age: 20,
  myFunction: function () {},
};

console.log(myObject);
console.log(typeof myObject);

var myArray = ["Javascript", "PHP", "Python"];

console.log(myArray);
console.log(typeof myArray);
