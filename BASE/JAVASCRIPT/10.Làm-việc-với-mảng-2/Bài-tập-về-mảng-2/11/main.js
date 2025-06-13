/*
Yêu cầu:
Lọc ra danh sách học viên chưa làm bài tập.

Lọc ra danh sách học viên bị điểm liệt (score < 40).

Lọc ra danh sách học viên cần hỗ trợ khẩn cấp:

Chưa làm bài tập và điểm dưới 50.

In ra danh sách tên và ID của từng nhóm học viên trên.
*/
const students = [
  { id: 101, name: "An", score: 85, homeworkDone: true },
  { id: 102, name: "Bình", score: 42, homeworkDone: true },
  { id: 103, name: "Chi", score: 77, homeworkDone: false },
  { id: 104, name: "Dũng", score: 30, homeworkDone: true },
  { id: 105, name: "Hà", score: 91, homeworkDone: false },
  { id: 106, name: "Lâm", score: 35, homeworkDone: false },
];

const studentsNotHomework = students.filter((student) => !student.homeworkDone);
const studentsNotPassed = students.filter((student) => student.score < 40);
const studentsSupport = students.filter(
  (student) => !student.homeworkDone && student.score < 40
);

if (studentsNotHomework.length > 0) {
  console.log("Học viên chưa làm bài tập:");
  studentsNotHomework.forEach((student) =>
    console.log(`- ${student.name} (ID: ${student.id})`)
  );
}

if (studentsNotPassed.length > 0) {
  console.log("Học viên bị điểm liệt:");
  studentsNotPassed.forEach((student) =>
    console.log(`- ${student.name} (ID: ${student.id})`)
  );
}

if (studentsSupport.length > 0) {
  console.log("Học viên cần hỗ trợ:");
  studentsSupport.forEach((student) =>
    console.log(`- ${student.name} (ID: ${student.id})`)
  );
}
