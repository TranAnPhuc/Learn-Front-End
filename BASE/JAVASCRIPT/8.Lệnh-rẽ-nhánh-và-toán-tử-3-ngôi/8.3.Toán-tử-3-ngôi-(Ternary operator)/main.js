// Toán tử 3 ngôi (Ternary operator)
var course = {
  name: "Javascript",
  coin: 280,
};

// vế thứ nhất là điều kiện, vế thứ 2 là kết quả nếu điều kiện, vế 3 nếu điều kiện không đúng sẽ lấy
var result = course.coin > 0 ? `${course.coin} Coins` : "Miễn phí";

console.log(result);
