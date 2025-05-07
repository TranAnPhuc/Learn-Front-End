/*
    Object Prototype - Basic

    1. Prototype là gì?
    2. Sử dụng khi nào?
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
