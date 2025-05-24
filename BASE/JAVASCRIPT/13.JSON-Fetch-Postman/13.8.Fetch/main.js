// Fetch
// API (URL) là viết tắt của Application Programming Interface — tạm dịch là Giao diện lập trình ứng dụng.
// Đây là một tập hợp các quy tắc và giao thức cho phép các phần mềm hoặc hệ thống giao tiếp với nhau.

var postApi = "https://jsonplaceholder.typicode.com/posts";

// fetch được thiết lập bằng Promise nên nó cũng trả về resolve và reject,
// nên muốn bắt được chúng thì ta chỉ cần .then() và .catch() ở phía sau là được.
fetch(postApi)
  // Lúc này .then() ở đây sẽ trả về 1 chuỗi dạng JSON,
  // khi đó chúng ta chỉ cần dùng phương thức json() để chuyển đổi từ JSON sang Javascript type (tương tự dùng JSON.parse)
  .then(function (response) {
    return response.json();
  })
  // Sử dụng Promise chaining để bắt lấy JSON đã chuyển đổi ở trên
  .then(function (posts) {
    console.log(posts);
  })
  .catch(function (err) {
    console.log("Có lỗi");
  });
