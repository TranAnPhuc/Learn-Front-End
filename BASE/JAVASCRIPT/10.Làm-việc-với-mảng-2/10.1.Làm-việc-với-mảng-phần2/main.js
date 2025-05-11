/*
    Array methods:
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/

var course = [
  {
    id: 1,
    name: "Javascript",
    coin: 200,
  },
  {
    id: 2,
    name: "Java",
    coin: 250,
  },
  {
    id: 3,
    name: "PHP",
    coin: 100,
  },
  {
    id: 4,
    name: "Golang",
    coin: 0,
  },
  {
    id: 5,
    name: "C#",
    coin: 0,
  },
  {
    id: 6,
    name: "Golang",
    coin: 100,
  },
];

// forEach()
/*
Method forEach() trong JavaScript là một cách đơn giản để lặp qua mỗi phần tử trong một mảng.
- element: phần tử hiện tại trong mảng (quan trọng nhất).
- index (tuỳ chọn): chỉ số của phần tử.
- array (tuỳ chọn): chính mảng đang được lặp.
*/
console.log("forEach()");
course.forEach(function (element, index, array) {
  console.log(index, element);
});

// every()
/*
Method every() trong JavaScript được dùng để kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện hay không.
- Trả về true khi tất cả đều thỏa mãn điều kiện.
- Trả về false khi có 1 phần tử không thỏa mãn điều kiện.
*/
console.log("every()");
var isFree = course.every(function (element, index, array) {
  console.log(index);
  return element.coin === 0;
});
console.log(isFree);

// some()
/*
Method some() trong Javascript được dùng để kiểm tra xem có ít nhất 1 phần tử trong mảng có thỏa mãn một điều kiện hay không.
- Trả về true khi có 1 phần tử thỏa mãn điều kiện.
- Trả về false khi tất cả điều không thỏa mãn điều kiện.
*/
console.log("some()");
var isFree2 = course.some(function (element, index, array) {
  console.log(index);
  return element.coin === 0;
});
console.log(isFree2);

// find()
/*
Method find() dùng để tìm phần tử đầu tiên trong một mảng thỏa mãn một điều kiện nào đó.
- Nó sẽ trả về chính phần tử đó, không phải true hay false.
- Nếu không tìm thấy phần tử nào thỏa điều kiện → find() trả về undefined.
*/
console.log("find()");
var findName = course.find(function (element, index, array) {
  return element.name === "Golang";
});
console.log(findName);

// filter()
/*
Method filter() dùng để lọc ra các phần tử trong mảng thỏa mãn một điều kiện nào đó.
- Nó sẽ trả về một mảng mới chứa tất cả các phần tử đúng theo điều kiện bạn đưa ra.
- Nếu không phần tử nào thỏa mãn → trả về mảng rỗng []
*/
console.log("filter()");
var filterName = course.filter(function (element, index, array) {
  return element.name === "Golang";
});
console.log(filterName);

// map()
/*
Method map() dùng để duyệt qua từng phần tử của mảng và tạo ra 1 mảng mới.
*/
console.log("map()");
var newCourses = course.map(function (element, index, array) {
  return {
    id: element.id,
    name: `Khóa học: ${element.name}`,
    coin: element.coin,
    coinText: `Giá: ${element.coin}`,
    index: index,
  };
});

console.log(newCourses);

// reduce()
/*
Method reduce() dùng để rút gọn 1 mảng thành 1 giá trị duy nhất(có thể là số,chuỗi,đối tượng,mảng,...)
bằng cách lặp qua từng phần tử và tích lũy kết quả
*Cú pháp
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
- array: mảng mà bạn muốn xử lý.
- callback: hàm gọi trên từng phần tử của mảng, có 4 tham số:
1.accumulator – (bắt buộc) giá trị tích lũy, kết quả trả về từ lần chạy callback trước đó.
2.currentValue – (bắt buộc) phần tử hiện tại đang được xử lý.
3.currentIndex – (tùy chọn) chỉ số của phần tử hiện tại.
4.array – (tùy chọn) chính mảng gốc.
- initialValue – (tùy chọn) giá trị khởi tạo cho accumulator ở lần chạy đầu tiên.
*/
console.log("reduce()");
var i = 0;
var totalCoin = course.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  i++;
  var total = accumulator + currentValue.coin;
  console.table({
    "Lượt chạy": i,
    "Biến tích lũy": accumulator,
    "Giá khóa học": currentValue.coin,
    "Tích lũy được": total,
  });
  return total;
},
0);
console.log(totalCoin);
