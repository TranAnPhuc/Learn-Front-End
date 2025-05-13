/*
    Object Prototype - Basic

    1. Prototype là gì? (prototype là một cơ chế cốt lõi cho phép các object kế thừa thuộc tính và phương thức từ nhau.)
    2. Sử dụng khi nào? (khi cần tạo nhiều object có cùng hành vi (phương thức) — để tiết kiệm bộ nhớ và tổ chức mã tốt hơn.)
*/
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// thêm 1 thuộc tính hoặc phương thức bằng prototype
User.prototype.className = "F8";
User.prototype.getClassName = function () {
  return this.className;
};

var author = new User("An", "Phúc", "Avatar");
var user = new User("Vũ", "Nguyễn", "Avatar");

console.log(author.className);
console.log(user.getClassName());
