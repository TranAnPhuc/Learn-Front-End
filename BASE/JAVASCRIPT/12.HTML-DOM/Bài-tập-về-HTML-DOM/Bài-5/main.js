/*
Bài 5: Đếm số ký tự nhập vào ô input
Yêu cầu: Khi người dùng gõ vào ô input, hiện số ký tự bên dưới.
*/

function countCharacters() {
  var inputField = document.querySelector(".input-count-character");
  var characterCount = document.querySelector(".count-character");
  inputField.onkeyup = function (e) {
    var count = inputField.value.length;
    characterCount.innerHTML = count;
  };
}

countCharacters();
