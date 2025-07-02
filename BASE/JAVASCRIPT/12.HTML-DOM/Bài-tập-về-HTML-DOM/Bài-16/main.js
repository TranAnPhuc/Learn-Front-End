const keo = document.getElementById("keo");
const bua = document.getElementById("bua");
const bao = document.getElementById("bao");
const randomNumber = Math.floor(Math.random() * 10);
let computerMove = "";
let result = "";

keo.onclick = function () {
  if (randomNumber >= 0 && randomNumber < 3) {
    computerMove = "kéo";
  } else if (randomNumber >= 3 && randomNumber < 6) {
    computerMove = "búa";
  } else if (randomNumber >= 6) {
    computerMove = "bao";
  }

  if (computerMove === "kéo") {
    result = "Hòa";
  } else if (computerMove === "bao") {
    result = "Bạn thắng";
  } else if (computerMove === "búa") {
    result = "Bạn thua";
  }

  alert(`Bạn chọn đá và máy chọn ${computerMove}, ${result}`);
};
