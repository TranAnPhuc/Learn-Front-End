const students = [
  { id: 101, name: "An", score: 85 },
  { id: 102, name: "Bình", score: 42 },
  { id: 103, name: "Chi", score: 77 },
  { id: 104, name: "Dũng", score: 30 },
  { id: 105, name: "Hà", score: 91 },
  { id: 106, name: "Lâm", score: 65 },
];

const statisticalStudents = students.reduce(
  (student, currentStudent) => {
    student.totalScore += currentStudent.score;
    if (currentStudent.score >= 50) {
      student.passedCount++;
    }
    return student;
  },
  { totalScore: 0, passedCount: 0 }
);

statisticalStudents.averageScore = Math.round(
  statisticalStudents.totalScore / students.length
);
console.log("Kết quả thống kê:");
console.log(statisticalStudents);
