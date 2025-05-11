// Hiểu hơn về câu lệnh điều kiện và phép so sánh

var a = 1;
var b = 2;

// Cách hoạt động của toán tử && là sẽ kiểm tra từ trái sang phải nếu phát hiện
// có giá trị nằm trong các trị khi chuyển đổi sang boolean là false sẽ lấy và gán vào biến.
// Không kiểm tra các giá trị còn lại. Còn không phải là false thì sẽ lấy giá trị cuối cùng.
var resultAnd = "A" && "B" && "C" && 0;

console.log("Kết quả: ", resultAnd);
if (resultAnd) {
  console.log("Điều kiện đúng");
} else {
  console.log("Điều kiện sai");
}

// Cách hoạt động của toán tử || là sẽ kiểm tra từ trái sang phải nếu phát hiện
// giá trị nào không phải là false thì sẽ lấy và gán vào biến không tiếp tục kiểm tra
// các giá trị còn lại.
var resultOr = "A" || "B" || "C" || "D";

console.log("Kết quả: ", resultOr);
if (resultOr) {
  console.log("Điều kiện đúng");
} else {
  console.log("Điều kiện sai");
}
