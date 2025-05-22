// Promise (concept)

// Luồng hoạt động của Promise
// Bước 1: new Promise(...) được gọi
// - executor function bắt đầu chạy ngay lập tức.
// - Trong đó bạn xử lý công việc bất đồng bộ (như setTimeout, gọi API...)
// Bước 2: Gọi resolve() hoặc reject()
// - Nếu công việc thành công, gọi resolve(kết_quả)
// - Nếu lỗi, gọi reject(lỗi)
// Bước 3: .then() nhận kết quả (nếu resolved)
// .catch() nhận lỗi (nếu rejected)

/*
Khái niệm Promise: là 1 khái niệm sinh ra để xử lý thao tác bất đồng bộ (async). 
Trước đó ta thường sử dụng callback, nhưng hay xảy ra tình trạng callback hell (khó nhìn và khó hiểu) 
=> ES6 sinh ra Promise để giải quyết callback hell.
Để tạo ra 1 Promise: dùng từ khoá new Promise() và trong constructor của nó ta sẽ truyền vào 1 executor function. 
Trong này nhận 2 tham số dạng hàm: 
    resolve (khi thành công) và reject (khi thất bại). 
    Khi sử dụng Promise: sử dụng các phương thức .then() hoặc .catch() đều nhận các callback function. 
    Khi promise được resolve thì sẽ lọt vào then, reject thì lọt vào catch
3 trạng thái của Promise: 
    - Pending (khi không resolve hay reject => memory leak) 
    - Fulfilled (đã resolve) 
    - Rejected (đã reject)
*/

var promise = new Promise(
  // Executor
  function (resolve, reject) {
    // Logic
    // Thành công: resolve()
    // Thất bại: reject()

    // Fake call API
    resolve([
      {
        id: 1,
        name: "Javascript",
      },
    ]);
  }
);

promise
  .then(function (courses) {
    console.log(courses);
  })
  .catch(function () {
    console.log("Failure");
  })
  .finally(function () {
    console.log("Done");
  });
