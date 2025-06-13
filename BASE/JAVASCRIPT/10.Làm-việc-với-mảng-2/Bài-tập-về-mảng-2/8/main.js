/*
 Yêu cầu:
Kiểm tra xem có học viên:
- Chưa làm bài tập
- Bị điểm liệt (score < 40)
Nếu có:
- In ra danh sách tên và email học viên chưa làm bài tập
- In ra danh sách tên và email học viên bị điểm liệt
- In thông báo tổng quan giống như trước:
- Có hay không có học viên vi phạm
*/
const students = [
  { name: "An", score: 75, homeworkDone: true, email: "an@example.com" },
  { name: "Bình", score: 50, homeworkDone: true, email: "binh@example.com" },
  { name: "Chi", score: 30, homeworkDone: false, email: "chi@example.com" },
  { name: "Dũng", score: 90, homeworkDone: true, email: "dung@example.com" },
  { name: "Hà", score: 20, homeworkDone: false, email: "ha@example.com" },
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

const renderStudentsNotHomework = students.filter((student) => {
  return !student.homeworkDone;
});

const renderStudentsScore = students.filter((student) => {
  return student.score < 40;
});

if (renderStudentsNotHomework.length > 0) {
  console.log("Danh sách tên và email học viên chưa làm bài tập:");
  renderStudentsNotHomework.forEach((student) => {
    console.log(`- ${student.name} có email là ${student.email} `);
  });
}

if (renderStudentsScore.length > 0) {
  console.log("Danh sách tên và email học viên bị điểm liệt:");
  renderStudentsScore.forEach((student) => {
    console.log(`- ${student.name} có email là ${student.email}`);
  });
}
