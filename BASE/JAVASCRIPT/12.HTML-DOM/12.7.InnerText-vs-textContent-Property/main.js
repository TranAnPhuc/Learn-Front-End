// InnerText vs textContent Property
var headingElement = document.querySelector(".heading");

// getter (Lấy ra text node của element)
console.log(headingElement.innerText);
console.log(headingElement.textContent);

// setter (Thay đổi text node của element)
headingElement.innerText = "Hello World";
headingElement.textContent = "Hello World";

// Sự khác biệt giữa innerText và textContent
// 1. innerText sẽ lấy ra text node của element(lấy những gì thấy trên web),
// còn textContent sẽ lấy ra text node của tất cả các element con (lấy những gì có trong DOM)
// 2. innerText sẽ không lấy ra text node của các element bị ẩn (display: none),
// còn textContent sẽ lấy ra text node của tất cả các element con (kể cả các element bị ẩn)
// 3. Khi dùng template string `` innerText sẽ tự động thêm thẻ <br> vào giữa các dòng,
// còn textContent sẽ không thêm thẻ <br> vào giữa các dòng
// 4. innerText chỉ có ở elementNode, còn textContent có ở cả elementNode và textNode