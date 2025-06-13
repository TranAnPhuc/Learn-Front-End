/*
Yêu cầu:
1.Dùng .every() để kiểm tra:
- Tất cả học viên có làm bài tập không?
2.Dùng .filter() để lấy ra danh sách học viên:
- Chưa làm bài tập
- Không đạt điểm (score < 50)
3.In ra:
- Thông báo chung (tùy theo kết quả every)
- Danh sách học viên chưa làm bài
- Danh sách học viên không đạt điểm
*/
const students = [
  { name: "An", homeworkDone: true, score: 85 },
  { name: "Bình", homeworkDone: true, score: 70 },
  { name: "Chi", homeworkDone: false, score: 90 },
  { name: "Dũng", homeworkDone: false, score: 45 },
  { name: "Hà", homeworkDone: true, score: 92 },
];

const allStudentsDone = students.every((student) => {
  return student.homeworkDone;
});

if (allStudentsDone) {
  console.log("Tất cả học viên đã làm bài tập");
} else {
  console.log("Có học viên chưa làm bài tập");
}

const studentsNotHomeworkDone = students.filter((student) => {
  return !student.homeworkDone;
});

const studentsNotPassed = students.filter((student) => {
  return student.score < 50;
});

if (studentsNotHomeworkDone.length > 0) {
  console.log(`Học viên chưa làm bài tập:`);
  studentsNotHomeworkDone.forEach((student) => {
    console.log(`- ${student.name}`);
  });
  console.log("");
}

if (studentsNotPassed.length > 0) {
  console.log("Học viên không đạt điểm:");
  studentsNotPassed.forEach((student) => {
    console.log(`- ${student.name}`);
  });
  console.log("");
}
