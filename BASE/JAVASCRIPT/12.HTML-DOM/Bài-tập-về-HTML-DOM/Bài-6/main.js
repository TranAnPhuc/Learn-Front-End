/*
Bài 6: Click vào nút để đổi màu nền
Yêu cầu: Khi người dùng click vào nút, màu nền của trang sẽ đổi ngẫu nhiên.
*/
function changeBackgroundColor() {
  var btnElement = document.querySelector(".change-color");
  var colors = ["red", "green", "blue", "yellow", "pink", "orange"];
  btnElement.onclick = function (e) {
    var colorLength = colors.length;
    var randomIndex = Math.floor(Math.random() * colorLength);
    var randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
  };
}

changeBackgroundColor();
