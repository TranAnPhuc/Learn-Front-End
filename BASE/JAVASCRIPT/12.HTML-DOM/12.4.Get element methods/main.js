// Get element methods
// Các cách lấy element:
// ID, class, tag name, CSS Selector, HTML collection

// ID
var headingNode = document.getElementById("heading");

console.log({ element: headingNode });

// Class
var headingNodes = document.getElementsByClassName("heading");

console.log(headingNodes);

// Tag name
var headingNodes2 = document.getElementsByTagName("h1");

console.log(headingNodes2);

// CSS Selector
var querySelector = document.querySelector(".heading");

console.log(querySelector);

var querySelector2 = document.querySelector(".box .heading-2:first-child");

console.log(querySelector2);

var querySelector3 = document.querySelector(
  ".box .heading-2:nth-last-child(2)"
);

console.log(querySelector3);

var querySelectorAll = document.querySelectorAll(".box .heading-2");

console.log(querySelectorAll);

// HTML Collection
console.log(document.forms);

// Mở rộng
var boxNode = document.querySelector(".box-1");
console.log(boxNode);
// Khi dùng cách này giúp đi từ thằng boxNode vào các thằng con của nó
console.log(boxNode.querySelectorAll("li"));

// document.write (đoạn script js được đặt ở đâu thì sẽ viết ở đó - có thể ghi DOM sau khi chạy xong)
document.write("Hello");
