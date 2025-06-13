/*
Yêu cầu:
Dùng .some() để kiểm tra:
- Có học viên nào chưa làm bài tập không?
- Có học viên nào bị điểm liệt (score dưới 40) không?
In thông báo phù hợp:
- Nếu có học viên chưa làm bài: "❗ Cảnh báo: Có học viên chưa làm bài tập"
- Nếu có học viên bị điểm liệt: "⚠️ Cảnh báo: Có học viên bị điểm liệt"
*/
const students = [
  { name: "An", score: 75, homeworkDone: true },
  { name: "Bình", score: 50, homeworkDone: true },
  { name: "Chi", score: 30, homeworkDone: false },
  { name: "Dũng", score: 90, homeworkDone: true },
  { name: "Hà", score: 20, homeworkDone: false },
];

const studentsNotHomework = students.some((student) => {
  return !student.homeworkDone;
});

const studentsScore = students.some((student) => {
  return student.score < 40;
});

if (studentsNotHomework) {
  console.log("❗ Cảnh báo: Có học viên chưa làm bài tập");
} else {
  console.log("Tất cả học viên đã hoàn thành bài tập.");
}

if (studentsScore) {
  console.log("⚠️ Cảnh báo: Có học viên bị điểm liệt");
} else {
  console.log("Tất cả học viên không bị điểm liệt");
}
