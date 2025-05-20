/*
Bài 2: Đổi màu nền
Yêu cầu: Khi bấm nút, đổi màu nền của một <div>.
*/

function changeBackgroundColor() {
  var divElement = document.querySelector("div");

  var btnElement = document.querySelector("button");
  btnElement.onclick = function () {
    divElement.style.backgroundColor = "blue";
  };
}

changeBackgroundColor();
