/*
 Bài tập DOM #2: Hiện / Ẩn hình ảnh
✅ Yêu cầu:
Tạo một giao diện đơn giản gồm:

Một hình ảnh bất kỳ.

Một nút với nội dung "Ẩn ảnh".

Khi bấm nút:

Nếu ảnh đang hiển thị → thì ẩn ảnh và đổi nội dung nút thành "Hiện ảnh".

Nếu ảnh đang ẩn → thì hiện ảnh lại và đổi nội dung nút thành "Ẩn ảnh".
*/

var buttonElement = document.querySelector(".show-hide-circle");
var circleElement = document.querySelector(".circle");

function showHideCircle() {
  buttonElement.addEventListener("click", buttonShowHide);
  function buttonShowHide() {
    if (circleElement.style.display === "block") {
      circleElement.style.display = "none";
      buttonElement.innerHTML = "Hiện ảnh";
    } else {
      circleElement.style.display = "block";
      buttonElement.innerHTML = "Ẩn ảnh";
    }
  }
}

showHideCircle();
