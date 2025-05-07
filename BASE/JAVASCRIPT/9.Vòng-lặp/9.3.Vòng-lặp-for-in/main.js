// For/in loop (duyệt qua key của đối tượng trả về cho biến tự định nghĩa dưới dạng string)

// for/in duyệt qua object
var myInfo = {
  name: "Phúc",
  age: 20,
  address: "Long An",
};

for (var key in myInfo) {
  console.log(myInfo[key]);
}

// for/in duyệt qua array
var languages = ["Javascript", "PHP", "Golang"];

for (var key in languages) {
  console.log(languages[key]);
}

// for/in duyệt qua string
var myString = "Javascript";

for (var key in myString) {
  console.log(myString[key]);
}
