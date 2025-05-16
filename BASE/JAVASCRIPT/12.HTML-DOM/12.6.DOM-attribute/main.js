// DOM attribute
var headingElement = document.querySelector("h1");

console.log(headingElement);

// setter (Thêm attribute cho thẻ h1 bằng toán tử gán)
headingElement.title = "Đây là tiêu đề của thẻ h1";
headingElement.id = "Heading";
headingElement.className = "Heading";

// setAttribute (thêm attribute cho thẻ h1 bằng phương thức setAttribute mà không cần attribute hợp lệ)
headingElement.setAttribute("data-title", "Đây là tiêu đề của thẻ h1");

var headingElement2 = document.querySelector("h2");

headingElement2.title = "Đây là tiêu đề của thẻ h2";
headingElement2.id = "Heading2";

// getAttribute (Lấy giá trị của attribute)
console.log(headingElement2.getAttribute("class"));
console.log(headingElement2.getAttribute("title"));

// getter (Lấy giá trị của attribute chỉ lấy attribute hợp lệ)
console.log(headingElement2.id);
