/*
 Bài tập DOM #3: Tạo danh sách việc cần làm (To-do List đơn giản)
✅ Yêu cầu:
Tạo giao diện gồm:

Một ô nhập văn bản (input).

Một nút "Thêm".

Một danh sách <ul> để hiển thị các công việc.

Khi người dùng nhập nội dung vào ô input và bấm "Thêm":

Tạo một <li> mới chứa nội dung đó.

Thêm phần tử <li> vào danh sách <ul>.

Xóa nội dung trong ô input.
*/

//Lấy phần tử HTML theo id
var inputElement = document.querySelector("#input-todo");
var buttonElement = document.querySelector("#submit");
var listToDoElement = document.querySelector("#todo-list");

// Hàm thêm công việc
function todoList() {
  // Gán sự kiện click cho button
  buttonElement.addEventListener("click", addTodo);
  // Hàm lắng nghe sự kiện được xảy ra
  function addTodo() {
    // Gán giá trị người dùng nhập vào biến
    var valueInput = inputElement.value.trim();
    // Kiểm tra đầu vào
    if (valueInput === "") {
      return alert("Vui lòng nhập");
    }
    // Tạo ra element li
    var li = document.createElement("li");
    // Thêm class vào thẻ li
    li.classList.add("todo-item");
    // Gán biến người dùng nhập vào trong thẻ li
    li.innerText = valueInput;
    // Tạo ra element button
    var deleteTodo = document.createElement("button");
    // Thêm class vào button
    deleteTodo.classList.add("delete-todo");
    // Thêm text cho button
    deleteTodo.innerText = "Xóa";
    // Gán sự kiện click cho button xóa
    deleteTodo.addEventListener("click", function () {
      li.remove();
    });
    // Thêm button vào trong thẻ li
    li.appendChild(deleteTodo);
    // Thêm biến li vào trong biến listToDoElement
    listToDoElement.appendChild(li);
    // Xóa nội dung nhập vào sau khi nhấn button
    inputElement.value = "";
  }
  // Thêm sự kiện keydown khi người dùng nhập liệu nhấn "Enter" để thêm todo
  inputElement.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addTodo();
    }
  });
}

todoList();
