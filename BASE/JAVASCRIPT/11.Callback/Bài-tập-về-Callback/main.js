// Bài tập: Viết một hàm processUserInput nhận một hàm callback và thực hiện gọi lại sau khi nhập tên người dùng.
function processUserInput(input) {
  var name = prompt("Mời nhập tên");
  return input(name);
}

function callback(name) {
  console.log("Xin chào, ", name);
}

processUserInput(callback);

// Bài tập: Trả về kết quả của người dùng
var result = prompt("Mời nhập số:");

function tinhToan(cb) {
  return cb(result);
}

function callback2(num) {
  return num * 5;
}

console.log(tinhToan(callback2));
