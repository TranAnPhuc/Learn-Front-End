// Callback - Phần 2?
Array.prototype.map2 = function (callback) {
  var output = [];
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i, this);
    output.push(result);
  }
  return output;
};

var courses = ["Javascript", "PHP", "Golang"];

var htmls = courses.map2(function (course, index, array) {
  return `<h2>${course}</h2>`;
});

console.log(htmls.join(""));

// var htmls = courses.map2(function (course) {
//   return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(""));
