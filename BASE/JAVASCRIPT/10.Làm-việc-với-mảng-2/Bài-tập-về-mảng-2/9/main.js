/*
Yêu cầu:
1.Viết một đoạn code để tìm học viên theo tên nhập vào (ví dụ: "Chi").
2.Nếu tìm thấy:
- In ra thông tin học viên gồm id, name, score
3.Nếu không tìm thấy:
- In ra thông báo: "Không tìm thấy học viên có tên là <tên>."
*/
const students = [
  { id: 101, name: "An", score: 85 },
  { id: 102, name: "Bình", score: 42 },
  { id: 103, name: "Chi", score: 77 },
  { id: 104, name: "Dũng", score: 30 },
  { id: 105, name: "Hà", score: 91 },
];

const promptFindName = prompt().toLowerCase();

const findNameStudents = students.find((student) => {
  return promptFindName === student.name.toLowerCase();
});

if (findNameStudents) {
  console.log("Tìm thấy học viên:");
  console.log(`ID: ${findNameStudents.id}`);
  console.log(`Tên: ${findNameStudents.name}`);
  console.log(`Điểm: ${findNameStudents.score}`);
} else {
  console.log(`Không tìm thấy học viên có tên là ${promptFindName}`);
}
