// IIFE (Immediately Invoked Function Expression - Biểu thức hàm được gọi ngay lập tức )

// 1. IIFE trong như thế nào?
(function () {
  console.log("Now");
})();

// 2. Dùng dấu ; trước IIFE (Nếu không có dấu ; trước IIFE sẽ báo lỗi)
// const name = "Phúc"

// (function () {
//   console.log("Hello");
// })();

// 3. IIFE là hàm "private"
(function myName() {
  console.log("Me!");
})();

//myName(); // Sẽ trả về lỗi vì tính chất "private" của IIFE

// Tuy ngoài phạm vi không truy cập được nhưng trong phạm vi của nó vẫn truy cập được
let i = 0;
(function myCount() {
  i++;
  console.log(i);
  if (i < 10) myCount();
})();

// 4. Sử dụng IIFE khi nào?
// => Tránh xung đột biến toàn cục
// => Đảm bảo tính riêng tư

// 5. Cách tạo ra 1 IIFE

// Cách 1: Mặc định
(function () {})();

// Cách 2: Arrow Function
(() => {})();

// Cách 3: Thêm toán tử phía trước
!(function () {})();

// 6. Ví dụ sử dụng IIFE
const app = (function () {
  const cars = [];

  return {
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    delete(index) {
      cars.splice(index, 1);
    },
  };
})();
