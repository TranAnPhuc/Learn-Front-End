// ClassList Property

// add (Thêm class)
// contains (kiểm tra class có tồn tại hay không)
// remove (Loại bỏ class)
// toggle (Kiểm tra class có tồn tại thì xóa, không có thì thêm)
// replace (Thay thế class)

var boxElement = document.querySelector(".box");

// add
// Muốn thêm nhiều class thì phải ngăn cách nhau bởi dấu cách
boxElement.classList.add("red", "text-shadow");

// contains
console.log(boxElement.classList.contains("red"));

// remove
boxElement.classList.remove("red");

// toggle
boxElement.classList.toggle("red");

// replace
boxElement.classList.replace("red", "blue");
