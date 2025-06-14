const students = [
  { id: 101, name: "An", score: 85 },
  { id: 102, name: "Bình", score: 42 },
  { id: 103, name: "Chi", score: 77 },
  { id: 104, name: "Dũng", score: 30 },
  { id: 105, name: "Hà", score: 91 },
  { id: 106, name: "Lâm", score: 65 },
  { id: 107, name: "Long", score: 50 },
  { id: 108, name: "Minh", score: 71 },
  { id: 109, name: "Mai", score: 92 },
];

const studentsFirstLetter = students.reduce((acc, currentValue) => {
  const key = currentValue.name[0].toUpperCase();
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(currentValue);

  return acc;
}, {});

console.log(studentsFirstLetter);
