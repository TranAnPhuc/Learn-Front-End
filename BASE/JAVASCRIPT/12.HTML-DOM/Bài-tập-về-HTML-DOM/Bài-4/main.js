/*
Bài 4: Thay đổi class để đổi style
Yêu cầu: Bấm nút đổi giao diện sáng/tối.
*/

function toggleTheme() {
  var btnElement = document.querySelector("button");
  btnElement.onclick = function () {
    document.body.classList.toggle("black");
  };
}

toggleTheme();
