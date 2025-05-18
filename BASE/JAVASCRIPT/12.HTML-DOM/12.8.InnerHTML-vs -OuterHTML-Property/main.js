// InnerHTML vs OuterHTML Property
var boxElement = document.querySelector(".box");

console.log(boxElement);

// InnerHTML (có thể thêm element node, attribute node, text node vào trong 1 element(có thể ghi đè lên nội dung cũ)
// hoặc lấy element node, attribute node, text node bên trong element dưới dạng string)
boxElement.innerHTML = `<h1 class="heading">Inner HTML</h1>`;

console.log(boxElement.innerHTML);

console.log(document.querySelector(".heading").innerText);

// OuterHTML (có thể thêm element node, attribute node, text node ngay vị trí element gọi tới thuộc tính (có thể ghi đè lên nội dung cũ)
// hoặc lấy element node, attribute node, text node ngay từ vị trí element gọi thuộc tính và trả về dưới dạng string)

boxElement.outerHTML = "<span>Outer HTML</span>";

// Nội dung được console.log ra từ boxElement chỉ là nội dung được lưu trong biến boxElement chứ
// không phải là nội dung của boxElement trong DOM
console.log(boxElement.outerHTML);
