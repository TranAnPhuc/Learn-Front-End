// for/of loop

var languages = ["Javascript", "PHP", "Java"];

// với vòng lặp for/of này sẽ duyệt qua từng giá trị của mảng
for (var value of languages) {
  console.log(value);
}

// duyệt qua chuỗi
var myString = "Javascript";

for (var value of myString) {
  console.log(value);
}

// cách duyệt qua 1 object
var myInfo = {
  name: "Phúc",
  age: 20,
};

// cách 1:
for (var value of Object.keys(myInfo)) {
  console.log(myInfo[value]);
}

// cách 2:
for (var value of Object.values(myInfo)) {
  console.log(value);
}
