/*
Giới thiệu một số hàm built in
    1. Alert
    2. Console
    3. Confirm
    4. Prompt
    5. Set timeout
    6. Set interval
*/

var fullName = "Trần An Phúc";

console.log(fullName);

confirm("Xác nhận độ tuổi");

prompt("Xác nhận độ tuổi");

setTimeout(function () {
  alert("Bạn đã chiến thắng");
}, 5000);

setInterval(function () {
  console.log("Đây là 1 hàm");
}, 1000);
