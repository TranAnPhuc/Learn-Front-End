// Đệ quy
/*
Đệ quy (recursion) trong JavaScript là một kỹ thuật trong đó một hàm tự gọi lại chính nó để giải quyết một bài toán. 
Kỹ thuật này thường được sử dụng để giải quyết các bài toán có thể chia nhỏ thành các bài toán con tương tự.
Khi đệ quy đến điểm dừng sẽ quay ngược lại trả kết quả.

Lưu ý:
1.Phải xác định điểm dừng (Giúp hàm biết khi nào nên dừng lại để không gọi mãi và gây lỗi)
2.Gọi lại chính nó (Hàm tự gọi lại với dữ liệu nhỏ hơn để tiến dần tới điểm dừng)
*/

// Đếm ngược
function countDown(num) {
  if (num > 0) {
    console.log(num);
    return countDown(num - 1);
  }
  return num;
}

countDown(10);

// Tính tổng từ 1 đến n
function sumTo(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumTo(num - 1);
}

console.log(sumTo(3));

// Tính giai thừa
function fibonacci(num) {
  if (num === 1) {
    return 1;
  }
  return num * fibonacci(num - 1);
}

console.log(fibonacci(5));
