/*
Tạo Danh Sách Tên Sinh Viên
Yêu cầu:

Nhập tên sinh viên từ input

Nhấn nút Thêm sẽ hiển thị tên vào danh sách bên dưới
*/
var inputElement = document.querySelector("#input-name");
var buttonElement = document.querySelector("#submit-name");
var ulElement = document.querySelector("#list-name");

function addUser() {
  buttonElement.addEventListener("click", addName);

  function addName() {
    var valueInput = inputElement.value.trim();
    if (valueInput === "") {
      return alert("Vui lòng không để trống");
    }
    var li = document.createElement("li");
    li.classList.add("item");
    li.innerText = valueInput;
    ulElement.appendChild(li);
    inputElement.value = "";
  }

  inputElement.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addName();
    }
  });
}

addUser();
