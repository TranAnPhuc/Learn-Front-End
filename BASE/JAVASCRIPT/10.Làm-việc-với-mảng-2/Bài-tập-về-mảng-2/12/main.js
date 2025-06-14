const students = [
  { id: 101, name: "An", score: 85 },
  { id: 102, name: "Bình", score: 42 },
  { id: 103, name: "Chi", score: 77 },
  { id: 104, name: "Dũng", score: 30 },
  { id: 105, name: "Hà", score: 91 },
];

const renderStudents = students.map((student) => {
  return {
    id: student.id,
    name: student.name,
    score: student.score,
    grade:
      student.score >= 80
        ? "Giỏi"
        : student.score >= 65 && student.score <= 79
        ? "Khá"
        : student.score >= 50 && student.score <= 64
        ? "Trung bình"
        : "Yếu",
    passed: student.score >= 50 ? true : false,
  };
});

function showStudents(group) {
  group.forEach((student) => {
    console.log(
      `ID: ${student.id} - Tên: ${student.name} - Điểm: ${
        student.score
      } - Xếp loại: ${student.grade} - ${
        student.passed ? "Đã qua môn" : "Chưa qua môn"
      }`
    );
  });
}

showStudents(renderStudents);
