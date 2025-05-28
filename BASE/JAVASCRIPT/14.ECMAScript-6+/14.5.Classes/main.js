// Classes
// classes ES6 (lớp trong ES6 – ECMAScript 2015) là cách viết mới để tạo đối tượng và kế thừa,
// giúp mã dễ đọc và dễ quản lý hơn so với cách dùng function và prototype kiểu cũ.
class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

const phpCourse = new Course("PHP", 1200);
const jsCourse = new Course("Javascript", 1000);

console.log(phpCourse);
console.log(jsCourse);

console.log(phpCourse.getName());
