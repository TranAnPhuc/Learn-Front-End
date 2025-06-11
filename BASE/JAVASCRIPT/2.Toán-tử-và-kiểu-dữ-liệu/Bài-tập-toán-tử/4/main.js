let num = 5;

let kiemTraDiem =
  num >= 8.5
    ? "Giỏi"
    : num >= 7 && num < 8.4
    ? "Khá"
    : num >= 5 && num < 6.9
    ? "Trung bình"
    : "Yếu";

console.log(kiemTraDiem);
