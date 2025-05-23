Array.prototype.reduce2 = function (callback, initialValue) {
  var i = 0;
  if (arguments.length < 2) {
    i = 1;
    initialValue = this[0];
  }
  for (; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this);
  }
  return initialValue;
};

var numbers = [1, 2, 3, 4, 5];

var result = numbers.reduce2(function (total, number) {
  return total + number;
}, 0);

console.log(result);
