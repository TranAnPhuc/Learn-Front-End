const numbers = [1, 2, 3, 4, 5];
let result = 0;

for (var i = 0; i < numbers.length; i++) {
  var total = numbers[i];
  //   result += total;
}
console.log(result);

for (var value of numbers) {
  result += value;
}

console.log(result);
