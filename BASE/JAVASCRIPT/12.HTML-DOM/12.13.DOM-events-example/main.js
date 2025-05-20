// DOM events example

// 1. Input / select
// 2. Key up / down

var inputElement = document.querySelector("input[type='text']");

inputElement.oninput = function (e) {
  console.log(e.target.value);
};

var checkboxElement = document.querySelector("input[type='checkbox']");

checkboxElement.onchange = function (e) {
  console.log(e.target.checked);
};

var selectElement = document.querySelector("select");

selectElement.onchange = function (e) {
  console.log(e.target.value);
};

var keyboardElement = document.querySelector("input.keyboardevent");

// keyboardElement.onkeydown = function (e) {
//   console.log(e.target.value);
// };

// keyboardElement.onkeyup = function (e) {
//   console.log(e.target.value);
// };

// keyboardElement.onkeypress = function (e) {
//   console.log(e.target.value);
// };

keyboardElement.onkeyup = function (e) {
  console.log(e.which);

  switch (e.which) {
    case 27:
      console.log("Thoát");
      break;
  }
};

// which đã bị gỡ bỏ
document.onkeyup = function (e) {
  switch (e.which) {
    case 27:
      console.log("Thoát");
      break;
  }
};
