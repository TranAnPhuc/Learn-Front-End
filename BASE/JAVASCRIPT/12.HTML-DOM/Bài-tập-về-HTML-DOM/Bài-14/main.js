const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
function addItem() {
  const inputElement = $("#content");
  const btnElement = $("#btn");
  const listElement = $("#list");
  btnElement.onclick = function () {
    const value = inputElement.value.trim();
    if (value === "") {
      alert("Vui lòng nhập nội dung");
      return;
    }
    const liElement = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Xóa";
    liElement.textContent = value;
    liElement.appendChild(removeBtn);
    removeBtn.onclick = function () {
      liElement.remove();
    };
    listElement.appendChild(liElement);
  };
}

addItem();
