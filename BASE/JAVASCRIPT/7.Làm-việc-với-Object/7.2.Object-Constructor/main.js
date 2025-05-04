// Object constructor (xây dựng đối tượng)

// User(thamso1,thamso2,...)
function User(firstName, lastName, avatar) {
  // this.tenthuoctinh
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var author = new User("An", "Phúc", "Avatar");
var user = new User("Vũ", "Nguyễn", "Avatar");

// thêm object vào object constructor
author.title = "Chia sẻ dạo";
user.comment = "Quá là đỉnh";

console.log(author.getName());
console.log(user);
