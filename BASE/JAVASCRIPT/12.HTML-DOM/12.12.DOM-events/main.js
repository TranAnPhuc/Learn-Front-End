// DOM events
// 1. Attribute events
// 2. Assign event using the element node

// Gán sự kiện bằng element node
var buttonElement = document.querySelector(".change-color");

buttonElement.onclick = function () {
  buttonElement.style.backgroundColor = "red";
};

buttonElement.ondblclick = function () {
  buttonElement.style.backgroundColor = "transparent";
};

// Thêm sự kiện cho nhiều element có cùng class
var pElements = document.querySelectorAll(".p");

for (var i = 0; i < pElements.length; i++) {
  pElements[i].onclick = function (e) {
    console.log(e.target);
  };
}
