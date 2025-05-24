// Promise (chain)
var promise = new Promise(
  // Executor
  function (resolve, reject) {
    // Logic
    // Thành công: resolve()
    // Thất bại: reject()

    // Fake call API
    resolve();
  }
);

/*
Trong JavaScript, Promise chaining (chuỗi Promise) là một kỹ thuật dùng để xử lý các thao tác bất đồng bộ tuần tự, 
bằng cách gọi .then() liên tiếp nhau. Khi một .then() trả về một giá trị (hoặc một Promise), giá trị đó sẽ được truyền tiếp cho .then() kế tiếp.

- Lưu ý: Khi không return 1 promise sẽ chạy tới .then() tiếp theo
*/

promise
  .then(function () {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve([1, 2, 3]);
      }, 3000);
    });
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function () {
    console.log("Failure");
  })
  .finally(function () {
    console.log("Done");
  });

// Giải quyết bài toán in ra 1,2,3 sau mỗi 1 giây bằng Promise
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return sleep(1000);
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  });
