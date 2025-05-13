// Callback? (hay callback function) là một khái niệm trong lập trình, đặc biệt phổ biến trong JavaScript.
// Nó là một hàm được truyền như một đối số cho một hàm khác và sẽ được gọi lại (callback) sau khi một công việc nào đó hoàn thành.

// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

// Bước 2:Khi gọi thằng param ở trong khối lệnh chẳng khác gì mình đang gọi thằng myCallback
// chỉ cần truyền đối số vào để thằng function myCallback nhận
function myFunction(param) {
  param(123);
}

// Bước 3:Bây giờ myCallback có được đối số của param là 123 sẽ truyền cho thằng value và thực hiện
// khối lệnh trong hàm như bình thường
function myCallback(value) {
  console.log("Value:", value);
}

// Bước 1:Khi gọi myFunction() truyền cho nó 1 cái đối số là myCallback tức là đang gọi 1 callback.
// Đối số này sẽ là tham số của myFunction tức là param
myFunction(myCallback);
