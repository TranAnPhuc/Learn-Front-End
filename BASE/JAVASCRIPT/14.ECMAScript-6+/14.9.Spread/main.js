// Spread (Toán tử rải)
var array1 = ["Javascript", "Ruby", "PHP"];

var array2 = ["ReactJS", "Dart"];

// khi rải trước 1 object hoặc array nó sẽ bỏ đi dấu ngoặc đầu và đuôi
var array3 = [...array2, ...array1];

console.log(array3);

var object1 = {
  name: "Javascript",
};

var object2 = {
  price: 1200,
};

var object3 = { ...object1, ...object2 };

console.log(object3);

// Rest được truyền khi định nghĩa tham số
function logger(...rest) {
  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

// Spread được truyền với dạng tham số
logger(...array1);
