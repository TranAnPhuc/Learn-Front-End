const students = [
  { id: 101, name: "An", score: 85 },
  { id: 102, name: "Bình", score: 42 },
  { id: 103, name: "Chi", score: 77 },
  { id: 104, name: "Dũng", score: 30 },
  { id: 105, name: "Hà", score: 91 },
  { id: 106, name: "Lâm", score: 65 },
];

const gradeStudents = students.reduce(
  (student, currentValue) => {
    if (currentValue.score >= 80) {
      student.Gioi.push(currentValue.name);
    } else if (currentValue.score >= 65 && currentValue.score <= 79) {
      student.Kha.push(currentValue.name);
    } else if (currentValue.score >= 50 && currentValue.score <= 64) {
      student.TrungBinh.push(currentValue.name);
    } else {
      student.Yeu.push(currentValue.name);
    }
    return student;
  },
  {
    Gioi: [],
    Kha: [],
    TrungBinh: [],
    Yeu: [],
  }
);

console.log(gradeStudents);
