// Promise methods (resolve, reject, all)

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

// Trong quá trình thực hiện những công việc, nếu giữa đường nó trả về 1 Promise bị reject
// thì nó sẽ không chạy xuống những chỗ còn lại và sẽ loạt vào .catch
sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return new Promise(function (resolve, reject) {
      reject();
    });
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  })
  .catch(function () {
    console.log("Có lỗi");
  });

// 1. Promise.resolve (Luôn luôn trả về 1 promise thành công,
// trừ khi trong .then return 1 promise bị reject mới loạt ra .catch)
var promiseResolve = Promise.resolve("Hoàn thành");

promiseResolve.then(function (result) {
  console.log("Kết quả:" + result);
});

// 2. Promise.reject (Luôn luôn trả về 1 promise thất bại)
var promiseReject = Promise.reject("Thất bại");

promiseReject.catch(function (error) {
  console.log("Kết quả:", error);
});

// 3. Promise.all (Dùng để chạy song song nhiều promise (không phụ thuộc nhau) và chờ tất cả cùng hoàn thành.
// Nó nhận vào 1 mảng)
var promise1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([1]);
  }, 2000);
});

var promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 5000);
});

Promise.all([promise1, promise2]).then(function (result) {
  var result1 = result[0];
  var result2 = result[1];
  console.log(result1.concat(result2));
});
