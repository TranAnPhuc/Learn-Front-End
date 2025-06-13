/*
Yêu cầu:
Dùng .every() để kiểm tra xem tất cả học viên có làm bài tập không.
In ra thông báo:
- Nếu tất cả đã làm → "Tất cả học viên đã hoàn thành bài tập ✅"
- Nếu có người chưa làm → "Có học viên chưa hoàn thành bài tập ❌"
*/
const students = [
  { name: "An", homeworkDone: true },
  { name: "Bình", homeworkDone: true },
  { name: "Chi", homeworkDone: true },
  { name: "Dũng", homeworkDone: false },
  { name: "Hà", homeworkDone: true },
];

const checkStudents = students.every((student) => {
  return student.homeworkDone;
});

switch (checkStudents) {
  case true:
    console.log("Tất cả học viên đã hoàn thành bài tập");
    break;
  case false:
    console.log("Có học viên chưa hoàn thành bài tập");
    break;
}
