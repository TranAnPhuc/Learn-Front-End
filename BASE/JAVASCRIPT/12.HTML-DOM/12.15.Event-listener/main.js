// Event listener
// 1. Xử lý nhiều việc khi event xảy ra
// 2. Lắng nghe / hủy bỏ lắng nghe

var btnElement = document.querySelector("button");

btnElement.addEventListener("click", function () {
  console.log("Event 1", Math.random());
});

btnElement.addEventListener("click", function () {
  console.log("Event 2", Math.random());
});

function viec3() {
  console.log("Event 3", Math.random());
}

btnElement.addEventListener("click", viec3);

setTimeout(function () {
  btnElement.removeEventListener("click", viec3);
}, 3000);
