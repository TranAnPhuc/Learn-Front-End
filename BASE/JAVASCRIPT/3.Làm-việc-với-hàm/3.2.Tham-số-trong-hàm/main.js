/*
Tham số hàm - Javascript cơ bản

1. Tham số?
    - Định nghĩa? (Tham số (parameter) là biến được khai báo trong phần định nghĩa hàm, 
      đại diện cho giá trị đầu vào mà hàm có thể nhận để xử lý.)

    - Kiểu dữ liệu? (Có thể truyền bất cứ kiểu dữ liệu nào)

    - Tính private? (Tính private (riêng tư) của hàm nghĩa là 
      hàm chỉ có thể được truy cập và sử dụng bên trong phạm vi mà nó được khai báo, chứ không thể gọi từ bên ngoài.)

    - Có thể truyền bao nhiêu tham số? (Có thể truyền 1 hoặc nhiều tham số)

2. Truyền đối số
    - Có thể truyền bao nhiêu đối số? (Có thể truyền 1 hoặc nhiều đối số)

3. Arguments?
    - Đối tượng arguments (arguments là một đối tượng đặc biệt có sẵn trong tất cả các hàm thông thường 
      (function declaration hoặc function expression). 
      Nó chứa danh sách các đối số (arguments) được truyền vào khi gọi hàm.).
      
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
