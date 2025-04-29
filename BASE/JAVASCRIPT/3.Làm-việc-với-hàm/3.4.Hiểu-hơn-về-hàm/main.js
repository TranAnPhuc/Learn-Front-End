/*
Một số điều cần biết về function

1.Khi function đặt trùng tên?
2.Khai báo biến trong hàm?
3.Định nghĩa hàm trong hàm?
*/

// 1.Khi function đặt trùng tên?
// => function định nghĩa sau sẽ ghi đè function định nghĩa trước
function showMessage() {
  console.log("Message 1");
}

function showMessage() {
  console.log("Message 2");
}

showMessage();

// 2.Khai báo biến trong hàm?
// Có thể nhưng phạm vị của nó chỉ nằm trong hàm được định nghĩa
function showName() {
  var fullName = "Trần An Phúc";
  console.log(fullName);
}

showName();

// 3.Định nghĩa hàm trong hàm?
