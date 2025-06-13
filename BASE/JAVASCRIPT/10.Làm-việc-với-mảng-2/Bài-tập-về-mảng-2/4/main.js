/*
Đề bài:
Bạn có danh sách học viên với thông tin:
- name: tên học viên
- score: điểm kiểm tra (0–100)
- passed: chưa có — bạn cần thêm thuộc tính này (true/false nếu điểm ≥ 50)
Yêu cầu:
Dùng forEach() để:
- In ra "Học viên <tên> đạt <điểm> điểm."
- Thêm thuộc tính passed cho từng học viên (true nếu score >= 50, ngược lại false)
- Sau khi duyệt xong, in ra danh sách học viên mới (có thêm passed)
*/
const students = [
  { name: "An", score: 85 },
  { name: "Bình", score: 42 },
  { name: "Chi", score: 77 },
  { name: "Dũng", score: 30 },
  { name: "Hà", score: 91 },
];

students.forEach((student) => {
  console.log(`Học viên ${student.name} đạt ${student.score} điểm.`);
  student.passed = student.score >= 50 ? true : false;
});

console.log("Danh sách học viên sau khi cập nhật:");
console.log(students);
