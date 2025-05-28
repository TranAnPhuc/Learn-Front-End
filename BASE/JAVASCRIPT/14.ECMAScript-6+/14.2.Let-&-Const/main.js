// Let & Const

// 1. Sự khác nhau giữa var / let, const:
// - Scope
// - Hosting
// 2. Sự khác nhau giữa const / var, let:
// - Assignment

// 1. Sự khác nhau giữa var / let, const:
// Scope (Phạm vi truy cập)
// var
// Phạm vi: Function Scope (phạm vi hàm)
// Biến khai báo bằng var chỉ bị giới hạn trong hàm chứa nó.
// Nếu khai báo var trong một khối như if, for, while, thì biến đó vẫn có thể truy cập được bên ngoài khối.
if (true) {
  var course = "JavaScript";
}
console.log(course);

// let, const
// Phạm vi: Block Scope (phạm vi khối)
// Biến chỉ có thể được truy cập trong khối {} nơi nó được khai báo.
if (true) {
  let courseLet = "JavaScript Let";
  const courseConst = "JavaScript Const";
}

console.log(courseLet);
console.log(courseConst);

// Hosting (Nâng biến lên đầu)
// var
// Biến var được nâng lên đầu hàm hoặc toàn cục, nhưng giá trị của nó sẽ là undefined cho đến khi dòng code khai báo biến được thực thi.
var a;
a = 1;

var a = 1;
// let, const
// Biến let và const không được nâng lên đầu, nếu truy cập trước khi khai báo sẽ

// 2. Sự khác nhau giữa const / var, let:
// Assignment (Gán giá trị)
// var, let
// Biến var và let có thể được gán giá trị mới sau khi khai báo.
var a1 = 1;

a1 = 100;

console.log(a1);

let a2 = 2;

a2 = 200;

console.log(a2);
// const
// Biến const không thể được gán giá trị mới sau khi khai báo. Nếu cố gắng gán
const a3 = 3;

a3 = 300;

console.log(a3);

// Khi nào nên dùng let, const?
// - Sử dụng let khi bạn cần thay đổi giá trị của biến trong suốt quá trình thực thi.
// - Sử dụng const khi bạn muốn đảm bảo rằng giá trị của biến không thay đổi sau khi được gán lần đầu tiên.
