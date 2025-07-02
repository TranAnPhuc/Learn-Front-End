const score = parseFloat(prompt("Mời nhập điểm trung bình:"));

if (score >= 8 && score <= 10) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else if (score < 5) {
  console.log("Yếu");
} else {
  console.log("Vui lòng nhập điểm");
}
