/*
Đếm Số Ký Tự Trong Ô Nhập
Yêu cầu:

Gõ nội dung vào textarea

Hiển thị số ký tự đã nhập

Nếu dài hơn 100 ký tự thì hiển thị cảnh báo màu đỏ
*/
var textareaElement = document.querySelector("#value-character");
var pElement = document.querySelector("#total-character");

function demKyTu() {
  textareaElement.onkeyup = function () {
    var count = textareaElement.value.length;
    pElement.innerHTML = "Bạn đã nhập tổng " + count;
    if (count >= 100) {
      pElement.style.backgroundColor = "red";
      pElement.style.color = "white";
      pElement.innerHTML += " - Quá giới hạn 100 ký tự";
    } else {
      pElement.style.backgroundColor = "transparent";
    }
  };
}

demKyTu();
