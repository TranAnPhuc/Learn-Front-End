/*
Yêu cầu:
1.Tìm học viên đầu tiên chưa làm bài tập.
2.Tìm học viên đầu tiên bị điểm liệt (điểm dưới 40).
3.In ra thông tin của học viên tìm được nếu có, gồm:
- ID
- Tên
- Điểm
- Tình trạng làm bài tập
*/
const students = [
  { id: 101, name: "An", score: 85, homeworkDone: true },
  { id: 102, name: "Bình", score: 42, homeworkDone: true },
  { id: 103, name: "Chi", score: 77, homeworkDone: false },
  { id: 104, name: "Dũng", score: 30, homeworkDone: true },
  { id: 105, name: "Hà", score: 91, homeworkDone: false },
];

const findStudentsNotHomework = students.find(
  (student) => !student.homeworkDone
);

const findStudentsNotPassed = students.find((student) => student.score < 40);

if (findStudentsNotHomework) {
  console.log("📌 Học viên đầu tiên chưa làm bài tập:");
  console.log(
    `Tên: ${findStudentsNotHomework.name}, ID: ${
      findStudentsNotHomework.id
    }, Điểm: ${findStudentsNotHomework.score}, Đã làm bài: ${
      findStudentsNotHomework.homeworkDone ? "✅" : "❌"
    }`
  );
}

if (findStudentsNotPassed) {
  console.log("📌 Học viên đầu tiên bị điểm liệt:");
  console.log(
    `Tên: ${findStudentsNotPassed.name}, ID: ${
      findStudentsNotPassed.id
    }, Điểm: ${findStudentsNotPassed.score}, Đã làm bài: ${
      findStudentsNotPassed.homeworkDone ? "✅" : "❌"
    }`
  );
}
