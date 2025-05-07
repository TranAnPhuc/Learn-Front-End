// Object date

var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(year);
// month sẽ trả về giá trị từ 0 - 11
console.log(month);
console.log(day);

console.log(`${day}/${month}/${year}`);
