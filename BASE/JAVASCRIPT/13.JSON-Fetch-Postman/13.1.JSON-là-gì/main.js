// JSON là gì?
// JSON (viết tắt của JavaScript Object Notation) là một định dạng dữ liệu nhẹ (dạng chuỗi)
// dùng để lưu trữ và trao đổi dữ liệu giữa các hệ thống,
// đặc biệt là giữa client và server trong các ứng dụng web.

// JSON thể hiện các dạng dữ liệu sau trong Javascript:
// String, Number, Boolean, Null, Array, Object

// Có 2 thao tác:
// Stringify: Từ JavaScript sang JSON
// Parse: Từ JSON sang JavaScript

// Chuỗi JSON thể hiện kiểu string
var json = '"Hello"';
// Chuỗi JSON thể hiện kiểu number
var json1 = "1";
// Chuỗi JSON thể hiện kiểu boolean
var json2 = "true";
// Chuỗi JSON thể hiện kiểu Null
var json3 = "null";
// Chuỗi JSON thể hiện kiểu Array
var json4 = '["JavaScript","PHP"]';
// Chuỗi JSON thể hiện kiểu Object
var json5 = '{"name":"An Phúc","age":20}';

console.log(JSON.parse(json));
console.log(JSON.parse(json1));
console.log(JSON.parse(json2));
console.log(JSON.parse(json3));
console.log(JSON.parse(json4));
console.log(JSON.parse(json5));

// chuyển từ JavaScript sang JSON
console.log(
  JSON.stringify({
    name: "An Phúc",
    age: 20,
  })
);
