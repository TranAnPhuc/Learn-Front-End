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
