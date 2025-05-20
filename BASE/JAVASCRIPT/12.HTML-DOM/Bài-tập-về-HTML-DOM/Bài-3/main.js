/*
Bài 3: Toggle hiển thị nội dung
Yêu cầu: Bấm nút sẽ ẩn/hiện đoạn văn bản.
*/

function toggleContent() {
  var pElement = document.querySelector(".noti");
  var btnElement = document.querySelector(".toggle");

  btnElement.onclick = function () {
    if (pElement.style.display === "none") {
      pElement.style.display = "block";
    } else {
      pElement.style.display = "none";
    }
  };
}

toggleContent();
