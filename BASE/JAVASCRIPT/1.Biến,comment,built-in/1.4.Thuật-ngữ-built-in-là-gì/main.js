/*
Giới thiệu một số hàm built in
    1. Alert (hộp thoại cảnh báo)
    2. Console (giúp ghi thông tin ra bảng điều khiển của trình duyệt)
    3. Confirm (hộp thoại xác nhận)
    4. Prompt (hộp thoại nhập dữ liệu từ người dùng)
    5. Set timeout (Chạy một lần duy nhất sau một khoảng delay)
    6. Set interval (Lặp đi lặp lại liên tục theo chu kỳ)
    7. parseInt (ép chuỗi thành số nguyên)
    8. parseFloat (ép chuỗi thành số thực)
*/

var fullName = "Trần An Phúc";

console.log(fullName);

// confirm("Xác nhận độ tuổi");

// prompt("Xác nhận độ tuổi");

// setTimeout(function () {
//   alert("Bạn đã chiến thắng");
// }, 5000);

// setInterval(function () {
//   console.log("Đây là 1 hàm");
// }, 1000);

var stringNumber = "6.00443";

console.log(parseInt(stringNumber));

console.log(parseFloat(stringNumber));
