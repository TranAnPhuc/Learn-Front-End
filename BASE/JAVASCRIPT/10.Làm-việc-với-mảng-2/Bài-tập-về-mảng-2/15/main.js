const students = [
  { id: 101, name: "An", score: 85 },
  { id: 102, name: "Bình", score: 42 },
  { id: 103, name: "Chi", score: 77 },
  { id: 104, name: "Dũng", score: 30 },
  { id: 105, name: "Hà", score: 91 },
  { id: 106, name: "Lâm", score: 65 },
];

const countGradeStudents = students.reduce(
  (acc, currentValue) => {
    if (currentValue.score >= 80) {
      acc.Gioi++;
    } else if (currentValue.score >= 65 && currentValue.score <= 79) {
      acc.Kha++;
    } else if (currentValue.score >= 50 && currentValue.score <= 64) {
      acc.TrungBinh++;
    } else {
      acc.Yeu++;
    }
    return acc;
  },
  {
    Gioi: 0,
    Kha: 0,
    TrungBinh: 0,
    Yeu: 0,
  }
);

console.log("Danh sách số lượng học viên theo học lực:");
console.log(countGradeStudents);
