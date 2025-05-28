// Arrow function
const course = (name) => {
  return name;
};

console.log(course("JavaScript"));

// Có thể bỏ dấu ngoặc đơn và từ khóa return nếu viết sau dấu mũi tên sẽ return giá trị không cần dấu ngoặc và từ khóa return
const add = (a, b) => a + b;

console.log(add(2, 3));

// Nếu muốn return một object thì phải bao quanh nó bằng dấu ngoặc đơn
const getObject = (name, age) => ({ name: name, age: age });
console.log(getObject("John", 30));

// Nếu chỉ có một tham số thì có thể bỏ dấu ngoặc đơn
const square = (x) => x * x;
console.log(square(5));

// Đặc tính của arrow function:
// 1. Không có từ khóa this, sẽ lấy từ ngữ cảnh bên ngoài
const obj = {
  value: 10,
  getValue: () => {
    return this.value;
  },
};

console.log(obj.getValue());

// 2. Không thể tạo object constructor
const Person = (name) => {
  this.name = name; // Không thể sử dụng this
};

const person = new Person("John");
