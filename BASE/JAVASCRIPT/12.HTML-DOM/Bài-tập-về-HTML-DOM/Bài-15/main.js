const oneElement = document.getElementById("one");
const twoElement = document.getElementById("two");
const threeElement = document.getElementById("three");
const sumElement = document.getElementById("sum");
const equalElement = document.getElementById("equal");

let equal = "";

oneElement.onclick = function () {
  equal += "1";
  console.log(equal);
};

twoElement.onclick = function () {
  equal += "2";
  console.log(equal);
};

threeElement.onclick = function () {
  equal += "3";
  console.log(equal);
};

sumElement.onclick = function () {
  equal += " + ";
  console.log(equal);
};

equalElement.onclick = function () {
  equal = eval(equal);
  console.log(equal);
};
