// PreventDefault and StopPropagation

// PreventDefault: Loại bỏ hành động mặc định của một sự kiện

var aElement = document.querySelectorAll("a");

for (var i = 0; i < aElement.length; i++) {
  aElement[i].onclick = function (e) {
    if (!e.target.href.startsWith("https://f8.edu.vn")) {
      e.preventDefault();
    }
  };
}

var ulElement = document.querySelector("ul");

ulElement.onmousedown = function (e) {
  e.preventDefault();
};

ulElement.onclick = function (e) {
  console.log(e.target);
};

// StopPropagation: Ngăn chặn sự kiện nổi bọt
document.querySelector("div").onclick = function (e) {
  console.log("DIV");
};

document.querySelector("button").onclick = function (e) {
  e.stopPropagation();
  console.log("click me");
};
