var courses = ["JavaScript", "PHP"];
var courses2 = new Array(10);

courses.length = 10;
console.log(courses);

console.log(courses2);
courses2.push("Java", "Golang");

for (var index in courses) {
  console.log(courses[index]);
}
