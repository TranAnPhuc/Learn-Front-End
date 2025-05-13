// forEach()
console.log("forEach()");
Array.prototype.forEach2 = function (callback) {
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      callback(this[i], i, this);
    }
  }
};

var myArray = ["Javascript", "Java", "PHP"];

myArray.forEach2(function (element, index, array) {
  console.log(element, index, array);
});

// every()
console.log("every2()");
Array.prototype.every2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (!result) {
        return false;
      }
    }
  }
  return true;
};

var courses = [
  {
    course: "JavaScript",
    coin: 100,
  },
  {
    course: "JavaScript",
    coin: 0,
  },
  {
    course: "JavaScript",
    coin: 100,
  },
  {
    course: "JavaScript",
    coin: 0,
  },
];

var coinCourses = courses.every2(function (element, index) {
  console.log(index);
  return element.coin === 0;
});

console.log(coinCourses);

// filter()
console.log("filter2()");
Array.prototype.filter2 = function (callback) {
  var newArray = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        newArray.push(this[index]);
      }
    }
  }
  return newArray;
};

var checkCoin = courses.filter2(function (element, index, array) {
  return element.coin === 0;
});

console.log(checkCoin);

// some()
console.log("some2()");
Array.prototype.some2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        return true;
      }
    }
  }
  return false;
};

var freeCourse = courses.some2(function (element, index, array) {
  console.log(index);
  return element.coin === 0;
});

console.log(freeCourse);

// find()
console.log("find2()");
Array.prototype.find2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        return this[index];
      }
    }
  }
  return undefined;
};

var bigCoin = courses.find2(function (course, index, array) {
  console.log(index);
  return course.coin > 0;
});

console.log(bigCoin);
