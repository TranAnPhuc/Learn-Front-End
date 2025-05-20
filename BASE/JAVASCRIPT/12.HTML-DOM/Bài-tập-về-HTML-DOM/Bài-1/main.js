/*
Bài tập 1: Thay đổi nội dung văn bản
Yêu cầu: Tạo một đoạn văn và một nút bấm. Khi bấm nút, thay đổi nội dung đoạn văn.
*/

var pElement = document.querySelector(".quiz");

var btnElement = document.querySelector(".btn");

btnElement.onclick = function () {
  pElement.innerText = "Như hạch";
};
