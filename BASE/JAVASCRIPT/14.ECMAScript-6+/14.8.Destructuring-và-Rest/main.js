// Destructuring, Rest

// Destructuring (destructuring (phá cấu trúc) là cú pháp giúp trích xuất giá trị từ mảng hoặc thuộc tính từ object
// và gán chúng vào các biến một cách nhanh chóng và gọn gàng.)
// - Nếu không muốn lấy 1 giá trị trong mảng đó để trống vị trí đó như thế này , ,.

// 1.Khi dùng với Array
var arr = ["Javascript", "PHP", "Python"];
var [a, , c] = arr;

console.log(a, c);
// Rest - Toán tử Rest (Được dùng với Destructuring để lấy ra những phần còn lại bằng cách ..."tên biến")
var array = ["Javascript", "PHP", "Python"];
var [bien1, bien2, ...rest] = array;

console.log(rest);

// 2.Khi dùng với Object
// - Khác với Array do có key nên phải lấy đúng tên key của Object (nếu để tên key không tồn tải sẽ trả về undefined)
var course = {
  name: "Javascript",
  price: 1000,
};

var { name, price } = course;

console.log(name, price);

// Dùng toán tử Rest cho Object
var Object = {
  nameCourse: "Javascript",
  price: 1000,
  children: {
    name: "ReactJS",
  },
};

var { nameCourse, ...rest } = Object;

console.log(rest);

// Trường hợp trong Object có Object con (Có thể đổi tên 1 key trùng nhau bằng dấu : "newName")
// - Nếu lấy 1 key không tồn tại và muốn giá trị mặc định thì dùng = "Nội dung",
// còn khi có thì sẽ là giá trị của key đó chứ phải mình tự gán
var Object2 = {
  name: "Javascript",
  price: 1000,
  children: {
    name: "ReactJS",
  },
  desc: "Mô tả thật sự",
};

var {
  name: parentName,
  children: { name: childrenName },
  desc = "Mô tả mặc định",
} = Object2;

console.log(parentName);
console.log(childrenName);
console.log(desc);

// Khi dùng toán tử Rest với hàm khi định nghĩa ra tham số
function logger(...params) {
  console.log(params);
}

console.log(logger(1, 2, 3, 4, 5, 6, 7, 8));

// có thể dùng destructuring cho hàm với đối số là mảng hoặc hàm
function logger2({ name, price, ...params }) {
  console.log(name);
  console.log(price);
  console.log(params);
}

logger2({
  name: "Javascript",
  price: 1000,
  desc: "Mô tả",
});

function logger3([a, b, ...rest]) {
  console.log(a);
  console.log(b);
  console.log(rest);
}

logger3(["Javascript", "PHP", "Python"]);
