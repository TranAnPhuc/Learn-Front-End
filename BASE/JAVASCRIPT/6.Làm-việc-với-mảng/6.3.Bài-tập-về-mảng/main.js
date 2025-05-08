// Bài 1: Tính tổng các phần tử trong mảng
console.log("Bài 1: Tính tổng các phần tử trong mảng");
function sumArr(arr) {
  var result = 0;
  for (var key in arr) {
    result += arr[key];
  }
  return result;
}

console.log(sumArr([1, 5, 3]));

// Bài 2: Tìm số lớn nhất trong mảng
console.log("Bài 2: Tìm số lớn nhất trong mảng");
function numMax(arr) {
  return Math.max(...arr);
}

console.log(numMax([10, 40, 29]));
