var users = [
  { id: 1, name: "Alice", age: 21, isActive: true },
  { id: 2, name: "Bob", age: 17, isActive: false },
  { id: 3, name: "Carol", age: 25, isActive: true },
  { id: 4, name: "Dave", age: 30, isActive: false },
  { id: 5, name: "Eve", age: 19, isActive: true },
];

var numbers = [3, 6, 2, 8, 5, 10, 7, 4, 9, 1];

// forEach()
console.log("forEach()");
var totalAge = 0;
var baiTap1 = users.forEach(function (element) {
  console.log(`${element.name} (${element.age} tuổi)`);
  totalAge += element.age;
});
console.log(totalAge);

// every()
console.log("every()");
function kiemTraTuoi(age) {
  return age.every(function (element) {
    return element.age >= 18;
  });
}

if (kiemTraTuoi(users)) {
  console.log("Tất cả điều trưởng thành");
} else {
  console.log("Có user chưa đủ 18 tuổi");
}

// some()
console.log("some()");
function kiemTraActive(isActive) {
  return isActive.some(function (element) {
    return element.isActive === true;
  });
}
if (kiemTraActive(users)) {
  console.log("Có user active");
} else {
  console.log("Không có user active");
}

// find()
console.log("find()");
var tuoiTren25 = function (age) {
  return age.find(function (element) {
    return element.age > 25;
  });
};

console.log(tuoiTren25(users));

// filter()
console.log("filter()");
var filterUsers = function (filerUser) {
  return filerUser.filter(function (element) {
    return element.age > 20 && element.isActive === true;
  });
};

console.log(filterUsers(users));

// map()
console.log("map()");
var usersMap = function (userMap) {
  return userMap.map(function (element) {
    return `${element.name} (${element.age})`;
  });
};

console.log(usersMap(users));

// reduce()
// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);

// Lấy ra các khóa học đưa vào một mảng mới
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "Javascript",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "NodeJS",
      },
    ],
  },
];

var newTopics = topics.reduce(function (topic, item) {
  return topic.concat(item.courses);
}, []);

console.log(newTopics);

// Nâng cao hơn cơ bản
// forEach()
console.log("forEach() Nâng cao");
var people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 30 },
  { name: "Eva", age: 20 },
];
var list1 = [];
var list2 = [];
var listUser = people.forEach(function (element) {
  if (element.age > 18) {
    list1.push(element.name);
  } else {
    list2.push(element.name);
  }
});
console.log("Nhóm tuổi dưới 18:", list2);
console.log("Nhóm người lớn(trên 18 tuổi):", list1);

// every()
console.log("every() Nâng cao");
var users2 = [
  { username: "john123", email: "john@example.com" },
  { username: "alice98", email: "alice@example.com" },
  { username: "bob", email: "" },
];
var checkEmail = users2.every(function (element, index) {
  return element.email !== "";
});
if (checkEmail) {
  console.log("Mọi user đều có email hợp lệ");
} else {
  console.log("Có email không hợp lệ");
}

// some()
console.log("some() Nâng cao");
var products = [
  { name: "Laptop", price: 1000, onSale: false },
  { name: "Phone", price: 500, onSale: true },
  { name: "Tablet", price: 300, onSale: false },
];
var checkProducts = products.some(function (element) {
  return element.onSale === true;
});
if (checkProducts) {
  console.log("Có sản phẩm đang giảm giá");
} else {
  console.log("Không có sản phẩm giảm giá");
}
