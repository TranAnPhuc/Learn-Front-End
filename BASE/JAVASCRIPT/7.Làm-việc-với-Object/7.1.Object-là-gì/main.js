// Object trong Javascript
// Object (đối tượng) là một kiểu dữ liệu phức tạp dùng để lưu trữ nhiều giá trị dưới dạng cặp key-value (khóa - giá trị).

// tạo key value từ 1 biến
var emailKey = "email";

var myInfo = {
  name: "An Phúc",
  age: 20,
  address: "Long An",
  [emailKey]: "anphuc2005@gmail.com",
  getName: function () {
    // this ở đây là đối tượng myInfo
    return this.name;
  },
};

// thêm 1 cặp key và value trong 1 object đã được tạo
// myInfo.email = "anphuc2005@gmail.com";

console.log(myInfo);

// lấy value của key
// cách 1:
console.log(myInfo.name);
// cách 2:
console.log(myInfo["age"]);

// xóa key value
delete myInfo.age;
delete myInfo.address;

// gọi hàm trong object
console.log(myInfo.getName());

// Function --> Phương thức / method
// Other --> Thuộc tính / property
