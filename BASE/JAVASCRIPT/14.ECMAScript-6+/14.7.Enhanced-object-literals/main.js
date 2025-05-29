// Enhanced object literals
// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

var name = "Javascript";
var price = 1000;

var course = {
  // 1. Định nghĩa key: value cho object
  //tương đương name: name
  name,
  price,
  // 2. Định nghĩa method cho object
  // loại bỏ dấu : và từ khóa function
  getName() {
    return name;
  },
};

console.log(course.getName());

// 3. Định nghĩa key cho object dưới dạng biến
var fieldName = "name";
var fieldPrice = "price";

const course2 = {
  [fieldName]: "Javascript",
  [fieldPrice]: 1200,
};

console.log(course2);
