/*
Tham số hàm - Javascript cơ bản

1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu?
    - Tính private?
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng lặp for of
*/

function writeLog(message, message2) {
  console.log(message);
  console.log(message2);
}

writeLog("Xin chào các bạn", "Xin chào các bạn 2");

// Trong JavaScript, arguments là một đối tượng đặc biệt (object) mà mỗi hàm đều có sẵn,
// chứa tất cả các giá trị (tham số) được truyền vào khi gọi hàm đó.
// Đặc biệt, đối tượng này không phải là một mảng thực sự, mặc dù nó có dạng giống mảng (array-like object),
// có thể truy cập thông qua chỉ mục và có thuộc tính length để biết số lượng tham số.
function writeLog2() {
  console.log(arguments);
}

writeLog2(1, 2, 3);

function writeLog3() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param} - `;
  }
  console.log(myString);
}

writeLog3(1, 2, 3);
