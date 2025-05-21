/*
Bài tập DOM #1: Đổi màu nền khi bấm nút
✅ Yêu cầu:
Tạo một trang có:

Một tiêu đề (ví dụ: <h1>Đổi màu nền</h1>)

Một nút "Đổi màu".

Khi bấm vào nút đó:

Màu nền của toàn bộ trang sẽ đổi sang một màu ngẫu nhiên.

Mỗi lần bấm là một màu khác nhau.
*/

// Lấy phần tử button trong HTML
var buttonElement = document.querySelector(".random-color");

// Tạo một hàm để đổi màu nền
function randomColor() {
  // Gán sự kiện click cho buttonElement
  buttonElement.addEventListener("click", changeColor);
  // Tạo một hàm để tạo màu ngẫu nhiên
  function changeColor() {
    // Tạo biến randomColor để lưu màu ngẫu nhiên
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    // Gán biến randomColor cho màu nền của body
    document.body.style.backgroundColor = randomColor;
  }
}

randomColor();
