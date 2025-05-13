// Bài tập: Viết một hàm processUserInput nhận một hàm callback và thực hiện gọi lại sau khi nhập tên người dùng.
function processUserInput(input) {
  var name = prompt();
  return input(name);
}

function callback(name) {
  console.log("Xin chào, ", name);
}

processUserInput(callback);
